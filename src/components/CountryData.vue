<template>
    <div class="container mx-auto mb-12 px-4">
        <table class="table-fixed rounded-lg shadow overflow-hidden">
            <thead class="bg-white">
                <tr>
                    <th class="w-1/3 px-4 py-2">Country Name</th>
                    <th class="w-1/3 px-4 py-2">Confirmed</th>
                    <th class="w-1/3 px-4 py-2">Deaths</th>
                    <th class="w-1/3 px-4 py-2">Recovered</th>
                    <th class="w-full px-4 py-2">Updated</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr v-for="(ci, i) in totalCases" :key="i">
                    <td class="border px-4 py-2">
                        {{ ci.Country }}
                    </td>
                    <td class="border px-4 py-2 text-center">
                        {{ ci.TotalConfirmed | formatNumber }}
                    </td>
                    <td class="border px-4 py-2 text-center">
                        {{ ci.TotalDeaths | formatNumber }}
                    </td>
                    <td class="border px-4 py-2 text-center">
                        {{ ci.TotalRecovered | formatNumber }}
                    </td>
                    <td class="border px-4 py-2 text-center">
                        {{ ci.Date | formatDate }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                data: [],
            };
        },
        computed: {
            totalCases: function() {
                const sorted = [...this.data];
                sorted.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
                return sorted;
            },
        },
        mounted() {
            axios
                .get('https://api.covid19api.com/summary')
                .then((response) => (this.data = response.data.Countries));
        },
    };
</script>
