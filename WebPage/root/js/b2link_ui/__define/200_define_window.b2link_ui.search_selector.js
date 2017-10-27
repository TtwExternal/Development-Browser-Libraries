//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.search_selector.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.search_selector;

window.b2link_ui.search_selector = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.search_selector;

//중요 - 수정하기 - 20170120 - 송선우;
window.b2link_ui.search_selector.db = window.b2link_service.search_selector.db;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"key" : ""
 *	, "nm_db" : ""
 *	, "nm_col" : ""
 *	, "fn" : {
 *		"cb_mClick" : function( e ){}
 *		, "cb_mDoubleClick" : function( e ){}
 *	}
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
!function(){window.b2link_ui.search_selector.list=function(i){var n,_={url:window.b2link.STATIC.CONFIG.URL.UI.BASE+"static/search_selector/common/list/",nm:"static_search_selector_common_list",css_url:"./css_ui/",css_front_nm:"static_ui_common-",key:i.key};n=window.b2link_ui.isModal_DefaultTrue(arguments[0])?window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI(_,arguments[0]):window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(_,arguments[0]);var e=(n[0],n[1]);return e.reqParam__fixed=null,e._bInitialize||(e._bInitialize=!0,e.setData(i)),n};var i=window.b2link_ui.search_selector.db;for(var n in i){window.b2link_ui.search_selector.list[n]=function(i){var n=i?i:{};n.nm_db=arguments.callee._nm_db,n.nm_col=i.nm_col,n.key="SUI_SEARCH_SELECTOR_LIST$"+n.nm_db+"."+n.nm_col,n.fn=i.fn?i.fn:{cb_mClick:null,cb_mDoubleClick:null};var _=window.b2link_ui.search_selector.list(n);return _},window.b2link_ui.search_selector.list[n]._nm_db=n;for(var _=i[n],e=0,l=_.length;l>e;++e)window.b2link_ui.search_selector.list[n][_[e]]=function(i){var n=arguments.callee;i=i?i:{},i.nm_db=n._nm_db,i.nm_col=n._nm_col;var _=window.b2link_ui.search_selector.list[i.nm_db](i,i);return _},window.b2link_ui.search_selector.list[n][_[e]]._nm_db=n,window.b2link_ui.search_selector.list[n][_[e]]._nm_col=_[e],window.b2link_ui.search_selector.list[n][_[e]].mClick=function(i){var n=arguments.callee,_=window.b2link_ui.search_selector.list[n._owner._nm_db][n._owner._nm_col](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1];_.showAndModal_MoveCurrentChildren(),n._f0.c=_,n._f0.cb_Complete=i,_.addEvent_mClick(n._f0)},window.b2link_ui.search_selector.list[n][_[e]].mClick._owner=window.b2link_ui.search_selector.list[n][_[e]],window.b2link_ui.search_selector.list[n][_[e]].mClick._f0=function(i){var n=arguments.callee;n.c.hideAndModal_MoveBGCLastChild(),n.cb_Complete(i.list_item_value)}}}();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;