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
                            <div v-for="element in item.forms">
                                <div class="row" v-if="element.newRow">
                                    <div v-if="element.column" :class="'col-xl-'+element.column">
                                        <div v-if="element.input_widget === 'nits-input'">
                                            <nits-input
                                                :label="element.label"
                                                :type="element.type"
                                                :placeholder="element.placeholder"
                                                v-model="element.value"
                                                :hint="element.hint"
                                                :error="element.error"
                                            >
                                            </nits-input>
                                        </div>
                                        <div v-if="element.input_widget === 'nits-select'">
                                            <nits-select
                                                :label="element.label"
                                                :options="element.options"
                                                v-model="element.value"
                                                error="Invalid Input"
                                            >
                                            </nits-select>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="element.column" :class="'col-xl-'+element.column">
                                    <div v-if="element.input_widget === 'nits-input'">
                                        <nits-input
                                            :label="element.label"
                                            :type="element.type"
                                            :placeholder="element.placeholder"
                                            v-model="element.value"
                                            :hint="element.hint"
                                            :error="element.error"
                                        >
                                        </nits-input>
                                    </div>
                                    <div v-if="element.input_widget === 'nits-select'">
                                        <nits-select
                                            :label="element.label"
                                            :options="element.options"
                                            v-model="element.value"
                                            error="Invalid Input"
                                        >
                                        </nits-select>
                                    </div>
                                </div>
                                <div v-else>
                                    <div v-if="element.input_widget === 'nits-input'">
                                        <nits-input
                                            :label="element.label"
                                            :type="element.type"
                                            :placeholder="element.placeholder"
                                            v-model="element.value"
                                            :hint="element.hint"
                                            :error="element.error"
                                        >
                                        </nits-input>
                                    </div>
                                    <div v-if="element.input_widget === 'nits-select'">
                                        <nits-select
                                            :label="element.label"
                                            :options="element.options"
                                            v-model="element.value"
                                            error="Invalid Input"
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
    import swal from 'sweetalert';
    import {KTUtil} from './../../../theme/framework/lib/util';
    import {KTWizard} from './../../../theme/framework/components/foundation/wizard/wizard'

    export default {
        name: "form-wizard-1",
        props: ['wizardData', 'api'],
        data() {
            return {

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
                        // swal({
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
                console.log('Submitted')
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
