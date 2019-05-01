<template>
    <div class="kt-grid  kt-wizard-v1 kt-wizard-v1--white" id="kt_wizard_v1" data-ktwizard-state="step-first">
        <div class="kt-grid__item">

            <!--begin: Form Wizard Nav -->
            <div class="kt-wizard-v1__nav">
                <div class="kt-wizard-v1__nav-items">
                    <a class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step" data-ktwizard-state="current">
                        <div class="kt-wizard-v1__nav-body">
                            <div class="kt-wizard-v1__nav-icon">
                                <i class="flaticon-bus-stop"></i>
                            </div>
                            <div class="kt-wizard-v1__nav-label">
                                1) Setup Location
                            </div>
                        </div>
                    </a>
                    <a class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step">
                        <div class="kt-wizard-v1__nav-body">
                            <div class="kt-wizard-v1__nav-icon">
                                <i class="flaticon-list"></i>
                            </div>
                            <div class="kt-wizard-v1__nav-label">
                                2) Enter Details
                            </div>
                        </div>
                    </a>
                    <a class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step">
                        <div class="kt-wizard-v1__nav-body">
                            <div class="kt-wizard-v1__nav-icon">
                                <i class="flaticon-responsive"></i>
                            </div>
                            <div class="kt-wizard-v1__nav-label">
                                3) Select Services
                            </div>
                        </div>
                    </a>
                    <a class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step">
                        <div class="kt-wizard-v1__nav-body">
                            <div class="kt-wizard-v1__nav-icon">
                                <i class="flaticon-truck"></i>
                            </div>
                            <div class="kt-wizard-v1__nav-label">
                                4) Delivery Address
                            </div>
                        </div>
                    </a>
                    <a class="kt-wizard-v1__nav-item" href="#" data-ktwizard-type="step">
                        <div class="kt-wizard-v1__nav-body">
                            <div class="kt-wizard-v1__nav-icon">
                                <i class="flaticon-globe"></i>
                            </div>
                            <div class="kt-wizard-v1__nav-label">
                                5) Review and Submit
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

                <!--begin: Form Wizard Step 1-->
                <div class="kt-wizard-v1__content" data-ktwizard-type="step-content" data-ktwizard-state="current">
                    <div class="kt-heading kt-heading--md">Setup Your Current Location</div>
                    <div class="kt-form__section kt-form__section--first">
                        <div class="kt-wizard-v1__form">
                            <div class="form-group">
                                <label>Address Line 1</label>
                                <input type="text" class="form-control" name="address1" placeholder="Address Line 1" value="Address Line 1">
                                <span class="form-text text-muted">Please enter your Address.</span>
                            </div>
                            <div class="form-group">
                                <label>Address Line 2</label>
                                <input type="text" class="form-control" name="address2" placeholder="Address Line 2" value="Address Line 2">
                                <span class="form-text text-muted">Please enter your Address.</span>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Postcode</label>
                                        <input type="text" class="form-control" name="postcode" placeholder="Postcode" value="3000">
                                        <span class="form-text text-muted">Please enter your Postcode.</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>City</label>
                                        <input type="text" class="form-control" name="city" placeholder="City" value="Melbourne">
                                        <span class="form-text text-muted">Please enter your City.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>State</label>
                                        <input type="text" class="form-control" name="state" placeholder="State" value="VIC">
                                        <span class="form-text text-muted">Please enter your Postcode.</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Country:</label>
                                        <select name="country" class="form-control">
                                            <option value="IN">India</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UM">United States Minor Outlying Islands</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end: Form Wizard Step 1-->

                <!--begin: Form Wizard Step 2-->
                <div class="kt-wizard-v1__content" data-ktwizard-type="step-content">
                    <div class="kt-heading kt-heading--md">Enter the Details of your Delivery</div>
                    <div class="kt-form__section kt-form__section--first">
                        <div class="kt-wizard-v1__form">
                            <div class="form-group">
                                <label>Package Details</label>
                                <input type="text" class="form-control" name="package" placeholder="Package Details" value="Complete Workstation (Monitor, Computer, Keyboard & Mouse)">
                                <span class="form-text text-muted">Please enter your Pakcage Details.</span>
                            </div>
                            <div class="form-group">
                                <label>Package Weight in KG</label>
                                <input type="text" class="form-control" name="weight" placeholder="Package Weight" value="25">
                                <span class="form-text text-muted">Please enter your Package Weight in KG.</span>
                            </div>
                            <div class="kt-wizard-v1__form-label">Package Dimensions</div>
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label>Package Width in CM</label>
                                        <input type="text" class="form-control" name="width" placeholder="Package Width" value="110">
                                        <span class="form-text text-muted">Please enter your Package Width in CM.</span>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label>Package Height in CM</label>
                                        <input type="text" class="form-control" name="height" placeholder="Package Length" value="90">
                                        <span class="form-text text-muted">Please enter your Package Height in CM.</span>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label>Package Length in CM</label>
                                        <input type="text" class="form-control" name="length" placeholder="Package Length" value="150">
                                        <span class="form-text text-muted">Please enter your Package Length in CM.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end: Form Wizard Step 2-->

                <!--begin: Form Wizard Step 3-->
                <div class="kt-wizard-v1__content" data-ktwizard-type="step-content">
                    <div class="kt-heading kt-heading--md">Select your Services</div>
                    <div class="kt-form__section kt-form__section--first">
                        <div class="kt-wizard-v1__form">
                            <div class="form-group">
                                <label>Delivery Type</label>
                                <select name="delivery" class="form-control">
                                    <option value="">Select a Service Type Option</option>
                                    <option value="overnight" selected>Overnight Delivery (within 48 hours)</option>
                                    <option value="express">Express Delivery (within 5 working days)</option>
                                    <option value="basic">Basic Delivery (within 5 - 10 working days)</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Packaging Type</label>
                                <select name="packaging" class="form-control">
                                    <option value="">Select a Packaging Type Option</option>
                                    <option value="regular" selected>Regular Packaging</option>
                                    <option value="oversized">Oversized Packaging</option>
                                    <option value="fragile">Fragile Packaging</option>
                                    <option value="frozen">Frozen Packaging</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Preferred Delivery Window</label>
                                <select name="preferreddelivery" class="form-control">
                                    <option value="">Select a Preferred Delivery Option</option>
                                    <option value="morning" selected>Morning Delivery (8:00AM - 11:00AM)</option>
                                    <option value="afternoon">Afternoon Delivery (11:00AM - 3:00PM)</option>
                                    <option value="evening">Evening Delivery (3:00PM - 7:00PM)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end: Form Wizard Step 3-->

                <!--begin: Form Wizard Step 4-->
                <div class="kt-wizard-v1__content" data-ktwizard-type="step-content">
                    <div class="kt-heading kt-heading--md">Setup Your Delivery Location</div>
                    <div class="kt-form__section kt-form__section--first">
                        <div class="kt-wizard-v1__form">
                            <div class="form-group">
                                <label>Address Line 1</label>
                                <input type="text" class="form-control" name="locaddress1" placeholder="Address Line 1" value="Address Line 1">
                                <span class="form-text text-muted">Please enter your Address.</span>
                            </div>
                            <div class="form-group">
                                <label>Address Line 2</label>
                                <input type="text" class="form-control" name="locaddress2" placeholder="Address Line 2" value="Address Line 2">
                                <span class="form-text text-muted">Please enter your Address.</span>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Postcode</label>
                                        <input type="text" class="form-control" name="locpostcode" placeholder="Postcode" value="3072">
                                        <span class="form-text text-muted">Please enter your Postcode.</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>City</label>
                                        <input type="text" class="form-control" name="loccity" placeholder="City" value="Preston">
                                        <span class="form-text text-muted">Please enter your City.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>State</label>
                                        <input type="text" class="form-control" name="locstate" placeholder="State" value="VIC">
                                        <span class="form-text text-muted">Please enter your Postcode.</span>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label>Country:</label>
                                        <select name="loccountry" class="form-control">
                                            <option value="">Select</option>
                                            <option value="IN">India</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UM">United States Minor Outlying Islands</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end: Form Wizard Step 4-->

                <!--begin: Form Wizard Step 5-->
                <div class="kt-wizard-v1__content" data-ktwizard-type="step-content">
                    <div class="kt-heading kt-heading--md">Review your Details and Submit</div>
                    <div class="kt-form__section kt-form__section--first">
                        <div class="kt-wizard-v1__review">
                            <div class="kt-wizard-v1__review-item">
                                <div class="kt-wizard-v1__review-title">
                                    Current Address
                                </div>
                                <div class="kt-wizard-v1__review-content">
                                    Address Line 1<br />
                                    Address Line 2<br />
                                    Melbourne 3000, VIC, Australia
                                </div>
                            </div>
                            <div class="kt-wizard-v1__review-item">
                                <div class="kt-wizard-v1__review-title">
                                    Delivery Details
                                </div>
                                <div class="kt-wizard-v1__review-content">
                                    Package: Complete Workstation (Monitor, Computer, Keyboard & Mouse)<br />
                                    Weight: 25kg<br />
                                    Dimensions: 110cm (w) x 90cm (h) x 150cm (L)
                                </div>
                            </div>
                            <div class="kt-wizard-v1__review-item">
                                <div class="kt-wizard-v1__review-title">
                                    Delivery Service Type
                                </div>
                                <div class="kt-wizard-v1__review-content">
                                    Overnight Delivery with Regular Packaging<br />
                                    Preferred Morning (8:00AM - 11:00AM) Delivery
                                </div>
                            </div>
                            <div class="kt-wizard-v1__review-item">
                                <div class="kt-wizard-v1__review-title">
                                    Delivery Address
                                </div>
                                <div class="kt-wizard-v1__review-content">
                                    Address Line 1<br />
                                    Address Line 2<br />
                                    Preston 3072, VIC, Australia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end: Form Wizard Step 5-->

                <!--begin: Form Actions -->
                <div class="kt-form__actions">
                    <div class="btn btn-secondary btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u" data-ktwizard-type="action-prev">
                        Previous
                    </div>
                    <div class="btn btn-success btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u" data-ktwizard-type="action-submit">
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

        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../../theme/app/custom/wizard/wizard-v1";
    @import "./../../../theme/framework/vendors/fontawesome5/css/all.min.css";
    @import "./../../../theme/framework/vendors/flaticon/flaticon.css";
    @import "./../../../theme/framework/vendors/flaticon2/flaticon.css";
</style>
