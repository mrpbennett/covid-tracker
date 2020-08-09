<template>
    <div id="app">
        <nav
            class="flex items-center justify-between flex-wrap bg-gray-800 p-6"
        >
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">
                    C
                    <span role="img" aria-label="virus">
                        🦠
                    </span>
                    VID-19 Tracker
                </span>
            </div>
        </nav>
        <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
            <div
                class="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mx-4 sm:mx-0 mb-6"
            >
                <div class="border-b px-6 py-4">
                    <p class="text-blue-800">
                        Current Global COVID-19 Data
                    </p>
                </div>
                <div>
                    <v-global />
                </div>
            </div>
        </div>

        <v-country />
        <v-chart />
    </div>
</template>

<script>
    import GlobalData from './components/GlobalData.vue';
    import CountryData from './components/CountryData.vue';
    import ChartData from './components/ChartData.vue';

    export default {
        name: 'App',
        components: {
            'v-global': GlobalData,
            'v-country': CountryData,
            'v-chart': ChartData,
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
