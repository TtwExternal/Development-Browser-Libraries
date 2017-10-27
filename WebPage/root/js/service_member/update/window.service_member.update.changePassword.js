//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/update/window.service_member.update.changePassword.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * Change Password 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		mid : ""
		, mpw : ""
		, mpw$new : ""
		, mpw$newConfirm : ""
	}
 * </code>
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.update.changePassword = function( d, cbFunction )
{
	//window.TtwLoog.timeStamp( "---- [ S ] - window.service_member.update.changePassword():void----------" );

	if( !window.b2link.session.getSession__sid() ){window.b2link_ui.message.error( "The session ID does not exist." );debugger;return;}

	var _url = window.b2link.url.getServerURLByDB( "member" ) + "member/update/changePassword?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	//window.TtwLoog.timeStamp( "---- [ E ] - window.service_member.update.changePassword():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;