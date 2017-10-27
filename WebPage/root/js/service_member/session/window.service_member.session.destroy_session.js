//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/session/window.service_member.session.destroy_session.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();
	var _t = window.b2link.STATIC.CONFIG.URL;

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
	window.service_member.session.destroy_session = function( cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.session.destroy_session():void----------" );

		var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/session/destroy_session?";

		/*/
		window.b2link.session.removeSession();
		//window.b2link_service.common._fn_req( _url + window.service_member.session.destroy_session.params( window.b2link.session.getSession() ), cbFunction );
		window.b2link_service.common._fn_req( _url, cbFunction );
		/*/
		var url = _url + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		window.b2link.session.removeSession();

		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		//++_date;
		//url += "&nCached=" + _date;

		try{ cbFunction( SUtilXMLHttpReqGet.reqSyncReturn( url, null ).responseText ); }
		catch( e )
		{
			//debugger;
			window.TtwLog.timeStamp( e );
		}
		//*/

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.session.destroy_session():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;