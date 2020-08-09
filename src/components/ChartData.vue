<template>
    <div class="container mx-auto px-4">
        <bar-chart :chartData="this.deaths"></bar-chart>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Bar } from 'vue-chartjs';

    export default {
        extends: Bar,

        data() {
            return {
                data: {
                    chart: null,
                    countries: [],
                    deaths: [],
                    loading: false,
                },
            };
        },
        mounted() {
            // getData() {
            //     this.loading = true;

            //     if (this.chart != null) {
            //         this.chart.destroy();
            //     }

            axios.get('https://api.covid19api.com/summary').then((response) => {
                this.countries = response.data.Countries.map((c) => {
                    return c.Country;
                });

                this.deaths = response.data.Countries.map((d) => {
                    return d.TotalDeaths;
                });
            });
            // },

            this.renderChart({
                labels: this.countries,
                datasets: [
                    {
                        label: 'something',
                        data: this.deaths,
                    },
                ],
            });
        },
    };
</script>
