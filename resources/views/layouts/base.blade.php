<!DOCTYPE html>
<html class="no-js" lang="{{ $app->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Make sure our staging/dev sites aren't crawled by search engines --}}
    @if ('production' != app()->environment())
        <meta name="robots" content="noindex">
    @endif

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
        {{-- Scripts needed afap --}}
    @show
</head>

@section('body-open')
<body>
@show

    @yield('body-content')

    @section('scripts-body')
        {{-- Scripts should be loaded last --}}
    @show

</body>
</html>
