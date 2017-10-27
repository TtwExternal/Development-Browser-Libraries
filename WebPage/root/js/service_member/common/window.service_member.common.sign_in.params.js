//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/window.service_member.common.sign_in.params.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Signin 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.common.sign_in.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in.params():{String}----------" );
	return "mid=" + d.mid
		+ "&mpw="+ d.mpw
		//+ "&d_ex=" + new Date()
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;