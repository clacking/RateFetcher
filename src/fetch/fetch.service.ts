import { Injectable, BadRequestException } from '@nestjs/common';
import fetch from 'node-fetch';
import { ShopifySite } from './interface/rate.interface';

@Injectable()
export class FetchService {
    async fetchRandomVariant(url: string): Promise<number> {
        try {
            const product = await fetch(`${url}.json`);
            const json = await product.json();
            const variant = json.product.variants[0].id;
            return variant;
        } catch {
            throw new BadRequestException('Not shopify site or Cannot fetch rate.');
        }
    }

    async fetchRate(site: ShopifySite): Promise<string> {
        const orig = new URL(site.url);
        const variant = site.variant || await this.fetchRandomVariant(site.url);
        const ATC = await fetch(`${orig.origin}/cart/add.js?id=${variant}&quantity=1`);
        const cookie = ATC.headers.get('set-cookie');
        const rate = await fetch(
            `${orig.origin}/cart/shipping_rates.json?shipping_address[zip]=${site.zip}&shipping_address[country]=${site.country}&shipping_address[province]=${site.province}`,
            { headers: { cookie } });
        const json = await rate.json();
        return json;
    }
}
