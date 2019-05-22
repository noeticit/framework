<template>
    <ul class="kt-menu__nav ">
        <li v-for="item in menu" class="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true">
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle" v-if="!item.link">
                <span class="kt-menu__link-text">{{ item.name }}</span>
            </a>
            <router-link v-else :to="item.link" class="kt-menu__link kt-menu__toggle">
                <span class="kt-menu__link-text">{{ item.name }}</span>
            </router-link>
            <div class="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left" v-if="typeof item.sub_menu !== 'undefined' && item.sub_menu.length">
                <ul class="kt-menu__subnav" >
                    <li v-for="element in item.sub_menu" class="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                        <a href="#" class="kt-menu__link kt-menu__toggle" v-if="!element.link">
                            <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                            <span class="kt-menu__link-text">{{ element.name }}</span>
                            <i class="kt-menu__hor-arrow la la-angle-right" v-if="typeof element.sub_menu !== 'undefined' && element.sub_menu.length"></i>
                        </a>
                        <router-link :to="element.link" class="kt-menu__link" v-else>
                            <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                            <span class="kt-menu__link-text">{{ element.name }}</span>
                            <i class="kt-menu__hor-arrow la la-angle-right" v-if="typeof element.sub_menu !== 'undefined' && element.sub_menu.length"></i>
                        </router-link>
                        <div class="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right" v-if="typeof element.sub_menu !== 'undefined' && element.sub_menu.length">
                            <ul class="kt-menu__subnav">
                                <li v-for="ele in element.sub_menu" class="kt-menu__item " aria-haspopup="true">
                                    <router-link :to="ele.link" class="kt-menu__link ">
                                        <i class="kt-menu__link-icon flaticon-users"></i>
                                        <span class="kt-menu__link-text">{{ ele.name }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "base-menu-top-one",
        data() {
            return {
                menu: []
            }
        },
        created() {
            this.menu = JSON.parse(nitseditor).menu.map(a => ({
                name: a.name,
                link: a.link,
                sub_menu: a.children.length ? a.children.map(b => ({
                    name: b.name,
                    link: b.link,
                    sub_menu: b.children.length ? b.children.map(c => ({
                        name: c.name,
                        link: c.link
                    })) : []
                })) : []
            }))
        },
    }
</script>

<style scoped>

</style>
