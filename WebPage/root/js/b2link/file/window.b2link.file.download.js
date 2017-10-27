//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/file/window.b2link.file.download.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();

	/**
	 * 파일 다운로드
	 * @function
	 * @param {String} url
	 */
	window.b2link.file.download = function( url )
	{
		//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.file.download():void----------" );

		url = url
			+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() )
			+ "&nCached=" + ( ++_date );

		window.open( window.b2link.uri.encodeURI( url ) );

		//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.file.download():void----------" );
	};
})();


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;