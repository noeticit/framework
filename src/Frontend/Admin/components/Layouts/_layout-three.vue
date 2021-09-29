<!--<template>-->
<!--    <div style="height: 100%;">-->

<!--        &lt;!&ndash; begin:: Page &ndash;&gt;-->

<!--        &lt;!&ndash; begin:: Header Mobile &ndash;&gt;-->
<!--        <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile&#45;&#45;fixed ">-->
<!--            <div class="kt-header-mobile__logo">-->
<!--&lt;!&ndash;                <router-link to="/dashboard">&ndash;&gt;-->
<!--&lt;!&ndash;                    <img alt="Logo" :src="nitseditor.app_logo" />&ndash;&gt;-->
<!--&lt;!&ndash;                </router-link>&ndash;&gt;-->
<!--            </div>-->
<!--            <div class="kt-header-mobile__toolbar">-->
<!--                <button class="kt-header-mobile__toggler kt-header-mobile__toggler&#45;&#45;left" id="kt_aside_mobile_toggler"><span></span></button>-->
<!--                <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler"><span></span></button>-->
<!--                <button class="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more"></i></button>-->
<!--            </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; end:: Header Mobile &ndash;&gt;-->

<!--        <div class="kt-grid kt-grid&#45;&#45;hor kt-grid&#45;&#45;root">-->
<!--            <div class="kt-grid__item kt-grid__item&#45;&#45;fluid kt-grid kt-grid&#45;&#45;ver kt-page">-->

<!--                &lt;!&ndash; begin:: Aside &ndash;&gt;-->
<!--                <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>-->

<!--                <base-layout-three-aside></base-layout-three-aside>-->

<!--                &lt;!&ndash; end:: Aside &ndash;&gt;-->
<!--                <div class="kt-grid__item kt-grid__item&#45;&#45;fluid kt-grid kt-grid&#45;&#45;hor kt-wrapper" id="kt_wrapper" style="padding-top: 65px;">-->

<!--                    <base-layout-three-header></base-layout-three-header>-->

<!--                    <div class="kt-grid__item kt-grid__item&#45;&#45;fluid kt-grid kt-grid&#45;&#45;hor">-->

<!--                        &lt;!&ndash;                        <base-layout-three-subheader></base-layout-three-subheader>&ndash;&gt;-->

<!--                        &lt;!&ndash; begin:: Content &ndash;&gt;-->

<!--                        &lt;!&ndash; begin:: Content &ndash;&gt;-->
<!--                        <div class="kt-content  kt-grid__item kt-grid__item&#45;&#45;fluid" id="kt_content" style="padding: 10px;">-->

<!--                            &lt;!&ndash;Begin::Dashboard 6&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div v-if="$can($route.name, 'view')">&ndash;&gt;-->
<!--                            <router-view></router-view>-->
<!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                           <div v-else>&ndash;&gt;-->
<!--                            &lt;!&ndash;                               <div class="text-center">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                   <strong>Don't have permission to view this section</strong>&ndash;&gt;-->
<!--                            &lt;!&ndash;                               </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                           </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;End::Dashboard 6&ndash;&gt;-->
<!--                        </div>-->

<!--                        &lt;!&ndash; end:: Content &ndash;&gt;-->

<!--                        &lt;!&ndash; end:: Content &ndash;&gt;-->
<!--                    </div>-->

<!--                    &lt;!&ndash; begin:: Footer &ndash;&gt;-->
<!--                    &lt;!&ndash;                    <div class="kt-footer kt-grid__item kt-grid kt-grid&#45;&#45;desktop kt-grid&#45;&#45;ver-desktop" style="position: fixed; bottom: 0; width: 100%">&ndash;&gt;-->

<!--                    &lt;!&ndash;                    <base-footer></base-footer>&ndash;&gt;-->
<!--                    <base-footer></base-footer>-->

<!--                    &lt;!&ndash; end:: Footer &ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; end:: Page &ndash;&gt;-->

<!--        &lt;!&ndash; begin::Scrolltop &ndash;&gt;-->
<!--        <div id="kt_scrolltop" class="kt-scrolltop">-->
<!--            <i class="fa fa-arrow-up"></i>-->
<!--        </div>-->

<!--        &lt;!&ndash; end::Scrolltop &ndash;&gt;-->

<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--    import BaseFooter from "ProjectComponents/admin/layouts/base_footer";-->
<!--    require('perfect-scrollbar');-->
<!--    import {KTUtil} from 'NitsTheme/framework/lib/util';-->
<!--    import {KTHeader} from 'NitsTheme/framework/components/foundation/header/header';-->
<!--    import {KTOffcanvas} from 'NitsTheme/framework/components/foundation/offcanvas/offcanvas';-->
<!--    import {KTMenu} from 'NitsTheme/framework/components/foundation/menu/menu';-->
<!--    import {KTToggle} from 'NitsTheme/framework/components/foundation/toggle/toggle';-->
<!--    import {KTScrolltop} from 'NitsTheme/framework/components/foundation/scrolltop/scrolltop';-->

<!--    export default {-->
<!--        name: "layout-three",-->
<!--        components: {BaseFooter},-->
<!--        data() {-->
<!--            return {-->
<!--                title: '',-->
<!--                pageData: [],-->
<!--                nitseditor: JSON.parse(nitseditor)-->
<!--            }-->
<!--        },-->
<!--        created() {-->
<!--            // console.log(this.$ability.rules);-->
<!--            // console.log(this.$route.name);-->
<!--            console.log('from footer layout three')-->

<!--            if(this.$can(this.$route.name, 'view'))-->
<!--                console.log('happening');-->
<!--            else-->
<!--                console.log('Not')-->
<!--        }-->
<!--    }-->
<!--</script>-->
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import {decrypt} from "NitsModels/_encrypt";
    import api from 'NitsModels/_api.js';

    export default {
        name: "layout-three",
    }
</script>
<style scoped>

</style>