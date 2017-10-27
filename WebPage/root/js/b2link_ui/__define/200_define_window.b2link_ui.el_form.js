//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.el_form.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.el_form;

window.b2link_ui.el_form = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.el_form;


//./window.b2link_ui.el_form.getEL_FormFromDB.js;
/**
 * @function
 * @param {String} nm_db Database Name
 * @param {String} nm_col Database's Collection Name
 * @param {Boolean} bReload false
 * @return {HTMLSelectElement}
 */
window.b2link_ui.el_form.getEL_FormFromDB = function( nm_db, nm_col, bReload )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.el_form.getEL_FormFromDB():{HTMLSelectElement}----------" );

	var url = "./ui_include/test-form/" + nm_db + "/" + nm_col + ".html";

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.el_form.getEL_FormFromDB():{HTMLSelectElement}----------" );

	return window.b2link_ui.el_form.getEL_FormFromDB._loadURL( url, bReload );
};
window.b2link_ui.el_form.getEL_FormFromDB._disposeStore = function()
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.el_form.getEL_FormFromDB._disposeStore():void----------" );

	var f0 = window.b2link.element.dispose;
	var t = window.b2link_ui.el_form.getEL_FormFromDB._store;
	for( var s in t )
	{
		f0( t[ s ] );
		t[ s ] = null;
		delete t[ s ];
	}

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.el_form.getEL_FormFromDB._disposeStore():void----------" );
};
window.b2link_ui.el_form.getEL_FormFromDB._loadURL = function( url, bReload )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.el_form.getEL_FormFromDB._loadURL():{HTMLSelectElement}----------" );

	if( undefined == bReload ) bReload = false;

	var r = window.b2link_ui.el_form.getEL_FormFromDB._store[ url ];
	if( r && !bReload ) return r;

	try
	{
		r = window.b2link_ui.el_form.getEL_FormFromDB._store[ url ]
		  = window.b2link.util.importHTML( url,  window.b2link.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
	}
	catch( er )
	{
		window.TtwLog.error( "window.b2link_ui.el_form.getEL_FormFromDB._loadURL Error : " + er );
		var r = null;
	}

	console.log( r );

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.el_form.getEL_FormFromDB._loadURL():{HTMLSelectElement}----------" );
	return r;
};
window.b2link_ui.el_form.getEL_FormFromDB._store = {};
window.b2link_ui.el_form.getEL_FormFromDB.reloadAll = function()
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.el_form.getEL_FormFromDB.reloadAll():void----------" );

	var f0 = window.b2link.element.dispose;
	var f1 = window.b2link_ui.el_form.getEL_FormFromDB._loadURL;
	var t = window.b2link_ui.el_form.getEL_FormFromDB._store;
	for( var s in t )
	{
		f0( t[ s ] );
		t[ s ] = null;
		delete t[ s ];
		f1( s );
	}

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.el_form.getEL_FormFromDB.reloadAll():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;