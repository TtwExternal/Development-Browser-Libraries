//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.el_select.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.el_select;

window.b2link_ui.el_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.el_select;


//./window.b2link_ui.el_select.getEL_SelectFromDB__search_field.js;
/**
 * @function
 * @param {String} nm_db Database Name
 * @param {String} nm_col Database's Collection Name
 * @param {Boolean} bReload false
 * @return {HTMLSelectElement}
 */
window.b2link_ui.el_select.getEL_SelectFromDB__search_field=function(e,l,_){var i="./ui_include/select-db-search_field/"+e+"/"+l+".html";return window.b2link_ui.el_select.getEL_SelectFromDB__search_field._loadURL(i,_)},window.b2link_ui.el_select.getEL_SelectFromDB__search_field._disposeStore=function(){var e=window.b2link.element.dispose,l=window.b2link_ui.el_select.getEL_SelectFromDB__search_field._store;for(var _ in l)e(l[_]),l[_]=null,delete l[_]},window.b2link_ui.el_select.getEL_SelectFromDB__search_field._loadURL=function(e,l){void 0==l&&(l=!1);var _=window.b2link_ui.el_select.getEL_SelectFromDB__search_field._store[e];if(_&&!l)return _;try{_=window.b2link_ui.el_select.getEL_SelectFromDB__search_field._store[e]=window.b2link.util.importHTML(e,window.b2link.STATIC.CONST.ROOT_DIV.ID_BACKGROUND)}catch(i){window.TtwLog.error("window.b2link_ui.el_select.getEL_SelectFromDB__search_field._loadURL Error : "+i);var _=null}return _},window.b2link_ui.el_select.getEL_SelectFromDB__search_field._store={},window.b2link_ui.el_select.getEL_SelectFromDB__search_field.reloadAll=function(){var e=window.b2link.element.dispose,l=window.b2link_ui.el_select.getEL_SelectFromDB__search_field._loadURL,_=window.b2link_ui.el_select.getEL_SelectFromDB__search_field._store;for(var i in _)e(_[i]),_[i]=null,delete _[i],l(i)};

//./window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value.js;
/**
 * @function
 * @param {String} nm_db Database Name
 * @param {String} nm_col Database's Collection Name
 * @param {Boolean} bReload false
 * @return {HTMLSelectElement}
 */
window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value=function(e,_,l){var i=[],t="./ui_include/select-db-value/"+e+"/"+_+".list";try{for(var r=window.b2link.xhr.reqSync_JSON(t),n=0,o=r.length;o>n;++n)i.push(window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._loadURL(r[n],l))}catch(c){}return i},window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._disposeStore=function(){var e=window.b2link.element.dispose,_=window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._store;for(var l in _)e(_[l]),_[l]=null,delete _[l]},window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._loadURL=function(e,_){void 0==_&&(_=!1);var l=window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._store[e];if(l&&!_)return l;try{l=window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._store[e]=window.b2link.util.importHTML(e,window.b2link.STATIC.CONST.ROOT_DIV.ID_BACKGROUND)}catch(i){window.TtwLog.error("window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._loadURL Error : "+i);var l=null}return l},window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._store={},window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value.reloadAll=function(){var e=window.b2link.element.dispose,_=window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._loadURL,l=window.b2link_ui.el_select.getEL_SelectFromDB__search_field__value._store;for(var i in l)e(l[i]),l[i]=null,delete l[i],_(i)};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;