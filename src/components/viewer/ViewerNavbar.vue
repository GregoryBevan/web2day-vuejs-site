<template>
    <b-container fluid>
        <b-row>
            <b-col md="4"></b-col>
            <b-col>
                <b-button-toolbar key-nav aria-label="Toolbar with button groups" justify>
                    <b-button-group class="mx-1">
                        <b-btn @click="goToFirst" :disabled="disableLeftButtons">&laquo;</b-btn>
                        <b-btn @click="goToPrevious" :disabled="disableLeftButtons">&lsaquo;</b-btn>
                    </b-button-group>
                    <span class="current-step align-text-bottom">{{ getStepName }}</span>
                    <b-button-group class="mx-1">
                        <b-btn @click="goToNext" :disabled="disableRightButtons">&rsaquo;</b-btn>
                        <b-btn @click="goToLast" :disabled="disableRightButtons">&raquo;</b-btn>
                    </b-button-group>
                </b-button-toolbar>
            </b-col>
            <b-col md="4"></b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['currentStep'],
    methods: {
        goToFirst() {
            this.$emit('stepToDisplay', 1)
        },
        goToLast() {
            this.$emit('stepToDisplay', 11)
        },
        goToNext() {
            this.$emit('stepToDisplay', this.currentStep + 1)
        },
        goToPrevious() {
            this.$emit('stepToDisplay', this.currentStep - 1)
        }
    },
    computed: {
        getStepName() {
            return `Step ${this.currentStep}`
        },
        disableLeftButtons() {
            return this.currentStep == 1
        },
        disableRightButtons() {
            return this.currentStep == 11
        }
    }

}
</script>

<style>
.current-step {
    font-size: 1.5rem;
    font-weight: bold;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:active,
.btn-secondary:visited {
  background-color: #3ab982 !important;
  outline-color: #3ab982 !important;
}
</style>
