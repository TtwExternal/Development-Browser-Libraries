//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.selector.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.selector;

window.b2link_ui.selector = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.selector;

//중요 - 수정하기 - 20170120 - 송선우;
window.b2link_ui.selector.db = window.b2link_service.selector.db;


//----------------------------------------------------------------------------------------------------window.b2link_ui.selector.l***;

//./window.b2link_ui.selector.list.js;
!function(){window.b2link_ui.selector.list=function(i){var n,l={url:window.b2link.STATIC.CONFIG.URL.UI.BASE+"static/selector/common/list/",nm:"static_selector_common_list",css_url:"./css_ui/",css_front_nm:"static_ui_common-",key:i.key};n=window.b2link_ui.isModal_DefaultTrue(arguments[0])?window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI(l,arguments[0]):window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(l,arguments[0]);var _=(n[0],n[1]);return _._bInitialize||(_._bInitialize=!0,_.setData(i)),n};var i=window.b2link_ui.selector.db;for(var n in i){window.b2link_ui.selector.list[n]=function(i){var n=i?i:{};n.nm_db=arguments.callee._nm_db,n.nm_col=i.nm_col,n.key="SUI_SELECTOR_LIST$"+n.nm_db+"."+n.nm_col,n.fn=i.fn?i.fn:{cb_mClick:null,cb_mDoubleClick:null};var l=window.b2link_ui.selector.list(n);return l},window.b2link_ui.selector.list[n]._nm_db=n;for(var l=i[n],_=0,e=l.length;e>_;++_)window.b2link_ui.selector.list[n][l[_]]=function(i){var n=arguments.callee;i=i?i:{},i.nm_db=n._nm_db,i.nm_col=n._nm_col;var l=window.b2link_ui.selector.list[i.nm_db](i,i);return l},window.b2link_ui.selector.list[n][l[_]]._nm_db=n,window.b2link_ui.selector.list[n][l[_]]._nm_col=l[_],window.b2link_ui.selector.list[n][l[_]].mClick=function(i){var n=arguments.callee,l=window.b2link_ui.selector.list[n._owner._nm_db][n._owner._nm_col](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1];l.showAndModal_MoveCurrentChildren(),n._f0.c=l,n._f0.cb_Complete=i,l.addEvent_mClick(n._f0)},window.b2link_ui.selector.list[n][l[_]].mClick._owner=window.b2link_ui.selector.list[n][l[_]],window.b2link_ui.selector.list[n][l[_]].mClick._f0=function(i){var n=arguments.callee;n.c.hideAndModal_MoveBGCLastChild(),n.cb_Complete(i.list_item_value)}}}();

//----------------------------------------------------------------------------------------------------window.b2link_ui.selector.l***;


//----------------------------------------------------------------------------------------------------window.b2link_ui.selector.t***;

//./window.b2link_ui.selector.table.js;
!function(){window.b2link_ui.selector.table=function(n){var e,i={url:window.b2link.STATIC.CONFIG.URL.UI.BASE+"static/selector/common/table/",nm:"static_selector_common_table",css_url:"./css_ui/",css_front_nm:"static_ui_common-",key:n.key};e=window.b2link_ui.isModal_DefaultTrue(arguments[0])?window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI(i,arguments[0]):window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(i,arguments[0]);var t=e[1];return t._bInitialize||(e[0].className="static_ui_common-static_selector_common_table",e[0].style.maxWidth=window.document.body.offsetWidth-200+"px",e[0].children[1].style.maxHeight=window.document.body.offsetHeight-200+"px",t._bInitialize=!0,t.setData(n)),e};var n=window.b2link_ui.selector.db;for(var e in n){window.b2link_ui.selector.table[e]=function(n){var e=n?n:{};e.nm_db=arguments.callee._nm_db,e.nm_col=n.nm_col,e.key="SUI_SELECTOR_TABLE$"+e.nm_db+"."+e.nm_col,e.fn=n.fn?n.fn:{cb_mClick:null,cb_mDoubleClick:null};var i=window.b2link_ui.selector.table(e);return i},window.b2link_ui.selector.table[e]._nm_db=e;for(var i=n[e],t=0,l=i.length;l>t;++t)window.b2link_ui.selector.table[e][i[t]]=function(n){var e=arguments.callee;n=n?n:{},n.nm_db=e._nm_db,n.nm_col=e._nm_col;var i=window.b2link_ui.selector.table[n.nm_db](n,n);return i},window.b2link_ui.selector.table[e][i[t]]._nm_db=e,window.b2link_ui.selector.table[e][i[t]]._nm_col=i[t]}}();

//----------------------------------------------------------------------------------------------------window.b2link_ui.selector.t***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;