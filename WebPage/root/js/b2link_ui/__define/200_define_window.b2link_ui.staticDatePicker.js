//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.staticDatePicker.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.staticDatePicker;

window.b2link_ui.staticDatePicker = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.staticDatePicker;

//삭제하기 - 20170405 - 송선우;
//*/
window.b2link_ui.staticDatePicker.calendar = window.b2link_ui.date_picker.calendar;
//*/

//./window.b2link_ui.staticDatePicker.datepicker_single.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticDatePicker.datepicker_single = function()
{
	window.BenLog.timeStamp( "---- [ S ] - window.b2link_ui.staticDatePicker.datepicker_single():{Array}----------" );

	window.b2link_ui.message.error( "window.b2link_ui.staticDatePicker.datepicker_single -> window.b2link_ui.date_picker.calendar.***로 교체 바람" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/datepicker/datepicker_single/"
		, nm : "datepicker_single"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_datepicker-"
		, key : "SUI_DATEPICKER$DATEPICKER_SINGLE"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	window.BenLog.timeStamp( "---- [ E ] - window.b2link_ui.staticDatePicker.datepicker_single():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;