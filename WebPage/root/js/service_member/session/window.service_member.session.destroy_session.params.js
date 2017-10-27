//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_member/session/window.service_member.session.destroy_session.params.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Destroy Session
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.session.destroy_session.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.session.destroy_session.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.session.destroy_session.params():{String}----------" );

	return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;