//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/101_define_window.b2link_service.STATIC.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.STATIC.CONST;

window.b2link_service.STATIC.CONST = window.b2link_service.STATIC.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.STATIC.CONST;

//--------------------------------------------------window.b2link_service.STATIC.CONST.RESPONSE_CODE;

window.b2link_service.STATIC.CONST.RESPONSE_CODE = window.b2link_service.STATIC.CONST.RESPONSE_CODE || {};

(function(){
	var _ = window.b2link_service.STATIC.CONST.RESPONSE_CODE;
		_.__defineGetter__( "REQUEST_FAILED"       , function(){ return  0; } );
		_.__defineGetter__( "REQUEST_SUCCESS"      , function(){ return  1; } );
		_.__defineGetter__( "BAD_VALUE"            , function(){ return  2; } );
		_.__defineGetter__( "HOST_NOT_FOUND"       , function(){ return  7; } );
		_.__defineGetter__( "AUTHENTICATION_FAILED", function(){ return 18; } );
		_.__defineGetter__( "NETWORK_TIMEOUT"      , function(){ return 89; } );
		_.__defineGetter__( "OPERATION_FAILED"     , function(){ return 96; } );
})();

//--------------------------------------------------window.b2link_service.STATIC.CONST.RESPONSE_CODE;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;