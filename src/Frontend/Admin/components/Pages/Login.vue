<template>
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root nits-login">
        <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">

                <!--begin::Aside-->
                <div class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside nits-login_aside">
                    <div class="kt-grid__item">
                        <a href="#" class="kt-login__logo">
                            <img src="/nits-assets/media/logos/logo-4.png" alt="logo here">
                        </a>
                    </div>
                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                        <div class="kt-grid__item kt-grid__item--middle">
                            <h3 class="kt-login__title">Welcome to Biltrax!</h3>
                            <h4 class="kt-login__subtitle">A leading provider of Business Intelligence & Lead Generation Services for Indian Building Industry.</h4>
                        </div>
                    </div>
                    <div class="kt-grid__item">
                        <div class="kt-login__info">
                            <div class="kt-login__copyright">
                                &copy 2019 Biltrax
                            </div>
                            <div class="kt-login__menu">
                                <a href="#" class="kt-link">Privacy</a>
                                <a href="#" class="kt-link">Legal</a>
                                <a href="#" class="kt-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!--begin::Aside-->

                <!--begin::Content-->
                <div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">

                    <!--begin::Head-->
                    <div class="kt-login__head">
                        <span class="kt-login__signup-label">Don't have an account yet?</span>&nbsp;&nbsp;
                        <a href="#" class="kt-link kt-login__signup-link">Sign Up!</a>
                    </div>

                    <!--end::Head-->

                    <!--begin::Body-->
                    <div class="kt-login__body">

                        <!--begin::Signin-->
                        <div class="kt-login__form">
                            <div class="kt-login__title">
                                <h3>Sign In</h3>
                            </div>

                            <!--begin::Form-->
                            <form class="kt-form" action="" novalidate="novalidate">
                                <div class="form-group">
                                    <input class="form-control" v-model="email" type="text" placeholder="Email" name="email" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" v-model="password" type="password" placeholder="Password" name="password">
                                </div>
                                <div class="form-group" v-if="error">
                                    <span class="text-center text-danger">{{ error }}</span>
                                </div>

                                <!--begin::Action-->
                                <div class="kt-login__actions">
                                    <a href="#" class="kt-link kt-login__link-forgot">
                                        Forgot Password ?
                                    </a>
                                    <button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary" v-bind:class="{ 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light': loading }" @click.prevent="login()">Sign In</button>
                                </div>

                                <!--end::Action-->
                            </form>

                            <!--end::Form-->
                        </div>

                        <!--end::Signin-->
                    </div>

                    <!--end::Body-->
                </div>

                <!--end::Content-->
            </div>
        </div>
    </div>
    <!-- end:: Page -->
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: '',
                error: '',
                loading: false
            }
        },
        methods: {
            login() {
                this.loading = true
                this.error = ""
                const user = {
                    email: this.email,
                    password: this.password
                }

                this.$auth.login(user).then(response => {
                    this.loading = false
                    this.$router.push('/dashboard')
                }).catch( err => {
                    if(err.response.status === 401){
                        this.error = err.response.data.message
                        this.loading = false
                    }
                    if(err.response.status === 500) {
                        this.error = 'Server error, please try after sometime.'
                        this.loading = false
                    }
                    if(err.response.status === 400) {
                        this.error = 'Environment variable missing. Check and retry.'
                        this.loading = false
                    }
                })

            }
        }
    }
</script>

<style lang="css" scoped>
    @import "../../theme/css/login.css";
    .nits-login_aside {
        background-image: url("/nits-assets/images/bg/bg-4.jpg");
    }
</style>
