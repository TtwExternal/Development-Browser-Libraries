//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fileServer/window.b2link.fileServer.download.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 파일을 다운로드 한다.
 * @function
 * @param {String} url
 */
window.b2link.fileServer.download = function( url )
{
	window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.download():void----------" );

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	/*/
	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
		url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	var fileName = url.split( "/" ).pop();

	//Construct the a element;
	var link = document.createElement( "a" );
	link.download = fileName;
	link.target = "_blank";

	//Construct the uri;
	link.href = url;
	document.body.appendChild( link );
	link.click();

	//Cleanup the DOM;
	document.body.removeChild( link );
	delete link;
	/*/

	//20170818 Rh2 수정 - a 태그 사용할 이유 없음;
	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
	{
		//20170818 Rh2 수정 - download=1 조건 들어가면 파일명에 한글 깨짐;
		//url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		//url = url + "?scode=" + _scode + "&" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		url = url + "?scode=" + _scode;
	}

	window.b2link.file.download( url );
	//*/

	window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.download():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;