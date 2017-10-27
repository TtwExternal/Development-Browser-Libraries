//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_window.b2link_url_member.member_session.getParam.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d session { "mid" : "", "mid" : "", "Expires" : "" }
 * @return {String}
 */
window.b2link_url_member.member_session.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_member.member_session.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_member.member_session.getParam():{String}----------" );

	//return "&sid=" + d.sid + "&mid=" + d.mid;
	//return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires;
	//return "&sid=" + d.sid + "&d_ex=" + d.Expires;
	return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires + "&SCODE=" + d.SCODE;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;