<template>
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root nits-login" >
        <login-component></login-component>
    </div>
    <!-- end:: Page -->
</template>

<script>
    import {login} from 'ProjectComponents/admin/_model'
    import LoginComponent from 'ProjectComponents/admin/components/login/Login'

    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: '',
                error: '',
                loading: false,
                loginIn: true,
                SignUpIn: false,
                forgotPassword:false,
                nitseditor: JSON.parse(nitseditor)
            }
        },
        components: {
            LoginComponent
        },
        beforeCreate() {
            this.$auth.logout();
        },
        created() {
            // window.location.reload();

            // console.log(this.nitseditor)
        },
        methods: {
            login() {
                this.loading = true
                this.error = ""
                const user = {
                    email: this.email,
                    password: this.password
                }

                login(user).then(resolve => {
                    this.loading = false
                    // console.log(resolve.redirect);
                    this.$router.push(resolve.redirect)
                }).catch(error => {
                    this.loading = false
                    this.error = error
                })

            },
            submit() {
                if(this.email.split('@').length === 2) {
                    const payload = {
                        email: this.email,
                    }
                    axios.post('/laravel-api/forget-password', payload).then(response => {
                        if (response.status === 200) {
                            this.error = response.data.data;
                            // console.log(this.result)
                        }
                    }).catch((error) => {
                        if (error.response.status === 422) {

                            this.error = "Please Enter valid Email ID.";
                            // console.log(this.error)
                        }
                    });
                }
                else if(this.email.split('@').length != 2) {
                    this.error = "Email ID in Invalid Format.";
                }
            },
            SignUpShow(){
                this.loginIn = false
                this.SignUpIn = true
            },
            forgotPasswordShow(){
                this.loginIn = false
                this.SignUpIn = false
                // this.forgotPassword = true
                this.$router.push({name: 'ForgotPassword'});
            },

            BacktoLogin(){
                this.loginIn = true
                this.SignUpIn = false

            },

            Register(){

            }
        }
    }
</script>

<style lang="css" scoped>
    @import "../../theme/css/login.css";

    .nits-login_aside {
        background-image: url("/nits-assets/images/bg/bg-7.jpg");
    }
</style>
