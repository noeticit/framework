<template>
    <div style="height: 100%;">
        <div v-if="logged" style="height: 100%;">
            <layout-three></layout-three>
        </div>
        <div v-else style="height: 100%;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data() {
            return {
                logged: false,
            }
        },
        created() {
           //Testing apps.
        },
        watch: {
            '$route' (to, from) {
                // react to route changes...
                if(to.meta.requiresAuth && !from.meta.requiresAuth)
                    this.logged = true
                if(!to.meta.requiresAuth && from.meta.requiresAuth)
                    this.logged = false
            }
        }
    }
</script>

<style lang="scss">
    //Import scss...
    // 1: Demo Config
    @import "../theme/demo/default/sass/config";  // demo level framework config override

    // 2: Framework Config
    @import "../theme/framework/config"; // framework config

    // 3: Bootstrap Include
    @import "../theme/framework/core/bootstrap/bootstrap.scss";

    // 4: Framework Include
    @import "../theme/framework/include";

    // 5: Demo Configs
    @import "../theme/demo/default/sass/header/config";
    @import "../theme/demo/default/sass/brand/config";
    @import "../theme/demo/default/sass/aside/config";
    @import "../theme/demo/default/sass/footer/config";

    // 6: Demo Includes
    @import "../theme/demo/default/sass/base/base";
    @import "../theme/demo/default/sass/header/base";
    @import "../theme/demo/default/sass/header/base-mobile";
    @import "../theme/demo/default/sass/header/menu";
    @import "../theme/demo/default/sass/header/topbar";

    @import "../theme/demo/default/sass/brand/base";

    @import "../theme/demo/default/sass/aside/base";

    @import "../theme/demo/default/sass/content/base";

    @import "../theme/demo/default/sass/footer/base";

    // Icons
    @import "../theme/framework/vendors/fontawesome5/css/all.min.css";
    @import "../theme/framework/vendors/flaticon/flaticon.css";
    @import "../theme/framework/vendors/flaticon2/flaticon.css";
    @import "../theme/framework/vendors/line-awesome/css/line-awesome.css";

</style>
