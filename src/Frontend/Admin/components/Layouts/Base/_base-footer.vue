<template>
    <div  style="position: fixed; bottom: 0; width: 100%; margin-left: -12px; margin-right:-35px; margin-bottom: 0px;">
        <div class="footer">
            <div class="row">
                <!--<input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">-->
                <div class="col-lg-1">
                    <img class="" v-bind:src="imageUrl" style=" height: 20px; width:25px; margin-left: 35px ; margin-right:-10px; margin-top:15px; ">
                </div>
                <div class="col-lg-4">
                    <p style="margin-left: -30px; color:#000000; font-size:11px; font-family: arial; padding-top: 10px "> @ 2020-2021 All Rights Reserved.
                        <br/>
                        Use of this product and service is subject to our Terms of Service.
                    </p>
                </div>
                <div class="col-lg-6">
                    <p style="margin-left: 280px; color:#000000; margin-top: -1px; font-family: arial; font-size:11px; padding-top: 10px "> (+91) 797 715 5121/ contact@biltrax.com</p>
                    <div class="row " style="margin-bottom:-1px; margin-top: -9px; margin-left: 70px" >
                        <!--                            <a href="#" class="col-lg-5" v-for="items in docs1" @click.prevent="openLinks1(items)" data-toggle="modal" data-target="#showPdfModal1" style="margin-left: 200px; width: 150px; font-family: arial; font-size:11px; ">Terms of Service |</a>-->
                        <a  class="col-lg-5" target="_blank" v-for="items in docs1" :href="openLinks1(items)"  style="margin-left: 200px; width: 150px; font-family: arial; font-size:11px; ">Terms of Service |</a>
                        <!--                            <a :href="items.link" target="_blank" >-->
                        <!--                                {{items.name.substring(0, items.name.indexOf('.'))}}-->
                        <!--                            </a>-->
                        <a class="col-lg-4" target="_blank" v-for="items in docs2" :href="openLinks2(items)"  style="margin-left: 295px; width: 160px; font-family: arial; font-size:11px; margin-top: -15px">Privacy Policy |</a>
                        <a class="col-lg-3" target="_blank" v-for="items in docs3" :href="openLinks3(items)"  style="margin-left: 375px; font-family: arial; font-size:11px; margin-top: -15px">Disclaimer</a>
                    </div>
                </div>

            </div>
            <!--                <div class="modal inmodal" id="showPdfModal1" tabindex="-1" role="dialog">-->
            <!--                    <div class="modal-dialog modal-lg">-->
            <!--                        <div class="modal-content animated fadeIn">-->
            <!--                            <div class="modal-header">-->
            <!--                                <h4 class="modal-title pull-left" style="font-size: 22px">{{"Terms of Service"}}</h4><br/><br/><br/>-->
            <!--                                <button type="button" class="close" data-dismiss="modal">-->

            <!--                                    <span aria-hidden="true">&times;</span>-->
            <!--                                    <span class="sr-only">Close</span>-->
            <!--                                </button>-->

            <!--                            </div>-->
            <!--                            <div class="modal-body">-->
            <!--                                <div class="row">-->
            <!--                                    <div style=" height: 480px; position: relative; width: 100%">-->
            <!--                                        <iframe :src="pdfSource1" style="width:100%; height:500px;" frameborder="0" scrolling="no" seamless="" allowfullscreen="allowfullscreen"></iframe>-->
            <!--                                        <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;"></div>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                            <div class="modal-footer">-->
            <!--                                <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="modal inmodal" id="showPdfModal2" tabindex="-1" role="dialog">-->
            <!--                    <div class="modal-dialog modal-lg">-->
            <!--                        <div class="modal-content animated fadeIn">-->
            <!--                            <div class="modal-header">-->
            <!--                                <h4 class="modal-title pull-left" style="font-size: 22px">{{"Privacy Policy"}}</h4><br/><br/><br/>-->
            <!--                                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>-->

            <!--                            </div>-->
            <!--                            <div class="modal-body">-->
            <!--                                <div class="row">-->
            <!--                                    <div style=" height: 480px; position: relative; width: 100%">-->
            <!--                                        <iframe :src="pdfSource2" style="width:100%; height:500px;" frameborder="0" scrolling="no" seamless="" allowfullscreen="allowfullscreen"></iframe>-->
            <!--                                        <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;"></div>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                            <div class="modal-footer">-->
            <!--                                <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="modal inmodal" id="showPdfModal3" tabindex="-1" role="dialog">-->
            <!--                    <div class="modal-dialog modal-lg">-->
            <!--                        <div class="modal-content animated fadeIn">-->
            <!--                            <div class="modal-header">-->
            <!--                                <h4 class="modal-title pull-left" style="font-size: 22px">{{"Disclaimer & Copyright"}}</h4><br/><br/><br/>-->
            <!--                                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>-->

            <!--                            </div>-->
            <!--                            <div class="modal-body">-->
            <!--                                <div class="row">-->
            <!--                                    <div style=" height: 480px; position: relative; width: 100%">-->
            <!--                                        <iframe :src="pdfSource3" style="width:100%; height:500px;" frameborder="0" scrolling="no" seamless="" allowfullscreen="allowfullscreen"></iframe>-->
            <!--                                        <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;"></div>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                            <div class="modal-footer">-->
            <!--                                <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->




        </div>

    </div>
</template>

<script>
    // import Footer from "ProjectComponents/admin/layouts/footer";
    export default {
        name: "base-footer",
        // components: {Footer},
        data(){
            return{
                imageUrl:'/logo/bxsmall.png',
                details:'hello',
                pdfSource1:'',
                pdfSource2:'',
                pdfSource3:'',
                docs1:[{link:'https://d8wzl96tny8ig.cloudfront.net/terms_policies/Terms_biltrax.pdf'}],

                docs2:[{link:'https://d8wzl96tny8ig.cloudfront.net/terms_policies/privacy_policy_biltrax.pdf'}],
                docs3:[{link:'https://d8wzl96tny8ig.cloudfront.net/terms_policies/disclaimer_copyright_biltrax.pdf'}]
            }
        },
        methods:{
            openLinks1(docs){
                if(docs.link){
                    //     // this.pdfSource1='https://docs.google.com/gview?url='+docs.link+'&embedded=true';
                    //     return 'https://docs.google.com/gview?url='+docs.link+'&embedded=true';
                    //     console.log(this.pdfSource1)
                    // }
                    // else{
                    return docs.link;
                }
            },
            openLinks2(docs){
                if(docs.link){
                    // this.pdfSource2='https://docs.google.com/gview?url='+docs.link+'&embedded=true';
                    return docs.link;
                }
                // else{
                //     window.location=docs.link;
                // }
            },
            openLinks3(docs){
                if(docs.link){
                    // this.pdfSource3='https://docs.google.com/gview?url='+docs.link+'&embedded=true';
                    return docs.link;
                }
                // else{
                //     window.location=docs.link;
                // }
            },
        },
    }
</script>

<style scoped>
    .footer {
        /*position: fixed;*/
        bottom: 0;
        width: 100%;
        background-color: white;
    }
    .a:hover{
        color: #337ab7;;
    }
</style>

