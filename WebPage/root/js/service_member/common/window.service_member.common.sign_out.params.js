//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/window.service_member.common.sign_out.params.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Signout 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.common.sign_out.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_out.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_out.params():{String}----------" );
	return "mid=" + d.mid
		//+ "&d_ex=" + new Date()
		+ "&sid=" + d.sid
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;