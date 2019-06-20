<template>
    <div style="height: 100%;">

        <!-- begin:: Page -->

        <!-- begin:: Header Mobile -->
        <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed ">
            <div class="kt-header-mobile__logo">
                <router-link to="/dashboard">
                    <img alt="Logo" :src="nitseditor.app_logo" />
                </router-link>
            </div>
            <div class="kt-header-mobile__toolbar">
                <button class="kt-header-mobile__toggler kt-header-mobile__toggler--left" id="kt_aside_mobile_toggler"><span></span></button>
                <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler"><span></span></button>
                <button class="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more"></i></button>
            </div>
        </div>

        <!-- end:: Header Mobile -->

        <div class="kt-grid kt-grid--hor kt-grid--root">
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">

                <!-- begin:: Aside -->
                <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>

                <base-layout-three-aside></base-layout-three-aside>

                <!-- end:: Aside -->
                <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">

                    <base-layout-three-header></base-layout-three-header>

                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">

                        <base-layout-three-subheader></base-layout-three-subheader>

                        <!-- begin:: Content -->

                        <!-- begin:: Content -->
                        <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content" style="padding: 10px;">

                            <!--Begin::Dashboard 6-->
                            <router-view></router-view>
                            <!--End::Dashboard 6-->
                        </div>

                        <!-- end:: Content -->

                        <!-- end:: Content -->
                    </div>

                    <!-- begin:: Footer -->
                    <div class="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop">
                        <div class="kt-footer__copyright">
                            2019&nbsp;&copy;&nbsp;<a href="http://biltrax.com/" target="_blank" class="kt-link">Biltrax DIA</a>
                        </div>
                        <div class="kt-footer__menu">
                            <a href="http://nitseditor.com" target="_blank" class="kt-footer__menu-link kt-link">About</a>
                            <a href="http://nitseditor.com" target="_blank" class="kt-footer__menu-link kt-link">Team</a>
                            <a href="http://nitseditor.com" target="_blank" class="kt-footer__menu-link kt-link">Contact</a>
                        </div>
                    </div>

                    <!-- end:: Footer -->
                </div>
            </div>
        </div>

        <!-- end:: Page -->

        <!-- begin::Scrolltop -->
        <div id="kt_scrolltop" class="kt-scrolltop">
            <i class="fa fa-arrow-up"></i>
        </div>

        <!-- end::Scrolltop -->

    </div>
</template>

