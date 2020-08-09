<template>
    <div>
        <div class="flex flex-col sm:flex-row">
            <div class="sm:w-1/4 text-center py-8">
                <div class="border-r">
                    <div>
                        <div class="text-gray-900 mb-2">
                            <span class="text-5xl">
                                <ICountUp
                                    :delay="delay"
                                    :endVal="data.TotalConfirmed"
                                    class="font-bold"
                                />
                            </span>
                        </div>
                        <div
                            class="text-gray-600 text tracking-wide uppercase font-semibold"
                        >
                            confirmed cases
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:w-1/4 text-center py-8">
                <div class="border-r">
                    <div>
                        <div class="text-gray-900 mb-2">
                            <span class="text-5xl">
                                <ICountUp
                                    :delay="delay"
                                    :endVal="data.TotalDeaths"
                                    class="font-bold"
                                />
                            </span>
                        </div>
                        <div
                            class="text-gray-600 text tracking-wide uppercase font-semibold"
                        >
                            confirmed deaths
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:w-1/4 text-center py-8">
                <div class="border-r">
                    <div>
                        <div class="text-gray-900 mb-2">
                            <span class="text-5xl">
                                <ICountUp
                                    :delay="delay"
                                    :endVal="data.TotalRecovered"
                                    class="font-bold"
                                />
                            </span>
                        </div>
                        <div
                            class="text-gray-600 text tracking-wide uppercase font-semibold"
                        >
                            total recovered
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:w-1/4 text-center py-8">
                <div class="border-r">
                    <div>
                        <div class="text-gray-900 mb-2">
                            <span class="text-5xl">
                                <ICountUp
                                    :delay="delay"
                                    :endVal="data.NewRecovered"
                                    class="font-bold"
                                />
                            </span>
                        </div>
                        <div
                            class="text-gray-600 text tracking-wide uppercase font-semibold"
                        >
                            newley recovered cases
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ICountUp from 'vue-countup-v2';

    export default {
        name: 'GlobalData',
        components: {
            ICountUp,
        },
        data() {
            return {
                data: null,
                delay: 1000,
            };
        },
        mounted() {
            axios
                .get('https://api.covid19api.com/summary')
                .then((response) => (this.data = response.data.Global));
        },
    };
</script>

<style scoped></style>
