//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/update/window.service_member.update.get_update_member_info.js";
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
	window.service_member.update.get_update_member_info = function( d, cbFunction )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.service_member.update.get_update_member_info():void----------" );

		var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/update/get_update_member_info?";

		window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

		//window.AlexLog.timeStamp( "---- [ E ] - window.service_member.update.get_update_member_info():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;