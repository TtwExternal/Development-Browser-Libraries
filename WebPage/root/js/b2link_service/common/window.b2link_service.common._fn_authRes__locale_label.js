//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.b2link_service.common._fn_authRes__locale_label.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.b2link_service.common._fn_authRes__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.common._fn_authRes__locale_label():void----------" );

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - var r = JSON.parse( result ); -  Error : " + e );
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

	var resultString;
	var resultObj;

	try
	{
		resultString = window.b2link.string.applyParentheses(
			result
			, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url )
		);
	}
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - resultString = window.b2link.string.applyParentheses( -  Error : " + e );
		//debugger;
	}

	try{ resultObj = JSON.parse( resultString ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - resultObj = JSON.parse( resultString ); -  Error : " + e );
		//debugger;
	}

	if( resultObj )
	{
		try{ cbFunction( resultObj ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - cbFunction( resultObj ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( JSON.parse( result ) ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - cbFunction( JSON.parse( result ) ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.common._fn_authRes__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;