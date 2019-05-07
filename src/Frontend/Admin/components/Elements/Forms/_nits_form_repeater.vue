<template>
    <div id="kt_repeater_1">
        <div class="form-group  row" id="kt_repeater_1">
            <label class="col-lg-2 col-form-label">Contacts:</label>
            <div data-repeater-list="" class="col-lg-10">
                <div data-repeater-item class="form-group row align-items-center">
                    <div v-for="(item, index) in elements" :class="item.column ? 'col-md-'+item.column : 'col-md-3'">
                        <div class="kt-form__group--inline">
                            <div v-if="item.form_type === 'nits-input'">
                                <nits-input
                                    :label="item.config_elements.label"
                                    :type="item.config_elements.type"
                                    :placeholder="item.config_elements.placeholder"
                                    :hint="item.config_elements.hint"
                                    v-model="form[item.field_name]"
                                >
                                </nits-input>
                            </div>
                            <div v-else-if="item.form_type === 'nits-select'">
                                <nits-select
                                    :label="item.config_elements.label"
                                    :options="options[item.field_name]"
                                    v-model="form[item.field_name]"
                                    hint="Checing message"
                                >
                                </nits-select>
                            </div>
                            <div v-else-if="item.form_type === 'nits-checkbox'">
                                <nits-checkbox
                                    :label="item.config_elements.label"
                                    :options="options[item.field_name]"
                                    v-model="form[item.field_name]"
                                    :type="item.config_elements.type"
                                    :orientation="item.config_elements.orientation"
                                    :color="item.config_elements.color"
                                    :bold="item.config_elements.bold"
                                    :solid="item.config_elements.solid"
                                >
                                </nits-checkbox>
                            </div>
                            <div v-else-if="item.form_type === 'nits-date-picker'">
                                <nits-date-picker
                                    :label="item.config_elements.label"
                                    :placeholder="item.config_elements.placeholder"
                                    :hint="item.config_elements.hint"
                                    v-model="form[item.field_name]"
                                >
                                </nits-date-picker>
                            </div>
                            <div v-else-if="item.form_type === 'nits-date-time-picker'">
                                <nits-date-time-picker
                                    :label="item.config_elements.label"
                                    :placeholder="item.config_elements.placeholder"
                                    :hint="item.config_elements.hint"
                                    v-model="form[item.field_name]"
                                >
                                </nits-date-time-picker>
                            </div>
                            <div v-else-if="item.form_type === 'nits-dropzone'">
                                <nits-dropzone
                                    :label="item.config_elements.label"
                                    :hint="item.config_elements.hint"
                                    :maxFile="item.config_elements.maxFile"
                                    :maxFileSize="item.config_elements.maxFileSize"
                                    :uploadApi="item.config_elements.uploadApi"
                                    :acceptedFiles="item.config_elements.acceptedFiles"
                                    v-model="form[item.field_name]"
                                >
                                </nits-dropzone>
                            </div>
                            <div v-else-if="item.form_type === 'nits-multiselect'">
                                <nits-multiselect
                                    v-model="form[item.field_name]"

                                    :label="item.config_elements.label"
                                    :placeholder="item.config_elements.placeholder"
                                    :options="options[item.field_name]"
                                    :live_search="item.config_elements.live_search"
                                    :live_search_placeholder="item.config_elements.live_search_placeholder"
                                >
                                </nits-multiselect>
                            </div>
                            <div v-else-if="item.form_type === 'nits-multiselect-2'">
                                <nits-multiselect-2
                                    v-model="form[item.field_name]"
                                    :label="item.config_elements.label"
                                    :api="item.config_elements.api"
                                    :placeholder="item.config_elements.placeholder"
                                    :minimumInputLength="item.config_elements.minimumInputLength"
                                >
                                </nits-multiselect-2>
                            </div>
<!--                            <div class="kt-form__label">-->
<!--                                <label>Name:</label>-->
<!--                            </div>-->
<!--                            <div class="kt-form__control">-->
<!--                                <input type="email" class="form-control" placeholder="Enter full name">-->
<!--                            </div>-->
                        </div>
                        <div class="d-md-none kt-margin-b-10"></div>
                    </div>
<!--                    <div class="col-md-3">-->
<!--                        <div class="kt-form__group&#45;&#45;inline">-->
<!--                            <div class="kt-form__label">-->
<!--                                <label>Name:</label>-->
<!--                            </div>-->
<!--                            <div class="kt-form__control">-->
<!--                                <input type="email" class="form-control" placeholder="Enter full name">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="d-md-none kt-margin-b-10"></div>-->
<!--                    </div>-->
<!--                    <div class="col-md-3">-->
<!--                        <div class="kt-form__group&#45;&#45;inline">-->
<!--                            <div class="kt-form__label">-->
<!--                                <label class="kt-label m-label&#45;&#45;single">Number:</label>-->
<!--                            </div>-->
<!--                            <div class="kt-form__control">-->
<!--                                <input type="email" class="form-control" placeholder="Enter contact number">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="d-md-none kt-margin-b-10"></div>-->
<!--                    </div>-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="kt-radio-inline">-->
<!--                            <label class="kt-checkbox kt-checkbox&#45;&#45;state-success">-->
<!--                                <input type="checkbox"> Primary-->
<!--                                <span></span>-->
<!--                            </label>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="col-md-4">
                        <div data-repeater-delete="" class="btn-sm btn btn-danger btn-pill">
                            <span>
                                <i class="la la-trash-o"></i>
                                <span>Delete</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-2 col-form-label"></label>
            <div class="col-lg-4">
                <div data-repeater-create="" class="btn btn btn-sm btn-brand btn-pill">
                    <span>
                        <i class="la la-plus"></i>
                        <span>Add</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nits-form-repeater",
        props: {
            elements: Array,
            errors: {},
            form: {}
        },
        created() {
            this.elements.forEach(function(element) {
                var key = element.field_name
                // Object.assign(this.errors, {key3: "value3"});
            })
        },
        mounted() {

            require('jquery.repeater');

            var KTFormRepeater = function() {

                // Private functions
                var demo1 = function () {
                    $('#kt_repeater_1').repeater({
                        initEmpty: false,

                        defaultValues: {
                            'text-input': 'foo'
                        },

                        show: function () {
                            $(this).slideDown();
                        },

                        hide: function (deleteElement) {
                            $(this).slideUp(deleteElement);
                        }
                    });
                }
                return {
                    // public functions
                    init: function () {
                        demo1();
                    }
                };
            }();

            jQuery(document).ready(function() {
                KTFormRepeater.init();
            });
        }
    }
</script>

<style scoped>

</style>
