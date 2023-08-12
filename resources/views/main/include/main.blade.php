<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>


    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('html_css/plugins/fontawesome-free/css/all.min.css')}}">
    <!-- Ekko Lightbox -->
    <link rel="stylesheet" href="{{asset('html_css/plugins/ekko-lightbox/ekko-lightbox.css')}}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('html_css/dist/css/adminlte2.min.css')}}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{asset('html_css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>



<div id="app">
    @yield('content')
</div>


<script src="{{asset('html_css/plugins/jquery/jquery.min.js')}}"></script>
<!-- Bootstrap -->
<script src="{{asset('html_css/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- Ekko Lightbox -->
<script src="{{asset('html_css/plugins/ekko-lightbox/ekko-lightbox.min.js')}}"></script>
<!-- overlayScrollbars -->
<script src="{{asset('html_css/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('html_css/dist/js/adminlte.min.js')}}"></script>
<!-- Filterizr-->
<script src="{{asset('html_css/plugins/filterizr/jquery.filterizr.min.js')}}"></script>
<!-- AdminLTE for demo purposes -->
{{--<script src="{{asset('html_css/dist/js/demo.js')}}"></script>--}}
</body>
</html>
