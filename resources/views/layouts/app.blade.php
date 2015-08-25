@extends('layouts.base')

@section('stylesheets')
    <link rel="stylesheet" href="{{ elixir('css/styles.css') }}">
@stop

@section('scripts-head')
    @parent

    {{-- Create picture element until the polyfill loads
         https://scottjehl.github.io/picturefill/#getting-started --}}
    <script>
        document.createElement('picture');
    </script>

    {{-- Google Analytics --}}
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));

        ga('create', '{{ env("GA_TRACKING_ID", "UA-XXXXX-X") }}', 'auto');
        ga('send', 'pageview');

        @if (empty(env('GA_TRACKING_ID')) || env('GA_TRACKING_ID') == 'UA-XXXXX-X')
            console.warn('Warning: Remember to set a valid Google Analytics property tracking ID.');
        @endif
    </script>
@stop

@section('body-content')
    @yield('content')
@stop

@section('scripts-body')
    @parent

    {{-- Modernizr --}}
    @if (file_exists(public_path('js/vendor/modernizr-custom.js')))
        <script src="{{ asset('js/vendor/modernizr-custom.js') }}"></script>
    @else
        <script src="{{ asset('bower_components/modernizr/modernizr.js') }}"></script>
        <script>console.warn('Warning: Using the bloated development version of Modernizr. Use a custom build.');</script>
    @endif

    {{-- jQuery --}}
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="{{ asset("bower_components/jquery/dist/jquery.min.js") }}"><\/script>')</script>

    {{-- Application --}}
    <script src="{{ elixir('js/bundle.js') }}"></script>
@stop
