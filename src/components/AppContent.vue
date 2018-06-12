<template>
    <b-container fluid class="content">
        <viewer-navbar></viewer-navbar>
        <viewer-step></viewer-step>
    </b-container>
</template>

<script>
import ViewerNavbar from './viewer/ViewerNavbar'
import ViewerStep from './viewer/ViewerStep'
export default {
    components: {
        ViewerNavbar,
        ViewerStep
    }
};
</script>

<style>
.content {
  color: aliceblue;
  padding: 0;
}
</style>
