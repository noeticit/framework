<template>
    <div class="form-group">
        <label class="col-form-label">{{ label }}</label>
        <div class="">
            <div class="kt-dropzone dropzone" :action="uploadApi" id="m-dropzone-one">
                <div class="kt-dropzone__msg dz-message needsclick">
                    <h3 class="kt-dropzone__msg-title">Drop files here or click to upload.</h3>
                    <span class="kt-dropzone__msg-desc">{{ hint }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nits-dropzone",
        props: {
            label: String,
            uploadApi: String,
            hint: String,
            maxFileSize: Number,
            maxFile: Number,
            acceptedFiles: String
        },
        mounted() {
            const self = this;

            var Dropzone = require('dropzone');

            var KTDropzoneDemo = function () {
                // Private functions
                var demos = function () {
                    // single file upload
                    Dropzone.options.kDropzoneOne = {
                        paramName: "file", // The name that will be used to transfer the file
                        maxFiles: self.maxFile,
                        maxFilesize: self.maxFileSize, // MB
                        addRemoveLinks: true,
                        accept: function(file, done) {
                            if (file.name == "output.json") {
                                done("Naha, you don't.");
                            } else {
                                done();
                            }
                        }
                    };

                    // multiple file upload
                    Dropzone.options.kDropzoneTwo = {
                        paramName: "file", // The name that will be used to transfer the file
                        maxFiles: 10,
                        maxFilesize: self.maxFileSize, // MB
                        addRemoveLinks: true,
                        accept: function(file, done) {
                            if (file.name == "justinbieber.jpg") {
                                done("Naha, you don't.");
                            } else {
                                done();
                            }
                        }
                    };

                    // file type validation
                    Dropzone.options.kDropzoneThree = {
                        paramName: "file", // The name that will be used to transfer the file
                        maxFiles: 10,
                        maxFilesize: 10, // MB
                        addRemoveLinks: true,
                        acceptedFiles: "image/*,application/pdf,.psd",
                        accept: function(file, done) {
                            if (file.name == "justinbieber.jpg") {
                                done("Naha, you don't.");
                            } else {
                                done();
                            }
                        }
                    };
                }

                return {
                    // public functions
                    init: function() {
                        demos();
                    }
                };
            }();

            KTDropzoneDemo.init();
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../../theme/framework/config";
    @import "./../../../theme/framework/components/vendors/dropzone/dropzone";
</style>
