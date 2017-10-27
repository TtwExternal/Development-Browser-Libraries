//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/log/window.b2link.log.error__ChangePassword.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Change Password failure시 호출하는 함수
 * 에러 메세지 상자와 콘솔 에러를 발생시킨다.
 * @function
 */
window.b2link.log.error__ChangePassword = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.log.error__ChangePassword():void----------" );

	window.b2link_ui.message.error( "Change Password failure" );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.log.error__ChangePassword():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;