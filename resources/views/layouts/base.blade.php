<!DOCTYPE html>
<html class="no-js" lang="{{ $app->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @section('title')
        <title>App Title</title>
    @show

    @section('meta')
        {{-- Page meta tags --}}
    @show

    @section('stylesheets')
        {{-- Page stylesheets --}}
    @show

    @section('scripts-head')
        {{-- External SVG spritesheet file polyfill --}}
        <!--[if IE]>
        <script src="{{ asset('bower_components/svg4everybody/svg4everybody.min.js') }}"></script>
        <![endif]-->

        {{-- window.matchMedia polyfill --}}
        <!--[if lte IE 9]>
        <script src="{{ asset('bower_components/matchmedia/matchMedia.js') }}"></script>
        <script src="{{ asset('bower_components/matchmedia/matchMedia.addListener.js') }}"></script>
        <![endif]-->

        {{-- Modernizr --}}
        @if ($app->environment('production'))
        <script src="{{ asset('js/vendor/modernizr.js') }}"></script>
        @else
        <script src="{{ asset('bower_components/modernizr/modernizr.js') }}"></script>
        @endif
    @show
</head>

@section('body-open')
<body>
@show

    @yield('body-content')

    @section('scripts-body')
        {{-- Scripts are loaded last --}}
    @show

</body>
</html>
