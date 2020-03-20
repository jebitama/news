<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
     <head>
        <meta name="robots" content="index, follow"/>		
		<meta name="description" content="Ballinews - web/vector/3d" />
		<meta name="keywords" content="Web, Siti web, Websites, Applicazioni, Web app, 3d, Maxwell Render, Render, Rendering, Verona, Ingegnere, Blog, CMS, Wordpress, CakePHP" />


        <title>
            Balinews            | 
            Update        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/front/reset.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/front/text.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/front/frontend.css')}}" />
    </head>
    <body>
        @include ('layouts/frontLayout/front_header')
        @yield('content')
        @include ('layouts/frontLayout/front_footer')
        <script type="text/javascript" src="{{asset('js/front/mootools-core.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/front/mootools-more.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/front/Loop.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/front/script.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/front/SlideShow.js')}}"></script>
        
    </body>
</html>
