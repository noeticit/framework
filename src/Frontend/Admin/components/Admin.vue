<template>
    <div>
        <div v-if="logged">
            <layout-one></layout-one>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin",
        computed: {
            logged() {
                return window.sessionStorage.getItem('logged')
            }
        },
    }
</script>
