<template>
    <!-- begin:: Header -->
    <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">
        <layout-three-header></layout-three-header>
    </div>
    <!-- end:: Header -->


</template>

<script>
    import TopBar from 'ProjectComponents/admin/layouts/TopBar';
    import UserNotifications from 'ProjectComponents/admin/layouts/UserNotifications';
    import UserQuickActions from "ProjectComponents/admin/layouts/UserQuickActions";
    import UserDetails from "ProjectComponents/admin/layouts/UserDetails";
    import LayoutThreeHeader from "ProjectComponents/admin/layouts/layout-three-header";

    export default {
        name: "base-layout-three-header",
        data() {
            return {
                nitseditor: JSON.parse(nitseditor)
            }
        },
        components: {
            LayoutThreeHeader,
            UserDetails, UserQuickActions, TopBar, UserNotifications
        },
    }
</script>

<style scoped>
    .kt-header {
        background-color: #ffffff;
        border-bottom: 1px solid #eff0f6;
    }
</style>
