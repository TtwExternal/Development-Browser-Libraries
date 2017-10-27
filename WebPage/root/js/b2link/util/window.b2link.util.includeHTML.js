//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.includeHTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @return {String} HTML Text
 */
window.b2link.util.includeHTML = function( url )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.includeHTML():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.includeHTML():{String}----------" );

	return window.b2link.xhr.reqSync_String( url );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
