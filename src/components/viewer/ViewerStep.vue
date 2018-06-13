<template>
    <b-container fluid>
        <b-row >
            <b-col class="mt-3 d-flex justify-content-center">
                <b-card style="max-width: 20rem; min-height: 32rem" class="mb-2"  align="center">
                    <b-img :src="getImageStepPath" center fluid alt="Responsive image" />
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ["currentStep"],
  computed: {
    getImageStepPath() {
      return `steps/vue-js-step${this.currentStep}.svg`;
    }
  }
};
</script>

<style>
img {
  /* background-color: aliceblue; */
}
</style>
