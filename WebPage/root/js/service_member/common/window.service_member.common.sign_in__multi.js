//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/common/window.service_member.common.sign_in__multi.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in__multi.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
			return;
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
			return;
		}

		var rO;
		try{ rO = JSON.parse( result ); }
		catch( er )
		{
			window.b2link_ui.message.message( "알수 없는 에러 발생" );
			debugger;
			return;
		}

		r = window.b2link.response.getResultStatus( rO );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
			return;
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
			return;
		}

		//window.TtwLog.timeStamp( "typeof r : " + typeof( r ) );
		window.b2link.session.setSession( r );
		cbFunction( r );

		window.b2link_ui.message.message( "Sign In Success" );
		window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in__multi.res():void----------" );
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in__multi = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in__multi():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
					window.b2link.url.getServerURLByDB( "member" )
					+ "member/common/sign_in__multi?"
					//+ "member__SYS0030/common/sign_in__multi?";
					+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;