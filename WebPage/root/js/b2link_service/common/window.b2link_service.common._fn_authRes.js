//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.b2link_service.common._fn_authRes.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} req
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_authRes = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.common._fn_authRes():void----------" );

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.b2link_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.common._fn_authRes():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
