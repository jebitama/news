@extends('layouts/frontLayout/front_design')
@section('content')			
        <div class="square image" id="slides">
        <img src="{{asset('/media/filter/l/transfer/img/aimaro1.jpg')}}"  alt="" width="600" height="400"/>        
        <img src="{{asset('/media/filter/l/transfer/img/aimaro2.jpg')}}"  alt="" width="600" height="400"/>        
        <img src="{{asset('/media/filter/l/transfer/img/aimaro3.jpg')}}"  alt="" width="600" height="400"/>        
        <img src="{{asset('/media/filter/l/transfer/img/aimaro4.jpg')}}"  alt="" width="600" height="400"/>        
        <img src="{{asset('/media/filter/l/transfer/img/aimaro5.jpg')}}"  alt="" width="600" height="400"/>    
        </div>
<div class="square dark">
    <div class="text">
        <h2>
            Villa Aimaro        </h2>
        <p>
            <a id="showPrevious">&laquo;</a>
            <a id="showNext">&raquo;</a>
        </p>
    </div>
</div>
<div class="clear"></div>
<div class="square dummy clear">
    &nbsp;
</div>
<div class="square">
    <div class="text">
        <p>Rendering per la brochure delle residenze Ville Aimaro, sulle rive del lago di Garda<em>/Rendering for brochure of the Vile Aimaro project on lake Garda<br /></em></p>    </div>
</div>
<div class="square">
    <div class="text">
        <p>
            <strong>anno<em>/year</em></strong>
            <br/>
			2013        </p>
        <p>
            <strong>cliente<em>/client</em></strong>
            <br/>
            &ndash;        </p>
        <p>
            <strong>note<em>/notes</em></strong>
            <br/>
            Maxwell Render        </p>
    </div>
</div>
		
@endsection
