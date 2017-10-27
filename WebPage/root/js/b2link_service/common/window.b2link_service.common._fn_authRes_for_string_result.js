//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.b2link_service.common._fn_authRes_for_string_result.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.b2link_service.common._fn_authRes_for_string_result = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.common._fn_authRes_for_string_result():void----------" );

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result - var r = JSON.parse( result ); -  Error : " + e );
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

	try{ cbFunction( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result - cbFunction( result ); -  Error : " + e );
		debugger;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.common._fn_authRes_for_string_result():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;