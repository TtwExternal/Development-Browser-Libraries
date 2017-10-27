//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/common/window.service_member.common.sign_out.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_out.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link_ui.message.error( "Signout Failure" );
			window.b2link.event.dispatchCE__SIGN_OUT_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link_ui.message.message( "Signout Success" );
			window.b2link.event.dispatchCE__SIGN_OUT_SUCCESS( window, null );
		}

		cbFunction( r );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_out.res():void----------" );
	};

	/**
	 * Signout 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_out = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_out():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				_t.PROXY
					+ window.b2link.url.getServerURLByDB( "member" )
					+ "member/common/sign_out?"
					+ window.service_member.common.sign_out.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_out():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;