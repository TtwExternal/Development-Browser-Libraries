//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fileServer/window.b2link.fileServer.open.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 파일을 열기 한다.
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.fileServer.open = function( url )
{
	window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.open():void----------" );

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
	{
		url += "?scode=" + _scode
			+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
	}

	window.open( url );

	window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.open():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;