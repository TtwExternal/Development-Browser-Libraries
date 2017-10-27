//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/uiDev/window.uiDev.MongoDB.QueryTester.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.uiDev.MongoDB = window.uiDev.MongoDB || {};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.uiDev.MongoDB.QueryTester = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.uiDev.MongoDB.QueryTester():{Array}----------" );

	var p = {
		url : window.b2link.url.getServerURLByServers( "SYS0015_WebServer" ) + "/ui/Dev-MongoDB/QueryTester/"
		, nm : "QueryTester"
		, css_url : window.b2link.url.getServerURLByServers( "SYS0015_WebServer" ) + "/css_ui/"
		, css_front_nm : "div-Dev-MongoDB-"
		, key : "Dev-MongoDB$QueryTester"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var ec = o[ 1 ];//HTMLElement's Controller;

	window.TtwLog.timeStamp( "---- [ E ] - window.uiDev.MongoDB.QueryTester():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;