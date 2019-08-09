import { Controller, Post, Req, Body } from '@nestjs/common';
import { FetchService } from './fetch.service';
import { FetchDto } from './interface/fetch.dto';

@Controller('fetch')
export class FetchController {
    constructor(
        private readonly fetchService: FetchService,
    ) {}

    @Post()
    async fetchProduct(@Body() fetchDto: FetchDto) {
        const rate = await this.fetchService.fetchRate(fetchDto);
        return rate;
    }
}
