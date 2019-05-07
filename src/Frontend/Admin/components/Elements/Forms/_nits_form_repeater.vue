<template>
    <div id="kt_repeater_1">
        <div class="form-group  row" id="kt_repeater_1">
            <label class="col-lg-2 col-form-label">Contacts:</label>
            <div data-repeater-list="" class="col-lg-10">
                <div data-repeater-item class="form-group row align-items-center">
                    <div class="col-md-3">
                        <div class="kt-form__group--inline">
                            <div class="kt-form__label">
                                <label>Name:</label>
                            </div>
                            <div class="kt-form__control">
                                <input type="email" class="form-control" placeholder="Enter full name">
                            </div>
                        </div>
                        <div class="d-md-none kt-margin-b-10"></div>
                    </div>
                    <div class="col-md-3">
                        <div class="kt-form__group--inline">
                            <div class="kt-form__label">
                                <label class="kt-label m-label--single">Number:</label>
                            </div>
                            <div class="kt-form__control">
                                <input type="email" class="form-control" placeholder="Enter contact number">
                            </div>
                        </div>
                        <div class="d-md-none kt-margin-b-10"></div>
                    </div>
                    <div class="col-md-2">
                        <div class="kt-radio-inline">
                            <label class="kt-checkbox kt-checkbox--state-success">
                                <input type="checkbox"> Primary
                                <span></span>
                            </label>
                        </div>
                    </div>
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
