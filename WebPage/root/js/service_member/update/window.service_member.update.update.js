//----------------------------------------------------------------------------------------------------;
var fileNm = "js/service_member/update/window.service_member.update.update.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * update 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.update.update = function( d, cbFunction )
{
	window.AlexLog.timeStamp( "---- [ S ] - window.service_member.update.update():void----------" );

	var _url = window.b2link.url.getServerURLByDB( "member" ) + "member/update/update?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.AlexLog.timeStamp( "---- [ E ] - window.service_member.update.update():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;