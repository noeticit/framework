<template>
    <!-- begin:: Page -->
    <div class="m-grid m-grid--hor m-grid--root m-page">
        <base-page-header></base-page-header>
        <!--<page-header></page-header>-->
        <!-- begin::Body -->
        <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <base-left-aside></base-left-aside>
            <!--<left-aside></left-aside>-->
            <div class="m-grid__item m-grid__item--fluid m-wrapper">
                <router-view></router-view>
            </div>
        </div>
        <!-- end:: Body -->
        <base-page-footer></base-page-footer>
    </div>
    <!-- end:: Page -->
</template>

<script>
    export default {
        name: "layout-one",
        data() {
            return {
                title: '',
                pageData: []
            }
        }
    }
</script>

<style scoped>

</style>
