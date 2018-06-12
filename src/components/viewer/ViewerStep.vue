<template>
    <b-container fluid>
        <b-row align-content="justify">
            <b-col class="mt-4">
                <b-img :src="stepImg" center fluid alt="Responsive image" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Logo from '../../assets/vue-js-step1.svg'
export default {
    data() {
        return {
            stepImg: Logo
        }
    }

};
</script>

<style>
img {
    background-color: aliceblue;
}
</style>
