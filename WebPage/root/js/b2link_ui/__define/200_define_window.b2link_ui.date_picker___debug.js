//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.date_picker.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.date_picker;

//window.b2link_ui.date_picker = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.date_picker;

//./window.b2link_ui.date_picker.calendar.mClickInModal.js;
/**
 * @function
 * @param {Function} cb_Complete
 * @example
 * <code>
	window.b2link_ui.date_picker.calendar.mClickInModal( function( calendar ){
		debugger;
		console.log( calendar.getFormatDate( calendar.getDate(), "-" ) );
	});
 * </code>
 */
window.b2link_ui.date_picker.calendar.mClickInModal = function( cb_Complete )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.b2link_ui.date_picker.calendar.mClickInModal():void----------" );

	var c = window.b2link_ui.date_picker.calendar({ display : false })[ 1 ];
		c.mClick( cb_Complete );

	cb_Complete._ownerCtrl = c;

	c.showAndModal_MoveCurrentChildren();

	window.cparkLog.timeStamp( "---- [ E ] - window.b2link_ui.date_picker.calendar.mClickInModal():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;