//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.b2link_service.common._fn_req_POST__ArrayBuffer.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();

	/**
	 * 특별히 사용할 용도 외엔 사용 금지 입니다.
	 *
	 * POST 방식의 XMLHTTPRequest 요청
	 *
	 * @function
	 * @param {String} url Server URL
	 * @param {Object} params POST 요청시 전송할 Parameters
	 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
	 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
	 */
	window.b2link_service.common._fn_req_POST__ArrayBuffer = function( url, params, requestHeaders, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.common._fn_req_POST__ArrayBuffer():void----------" );

		//console.log( "url : " + url );

		url += window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		++_date;
		url += "nCached=" + _date;

		//var xhr = SUtilXMLHttpReqPost.reqSyncReturn__paramsForm( url, params, requestHeaders );
		var xhr = SUtilXMLHttpReqPost.reqSyncReturn__paramsStr( url, params, requestHeaders );

		window.b2link_service.common._fn_res_POST( xhr.responseText, cbFunction );

		//debugger;
		xhr = null;

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.common._fn_req_POST__ArrayBuffer():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;