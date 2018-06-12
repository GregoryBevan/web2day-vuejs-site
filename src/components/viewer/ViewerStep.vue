<template>
    <b-container fluid>
        <b-row>
            <b-col class="mt-4">
                <b-img :src="getImageStepPath" center fluid alt="Responsive image" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['currentStep'],
    computed: {
        getImageStepPath() {
            return `steps/vue-js-step${this.currentStep}.svg`
        }
    }
};
</script>

<style>
img {
    background-color: aliceblue;
}
</style>
