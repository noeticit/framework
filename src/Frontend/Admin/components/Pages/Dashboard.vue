<template>
    <div>
        <base-subheader title="Dashboard" icon="la-home" heading="Dashboard" description="Generate Reports"></base-subheader>
        <div class="m-content">
            <portlet-type-1></portlet-type-1>
        </div>
        <base-subheader title="Apps" icon="la-superscript" heading="App Suggestions"></base-subheader>
        <div class="m-content">
            <div class="row">
                <div class="col-xl-3">
                    <portlet-type-2 title="Connect with Google"></portlet-type-2>
                </div>
                <div class="col-xl-3">
                    <portlet-type-2 title="Get your own domain"></portlet-type-2>
                </div>
                <div class="col-xl-3">
                    <portlet-type-2 title="Send Emails"></portlet-type-2>
                </div>
                <div class="col-xl-3">
                    <portlet-type-2 title="Get chat app"></portlet-type-2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style scoped>

</style>