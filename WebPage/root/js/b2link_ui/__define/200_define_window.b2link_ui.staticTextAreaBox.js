//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.staticTextAreaBox.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.staticTextAreaBox;

window.b2link_ui.staticTextAreaBox = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.staticTextAreaBox;

//./window.b2link_ui.staticTextAreaBox.addr_input.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticTextAreaBox.addr_input = function()
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link_ui.staticTextAreaBox.addr_input():{Array}----------" );

	window.b2link_ui.message.error( "window.b2link_ui.staticTextAreaBox.addr_input -> window.b2link_ui.inputor.address 또는 window.b2link_ui.inputor.address.modal 교체 바람" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/inputBox/addr/"
		, nm : "addr_input"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_inputBox-"
		, key : "addr_input$addr"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d );

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link_ui.staticTextAreaBox.addr_input():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;