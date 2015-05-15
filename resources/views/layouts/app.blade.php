@extends('layouts.base')

@section('stylesheets')
    <link rel="stylesheet" href="{{ elixir('css/styles.css') }}">
@stop

@section('scripts-head')
    @parent

    {{-- Google Analytics --}}
    <script>
    @if (empty(getenv('GA_TRACKING_ID')) || getenv('GA_TRACKING_ID') == 'UA-XXXXX-X')
        console.warn('Remember to set a valid Google Analytics property tracking ID for this app.');
    @else
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create', '{{ getenv('GA_TRACKING_ID') }}', 'auto');ga('send','pageview');
    @endif
    </script>
@stop

@section('body-open')
    @parent
    @if(file_exists(public_path() . '/svg/symbols.svg'))
        <?php include(public_path() . '/svg/symbols.svg'); ?>
    @endif
@stop

@section('body-content')
    @yield('content')
@stop

@section('scripts-body')
    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="{{ asset("bower_components/jquery/dist/jquery.min.js") }}"><\/script>')</script>
    <script src="{{ elixir('js/bundle.js') }}"></script>
@stop
