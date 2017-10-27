//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_member/window.b2link_url_member.member_basic.getParam.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url_member.member_basic.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_member.member_basic.getParam_id():{String}----------" );

	//var email = d.email_f + "@" + d.email_e;

	var url  = "";
		url += "bConn=" + 0;

	if( d.cd_rank )
		url += "&cd_rank=" + d.cd_rank;

	if( d.email_f && d.email_e )
	{
		url += "&email=" + d.email_f + "@" + d.email_e;
		url += "&email_id=" + d.email_f;
		url += "&email_domain=" + d.email_e;

		url += "&mid=" + d.email_f + "@" + d.email_e;
	}

	if( d.mid )
		url += "&mid=" + d.mid;

	if( d.name_f && d.name_l )
	{
		/*/
		var nm = {
			a : d.name_f + d.name_l
			, f : d.name_f
			, l : d.name_l
		};
		nm = JSON.stringify( nm );
		//nm = window.encodeURIComponent( nm );
		/*/
		var nm = '{"a":"' + d.name_f + d.name_l + '","f":"' + d.name_f + '","l":"' + d.name_l + '"}';
		//*/

		url += "&nm=" + nm;
		url += "&nm_cn=" + nm;
		url += "&nm_kr=" + nm;
		url += "&nm_us=" + nm;
	}
	if( d.phone_cell )
		url += "&phone_cell=" + d.phone_cell;

	if( d.phone_tel )
		url += "&phone_tel=" + d.phone_tel;

	if( d.cd_div )
		url += "&cd_div=" + d.cd_div;

	if( d.cd_div_team )
		url += "&cd_div_team=" + d.cd_div_team;

	if( d._id$messenger )
		url += "&_id$messenger=" + d._id$messenger;

	if( d.messenger_id )
		url += "&messenger_id=" + d.messenger_id;


	if( d.password )
		url += "&mpw=" + d.password;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_member.member_basic.getParam_id():{String}----------" );

	return url;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;