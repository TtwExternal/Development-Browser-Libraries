//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.date_picker.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.date_picker;

window.b2link_ui.date_picker = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.date_picker;

//./window.b2link_ui.date_picker.calendar.js;
/**
 * 날짜 선택기 달력 형태를 표출 한다.
 * arguments[ 0 ] option parameter - { display :}
 *
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 * @example
 * <code>
	//모달 형태로 표출됨 - 화면에 바로 보임;
	window.b2link_ui.date_picker.calendar();
	window.b2link_ui.date_picker.calendar({ display : true, modal : true });

	//화면에 표출 되지 않음;
	window.b2link_ui.date_picker.calendar({ display : false });

	//모달없이 표출됨;
	window.b2link_ui.date_picker.calendar();
	window.b2link_ui.date_picker.calendar({ display : true, modal : false });
 * </code>
 */
window.b2link_ui.date_picker.calendar=function(){var i,a={url:window.b2link.STATIC.CONFIG.URL.UI.BASE+"static/datepicker/calendar/",nm:"calendar",css_url:"./css_ui/",css_front_nm:"static_ui_datepicker-",key:"SUI_DATEPICKER$CALENDAR"};return i=window.b2link_ui.isModal_DefaultTrue(arguments[0])?window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI(a,arguments[0]):window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(a,arguments[0])};

//./window.b2link_ui.date_picker.calendar.mClick.js;
/**
 * @function
 * @param {Function} cb_Complete
 * @example
 * <code>
	window.b2link_ui.date_picker.calendar.mClick( function( calendar ){
		debugger;
		console.log( calendar.getFormatDate( calendar.getDate(), "-" ) );
	});
 * </code>
 */
window.b2link_ui.date_picker.calendar.mClick=function(i){var n=window.b2link_ui.date_picker.calendar()[1];n.mClick(i),i._ownerCtrl=n};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;