<script>
    require('perfect-scrollbar');
    import {KTUtil} from 'NitsTheme/framework/lib/util';
    import {KTHeader} from 'NitsTheme/framework/components/foundation/header/header';
    import {KTOffcanvas} from 'NitsTheme/framework/components/foundation/offcanvas/offcanvas';
    import {KTMenu} from 'NitsTheme/framework/components/foundation/menu/menu';
    import {KTToggle} from 'NitsTheme/framework/components/foundation/toggle/toggle';
    import {KTScrolltop} from 'NitsTheme/framework/components/foundation/scrolltop/scrolltop';

    export default {
        name: "layout-two",
        data() {
            return {
                title: '',
                pageData: [],
                nitseditor: JSON.parse(nitseditor)
            }
        },
        mounted() {
            var KTLayout = function() {
                var body;

                var header;
                var headerMenu;
                var headerMenuOffcanvas;
                var asideToggler;

                var scrollTop;

                var pageStickyPortlet;

                // Header
                var initHeader = function() {
                    var tmp;
                    var headerEl = KTUtil.get('kt_header');
                    var options = {
                        offset: {},
                        minimize: {
                            /*
                            desktop: {
                                on: 'kt-header--minimize'
                            },
                            */
                            desktop: false,
                            mobile: false
                        }
                    };

                    if (tmp = KTUtil.attr(headerEl, 'data-ktheader-minimize-offset')) {
                        options.offset.desktop = tmp;
                    }

                    if (tmp = KTUtil.attr(headerEl, 'data-ktheader-minimize-mobile-offset')) {
                        options.offset.mobile = tmp;
                    }

                    header = new KTHeader('kt_header', options);
                }

                // Header Menu
                var initHeaderMenu = function() {
                    // init aside left offcanvas
                    headerMenuOffcanvas = new KTOffcanvas('kt_header_menu_wrapper', {
                        overlay: true,
                        baseClass: 'kt-header-menu-wrapper',
                        closeBy: 'kt_header_menu_mobile_close_btn',
                        toggleBy: {
                            target: 'kt_header_mobile_toggler',
                            state: 'kt-header-mobile__toolbar-toggler--active'
                        }
                    });

                    headerMenu = new KTMenu('kt_header_menu', {
                        submenu: {
                            desktop: 'dropdown',
                            tablet: 'accordion',
                            mobile: 'accordion'
                        },
                        accordion: {
                            slideSpeed: 200, // accordion toggle slide speed in milliseconds
                            expandAll: false // allow having multiple expanded accordions in the menu
                        }
                    });
                }

                // Header Topbar
                var initHeaderTopbar = function() {
                    asideToggler = new KTToggle('kt_header_mobile_topbar_toggler', {
                        target: 'body',
                        targetState: 'kt-header__topbar--mobile-on',
                        togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
                    });
                }


                // Scrolltop
                var initScrolltop = function() {
                    var scrolltop = new KTScrolltop('kt_scrolltop', {
                        offset: 300,
                        speed: 600
                    });
                }

                // Init page sticky portlet
                var initPageStickyPortlet = function() {
                    var asideWidth = 255;
                    var asideMinimizeWidth = 78;
                    var asideSecondaryWidth = 60;
                    var asideSecondaryExpandedWidth = 310;

                    return new KTPortlet('kt_page_portlet', {
                        sticky: {
                            offset: parseInt(KTUtil.css( KTUtil.get('kt_header'), 'height')),
                            zIndex: 90,
                            position: {
                                top: function() {
                                    var h = 0;

                                    if (KTUtil.isInResponsiveRange('desktop')) {
                                        if (KTUtil.hasClass(body, 'kt-header--fixed')) {
                                            h = h + parseInt(KTUtil.css( KTUtil.get('kt_header'), 'height') );
                                        }

                                        if (KTUtil.hasClass(body, 'kt-subheader--fixed') && KTUtil.get('kt_subheader')) {
                                            h = h + parseInt(KTUtil.css( KTUtil.get('kt_subheader'), 'height') );
                                        }
                                    } else {
                                        if (KTUtil.hasClass(body, 'kt-header-mobile--fixed')) {
                                            h = h + parseInt(KTUtil.css( KTUtil.get('kt_header_mobile'), 'height') );
                                        }
                                    }

                                    return h;
                                },
                                left: function() {
                                    var left = 0;

                                    if (KTUtil.isInResponsiveRange('desktop')) {
                                        if (KTUtil.hasClass(body, 'kt-aside--minimize')) {
                                            left += asideMinimizeWidth;
                                        } else if (KTUtil.hasClass(body, 'kt-aside--enabled')) {
                                            left += asideWidth;
                                        }
                                    }

                                    left += parseInt(KTUtil.css( KTUtil.get('kt_content'), 'paddingLeft'));

                                    return left;
                                },
                                right: function() {
                                    var right = 0;

                                    if (KTUtil.isInResponsiveRange('desktop')) {
                                        if (KTUtil.hasClass(body, 'kt-aside-secondary--enabled')) {
                                            if (KTUtil.hasClass(body, 'kt-aside-secondary--expanded')) {
                                                right += asideSecondaryExpandedWidth + asideSecondaryWidth;
                                            } else {
                                                right += asideSecondaryWidth;
                                            }
                                        } else {
                                            right += parseInt(KTUtil.css( KTUtil.get('kt_content'), 'paddingRight'));
                                        }
                                    }

                                    if (KTUtil.get('kt_aside_secondary')) {
                                        right += parseInt(KTUtil.css( KTUtil.get('kt_content'), 'paddingRight') );
                                    }

                                    return right;
                                }
                            }
                        }
                    });
                }

                return {
                    init: function() {
                        body = KTUtil.get('body');

                        this.initHeader();
                        this.initPageStickyPortlet();

                        // Non functional links notice(can be removed in production)
                        $('#kt_aside_menu, #kt_header_menu').on('click', '.kt-menu__link[href="#"]', function(e) {
                            swal.fire("", "You have clicked on a non-functional dummy link!");

                            e.preventDefault();
                        });
                    },

                    initHeader: function() {
                        initHeader();
                        initHeaderMenu();
                        initHeaderTopbar();
                        initScrolltop();
                    },


                    initPageStickyPortlet: function() {
                        if (!KTUtil.get('kt_page_portlet')) {
                            return;
                        }

                        pageStickyPortlet = initPageStickyPortlet();
                        pageStickyPortlet.initSticky();

                        KTUtil.addResizeHandler(function(){
                            pageStickyPortlet.updateSticky();
                        });

                        initPageStickyPortlet();
                    },



                    onAsideToggle: function(handler) {
                        if (typeof asideToggler.element !== 'undefined') {
                            asideToggler.on('toggle', handler);
                        }
                    },


                    closeMobileHeaderMenuOffcanvas: function() {
                        if (KTUtil.isMobileDevice()) {
                            headerMenuOffcanvas.hide();
                        }
                    }
                };
            }();

            $(document).ready(function() {
                KTLayout.init();
            });
        }
    }
</script>
