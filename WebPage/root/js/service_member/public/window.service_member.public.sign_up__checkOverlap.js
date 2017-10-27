//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/public/window.service_member.public.sign_up__checkOverlap.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * Signup 요청 함수
 * @function
 * @param {Object} d
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.public.sign_up__checkOverlap = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up__checkOverlap():void----------" );

	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/public/sign_up__checkOverlap?";

	window.b2link_service.common._fn_req( _url + window.service_member.public.sign_up__checkOverlap.params( d ), cbFunction );

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up__checkOverlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;