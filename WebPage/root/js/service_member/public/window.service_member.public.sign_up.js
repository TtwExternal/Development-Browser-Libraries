//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/public/window.service_member.public.sign_up.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
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
	window.service_member.public.sign_up = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up():void----------" );

		window.b2link_service.common._fn_req(
			_t.PROXY
				+ window.b2link.url.getServerURLByDB( "member" )
				+ "member/public/sign_up?"
				+ window.service_member.public.sign_up.params( d )
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;