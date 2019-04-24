<template>
    <div>
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-grid--stretch">
            <div class="kt-container kt-body  kt-grid kt-grid--ver" id="kt_body">
                <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">

                    <!-- begin:: Subheader -->
                    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
                        <div class="kt-subheader__main">
                            <h3 class="kt-subheader__title">Dashboard</h3>
                            <h4 class="kt-subheader__desc">Latest updates and statistic charts</h4>
                        </div>
                        <div class="kt-subheader__toolbar">
                            <div class="kt-subheader__wrapper">
                                <a href="#" class="btn kt-subheader__btn-secondary">
                                    Reports
                                </a>
                                <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
                                    <a href="#" class="btn btn-danger kt-subheader__btn-options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Products
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#"><i class="la la-plus"></i> New Product</a>
                                        <a class="dropdown-item" href="#"><i class="la la-user"></i> New Order</a>
                                        <a class="dropdown-item" href="#"><i class="la la-cloud-download"></i> New Download</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#"><i class="la la-cog"></i> Settings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- end:: Subheader -->

                    <!-- begin:: Content -->
                    <div class="kt-content kt-grid__item kt-grid__item--fluid">

                        <!--Begin::Dashboard 4-->

                        <!--Begin::Section-->
                        <div class="row">
                            <div class="col-xl-6">

                                <!--begin:: Widgets/Quick Stats-->
                                <div class="row row-full-height">
                                    <div class="col-sm-12 col-md-12 col-lg-6">
                                        <div class="kt-portlet kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
                                            <div class="kt-portlet__body kt-portlet__body--fluid">
                                                <div class="kt-widget26">
                                                    <div class="kt-widget26__content">
                                                        <span class="kt-widget26__number">570</span>
                                                        <span class="kt-widget26__desc">Total Sales</span>
                                                    </div>
                                                    <div class="kt-widget26__chart" style="height:100px; width: 230px;">
                                                        <canvas id="kt_chart_quick_stats_1"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kt-space-20"></div>
                                        <div class="kt-portlet kt-portlet--height-fluid-half kt-portlet--border-bottom-danger">
                                            <div class="kt-portlet__body kt-portlet__body--fluid">
                                                <div class="kt-widget26">
                                                    <div class="kt-widget26__content">
                                                        <span class="kt-widget26__number">640</span>
                                                        <span class="kt-widget26__desc">Completed Transactions</span>
                                                    </div>
                                                    <div class="kt-widget26__chart" style="height:100px; width: 230px;">
                                                        <canvas id="kt_chart_quick_stats_2"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-6">
                                        <div class="kt-portlet kt-portlet--height-fluid-half kt-portlet--border-bottom-success">
                                            <div class="kt-portlet__body kt-portlet__body--fluid">
                                                <div class="kt-widget26">
                                                    <div class="kt-widget26__content">
                                                        <span class="kt-widget26__number">234+</span>
                                                        <span class="kt-widget26__desc">Transactions</span>
                                                    </div>
                                                    <div class="kt-widget26__chart" style="height:100px; width: 230px;">
                                                        <canvas id="kt_chart_quick_stats_3"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kt-space-20"></div>
                                        <div class="kt-portlet kt-portlet--height-fluid-half kt-portlet--border-bottom-warning">
                                            <div class="kt-portlet__body kt-portlet__body--fluid">
                                                <div class="kt-widget26">
                                                    <div class="kt-widget26__content">
                                                        <span class="kt-widget26__number">4.4M$</span>
                                                        <span class="kt-widget26__desc">Paid Comissions</span>
                                                    </div>
                                                    <div class="kt-widget26__chart" style="height:100px; width: 230px;">
                                                        <canvas id="kt_chart_quick_stats_4"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--end:: Widgets/Quick Stats-->
                            </div>
                            <div class="col-xl-6">

                                <!--begin:: Widgets/Order Statistics-->
                                <div class="kt-portlet kt-portlet--height-fluid">
                                    <div class="kt-portlet__head">
                                        <div class="kt-portlet__head-label">
                                            <h3 class="kt-portlet__head-title">
                                                Order Statistics
                                            </h3>
                                        </div>
                                        <div class="kt-portlet__head-toolbar">
                                            <a href="#" class="btn btn-label-brand btn-bold btn-sm dropdown-toggle" data-toggle="dropdown">
                                                Export
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                                <ul class="kt-nav">
                                                    <li class="kt-nav__section kt-nav__section--first">
                                                        <span class="kt-nav__section-text">Choose an action:</span>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-graph-1"></i>
                                                            <span class="kt-nav__link-text">Export</span>
                                                        </a>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-calendar-4"></i>
                                                            <span class="kt-nav__link-text">Save</span>
                                                        </a>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-layers-1"></i>
                                                            <span class="kt-nav__link-text">Import</span>
                                                        </a>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-calendar-4"></i>
                                                            <span class="kt-nav__link-text">Update</span>
                                                        </a>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-file-1"></i>
                                                            <span class="kt-nav__link-text">Customize</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-portlet__body kt-portlet__body--fluid">
                                        <div class="kt-widget12">
                                            <div class="kt-widget12__content">
                                                <div class="kt-widget12__item">
                                                    <div class="kt-widget12__info">
                                                        <span class="kt-widget12__desc">Annual Taxes EMS</span>
                                                        <span class="kt-widget12__value">$400,000</span>
                                                    </div>
                                                    <div class="kt-widget12__info">
                                                        <span class="kt-widget12__desc">Finance Review Date</span>
                                                        <span class="kt-widget12__value">July 24,2019</span>
                                                    </div>
                                                </div>
                                                <div class="kt-widget12__item">
                                                    <div class="kt-widget12__info">
                                                        <span class="kt-widget12__desc">Avarage Revenue</span>
                                                        <span class="kt-widget12__value">$60M</span>
                                                    </div>
                                                    <div class="kt-widget12__info">
                                                        <span class="kt-widget12__desc">Revenue Margin</span>
                                                        <div class="kt-widget12__progress">
                                                            <div class="progress kt-progress--sm">
                                                                <div class="progress-bar kt-bg-brand" role="progressbar" style="width: 40%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="kt-widget12__stat">
																			40%
																		</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="kt-widget12__chart" style="height:250px;">
                                                <canvas id="kt_chart_order_statistics"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--end:: Widgets/Order Statistics-->
                            </div>
                        </div>

                        <!--End::Section-->

                        <!--End::Dashboard 4-->
                    </div>

                    <!-- end:: Content -->
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
