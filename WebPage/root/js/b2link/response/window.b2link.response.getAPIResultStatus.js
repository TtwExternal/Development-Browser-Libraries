//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/response/window.b2link.response.getAPIResultStatus.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * SYS0030(BrandPortal) 전용 아마 사용안하는 듯함
	 * 다른곳에서 사용 금지 window.b2link.response.getResultStatus를 사용
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.b2link.response.getAPIResultStatus = function( result )
	{
		//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.response.getAPIResultStatus():{*}----------" );
		//window.JamesLog.timeStamp( "Input result : " );
		//window.JamesLog.timeStamp( result );

		if( "SYS0030" != window.b2link.STATIC.CONFIG.URL.SCODE )
		{
			window.b2link_ui.message.error( "window.b2link.response.getAPIResultStatus 관련 전달 메세지" );
			window.b2link_ui.message.error( "SYS0030(BrandPortal) 전용 아마 사용안하는 듯함" );
			window.b2link_ui.message.error( "다른곳에서 사용 금지 window.b2link.response.getResultStatus를 사용" );
		}

		try
		{
			if ( result.status === "success" ) {
				return 1;
			} else {
				return 0;
			}

		}
		catch( er )
		{
			window.JamesLog.error( "window.b2link.response.getAPIResultStatus Error : " + er );
		}

		//window.JamesLog.timeStamp( "return result : " );
		//window.JamesLog.timeStamp( result );

		//window.JamesLog.timeStamp( "---- [ E ] - window.b2link.response.getAPIResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
