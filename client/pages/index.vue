<template>
  <section class="section">
    <div class="is-mobile has-text-centered">
      <h3 class="title is-3">Rate Fetcher</h3>
        <b-field label="Product URL or Site URL">
          <b-input v-model="url"></b-input>
        </b-field>
        <div class="columns">
          <b-field class="column" label="Country">
              <b-select placeholder="Select a contry" v-model='country'>
                <option
                  v-for="(option, k) in countries"
                  :value="option"
                  :key="k">
                  {{ option }}
                </option>
              </b-select>
          </b-field>
          <b-field class="column" label="Zip Number">
            <b-input v-model="zip"></b-input>
          </b-field>
          <b-field class="column" label="Province/State">
            <b-input v-model="province"></b-input>
          </b-field>
        </div>
        <b-button @click="getRate">Check Rate</b-button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Ratefetcher',
  data() {
    return {
      url: undefined,
      variant: undefined,
      country: undefined,
      zip: undefined,
      province: undefined,
    }
  },
  async asyncData({ $axios }) {
    try {
      const data = await $axios.$get('https://gist.githubusercontent.com/reggi/4437865/raw/b5b1be959e94e255588c337fb1abf1f77d8c8d7d/Shopify%2520Countries')
      return { contryList: data }
    } catch {
      error('failed to fetch data.')
    }
  },
  computed: {
    countries() {
      return this.contryList.split('\n')
    }
  },
  methods: {
    async getRate() {
      const data = await this.$axios.$post('/api/fetch')
    }
  }
}
</script>
