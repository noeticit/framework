<template>
    <div class="kt-grid  kt-wizard-v1 kt-wizard-v1--white" id="kt_wizard_v1" data-ktwizard-state="step-first">
        <div class="kt-grid__item">

            <!--begin: Form Wizard Nav -->
            <div class="kt-wizard-v1__nav">
                <div class="kt-wizard-v1__nav-items">
                    <a class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step" v-for="(item, index) in wizardData" :data-ktwizard-state="index === 0 ? 'current' : null">
                        <div class="kt-wizard-v1__nav-body">
                            <div class="kt-wizard-v1__nav-icon">
                                <i :class="item.icon"></i>
                            </div>
                            <div class="kt-wizard-v1__nav-label">
                                {{ item.title }}
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <!--end: Form Wizard Nav -->
        </div>
        <div class="kt-grid__item kt-grid__item--fluid kt-wizard-v1__wrapper">

            <!--begin: Form Wizard Form-->
            <form class="kt-form" id="kt_form">

                <div class="kt-wizard-v1__content" data-ktwizard-type="step-content" v-for="(item, index) in wizardData" :data-ktwizard-state="index === 0 ? 'current' : null">
                    <div class="kt-heading kt-heading--md">{{ item.subtitle }}</div>
                    <div class="kt-form__section kt-form__section--first">
                        <div class="kt-wizard-v1__form">
                            <div v-for="element in item.layouts" :class="element.type === 'row' ? 'row' : ''">
                                <div v-for="col in element.columns" :class="col.column ? 'col-xl-'+col.column: ''">
                                    <div v-if="col.form_type === 'nits-input'">
                                        <nits-input
                                            :label="col.config_elements.label"
                                            :type="col.config_elements.type"
                                            :placeholder="col.config_elements.placeholder"
                                            :value="col.value"
                                            :hint="col.config_elements.hint"
                                            :error="col.config_elements.error"
                                            v-model="form[col.field_name]"
                                        >
                                        </nits-input>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-select'">
                                        <nits-select
                                            :label="col.config_elements.label"
                                            :options="col.config_elements.options"
                                            :value="col.value"
                                            :error="col.config_elements.error"
                                            v-model="form[col.field_name]"
                                        >
                                        </nits-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--begin: Form Actions -->
                <div class="kt-form__actions">
                    <div class="btn btn-secondary btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u" data-ktwizard-type="action-prev">
                        Previous
                    </div>
                    <div class="btn btn-success btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u" data-ktwizard-type="action-submit" @click.prevent="submit">
                        Submit
                    </div>
                    <div class="btn btn-brand btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u" data-ktwizard-type="action-next">
                        Next Step
                    </div>
                </div>

                <!--end: Form Actions -->
            </form>

            <!--end: Form Wizard Form-->
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import {KTUtil} from './../../../theme/framework/lib/util';
    import {KTWizard} from './../../../theme/framework/components/foundation/wizard/wizard';
    import api from './../../../models/_api'

    export default {
        name: "form-wizard-1",
        props: ['wizardData', 'apiUrl'],
        data() {
            return {
                form: {},
                errors: []
            }
        },
        created() {
           // Class definition
            var KTWizard1 = function () {

                var wizard;

                // Private functions
                var initWizard = function () {
                    // Initialize form wizard
                    wizard = new KTWizard('kt_wizard_v1', {
                        startStep: 1
                    });

                    // Validation before going to next page
                    wizard.on('beforeNext', function(wizardObj) {
                        // wizardObj.stop();
                        // Swal.fire({
                        //     "title": "",
                        //     "text": "There are some errors in your submission. Please correct them.",
                        //     "type": "error",
                        //     "confirmButtonClass": "btn btn-secondary"
                        // });
                    })

                    // Change event
                    wizard.on('change', function(wizard) {
                        setTimeout(function() {
                            KTUtil.scrollTop();
                        }, 500);
                    });
                }

                return {
                    // public functions
                    init: function() {
                        initWizard();
                    }
                };
            }();

            jQuery(document).ready(function() {
                KTWizard1.init();
            });

        },
        methods: {
            submit() {
                new api().create(this.apiUrl, this.form).then(response => {
                    this.loading = false
                    Swal.fire({
                        title: "Holla!",
                        text: "Saved successfully",
                        type: "success"
                    }).then((a) => {
                        console.log('check');
                        // if(a){
                        //     this.$router.push({ name: this.backUrl })
                        // }
                    })
                }).catch((error) => {
                    this.errors = error
                    this.loading = false
                    Swal.fire({
                        title: "Oops!",
                        text: "Mistake in input",
                        type: "error",
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../../theme/app/custom/wizard/wizard-v1";
    @import "./../../../theme/framework/vendors/fontawesome5/css/all.min.css";
    @import "./../../../theme/framework/vendors/flaticon/flaticon.css";
    @import "./../../../theme/framework/vendors/flaticon2/flaticon.css";
</style>
