<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <b-button-toolbar key-nav aria-label="Toolbar with button groups" justify="center">
                    <b-button-group class="mx-1">
                        <b-btn>&laquo;</b-btn>
                        <b-btn>&lsaquo;</b-btn>
                    </b-button-group>
                    <span class="current-step align-text-bottom">Step 1</span>
                    <b-button-group class="mx-1">
                        <b-btn>&rsaquo;</b-btn>
                        <b-btn>&raquo;</b-btn>
                    </b-button-group>
                </b-button-toolbar>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

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
