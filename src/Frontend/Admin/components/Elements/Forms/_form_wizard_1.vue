<template>
    <div class="kt-grid  kt-wizard-v1 kt-wizard-v1--white" id="kt_wizard_v1" data-ktwizard-state="step-first">
        <div class="kt-grid__item">

            <!--begin: Form Wizard Nav -->
            <div class="kt-wizard-v1__nav">

                <div class="kt-wizard-v1__nav-items">

                    <a slot="title" class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step" v-for="(item, index) in wizardData" :data-ktwizard-state="index === 0 ? 'current' : null">
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

                <div slot="wizard_fields" class="kt-wizard-v1__content" data-ktwizard-type="step-content" v-for="(item, index) in wizardData" :data-ktwizard-state="index === 0 ? 'current' : null">

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
                                            :hint="col.config_elements.hint"
                                            :error="col.config_elements.error"
                                            v-model="form[col.field_name]"
                                            @change="inputChanged($event, col.field_name)"
                                        >
                                        </nits-input>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-select'">
                                        <nits-select
                                            :label="col.config_elements.label"
                                            :options="options[col.field_name]"
                                            :error="col.config_elements.error"
                                            v-model="form[col.field_name]"
                                            @change="selectChange($event, col.field_name)"
                                        >
                                        </nits-select>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-checkbox'">
                                        <nits-checkbox
                                            :label="col.config_elements.label"
                                            :options="options[col.field_name]"
                                            v-model="form[col.field_name]"
                                            :type="col.config_elements.type"
                                            :orientation="col.config_elements.orientation"
                                            :color="col.config_elements.color"
                                            :bold="col.config_elements.bold"
                                            :solid="col.config_elements.solid"
                                            @change="changeCheckbox($event, col.field_name)"
                                        >
                                        </nits-checkbox>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-date-picker'">
                                        <nits-date-picker
                                            :label="col.config_elements.label"
                                            :placeholder="col.config_elements.placeholder"
                                            :hint="col.config_elements.hint"
                                            v-model="form[col.field_name]"
                                            @change="changeDatePicker($event, col.field_name)"
                                        >
                                        </nits-date-picker>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-date-time-picker'">
                                        <nits-date-time-picker
                                            :label="col.config_elements.label"
                                            :placeholder="col.config_elements.placeholder"
                                            :hint="col.config_elements.hint"
                                            v-model="form[col.field_name]"
                                            @change="changeDateTimePicker($event, col.field_name)"
                                        >
                                        </nits-date-time-picker>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-dropzone'">
                                        <nits-dropzone
                                            :label="col.config_elements.label"
                                            :hint="col.config_elements.hint"
                                            :maxFile="col.config_elements.maxFile"
                                            :maxFileSize="col.config_elements.maxFileSize"
                                            :uploadApi="col.config_elements.uploadApi"
                                            :acceptedFiles="col.config_elements.acceptedFiles"
                                            v-model="form[col.field_name]"
                                            @change="changeDateTimePicker($event, col.field_name)"
                                        >
                                        </nits-dropzone>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-multiselect'">
                                        <nits-multiselect
                                            v-model="form[col.field_name]"
                                            :label="col.config_elements.label"
                                            :placeholder="col.config_elements.placeholder"
                                            :options="options[col.field_name]"
                                            :live_search="col.config_elements.live_search"
                                            :live_search_placeholder="col.config_elements.live_search_placeholder"
                                            @change="changeMultiSelect($event, col.field_name)"
                                        >
                                        </nits-multiselect>
                                    </div>
                                    <div v-else-if="col.form_type === 'nits-multiselect-2'">
                                        <nits-multiselect-2
                                            v-model="form[col.field_name]"
                                            :label="col.config_elements.label"
                                            :api="col.config_elements.api"
                                            :placeholder="col.config_elements.placeholder"
                                            :minimumInputLength="col.config_elements.minimumInputLength"
                                            @change="changeMultiSelect2($event, col.field_name)"
                                        >
                                        </nits-multiselect-2>
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
    import api from 'NitsModels/_api'
    import {KTUtil} from 'NitsTheme/framework/lib/util';
    import {KTWizard} from 'NitsTheme/framework/components/foundation/wizard/wizard';



    export default {
        name: "form-wizard-1",
        props: ['wizardData', 'options', 'form', 'api_url'],
        data() {
            return {
                errors: []
            }
        },
        mounted() {
            //Wizard Code..
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
            inputChanged(event , field) {
                this.$emit('inputChanged', event, field)
            },
            selectChange(event, field) {
                this.$emit('selectChange', event, field)
            },
            changeCheckbox(event, field) {
                this.$emit('changeCheckbox', event, field)
            },
            changeDatePicker(event, field) {
                this.$emit('changeDatePicker', event, field)
            },
            changeDateTimePicker(event, field) {
                this.$emit('changeDateTimePicker', event, field)
            },
            changeMultiSelect(event, field) {
                this.$emit('changeMultiSelect', event, field)
            },
            changeMultiSelect2(event, field) {
                this.$emit('changeMultiSelect2', event, field)
            },
            submit() {
                this.$emit('formWizardSubmit')
                new api().create(this.api_url, this.form).then(response => {
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
            },
        },
        watch: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../../theme/app/custom/wizard/wizard-v1";
    @import "./../../../theme/framework/vendors/fontawesome5/css/all.min.css";
    @import "./../../../theme/framework/vendors/flaticon/flaticon.css";
    @import "./../../../theme/framework/vendors/flaticon2/flaticon.css";
</style>
