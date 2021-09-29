<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Biltrax Construction Data Research Insight & Technologies Private Limited</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">


        <link rel="icon" type="image/png" sizes="16x16" href="/logo/BX_Without_Background.png">
        <meta name="description" content="Login Page">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <meta name="csrf-token" content="{{ csrf_token() }}">
{{--        <link href="/nits-assets/maps-india/jsmaps/jsmaps.css" rel="stylesheet" type="text/css" />--}}
        <!--begin::Web font -->
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
        <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
            <script>
            WebFont.load({
                google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
                active: function() {
                    sessionStorage.fonts = true;
                }
            });
        </script>

    </head>
    <body class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize">

        <div id="layout-three" style="height: 100%;">

        </div>

        <!-- Global User data object -->
        <script>
            window.nitseditor = @json($nitseditor);
        </script>

        <!-- Global User data object end -->

        <script src="{{ mix('nits-assets/js/admin/layout-three.js') }}"></script>
        <!-- Map scripts  -->
        <script src="/nits-assets/maps-india/jsmaps/jsmaps-libs.js" type="text/javascript"></script>
{{--        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2pcHg9E8jDHY_qFV3QEXwEeJGWmIoh3Q&libraries=places"></script>--}}
        <!-- End Map scripts -->
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2pcHg9E8jDHY_qFV3QEXwEeJGWmIoh3Q&callback=initMap"
                type="text/javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>

        <!-- Minify -->

    </body>
</html>
