//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/window.service_member.public.sign_up__checkOverlap.params.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.sign_up__checkOverlap.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up__checkOverlap.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up__checkOverlap.params():{String}----------" );

	return "data=" + JSON.stringify( d );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;