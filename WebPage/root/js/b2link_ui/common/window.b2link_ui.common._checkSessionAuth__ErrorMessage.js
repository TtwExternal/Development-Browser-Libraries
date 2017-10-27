//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.b2link_ui.common._checkSessionAuth__ErrorMessage.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 */
window.b2link_ui.common._checkSessionAuth__ErrorMessage = function( result )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.common._checkSessionAuth__ErrorMessage():void----------" );

	/*/
	window.b2link_ui.message.error( JSON.stringify( result ) );
	//*/
	// TODO :: 다국어 적용
	window.b2link_ui.message.error( result.d + " 권한이 없습니다." );
	//*/

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.common._checkSessionAuth__ErrorMessage():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;