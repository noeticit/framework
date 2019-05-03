<template>
    <div class="kt-grid  kt-wizard-v1 kt-wizard-v1--white" id="kt_wizard_v1" data-ktwizard-state="step-first">
        <div class="kt-grid__item">

            <!--begin: Form Wizard Nav -->
            <div class="kt-wizard-v1__nav">

                <div class="kt-wizard-v1__nav-items">

                    <slot name="title"></slot>

                </div>
            </div>

            <!--end: Form Wizard Nav -->
        </div>
        <div class="kt-grid__item kt-grid__item--fluid kt-wizard-v1__wrapper">

            <!--begin: Form Wizard Form-->
            <form class="kt-form" id="kt_form">

                <slot name="wizard_fields"></slot>

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
    import {KTUtil} from './../../../theme/framework/lib/util';
    import {KTWizard} from './../../../theme/framework/components/foundation/wizard/wizard';

    export default {
        name: "form-wizard-1",
        props: ['wizardData', 'apiUrl'],
        data() {
            return {
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
                this.$emit('formWizardSubmit')
            },
        },
        watch: {
            // form: {
            //     handler: function (val, oldVal) {
            //         this.$emit('inputChangeFromFormWizard', this.form)
            //     },
            //     deep: true
            // }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../../theme/app/custom/wizard/wizard-v1";
    @import "./../../../theme/framework/vendors/fontawesome5/css/all.min.css";
    @import "./../../../theme/framework/vendors/flaticon/flaticon.css";
    @import "./../../../theme/framework/vendors/flaticon2/flaticon.css";
</style>
