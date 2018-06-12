<template>
    <b-container fluid class="content">
        <viewer-navbar :currentStep="currentStep" @stepToDisplay="setCurrentStep"></viewer-navbar>
        <viewer-step :currentStep="currentStep"></viewer-step>
    </b-container>
</template>

<script>
import ViewerNavbar from './viewer/ViewerNavbar'
import ViewerStep from './viewer/ViewerStep'
export default {
    data() {
        return {
            currentStep: 1
        }
    },
    components: {
        ViewerNavbar,
        ViewerStep
    },
    methods: {
        setCurrentStep(step) {
            this.currentStep = step
        }
    }
};
</script>

<style>
.content {
  color: aliceblue;
  padding: 0;
}
</style>
