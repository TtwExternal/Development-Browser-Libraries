
//window.__autoLoad_JS.addJSFiles___Define("../../../Development-NodeJS_Modules/root/js/",{b2link_router:1});window.__autoLoad_JS.addJSFiles_Package("../../../Development-NodeJS_Modules/root/js/",{b2link_router:1});//window.__autoLoad_JS.addRouter__JSFiles_Services("../../../Development-NodeJS_Modules/js/b2link_router/");

//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link

window.b2link = window.b2link || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.STATIC;

window.b2link.STATIC = window.b2link.STATIC || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.STATIC;


//
//---------------------------------------------------------------------------------------------------;


//
//


var _ = "";

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG;

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG = window.b2link.STATIC.CONFIG || {};

//--------------------------------------------------;

//	;

//--------------------------------------------------;



window.b2link.STATIC.CONFIG.URL = window.b2link.STATIC.CONFIG.URL || {};

//window.b2link.STATIC.CONFIG.URL.PROXY = "./ttwP/";
window.b2link.STATIC.CONFIG.URL.PROXY = "";
try{ if( require( "os" ) ) window.b2link.STATIC.CONFIG.URL.PROXY = ""; }catch( er ){}


window.b2link.STATIC.CONFIG.URL.SERVER = "http://localhost:49320/";
window.b2link.STATIC.CONFIG.URL.SCODE = "";//시스템별 개별 정의;

//--------------------------------------------------;

//	URL - IMG;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.IMG = window.b2link.STATIC.CONFIG.URL.IMG || {};
window.b2link.STATIC.CONFIG.URL.IMG.BASE = "./img/";

//--------------------------------------------------;

//	URL - UI;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.UI = window.b2link.STATIC.CONFIG.URL.UI || {};
window.b2link.STATIC.CONFIG.URL.UI.BASE = "./ui/";

//window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "cn";
window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "kr";
//window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "us";

_ = window.b2link.STATIC.CONFIG.URL.UI.BASE;

window.b2link.STATIC.CONFIG.URL.UI.B2LINK = _ + "b2link/";

window.b2link.STATIC.CONFIG.URL.UI.B2LINK_API = _ + "b2link_api/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER = _ + "b2link_member/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION = _ + "b2link_session/";

//B2LiNK-SessionServer-Dev;
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_AUTHORITY = _ + "b2link_authority/";

//All Project;
window.b2link.STATIC.CONFIG.URL.UI.test = _ + "test/";

//--------------------------------------------------;

//	URL - UI - CSS;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.UI.CSS = "";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap-jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".semanticui";

//--------------------------------------------------;

//	URL - MONGODB;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.MONGODB = window.b2link.STATIC.CONFIG.URL.MONGODB || {};

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER || {};
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON = window.b2link.STATIC.CONFIG.URL.SERVER + "member/";
_ = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON;
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.BASIC = _ + "member_basic/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.PUBLIC = _ + "member_public/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION = _ + "member_session/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION_LOG = _ + "member_session_log/";

//--------------------------------------------------;



//--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG;


//



//
//


//--------------------------------------------------[ S ] - window.b2link.STATIC.CONST;

window.b2link.STATIC.CONST = window.b2link.STATIC.CONST || {};

//------------------------------window.b2link.STATIC.CONST.SCODES;
(function(){
	window.b2link.STATIC.CONST.SCODES = window.b2link.STATIC.CONST.SCODES || {};

	var _ = window.b2link.STATIC.CONST.SCODES;
		_.__defineGetter__( "SESSION_SERVER"						, function(){ return "SYS0010"; } );
		_.__defineGetter__( "B2KER"									, function(){ return "SYS0020"; } );
		_.__defineGetter__( "BRAND_PORTAL"							, function(){ return "SYS0030"; } );
		_.__defineGetter__( "FILE_SERVER"							, function(){ return "SYS0040"; } );
		_.__defineGetter__( "WEB_HOOK_SERVER"						, function(){ return "SYS0050"; } );
		_.__defineGetter__( "WEB_SOCKET_MESSAGE_SERVER"				, function(){ return "SYS0060"; } );
		_.__defineGetter__( "EXCEL_SERVER"							, function(){ return "SYS0070"; } );
		_.__defineGetter__( "WEB_SOCKET_APP_COMMUNICATION_SERVER"	, function(){ return "SYS0080"; } );
})();
//------------------------------window.b2link.STATIC.CONST.SCODES;



//*///공통 소스에서 구동됨;

window.b2link.STATIC.CONST.ROOT_DIV = window.b2link.STATIC.CONST.ROOT_DIV || {};
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
	_.ID_BACKGROUND = "div_0__Background";
	_.ID_APPLICATION = "div_0__Application";
	_.ID_UI_COMPONENT_FIXED = "div_0__UI_Component_Fixed";
	_.ID_UI_COMPONENT_PANEL = "div_0__UI_Component_Panel";
	_.ID_TOP = "div_0__Top";
	_.ID_TOP_MODAL = "div_0__Top_modal";

	_.EL_BACKGROUND = window.document.getElementById( "div_0__Background" );
	_.EL_APPLICATION = window.document.getElementById( "div_0__Application" );
	_.EL_UI_COMPONENT_FIXED = window.document.getElementById( "div_0__UI_Component_Fixed" );
	_.EL_UI_COMPONENT_PANEL = window.document.getElementById( "div_0__UI_Component_Panel" );
	_.EL_TOP = window.document.getElementById( "div_0__Top" );
	_.EL_TOP_MODAL = window.document.getElementById( "div_0__Top_modal" );

//*/



//--------------------------------------------------[ E ] - window.b2link.STATIC.CONST;



//	LOGIC;



//*///공통 소스에서 구동됨;
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
window.addEventListener( "resize", function( e ){
	_.EL_APPLICATION.style.width = _.EL_BACKGROUND.style.width = _.EL_TOP.style.width = _.EL_TOP_MODAL.style.width = _.EL_UI_COMPONENT_FIXED.style.width =
	_.EL_UI_COMPONENT_PANEL.style.width = window.document.body.clientWidth + "px";
	_.EL_APPLICATION.style.height = _.EL_BACKGROUND.style.height = _.EL_TOP.style.height = _.EL_TOP_MODAL.style.height = _.EL_UI_COMPONENT_FIXED.style.height =
	_.EL_UI_COMPONENT_PANEL.style.height = window.document.body.clientHeight + "px";
}, false, 0, true );
//*/

/*/
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
window.addEventListener( "resize", function( e ){
	console.debug( "EL_APPLICATION : " + _.EL_APPLICATION.clientWidth + " * " + _.EL_APPLICATION.clientHeight );
	console.debug( "EL_BACKGROUND : " + _.EL_BACKGROUND.clientWidth + " * " + _.EL_BACKGROUND.clientHeight );
	console.debug( "EL_TOP : " + _.EL_TOP.clientWidth + " * " + _.EL_TOP.clientHeight );
	console.debug( "EL_TOP_MODAL : " + _.EL_TOP_MODAL.clientWidth + " * " + _.EL_TOP_MODAL.clientHeight );
	console.debug( "EL_UI_COMPONENT_FIXED : " + _.EL_UI_COMPONENT_FIXED.clientWidth + " * " + _.EL_UI_COMPONENT_FIXED.clientHeight );
	console.debug( "EL_UI_COMPONENT_PANEL : " + _.EL_UI_COMPONENT_PANEL.clientWidth + " * " + _.EL_UI_COMPONENT_PANEL.clientHeight );
}, false, 0, true );
//*/


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.STATIC.REGEXP;

window.b2link.STATIC.REGEXP = window.b2link.STATIC.REGEXP || {};

//----------------------------------------------------------------------------------------------------window.b2link.STATIC.REGEXP.MATCH;

window.b2link.STATIC.REGEXP.MATCH = window.b2link.STATIC.REGEXP.MATCH || {};

/**
 * @property {RegExp}
 */
window.b2link.STATIC.REGEXP.MATCH.URI_HTTP0 = /^http[s]*:\/\//;


//수정하기 - 20170525 - 송선우 - Node 기본 유틸로 있을껄요?;
/**
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.URL;
	var url = "http://localhost:8080/public/index.js?title=index&page=1";
	var arr = url.match( pattern );
	console.log( arr[ 0 ] );//http://localhost:8080/public/index.js
	console.log( arr[ 1 ] );//http://
	console.log( arr[ 2 ] );//localhost:8080/
	console.log( arr[ 3 ] );//public/index.js
 * </code>
 */
window.b2link.STATIC.REGEXP.MATCH.URL = /(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/;

//----------------------------------------------------------------------------------------------------window.b2link.STATIC.REGEXP.REPLACE;

window.b2link.STATIC.REGEXP.REPLACE = window.b2link.STATIC.REGEXP.REPLACE || {};

/**
 * @property {RegExp}
 * @D:\Github_B2LiNK\B2LiNK-B2Ker-Dev\WebPage\root\ui_template\b2link_settlement\common\edit_info_tax_bill.js
 */
//window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA0 = /(\d)(?=(\d{3} )+\.)/g;

/**
 * @property {RegExp}
 * @see window.b2link.util.getMoney
 */
window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1 = /\B(?=(\d{3})+(?!\d))/g;

/**
 * @property {RegExp}
 * @see window.b2link.util.convertCommaSeparatedNumberToFloat
 */
window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2 = /[^\d]+/g;

/**
 * @property {RegExp}
 * @see window.b2ker.util.getStringChangePriceToComma
 */
window.b2link.STATIC.REGEXP.REPLACE.PRICE_COMMA = /("price":[0-9.-]+)/g;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.STATIC.REGEXP;


//



//
//


//--------------------------------------------------[ S ] - window.b2link.STATIC.UI;

window.b2link.STATIC.UI = window.b2link.STATIC.UI || {};

window.b2link.STATIC.UI.__div = window.document.createElement( "div" );

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @param {Object} [ {HTMLElement}, {Object}, .. ]
 */
window.b2link.STATIC.UI.__add = function( key, o )
{
	if( window.b2link.STATIC.UI[ key ] )
	{
		var s = "window.b2link.STATIC.UI." + key + " already exists";
			console.error( s );
			//alert( s );
			//throw new Error( s );
	}
	else window.b2link.STATIC.UI[ key ] = o;
};

//--------------------------------------------------;

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition__TestMenu = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition__TestMenu():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		if( io[ 1 ] && s != "test_Menu" )
		{
			console.log( io );
			var s = io[ 0 ].style;
			s.left = "250px";
			s.top = "45px";
			s.bottom = "initial";
			s.right = "initial";
			//s.right = "20px";
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition__TestMenu():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition_Center_FromParent = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromParent():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			window.b2link.element.setPosition_Center_FromParent( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromParent():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t ){
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			window.b2link.element.setPosition_Center_FromWindow( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__allHide = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__allHide():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
		{
			//console.log( io );
			try
			{
				io[ 1 ].hide();
			}
			catch( er )
			{
				console.error( s + " window.b2link.STATIC.UI.__allHide Error : " + er );
			}
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__allHide():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__allShow = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__allShow():void----------" );
	var t = window.b2link.STATIC.UI;
	for( var s in t )
	{
		io = t[ s ];
		if( io[ 1 ] )
		{
			//console.log( io );
			try
			{
				io[ 1 ].show();
				//io[ 1 ].req_Data();
			}
			catch( er )
			{
				console.error( s + " window.b2link.STATIC.UI.__allShow Error : " + er );
			}
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__allShow():void----------" );
};

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {Boolean}
 */
window.b2link.STATIC.UI.__checkKey = function( key )
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__checkKey():{Boolean}----------" );
	if( window.b2link.STATIC.UI[ key ] ) return 1;
	return 0;
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__checkKey():{Boolean}----------" );
};

//--------------------------------------------------;

/**
 * @function
 */
window.b2link.STATIC.UI.__list = function(){ this.__status(); };

/**
 * @function
 * @param {String} key
 */
window.b2link.STATIC.UI.__show = function( key )
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__show():void----------" );
	var t = window.b2link.STATIC.UI[ key ][ 1 ];
	try
	{
		t.show();
		//t.req_Data();
	}
	catch( e )
	{
		window.b2link_ui.message.error( "Error : " + e );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__show():void----------" );
};

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {*}
 */
window.b2link.STATIC.UI.__getObj = function( key ){ return window.b2link.STATIC.UI[ key ]; };

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------[ E ] - window.b2link.STATIC.UI;



//	LOGIC;




//
//---------------------------------------------------------------------------------------------------;


//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.array_collection;

window.b2link.array_collection = window.b2link.array_collection || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.array_collection;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.array_collection;

//window.b2link.array_collection = window.b2link.array_collection || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.array_collection;


//----------------------------------------------------------------------------------------------------window.b2link.array_collection.g***;

/**
 * JSON Array에서 key, value가 동일한 값을 찾아 해당 JSON Object를 반환
 * @function
 * @param {Array} a JsonArray
 * @param {String} key
 * @param {String} value
 * @return {Object}
 */
window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue = function( a, key, value )
{
	
	var i=0, iLen=a.length;
	var o = null;
	for( ; i<iLen; ++i )
	{
		o = a[ i ];
		if( o[ key ] == value )
		{
			break;
		}
	}

	
	return o;
};

//----------------------------------------------------------------------------------------------------window.b2link.array_collection.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.common;

window.b2link.common = window.b2link.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.common;


//----------------------------------------------------------------------------------------------------window.b2link.common.c***;

/**
 * Interval을 제거한다.
 * @function
 * @param {Number} n
 */
window.b2link.common.clearInterval=function(n){clearInterval(n)};

/**
 * Interval을 제거한다.
 * 대상 HTMLElement에서 window.b2link.event.INTERVAL_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.b2link.common.clearInterval_dispatchEvent=function(n,e){clearTimeout(n),e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.INTERVAL_END,n)};

/**
 * Timeout을 제거한다.
 * @function
 * @param {Number} n
 */
window.b2link.common.clearTimeout=function(o){clearTimeout(o)};

/**
 * Timeout을 제거한다.
 * 대상 HTMLElement에서 window.b2link.event.TIMEOUT_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.b2link.common.clearTimeout_dispatchEvent=function(n,i){clearTimeout(n),i&&window.b2link.event.dispatchCustomEvent(i,window.b2link.event.TIMEOUT_END,n)};

//----------------------------------------------------------------------------------------------------window.b2link.common.c***;


//----------------------------------------------------------------------------------------------------window.b2link.common.s***;

/**
 * Interval을 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setInterval=function(n,t){return setInterval(n,t)};

/**
 * Interval을 구동한다.
 * 대상 HTMLElement에서 window.b2link.event.INTERVAL_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t
 * @return {Number}
 */
window.b2link.common.setInterval_dispatchEvent=function(n,t,e){var i=setInterval(n,t);return e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.INTERVAL_START,i),i};

/**
 * Timeout를 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setTimeout=function(n,o){return setTimeout(n,o)};

/**
 * Timeout를 구동한다.
 * 대상 HTMLElement에서 window.b2link.event.TIMEOUT_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t targetElement
 */
window.b2link.common.setTimeout_dispatchEvent=function(n,t,e){var i=setTimeout(n,t);return e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.TIMEOUT_START,i),i};

//----------------------------------------------------------------------------------------------------window.b2link.common.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.console;

window.b2link.console = window.b2link.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.console;


//----------------------------------------------------------------------------------------------------window.b2link.console.g***;

/**
 * Browser Memory 정보를 반환한다.
 * @function
 * @return {MemoryInfo}
 */
window.b2link.console.getMemory=function(){return console.memory};

//----------------------------------------------------------------------------------------------------window.b2link.console.g***;


//----------------------------------------------------------------------------------------------------window.b2link.console.n***;

/**
 * Log를 Name과 {*}로 발생시킨다.
 * Name으로 Console 창에 경계선을 그어준다.
 * @function
 * @param {String} name
 * @param {*} t
 */
window.b2link.console.nameAndObject=function(n,o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.nameAndObject():void----------"),window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.nameAndObject():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.console.n***;


//----------------------------------------------------------------------------------------------------window.b2link.console.o***;

/**
 * 사용금지 - 2017.01.05
 * @function
 * @param {Object} t
 */
//window.b2link.console.objInfo=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objInfo():void----------"),o.__status(),window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objInfo():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_BottomLeftRightTop=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_LeftTopRightBottom=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.console.o***;



//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.dataTransfer;

window.b2link.dataTransfer = window.b2link.dataTransfer || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.dataTransfer;







//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.date;

window.b2link.date = window.b2link.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.date;


//----------------------------------------------------------------------------------------------------window,b2link.date.g***;

/**
 * 함수를 호출한 시점에서 new Date()로 Data 객체를 생성한 후 [ year, month, day, hours, minutes, seconds ]를 생성해서 return 한다.
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
window.b2link.date.getArrayDateFromNewDate=function(){var e=new Date,t=[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()];return e=null,t};

/**
 * [ year, month, day, hour, minute, seconds ] 형태의 Date 배열을 "-"를 통해 year-month-day-hour-minute-seconds 형태의 문자열로 만들어서 Return 한다.
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
window.b2link.date.getDateStringFromArrayDate_Dash=function(n){return n.join("-")};

/**
 * @function
 * @return {Object} {"y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50}
 */
window.b2link.date.getObjectDateFromNewDate=function(){var e=new Date,t={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),ho:e.getHours(),mi:e.getMinutes(),se:e.getSeconds()};return e=null,t};

//----------------------------------------------------------------------------------------------------window,b2link.date.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.date;

//window.b2link.date = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.date;


//----------------------------------------------------------------------------------------------------window,b2link.date.d***;

/**
 * Calculator Date difference
 *
 * @function
 * @param {Object} from {"y" : 2017, "m" : 2,  "d" : 4}
 * @param {Object} to {"y" : 2017, "m" : 2,  "d" : 4}
 * @return {String|Number}
 * @author James
 */
window.b2link.date.dateDifference_object = function( date_obj1, date_obj2 )
{
	

	if( date_obj1 === null || date_obj2 === null ) return "";

	if( typeof date_obj1 !== "object" || typeof date_obj2 !== "object" ) return "";

	if( !date_obj1.hasOwnProperty( "y" ) ||
		!date_obj1.hasOwnProperty( "m" ) ||
		!date_obj1.hasOwnProperty( "d" ) )
	{
		return "";
	}

	if( !date_obj1.hasOwnProperty( "y" ) ||
		!date_obj1.hasOwnProperty( "m" ) ||
		!date_obj1.hasOwnProperty( "d" ) )
	{
		return "";
	}

	var d1 = new Date( date_obj1.y, date_obj1.m, date_obj1.d );
	var d2 = new Date( date_obj2.y, date_obj2.m, date_obj2.d );

	var diff_day = d2 - d1;
	var d_time = 1000 * 60 * 60 * 24;

	
	return parseInt( diff_day / d_time );
};

/**
 * String format
 * @function
 * @param {Date} Date
 * @return {Array|Object|String}
 * @author  cpark
 *
 * TODO : Add Parameter to format date
 * ex ) YY/MM/DD HH:MM:SS
 *
 * When d is string type, It only excepts format in "yyyy-mm-dd"
 */
window.b2link.date.dateFormatter = function( d, format )
{
	

	var addZero = window.b2link.date.dateFormatter._addZero;

	if( typeof d === "string" ) d = new Date( d );

	var year = d.getFullYear();
	var month = addZero( d.getMonth() + 1 );
	var day = addZero( d.getDate() );
	var hours = addZero( d.getHours() );
	var minutes = addZero( d.getMinutes() );
	var seconds = addZero( d.getSeconds() );
	var milliSeconds = d.getMilliseconds();

	var formattedDate = null;

	//if( !format ) formattedDate = `${year}-${month}-${day}`;
	if( !format ) formattedDate = year + "-" + month + "-" + day;
	else if( format.toLowerCase() == "array" )
	{
		formattedDate = [];
		formattedDate.push( parseInt( year ) );
		formattedDate.push( parseInt( month ) );
		formattedDate.push( parseInt( day ) );
		formattedDate.push( parseInt( hours ) );
		formattedDate.push( parseInt( minutes ) );
		formattedDate.push( parseInt( milliSeconds ) );
	}
	else if( format.toLowerCase() == "object" )
	{
		formattedDate = {
			y : parseInt( year ), m : parseInt( month ), d : parseInt( day )
			, ho : parseInt( hours ), se : parseInt( minutes ), mi : parseInt( milliSeconds )
		};
	}
	//else if( format.toLowerCase() == "string" ) formattedDate = `${year}-${month}-${day}`;
	//else formattedDate = `${year}-${month}-${day}`;
	else if( format.toLowerCase() == "string" ) formattedDate = year + "-" + month + "-" + day;
	else formattedDate = formattedDate = year + "-" + month + "-" + day;

	
	return formattedDate;
};
window.b2link.date.dateFormatter._addZero = function( n ){ if( n < 10 ) n = "0" + n; return n; };

/**
 * String format
 * @function
 * @param {Array} Date Array [ 2017, 2, 10 ]
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateArray = function( d )
{
	//

	if( !Array.isArray( d ) ) return "";

	if( d.length < 3 ) return "";

	var addZero = function( n )
	{
		if( n < 10 ) n = "0" + n;
		return n;
	};

	var year = d[ 0 ];
	var month = addZero( d[ 1 ] );
	var day = addZero( d[ 2 ] );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	//
	return formattedDate;
};

/**
 * String format
 * @function
 * @param {Object} Date object { y : 2017, m : 2, d: 3, ho : 3, mi : 4, se : 12}
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateObject = function( d )
{
	//

	if( d === null ) return "";

	if( typeof d !== "object" ) return "";

	if( !d.hasOwnProperty( "y" ) ) return "";

	var addZero = function( n )
	{
		if( n < 10 )
			n = "0" + n;
		return n;
	};

	var year = d.y;
	var month = addZero( d.m );
	var day = addZero( d.d );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	//
	return formattedDate;
};

//----------------------------------------------------------------------------------------------------window,b2link.date.d***;


//----------------------------------------------------------------------------------------------------window,b2link.date.g***;

/**
 * @function
 * @param {String} "2017-01-04"
 * @return {Object} {"y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50}
 */
window.b2link.date.getObjectDateFromDateString_Dash = function( dateString )
{
	////////

	if( !dateString ) return null;

	var date_arr = dateString.split( "-" );

	if( date_arr.length < 3 ) return null;

	var r = { y : parseInt( date_arr[ 0 ] ), m : parseInt( date_arr[ 1 ] ), d : parseInt( date_arr[ 2 ] ), ho : 0, mi : 0, se : 0 };

	date_arr = null;

	////////
	return r;
};

/**
 * String format
 * @function
 * @param {Date} DateBefore, DateAfter
 * @return {Number}
 * @author  cpark
 *
 * Date format should in Date() object type.
 * ex) '-' or '.' can be used in Date String
 *	 The order of date type is not concerned. (2018.01.01 equals 01.01.2018)
 * var timeDifference = window.b2link.util.getTimeDifferenceInMills(new Date("2018-12-12"), new Date("2020-01-01"));
 */
window.b2link.date.getTimeDifferenceInMills = function( date1, date2 )
{
	

	var dm1 = date1.getTime();
	var dm2 = date2.getTime();

	
	return dm2 - dm1;
};

//----------------------------------------------------------------------------------------------------window,b2link.date.g***;



//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.debug;

window.b2link.debug = window.b2link.debug || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.debug;






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.dom;

window.b2link.dom = window.b2link.dom || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.dom;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.element;

window.b2link.element = window.b2link.element || {};

//--------------------------------------------------window.b2link.element.a***;

/**
 * target HTMLElement를 removeChild할 시에 scrollTop를 기억한다.
 * target HTMLElement를 appendChild할 시에 기억해놓은 scrollTop를 적용한다.
 * 사용이 끝난 HTMLElement는 window.b2link.element.removeEvent_RestoreScrollTopByDomNodeInserted로 이벤트를 제거 해준다.
 * @function
 * @param {HTMLElement} domNodeElement HTMLElement
 * @param {HTMLElement} evtElement HTMLElement
 */
window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted=function(e,o){e.__targetElement__RestoreScrollTopByDomNodeInserted__domNodeElement=e,e.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement=o,e.removeEventListener("DOMNodeInserted",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1),e.removeEventListener("DOMNodeRemoved",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1),e.addEventListener("DOMNodeInserted",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1,0,!0),e.addEventListener("DOMNodeRemoved",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1,0,!0)},window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted=function(e){var o=e.currentTarget.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement;o.scrollTop=o.__scrollTop},window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved=function(e){var o=e.currentTarget.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement;o.scrollTop?o.__scrollTop=o.scrollTop:!o.scrollTop&&o.__scrollTop&&(o.scrollTop=o.__scrollTop)};

/**
 * parentElement에 element 객체를 추가한다.
 * parentElement._appendChild 함수가 존재하면 사용하고 없으면 window.b2link.element.appendChild를 사용한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element._appendChild=function(e,n){try{if(!e._appendChild)return void window.b2link.element.appendChild(e,n);e._appendChild(n);window.b2link.element.getID_Or_ClassName}catch(i){window.b2link_ui.message.error("window.b2link.element._appendChild Error : "+i)}};

/**
 * parentElement에 element 객체를 추가한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element.appendChild=function(e,n){try{e.appendChild(n);var i=window.b2link.element.getID_Or_ClassName;window.TtwLog.timeStamp(i(e)+"에 "+i(n)+"를 추가 함")}catch(d){window.b2link_ui.message.error("window.b2link.element.appendChild Error : "+d)}};

/**
 * parentElement에 element 객체를 추가한다.
 * 추가한 객체를 parentElement의 정 한가운데에 배치한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 * @param {Number} time 1000이 1초 default 300
 */
window.b2link.element.appendChild_SetPositionCenterMiddle=function(e,n,i){if(e==window.b2link.ui_modal.modal_content)return void window.b2link_ui.message.error("Modal에서는 이 API를 사용할수 없다.");try{window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0=i?i:window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0,window.b2link.element.appendChild(e,n),window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(n);var t=function(){window.TtwLog.warn(t._count++),window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(n),n.offsetLeft>=0&&n.offsetTop>=0||t()};t._count=0,setTimeout(t,window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0)}catch(o){window.b2link_ui.message.error("window.b2link.element.appendChild_SetPositionCenterMiddle Error : "+o)}},window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0=50,window.b2link.element.appendChild_SetPositionCenterMiddle._evt=function(e){var n=e.target,i=function(){window.TtwLog.warn(i._count++),window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(n),n.offsetLeft>0&&n.offsetTop>0||i()};i._count=0,setTimeout(i,window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0)},window.b2link.element.appendChild_SetPositionCenterMiddle._evt._count=0;

//--------------------------------------------------window.b2link.element.a***;


//--------------------------------------------------window.b2link.element.c***;

/**
 * Element.value 값을 ""으로 초기화 한다.
 * @function
 * @param {Object} t HTMLElement들이 존재하는 Object
 * @param {*} defaultValue ""
 * @return {Object}
 */
window.b2link.element.clearElementsValue=function(e,a){a=a||"";var t;try{for(var l in e)if(t=e[l],t.tagName)window.TtwLog.timeStamp("className0 : "+t.className),t.value="";else for(var n in t)window.TtwLog.timeStamp("className1 : "+t[n].className),t[n].value=""}catch(i){window.b2link_ui.message.error("window.b2link.element.clearElementsValue Error : "+i)}return e};

//--------------------------------------------------window.b2link.element.c***;


//--------------------------------------------------window.b2link.element.d***;

/**
 * window.b2link.element.dispose
 * element에 js 객체가 존재 할 시에 t.js.dispose() 호출하여 element와 js객체를 제거한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.dispose=function(e){e.js?e.js.dispose():(window.b2link.element.removeChildFromParentElement(e),e.innerHTML="",e=null)};

/**
 * window.b2link.element.disposeAllChildren
 * element의 children[ i ]에 js 객체가 존재 할 시에 t.children[ i ].js.dispose() 호출하여 element와 js객체를 제거한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
(function(){var _f1=window.b2link.element.dispose;window.b2link.element.disposeAllChildren=function(e){for(var l,n=window.b2link.element.disposeAllChildren,i=e.children,d=0,o=i.length;o>d;++d)l=i[0],l.children.length&&n(l),_f1(l)};})();

//--------------------------------------------------window.b2link.element.d***;


//--------------------------------------------------window.b2link.element.g***;

/**
 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 */
window.b2link.element.getElementByClassName=function(e,n){return e.getElementsByClassName(n)[0]};

/**
 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 모든 객체를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 * @return {Array}
 */
window.b2link.element.getElementsByClassName=function(e,n){return e.getElementsByClassName(n)};

/**
 * target Object 구조 그대로 HTMLElement Reference를 HTMLElement value로 만들어서 리턴한다.
 * @function
 * @param {Object} t HTMLElement들이 존재하는 Object
 * @return {Object}
 */
window.b2link.element.getElementsValue=function(e){var t,n={};try{for(var a in e)if(t=e[a],t.tagName)window.TtwLog.timeStamp("className0 : "+t.className),n[a]=t.value;else{n[a]={};for(var l in t)window.TtwLog.timeStamp("className1 : "+t[l].className),n[a][l]=t[l].value}}catch(i){window.b2link_ui.message.error("window.b2link.element.getElementsValue Error : "+i)}return n};

/**
 * Element에 id가 존재할 시 id를 돌려주고 id가 없을시 className를 돌려준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {String}
 */
window.b2link.element.getID_Or_ClassName=function(e){return e.id&&""!=e.id?e.id:""==e.className?e.tagName:e.className};

//--------------------------------------------------window.b2link.element.g***;


//--------------------------------------------------window.b2link.element.h***;

/**
 * 대상 Element를 숨긴다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.hide=function(n){n.style.display="none"};

//--------------------------------------------------window.b2link.element.h***;


//--------------------------------------------------window.b2link.element.i***;

/**
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 */
window.b2link.element.injectValueForListItem=function(e,i){e.list_item_value=i};

/**
 * data.$idx = idx를 반영한다.
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 * @param {uint} idx
 */
window.b2link.element.injectValueForListItemAndIDX=function(e,i,n){i.$idx=n,e.list_item_value=i};

/**
 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array} data
 */
!function(){var e=window.b2link.element.injectValueForListItem;window.b2link.element.injectValueForListItems=function(n,t){var l;if(n.children[0]&&"STYLE"==n.children[0].tagName){l=[];for(var i=n.children,r=0,a=i.length;a>r;++r)"STYLE"!=i[r].tagName&&l.push(i[r])}else l=n.children;for(var r=0,a=l.length>t.length?t.length:l.length;a>r;++r)e(l[r],t[r])}}();

/**
 * $data에 $idx property를 생성해서 데이터의 index 값을 주입한다.
 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array} data
 */
!function(){var e=window.b2link.element.injectValueForListItem;window.b2link.element.injectValueForListItemsAndIDX=function(n,t){var i;if(n.children[0]&&"STYLE"==n.children[0].tagName){i=[];for(var l=n.children,r=0,a=l.length;a>r;++r)"STYLE"!=l[r].tagName&&i.push(l[r])}else i=n.children;for(var r=0,a=i.length>t.length?t.length:i.length;a>r;++r)t[r].$idx=r,e(i[r],t[r])},window.b2link.element.injectValueForListItemsAndID=window.b2link.element.injectValueForListItemsAndIDX}();

//--------------------------------------------------window.b2link.element.i***;


//--------------------------------------------------window.b2link.element.m***;

/**
 * 대상 Element를 마우스 인식 못하게 만든다.
 *
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseDisable=SUtilDisObj.mouseDisable;

/**
 * 대상 Element를 마우스 인식 못하게 만든다.
 *
 * @function
 * @param {String} id htmlElementID
 * @return {HTMLElement}
 */
window.b2link.element.mouseDisable__ID=SUtilDisObj.mouseDisable__ID;

/**
 * 대상 Element를 마우스 인식 하게 만든다.
 *
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseEnable=SUtilDisObj.mouseEnable;

/**
 * 대상 Element를 마우스 인식 하게 만든다.
 *
 * @function
 * @param {String} id htmlElementID
 * @return {HTMLElement}
 */
window.b2link.element.mouseEnable__ID=SUtilDisObj.mouseEnable__ID;

//--------------------------------------------------window.b2link.element.m***;

//--------------------------------------------------window.b2link.element.r***;

/**
 * 대상 Element의 모든 자식 객체를 제거한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 */
window.b2link.element.removeAllChildren=function(e){try{for(var r=window.b2link.element.removeChild,n=e.children,l=0,o=n.length;o>l;++l)r(e,n[0])}catch(i){window.TtwLog.error("window.b2link.element.removeAllChildren Error : "+i)}};

/**
 * parentElement에서 childElement를 제거한다.
 * 제거 로그를 id, class를 기반으로 출력한다.
 *
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element.removeChild=function(e,n){try{e.removeChild(n);window.b2link.element.getID_Or_ClassName}catch(w){window.TtwLog.warn("warn : "+w)}};

/**
 * 해당 Element의 parentElement에서 제거 후 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {HTMLElement}
 */
window.b2link.element.removeChildFromParentElement=function(e){try{return e.parentElement.removeChild(e)}catch(r){window.TtwLog.error("window.b2link.element.removeChildFromParentElement Error : "+r)}};

/**
 * window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted로 추가한 이벤트를 제거한다.
 * @param {HTMLElement} domNodeElement
 */
window.b2link.element.removeEvent_RestoreScrollTopByDomNodeInserted=function(e){var o;o=e?e:e.__targetElement__RestoreScrollTopByDomNodeInserted__domNodeElement,o||window.b2link_ui.error.message("window.b2link.element.removeEvent_RestoreScrollTopByDomNodeInserted Error : 이벤트를 제거할 대상 객체가 존재하지 않음"),o.removeEventListener("DOMNodeInserted",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1),o.removeEventListener("DOMNodeRemoved",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1)};

/**
 * t HTMLElement를 el HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {HTMLElement} el
 * @return {HTMLElement} el HTMLElement를 반환한다.
 */
window.b2link.element.replaceElement=function(e,n){try{e.parentElement.replaceChild(n,e);var t=window.b2link.element.getID_Or_ClassName;return window.TtwLog.timeStamp(t(e)+"를 "+t(n)+"로 교체 함"),n}catch(r){window.TtwLog.error("window.b2link.element.replaceElement Error : "+r)}};

/**
 * t HTMLElement를 html 문자열로 생성한 HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {String} html
 * @return {HTMLElement} html로 생성된 HTMLElement를 반환한다.
 */
window.b2link.element.replaceElement__HTML=function(e,n){try{return window.b2link.element.replaceElement(e,window.b2link.html.createHTMLElement(n))}catch(l){window.TtwLog.error("window.b2link.element.replaceElement__HTML Error : "+l)}};

/**
 * t HTMLElement를 URL로 불러온 html 문자열로 생성한 HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {String} htmlURL
 * @return {HTMLElement} html로 생성된 HTMLElement를 반환한다.
 */
window.b2link.element.replaceElement__HTML_URL=function(e,n){try{return window.b2link.element.replaceElement__HTML(e,window.b2link.xhr.reqSync_String(n))}catch(r){window.TtwLog.error("window.b2link.element.replaceElement__HTML_URL Error : "+r)}};

/**
 * target HTMLElement를 removeChild할 시에 scrollTop를 기억한다.
 * target HTMLElement를 appendChild할 시에 기억해놓은 scrollTop를 적용한다.
 * 1회성이다.
 * 1번 복원하고 이벤트는 자동으로 제거된다.
 * @function
 * @param {HTMLElement} domNodeElement HTMLElement
 * @param {HTMLElement} evtElement HTMLElement
 */
window.b2link.element.restoreScrollTopByDomNodeInserted=function(e,o){var l=function(n){e.removeEventListener("DOMNodeInserted",l,!1),e.removeEventListener("DOMNodeRemoved",r,!1),o.scrollTop=o.__scrollTop},r=function(e){o.scrollTop?o.__scrollTop=o.scrollTop:!o.scrollTop&&o.__scrollTop&&(o.scrollTop=o.__scrollTop)};e.addEventListener("DOMNodeInserted",l,!1,0,!0),e.addEventListener("DOMNodeRemoved",r,!1,0,!0)};

//--------------------------------------------------window.b2link.element.r***;

//--------------------------------------------------window.b2link.element.s***;

/**
 * TBody의 모든 tr의 모든 th의 className을 변경한다.
 * @function
 * @param {HTMLElement} tbody HTMLElement
 */
window.b2link.element.setClassName__tbody_tr_td=function(e,n){for(var l=e.children,t=0,r=l.length;r>t;++t)for(var a=l[t].children,d=0,i=a.length;i>d;++d)a[d].className=n};

/**
 * THead의 모든 tr의 모든 th의 className을 변경한다.
 * @function
 * @param {HTMLElement} thead HTMLElement
 */
window.b2link.element.setClassName__thead_tr_th=function(e,t){for(var n=e.children,l=0,_=n.length;_>l;++l)for(var s=n[l].children,a=0,i=s.length;i>a;++a)s[a].className=t},window.b2link.element.setClassName__tbody_tr_th=function(e,t){window.b2link_ui.message.error("window.b2link.element.setClassName__tbody_tr_th -> window.b2link.element.setClassName__thead_tr_th로 교체바람"),window.b2link.element.setClassName__thead_tr_th(e,t)};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * top, bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_Center_FromParent=function(t){var e=t.parentElement.clientWidth,n=t.clientWidth,o=n/2,i=e/2,l=t.style;l.left=i-o+"px",l.top="auto",l.bottom="auto",l.right="auto"};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * top, bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
 window.b2link.element.setPosition_Center_FromWindow=function(t){var e=t.parentElement.clientWidth,n=(t.parentElement.clientHeight,t.clientWidth),i=(t.clientHeight,n/2),o=e/2,l=t.style;l.left=o-i+"px",l.top="auto",l.bottom="auto",l.right="auto"};

 /**
 * 대상 HTMLElement의 left를 Body 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Body 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromBody=function(t){var e=window.document.body,i=e.clientWidth,o=e.clientHeight,n=t.clientWidth,d=t.clientHeight,l=n/2,c=d/2,h=i/2,m=o/2,r=t.style;r.left=h-l+"px",r.top=m-c+"px",r.bottom="auto",r.right="auto"};

/**
 * 대상 HTMLElement의 left를 Body 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Body 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
//window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus=function(t){var e=window.document.body,i=e.clientWidth,o=e.clientHeight,n=t.clientWidth,l=t.clientHeight,d=n/2,u=l/2,a=i/2,c=o/2,h=t.style,r=a-d;r>0?h.left=r+"px":h.left="auto";var m=c-u;m>0?h.top=m+"px":h.top="auto",h.bottom="auto",h.right="auto"};
window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus=function(t){var e=window.document.body,i=e.clientWidth,n=e.clientHeight,o=t.clientWidth,l=t.clientHeight,d=o/2,c=l/2,u=i/2,a=n/2,h=t.style,p=u-d;p>0?h.left=p+"px":h.left="auto";var r=a-c;r>0?h.top=r+"px":h.top="auto"};

window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus_HS=function(t,e,o){var i=window.document.body,n=i.clientWidth,d=i.clientHeight,l=e,u=o,_=l/2,a=u/2,c=n/2,p=d/2,r=t.style,s=c-_;s>0?r.left=s+"px":r.left="auto";var w=p-a;w>0?r.top=w+"px":r.top="auto"};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent=function(t){var e=t.parentElement.clientWidth,n=t.parentElement.clientHeight,i=t.clientWidth,l=t.clientHeight,o=i/2,r=l/2,a=e/2,c=n/2,d=t.style;d.left=a-o+"px",d.top=c-r+"px",d.bottom="auto",d.right="auto"};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus=function(t){var e=t.parentElement.clientWidth,n=t.parentElement.clientHeight,i=t.clientWidth,o=t.clientHeight,l=i/2,a=o/2,r=e/2,p=n/2,u=t.style,c=r-l;c>0?u.left=c+"px":u.left="auto";var d=p-a;d>0?u.top=d+"px":u.top="auto",u.bottom="auto",u.right="auto"};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Window 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromWindow=function(t){var e=t.parentElement.clientWidth,i=t.parentElement.clientHeight,n=t.clientWidth,l=t.clientHeight,o=n/2,d=l/2,r=e/2,a=i/2,c=t.style;c.left=r-o+"px",c.top=a-d+"px",c.bottom="auto",c.right="auto"};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Window 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromWindow__NMinus=function(t){var e=window.screen.width,i=window.screen.height,o=t.clientWidth,n=t.clientHeight,d=o/2,l=n/2,w=e/2,r=i/2,a=t.style,h=w-d;h>0?a.left=h+"px":a.left="auto";var s=r-l;s>0?a.top=s+"px":a.top="auto",a.bottom="auto",a.right="auto"};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} bottom
 */
window.b2link.element.setPosition_LeftBottom=function(t,o,e){var i=t.style;i.bottom=e+"px",i.left=o+"px",i.right="",i.top="",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} top
 */
window.b2link.element.setPosition_LeftTop=function(t,o,e){var i=t.style;i.bottom="",i.left=o+"px",i.right="",i.top=e+"px",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} bottom
 */
window.b2link.element.setPosition_RightBottom=function(t,o,i){var e=t.style;e.bottom=i+"px",e.left="",e.right=o+"px",e.top="",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} top
 */
window.b2link.element.setPosition_RightTop=function(t,o,i){var e=t.style;e.bottom="",e.left="",e.right=o+"px",e.top=i+"px",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * 대상 Element를 화면에 보여준다.
 * p(parentElement)를 넣으면 appendChild 한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {HTMLElement} p HTMLElement
 */
window.b2link.element.show=function(e,n){e.style.display="",0==e.style.opacity&&(e.style.opacity=1),n?n.appendChild(e):e.parentElement&&e.parentElement.appendChild(e)};

/**
 * 대상 Element를 화면에 보여준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.switchShowHide=function(i){var l=i.style;i.hasOwnProperty("__originalDisplay")||(i.__originalDisplay=l.display);try{i.__originalDisplay==l.display?l.display="none":l.display=i.__originalDisplay}catch(n){window.TtwLog.error("window.b2link.element.switchShowHide Error : "+n)}};

//--------------------------------------------------window.b2link.element.s***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.element;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.element;

//window.b2link.element = {};

//--------------------------------------------------window.b2link.element.a***;
//--------------------------------------------------window.b2link.element.a***;


//--------------------------------------------------window.b2link.element.c***;
//--------------------------------------------------window.b2link.element.c***;


//--------------------------------------------------window.b2link.element.g***;

/**
 * targetElement의 모든 form elements들을 반환한다.
 * @function
 * @param {Object} t
 * @param {HTMLElement} el HTMLElement
 * @return {Object}
 */
(function(){
	window.b2link.element.getFormElements = function( t, el )
	{
		//

		var t0 = window.b2link.element.getFormElements;
		var f0 = t0._f0;
		var f1 = t0._f1;

		t = t ? t : {};
		var a = t0._a0;

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];

			f0( t, el.getElementsByTagName( io ) );
		};

		f1( t, el );

		//

		return t;
	};

	var _ = window.b2link.element.getFormElements;
		_._a0 = [ "SELECT", "TEXTAREA", "BUTTON", "DATALIST", "KEYGEN", "OUTPUT" ];
		_._f0 = function( t, a )
		{
			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a [ i ];
				t[ io.classList[ 0 ] ] = io;
			}
		};

		_._f1 = function( t, el )
		{
			var a = el.getElementsByTagName( "INPUT" );

			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a [ i ];
				if( io.type == "radio" )
				{
					if( !t[ io.classList[ 0 ] ] )
					{
						t[ io.classList[ 0 ] ] = [];
						t[ io.classList[ 0 ] ].value = null;
					}

					t[ io.classList[ 0 ] ].push( io );

					if( io.checked )
					{
						t[ io.classList[ 0 ] ].value = io.value;
					}
				}
				else
				{
					t[ io.classList[ 0 ] ] = io;
				}
			}
		};
})();

/**
 * targetElement의 value를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {Object} {}
 */
(function(){
	window.b2link.element.getValueOfElement = function( t )
	{
		//

		var key = null;
		try
		{
			key = ( t.tagName == "INPUT" ) ? "_fn_" + t.type : "_fn_" + t.tagName.toLowerCase();
		}
		catch( e )
		{
			key = ( t[ 0 ].tagName == "INPUT" ) ? "_fn_" + t[ 0 ].type : "_fn_" + t[ 0 ].tagName.toLowerCase();
		}
		var r = window.b2link.element.getValueOfElement[ key ]( t );

		//

		return r;
	};

	var _ = window.b2link.element.getValueOfElement;
		_[ "_fn_button"   ] = function( t ){ return t.value; };
		_[ "_fn_color"    ] = function( t ){ return t.value; };
		_[ "_fn_email"    ] = function( t ){ return t.value; };
		_[ "_fn_file"     ] = function( t ){ return t.value; };
		_[ "_fn_hidden"   ] = function( t ){ return t.value; };
		_[ "_fn_image"    ] = function( t ){ return t.value; };
		_[ "_fn_month"    ] = function( t ){ return t.value; };
		_[ "_fn_number"   ] = function( t ){ return t.value; };
		_[ "_fn_password" ] = function( t ){ return t.value; };
		_[ "_fn_range"    ] = function( t ){ return t.value; };
		_[ "_fn_reset"    ] = function( t ){ return t.value; };
		_[ "_fn_search"   ] = function( t ){ return t.value; };
		_[ "_fn_submit"   ] = function( t ){ return t.value; };
		_[ "_fn_tel"      ] = function( t ){ return t.value; };
		_[ "_fn_text"     ] = function( t ){ return t.value; };
		_[ "_fn_time"     ] = function( t ){ return t.value; };
		_[ "_fn_url"      ] = function( t ){ return t.value; };
		_[ "_fn_week"     ] = function( t ){ return t.value; };
		_[ "_fn_date"     ] = function( t ){ return t.value; };
		_[ "_fn_datetime" ] = function( t ){ return t.value; };
		_[ "_fn_datetime-local" ] = function( t ){ return t.value; };

		_[ "_fn_checkbox" ] = function( t ){ return t.checked; };

		_[ "_fn_radio" ] = function( t ){
			if( t.length > 0 )
			{
				var i=0, iLen=t.length;
				var v = null;
				for( ; i<iLen; ++i )
				{
					if( t[ i ].checked )
					{
						v = t[ i ].value;
						break;
					}
				}
			}
			else
			{
				v = t.value;
			}
			return v;
		};


		_[ "_fn_textarea" ] = function( t ){ return t.value; };
		_[ "_fn_select"   ] = function( t ){ return t.value; };
		_[ "_fn_button"   ] = function( t ){ return t.value; };
		_[ "_fn_datalist" ] = function( t ){ return t.value; };
		_[ "_fn_output"   ] = function( t ){ return t.value; };
		_[ "_fn_keygen"   ] = function( t ){ return t.value; };
})();

//--------------------------------------------------window.b2link.element.g***;


//--------------------------------------------------window.b2link.element.s***;

/**
 * targetElement의 value를 set 한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} value
 */
(function(){
	window.b2link.element.setValueOfElement = function( t, value )
	{
		//

		var key = ( t.tagName == "INPUT" ) ? "_fn_" + t.type : "_fn_" + t.tagName.toLowerCase();
		var r = window.b2link.element.setValueOfElement[ key ]( t, value );

		//
	};

	var _ = window.b2link.element.setValueOfElement;
		_[ "_fn_button"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_color"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_email"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_file"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_hidden"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_image"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_month"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_number"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_password" ] = function( t, value ){ t.value = value; };
		_[ "_fn_range"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_reset"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_search"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_submit"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_tel"      ] = function( t, value ){ t.value = value; };
		_[ "_fn_text"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_time"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_url"      ] = function( t, value ){ t.value = value; };
		_[ "_fn_week"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_date"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_datetime" ] = function( t, value ){ t.value = value; };
		_[ "_fn_datetime-local" ] = function( t, value ){ t.value = value; };

		_[ "_fn_checkbox" ] = function( t, value ){ t.checked = Boolean(value); };

		_[ "_fn_radio" ] = function( a, value ){
			var i=0, iLen=a.length;

			if( !Boolean(value) ){ a.value = null; }

			for( ; i<iLen; ++i )
			{
				if( a[i].value == value ){
					a[i].checked = true;
					a.value = value;
				}
				else
				{
					a[i].checked = false;
				}
			}
		};

		_[ "_fn_textarea" ] = function( t, value ){ t.value = value; };
		_[ "_fn_select"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_datalist" ] = function( t, value ){ t.value = value; };
		_[ "_fn_output"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_keygen"   ] = function( t, value ){ t.value = value; };
})();

//--------------------------------------------------window.b2link.element.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.element;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_div;

window.b2link.el_div = window.b2link.el_div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_div;


//----------------------------------------------------------------------------------------------------window.b2link.el_div.c***;

/**
 * 받은 데이터를 div.children 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 children[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_div.change_child=function(n,e){for(var i,l=window.b2link.element.injectValueForListItemAndIDX,d=n.children,o=0,t=d.length>e.length?e.length:d.length;t>o;++o)if(i=d[o],dio=e[o],l(i,dio,o),dio){var r="";for(var h in dio)r+=dio[h];i.innerText=r}else i.innerText=""};

//----------------------------------------------------------------------------------------------------window.b2link.el_div.c***;


//----------------------------------------------------------------------------------------------------window.b2link.el_div.p***;

/**
 * div.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_div.push_child=function(r,i){try{r.innerHTML+=SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i)}catch(n){window.TtwLog.error("window.b2link.el_div.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_div.p***;


//----------------------------------------------------------------------------------------------------window.b2link.el_div.u***;

/**
 * div.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_div.unshift_child=function(i,n){try{i.innerHTML=SUtilString.applyBraceStrFromArray(i.__originalInnerHTML,n)+i.innerHTML}catch(r){window.TtwLog.error("window.b2link.el_div.unshift_child Error : "+r)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_div.u***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_input;

window.b2link.el_input = window.b2link.el_input || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_input;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;



//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;



//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_input;

//window.b2link.el_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_input;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {String} className
 * @return {Object}
 */
window.b2link.el_input.getInputRadioDataFromClassName = function( t, className )
{
	

	var a = t.getElementsByClassName( "className" );
	var radio = null;

	var i=0, iLen=a.length;
	var radio = null;
	var o = null;
	for( ; i<iLen; ++i )
	{
		o = a[ i ];
		if( o.tagName == "INPUT" && o.checked )
		{
			radio = o;
			break;
		}
	}

	var d = null;

	if( radio )
	{
		d = {};
		d.checked = true;
		d.title = o.title ? o.title : "";
		d.value = o.value ? o.value : "";
		d.value = o.className ? o.className : "";
	}

	
	return d;
};

(function(){
	/**
	 * @function
	 * @param {HTMLElement} t INPUT
	 * @return {Object} {}
	 */
	window.b2link.el_input.getInputValueFromInputType = function( t )
	{
		

		/*/
		try
		{
			var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		}
		catch( er )
		{
			console.error( "window.b2link.el_input.getInputValueFromInputType Error : " + er );
		}
		/*/
		var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		//*/

		
		return r;
	};
	var _ = window.b2link.el_input.getInputValueFromInputType;
		_._fn_button = function( t ){ return t.value; };
		_._fn_checkbox = function( t ){ return t.checked; };
		_._fn_color = function( t ){ return t.value; };
		_._fn_date = function( t ){ return t.value; };
		_[ "datetime-local" ] = function( t ){ return t.value; };
		_._fn_email = function( t ){ return t.value; };
		_._fn_file = function( t ){ return t.value; };
		_._fn_hidden = function( t ){ return t.value; };
		_._fn_image = function( t ){ return t.value; };
		_._fn_month = function( t ){ return t.value; };
		_._fn_number = function( t ){ return t.value; };
		_._fn_password = function( t ){ return t.value; };
		_._fn_radio = function( t ){ return t.value; };
		_._fn_range = function( t ){ return t.value; };
		_._fn_reset = function( t ){ return t.value; };
		_._fn_search = function( t ){ return t.value; };
		_._fn_submit = function( t ){ return t.value; };
		_._fn_tel = function( t ){ return t.value; };
		_._fn_text = function( t ){ return t.value; };
		_._fn_time = function( t ){ return t.value; };
		_._fn_url = function( t ){ return t.value; };
		_._fn_week = function( t ){ return t.value; };
})();

//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Array} d data Object Array
 * @param {String} className
 * @param {String} valueName data Object 안에서 라디오 버튼의 value로 사용할 Property name
 * @param {String} textName data Object 안에서 라디오 버튼에 대한 text로 사용할 Property name
 */
window.b2link.el_input.setInputRadioFromDataObject = function( t, d, className, valueName, textName )
{
	

	var f = window.b2link.element.getElementByClassName;

	var o = f( t, className );
	if( o )
	{
		var p = o.parentElement;
			p.innerHTML = "";

		var tempObj = null;
		var tempStr = null;

		var i=0, iLen=d.length;
		for( ; i<iLen; ++i )
		{
			tempObj = document.createElement( "input" );
			tempObj.type = o.type;
			tempObj.className = o.className;
			tempObj.name = o.name;
			tempObj.value = d[ i ][ valueName ];
			tempObj.title = d[ i ][ textName ];

			if( o.required ) tempObj.required = o.required;

			tempObj.item_value = d[ i ];

			tempStr = document.createElement( "span" );
			tempStr.innerText = d[ i ][ textName ];

			p.appendChild( tempObj );
			p.appendChild( tempStr );
		}
	}
	else
	{
		window.Rh2Log.error( "---- [ E ] - window.b2link.el_input.setInputRadioFromDataObject() ----------" );
		window.Rh2Log.error( "className : " + className + "인 element 존재하지 않음" );
	}

	
};

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Object} d
 */
window.b2link.el_input.setInputValueAttributeFromClassNameDataObject = function( t, d )
{
	

	var f = window.b2link.element.getElementByClassName;

	for( var p in d )
		if( f( t, p ) && f( t, p ).value != undefined ) f( t, p ).setAttribute( "value", d[ p ] );

	
};

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Object} d
 */
window.b2link.el_input.setInputValueFromClassNameDataObject = function( t, d )
{
	

	var f = window.b2link.element.getElementByClassName;

	for( var p in d )
		if( f( t, p ) && f( t, p ).value != undefined ) f( t, p ).value = d[ p ];

	
};

/**
 * @function
 * @param {Object} t INPUT
 * @param {HTMLElement} el INPUT
 */
window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName = function( t, el )
{
	//

	/*/
	try
	{
		var r = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName[ "_fn_" + el.type ]( t );
	}
	catch( er )
	{
		console.error( "window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName Error : " + er );
	}
	/*/

	var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + el.type ]( t );
	//*/

	t[ el.className ] = r;

	//
};

//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_list;

window.b2link.el_list = window.b2link.el_list || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_list;


//----------------------------------------------------------------------------------------------------window.b2link.el_list.g***;

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element가 가지고 있는 'list_item_value'에서 '_id' Property를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {uint}
 */
window.b2link.el_list.getIndex_First=function(i){return parseInt(window.b2link.el_list.getItem_First(i).list_item_value._id)};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element가 가지고 있는 'list_item_value'에서 '_id' Property를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {uint}
 */
window.b2link.el_list.getIndex_Last=function(t){return parseInt(window.b2link.el_list.getItem_Last(t).list_item_value._id)};

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {HTMLElement} li, tr, ...
 */
window.b2link.el_list.getItem_First=function(i){return i.children[0]};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {HTMLElement} li, tr, ...
 */
window.b2link.el_list.getItem_Last=function(n){return n.children[n.children.length-1]};

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {Object}
 */
window.b2link.el_list.getItemData_First=function(t){return t.children[0].list_item_value};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {Object}
 */
window.b2link.el_list.getItemData_Last=function(t){return t.children[t.children.length-1].list_item_value};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @param {Object} d
 * <code>
 * {
 *	"maxCount" : NaN
 *	, "limit" : NaN
 * }
 * </code>
 * @return {Object}
 */
window.b2link.el_list.getItemData_Last__maxCount_Limit=function(t,i){return t.children[i.maxCount%i.limit-1].list_item_value};

//----------------------------------------------------------------------------------------------------window.b2link.el_list.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_select;

window.b2link.el_select = window.b2link.el_select || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_select;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_select;

window.b2link.el_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_select;


//----------------------------------------------------------------------------------------------------window.b2link.el_select.p;

/**
 * <select> Element의 children을 갱신한다.
 * <select></select> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <option value="1">송선우0</option>, <option value="2">송선우1</??> 형태로 갱신한다.
 *
 * @function
 * @param {HTMLElement} selector
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @param {Object} options { key : {String}, value : {String}, add_select_text_yn : {Boolean}, select_text : {String}}
 * <code>
	{
		"key"  : option 의 value 에 바인딩 될 값.
		, "value" : option의 innerHTML 에 바인딩 될 값.
		, "add_select_text_yn" : 추가로 select 에 첫 행을 넣을 지 여부.
		, "select_text" : 추가로 slelect 의 첫 행에 넣을 문자열.
	}
 * </code>
 *
 * @return {HTMLElement}
 */
window.b2link.el_select.push_children = function( selector, a , options )
{
	

	if( 0 == a.length )
	{
		selector.innerHTML = "";
		return selector;
	}

	var key = "";
	var value = "";
	var add_select_text_yn = 0;
	var select_text = "";

	if( options.hasOwnProperty( "key" ) ) key = options.key;
	if( options.hasOwnProperty( "value" ) ) value = options.value;
	if( options.hasOwnProperty( "add_select_text_yn" ) ) add_select_text_yn = options.add_select_text_yn;
	if( options.hasOwnProperty( "select_text" ) ) select_text = options.select_text;

	if( !key || !value )
	{
		window.b2link_ui.message.error( "window.b2link.el_select.push_children( selector, a , key, value, add_select_text_yn, select_text )" );
		window.b2link_ui.message.error( "key 혹은 value 가 null 입니다." );
		return;
	}

	if( !select_text ) select_text = "-- Select --";

	if( add_select_text_yn )
	{
		var opt = document.createElement( "option" );
			opt.value = "";
			opt.innerHTML = select_text;
		selector.appendChild( opt );
	}

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var opt = document.createElement( "option" );
		var obj = a[ i ];
		opt.value = obj[ key ];
		opt.innerHTML = obj[ value ];
		selector.appendChild( opt );
		obj = null;
	}

	
	return selector;
};

//----------------------------------------------------------------------------------------------------window.b2link.el_select.p;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_style;

window.b2link.el_style = window.b2link.el_style || {};


//--------------------------------------------------window.b2link.el_style.a***;

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} cssText
 * @return {HTMLElement}
 */
window.b2link.el_style.addCSSText=function(e,t){return SUtilTemplateHTML.addCSSText(t,e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} cssText
 * @param {String} name
 * @return {HTMLElement}
 */
window.b2link.el_style.addCSSText_name=function(e,n,t){return SUtilTemplateHTML.addCSSText_name(n,e,t)};

//--------------------------------------------------window.b2link.el_style.a***;


//--------------------------------------------------window.b2link.el_style.c***;

/**
 * @function
 * @param {HTMLElement} el
 * @param {String} className
 */
window.b2link.el_style.changeClassName=function(a,e){window.TtwLog.timeStamp(a.className+"을 "+e+"으로 변경"),a.className=e};

//--------------------------------------------------window.b2link.el_style.c***;


//--------------------------------------------------window.b2link.el_style.r***;

/**
 *
 * @function
 * @param {HTMLElement} el
 */
window.b2link.el_style.removeAllStyleElements=function(e){SUtilTemplateHTML.removeAllStyleElements(e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 */
window.b2link.el_style.removeAllStyleElements__style_dynamic=function(e){SUtilTemplateHTML.removeAllStyleElements__style_dynamic(e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} element's name
 */
window.b2link.el_style.removeAllStyleElements_name=function(e,l){SUtilTemplateHTML.removeAllStyleElements_name(e,l)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} element's name
 * @return {HTMLElement}
 */
window.b2link.el_style.removeStyleElement=function(e,l){return SUtilTemplateHTML.removeStyleElement(e,l)};

//--------------------------------------------------window.b2link.el_style.r***;


//--------------------------------------------------window.b2link.el_style.s***;

/**
 *
 * @function
 * @param {HTMLElement} target
 * @param {String} className
 * @param {Object} styles
 * <code>
 * {
 * 		"display" : "none"
 * 		, "position" : "absolute"
 * 		, ...
 * }
 * </code>
 */
window.b2link.el_style.setStyleElement_byClassName=function(l,e,n){for(var t=l.getElementsByClassName(e),s=0,a=t.length,y=null,i=null;a>s;++s){y=t[s];for(i in n)y.style[i]=n[i]}};

//--------------------------------------------------window.b2link.el_style.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_style;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_style_table;

window.b2link.el_style_table = window.b2link.el_style_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_style_table;


//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.h***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
!function(){var n="th:nth-of-type( <!=n=!> ),td:nth-of-type( <!=n=!> ){display: none;}";window.b2link.el_style_table.hideColumn=function(e,t){return window.b2link.el_style.addCSSText_name(e,n.replace(/\<\!\=n\=\!\>/gi,t),"table-hideColumn"+t)}}();

//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.h***;


//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
window.b2link.el_style_table.showAllColumns=function(l){window.b2link.el_style.removeAllStyleElements_name(l,"table-hideColumn")};

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
window.b2link.el_style_table.showColumn=function(e,l){return window.b2link.el_style.removeStyleElement(e,"table-hideColumn"+l)};

//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_table;

window.b2link.el_table = window.b2link.el_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_table;


//----------------------------------------------------------------------------------------------------window.b2link.el_table.h***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.hideColumn=function(e,n){var l=table.tHead,i=l.children[l.children.length-1];i.__hideColumns||(i.__hideColumns="");var d=","+n;-1==i.__hideColumns.indexOf(d)&&(i.__hideColumns+=","+n);var _=i.children;_[n].style.display="none";for(var h,o=table.tBodies[0],_=o.children,s=0,a=_.length;a>s;++s)h=_[s],h.__hideColumns||(h.__hideColumns=""),-1==h.__hideColumns.indexOf(d)&&(h.__hideColumns+=","+n),h.children[n].style.display="none"};

//----------------------------------------------------------------------------------------------------window.b2link.el_table.h***;


//----------------------------------------------------------------------------------------------------window.b2link.el_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.showAllColumns=function(l){for(var e=table.tHead,n=e.children[e.children.length-1],i=n.children,d=n.__hideColumns.split(","),h=1,t=d.length;t>h;++h)i[d[h]].style.display="";n.__hideColumns="";var s,o=table.tBodies[0],i=o.children;for(h=0,t=i.length;t>h;++h){for(var s=i[h],r=s.children,a=s.__hideColumns.split(","),_=1,c=a.length;c>_;++_)r[a[_]].style.display="";s.__hideColumns=""}};

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.showColumn=function(e,l){var n=table.tHead,i=n.children[n.children.length-1];i.__hideColumns=i.__hideColumns.replace(","+l,"");var d=i.children;d[l].style.display="";for(var h,a=table.tBodies[0],d=a.children,r=0,o=d.length;o>r;++r)h=d[r],h.__hideColumns=h.__hideColumns.replace(","+l,""),h.children[l].style.display=""};

//----------------------------------------------------------------------------------------------------window.b2link.el_table.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_tbody;

window.b2link.el_tbody = window.b2link.el_tbody || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_tbody;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;



//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.b2link.el_tbody.getTBodyFromMouseClickEventTarget=function(e){return"TBODY"==e.tagName?e:window.b2link.el_tbody.getTBodyFromMouseClickEventTarget(e.parentElement)};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.b2link.el_tbody.getTBodyFromTR=function(e){return"TBODY"==e.tagName?e:window.b2link.el_tbody.getTBodyFromTR(e.parentElement)};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__FirstTRFirstTD=function(i){return i.children[0].children[0]};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__LastTRFirstTD=function(n){return n.children[n.children.length-1].children[0]};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD=function(i){return window.b2link.el_tbody.getTD__FirstTRFirstTD(i).innerHTML};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__LastTRFirstTD=function(n){return window.b2link.el_tbody.getTD__LastTRFirstTD(n).innerHTML};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD=function(t){return window.b2link.el_tbody.getTD__FirstTRFirstTD(t).innerText};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__LastTRFirstTD=function(t){return window.b2link.el_tbody.getTD__LastTRFirstTD(t).innerText};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "LI"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLLIElement} li
 */
window.b2link.el_tbody.getTDFromMouseClickEventTarget=function(e){return"TD"==e.tagName?e:window.b2link.el_tbody.getTDFromMouseClickEventTarget(e.parentElement)};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.b2link.el_tbody.getTRFromMouseClickEventTarget=function(e){return"TR"==e.tagName?e:window.b2link.el_tbody.getTRFromMouseClickEventTarget(e.parentElement)};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;

/**
 * tbody.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Object} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.push_child=function(r,i){try{r.innerHTML+=SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i)}catch(n){window.TtwLog.error("window.b2link.el_tbody.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;

/**
 * tbody.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.unshift_child=function(n,r){try{n.innerHTML=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r)+n.innerHTML}catch(i){window.TtwLog.error("window.b2link.el_tbody.unshift_child Error : "+i)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_tbody;

//window.b2link.el_tbody = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_tbody;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;

/**
 * 받은 데이터를 tbody.tr.td 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 trs[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.change_child = function( tbody, d )
{
	

	var f = window.b2link.element.injectValueForListItemAndIDX;
	var a0 = tbody.children;//trs;
	var io;//tr;
	//var i=0, iLen=a0.length;
	//수정 - 20160110 - 송선우;
	var i=0, iLen=( a0.length > d.length ) ? d.length : a0.length;
	for( ; i<iLen; ++i )
	{
		io = a0[ i ]//tr;
		var a1 = io.children;//tds;
		var j=0, jLen=a1.length;

		dio = d[ i ];
		f( io, dio, i );
		if( dio )
			for( ; j<jLen; ++j ) a1[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
		else
			for( ; j<jLen; ++j ) a1[ j ].innerText = "";
	}

	
};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 * @param {int} idx children index ex) 0
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_tbody.change_child_htmlOption = function( tbody, d, idx, thtml )
{
	

	var a = tbody.children;//trs;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;//tds;
		var j=0, jLen=b.length;

		var dio = d[ i ];
		if( dio )
		{
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
			var key = tbody.__list_reuse_key[ idx ];
				//console.log( "key : " + key );
			b[ idx ].innerHTML = thtml.replace( "{{" + key + "}}", dio[ key ] );
		}
		else for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	
};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 * @param {Array} options [{ idx : 0, thtml : "" }, { idx : 0, thtml : "" }, ...]
 */
window.b2link.el_tbody.change_child_htmlOptions = function( tbody, d, options )
{
	

	var a = tbody.children;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;
		var j=0, jLen=b.length;

		var dio = d[ i ];
		if( dio )
		{
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
			var k=0, kLen=options.length;
			for( ; k<kLen; ++k )
			{
				var option = options[ k ];
				var key = tbody.__list_reuse_key[ option.idx ];
				b[ option.idx ].innerHTML = option.thtml.replace( "{{" + key + "}}", dio[ key ] );
			}
		}
		else for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	
};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected = function( t )
{
	

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( i );
	}

	//console.log( r );
	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected = function( t )
{
	

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( ioCheckBox );
	}

	//console.log( r );
	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected = function( t )
{
	

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];

		/*/
		if( ioCheckBox.checked ) r.push( parseInt( ioCheckBox.value ) );
		/*/
		//수정 - 20161218 - 정재명;
		if( ioCheckBox.checked ) r.push( parseInt( i ) );
		//*/
	}

	console.log( r );
	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected = function( t )
{
	

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( ioCheckBox.value );
	}

	console.log( r );
	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tr
 * @return {Object} {}
 */
window.b2link.el_tbody.getInputValueFromTR = function( t )
{
	

	var f = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;

	var r = {};
	var a = t.getElementsByTagName( "INPUT" );
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];//HTMLInputElement;
		f( r, io );
	}

	console.log( r );
	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected = function( t )
{
	

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( io.children[ 0 ] );
	}

	console.log( r );
	
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;
//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;
//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_ul;

window.b2link.el_ul = window.b2link.el_ul || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_ul;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "LI"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLLIElement} li
 */
window.b2link.el_ul.getLIFromMouseClickEventTarget=function(e){return"LI"==e.tagName?e:window.b2link.el_ul.getLIFromMouseClickEventTarget(e.parentElement)};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;

/**
 * ul.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.push_child=function(r,i){try{var l=window.b2link.html.createHTMLElement_LI(SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i));r.appendChild(l)}catch(n){window.TtwLog.error("window.b2link.el_ul.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;

/**
 * ul.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.unshift_child=function(n,r){try{n.innerHTML=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r)+n.innerHTML}catch(i){window.TtwLog.error("window.b2link.el_ul.unshift_child Error : "+i)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_ul;

//window.b2link.el_ul = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_ul;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.c;

/**
 * 받은 데이터를 ul.li 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 lis[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.change_child = function( ul, d )
{
	

	var f = window.b2link.element.injectValueForListItemAndIDX;
	var a = ul.children;//lis;
	var io;//li;
	//var i=0, iLen=a.length;
	//수정 - 20160110 - 송선우;
	var i=0, iLen=( a.length > d.length ) ? d.length : a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		dio = d[ i ];
		f( io, dio, i );
		if( dio )
		{
			var txt = "";
			for( var p in dio ) txt += dio[ p ];
			io.innerText = txt;
		}
		else io.innerText = "";
	}

	
};

/**
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 * @param {int} key data key ex) "cd_us3"
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_ul.change_child_htmlOption = function( ul, d, key, thtml )
{
	

	var a = ul.children;//lis;
	var io;//li;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		var dio = d[ i ];
		if( dio )
		{
			var txt = "";
			for( var p in dio ){ if( p != "_id" ) txt += dio[ p ]; }
			io.innerText = txt;
			io.innerHTML = thtml.replace( "{{" + key + "}}", dio[ key ] );
		}
		else io.innerText = "";
	}

	
};

/**
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 * @param {Array} options [{ ket : "", thtml : "" }, { key : "", thtml : "" }, ...]
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_ul.change_child_htmlOptions = function( ul, d, options )
{
	

	var a = ul.children;//lis;
	var io;//li;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		var dio = d[ i ];
		if( dio )
		{
			var k=0, kLen=options.length;
			for( ; k<kLen; ++k )
			{
				var txt = "";
				var option = options[ k ];
				for( var p in dio ){ if( p != "_id" ) txt += dio[ p ]; }
				io.innerText = txt;
				io.innerHTML = option.thtml.replace( "{{" + option.key + "}}", dio[ option.key ] );
			}
		}
		else io.innerText = "";
	}

	
};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.event;

window.b2link.event = window.b2link.event || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.event;


//----------------------------------------------------------------------------------------------------window.b2link.event.a***;

/**
 * addEventListener 대신 사용하기 위한 용도
 * 무조건 동일 EventListener를 한번 removeEventListener을 실행 후 addEventListener을 한다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Function} fn
 */
window.b2link.event.addEventBeforeRemove=function(e,n,t){e.removeEventListener(n,t,!1),e.addEventListener(n,t,!1,0,!0)};

//----------------------------------------------------------------------------------------------------window.b2link.event.a***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__A***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.APPENDED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__APPENDED_CHILD=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.APPENDED_CHILD,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__A***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__C***;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CHANGED_LOCALE} evtDetail
 */
window.b2link.event.dispatchCE__CHANGED_LOCALE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CHANGED_LOCALE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_CUSTOM_ELEMENT} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_CUSTOM_ELEMENT=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_CUSTOM_ELEMENT,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_IMPORT_HTML_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_IMPORT_HTML_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_IMPORT_HTML_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_IMPORT_HTML_JS} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_IMPORT_HTML_JS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_IMPORT_HTML_JS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_INCLUDE_HTML_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_INCLUDE_HTML_EL=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_INCLUDE_HTML_EL,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATION_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__CREATION_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATION_COMPLETE,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__C***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__D***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_WRITE_CANCEL} evtDetail
 */
window.b2link.event.dispatchCE__DATA_WRITE_CANCEL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_WRITE_CANCEL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_WRITE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__DATA_WRITE_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_WRITE_COMPLETE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DISPOSED_EL} evtDetail
 */
window.b2link.event.dispatchCE__DISPOSED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DISPOSED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DISPOSED_JS} evtDetail
 */
window.b2link.event.dispatchCE__DISPOSED_JS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DISPOSED_JS,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__D***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__F***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_MULTI_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_FAILUE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_DELETE_PUBLIC_MULTI_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_FAILUE=function(n,_){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_MULTI_FAILUE,_)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_FAILUE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_COMPLETE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_FAILUE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_MULTI_FAILUE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_FAILUE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE,L)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__F***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__G***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.b2link.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__G***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__H***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.HIDED_EL} evtDetail
 */
window.b2link.event.dispatchCE__HIDED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.HIDED_EL,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__H***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__I***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INITIALIZED} evtDetail
 */
window.b2link.event.dispatchCE__INITIALIZED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INITIALIZED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INITIALIZED_ALL_CHILDREN} evtDetail
 */
window.b2link.event.dispatchCE__INITIALIZED_ALL_CHILDREN=function(n,I){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INITIALIZED_ALL_CHILDREN,I)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INTERVAL_END} evtDetail
 */
window.b2link.event.dispatchCE__INTERVAL_END=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INTERVAL_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INTERVAL_START} evtDetail
 */
window.b2link.event.dispatchCE__INTERVAL_START=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INTERVAL_START,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__I***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__L***;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__LIST_DATA_CHANGED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_SELECT_ITEM} evtDetail
 */
window.b2link.event.dispatchCE__LIST_SELECT_ITEM=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_SELECT_ITEM,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_SELECTED_ITEM} evtDetail
 */
window.b2link.event.dispatchCE__LIST_SELECTED_ITEM=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_SELECTED_ITEM,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LOADED_CHILDREN} evtDetail
 */
window.b2link.event.dispatchCE__LOADED_CHILDREN=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LOADED_CHILDREN,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__L***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__N***;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.NAVIGATION_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__NAVIGATION_DATA_CHANGED=function(n,A){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.NAVIGATION_DATA_CHANGED,A)};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.NAVIGATION_ITEM_SELECTED} evtDetail
 */
window.b2link.event.dispatchCE__NAVIGATION_ITEM_SELECTED=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.NAVIGATION_ITEM_SELECTED,E)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__N***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__R***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REMOVED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__REMOVED_CHILD=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.REMOVED_CHILD,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REQUEST_DATA} evtDetail
 */
window.b2link.event.dispatchCE__REQUEST_DATA=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.REQUEST_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.RESPONSE_DATA} evtDetail
 */
window.b2link.event.dispatchCE__RESPONSE_DATA=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.RESPONSE_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REMOVED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__RESIZED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.RESIZED_EL,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__R***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__S***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SEARCH_UI_INPUTED_TEXT} evtDetail
 */
window.b2link.event.dispatchCE__SEARCH_UI_INPUTED_TEXT=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SEARCH_UI_INPUTED_TEXT,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE} evtDetail
 */
window.b2link.event.dispatchCE__SEARCH_UI_SELECTED_TYPE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SEARCH_UI_SELECTED_TYPE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SHOWED_EL} evtDetail
 */
window.b2link.event.dispatchCE__SHOWED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SHOWED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_IN_FAILURE} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_IN_FAILURE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_IN_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_IN_SUCCESS} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_IN_SUCCESS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_IN_SUCCESS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_OUT_FAILURE} evtDetail
 */
 window.b2link.event.dispatchCE__SIGN_OUT_FAILURE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_OUT_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_OUT_SUCCESS} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_OUT_SUCCESS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_OUT_SUCCESS,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__S***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__T***;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TABLE_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__TABLE_DATA_CHANGED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TABLE_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TIMEOUT_END} evtDetail
 */
 window.b2link.event.dispatchCE__TIMEOUT_END=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TIMEOUT_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TIMEOUT_START} evtDetail
 */
 window.b2link.event.dispatchCE__TIMEOUT_START=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TIMEOUT_START,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__T***;


//----------------------------------------------------------------------------------------------------window.b2link.event.d***;

/**
 * CustomEvent를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Obejct} evtDetail
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 *
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
//window.b2link.event.dispatchCustomEvent=function(t,n,o){window.TtwLog.info(t),window.TtwLog.info("evtType : "+n),window.TtwLog.info("evtDetail : "+o),SUtilCustomEvent.dispatchCustomEvent(t,n,o)};
window.b2link.event.dispatchCustomEvent=function(t,n,o){SUtilCustomEvent.dispatchCustomEvent(t,n,o)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 *
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
window.b2link.event.dispatchEvent=function(n,t){window.TtwLog.info(n),window.TtwLog.info("evtType : "+t),SUtilCustomEvent.dispatchEvent(n,t)};

//----------------------------------------------------------------------------------------------------window.b2link.event.d***;


//----------------------------------------------------------------------------------------------------window.b2link.event.g***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.b2link.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.b2link.event.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.eventDetail;

window.b2link.eventDetail = window.b2link.eventDetail || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.eventDetail;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.A;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.APPENDED_CHILD=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.A;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.C;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @return null
 */
 window.b2link.eventDetail.CHANGED_LOCALE=function(){return null};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_CUSTOM_ELEMENT=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
 window.b2link.eventDetail.CREATED_IMPORT_HTML_EL=function(){return{}};

 /**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_IMPORT_HTML_JS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_INCLUDE_HTML_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATION_COMPLETE=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.C;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.D;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
//window.b2link.eventDetail.DATA_WRITE_CANCEL=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.b2link.eventDetail.DATA_WRITE_CANCEL Error : event Values가 부족합니다."),e};
window.b2link.eventDetail.DATA_WRITE_CANCEL=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
window.b2link.eventDetail.DATA_WRITE_COMPLETE=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.DISPOSED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.DISPOSED_JS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.D;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.H;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.HIDED_EL=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.H;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.I;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INITIALIZED=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INITIALIZED_ALL_CHILDREN=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INTERVAL_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INTERVAL_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.I;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.L;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.b2link.eventDetail.LIST_DATA_CHANGED=function(e){return e.firstItem&&e.lastItem||window.Rh2Log.error("window.b2link.eventDetail.LIST_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LIST_SELECT_ITEM=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LIST_SELECTED_ITEM=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LOADED_CHILDREN=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.L;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.N;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.b2link.eventDetail.NAVIGATION_DATA_CHANGED=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.b2link.eventDetail.NAVIGATION_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.b2link.eventDetail.NAVIGATION_ITEM_SELECTED=function(n){return n};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.N;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.R;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.REMOVED_CHILD=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.REQUEST_DATA=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.RESIZED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.RESPONSE_DATA=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.R;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.S;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"searchKeyword" : ""
 *	, "searchType" : ""
 * }
 * </code>
 */
window.b2link.eventDetail.SEARCH_UI_INPUTED_TEXT=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SHOWED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_IN_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_IN_SUCCESS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_OUT_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_OUT_SUCCESS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.S;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.T;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.b2link.eventDetail.TABLE_DATA_CHANGED=function(e){return e.hasOwnProperty("firstItem")&&e.hasOwnProperty("lastItem")||window.TtwLog.error("window.b2link.eventDetail.TABLE_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.TIMEOUT_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.TIMEOUT_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.T;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.event;

//window.b2link.event = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.event;







(function(){

	var _ = window.b2link.event;

	//영문이든, 숫자든, 사용하게될 이벤트 리스트 정의 하기;

	//----------------------------------------------------------------------------------------------------APPENDED;

	/**
	 * 부모 HTMLElement에 자식 HTMLElement를 appendChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.APPENDED_CHILD = "appended_child";

	//----------------------------------------------------------------------------------------------------CHANGED;

	/**
	 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CHANGED_LOCALE = "changed_locale";

	//----------------------------------------------------------------------------------------------------CREATED;

	/**
	 * CustomElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_CUSTOM_ELEMENT = "created_custom_element";

	/**
	 * Element가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_EL = "created_element";

	/**
	 * <import-html>의 실제 HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_EL = "created_import-html_element";

	/**
	 * <import-html url_js="">의 JS Controller가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_JS = "created_import-html_js";

	/**
	 * <include-html>의 실제HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_INCLUDE_HTML_EL = "created_include-html_element";

	//----------------------------------------------------------------------------------------------------CREATION;

	/**
	 * Object(어떤 형태이든) 가 최종적으로 완료된 상태일 시 발생되는 이벤트
	 * 내부적인 비동기 처리는 제외
	 * INITIALIZED 보다 후에 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.CREATION_COMPLETE = "creation_complete";

	//----------------------------------------------------------------------------------------------------DATA;

	/**
	 * DATA 작성을 취소 할 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_WRITE_CANCEL = "data_write_cancel";

	/**
	 * DATA 작성이 완료 되었을 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_WRITE_COMPLETE = "data_write_complete";

	//----------------------------------------------------------------------------------------------------DISPOSED;

	/**
	 * HTMLElement를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_EL = "disposed_element";

	/**
	 * HTMLElement의 JS Controller를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_JS = "disposed_js";

	//----------------------------------------------------------------------------------------------------FILE_DELETE;
	//@see window.b2linkUIClass.fileUploader.Multiple;
	//@see window.b2linkUIClass.fileUploader.Public;

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_DELETE_PRIVATE_MULTI_COMPLETE = "file_delete_private_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_DELETE_PRIVATE_MULTI_FAILUE = "file_delete_private_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_DELETE_PRIVATE_SINGLE_COMPLETE = "file_delete_private_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_DELETE_PRIVATE_SINGLE_FAILUE = "file_delete_private_single_failue";

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_DELETE_PUBLIC_MULTI_COMPLETE = "file_delete_public_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_DELETE_PUBLIC_MULTI_FAILUE = "file_delete_public_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_DELETE_PUBLIC_SINGLE_COMPLETE = "file_delete_public_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_DELETE_PUBLIC_SINGLE_FAILUE = "file_delete_public_single_failue";

	//----------------------------------------------------------------------------------------------------FILE_UPLOAD;

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE = "file_upload_private_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_UPLOAD_PRIVATE_MULTI_FAILUE = "file_upload_private_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE = "file_upload_private_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	_.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE = "file_upload_private_single_failue";

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE = "file_upload_public_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_UPLOAD_PUBLIC_MULTI_FAILUE = "file_upload_public_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE = "file_upload_public_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	_.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE = "file_upload_public_single_failue";

	//----------------------------------------------------------------------------------------------------INTERVAL;

	/**
	 * setInterval 로 구동된 interval을 clearInterval로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_END = "interval_end";

	/**
	 * setInterval 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_START = "interval_start";

	//----------------------------------------------------------------------------------------------------INITIALIZED;

	/**
	 * 현재 객체의 초기화가 완료된 후 발생되는 이벤트
	 * CREATION_COMPLETE 보다 먼저 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED = "initialized";

	/**
	 * 현재 객체(JS상일시 Target HTMLElement)의 자식 객체의 Initialize가 완료된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED_ALL_CHILDREN = "initialized_all_children";

	//----------------------------------------------------------------------------------------------------HIDED;

	/**
	 * Element의 js Controller에서 hide()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.HIDED_EL = "hided_element";

	//----------------------------------------------------------------------------------------------------LIST;

	/**
	 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_DATA_CHANGED = "list_data_changed";

	/**
	 * LIST형 Component에서 Item을 Click으로 선택 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECT_ITEM = "list_select_item";

	/**
	 * LIST형 Component에서 Item을 Double Click으로 선택 완료 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECTED_ITEM = "list_selected_item";

	//----------------------------------------------------------------------------------------------------NAVIGATION;

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_DATA_CHANGED = "navigation_data_changed";

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_ITEM_SELECTED = "navigation_item_selected";

	//----------------------------------------------------------------------------------------------------LOADED;

	/**
	 * Element의 모든 자식객체가 로딩 완료 후 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.LOADED_CHILDREN = "loaded_children";

	//----------------------------------------------------------------------------------------------------REMOVED;

	/**
	 * 부모 HTMLElement에서 자식 HTMLElement를 removeChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REMOVED_CHILD = "removed_child";

	//----------------------------------------------------------------------------------------------------RESIZE;

	/**
	 * HTMLElement의 Size를 변경 시킨후 발생시키는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESIZED_EL = "resized_element";

	//----------------------------------------------------------------------------------------------------RESPONSE;

	/**
	 * 데이터를 응답 받은 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESPONSE_DATA = "response_data";

	//----------------------------------------------------------------------------------------------------REQUEST;

	/**
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REQUEST_DATA = "requese_data";

	//----------------------------------------------------------------------------------------------------SEARCH_UI;

	/**
	 * Search UI 상 INPUT Tag에 Typing를 진행할시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SEARCH_UI_INPUTED_TEXT = "search_ui_inputed_text";

	/**
	 * Search UI 상 SELECT Tag의 아이템을 선택 했을시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SEARCH_UI_SELECTED_TYPE = "search_ui_selected_type";

	//----------------------------------------------------------------------------------------------------SHOWED;

	/**
	 * Element의 js Controller에서 show()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.SHOWED_EL = "showed_element";

	//----------------------------------------------------------------------------------------------------SIGN;

	/**
	 * sign in이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_FAILURE = "sign_in_failure";

	/**
	 * sign in이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_SUCCESS = "sign_in_success";

	/**
	 * sign out이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_FAILURE = "sign_out_failure";

	/**
	 * sign out이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_SUCCESS = "sign_out_success";

	//----------------------------------------------------------------------------------------------------TABLE;

	/**
	 * Table Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TABLE_DATA_CHANGED = "table_data_changed";

	//----------------------------------------------------------------------------------------------------TIMEOUT;

	/**
	 * setTimeout 으로 구동된 timeout을 clearTimeout으로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_END = "timeout_end";

	/**
	 * setTimeout 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_START = "timeout_start";

	

	/**
	 * @function
	 */
	_.__initialize_Events = function()
	{
		window.b2link.log.comment_Dash_100();
		
		window.b2link.log.comment_Dash_100();

		for( var s in _ )
		{
			if( "function" != typeof( _[ s ] ) )
			{
				_[ s ] = "b2link_" + _[ s ];
				window.TtwLog.info( "window.b2link.event." + s + ' - "' + _[ s ] + '"' );
			}
		}
		window.b2link.log.comment_Dash_100();
		delete _[ "__initialize_Events" ];
	};

	

})();







//----------------------------------------------------------------------------------------------------window.b2link.event.a***;
//----------------------------------------------------------------------------------------------------window.b2link.event.a***;


//----------------------------------------------------------------------------------------------------window.b2link.event.g***;
//----------------------------------------------------------------------------------------------------window.b2link.event.g***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.file;

window.b2link.file = window.b2link.file || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.file;


//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.fileReader;

window.b2link.fileReader = window.b2link.fileReader || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.fileReader;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.fileServer;

window.b2link.fileServer = window.b2link.fileServer || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.fileServer;






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.fn;

window.b2link.fn = window.b2link.fn || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.fn;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.focus;

window.b2link.focus = window.b2link.focus || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.focus;


//----------------------------------------------------------------------------------------------------window.b2link.focus.s***;

/**
 * @function
 */
window.b2link.focus.setBodyFocus=function(){window.document.body.focus()};

//----------------------------------------------------------------------------------------------------window.b2link.focus.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html;

window.b2link.html = window.b2link.html || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html;


//----------------------------------------------------------------------------------------------------window.b2link.html.a***;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyBraceStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.b2link.html.applyBrace__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var i=SUtilString.applyBraceStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace_children=function(n,r){for(var i,e=SUtilString.applyBraceStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){i=l[_],i.__originalInnerHTML||(i.__originalInnerHTML=i.innerHTML);var o=e(i.__originalInnerHTML,r);o&&(i.innerHTML=o)}return n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * __originalInnerHTML은 무시하고 현재 innerHTML로 갱신한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace_children__innerHTML=function(r,n){for(var i,e=SUtilString.applyBraceStrFromObj__NV_NA,o=r.children,l=0,_=o.length;_>l;++l){i=o[l],i.__originalInnerHTML=i.innerHTML;try{var a=e(i.__originalInnerHTML,n)}catch(t){window.TtwLog.error("window.b2link.html.applyBrace_children__innerHTML Error : "+t),window.TtwLog.error("io.__originalInnerHTML에 잘못 정의된 property name이 존재해서 발생함")}a&&(i.innerHTML=a)}return r};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyBracketsStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.b2link.html.applyBrackets__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var i=SUtilString.applyBracketsStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets_children=function(n,r){for(var i,e=SUtilString.applyBracketsStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){i=l[_],i.__originalInnerHTML||(i.__originalInnerHTML=i.innerHTML);var t=e(i.__originalInnerHTML,r);t&&(i.innerHTML=t)}return n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * __originalInnerHTML은 무시하고 현재 innerHTML로 갱신한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets_children__innerHTML=function(r,n){for(var i,e=SUtilString.applyBracketsStrFromObj__NV_NA,o=r.children,t=0,l=o.length;l>t;++t){i=o[t],i.__originalInnerHTML=i.innerHTML;try{var _=e(i.__originalInnerHTML,n)}catch(a){window.TtwLog.error("window.b2link.html.applyBrackets_children__innerHTML Error : "+a),window.TtwLog.error("io.__originalInnerHTML에 잘못 정의된 property name이 존재해서 발생함")}_&&(i.innerHTML=_)}return r};

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyParenthesesStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.b2link.html.applyParentheses__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var e=SUtilString.applyParenthesesStrFromObj__NV_NA(n.__originalInnerHTML,r);return e&&(n.innerHTML=e),n};

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_children=function(n,r){for(var e,i=SUtilString.applyParenthesesStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){e=l[_],e.__originalInnerHTML||(e.__originalInnerHTML=e.innerHTML);var t=i(e.__originalInnerHTML,r);t&&(e.innerHTML=t)}return n};

//----------------------------------------------------------------------------------------------------window.b2link.html.a***;


//----------------------------------------------------------------------------------------------------window.b2link.html.c***;

/**
 * @function
 * @param {HTMLElement} html
 * @return {HTMLElement}
 */
window.b2link.html.createHTMLElement = SUtilTemplateHTML.createHTML;
window.b2link.html.createHTMLElement_LI = SUtilTemplateHTML.createHTML_LI;
window.b2link.html.createHTMLElement_TBODY = SUtilTemplateHTML.createHTML_TBODY;
window.b2link.html.createHTMLElement_THEAD = SUtilTemplateHTML.createHTML_THEAD;
window.b2link.html.createHTMLElement_TR = SUtilTemplateHTML.createHTML_TR;

window.b2link.html.createHTMLElement__URL=function(n){return window.b2link.html.createHTMLElement(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_LI=function(n){return window.b2link.html.createHTMLElement__URL_LI(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_TBODY=function(n){return window.b2link.html.createHTMLElement__URL_TBODY(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_THEAD=function(n){return window.b2link.html.createHTMLElement__URL_THEAD(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_TR=function(n){return window.b2link.html.createHTMLElement__URL_TR(window.b2link.xhr.reqSync_String(n))};

!function(){var n={},e={},t={},_={},i={};
window.b2link.html.createHTMLElement__URL_Cache=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement(n[e])},
window.b2link.html.createHTMLElement__URL_Cache.clear=function(){n={}},
window.b2link.html.createHTMLElement__URL_Cache_LI=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement__URL_Cache_LI(t[e])},
window.b2link.html.createHTMLElement__URL_Cache_LI.clear=function(){e={}},
window.b2link.html.createHTMLElement__URL_Cache_TBODY=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement__URL_Cache_TBODY(_[e])},
window.b2link.html.createHTMLElement__URL_Cache_TBODY.clear=function(){t={}},
window.b2link.html.createHTMLElement__URL_Cache_THEAD=function(t){return n[t]||(n[t]=window.b2link.xhr.reqSync_String(t)),window.b2link.html.createHTMLElement__URL_Cache_THEAD(e[t])},
window.b2link.html.createHTMLElement__URL_Cache_THEAD.clear=function(){_={}},
window.b2link.html.createHTMLElement__URL_Cache_TR=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement__URL_Cache_TR(i[e])},
window.b2link.html.createHTMLElement__URL_Cache_TR.clear=function(){i={}}}();

//----------------------------------------------------------------------------------------------------window.b2link.html.c***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_div;

window.b2link.html_div = window.b2link.html_div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_div;


//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;

/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_div;

//window.b2link.html_div = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_div;


//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;

/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} arr [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_repeat = function( div, arr )
{
	

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 === arr.length ){ div.innerHTML = ""; return div; }

	var r = "";
	for( var i in arr )
	{
		if( arr.hasOwnProperty( i ) )
			r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, [ arr[ i ] ] );
	}

	if( r ) div.innerHTML = r;

	
	return div;
};

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child_set_data_by_classname = function( div, a )
{
	

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var $f3 = window.b2link.element.getElementsByClassName;
	var arr_length = a.length;

	var parentDiv = div.parentNode;
	var div_class_name = div.className;


	var i = $f3( parentDiv, div_class_name ).length;
	for( ; i > 0; i-- ) parentDiv.removeChild( parentDiv.childNodes[ i ] );

	for( var i = 0; i < arr_length; i++ )
	{
		var new_div = document.createElement( "div" );
			new_div.innerHTML = div.__originalInnerHTML;
			new_div.className = div_class_name;

		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( new_div, a[ i ] );

		new_div.setAttribute( "item_data", JSON.stringify( a[ i ] ) );
		parentDiv.appendChild( new_div );
		new_div = null;
	}

	
	return parentDiv;
};

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child_set_data_by_classname_include_other_child = function( div, a , classname )
{
	

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var child = window.b2link.element.getElementByClassName( div, classname );
				child.innerHTML = window.b2link.html_div.apply_child_set_data_by_classname( child, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	
	return div;
};

//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_select;

window.b2link.html_select = window.b2link.html_select || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_select;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_table;

window.b2link.html_table = window.b2link.html_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_table;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_tbody;

window.b2link.html_tbody = window.b2link.html_tbody || {};

//--------------------------------------------------window.b2link.el_tbody.a***;

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 *
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 *
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//--------------------------------------------------window.b2link.el_tbody.a***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_tbody;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_thead;

window.b2link.html_thead = window.b2link.html_thead || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_thead;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_thead;

//window.b2link.html_thead = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_thead;


//----------------------------------------------------------------------------------------------------window.b2link.html_thread.c***;

/**
 * @function
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html_thead.create_child = function( a )
{
	
	var r = "<tr>";
	var th = '<th style="width: $w">$nm</th>';
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		r += th.replace( "$w", io.w + "px;" ).replace( "$nm", io.nm );
	}
	r += "</tr>";
	

	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.c***;

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.s***;

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html_thead.set_child = function( element, a )
{
	

	element.innerHTML = window.b2link.html.create_thead_child( a );

	
};

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.s***;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_ul;

window.b2link.html_ul = window.b2link.html_ul || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_ul;


//----------------------------------------------------------------------------------------------------window.b2link.html_ul.a***;

/**
 * <ul> Element의 children을 갱신한다.
 * <ul><li>{{name}}</li></ul> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <li>송선우0</li>, <li>송선우1</li> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_ul.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <ul> Element의 children을 갱신한다.
 * <ul><li>{{name}}</li></ul> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <li>송선우0</li>, <li>송선우1</li> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_ul.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//----------------------------------------------------------------------------------------------------window.b2link.html_ul.a***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.log;

window.b2link.log = window.b2link.log || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.log;


//----------------------------------------------------------------------------------------------------window.b2link.log.c***;

/**
 * @function
 */
window.b2link.log.comment_Dash_20=function(){window.TtwLog.timeStamp("//--------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_30=function(){window.TtwLog.timeStamp("//------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_40=function(){window.TtwLog.timeStamp("//----------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_50=function(){window.TtwLog.timeStamp("//--------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_60=function(){window.TtwLog.timeStamp("//------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_70=function(){window.TtwLog.timeStamp("//----------------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_80=function(){window.TtwLog.timeStamp("//--------------------------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_90=function(){window.TtwLog.timeStamp("//------------------------------------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_100=function(){window.TtwLog.timeStamp("")};

//----------------------------------------------------------------------------------------------------window.b2link.log.c***;


//----------------------------------------------------------------------------------------------------window.b2link.log.e***;

/**
 * Signin failure시 호출하는 함수
 * 에러 메세지 상자와 콘솔 에러를 발생시킨다.
 * @function
 */
window.b2link.log.error__Signin_failure=function(){window.TtwLog.timeStamp("---- [ S ] - window.b2link.log.error__Signin_failure():void----------"),window.b2link_ui.message.error("Signin failure"),window.TtwLog.timeStamp("---- [ E ] - window.b2link.log.error__Signin_failure():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.log.e***;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.math;

window.b2link.math = window.b2link.math || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.math;


//----------------------------------------------------------------------------------------------------window.b2link.math.i;



//----------------------------------------------------------------------------------------------------window.b2link.math.i;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.obj;

window.b2link.obj = window.b2link.obj || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.obj;


//----------------------------------------------------------------------------------------------------window.b2link.obj.c***;

/**
 * @function
 * @param {Object} t
 * @param {Object} d
 */
window.b2link.obj.copyReference_Public_Function=function(n,o){for(var i in o)-1==i.indexOf("_")&&"function"==typeof o[i]&&(n.hasOwnProperty(i)||(n[i]=o[i]))};

//----------------------------------------------------------------------------------------------------window.b2link.obj.c***;

//----------------------------------------------------------------------------------------------------window.b2link.obj.g***;

/**
 * @function
 * @param {Object} t
 * @param {String} k
 * @return {Object}
 */
window.b2link.obj.getValueFromKey_dotKeyRef=function(t,k){return SUtilObject.getValueFromKey_dotKeyRef(t,k);};

//----------------------------------------------------------------------------------------------------window.b2link.obj.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.open;

window.b2link.open = window.b2link.open || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.open;


//----------------------------------------------------------------------------------------------------window.b2link.open.n***;

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} options
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
!function(){window.b2link.open._map={},window.b2link.open.newWindow=function(n,w,o){return window.b2link.open._map[w]=window.open(n,w,o),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+o),window.b2link.open._map[w]}}();

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} opt__pos_size
 * @param {String} opt__functionality
 * @param {String} opt__requiring_privileges
 * @return {Window}

 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
window.b2link.open.newWindow_opts=function(n,w,o,i,d){var p=o+", "+i+", "+d;return window.b2link.open._map[w]=window.open(n,w,p),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+p),window.b2link.open._map[w]};

//----------------------------------------------------------------------------------------------------window.b2link.open.n***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.response;

window.b2link.response = window.b2link.response || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.response;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.service;

window.b2link.service = window.b2link.service || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.service;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.session;

window.b2link.session = window.b2link.session || {};

//--------------------------------------------------window.b2link.session.g***;

/**
 * @function
 * @return {Object} { "sid" : "", "Expires" : "", "mid" : "" }
 */
//(function(){var _a=["Expires","sid","mid"];window.b2link.session.getSession=function(){for(var e,i=window.sessionStorage,n={},s=0,t=_a.length;t>s;++s)e=_a[s],n[e]=i.getItem(e),n[e]||delete n[e],""==n[e]&&delete n[e];return n};})();
(function(){var e=["Expires","sid","mid"],n=window.b2link.STATIC.CONFIG.URL;window.b2link.session.getSession=function(){for(var i,o=window.sessionStorage,s={},t=0,d=e.length;d>t;++t)i=e[t],s[i]=o.getItem(i),s[i]||delete s[i],""==s[i]&&delete s[i];return s.SCODE=n.SCODE,s}})();

/**
 * @function
 * @return {String}
 */
window.b2link.session.getSession__sid=function(){return window.sessionStorage.getItem("sid")};

//--------------------------------------------------window.b2link.session.g***;


//--------------------------------------------------window.b2link.session.r***;

/**
 * @function
 */
!function(){var e=["Expires","sid","mid"];window.b2link.session.removeSession=function(){for(var i=window.sessionStorage,n=0,o=e.length;o>n;++n)i.removeItem(e[n])}}();

//--------------------------------------------------window.b2link.session.r***;


//--------------------------------------------------window.b2link.session.s***;

/**
 * @function
 * @param {Object} d data { "Expires" : "", "sid" : "", "mid" : mid }
 */
window.b2link.session.setSession=function(s){var i=window.sessionStorage;s.sid&&i.setItem("sid",s.sid),s.Expires&&i.setItem("Expires",s.Expires),s.mid&&i.setItem("mid",s.mid)};


//--------------------------------------------------window.b2link.session.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.session;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.string;

window.b2link.string = window.b2link.string || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.string;


//----------------------------------------------------------------------------------------------------window.b2link.string.a***;

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
window.b2link.string.applyBrackets = SUtilString.applyBracketsStrFromObj__NV_NA;

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
window.b2link.string.applyParentheses = SUtilString.applyParenthesesStrFromObj__NV_NA;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
window.b2link.string.applyBrace = SUtilString.applyBraceStrFromObj__NV_NA;

//----------------------------------------------------------------------------------------------------window.b2link.string.a***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.timer;

window.b2link.timer = window.b2link.timer || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.timer;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui;

window.b2link.ui = window.b2link.ui || {};

/**
 * window.b2link_ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID와 셋트로 변경 하여야 한다.
 * window.b2ker.ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * window.brandportal.ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * @Static
 * @property {String}
 */
window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED;

/**
 * window.b2link_ui***의 함수를 호출 시 appendChild의 대상이 되는 Element's id
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT 셋트로 변경 하여야 한다.
 * @Static
 * @property {String}
 */
window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID = window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED;

/**
 * @function
 * @param {String} id
 */
window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT = function( id )
{
	

	window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID = window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = id;
	window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED = window.document.getElementById( id );

	
};

/**
 * 메인 화면 컨테이너에서 각 View 화면 Position, Size를 컨트롤 한다.
 * @function
 * @param {HTMLElement} el
 */
window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT = function( el )
{
	

	//오른쪽 View Container 공간;
	var s = el.style;

		//s.display = "";
		s.position = "absolute";

	if( el.__FULL_SIZE_MODE )
	{
		var le = 0;//left;
		var ri = 0;//right;
		var to = 0;//top;
		var bo = 0;//bottom;

		s.left = le + "px";
		s.right = ri + "px";

		s.top = to + "px";
		//s.bottom = bo + "px";

		var minMaxWidth = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth - le - ri + "px";
		s.minWidth = s.maxWidth = minMaxWidth;
	}
	else
	{
		//s.top = _el_div_content.offsetTop + 1 + "px"; s.bottom = "1px";
	}

	
};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui;


//----------------------------------------------------------------------------------------------------window.b2link.ui.__a***;

/**
 * @function
 * @param {Object} elCtrl
 * @param {Object} uiOptions
 */
window.b2link.ui.__addUI_Common__UIOptions=function(o,t){var e=o,_=e.__el,i=_.style;t?(0==t.display?e.hide():e.show(),t.hasOwnProperty("left")||t.hasOwnProperty("top")||t.hasOwnProperty("right")||t.hasOwnProperty("bottom")?(i.left=t.left?t.left+"px":"",i.top=t.top?t.top+"px":"",i.right=t.right?t.right+"px":"",i.bottom=t.lbottomeft?t.bottom+"px":""):e.__FULL_SIZE_MODE||window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop(_)):(e.show(),0==_.offsetLeft&&0==_.offsetTop&&(e.__FULL_SIZE_MODE||window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop(_)))};

/**
 * @function
 * @param {Object} elCtrl
 * @param {Object} uiOptions
 */
//window.b2link.ui.__addUIAndModal_Common__UIOptions=function(d,n){var o=d;n&&0==n.display?o.hide():o.showAndModal()};
window.b2link.ui.__addUIAndModal_Common__UIOptions=function(t,o){var n=t;if(o){if(0==o.display?n.hide():n.showAndModal_Sync(),o.hasOwnProperty("left")||o.hasOwnProperty("top")||o.hasOwnProperty("right")||o.hasOwnProperty("bottom")){var e=n.__el.style;e.left=o.left?o.left+"px":"",e.top=o.top?o.top+"px":"",e.right=o.right?o.right+"px":"",e.bottom=o.lbottomeft?o.bottom+"px":""}}else n.showAndModal_Sync()};

//----------------------------------------------------------------------------------------------------window.b2link.ui.__a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.__g***;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_CSS=function(i,n){var e=i+n+".css";return e};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_HTML=function(i,n){var l=window.b2link.STATIC.CONFIG.URL.UI,t=i+n+l.CSS+".html";return t};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_JS=function(i,n){var e=i+n+".js";return e};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_THTML=function(i,n){var t=window.b2link.STATIC.CONFIG.URL.UI,l=i+n+t.CSS+".thtml";return l};

//----------------------------------------------------------------------------------------------------window.b2link.ui.__g***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.a***;

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS=function(_){var i=window.b2link.ui.__getFileNM_HTML(_.url,_.nm),n=window.b2link.ui.__getFileNM_JS(_.url,_.nm),l=_.key?_.key:_.nm,d=window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI,w=d(l,i,n,window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID);return w[0].__KEY_UI=l,w};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS__CheckStaticUI=function(i,n){var _=window.b2link.ui.staticUIMap_checkObject(i.key);return _?(window.b2link.ui.__addUI_Common__UIOptions(_[1],n),_):(_=window.b2link.ui.add_HTML_JS(i),_&&window.b2link.ui.__addUI_Common__UIOptions(_[1],n),_)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS=function(_){var i=window.b2link.ui.__getFileNM_HTML(_.url,_.nm),n=window.b2link.ui.__getFileNM_JS(_.url,_.nm),l=window.b2link.ui.__getFileNM_CSS(_.css_url,_.css_front_nm+_.nm),w=_.key?_.key:_.nm,d=window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI,u=d(w,i,n,l,window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID);return u[0].__KEY_UI=w,u};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_HTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_THTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_THTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI=function(i,n){var d=window.b2link.ui.staticUIMap_checkObject(i.key);return d?(window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d):(d=window.b2link.ui.add_HTML_JS(i),d&&window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI=function(i,n){var d=window.b2link.ui.staticUIMap_checkObject(i.key);return d?(window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d):(d=window.b2link.ui.add_HTML_JS_CSS(i),d&&window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d)};

//----------------------------------------------------------------------------------------------------window.b2link.ui.a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.s***;

/**
 * @function
 * @param {String} key
 * @param {Array} t [ HTMLElement, {} ]
 */
window.b2link.ui.staticUIMap_Add=function(i,d){window.b2link.STATIC.UI.__add(i,d)};

/**
 * @function
 * @param {String} key
 * @return {null|Array} [ {HTMLElement}, {} ]
 */
window.b2link.ui.staticUIMap_checkObject=function(n){if(window.b2link.STATIC.UI.__checkKey(n)){window.b2link.STATIC.UI.__show(n);var i=window.b2link.STATIC.UI.__getObj(n);return i}return null};

/**
 * @function
 * @param {String} key
 */
window.b2link.ui.staticUIMap_Remove=function(i){var e=window.b2link.STATIC.UI[i];if(e)e[0].dispose&&e[0].dispose(),e[1].dispose&&e[1].dispose(),delete window.b2link.STATIC.UI[i];else{var s="UI Map에 key - "+i+" 가 존재 하지 않습니다.";window.b2link_ui.message.error(s)}};

//----------------------------------------------------------------------------------------------------window.b2link.ui.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_feature;

window.b2link.ui_feature = window.b2link.ui_feature || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_feature;


//--------------------------------------------------window.b2link.ui_feature.d***;

/**
 * @function
 * @param {HTMLElement} t
 * @param {Boolean} bAdd false false면 이벤트를 제거만 한다 true시 1회 이벤트 제거후 다시 이벤트를 등록한다.
 * @param {Boolean} bMDownReAppend true시 마우스 다운이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 * @param {Boolean} bMUpReAppend true시 마우스 업이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 */
!function(){var e=function(e){var t=e.target;return"BUTTON"==t.tagName||"I"==t.tagName?1:void 0},t=function(t){if(!e(t)){var o=t.currentTarget,a=o.parentElement,m=a.style;m.__originalLeft=m.left,m.__originalTop=m.top,m.__originalRight=m.right,m.__originalBottom=m.bottom,m.__originalWidth=m.clientWidth,m.__originalHeight=m.clientHeight,m.width=m.__originalWidth+"px",m.height=m.__originalHeight+"px",m.right="",m.bottom="",t.stopImmediatePropagation(),t.stopPropagation(),window.b2link.element._appendChild(a.parentElement,a),i._t0=a,window.removeEventListener("mousemove",i,!1),window.addEventListener("mousemove",i,!1,0,!0),a&&(a.removeEventListener("mouseout",n,!1),a.addEventListener("mouseout",n,!1,0,!0)),a&&(a.removeEventListener("mouseover",r,!1),a.addEventListener("mouseover",r,!1,0,!0))}},o=function(t){if(!e(t)){var o=t.currentTarget,a=o.parentElement,m=m;m.__originalLeft=m.left,m.__originalTop=m.top,m.__originalRight=m.right,m.__originalBottom=m.bottom,m.__originalWidth=m.clientWidth,m.__originalHeight=m.clientHeight,m.width=m.__originalWidth+"px",m.height=m.__originalHeight+"px",m.right="",m.bottom="",t.stopImmediatePropagation(),t.stopPropagation(),window.b2link.element._appendChild(a.parentElement,a),i._t0=a,window.removeEventListener("mousemove",i,!1),window.addEventListener("mousemove",i,!1,0,!0),a&&(a.removeEventListener("mouseout",n,!1),a.addEventListener("mouseout",n,!1,0,!0)),a&&(a.removeEventListener("mouseover",r,!1),a.addEventListener("mouseover",r,!1,0,!0))}},i=function(t){if(!e(t)){var o=i._t0;o.style.left=o.offsetLeft+t.movementX+"px",o.style.top=o.offsetTop+t.movementY+"px",t.stopImmediatePropagation(),t.stopPropagation()}},n=function(t){if(!e(t)){var o=i._t0;n._time0=setTimeout(function(){window.removeEventListener("mousemove",i,!1),o&&o.removeEventListener("mouseout",n,!1)},300),t.stopImmediatePropagation(),t.stopPropagation()}};n._time0=0;var r=function(t){e(t)||(clearTimeout(n._time0),t.stopImmediatePropagation(),t.stopPropagation())},a=function(t){if(!e(t)){var o=i._t0;t.stopImmediatePropagation(),t.stopPropagation(),o&&o.removeEventListener("mouseout",n,!1),o&&o.removeEventListener("mouseover",r,!1),i._t0=null,window.removeEventListener("mousemove",i,!1)}},m=function(t){if(!e(t)){var o=i._t0;t.stopImmediatePropagation(),t.stopPropagation(),window.b2link.element.appendChild(o.parentElement,o),o&&o.removeEventListener("mouseout",n,!1),o&&o.removeEventListener("mouseover",r,!1),i._t0=null,window.removeEventListener("mousemove",i,!1)}};window.b2link.ui_feature.drag=function(e,i,n,r){return e?(e.removeEventListener("mousedown",t,!1),e.removeEventListener("mousedown",o,!1),e.removeEventListener("mouseup",a,!1),void(i&&(n?e.addEventListener("mousedown",o,!1,0,!0):e.addEventListener("mousedown",t,!1,0,!0),r?e.addEventListener("mouseup",m,!1,0,!0):e.addEventListener("mouseup",a,!1,0,!0)))):(window.b2link_ui.message.error("window.b2link.ui_feature.drag 't'가 존재 하지 않습니다. 로직을 다시 확인 하세요."),void window.b2link_ui.message.error("\n	 - TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성"))}}();


//--------------------------------------------------window.b2link.ui_feature.d***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_modal;

window.b2link.ui_modal = window.b2link.ui_modal || {};

/**
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT를 기준으로 FullSize View객체를 변경한다.
 * @function
 * @param {HTMLElement} el
 */
window.b2link.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT = function( el )
{
	

	var s = el.style;
		s.position = "absolute";

	if( el.__FULL_SIZE_MODE )
	{
		var p = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement;

		//var le = 10;
		var le = p.offsetLeft + 10;
		var ri = 10;//right;
		var to = 1;//top;
		var bo = 1;//bottom;

		s.left = le + "px";
		s.right = ri + "px";

		s.top = to + "px";
		//s.bottom = bo + "px";

		var minMaxWidth = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth - 10 - ri + "px";
		s.minWidth = s.maxWidth = minMaxWidth;

		window.b2link.event.dispatchCE__RESIZED_EL( el, null );
	}

	
};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_modal;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.a***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 *  - bRemoveAllChildren으로 조절 가능 기본이 true
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 appendChild 한다.
 * @function
 * @param {HTMLElement} o
 * @param {Boolean} bRemoveAllChildren true
 */
window.b2link.ui_modal.appendChild=function(n,i){0!=i&&(i=!0),i&&window.b2link.ui_modal.removeAllChildren(),window.b2link.element.appendChild(window.b2link.ui_modal.modal_content,n)};

/**
 * Modal Content DIV에 객체를 추가한다.
 * Modal Content DIV에 있던 객체들은 Modal Background Content에 옮긴다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.appendChild_MoveCurrentChildren=function(n){window.b2link.ui_modal.move_ContentChildrenToBGContent(),window.b2link.ui_modal.appendChild(n,!1)};

/**
 * Modal Background Content DIV에 객체를 추가한다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.appendChildToBGContent=function(n){window.b2link.element.appendChild(window.b2link.ui_modal.modal_bg_content,n)};

/**
 * 사용안함
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 *  - bRemoveAllChildren으로 조절 가능 기본이 true
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 appendChild 한다.
 * @function
 * @param {HTMLElement} o
 * @param {Boolean} bRemoveAllChildren true
 */
window.b2link.ui_modal.appendSubChild=function(n,i){0!=i&&(i=!0),i&&window.b2link.ui_modal.removeAllChildren(),window.b2link.element.appendChild(window.b2link.ui_modal.modal_content,n)};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.d***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 dispose 한다.
 * @function
 */
window.b2link.ui_modal.disposeAllChildren=function(){window.b2link.element.disposeAllChildren(window.b2link.ui_modal.modal_content)};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.d***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.h***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 숨긴다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "none"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "none"
 * @function
 */
!function(){window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.hide=function(){window.b2link.ui_modal;window.b2link.ui_modal.hide._f0()},window.b2link.ui_modal.hide._f0=function(){var i=window.b2link.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none"},window.b2link.ui_modal.hide._timeout0=0}();

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 숨긴다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "none"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.opacity = 0
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "none"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 2 ] ).style.display = "none"
 * hide시 transition 효과를 추가 한다.
 * @function
 */
!function(){window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.hide_transition=function(){var i=window.b2link.ui_modal;i.modal_bg_content.children.length||(i.modal_bg.style.opacity=0,clearTimeout(window.b2link.ui_modal.hide_transition._timeout0),window.b2link.ui_modal.hide_transition._timeout0=setTimeout(window.b2link.ui_modal.hide_transition._f0,1))},window.b2link.ui_modal.hide_transition._f0=function(){var i=window.b2link.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none"},window.b2link.ui_modal.hide_transition._timeout0=0}();

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.h***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.i***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )의 기초 설정을 셋팅한다.
 * Application이 처음 구동 될시 1회 자동으로 실행하고 기능이 사라지는 함수다.
 * - Modal Background Content DIV : 화면에 표시는 되지만, 작동 불가능 상태의 객체
 * - Modal Background DIV : 검은색 반투명 모달 레이어
 * - Modal Content DIV : 작동상태가 될 객체가 추가될 레이어
 * 형태로 구성되어있다.
 * @function
 */
//!function(){var n=window.b2link.ui_modal,i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.b2link.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide()},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.b2link.ui_modal.initialize=function(){}},window.b2link.ui_modal.initialize()}();
!function(){var n=window.b2link.ui_modal,i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.b2link.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide()},!1,0,!0),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.b2link.ui_modal.initialize=function(){}},window.b2link.ui_modal.initialize()}();

/**
 * @function
 * @return {Boolean}
 */
!function(){var i=window.b2link.ui_modal;window.b2link.ui_modal.isVisible=function(){var n=i.modal_bg.style;return"none"==n.display?!1:"none"!=n.display?!0:void 0}}();

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.i***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.m***;

/**
 * Modal Background Content DIV에 있는 모든 객체를 Modal Content로 옮긴다.
 * @function
 */
window.b2link.ui_modal.move_BGContentChildrenToContent=function(){try{for(var n=window.b2link.ui_modal.modal_bg_content,o=window.b2link.ui_modal.appendChild,i=n.children,d=0,l=i.length;l>d;++d)o(i[0],!1);l&&window.b2link.ui_modal.show()}catch(t){window.TtwLog.error("window.b2link.ui_modal.move_BGContentChildrenToContent Error : "+t)}};

/**
 * Modal Background Content DIV에 마지막으로 추가된 객체를 Modal Content DIV에 추가가 된다.
 * @function
 */
window.b2link.ui_modal.move_BGContentLastChildToContent=function(){try{var n=window.b2link.ui_modal.modal_bg_content.children,o=n.length;o&&(window.b2link.ui_modal.show(),window.b2link.ui_modal.appendChild(n[o-1],!1))}catch(i){window.TtwLog.error("window.b2link.ui_modal.move_BGContentLastChildToContent Error : "+i)}};

/**
 * Modal Content DIV에 있는 객체들를 Modal Content DIV에 옮긴다.
 * @function
 */
window.b2link.ui_modal.move_ContentChildrenToBGContent=function(){try{for(var n=window.b2link.ui_modal.modal_content,o=window.b2link.ui_modal.appendChildToBGContent,i=n.children,t=0,d=i.length;d>t;++t)o(i[0])}catch(l){window.TtwLog.error("Error : "+l)}};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.m***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.r***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 * //Children들의 style.opacity를 0으로 만든다.
 * @function
 */
window.b2link.ui_modal.removeAllChildren=function(){try{for(var o=window.b2link.ui_modal.modal_content,i=window.b2link.ui_modal.removeChild,n=o.children,l=0,r=n.length;r>l;++l)i(n[0])}catch(d){window.TtwLog.error("Error : "+d)}};

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 removeChild 한다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.removeChild=function(o){try{window.b2link.element.removeChild(window.b2link.ui_modal.modal_content,o)}catch(l){global.TtwLog.error("window.b2link.ui_modal.removeChild Error : "+l),global.TtwLog.error(window.b2link.element.getID_Or_ClassName(o)+"가 Modal Content의 자식 객체가 아니다.")}};

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 removeChild 한다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.removeChild_BGC=function(o){try{window.b2link.element.removeChild(window.b2link.ui_modal.modal_bg_content,o)}catch(l){global.TtwLog.error("window.b2link.ui_modal.removeChild_BGC Error : "+l),global.TtwLog.error(window.b2link.element.getID_Or_ClassName(o)+"가 Modal Background Content의 자식 객체가 아니다.")}};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.r***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.s***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0.5
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.list.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var o=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.show=function(){o.style.display="block";var l=window.b2link.ui_modal;l.modal_bg_content.style.display="block",l.modal_bg.style.display="block",l.modal_bg.style.opacity=0,l.modal_content.style.display="block",window.b2link.ui_modal.show._f0()},window.b2link.ui_modal.show._f0=function(){window.b2link.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.b2link.ui_modal.modal_bg).opacity},window.b2link.ui_modal.show._timeout0=0}();

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.opacity = 0.5
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 2 ] ).style.display = "block"
 * show시 transition 효과를 추가 한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.show_transition=function(){var o=window.b2link.ui_modal;i.style.display="block",o.modal_bg_content.style.display="block",o.modal_bg.style.display="block",o.modal_content.style.display="block",clearTimeout(window.b2link.ui_modal.show_transition._timeout0),window.b2link.ui_modal.show_transition._timeout0=setTimeout(window.b2link.ui_modal.show_transition._f0,1)},window.b2link.ui_modal.show_transition._f0=function(){window.b2link.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.b2link.ui_modal.modal_bg).opacity},window.b2link.ui_modal.show_transition._timeout0=0}();

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_resource;

window.b2link.ui_resource = window.b2link.ui_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_resource;


//----------------------------------------------------------------------------------------------------window.b2link.ui_reousrce.a***;

/**
 * ***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),window.b2link.html.applyParentheses(n,window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(n,window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.locale.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode=function(e,r){r.__originalInnerHTML_Locale||(r.__originalInnerHTML_Locale=r.innerHTML);try{var i=e.replace("{{locale}}",window.b2link.STATIC.CONFIG.URL.UI.LOCALE),n=window.b2link.xhr.reqSync_JSON(i);SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(r,n)}catch(l){window.b2link_ui.message.error("window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode Error : "+l),window.b2link_ui.message.error(i+" 파일을 만들어야 함."),window.b2link_ui.message.error("./ui_include/li/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-th/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-td/에서 {{}} 구문 파일 설정 하기.")}};

/**
 * url에서 .js를 .json으로 변경 후 ***.local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @return {Object}
 */
//window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(r){r=r.replace(".js",".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var n;try{n=window.b2link.xhr.reqSync_JSON(r)}catch(e){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+e),n=null}return n};
!function(){var r={};window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(n){if(r[n])return r[n];n=n.replace(".js",".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var e;try{r[n]=e=window.b2link.xhr.reqSync_JSON(n)}catch(o){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+o),e=null}return e},window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel._clear=function(){r={}}}();

/**
 * url에서 .js를 .json으로 변경 후 ***. 'type' .local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @param {String} type "alert", "confirm", "label", "message", "tooltip"
 * @return {Object}
 */
/*/
window.b2link.ui_resource.reqSync_JSON_Locale=function(e,n){e=e.replace(".js","."+n+".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var r;try{r=window.b2link.xhr.reqSync_JSON(e)}catch(o){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_Locale "+n+"Error : "+o),r=null}return r};
window.b2link.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"alert")};
window.b2link.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"confirm")};
window.b2link.ui_resource.reqSync_JSON_Locale.label=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"label")};
window.b2link.ui_resource.reqSync_JSON_Locale.message=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"message")};
window.b2link.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"tooltip")};
/*/
!function(){var e={};window.b2link.ui_resource.reqSync_JSON_Locale=function(n,r){if(e[n])return e[n];n=n.replace(".js","."+r+".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var o;try{e[n]=o=window.b2link.xhr.reqSync_JSON(n)}catch(i){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_Locale "+r+"Error : "+i),o=null}return o}
,window.b2link.ui_resource.reqSync_JSON_Locale._clear=function(){e={}}
,window.b2link.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"alert")}
,window.b2link.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"confirm")}
,window.b2link.ui_resource.reqSync_JSON_Locale.label=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"label")}
,window.b2link.ui_resource.reqSync_JSON_Locale.message=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"message")}
,window.b2link.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"tooltip")}}();
//*/

//----------------------------------------------------------------------------------------------------window.b2link.ui_reousrce.a***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_static;

window.b2link.ui_static = window.b2link.ui_static || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_static;


//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;



//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_static;

//window.b2link.ui_static = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_static;


//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;

/**
 * window.b2link_ui.static.*** 함수를 호출하고 DataInputElements의 값을 초기화 시키는 공통 Interface('clearDataInputElements')를 호출 후 UI 객체를 리턴한다.
 * @function
 * @param {Function} window.b2link_ui.***
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui_static.getUI_ClearDataInputElements = function( fn_ui )
{
	

	/*/
	var o = fn_ui();//get UI HTMLElement And JS Controller;
	var el = o[ 0 ];//UI HTMLElement;
	var elCtrl = o[ 1 ];//JS Controller;
		elCtrl.clearDataInputElements();
	/*/
	var o = fn_ui();//get UI HTMLElement And JS Controller;
		o[ 1 ].clearDataInputElements();
	//*/

	
	return o;
};

//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui;

//window.b2link.ui = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui;


//----------------------------------------------------------------------------------------------------window.b2link.ui.g***;

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input = function( t )
{
	//

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.className, io.value ] );
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ElementFromParentElement__Input = function( t )
{
	//

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( io );
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_IDAndValueFromParentElement__Input = function( t )
{
	//

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.id, io.value ] );
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array}
 */
window.b2link.ui.getArray_ValueFromParentElement__Input = function( t )
{
	//

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( io.value );
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller = function( t )
{
	

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		switch (io.tagName){
		case 'INPUT':
		case 'TEXTAREA':
			r[ io.className ] = io.value;
			break;
		default:
			break;
		}
	}

	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input = function( t )
{
	//

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.className ] = io.value;
	}

	//
	return r;
};

/**
 * targetElement의 ChildElement에 InputElement가 존재하는 경우 className으로 Object를 추출하기 위한 용도
 * targetElement로부터 Depth2 위치에 InputElement가 존재
 * @public
 * @function
 * @param {HTMLElement} t targetElement
 * @return {Object}
 * <code>
 * { "className" : "", "className" : "", "className" : "", ... }
 * </code>
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2 = function( t )
{
	

	var r = {};
	/*/
	var f = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input;
	var io;
	var a = t.children;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		var ir = f( io );
		for( var s in ir ) r[ s ] = ir[ s ];
	}
	//*/
	var a0 = t.children;
	var i=0, iLen=a0.length;
	for( ; i<iLen; ++i )
	{
		var a1 = a0[ i ].children;
		var jo;
		var j=0, jLen=a1.length;
		for( ; j<jLen; ++j )
		{
			jo = a1[ j ];
			if( "INPUT" == jo.tagName ) r[ jo.className ] = jo.value;
		}
	}
	//*/

	
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type = function( t )
{
	//

	var of = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;
	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) of( r, io );
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input = function( t )
{
	//

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.className ] = io;
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_Element_IDFromParentElement__Input = function( t )
{
	//

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io;
	}

	//
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_IDAndValueFromParentElement__Input = function( t )
{
	//

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io.value;
	}

	//
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.ui.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.uri;

window.b2link.uri = window.b2link.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.decodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.decodeURI(i)),n[i]},window.b2link.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.decodeURIComponent(o)),n[o]},window.b2link.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.encodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.encodeURI(i)),n[i]},window.b2link.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.encodeURIComponent(o)),n[o]},window.b2link.uri.encodeURIComponent._clear=function(){n={}}}();

//----------------------------------------------------------------------------------------------------window.b2link.uri.g***;

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
window.b2link.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

/**
 * @function
 * @param {String} s 문자열
 * @return {String} #을 !MzU=!로 변경
 */
window.b2link.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};

/**
 * @function
 * @param {Object} data
 * @return {String} #을 !MzU=!로 변경
 */
window.b2link.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};

//----------------------------------------------------------------------------------------------------window.b2link.uri.g***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.url;

window.b2link.url = window.b2link.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.url;


//----------------------------------------------------------------------------------------------------window.b2link.url.g***;


//----------------------------------------------------------------------------------------------------window.b2link.url.g***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util;

window.b2link.util = window.b2link.util || {};

//--------------------------------------------------window.b2link.util.i***;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML=SUtilTemplateHTML.addHTML__URLToElID;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML_Cache=SUtilTemplateHTML.addHTML__URLToElID_Cache;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS=SUtilTemplateHTML.addHTMLJS__URL_Return;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * window.b2link.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI=function(i,n,_,d){var t=SUtilTemplateHTML.addHTMLJS__URL_Return(n,_,d);return window.b2link.ui.staticUIMap_Add(i,t),t};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS=SUtilTemplateHTML.addHTMLJSCSS__URL_Return;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * window.b2link.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * css는 window.b2link.STATIC.UI[ key ]에 보관하지 않는다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI=function(i,n,_,d,t){var S=SUtilTemplateHTML.addHTMLJSCSS__URL_Return(n,_,d,t);return window.b2link.ui.staticUIMap_Add(i,S),S};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl=SUtilTemplateHTML.addHTML__URLToEl;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl_Cache=SUtilTemplateHTML.addHTML__URLToEl_Cache;

/**
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.util.importJS=function(t){var i=SUtilTemplateHTML.addJS__URL(t,arguments);return i};

//--------------------------------------------------window.b2link.util.i***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util_string;

window.b2link.util_string = window.b2link.util_string || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util_string;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util_string;

//window.b2link.util_string = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util_string;


//----------------------------------------------------------------------------------------------------window.b2link.util_string.b***;

/**
 * {{xxx}} 형태의 문자열을 "" 로 변경
 * @function
 * @param {String} s string data
 * @return {String}
 */
window.b2link.util_string.braceStringToEmpty = function( s )
{
	//

	if( "string" == typeof s )
		if( -1 < s.search( "{{" ) )
		{
			//
			return "";
		}

	//
	return s;
};

//----------------------------------------------------------------------------------------------------window.b2link.util_string.b***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util;

//window.b2link.util = {};

//--------------------------------------------------window.b2link.util.d***;

window.b2link.util.dateDifference_object = function( date_obj1, date_obj2 )
{
	window.b2link_ui.message.error( "window.b2link.util.dateDifference_object -> window.b2link.date.dateDifference_object 교체 바람" );
	return window.b2link.date.dateDifference_object( date_obj1, date_obj2 );
};

window.b2link.util.dateFormatFromDateArray = function( d )
{
	window.b2link_ui.message.error( "window.b2link.util.dateFormatFromDateArray -> window.b2link.date.dateFormatFromDateArray 교체 바람" );
	return window.b2link.date.dateFormatFromDateArray( d );
};

window.b2link.util.dateFormatFromDateObject = function( d )
{
	window.b2link_ui.message.error( "window.b2link.util.dateFormatFromDateObject -> window.b2link.date.dateFormatFromDateObject 교체 바람" );
	return window.b2link.date.dateFormatFromDateObject( d );
};

window.b2link.util.dateGetObjectDateFromDateString_Dash = function( dateString )
{
	window.b2link_ui.message.error( "window.b2link.util.dateGetObjectDateFromDateString_Dash -> window.b2link.date.getObjectDateFromDateString_Dash 교체 바람" );
	return window.b2link.date.getObjectDateFromDateString_Dash( dateString );
};

//--------------------------------------------------window.b2link.util.d***;


//--------------------------------------------------window.b2link.util.f***;

/**
 * String format
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 * @author  cpark
 *
 * -- Usage
 * !!! {0} = {#IDX_OF_ARRAY}
 *
 * var str = "http://localhost?key0={0}&key1={1}&key2={2}&key3={0}";
 * var values = [ "val0", 111, "val2"];
 * var str = window.b2link.util.format(str, values);
 *
 * result : http://localhost?key0=val0&key1=111&key2=val2&key3=val0
 */
window.b2link.util.format = function( str, values )
{
	var formatted = str;
	for( var i=0; i<values.length; i++ )
	{
		var regexp = new RegExp( '\\{' + i + '\\}', 'gi' );
		formatted = formatted.replace( regexp, values[ i ] );
	}
	return formatted;
};

//--------------------------------------------------window.b2link.util.f***;


//--------------------------------------------------window.b2link.util.t***;

/**
 * trim
 * @function
 * @param {String} s
 * @return {String}
 * @author cpark
 */
(function(){
	var _reg0 = /(^\s*)|(\s*$)/gi;
	window.b2link.util.trim = function( s ){ return s.replace( _reg0, "" ); };
})();

//--------------------------------------------------window.b2link.util.t***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_classType;

window.b2link.validation_classType = window.b2link.validation_classType || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_classType;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_classType;

//window.b2link.validation_classType = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_classType;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.a***;

/**
 * Javascript의 자료타입 Array를 Validation 한다.
 * @function
 * @param {array} p
 * @return {Boolean}
 */
window.b2link.validation_classType.array = function( p )
{
	//
	//

	//if( "object" == typeof( p ) )
	if( window.b2link.validation_classType.object( p ) )
		if( p.hasOwnProperty( "length" ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.a***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.b***;

/**
 * Javascript의 자료타입 Boolean을 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.boolean = function( p )
{
	//
	//

	if( "boolean" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.b***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.i***;

/**
 * Javascript의 자료타입 int를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.int = function( p )
{
	//
	//

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 == p.toString.indexOf( "." ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.i***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.n***;

/**
 * Javascript의 자료타입 Number를 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.number = function( p )
{
	//
	//

	if( "number" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.n***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.o***;

/**
 * Javascript의 자료타입 Object를 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.object = function( p )
{
	//
	//

	if( "object" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.o***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.s***;

/**
 * Javascript의 자료타입 String를 Validation 한다.
 * @function
 * @param {String} p
 * @return {Boolean}
 */
window.b2link.validation_classType.string = function( p )
{
	//
	//

	if( "string" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.s***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.u***;

/**
 * Javascript의 자료타입 uint를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.uint = function( p )
{
	//
	//

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 < p )
			if( -1 == p.toString.indexOf( "." ) )
				return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.u***;



//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_date;

window.b2link.validation_date = window.b2link.validation_date || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_date;






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_input;

window.b2link.validation_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_input;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_input;

//window.b2link.validation_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_input;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.e***;

(function(){

	var _regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * @function
	 * @param {String} e_id email_id
	 * @param {String} e_domain email_domain
	 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
	 */
	window.b2link.validation_input.email = function( e_id, e_domain )
	{
		//

		var r = { r : 1, m : "" };

		if( -1 == e_domain.indexOf( "." ) ){ r.r = 0; r.m = "이메일 도메인 구문 오류"; return r; }

		if( !e_id || !e_domain ){ r.r = 0; r.m = "이메일 입력 오류"; return r; }

		var email = e_id + "@" + e_domain;
		if( !email.match( _regExp ) ){ r.r = 0; r.m = "이메일 구문 오류"; return r; }

		//
		return r;
	};
})();

/**
 * 수정하기 - 2017.01.05 - "", inputType가 Text일때만 사용?
 * @function
 * @param {array} p
 * @return {Boolean}
 */
window.b2link.validation_input.empty = function( val )
{
	if( !val )
	{
		return false;
	}
	return true;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.e***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.i***;

(function(){

	var _regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * @function
	 * @param {String} id
	 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
	 */
	window.b2link.validation_input.id_emailType = function( id )
	{
		//

		var r = { r : 1, m : "" };

		if( !id.match( _regExp ) ){ r.r = 0; r.m = "아이디 구문 오류"; return r; }

		//
		return r;
	};
})();

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.i***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.n***;

/**
 * @function
 * @param {String} nm_f name_first
 * @param {String} nm_l name_last
 * @param {String} m message first word
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.name = function( nm_f, nm_l, m )
{
	//

	m = m || "이름";

	var r = { r : 1, m : "" };

	if( !nm_f || !nm_l ){ r.r = 0; r.m = m + " 입력오류"; return r; }

	//
	return r;
};

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.notInputed = function( v, m )
{
	//

	m = m || "";

	var r = { r : 1, m : "" };

	if( !v ){ r.r = 0; r.m = " 미입력"; return r; }

	//
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.n***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.p***;

/**
 * @function
 * @param {String} pw password
 * @param {String} pw_re password confirm
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.password = function( pw, pw_re )
{
	//

	var r = { r : 1, m : "" };

	if( pw.length < 9 ){ r.r = 0; r.m = "암호 9자 이상 입력해야합니다."; return r; }

	if( !pw || !pw_re ){ r.r = 0; r.m = "암호 미입력"; return r; }

	if( pw != pw_re ){ r.r = 0; r.m = "암호 불일치"; return r; }

	//
	return r;
};

/**
 * @function
 * @param {String} country
 * @param {String} area
 * @param {String} num0
 * @param {String} num1
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.phone_cell = function( country, area, num0, num1 )
{
	//

	var r = { r : 1, m : "" };

	if( !country || !area || !num0 || !num1 ){ r.r = 0; r.m = "휴대전화번호 입력오류"; return r; }

	//
	return r;
};

/**
 * @function
 * @param {String} country
 * @param {String} area
 * @param {String} num0
 * @param {String} num1
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.phone_tel = function( country, area, num0, num1 )
{
	//

	var r = { r : 1, m : "" };

	if( !country || !area || !num0 || !num1 ){ r.r = 0; r.m = "전화번호 입력오류"; return r; }

	//
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.p***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_mongodb;

window.b2link.validation_mongodb = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_mongodb;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_mongodb;

//window.b2link.validation_mongodb = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_mongodb;


//----------------------------------------------------------------------------------------------------window.b2link.validation_mongodb._i***;

/**
 * MongoDB의 db.collection._id가 string일 경우 validation 한다.
 * @function
 * @param {String} _id
 * @return {Boolean}
 */
window.b2link.validation_mongodb._id__string = function( _id )
{
	//
	//
	if( window.b2link.validation_classType.string( _id ) )
		return true;
	return false
};

/**
 * MongoDB의 db.collection._id가 uint일 경우 validation 한다.
 * @function
 * @param {uint} _id
 * @return {Boolean}
 */
window.b2link.validation_mongodb._id__uint = function( _id )
{
	//
	//
	if( window.b2link.validation_classType.uint( _id ) )
		if( 999999999 > _id )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_mongodb._i***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_select;

window.b2link.validation_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_select;


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_select;

//window.b2link.validation_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_select;


//----------------------------------------------------------------------------------------------------window.b2link.validation_select.n***;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.notSelected = function( t, m )
{
	//

	m = m || "선택항목 ";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_select.n***;



//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_browser;

/**
 * 인터넷 브라우저에서만 사용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_browser = window.b2link.websocket_browser || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_browser;

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null

		, "evt_close" : function( e ){ debugger; arguments; }
		, "evt_error" : function( e ){ debugger; arguments; }
		, "evt_message" : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, "evt_open" : function( e ){ debugger; arguments; }
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322

		, evt_close : function( e ){ debugger; arguments; }
		, evt_error : function( e ){ debugger; arguments; }
		, evt_message : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, evt_open : function( e ){ debugger; arguments; }
	});
 * </code>
 */
window.b2link.websocket_browser.connect=function(e){if(!e.host)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : host 정의 필수");if(!e.port)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : port 정의 필수");if(!e.evt_message)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : evt_message 정의 필수");var r=e.evt_message?e.evt_message:function(e){arguments},n=e.evt_open?e.evt_open:function(e){arguments},o=e.evt_error?e.evt_error:function(e){var s=arguments.callee.__webSocket;s.removeEventListener("close",t,!1),s.removeEventListener("error",o,!1),s.removeEventListener("message",r,!1),s.removeEventListener("open",n,!1)},t=e.evt_close?e.evt_close:function(e){var s=arguments.callee.__webSocket;s.removeEventListener("close",t,!1),s.removeEventListener("error",o,!1),s.removeEventListener("message",r,!1),s.removeEventListener("open",n,!1)};try{var s=new window.WebSocket("ws://"+e.host+":"+e.port);t.__webSocket=o.__webSocket=s,s.addEventListener("close",t,!1,0,!0),s.addEventListener("error",o,!1,0,!0),s.addEventListener("message",r,!1,0,!0),s.addEventListener("open",n,!1,0,!0)}catch(i){window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : "+i)}return s};

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * 모든 메세지가 전체 송/수신 되는 기능
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.WS__TEST = window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322
	});
 * </code>
 */
window.b2link.websocket_browser.connect__MessageBox_message=function(e){e.evt_message=function(e){try{var n=JSON.parse(e.data);window.b2link_ui.message[n.type](n.data)}catch(o){var s=e.data;window.b2link_ui.message.message(s)}},e.evt_open=function(e){};var n=window.b2link.websocket_browser.connect(e);return n};
/*///삭제하기 - 20170616 - 송선우 - 테스트 소스;
try{window.WS__TEST||(window.WS__TEST=window.b2link.websocket_browser.connect__MessageBox_message({host:"222.239.10.122",port:42322}))}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함.")}
try{window.WS__TEST||(window.WS__TEST=window.b2link.websocket_browser.connect__MessageBox_message({host:"localhost",port:42322}))}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함.")}
//*/

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * sid(session id)와 mid(member id)를 체크한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null

		, "evt_close" : function( e ){ debugger; arguments; }
		, "evt_error" : function( e ){ debugger; arguments; }
		, "evt_message" : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, "evt_open" : function( e ){ debugger; arguments; }
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322

		, evt_close : function( e ){ debugger; arguments; }
		, evt_error : function( e ){ debugger; arguments; }
		, evt_message : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, evt_open : function( e ){ debugger; arguments; }
	});
 * </code>
 */
window.b2link.websocket_browser.connectAndCheckSession=function(e){if(!e.host)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : host 정의 필수");if(!e.port)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : port 정의 필수");if(!e.evt_message)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : evt_message 정의 필수");var r=e.evt_message?e.evt_message:function(e){arguments},n=e.evt_open?e.evt_open:function(e){arguments},o=e.evt_error?e.evt_error:function(e){var t=arguments.callee.__webSocket;t.removeEventListener("close",s,!1),t.removeEventListener("error",o,!1),t.removeEventListener("message",r,!1),t.removeEventListener("open",n,!1)},s=e.evt_close?e.evt_close:function(e){var t=arguments.callee.__webSocket;t.removeEventListener("close",s,!1),t.removeEventListener("error",o,!1),t.removeEventListener("message",r,!1),t.removeEventListener("open",n,!1)};try{var t=window.b2link.session.getSession();if(!t.mid)return void window.b2link_ui.message.error("WebSocket 연결 실패 - mid가 없다");if(!t.sid)return void window.b2link_ui.message.error("WebSocket 연결 실패 - sid가 없다");var i=new window.WebSocket("ws://"+e.host+":"+e.port+"?sid="+t.sid+"&mid="+t.mid);s.__webSocket=o.__webSocket=i,i.addEventListener("close",s,!1,0,!0),i.addEventListener("error",o,!1,0,!0),i.addEventListener("message",r,!1,0,!0),i.addEventListener("open",n,!1,0,!0)}catch(w){window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : "+w)}return i};

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * 모든 메세지가 전체 송/수신 되는 기능
 * sid(session id)와 mid(member id)를 체크한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.WS0 = window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message.js({
		host : "localhost"
		, port : 42322
	});
 * </code>
 */
window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message=function(e){e.evt_message=function(e){try{var n=JSON.parse(e.data);window.b2link_ui.message[n.type](n.data)}catch(s){var a=e.data;window.b2link_ui.message.message(a)}},e.evt_open=function(e){};var n=window.b2link.websocket_browser.connectAndCheckSession(e);return n};










//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_client;

/**
 * NodeJS 콘솔 클라이언에서 활용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_client = window.b2link.websocket_client || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_client;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_server;

/**
 * NodeJS 콘솔 서버에서 활용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_server = window.b2link.websocket_server || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_server;






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.xhr;

window.b2link.xhr = window.b2link.xhr || {};

//--------------------------------------------------window.b2link.xhr.r***;

//------------------------------[ S ] - GET - Async;

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Function} cbFunction
 * <code>
 * {
 *	"cbFunctions" : {
 *		"onabort" : function( e ){}
 *		, "onerror" : function( e ){}
 *		, "onload" : function( e ){}
 *		, "onloadend" : function( e ){}
 *		, "onstart" : function( e ){}
 *		, "onprogress" : function( e ){}
 *		, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *		, "ontimeout" : function( e ){}
 *	}
 * }
 * </code>
 */
!function(){var n=new Date;window.b2link.xhr.req=function(e,t){++n,SUtilXMLHttpReqGet.req(e+"?nCached="+n,t)}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 cbFunction에 string으로 parameter을 전달하여 호출한다.
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( str ){}
 */
!function(){var n=new Date;window.b2link.xhr.req_String=function(t,e){++n,SUtilXMLHttpReqGet.req_String(t+"?nCached="+n,e)}}();

//------------------------------[ E ] - GET - Async;


//------------------------------[ S ] - GET - Sync;

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 JSON으로 받은 데이터를 Object로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
!function(){var n=new Date;window.b2link.xhr.reqSync=function(e){++n,SUtilXMLHttpReqGet.reqSync(e+"?nCached="+n)}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 JSON으로 받은 데이터를 Object로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
!function(){var e=new Date;window.b2link.xhr.reqSync_JSON=function(n){++e;var r=JSON.parse(SUtilXMLHttpReqGet.reqSyncReturn(n+"?nCached="+e).responseText.replace(/\/\/.*/gi,""));return r}}();
//!function(){var e=new Date;window.b2link.xhr.reqSync_JSON=function(n){++e,n=-1!=n.indexOf("?")?n+"&nCached="+e:n+"?nCached="+e;var r=JSON.parse(SUtilXMLHttpReqGet.reqSyncReturn(n).responseText.replace(/\/\/.*/gi,""));return r}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 받은 데이터를 String로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
//!function(){var n=new Date;window.b2link.xhr.reqSync_String=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e+"?nCached="+n).responseText;return t}}();
!function(){var n=new Date;window.b2link.xhr.reqSync_String=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e).responseText;return t}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 XMLHttpRequest 객체를 그대로 Return 한다.
 * @function
 * @param {String} url
 * @return {XMLHTTPRequest}
 */
//!function(){var n=new Date;window.b2link.xhr.reqSyncReturn=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e+"?nCached="+n);return t}}();
!function(){var n=new Date;window.b2link.xhr.reqSyncReturn=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e);return t}}();

//------------------------------[ E ] - GET - Sync;


//------------------------------[ S ] - POST - Async;

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Form(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Form(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Form=function(r,o,t,i){SUtilXMLHttpReqPost.req__paramsForm(r,t,i)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Form_useAction(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Form_useAction(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Form_useAction=function(o,t,i,n){SUtilXMLHttpReqPost.req__paramsForm_useAction(o,t,i,n)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/json"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_JSON(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/json", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_JSON(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_JSON=function(r,i,n,t){n||(n={});try{n["Content-type"]="application/json",SUtilXMLHttpReqPost.req__paramsStr(r,JSON.stringify(i),n,t)}catch(o){window.b2link_ui.message.error("window.b2link.xhr.req_POST_JSON Error : "+o)}};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Obj(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Obj(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Obj=function(t,i,n,r){SUtilXMLHttpReqPost.req__paramsObj(t,i,n,r)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Str(
		"www.google.com"
		, JSON.stringify({ "a" : 1, "b" : 2, "c" : 3 })
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Str(
		"http://posttestserver.com/post.php?dir=example"
		, JSON.stringify({ "a" : 1, "b" : 2, "c" : 3 })
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		//"http://www.example.org/example.txt"
		"./ttwP/www.example.org/example.txt"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		"http://html5rocks.com"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		"www.example2.com"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Str=function(t,r,i,n){SUtilXMLHttpReqPost.req__paramsStr(t,r,i,n)};

//------------------------------[ E ] - POST - Async;


//------------------------------[ S ] - POST - Sync;
//------------------------------[ E ] - POST - Sync;

//--------------------------------------------------window.b2link.xhr.r***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.xhr;


//



//
//


/**
 * Timeout를 구동한다.
 * @function
 * @param {HTMLElement} el
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop = function( el, time )
{
	//////////
	//////////

	return setTimeout( function(){ window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop( el ); }, time ? time : 500 );
};


//







/**
 * @function
 */
window.b2link.console.initialize = function()
{
	

	
};










/**
 * String format
 * @function
 * @param {Object} Date object { y : 2017, m : 2, d: 3, ho : 3, mi : 4, se : 12}
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateObject = function( d )
{
	

	if( d === null ) return "";

	if( typeof d !== "object" ) return "";

	if( !d.hasOwnProperty( "y" ) ) return "";

	var year = d.y;
	var month = window.b2link.date.dateFormatFromDateObject._addZero( d.m );
	var day = window.b2link.date.dateFormatFromDateObject._addZero( d.d );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	
	return formattedDate;
};
window.b2link.date.dateFormatFromDateObject._addZero = function( n )
{
	if( n && n < 10 )
		n = "0" + n;
	return n;
};






//
//


/**
 * HTMLInputElement Object에서 Element를 Element.value를 추출하여 동일 구조의 Object를 반환한다.
 * @function
 * @param {Object} d { "y" : {HTMLInputElement}, "m" : {HTMLInputElement}, "d" : {HTMLInputElement}, "ho" : {HTMLInputElement}, "mi" : {HTMLInputElement}, "se" : {HTMLInputElement} }
 * @return {Object} { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
 */
window.b2link.date.getDateObjectFromInputsObject = function( d )
{
	//
	//
	return {
		y : d.y.value
		, m : d.m.value
		, d : d.d.value
		, ho : d.ho.value
		, mi : d.mi.value
		, se : d.se.value
		//, mil : d.mil.value
	};
};


//



//
//


(function(){
	var _date = new Date();

	/**
	 * Object 타입의 Date를 ISOString 형식의 Date로 바꿔서 반환한다.
	 * @function
	 * @param {Object} d { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
	 * @return {String} 2017-01-09T08:18:19.000Z
	 */
	window.b2link.date.getISOStringFromDateObject = function( d )
	{
		//

		_date.setYear( d.y );
		_date.setMonth( d.m - 1 );
		_date.setDate( d.d );
		_date.setHours( d.ho );
		_date.setMinutes( d.mi );
		_date.setSeconds( d.se );
		//_date.setMilliseconds( d.mil );

		//
		return _date.toISOString();
	};
})();


//



//
//


/**
 * Object 타입의 Date를 ISOString 형식의 Date로 바꿔서 반환한다.
 * @function
 * @param {Object} d { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
 * @return {String} 2017-01-09T08:18:19.000Z
 */
window.b2link.date.getISOStringFromDateObject.new = function( d )
{
	//

	var _date = new Date( d.y + "." + d.m + "." + d.d + " " + d.ho + ":" + d.mi + ":" + d.se );

	//
	return _date.toISOString();
};


//



//
//


/**
 * There is a little time differences in same date between two Date() Object,
 * To compare just dates, Set Hours, Minites, Seconds as 0
 * Check if {{date1}} is past than {{date2}}
 *
 * @function
 * @return {Boolean}
 */
window.b2link.date.isDateFuture = function( date1, date2 )
{
	

	var _d1 = new Date( date1.y, date1.m, date1.d, 0, 0, 0 );
	var _d2 = new Date( date2.y, date2.m, date2.d, 0, 0, 0 );

	var timeDifference = _d1.getTime() - _d2.getTime();
	if( timeDifference >= 0 ) return true;
	else return false;

	
};


//



//
//


(function(){

	/**
	 * 모든 item의 자료타입은 같아야 한다.
	 * 0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
	 *
	 * @function
	 * @param {Array} data
	 */
	var _array = function( data )
	{
		if( "object" != data[ 0 ] )
		{
			//모든 item의 자료타입은 같아야 한다.;
			//0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
			return;
		}

		var io;
		var i=0, iLen=data.length;
		for( ; i<iLen; ++i )
		{
			io = data[ i ];
			if( "object" == typeof( io ) )
			{
				_object( io );
			}
		}
	};

	/**
	 *
	 * @function
	 * @param {Object} data
	 */
	var _object = function( data )
	{
		var io;
		for( var s in data )
		{
			io = data[ s ];

			if( "price" == s )
			{
				if( "number" != typeof( io ) )
				{
					//price는 Number여야 한다.;
					debugger;
					//data[ s ] = Number( io );
				}
			}
			else if( 0 == s.indexOf( "quantity" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}



			if( 0 == s.indexOf( "_ids$" ) )
			{
				if( "object" != typeof( io ) || !io )
				{
					//_ids$***는 Object여야 한다.;
					debugger;
				}

				var jo;
				for( var s0 in io )
				{
					jo = io[ s0 ];
					if( "number" != typeof( jo ) || jo < -1 )
					{
						//_ids$***.??는 uint여야 한다 / 기본값은 -1;
						debugger;
						//data[ s ][ s0 ] = parseInt( jo );
					}
				}
			}
			else if( 0 == s.indexOf( "_id$" ) )
			{
				if( "number" != typeof( io ) || io < -1 )
				{
					//_id$***는 uint여야 한다 / 기본값은 -1;
					debugger;
					//data[ s ] = parseInt( io );
				}
			}
			else if( 0 == s.indexOf( "cd$" ) )
			{
				if( "string" != typeof( io ) && !io )
				{
					//cd$***.??는 String이여야 한다;
					debugger;
					//기본 값 셋팅 로직;
				}
			}
			/*/
			else if( 0 == s.indexOf( "nm$" ) )
			{
			}
			//*/
			//20170524 - quantity_ 로 시작하는 구문중에 quantity_predict_release만 Array임 나머지는 uint;
			else if( s != "quantity_predict_release" && 0 == s.indexOf( "quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
			else if( 0 == s.indexOf( "total_quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//total_quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
		}
	};

	/**
	 * MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수
	 * _id*** 키 값 - uint 체크
	 *  cd*** 키 값 - String 체크
	 *  //nm*** 키 값 - String 체크
	 *
	 * @function
	 * @param {Object} data
	 * @return {boolean}
	 */
	window.b2link.debug._check_mongodb_queryParameter = function( data )
	{
		

		if( data.pop && data.push )
		{
			_array( data );
		}
		else
		{
			_object( data );
		}

		
	};

})();


//



//
//


/**
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * element에 Data 여러개를 "list_item_values" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 * @param {Array|Object|*} arguments[ 2 ] 이상부터 data와 같은 구조를 가지고 있어야 한다.
 */
window.b2link.element.injectValuesForListItem = function( t, data )
{
	//////////

	t.list_item_value = data;
	t.list_item_values = [];

	var i=1, iLen=agruments.length;
	for( ; i<iLen; ++i ) t.list_item_values.push( arguments[ i ] );

	//////////
};


//



//
//


(function(){
	var _f0 = window.b2link.element.injectValueForListItem;
	var _f1 = window.b2link.element.injectValuesForListItem;

	var _ = {
		   1 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ] );}
		,  2 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ] ); }
		,  3 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ] ); }
		,  4 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ] ); }
		,  5 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ] ); }
		,  6 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ] ); }
		,  7 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ] ); }
		,  8 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ] ); }
		,  9 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ], a9=args[ 9 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ], a9[ i ] ); }
		, 10 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ], a9=args[ 9 ], a10=args[ 10 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ], a9[ i ], a10[ i ] ); }
	};

	/**
	 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
	 * element에 Data 여러개를 "list_item_values" instance명으로 주입한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {Array} data
	 */
	window.b2link.element.injectValuesForListItems = function( t, data )
	{
		//////////

		var argsLen = arguments.length;
		var dataLen = data.length;

		var i=2, iLen=argsLen;
		for( ; i<iLen; ++i )
			if( dataLen != arguments[ i ].length )
				window.TtwLog.error( "window.b2link.element.injectValuesForListItems Error : 데이터들의 갯수가 일치하지 않음" );

		var a;
		//<Style>가 들어있는 케이스;
		if( t.children[ 0 ] && "STYLE" == t.children[ 0 ].tagName )
		{
			a = [];
			var b = t.children;
			var i=0, iLen=b.length;
			for( ; i<iLen; ++i ) if( "STYLE" != b[ i ].tagName ) a.push( b[ i ] );
		}
		else a = t.children;

		if( a.length != dataLen )
			window.TtwLog.warn( "window.b2link.element.injectValuesForListItems Warn : t의 children 갯수과 data의 갯수가 일치하지 않음." );

		var standardLen = ( a.length > data.length ) ? data.length : a.length;
		_[ argsLen-1 ]( a, standardLen, arguments );

		//////////
	};
})();


//



//
//


/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop = function( t )
{
	//

	var pw = t.parentElement.clientWidth;//parent width;
	var ph = t.parentElement.clientHeight;//parent height;

	var dw = t.clientWidth;//div width;
	var dh = t.clientHeight;//div height;

	var hDW = dw / 2;//half div width;
	var hDH = dh / 2;//half div height;

	var hPW = pw / 2;//half parent width;
	var hPH = ph / 2;//half parent height;

	var s = t.style;

	var left = hPW - hDW;
	( left > 0 ) ? s.left = left + "px" : s.left = "auto";
	console.log( "s.left : " + s.left );

	var top = hPH - hDH;
	( top > 0 ) ? s.top = top + t.parentElement.scrollTop + "px" : s.top = "auto";
	console.log( "s.top : " + s.top );

	s.bottom = "auto";
	s.right = "auto";

	//
};


//



//
//


(function(){
	var _date = new Date();

	/**
	 * 파일 다운로드
	 * @function
	 * @param {String} url
	 */
	window.b2link.file.download = function( url )
	{
		//

		url = url
			+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() )
			+ "&nCached=" + ( ++_date );

		window.open( window.b2link.uri.encodeURI( url ) );

		//
	};
})();



//






/*/
//브라우저 메모리 감지하기;
setInterval( function(){
	var m = window.console.memory;
	var msg = "totalJSHeapSize : " + m.totalJSHeapSize
		+ "\nusedJSHeapSize : " + m.usedJSHeapSize;
	window.b2link_ui.message.message( msg );
}, 1000 );
//*/
(function(){

	/**
	 * 파일을 업로드 하기위해 정보를 저장하는 변수;
	 * @property {Object}
	 * <code>
		{
			"1507788089551": {
				"file":	{
					lastModified : 1499849314265
					, lastModifiedDate : Wed Jul 12 2017 17:48:34 GMT+0900 (대한민국 표준시)
					, name : "visualcppbuildtools_full.exe"
					, size : 3287928
					, type : "application/x-msdownload"
					, webkitRelativePath : ""
				},
				"dateTime":	1507788089551,
				"id": "visualcppbuildtools_full.exe_1507788089551",
				"offset_count":	0,
				"chunkSize": 524288,
				"offset": 524288,
				"total_offset":	6,
				"_storage_key":	1507788089551,
				"blob":	{
					size : 123123123
					, type : ""
				},
				"fileReader": { fileReader }
			}
		}
	 * </code>
	 */
	var _store = {};

	/*/
	API List

	window.b2link.fileReader.single__ArrayBuffer = function( key )

	window.b2link.fileReader.single__ArrayBuffer.upLoadFile = function( params, key )

	window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary = function( params, key )

	window.b2link.fileReader.single__ArrayBuffer.openFile = function( event )
	//*/

	/**
	 * File Data를 Parsing하는 함수;
	 * _store를 참조해 작동한다.
	 * @function
	 * @param {String} key
	 */
	window.b2link.fileReader.single__ArrayBuffer = function( key )
	{
		

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key 값이 잘못 됨" );
			return;
		}

		//Target Object;
		var to = _store[ key ];

		if( !to.file )
		{
			console.log( "File not exist" );
			return;
		}

		//--------------------------------------------------;
		//to.chunkSize = 1024 * 1024 / 2;//500Kb;
		//to.chunkSize = 1024 * 1024 * 1;//1Mb;
		//to.chunkSize = 1024 * 1024 * 2;//2Mb;
		//to.chunkSize = 1024 * 1024 * 3;//3Mb;
		//to.chunkSize = 1024 * 1024 * 4;//4Mb;
		//to.chunkSize = 1024 * 1024 * 5;//5Mb;
		to.chunkSize = 1024 * 1024 * 50;//50Mb;
		to.offset = to.offset || 0;
		to.total_offset = parseInt( to.file.size / to.chunkSize );
		to._storage_key = key || "";

		to.blob = to.file.slice( to.offset, to.chunkSize + to.offset );
		var reader = to.fileReader;
		//--------------------------------------------------;
		/*/
		var evt_abort = function( e ){
			

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			
		};
		var evt_error = function( e ){
			

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			
		};
		var evt_load = function( e ){
			

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			
		};
		//*/

		var evt_loadend = function( e ){
			

			console.log( e );

			/*/
			var s = new Uint8Array( reader.result );
			to.offset += s.length;
			/*/
			to.offset += reader.result.byteLength;
			//*/

			console.log( to.offset + "/" + to.file.size + " -- " + to.offset_count );
			//var update_progress = ( to.offset / to.file.size ) * 100;

			//window.b2link.fileReader.single__ArrayBuffer.upLoadFile( s.join( "," ), key );
			//window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( s, key );
			window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( reader.result, key );

			//*///----------;
			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//debugger;

			//이하 객체들을 정상적으로 dispose 할수있는 방법이 있는지 검색 해봐야 함;
			reader.result.byteLength = 0;
			//reader.result.byteLength = null;

			//to.fileReader = null;

			reader = null;

			//s.length = 0;
			//s = null;

			to.blob = null;

			//*///----------;

			
		};
		/*/
		var evt_loadstart = function( e ){
			//

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//
		};
		var evt_progress = function( e ){
			//

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//
		};
		//*/
		//--------------------------------------------------;

		//reader.addEventListener( "abort", evt_abort, false, 0, true );
		//reader.addEventListener( "error", evt_error, false, 0, true );
		//reader.addEventListener( "load", evt_load, false, 0, true );
		reader.addEventListener( "loadend", evt_loadend, false, 0, true );
		//reader.addEventListener( "loadstart", evt_loadstart, false, 0, true );
		//reader.addEventListener( "progress", evt_progress, false, 0, true );

		reader.readAsArrayBuffer( to.blob );

		
	};

	

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

	

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__ArrayBuffer.addEvent = function( el_input, el_button, cbComplete )
	{
		

		var keyInfo = { key : "" };

		var evt_change = function( e ){
			el_input.removeEventListener( "change", arguments.callee, false );

			keyInfo.key = window.b2link.fileReader.single__ArrayBuffer._evt_change__Input_File( e, cbComplete );

			el_button.addEventListener( "click", function( e ){

				el_button.removeEventListener( "click", arguments.callee, false );

				window.b2link.fileReader.single__ArrayBuffer( keyInfo.key );
			}, false, 0, true );
		};

		el_input.addEventListener( "change", evt_change, false, 0, true );
		
	};

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__ArrayBuffer.removeEvent = function( el_input, el_button )
	{
		

		
	};

	/**
	 * <INPUT type="file">의 데이터를 가져오는 함수 - _store[key]의 기초데이터를 작성한다.
	 * @function
	 * @param {ChangeEvent} e
	 * @example
	 * <code>
		onchange="window.b2link.fileReader.single__ArrayBuffer.evt_change__Input_File( event );"
		또는
		inputElement.addEventListener( "change", window.b2link.fileReader.single__ArrayBuffer.evt_change__Input_File, false, 0, true );
		로 이용한다.

		구동을 위한 Click 버튼은 window.b2link.fileReader.single__ArrayBuffer(); 로 사용한다.

		<div class="ui action input">
			<input type="file" placeholder="Search..." onchange="window.b2link.fileReader.single__ArrayBuffer.evt_change__Input_File( event );">
			<button class="ui button" onclick="window.b2link.fileReader.single__ArrayBuffer();">Upload</button>
		</div>
	 * </code>
	 * @return {String} key
	 */
	window.b2link.fileReader.single__ArrayBuffer._evt_change__Input_File = function( e, cbComplete )
	{
		

		var el = e.target;//INPUT Element;

		var file = el.files[ 0 ];//Selected Files;

		var key = Date.now();

		if( !_store[ key ] )
		{
			_store[ key ] = {
				file : file
				, dateTime : key
				, id : file.name + "_" + key
				, offset_count : 0
				, complete : cbComplete

				, fileReader : new FileReader()
				, requestHeaders : { "Content-type" : "application/x-www-form-urlencoded" }
				, xhr : new XMLHttpRequest()
			};
		}

		
		return key;
	};

	

	//	FUNCTION - 알파벳 순 정렬;
	//	- Common Interface
	//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

	

	/**
	 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @function
	 * @param {String} params FileData ArrayBuffer 문자열
	 * @param {String} key
	 */
//	window.b2link.fileReader.single__ArrayBuffer.upLoadFile = function( params, key )
//	{
//		
//
//		if( !key )
//		{
//			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key가 있어야 한다." );
//			return;
//		}
//
//		if( !_store[ key ] )
//		{
//			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key 값이 잘못 됨" );
//			return;
//		}
//
//		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );
//
//		//Target Object;
//		var to = _store[ key ];
//
//		var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
//			+ "_storage_key=" + to._storage_key
//			+ "&file_id=" + to.id
//			+ "&fileNm=" + to.file.name
//			+ "&offset=" + to.offset_count
//			+ "&total_offset=" + to.total_offset
//			+ "&totalBytes=" + to.file.size;
//
//		window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
//			/*/
//			, {
//				onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
//				, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
//				, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
//				, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
//				, onstart : function( e ){ console.log( "---------- onstart ----------" ); console.log( e ); }
//				, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
//				, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
//					//console.log( e );
//					if ( e.readyState == 4 && e.status == 200 )
//					{
//						var r = JSON.parse( e.responseText );
//
//						++to.offset_count;
//
//						to._storage_key = r._storage_key;
//
//						if( r.isEnd == 1 )
//						{
//							console.log( "FileUload_end!" );
//							to = {};//스토리지초기화;
//							return;
//						}
//
//						if( r ) window.b2link.fileReader.single__ArrayBuffer( r._storage_key );
//
//					}
//					else
//					{
//						console.log( 'readyState=' + e.readyState + ', status: ' + e.status );
//					}
//
//				}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
//				, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
//			}
//			/*/
//			, function( result ){
//				
//
//				if( !window.b2link.response.getResultStatus( result ) )
//				{
//					var a = window.smt_ui.message.error.modal();
//					var elc = a[ 1 ];
//						elc.headerText = "파일 업로더 에러";
//						elc.messageText = "업로드 실패 - 몰러";
//
//					return;
//				}
//
//				++to.offset_count;
//				to._storage_key = result._storage_key;
//
//				//파일 업로드 완료;
//				if( 1 == result.isEnd )
//				{
//					console.log( "FileUload_end!" );
//					to = {};//스토리지초기화;
//					return;
//				}
//
//				/*///메모리 릭 때문에 시간 주기;
//				window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
//				/*/
//				setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( result._storage_key ); }, 100 );
//				//*/
//
//				
//			}
//			//*/
//		);
//
//		
//	};

	/**
	 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @function
	 * @param {String} params FileData ArrayBuffer 문자열
	 * @param {String} key
	 */
	window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary = function( params, key )
	{
		

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key 값이 잘못 됨" );
			return;
		}

		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

		//Target Object;
		var to = _store[ key ];

		var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
			+ "_storage_key=" + to._storage_key
			+ "&file_id=" + to.id
			+ "&fileNm=" + to.file.name
			+ "&offset=" + to.offset_count
			+ "&total_offset=" + to.total_offset
			+ "&totalBytes=" + to.file.size;

		//window.b2link_service.common._fn_req_POST__ArrayBuffer( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
		window.b2link_service.common._fn_req_POST__ArrayBuffer__Ref( to.xhr, url, params, to.requestHeaders
			, function( result ){
				

				if( !window.b2link.response.getResultStatus( result ) )
				{
					var a = window.smt_ui.message.error.modal();
					var elc = a[ 1 ];
						elc.headerText = "파일 업로더 에러";
						elc.messageText = "업로드 실패 - 몰러";

					return;
				}

				++to.offset_count;
				//to._storage_key = result._storage_key;

				//파일 업로드 완료;
				if( 1 == result.isEnd )
				{
					console.log( "FileUload_end!" );

					//수정하기 초기화를 dispose 함수로 뜯어서 디테일하게 진행하기;
					//스토리지초기화;
					//*/
					to.complete();

					to.file = null;
					to.fileReader = null;
					to.xhr = null;

					to = {};
					/*/
					window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary.dispose( key );

					//*/

					return;
				}

				/*///메모리 릭 때문에 시간 주기;
				window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
				/*/
				setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( key ); }, 100 );
				//*/

				
			}
			//*/
		);

		
	};

	/**
	* 스토리지 및 기타 데이터들을 초기화하는 함수
	* @param {String} key 스토리지의 키값
	*/
	window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary.dispose = function( el )
	{
		

		
	};


})();







//

/*/
//브라우저 메모리 감지하기;
setInterval( function(){
	var m = window.console.memory;
	var msg = "totalJSHeapSize : " + m.totalJSHeapSize
		+ "\nusedJSHeapSize : " + m.usedJSHeapSize;
	window.b2link_ui.message.message( msg );
}, 1000 );
//*/
(function(){

	/**
	 * 파일을 업로드 하기위해 정보를 저장하는 변수;
	 * @property {Object}
	 * <code>
		{
			file : {
				lastModified : 1505469803008
				, lastModifiedDate : Fri Sep 15 2017 19:03:23 GMT+0900 ( 대한민국 표준시 ){}
				, name : "stock_quantity_searchList.xlsx"
				, size : 1337285
				, type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
				, webkitRelativePath : ""
			}
			, dateTime : 1506070953993
			, id : "stock_quantity_searchList.xlsx_1506070953993"
			, offset_count : 0
			, _storage_key : "::1_62612_1506070955972"
		}
	 * </code>
	 */
	var _store = {};

	/**
	 * File Data를 Parsing하는 함수;
	 * _store를 참조해 작동한다.
	 * @function
	 * @param {String} key
	 */
	window.b2link.fileReader.single__DataURL = function( key )
	{

		

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key 값이 잘못 됨" );
			return;
		}

		//Target Object;
		var to = _store[ key ];

		if( !to.file )
		{
			console.log( "File not exist" );
			return;
		}

		//--------------------------------------------------;
		// to.chunkSize = 1024 * 1024;
		// to.offset = to.offset || 0;
		// to.total_offset = parseInt( to.file.size / to.chunkSize );
		to._storage_key = key || "";

		// to.blob = to.file.slice( to.offset, to.chunkSize + to.offset );
		var reader = to.fileReader = new FileReader();
		//--------------------------------------------------;
		/*/
		var evt_abort = function( e ){
			

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			
		};
		var evt_error = function( e ){
			

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			
		};
		var evt_load = function( e ){
			

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			
		};
		//*/
		var evt_loadend = function( e ){
			

			console.log( e );

			var data = reader.result;
			var dataType = data.substring( 0, data.indexOf( "base64," ) + 7 );
			var dataURL = data.replace( dataType, "" );
			// console.log( "DataType : ", dataType );
			// console.log( "DataURL : ", dataURL);
			window.b2link.fileReader.single__DataURL.upLoadFile( dataURL, key );


			//*///----------;
			// reader.removeEventListener( "abort", evt_abort, false );
			// reader.removeEventListener( "error", evt_error, false );
			// reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			// reader.removeEventListener( "loadstart", evt_loadstart, false );
			// reader.removeEventListener( "progress", evt_progress, false );

			to.fileReader = null;
			reader = null;

			//*///----------;

			
		};
		/*/
		var evt_loadstart = function( e ){
			//

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//
		};
		var evt_progress = function( e ){
			//

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//
		};
		//*/
		//--------------------------------------------------;

		// reader.addEventListener( "abort", evt_abort, false, 0, true );
		// reader.addEventListener( "error", evt_error, false, 0, true );
		// reader.addEventListener( "load", evt_load, false, 0, true );
		reader.addEventListener( "loadend", evt_loadend, false, 0, true );
		// reader.addEventListener( "loadstart", evt_loadstart, false, 0, true );
		// reader.addEventListener( "progress", evt_progress, false, 0, true );

		reader.readAsDataURL( to.file );

		
	};


	

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

	

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__DataURL.addEvent = function( el_input, el_button )
	{
		

		var keyInfo = { key : "" };
		var _storeInfo;

		var evt_change = function( e ){
			el_input.removeEventListener( "change", arguments.callee, false );

			_storeInfo = window.b2link.fileReader.single__DataURL._evt_change__Input_File( e );
			keyInfo.key = _storeInfo.key

			if( _storeInfo.fileSize > 1024 * 1024 * 2 )
			{
				//error message 달기;
				window.TtwLog.warn( "window.b2link.fileReader.single__DataURL._evt_change__Input_File : 파일이 2MB 이상입니다." );
				return;
			}

			el_button.addEventListener( "click", function( e ){

				el_button.removeEventListener( "click", arguments.callee, false );
				window.b2link.fileReader.single__DataURL( keyInfo.key );
			}, false, 0, true );
		};

		el_input.addEventListener( "change", evt_change, false, 0, true );

		
	};

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__DataURL.removeEvent = function( el_input, el_button )
	{
		

		
	};

	/**
	 * <INPUT type="file">의 데이터를 가져오는 함수 - _store[key]의 기초데이터를 작성한다.
	 * @function
	 * @param {ChangeEvent} e
	 * @example
	 * <code>
		onchange="window.b2link.fileReader.single__DataURL.evt_change__Input_File( event );"
		또는
		inputElement.addEventListener( "change", window.b2link.fileReader.single__DataURL.evt_change__Input_File, false, 0, true );
		로 이용한다.

		구동을 위한 Click 버튼은 window.b2link.fileReader.single__DataURL(); 로 사용한다.

		<div class="ui action input">
			<input type="file" placeholder="Search..." onchange="window.b2link.fileReader.single__DataURL.evt_change__Input_File( event );">
			<button class="ui button" onclick="window.b2link.fileReader.single__DataURL();">Upload</button>
		</div>
	 * </code>
	 * @return {String} key
	 */
	window.b2link.fileReader.single__DataURL._evt_change__Input_File = function( e )
	{
		

		var el = e.target;//INPUT Element;

		var file = el.files[ 0 ];//Selected Files;

		var key = Date.now();

		if( !_store[ key ] )
		{
			_store[ key ] = {
				file : file
				, dateTime : key
				, id : file.name + "_" + key
				, offset_count : 0
			};
		}

		
		return { fileSize : file.size, key : key };
	};


	/**
	 * textAsDataURL로 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @param  {String} params
	 * @param  {String} _storage_key
	 */
	window.b2link.fileReader.single__DataURL.upLoadFile =  function( params, key ){

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key 값이 잘못 됨" );
			return;
		}

		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

		//Target Object;
		var to = _store[ key ];

		var url = host + "/file/single_sync/upload_textAsdataURL?"
			+ "_storage_key=" + to._storage_key
			+ "&file_id=" + to.id
			+ "&fileNm=" + to.file.name
			+ "&totalBytes=" + to.file.size;

		window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }//,...
			/*/
			, {
				onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
				, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
				, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
				, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
				, onstart : function( e ){ console.log("---------- onstart ----------" ); console.log( e ); }
				, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
				, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
					//console.log( e );
					if (e.readyState == 4 && e.status == 200)
					{
						var r = e.responseText;
						console.log( r ,"FileUpload_End!")
						fileDataInfo = {};//스토리지초기화;
						target_file_key = null;
					}
					else
					{
						console.log('readyState=' + e.readyState + ', status: ' + e.status);
					}

				}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
				, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
			}/*/
			, function( result ){
				

				if( !window.b2link.response.getResultStatus( result ) )
				{
					var a = window.smt_ui.message.error.modal();
					var elc = a[ 1 ];
						elc.headerText = "파일 업로더 에러";
						elc.messageText = "업로드 실패 - 몰러";

					return;
				}

				console.log( "FileUpload_End!")
				to = {};//스토리지초기화;
				return;

				
			}
			//*/
		);
	}

	/**
	 * textAsDataURL로 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @param  {String} params
	 * @param  {String} _storage_key
	 */
	window.b2link.fileReader.single__DataURL.upLoadFileBinary =  function( params, key ){

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key 값이 잘못 됨" );
			return;
		}

		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

		//Target Object;
		var to = _store[ key ];

		var url = host + "/file/single_sync/upload_textAsdataURL?"
			+ "_storage_key=" + to._storage_key
			+ "&file_id=" + to.id
			+ "&fileNm=" + to.file.name
			+ "&totalBytes=" + to.file.size;

		window.b2link_service.common._fn_req_POST__ArrayBuffer( url, params, { "Content-type" : "application/x-www-form-urlencoded" }//,...
			/*/
			, {
				onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
				, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
				, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
				, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
				, onstart : function( e ){ console.log("---------- onstart ----------" ); console.log( e ); }
				, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
				, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
					//console.log( e );
					if( e.readyState == 4 && e.status == 200 )
					{
						var r = e.responseText;
						console.log( r ,"FileUpload_End!" );
						fileDataInfo = {};//스토리지초기화;
						target_file_key = null;
					}
					else
					{
						console.log('readyState=' + e.readyState + ', status: ' + e.status);
					}

				}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
				, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
			}/*/
			, function( result ){
				

				if( !window.b2link.response.getResultStatus( result ) )
				{
					var a = window.smt_ui.message.error.modal();
					var elc = a[ 1 ];
						elc.headerText = "파일 업로더 에러";
						elc.messageText = "업로드 실패 - 몰러";

					return;
				}

				console.log( "FileUpload_End!" );
				to = {};//스토리지초기화;
				return;

				
			}
			//*/
		);
	}
})();









/**
 * 파일을 업로드 하기위해 정보를 저장하는 변수;
 * @property {Object}
 * <code>
	{
		data : {
			lastModified : 1505469803008
			, lastModifiedDate : Fri Sep 15 2017 19:03:23 GMT+0900 ( 대한민국 표준시 ){}
			, name : "stock_quantity_searchList.xlsx"
			, size : 1337285
			, type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			, webkitRelativePath : ""
		}
		, dateTime : 1506070953993
		, id : "stock_quantity_searchList.xlsx_1506070953993"
		, offset_count : 0
		, _storage_key : "::1_62612_1506070955972"
	}
 * </code>
 */
var fileDataInfo = {};

/**
 * File Data를 Parsing하는 함수;
 * fileDataInfo를 참조해 작동한다.
 * @function
 * @param {String} _storage_key
 */
window.b2link.fileReader.single__ArrayBuffer = function( _storage_key )
{
	

	if( !fileDataInfo.data )
	{
		console.log( "File not exist" );
		return;
	}

	//--------------------------------------------------;
	fileDataInfo.chunkSize = 1024 * 1024;
	fileDataInfo.offset = fileDataInfo.offset || 0;
	fileDataInfo.total_offset = parseInt( fileDataInfo.data.size / fileDataInfo.chunkSize );
	fileDataInfo._storage_key = fileDataInfo._storage_key || "";
	//--------------------------------------------------;

	var reader = new FileReader();

	var blob = fileDataInfo.data.slice( fileDataInfo.offset, fileDataInfo.chunkSize + fileDataInfo.offset );



	//--------------------------------------------------;
	var evt_abort = function( e ){
		

		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		reader.removeEventListener( "loadend", evt_loadend, false );
		reader.removeEventListener( "loadstart", evt_loadstart, false );
		reader.removeEventListener( "progress", evt_progress, false );

		
	};
	var evt_error = function( e ){
		

		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		reader.removeEventListener( "loadend", evt_loadend, false );
		reader.removeEventListener( "loadstart", evt_loadstart, false );
		reader.removeEventListener( "progress", evt_progress, false );

		
	};
	var evt_load = function( e ){
		

		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		//reader.removeEventListener( "loadend", evt_loadend, false );
		//reader.removeEventListener( "loadstart", evt_loadstart, false );
		//reader.removeEventListener( "progress", evt_progress, false );

		
	};
	var evt_loadend = function( e ){
		

		console.log( e );

		/*/
		var s = new Uint8Array( reader.result );
		fileDataInfo.offset += s.length;
		/*/
		fileDataInfo.offset += reader.result.byteLength;
		//*/

		console.log( fileDataInfo.offset + "/" + fileDataInfo.data.size + " -- " + fileDataInfo.offset_count );
		//var update_progress = ( fileDataInfo.offset / fileDataInfo.data.size ) * 100;

		//window.b2link.fileReader.single__ArrayBuffer.upLoadFile( s.join( "," ), fileDataInfo._storage_key );
		//window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( s, fileDataInfo._storage_key );
		window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( reader.result, fileDataInfo._storage_key );

		//*///----------;
		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		reader.removeEventListener( "loadend", evt_loadend, false );
		reader.removeEventListener( "loadstart", evt_loadstart, false );
		reader.removeEventListener( "progress", evt_progress, false );

		reader.result.byteLength = 0;
		//reader.result.byteLength = null;
		reader = null;
		//s.length = 0;
		//s = null;
		blob = null;
		//*///----------;

		
	};
	var evt_loadstart = function( e ){
		//

		//reader.removeEventListener( "abort", evt_abort, false );
		//reader.removeEventListener( "error", evt_error, false );
		//reader.removeEventListener( "load", evt_load, false );
		//reader.removeEventListener( "loadend", evt_loadend, false );
		//reader.removeEventListener( "loadstart", evt_loadstart, false );
		//reader.removeEventListener( "progress", evt_progress, false );

		//
	};
	var evt_progress = function( e ){
		//

		//reader.removeEventListener( "abort", evt_abort, false );
		//reader.removeEventListener( "error", evt_error, false );
		//reader.removeEventListener( "load", evt_load, false );
		//reader.removeEventListener( "loadend", evt_loadend, false );
		//reader.removeEventListener( "loadstart", evt_loadstart, false );
		//reader.removeEventListener( "progress", evt_progress, false );

		//
	};
	//--------------------------------------------------;

	reader.addEventListener( "abort", evt_abort, false, 0, true );
	reader.addEventListener( "error", evt_error, false, 0, true );
	reader.addEventListener( "load", evt_load, false, 0, true );
	reader.addEventListener( "loadend", evt_loadend, false, 0, true );
	reader.addEventListener( "loadstart", evt_loadstart, false, 0, true );
	reader.addEventListener( "progress", evt_progress, false, 0, true );

	reader.readAsArrayBuffer( blob );

	
};

/**
 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
 * @function
 * @param {String} params FileData ArrayBuffer 문자열
 * @param {String} _storage_key
 */
window.b2link.fileReader.single__ArrayBuffer.upLoadFile = function( params, _storage_key )
{
	

	var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

	var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
		+ "_storage_key=" + fileDataInfo._storage_key
		+ "&file_id=" + fileDataInfo.id
		+ "&fileNm=" + fileDataInfo.data.name
		+ "&offset=" + fileDataInfo.offset_count
		+ "&total_offset=" + fileDataInfo.total_offset
		+ "&totalBytes=" + fileDataInfo.data.size;

	window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
		/*/
		, {
			onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
			, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
			, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
			, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
			, onstart : function( e ){ console.log( "---------- onstart ----------" ); console.log( e ); }
			, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
			, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
				//console.log( e );
				if ( e.readyState == 4 && e.status == 200 )
				{
					var r = JSON.parse( e.responseText );

					++fileDataInfo.offset_count;

					fileDataInfo._storage_key = r._storage_key;

					if( r.isEnd == 1 ){
						console.log( "FileUload_end!" )
						fileDataInfo = {};//스토리지초기화;
						return;
					}

					if( r ) window.b2link.fileReader.single__ArrayBuffer( r._storage_key );

				}
				else
				{
					console.log( 'readyState=' + e.readyState + ', status: ' + e.status );
				}

			}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
		}
		/*/
		, function( result ){
			

			if( !window.b2link.response.getResultStatus( result ) )
			{
				var a = window.smt_ui.message.error.modal();
				var elc = a[ 1 ];
					elc.headerText = "파일 업로더 에러";
					elc.messageText = "업로드 실패 - 몰러";

				debugger;
				return;
			}

			++fileDataInfo.offset_count;
			fileDataInfo._storage_key = result._storage_key;

			//파일 업로드 완료;
			if( 1 == result.isEnd )
			{
				console.log( "FileUload_end!" );
				fileDataInfo = {};//스토리지초기화;
				return;
			}

			/*///메모리 릭 때문에 시간 주기;
			window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
			/*/
			setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( result._storage_key ); }, 100 );
			//*/

			
		}
		//*/
	);

	
};

/**
 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
 * @function
 * @param {String} params FileData ArrayBuffer 문자열
 * @param {String} _storage_key
 */
window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary = function( params, _storage_key )
{
	

	var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

	var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
		+ "_storage_key=" + fileDataInfo._storage_key
		+ "&file_id=" + fileDataInfo.id
		+ "&fileNm=" + fileDataInfo.data.name
		+ "&offset=" + fileDataInfo.offset_count
		+ "&total_offset=" + fileDataInfo.total_offset
		+ "&totalBytes=" + fileDataInfo.data.size;

	window.b2link_service.common._fn_req_POST__ArrayBuffer( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
		, function( result ){
			

			if( !window.b2link.response.getResultStatus( result ) )
			{
				var a = window.smt_ui.message.error.modal();
				var elc = a[ 1 ];
					elc.headerText = "파일 업로더 에러";
					elc.messageText = "업로드 실패 - 몰러";

				debugger;
				return;
			}

			++fileDataInfo.offset_count;
			fileDataInfo._storage_key = result._storage_key;

			//파일 업로드 완료;
			if( 1 == result.isEnd )
			{
				console.log( "FileUload_end!" );
				fileDataInfo = {};//스토리지초기화;
				return;
			}

			//*///메모리 릭 때문에 시간 주기;
			window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
			/*/
			setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( result._storage_key ); }, 100 );
			//*/

			
		}
		//*/
	);

	
};

/**
 * Input File의 데이터를 가져오는 함수 - fileDataInfo의 기조데이터를 작성한다.
 * @function
 * @param {Event} event
 */
window.b2link.fileReader.single__ArrayBuffer.openFile = function( event )
{
	

	var input = event.target;

	var file = input.files[ 0 ];

	fileDataInfo.data = file;
	fileDataInfo.offset_count = 0;
	fileDataInfo.dateTime = Date.now();
	fileDataInfo.id = file.name + "_" + fileDataInfo.dateTime;

	
};









/**
 * 파일을 업로드 하기위해 정보를 저장하는 변수;
 * @property {Object}
 * <code>
	{
		data : {
			lastModified : 1505469803008
			, lastModifiedDate : Fri Sep 15 2017 19:03:23 GMT+0900 ( 대한민국 표준시 ){}
			, name : "stock_quantity_searchList.xlsx"
			, size : 1337285
			, type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			, webkitRelativePath : ""
		}
		, dateTime : 1506070953993
		, id : "stock_quantity_searchList.xlsx_1506070953993"
		, offset_count : 0
		, _storage_key : "::1_62612_1506070955972"
	}
 * </code>
 */
var fileDataInfo = {};

/**
 * File Data를 Parsing하는 함수;
 * fileDataInfo를 참조해 작동한다.
 * @function
 * @param {String} _storage_key
 */
window.b2link.fileReader.single__ArrayBuffer = function( _storage_key )
{
	

	if( !fileDataInfo.data )
	{
		console.log( "File not exist" );
		return;
	}

	//--------------------------------------------------;
	fileDataInfo.chunkSize = 1024 * 1024;
	fileDataInfo.offset = fileDataInfo.offset || 0;
	fileDataInfo.total_offset = parseInt( fileDataInfo.data.size / fileDataInfo.chunkSize );
	fileDataInfo._storage_key = fileDataInfo._storage_key || "";
	//--------------------------------------------------;

	var reader = new FileReader();

	var blob = fileDataInfo.data.slice( fileDataInfo.offset, fileDataInfo.chunkSize + fileDataInfo.offset );

	//--------------------------------------------------;
	var evt_abort = function( e ){
		

		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		reader.removeEventListener( "loadend", evt_loadend, false );
		reader.removeEventListener( "loadstart", evt_loadstart, false );
		reader.removeEventListener( "progress", evt_progress, false );

		
	};
	var evt_error = function( e ){
		

		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		reader.removeEventListener( "loadend", evt_loadend, false );
		reader.removeEventListener( "loadstart", evt_loadstart, false );
		reader.removeEventListener( "progress", evt_progress, false );

		
	};
	var evt_load = function( e ){
		

		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		//reader.removeEventListener( "loadend", evt_loadend, false );
		//reader.removeEventListener( "loadstart", evt_loadstart, false );
		//reader.removeEventListener( "progress", evt_progress, false );

		
	};
	var evt_loadend = function( e ){
		

		console.log( e );

		/*/
		var s = new Uint8Array( reader.result );
		fileDataInfo.offset += s.length;
		/*/
		fileDataInfo.offset += reader.result.byteLength;
		//*/

		console.log( fileDataInfo.offset + "/" + fileDataInfo.data.size + " -- " + fileDataInfo.offset_count );
		//var update_progress = ( fileDataInfo.offset / fileDataInfo.data.size ) * 100;

		//window.b2link.fileReader.single__ArrayBuffer.upLoadFile( s.join( "," ), fileDataInfo._storage_key );
		//window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( s, fileDataInfo._storage_key );
		window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( reader.result, fileDataInfo._storage_key );

		//*///----------;
		reader.removeEventListener( "abort", evt_abort, false );
		reader.removeEventListener( "error", evt_error, false );
		reader.removeEventListener( "load", evt_load, false );
		reader.removeEventListener( "loadend", evt_loadend, false );
		reader.removeEventListener( "loadstart", evt_loadstart, false );
		reader.removeEventListener( "progress", evt_progress, false );

		reader.result.byteLength = 0;
		reader.result.byteLength = null;
		reader = null;
		//s.length = 0;
		//s = null;
		blob = null;
		//*///----------;

		
	};
	var evt_loadstart = function( e ){
		//

		//reader.removeEventListener( "abort", evt_abort, false );
		//reader.removeEventListener( "error", evt_error, false );
		//reader.removeEventListener( "load", evt_load, false );
		//reader.removeEventListener( "loadend", evt_loadend, false );
		//reader.removeEventListener( "loadstart", evt_loadstart, false );
		//reader.removeEventListener( "progress", evt_progress, false );

		//
	};
	var evt_progress = function( e ){
		//

		//reader.removeEventListener( "abort", evt_abort, false );
		//reader.removeEventListener( "error", evt_error, false );
		//reader.removeEventListener( "load", evt_load, false );
		//reader.removeEventListener( "loadend", evt_loadend, false );
		//reader.removeEventListener( "loadstart", evt_loadstart, false );
		//reader.removeEventListener( "progress", evt_progress, false );

		//
	};
	//--------------------------------------------------;

	reader.addEventListener( "abort", evt_abort, false, 0, true );
	reader.addEventListener( "error", evt_error, false, 0, true );
	reader.addEventListener( "load", evt_load, false, 0, true );
	reader.addEventListener( "loadend", evt_loadend, false, 0, true );
	reader.addEventListener( "loadstart", evt_loadstart, false, 0, true );
	reader.addEventListener( "progress", evt_progress, false, 0, true );

	reader.readAsArrayBuffer( blob );

	
};

/**
 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
 * @function
 * @param {String} params FileData ArrayBuffer 문자열
 * @param {String} _storage_key
 */
window.b2link.fileReader.single__ArrayBuffer.upLoadFile = function( params, _storage_key )
{
	

	var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

	var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
		+ "_storage_key=" + fileDataInfo._storage_key
		+ "&file_id=" + fileDataInfo.id
		+ "&fileNm=" + fileDataInfo.data.name
		+ "&offset=" + fileDataInfo.offset_count
		+ "&total_offset=" + fileDataInfo.total_offset
		+ "&totalBytes=" + fileDataInfo.data.size;

	window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
		/*/
		, {
			onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
			, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
			, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
			, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
			, onstart : function( e ){ console.log( "---------- onstart ----------" ); console.log( e ); }
			, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
			, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
				//console.log( e );
				if ( e.readyState == 4 && e.status == 200 )
				{
					var r = JSON.parse( e.responseText );

					++fileDataInfo.offset_count;

					fileDataInfo._storage_key = r._storage_key;

					if( r.isEnd == 1 ){
						console.log( "FileUload_end!" )
						fileDataInfo = {};//스토리지초기화;
						return;
					}

					if( r ) window.b2link.fileReader.single__ArrayBuffer( r._storage_key );

				}
				else
				{
					console.log( 'readyState=' + e.readyState + ', status: ' + e.status );
				}

			}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
		}
		/*/
		, function( result ){
			

			if( !window.b2link.response.getResultStatus( result ) )
			{
				var a = window.smt_ui.message.error.modal();
				var elc = a[ 1 ];
					elc.headerText = "파일 업로더 에러";
					elc.messageText = "업로드 실패 - 몰러";

				debugger;
				return;
			}

			++fileDataInfo.offset_count;
			fileDataInfo._storage_key = result._storage_key;

			//파일 업로드 완료;
			if( 1 == result.isEnd )
			{
				console.log( "FileUload_end!" );
				fileDataInfo = {};//스토리지초기화;
				return;
			}

			/*///메모리 릭 때문에 시간 주기;
			window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
			/*/
			setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( result._storage_key ); }, 100 );
			//*/

			
		}
		//*/
	);

	
};

/**
 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
 * @function
 * @param {String} params FileData ArrayBuffer 문자열
 * @param {String} _storage_key
 */
window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary = function( params, _storage_key )
{
	

	var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

	var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
		+ "_storage_key=" + fileDataInfo._storage_key
		+ "&file_id=" + fileDataInfo.id
		+ "&fileNm=" + fileDataInfo.data.name
		+ "&offset=" + fileDataInfo.offset_count
		+ "&total_offset=" + fileDataInfo.total_offset
		+ "&totalBytes=" + fileDataInfo.data.size;

	window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
		, function( result ){
			

			if( !window.b2link.response.getResultStatus( result ) )
			{
				var a = window.smt_ui.message.error.modal();
				var elc = a[ 1 ];
					elc.headerText = "파일 업로더 에러";
					elc.messageText = "업로드 실패 - 몰러";

				debugger;
				return;
			}

			++fileDataInfo.offset_count;
			fileDataInfo._storage_key = result._storage_key;

			//파일 업로드 완료;
			if( 1 == result.isEnd )
			{
				console.log( "FileUload_end!" );
				fileDataInfo = {};//스토리지초기화;
				return;
			}

			//*///메모리 릭 때문에 시간 주기;
			window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
			/*/
			setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( result._storage_key ); }, 100 );
			//*/

			
		}
		//*/
	);

	
};

/**
 * Input File의 데이터를 가져오는 함수 - fileDataInfo의 기조데이터를 작성한다.
 * @function
 * @param {Event} event
 */
window.b2link.fileReader.single__ArrayBuffer.openFile = function( event )
{
	

	var input = event.target;

	var file = input.files[ 0 ];

	fileDataInfo.data = file;
	fileDataInfo.offset_count = 0;
	fileDataInfo.dateTime = Date.now();
	fileDataInfo.id = file.name + "_" + fileDataInfo.dateTime;

	
};







//

/**
* 파일을 업로드 하기위해 정보를 저장하는 변수;
* <code>
	{
		data : {
			lastModified : 1505469803008
			, lastModifiedDate : Fri Sep 15 2017 19:03:23 GMT+0900 (대한민국 표준시)
			, name : "stock_quantity_searchList.xlsx"
			, size : 1337285
			, type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			, webkitRelativePath : ""
		}
		, dateTime : 1506070953993
		, id : "stock_quantity_searchList.xlsx_1506070953993"
		, _storage_key : "::1_62612_1506070955972"
	}
* </code>
*/
var fileDataInfo = {};

/**
 * File Data를 Parsing하는 함수;
 * fileDataInfo를 참조해 작동한다.
 */
window.b2link.fileReader.single__DataURL = function()
{
	
    if( !fileDataInfo.data ){ console.log("File not exist"); return;}

	var reader = new FileReader();
		reader.addEventListener( "abort", function( e ){ console.log( "---------- abort ----------" ); console.log( e ); }, false, 0, true );
		reader.addEventListener( "error", function( e ){ console.log( "---------- error ----------" ); console.log( e ); }, false, 0, true );
		reader.addEventListener( "load", function( e ){ console.log( "---------- load ----------" ); console.log( e ); }, false, 0, true );
		reader.addEventListener( "loadend", function( e ){ console.log( "---------- loadend ----------" ); console.log( e );

			var data = reader.result;
			var dataType = dataURL.substring( 0, data.indexOf( "base64," ) + 7 );
			var dataURL = data.replace( dataType, "" );
			console.log( "DataType : ", dataType );
			console.log( "DataURL : ", dataURL);
			window.b2link.fileReader.single__DataURL.upLoadFile( dataURL, fileDataInfo._storage_key );

		}, false, 0, true );
		reader.addEventListener( "loadstart", function( e ){ console.log( "---------- loadstart ----------" ); console.log( e ); }, false, 0, true );
		reader.addEventListener( "progress", function( e ){ console.log( "---------- progress ----------" ); console.log( e ); }, false, 0, true );

		reader.readAsDataURL( fileDataInfo.data );

	
};

/**
 * textAsDataURL로 파싱된 데이터를 라우터에 Request 하는 함수;
 * @param  {String} params      
 * @param  {String} _storage_key
 */
window.b2link.fileReader.single__DataURL.upLoadFile =  function( params, _storage_key ){
    var url = "/file_upload_textAsdataURL?fileNm=" + fileNm + "&totalBytes=" + fileSize;

	var url = "/file_upload__single_textAsdataURL?fileNm="
	+ fileDataInfo.data.name + "&totalBytes=" + fileDataInfo.data.size + "&_storage_key=" + fileDataInfo._storage_key
	+ "&file_id=" + fileDataInfo.id

	window.b2link_service.common._fn_req_POST__Str(
		url
		, params
		//, JSON.stringify({ data : window.file_sigle_upload.result })
		, {
			//"Content-type" : "text/plain"
			"Content-type" : "application/x-www-form-urlencoded"
		}//,...
		, {
			onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
			, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
			, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
			, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
			, onstart : function( e ){ console.log("---------- onstart ----------" ); console.log( e ); }
			, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
			, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
				//console.log( e );
				if (e.readyState == 4 && e.status == 200)
				{
					var r = e.responseText;
					console.log( r ,"FileUpload_End!")
					fileDataInfo = {};//스토리지초기화;
				}
				else
				{
					console.log('readyState=' + e.readyState + ', status: ' + e.status);
				}

			}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
		}
	);
}

/**
 * Input File의 데이터를 가져오는 함수 - fileDataInfo의 기조데이터를 작성한다.
 * @param  {Event} event
 */
window.b2link.fileReader.single__DataURL.openFile = function(event) {
	var input = event.target;

	var file =  input.files[ 0 ];

	window.service.file_upload.file_upload__single_form_textAsdataURL.infoAdd( file );

	fileDataInfo.data = file;
	// fileDataInfo.offset_count = 0
	fileDataInfo.dateTime = Date.now()
	fileDataInfo.id = file.name + "_" + fileDataInfo.dateTime
};


//





//


/**
 * 파일을 삭제 한다.
 * 단일 파일 삭제 or 다중 파일 삭제
 * @function
 * @param {String or Array} url
 */
window.b2link.fileServer.delete = function( url )
{
	

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;
	var _server_url = _fileServerHost
		+ "/delete?scode=" + _scode
		+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	if( typeof url === "string" ) url = [ url ];

	window.b2link.xhr.req_POST_Str(
		_server_url
		, JSON.stringify({ scode : _scode,  files : url })
		, { "Content-type" : "application/json" }
		, {
			onabort : function( e ){ console.log( e ); }
			, onerror : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ return false; }
			, onload : function( e ){ console.log( e ); }
			, onloadend : function( e ){ console.log( e ); /* TODO : 모달 로딩 열기 */ return true; }
			, onstart : function( e ){ console.log( e ); }
			, onprogress : function( e ){ console.log( e ); }
			, onreadystatechange : function( e ){}
			, ontimeout : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ }
		}
	);

	
};


//




//


/**
 * 파일을 다운로드 한다.
 * @function
 * @param {String} url
 */
window.b2link.fileServer.download = function( url )
{
	

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	/*/
	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
		url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	var fileName = url.split( "/" ).pop();

	//Construct the a element;
	var link = document.createElement( "a" );
	link.download = fileName;
	link.target = "_blank";

	//Construct the uri;
	link.href = url;
	document.body.appendChild( link );
	link.click();

	//Cleanup the DOM;
	document.body.removeChild( link );
	delete link;
	/*/

	//20170818 Rh2 수정 - a 태그 사용할 이유 없음;
	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
	{
		//20170818 Rh2 수정 - download=1 조건 들어가면 파일명에 한글 깨짐;
		//url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		//url = url + "?scode=" + _scode + "&" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		url = url + "?scode=" + _scode;
	}

	window.b2link.file.download( url );
	//*/

	
};


//




//


/**
 * 여러 파일을 zip 파일로 묶어서 다운로드 한다.
 * @function
 * @param {Array} urls
 * @param {String} zipFileName
 */
window.b2link.fileServer.downloads = function( urls, zipFileName )
{
	

	if( !urls ) return false;

	if( !Array.isArray )
	{
		Array.isArray = function( arg ){ return Object.prototype.toString.call( arg ) === '[object Array]'; };
	}

	if( !Array.isArray( urls ) )
	{
		console.error("window.b2link.fileServer.downloads --- urls is not object Array.");
		return false;
	}

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	var _server_url = _fileServerHost
		+ "/downloads?scode=" + _scode
		+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	window.b2link.xhr.req_POST_Str(
		_server_url
		, JSON.stringify( { files : urls, zipFileName : zipFileName } )
		, { "Content-type" : "application/json" }
		, {
			onabort : function( e ){ console.log( e ); }
			, onerror : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ return false; }
			, onload : function( e ){ console.log( e ); }
			, onloadend : function( e ){
				//console.log( e );

				//var type = e.target.getResponseHeader( "Content-Type" );
				//var blob = new Blob( [ this.response ], {type : type });

				//var URL = window.URL || window.webkitURL;
				//var downloadUrl = URL.createObjectURL( blob );
				var downloadUrl = _fileServerHost
					+ "/downloads?scode=" + _scode
					+ "&realFileName=" + this.response
					+ "&fileName=" + zipFileName
					+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

				//Construct the a element;
				var link = window.document.createElement( "a" );
					link.download = zipFileName;
					link.target = "_blank";

				//Construct the uri;
				link.href = downloadUrl;
				window.document.body.appendChild( link );
				link.click();

				//Cleanup the DOM;
				window.document.body.removeChild( link );
				delete link;

				//URL.revokeObjectURL( downloadUrl );
				return true;
			}
			, onstart : function( e ){ console.log( e ); /* TODO : 모달 로딩 열기 */ }
			, onprogress : function( e ){ console.log( e ); }
			, onreadystatechange : function( e ){}
			, ontimeout : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ }
		}
	);

	
};


//




//


/**
 * 파일을 열기 한다.
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.fileServer.open = function( url )
{
	

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
	{
		url += "?scode=" + _scode
			+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
	}

	window.open( url );

	
};


//







/**
 * <div> Element의 tbodyren을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @param {String} classname
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody = function( div, a , classname )
{
	

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var tbody = window.b2link.element.getElementByClassName( div, "tbody_" + classname );
				tbody.innerHTML = window.b2link.html_tbody.apply_child( tbody, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	
	return div;
};










/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} arr [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_repeat = function( div, arr )
{
	

	if ( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if ( 0 === arr.length ) { div.innerHTML = ""; return div; }

	var r = "";
	var i=0, iLen=arr.length;
	for( ; i<iLen; ++i )
	{
		r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, [ arr[ i ] ] );
	}

	if( r ) div.innerHTML = r;

	
	return div;
};






//
//


/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child__multi = function( tbody, a )
{
	//

	if( !tbody.__originalInnerHTML ) tbody.__originalInnerHTML = tbody.innerHTML;

	var argsLen = arguments.length;
	var dataLen = a.length;

	if( 0 == dataLen ){ tbody.innerHTML = ""; return tbody; }

	var i=2, iLen=argsLen;
	for( ; i<iLen; ++i )
		if( dataLen != arguments[ i ].length )
		{
			window.TtwLog.error( "window.b2link.html_tbody.apply_child__multi Error : 데이터들의 갯수가 일치하지 않음" );
			return;
		}

	var etcDatas = [];
	var i=2, iLen=argsLen;
	for( ; i<iLen; ++i ) etcDatas.push( arguments[ i ] );

	var f0 = SUtilString.applyBraceStrFromObj;
	var r = "";
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var ir = f0( tbody.__originalInnerHTML, a[ i ] );
		var jo;
		var j=0, jLen=etcDatas.length;
		for( ; j<jLen; ++j )
		{
			jo = etcDatas[ j ];
			ir = f0( ir, jo[ i ] );
		}

		r += ir;
	}

	//console.log( r );

	if( r ) tbody.innerHTML = r;

	//
	return tbody;
};


//







/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.b2link.math.isNumber = function( n )
{
	//

	if( typeof( n ) == "string" )
	{
		n -= 0;

		if( isNaN( n ) ) return false;
		return true;
	}

	if( typeof( n ) == "number" )
	{
		return true;
	}

	//

	return false;
};










/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.b2link.math.isUint = function( n )
{
	//

	if( typeof( n ) == "string" || typeof( n ) == "number" )
	{
		n += "";

		if( isNaN( n ) ) return false;
		else
		{
			if( n.indexOf( "." ) > - 1 ) return false;
			else
			{
				if( n < 0 ) return false;
				return true;
			}
		}
	}

	//

	return false;
};






//
//


/**
 * 필수 키 값 목록을 가지고 대상 오브젝트의 hasOwnProperty를 통해 존재 여부를 체크한다.
 * @function
 * @param {Object} t 필수 키 값 목록을 가지고 체크할 대상 오브젝트
 * @param {Array} a hasOwnProperty의 대상이될 필수 키값 목록
 * @return {Boolean}
 * @example
 * <code>
 * </code>
 */
window.b2link.obj.check_RequiredValueHasOwnProperty = function( t, a )
{
	//

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( !t.hasOwnProperty( a[ i ] ) )
		{
			debugger;
			//
			return 0;
		}
	}

	//
	return 1;
};


//



//
//


/**
 * d의 자료구조를 t에 복제 한다.
 * @function
 * @param {Object} t
 * @param {Object} d
 * @example
 * <code>
	var o0 = { a : 1, b : { c : { d : 55 }, asd : [ 1,2,3,4,5 ], ggg : [ { d: 5} ] }, bb : false, gg : "" };
	var o1 = {};

	window.b2link.obj.copyStructure( o1, o0 );

	JSON.stringify( o1, null, "\t" );
 * </code>
 */
window.b2link.obj.copyStructure = function( t, d )
{
	//

	var io;
	for( var s in d )
	{
		io = d[ s ];
		if( "object" == typeof io )
		{
			t[ s ] = {};
			window.b2link.obj.copyStructure( t[ s ], io );
		}
		else t[ s ] = io;
	}

	//
};


//



//
//


(function(){

	/**
	 * SYS0030(BrandPortal) 전용 아마 사용안하는 듯함
	 * 다른곳에서 사용 금지 window.b2link.response.getResultStatus를 사용
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.b2link.response.getAPIResultStatus = function( result )
	{
		//
		//
		//

		if( "SYS0030" != window.b2link.STATIC.CONFIG.URL.SCODE )
		{
			window.b2link_ui.message.error( "window.b2link.response.getAPIResultStatus 관련 전달 메세지" );
			window.b2link_ui.message.error( "SYS0030(BrandPortal) 전용 아마 사용안하는 듯함" );
			window.b2link_ui.message.error( "다른곳에서 사용 금지 window.b2link.response.getResultStatus를 사용" );
		}

		try
		{
			if ( result.status === "success" ) {
				return 1;
			} else {
				return 0;
			}

		}
		catch( er )
		{
			window.JamesLog.error( "window.b2link.response.getAPIResultStatus Error : " + er );
		}

		//
		//

		//
		return result;
	};
})();


//




//
//


(function(){

	var _result_r = {
		0 : 1
		//, 1 : 1//사용안함;
		, 2 : 0//Bad Value;
		, 3 : 0//OBSOLETE_DuplicateKey;
		, 13 : 0//Unauthorized;
		, 18 : 0//AuthenticationFailed;
		, 86 : 0//IndexKeySpecsConflict;

		, "B21001601" : 0//mid가 존재하지 않음;
		, "B21001602" : 0//비밀번호 인증 5회 이상 틀림;
		, "B21001603" : 0//password가 맞지 않음;
		, "B21001604" : 0//승인되지 않은 Authority Code;
	};

	var _fnStore = {
		0 : 0
		, 1 : 1
		, 18 : 0//AuthenticationFailed;
		, "false" : 0
		, "true" : 1

		, "result.r" : function( result ){
			return _result_r[ result.r ];
		}
	};

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.b2link.response.getResultStatus = function( result )
	{
		//
		//
		//

		try
		{
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ];
				
				//
				return r;
			}

			//MongoDB 표준 에러 코드를 준수해야한다;
			//{ r : NaN, m : "" };
			if( result.hasOwnProperty( "r" ) )
			{
				if( _fnStore.hasOwnProperty( "result.r" ) )
				{
					var r = _fnStore[ "result.r" ]( result );
					
					//
					return r;
				}
			}

			//삭제하기 - 20170514 - 송선우 - 사용되는 모든 소스에서 제거하기;
			//{ state : NaN, ??? : ?? };
			if( result.hasOwnProperty( "state" ) )
			{
				var r = _fnStore[ result.state ];
				
				//
				return r;
			}
		}
		catch( er )
		{
			window.TtwLog.error( "window.b2link.response.getResultStatus Error : " + er );
		}

		//
		//

		//
		return result;
	};
})();


//



 
//
//


(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - B2LiNK-SessionServer-Dev;
		//  _instance : [ "http://localhost:30000/", "http://localhost:30000/" ]
		//, _instance__system_label : [ "http://localhost:30000/", "http://localhost:30000/" ]
		//, _query_public : [ "http://localhost:30000/", "http://localhost:30000/" ]


		//authority	: [ "http://localhost:30000/", "http://localhost:30000/" ]

		//, member	: [ "http://localhost:30000/", "http://localhost:30000/" ]//B2LiNK-SessionServer-Dev;
		//, member	: [ "http://localhost:45320/", "http://localhost:45320/" ]//B2LiNK-BrandPortal-Dev;
		//, member	: [ "http://localhost:49320/", "http://localhost:49320/" ]//B2LiNK-B2Ker-Dev;
		//--------------------------------------------------[ E ] - B2LiNK-SessionServer-Dev;


		//--------------------------------------------------[ S ] - B2LiNK-FileServer-Dev;
		//, server_file	: [ "http://localhost:49322/", "http://localhost:49322/" ]
		//, server_file	: [ "http://localhost:45320/", "http://localhost:45320/" ]//B2LiNK-BrandPortal-Dev;
		//, server_file	: [ "http://localhost:49320/", "http://localhost:49320/" ]//B2LiNK-B2Ker-Dev;
		//--------------------------------------------------[ E ] - B2LiNK-FileServer-Dev;


		//--------------------------------------------------[ S ] - B2LiNK-B2Ker-Dev;
		//, _instance : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, _query_public : [ "http://localhost:49320/", "http://localhost:49320/" ]


		//, administrator	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, brand			: [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, category		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, company		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, contract_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, contract_sale		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, information	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, list_static	: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, partner		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, product		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, schedule		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, settlement	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, stock  		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, transaction_purchase_order_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, transaction_purchase_order_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, transaction_purchase_return : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction_quotation_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quotation_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quote_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quote_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;

		//, transaction_sale_return : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction_report_release : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_report_wearing : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;

		//, transaction_stock_release : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//, transaction_stock_wearing : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//--------------------------------------------------[ E ] - B2LiNK-B2Ker-Dev;


		//--------------------------------------------------[ S ] - B2LiNK-Brand_Portal-Dev;
		//, _instance : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//, _query_public : [ "http://localhost:45320/", "http://localhost:45320/" ]

		//, baidu_index : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//, graph : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//, graph_data : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//, red_post : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//--------------------------------------------------[ E ] - B2LiNK-Brand_Portal-Dev;


		//--------------------------------------------------[ S ] - Mobilian-DoorLockCtrlSystem;
		  _instance : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, _query_public : [ "http://localhost:49320/", "http://localhost:49320/" ]

		, authority : [ "http://localhost:49320/", "http://localhost:49320/" ]

		, category : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, doorlock : [ "http://localhost:49320/", "http://localhost:49320/" ]

		, member : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//--------------------------------------------------[ E ] - Mobilian-DoorLockCtrlSystem;
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} db_nm
	 * @return {String} url
	 */
	window.b2link.url.getServerURLByDB = function( db_nm )
	{
		if( !_server[ db_nm ] ) debugger;//없는 db 이름이 들어옴;

		var r;

		if( _idxMaxCount[ db_nm ] > _idx[ db_nm ] )
		{
			r = _server[ db_nm ][ _idx[ db_nm ] ];
			++_idx[ db_nm ];
		}
		else
		{
			_idx[ db_nm ] = 0;
			r = _server[ db_nm ][ _idx[ db_nm ] ];
		}

		return r;
	};

})();


//



//
//


//20170906_1501;
//SYS00***_APIServer를 사용하길 권장함;
//
//session_server, b2ker_api_server, brand_portal_api_server, api_server등 삭제 예정임.;
//
//excel_server, file_server등도 시스템 코드로 교체 예정;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - 공용 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev;
		//SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30001", "http://localhost:30002" ]
		//SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]
		//, session_server : [ "http://localhost:30000", "http://localhost:30001", "http://localhost:30002" ]//B2LiNK-SessionServer-Dev;
		//, session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		//, session_server : [ "http://localhost:45320", "http://localhost:45320", "http://localhost:45320" ]//B2LiNK-BrandPortal-Dev;
		//, session_server : [ "http://localhost:49320", "http://localhost:49320", "http://localhost:49320" ]//B2LiNK-B2Ker-Dev;

		SYS0010_APIServer : [ "http://localhost:49320", "http://localhost:49320", "http://localhost:49320" ]//B2LiNK-SessionServer-Dev;
		, session_server : [ "http://localhost:49320", "http://localhost:49320", "http://localhost:49320" ]//B2LiNK-SessionServer-Dev;

		, SYS0015_WebServer : [ "http://211.251.236.148:49323", "http://211.251.236.148:49323", "http://211.251.236.148:49323" ]//Development-Components-UI;


		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev...;
		//, file_server : [ "http://localhost:49322", "http://localhost:49322" ]
		//--------------------------------------------------[ E ] - 공용 서버;


		//--------------------------------------------------[ S ] - 비지니스 시스템 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, SYS0020_APIServer : [ "http://localhost:49320", "http://localhost:49320" ]
		//, b2ker_api_server : [ "http://localhost:49320", "http://localhost:49320" ]

		//사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		//, SYS0030_APIServer : [ "http://localhost:45320", "http://localhost:45320" ]
		//, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		//--------------------------------------------------[ E ] - 비지니스 시스템 서버;


		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, excel_server : [ "http://localhost:48320", "http://localhost:48320" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, webhook_server : [ "http://localhost:47320", "http://localhost:47320" ]
		, webhook_server : [ "http://localhost:49320", "http://localhost:49320" ]
		//, webhook_server : [ "http://222.239.10.122:47320", "http://222.239.10.122:47320" ]
		//, webhook_server : [ "http://222.239.10.123:47320", "http://222.239.10.123:47320" ]
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	window.b2link.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();


//






//20170504 박종하 prototype 제거 해야 함.
/**
 * @function
 * @param {String} s_number
 * @return {Number}
 */
window.b2link.util.convertCommaSeparatedNumberToFloat= function( s_number )
{
	//
	try
	{
		s_number = s_number.toString();
		var r;
		var negative = 1;
		if( s_number[0] === "-" )
		{
			negative = -1;
		}
		//소수점이 있을 경우;
		if(  0 < s_number.indexOf( "." ) )
		{
			var a = s_number.split( "." );
			r = a[ 0 ].replace( window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2, "" ) + "." + a[ 1 ];
		}
		else r = s_number.replace( window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2, "" );

		//
		return parseFloat( r ) * negative;

	}catch( e )
	{
		window.b2link_ui.message.error( "잘못된 값이 입력되었습니다.");
		return NaN;
	}
};










/**
 * @function
 * @param {String} s_number money
 * @return {String} money
 */
window.b2link.util.getMoney = function( s_number )
{
	//

	/*/
	var money = s_number;

	if( !isNaN( s_number ) )
	{
		var num = s_number.toString().split( "." );
			num[ 0 ] = num[ 0 ].toString().replace( window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1, "," );

		money = num[ 0 ] + parseFloat( "0." + ( num[ 1 ] != null ? num[ 1 ] : "0.00" ) ).toFixed( 2 ).replace( "0.", "." );
	}

	//
	return money;
	//*/

	return parseFloat( s_number ).toLocaleString( "en" );
};







//
//


/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.b2link.util.importJSsFromScriptElement = function( t )
{
	//

	var f0 = window.b2link.util.importJS;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link.util.importJSsFromScriptElement Error : " + e );
			debugger;
		}
	}

	//
};


//



//
//


/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.b2link.util.importJSsFromScriptElement__Reuse = function( t )
{
	//

	var f0 = window.b2link.util.importJS__Reuse;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link.util.importJSsFromScriptElement__Reuse Error : " + e );
			debugger;
		}
	}

	//
};


//



//
//


(function(){

	var _ = {};

	/**
	 * *.js를 불러와서 실행시킨다.
	 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
	 * @function
	 * @param {String} url
	 * @return {*}
	 */
	window.b2link.util.importJS__Reuse = function( url )
	{
		//

		if( _.hasOwnProperty( url ) )
		{
			if( _[ url ] ) return _[ url ];
			return null;
		}
		else
		{
			try
			{
				var r = SUtilTemplateHTML.addJS__URL( url, arguments );
			}
			catch( e )
			{

			}

			_[ url ] = r;
			//console.log( r );

			//
			return r;
		}
	};
})();


//







/**
 * @function
 * @param {String} url
 * @return {String} HTML Text
 */
window.b2link.util.includeHTML = function( url )
{
	//
	//

	return window.b2link.xhr.reqSync_String( url );
};







//
//


/**
 * Javascript의 자료타입 int를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.int = function( p )
{
	//
	//

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 == p.toString().indexOf( "." ) )
			return true;
	return false;
};


//



//
//


/**
 * Javascript의 자료타입 uint를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.uint = function( p )
{
	//
	//

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 < p )
			if( -1 == p.toString().indexOf( "." ) )
				return true;
	return false;
};


//



//
//


/**
 * Date InputElemehts Object Validation
 * @function
 * @param {Object} { y : 2017, m : 9, d : 10 }
 * @return {Boolean}
 */
window.b2link.validation_date.dateObject__YMD = function( d )
{
	//

	var f = window.b2link_ui.message.error ? window.b2link_ui.message.error : window.TtwLog.error;

	if( 2015 < d.y && 2017 < d.y ){ f( "Year is not valid." ); return 0; }
	if( 0 < d.m && 13 > d.m){ f( "Month is not valid." ); return 0; }
	if( 0 < d.d && 31 > d.d ){ f( "Day is not valid." ); return 0; }
	//if( -1 < d.ho && 24 > d.ho ){ f( "Hour is not valid." ); return 0; }
	//if( -1 < d.mi && 60 > d.mi ){ f( "Minute is not valid." ); return 0; }
	//if( -1 < d.se && 60 > d.se ){ f( "Seconds is not valid." ); return 0; }
	//if( -1 < d.mil && 60 > d.mil ){ f( "Miliseconds is not valid." ); return 0; }

	//
	return 1;
};


//




//
//


/**
 * Date InputElemehts Object Validation
 * @function
 * @param {Object} { y : 2017, m : 9, d : 10, ho : 17, mi : 18, se 19 }
 * @return {Boolean}
 */
window.b2link.validation_date.dateObject__YMDHoMiSe = function( d )
{
	//

	var f = window.b2link_ui.message.error ? window.b2link_ui.message.error : window.TtwLog.error;

	if( 2015 > d.y || 2017 < d.y ){ f( "Year is not valid." ); return 0; }
	if( 0 > d.m || 12 < d.m){ f( "Month is not valid." ); return 0; }
	if( 0 > d.d && 31 < d.d ){ f( "Day is not valid." ); return 0; }
	if( 0 > d.ho && 24 < d.ho ){ f( "Hour is not valid." ); return 0; }
	if( 0 > d.mi && 59 < d.mi ){ f( "Minute is not valid." ); return 0; }
	if( 0 > d.se && 59 < d.se ){ f( "Seconds is not valid." ); return 0; }
	//if( 0 > d.mil && 59 > d.mil ){ f( "Miliseconds is not valid." ); return 0; }

	//
	return 1;
};


//




//
//


/**
 * MAC Address Validation
 * @function
 * @param {String} d EE-B6-A6-0E-C4-46
 * @return {Boolean}
 */
window.b2link.validation_input.addr_mac = function( d )
{
	//
	//

	if( 6 == d.split( "-" ).length ) return 1;
	return 0;
};


//








/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.exchange_rate = function( v, m )
{
	//

	m = m || "환율";

	var r = { r : 1, m : "" };
	var n = parseFloat( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }
	else if( 0 > n ){ r.r = 0; r.m = m + " 오입력"; return r; }

	//
	return r;
};






//
//


/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.id_currency = function( v, m )
{
	//

	m = m || "통화";
	
	var r = { r : 1, m : "" };
	
	if( !v ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//
	return r;
};


//




//
//


/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.notInputed = function( v, m )
{
	//

	m = m || "";

	var r = { r : 1, m : "" };

	if( !v ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//
	return r;
};


//




//
//


/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.price = function( v, m )
{
	//

	m = m || "금액";
	
	var r = { r : 1, m : "" };
	var n = parseFloat( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//
	return r;
};


//




//
//


/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.quantity = function( v, m )
{
	//

	m = m || "수량";
	
	var r = { r : 1, m : "" };
	var n = parseInt( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }
	if( 0 > n ){ r.r = 0; r.m = m + "이 음수가 입력됨"; return r; }


	//
	return r;
};


//








/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.country = function( t, m )
{
	//

	m = m || "국가";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};










/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.currency = function( t, m )
{
	//

	m = m || "통화";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};










/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.delivery_type = function( t, m )
{
	//

	m = m || "배송방식";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};






//
//


/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.notSelected = function( t, m )
{
	//

	m = m || "선택항목 ";

	var r = { r : 1, m : "" };

	if( 0 >= t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};


//



//
//


/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.tax_bill = function( t, m )
{
	//

	m = m || "세금계산서 발급여부";

	var r = { r : 1, m : "" };

	if( 0 > t.selectedIndex  ){ r.r = 0; r.m = m + " 미선택"; return r; }
	if( 2 < t.selectedIndex ){ r.r = 0; r.m = m + " - 잘못된 값을 선택"; return r; }
	
	

	//
	return r;
};


//



//
//


/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.trade_disposal = function( t, m )
{
	//

	m = m || "지급조건";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};


//







/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.trade_terms = function( t, m )
{
	//

	m = m || "거래조건";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//
	return r;
};










/**
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN

		, "protocol" : null

		, "evt_open" : function( ?? ){ console.log( "Open" ); debugger; arguments; }
		, "evt_close" : function( ?? ){ console.log( "Close" ); debugger; arguments; }
		, "evt_error" : function( ?? ){ console.log( "Error" ); debugger; arguments; }
		, "evt_message" : function( message ){ console.log( "Server Message : ", message ); debugger; arguments; }
	}
 * </code>
 * @return {WebSocket} global.REQUIRES.ws
 *
 * @example
 * <code>
	global.ws0 = global.b2link.websocket_client.connect({
		"host" : "localhost"
		, "port" : 42322

		, "protocol" : null

		, "evt_close" : function( code, data ){ console.log( "Close" ); debugger; arguments; }
		, "evt_error" : function(){ console.log( "Error" ); debugger; arguments; }
		, "evt_message" : function( message ){ console.log( "Server Message : ", message ); debugger; arguments; }
		, "evt_open" : function(){ console.log( "Open" ); debugger; arguments; }
	});
 * </code>
 */
global.b2link.websocket_client.connect = function( d )
{
	

	var t = new global.REQUIRES.ws( "ws://" + d.host + ":" + d.port );//clientWebSocket;

	var _evt_close  = d.evt_close  ? d.evt_close  : function( code, data ){ console.log( "Close" ); debugger; arguments; };
	var _evt_error  = d.evt_error  ? d.evt_error  : function(){ console.log( "Error" ); debugger; arguments; };
	var _evt_message= d.evt_message? d.evt_message: function( message ){ console.log( "Server Message : ", message ); debugger; arguments; };
	var _evt_open   = d.evt_open   ? d.evt_open   : function(){ console.log( "Open" ); debugger; arguments; };

	t.on( "close"  , _evt_close );
	t.on( "error"  , _evt_error );
	t.on( "message", _evt_message );
	t.on( "open"   , _evt_open );

	//Test Code;
	//setInterval( function(){ t.send( "끼룩끼룩 " + SUtilMath.random( 0, 10000 ) + "번째" ); }, 500 );

	
	return t;
};






//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkExtends

window.b2linkExtends = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkExtends



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkExtends.element;

window.b2linkExtends.element = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkExtends.element;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.h***;

/**
 * HTMLElement.style.display = "none";
 * @function
 * @param {Boolean} bRemove default:false
 * @return {HTMLElement}
 */
window.b2linkExtends.element.hide=function(e){return window.b2link.element.hide(this.__el),window.b2link.event.dispatchCE__HIDED_EL(this.__el,{_:this}),this.__el.parentElement&&e&&window.b2link.element.removeChild(this.__el.parentElement,this.__el),this.__el};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 */
window.b2linkExtends.element.hideAndModal=function(i){var n=i?i:this.__el;window.b2link.ui_modal.hide_transition(),window.b2link.element.hide(n),window.b2link.event.dispatchCE__HIDED_EL(n,{_:this}),window.b2link.ui_modal.removeChild(n)};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 * @param {Object} d
 * <code>
	{
		"bEffect" : false
	}
 * </code>
 */
window.b2linkExtends.element.hideAndModal_MoveBGCLastChild=function(n){window.b2linkExtends.element.hideAndModal_Sync(this.__el),window.b2link.ui_modal.move_BGContentLastChildToContent()};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 * @param {Object} d
 * <code>
	{
		"bEffect" : false
	}
 * </code>
 */
window.b2linkExtends.element.hideAndModal_MoveCurrentChildren=function(n){window.b2linkExtends.element.hideAndModal_Sync(this.__el),window.b2link.ui_modal.move_BGContentChildrenToContent()};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 */
window.b2linkExtends.element.hideAndModal_Sync=function(i){var n=i?i:this.__el;window.b2link.ui_modal.hide(),window.b2link.element.hide(n),window.b2link.event.dispatchCE__HIDED_EL(n,{_:this}),window.b2link.ui_modal.removeChild(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.h***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.s***;

/**
 * HTMLElement.style.display = "";
 * parentElement를 지정하면 appendChild를 한다.
 * @function
 * @param {HTMLElement} p parentElement
 * @return {HTMLElement}
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.show=function(_){return this.__el.parentElement||_||(_=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT?window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT:window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED),window.b2link.element.show(this.__el,_),window.b2link.event.dispatchCE__SHOWED_EL(this.__el,{_:this}),this.__el};

/**
 * Common Modal을 화면에 표출한 후 HTMLElement를 표출한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.showAndModal=function(n){var e=this.__el;window.b2link.ui_modal.appendChild(e,n),window.b2link.ui_modal.show_transition(),window.b2link.element.hide(e),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(e),clearTimeout(window.b2linkExtends.element.showAndModal._timeout0);var i=window.b2linkExtends.element.showAndModal._t;if(i&&i!=e){window.b2link.element.show(window.b2linkExtends.element.showAndModal._t);var t=e.style;if(t.position="absolute",e.__FULL_SIZE_MODE){var o=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement.offsetLeft+10,d=15,l=1;t.left=o+"px",t.right=d+"px",t.top=l+"px";var w=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth-10-d+"px";t.minWidth=t.maxWidth=w,window.b2link.event.dispatchCE__RESIZED_EL(e,null)}window.b2link.event.dispatchCE__SHOWED_EL(e,{_:this}),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(i)}window.b2linkExtends.element.showAndModal._t=e,window.b2linkExtends.element.showAndModal._timeout0=setTimeout(function(){window.b2link.element.show(e),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(e),window.b2link.event.dispatchCE__SHOWED_EL(e,{_:this})},300)},window.b2linkExtends.element.showAndModal._t=null,window.b2linkExtends.element.showAndModal._timeout0=0;

/**
 * Common Modal을 화면에 표출한 후 HTMLElement를 표출한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"bEffect" : false
	}
 * </code>
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.showAndModal_MoveCurrentChildren=function(e){var n=this.__el;window.b2link.ui_modal.appendChild_MoveCurrentChildren(n),window.b2link.ui_modal.show(),window.b2link.element.hide(n),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(n),window.b2link.element.show(n),clearTimeout(window.b2linkExtends.element.showAndModal._timeout0),window.b2linkExtends.element.showAndModal_MoveCurrentChildren._timeout0=setTimeout(function(){window.b2link.element.show(n),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(n);var e=n.style;if(e.position="absolute",n.__FULL_SIZE_MODE){var i=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement.offsetLeft+10,t=15,o=1;e.left=i+"px",e.right=t+"px",e.top=o+"px";var d=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth-10-t+"px";e.minWidth=e.maxWidth=d,window.b2link.event.dispatchCE__RESIZED_EL(n,null)}window.b2link.event.dispatchCE__SHOWED_EL(n,{_:this})},300)},window.b2linkExtends.element.showAndModal_MoveCurrentChildren._timeout0=0;

/**
 * Common Modal을 화면에 표출한 후 HTMLElement를 표출한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.showAndModal_Sync=function(n){var i=this.__el;window.b2link.ui_modal.appendChild(i,n),window.b2link.ui_modal.show(),window.b2link.element.show(i),clearTimeout(window.b2linkExtends.element.showAndModal_Sync._timeout0),window.b2linkExtends.element.showAndModal_Sync._t=i;var e=i.style;if(e.position="absolute",i.__FULL_SIZE_MODE){var t=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement.offsetLeft+10,o=15,d=1;e.left=t+"px",e.right=o+"px",e.top=d+"px";var l=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth-10-o+"px";e.minWidth=e.maxWidth=l,window.b2link.event.dispatchCE__RESIZED_EL(i,null)}window.b2link.event.dispatchCE__SHOWED_EL(i,{_:this}),window.b2linkExtends.element.showAndModal_Sync._timeout0=setTimeout(function(){window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(i)},300)},window.b2linkExtends.element.showAndModal_Sync._t=null,window.b2linkExtends.element.showAndModal_Sync._timeout0=0;

//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.s***;



//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkExtends.injection;

window.b2linkExtends.injection = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkExtends.injection;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.h***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.hide_show=function(n){n.hide=window.b2linkExtends.element.hide,n.show=window.b2linkExtends.element.show};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.hide_show__el_and_modal=function(n){window.b2linkExtends.injection.hide_show(n),n.hideAndModal=window.b2linkExtends.element.hideAndModal,n.showAndModal=window.b2linkExtends.element.showAndModal,n.hideAndModal_Sync=window.b2linkExtends.element.hideAndModal_Sync,n.showAndModal_Sync=window.b2linkExtends.element.showAndModal_Sync,n.hideAndModal_MoveBGCLastChild=window.b2linkExtends.element.hideAndModal_MoveBGCLastChild,n.hideAndModal_MoveCurrentChildren=window.b2linkExtends.element.hideAndModal_MoveCurrentChildren,n.showAndModal_MoveCurrentChildren=window.b2linkExtends.element.showAndModal_MoveCurrentChildren};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.h***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.i***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.inputBox=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.inputModalPanel=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.inputPanel=function(n){window.b2linkExtends.injection.hide_show(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.i***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.l***;

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.alert.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_alert=function(e,l){l||e.js&&(l=e.js),l||window.TtwLog.error("window.b2linkExtends.injection.locale_alert Error : undefine HTMLElement's Controller(JS Object)"),l.$locale=l.$locale?l.$locale:{},l.$locale.alert=window.b2link.ui_resource.reqSync_JSON_Locale.alert(l.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.confirm.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_confirm=function(n,o){o||n.js&&(o=n.js),o||window.TtwLog.error("window.b2linkExtends.injection.locale_confirm Error : undefine HTMLElement's Controller(JS Object)"),o.$locale=o.$locale?o.$locale:{},o.$locale.confirm=window.b2link.ui_resource.reqSync_JSON_Locale.confirm(o.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.label.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_label=function(l,e){e||l.js&&(e=l.js),e||window.TtwLog.error("window.b2linkExtends.injection.locale_label Error : undefine HTMLElement's Controller(JS Object)"),e.$locale=e.$locale?e.$locale:{},e.$locale.label=window.b2link.ui_resource.reqSync_JSON_Locale.label(e.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.message.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_message=function(e,l){l||e.js&&(l=e.js),l||window.TtwLog.error("window.b2linkExtends.injection.locale_message Error : undefine HTMLElement's Controller(JS Object)"),l.$locale=l.$locale?l.$locale:{},l.$locale.message=window.b2link.ui_resource.reqSync_JSON_Locale.message(l.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.tooltip.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_tooltip=function(o,l){l||o.js&&(l=o.js),l||window.TtwLog.error("window.b2linkExtends.injection.locale_tooltip Error : undefine HTMLElement's Controller(JS Object)"),l.$locale=l.$locale?l.$locale:{},l.$locale.tooltip=window.b2link.ui_resource.reqSync_JSON_Locale.tooltip(l.__url)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.l***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.m***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.modalPanel=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.m***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.s***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.searchSelector=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.selector=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.s***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.t***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.textAreaBox=function(n){window.b2linkExtends.injection.hide_show(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.textBoxModalPanel=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.t***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass;

window.b2linkUIClass = window.b2linkUIClass || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass;


//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.base;

window.b2linkUIClass.base = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.base;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.baseList;

window.b2linkUIClass.baseList = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.baseList;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.baseNavigation;

window.b2linkUIClass.baseNavigation = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.baseNavigation;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.baseTable;

window.b2linkUIClass.baseTable = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.baseTable;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.container;

window.b2linkUIClass.container = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.container;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.datepicker;

window.b2linkUIClass.datepicker = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.datepicker;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.event;

window.b2linkUIClass.event = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.event;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.fileUploader;

window.b2linkUIClass.fileUploader = window.b2linkUIClass.fileUploader || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.fileUploader;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.form;

window.b2linkUIClass.form = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.form;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.inputor;

window.b2linkUIClass.inputor = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.inputor;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.layoutNavigator;

window.b2linkUIClass.layoutNavigator = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.layoutNavigator;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.list;

window.b2linkUIClass.list = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.list;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.pageNumberNavigator;

window.b2linkUIClass.pageNumberNavigator = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.pageNumberNavigator;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.scheduler;

window.b2linkUIClass.scheduler = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.scheduler;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.select;

window.b2linkUIClass.select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.select;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.selector;

window.b2linkUIClass.selector = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.selector;










//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkUIClass.table;

window.b2linkUIClass.table = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkUIClass.table;





﻿




/**
 * 일반적인 Event Listener를 사전에 등록 후 약속된 callback를 실행하는 기능을 상속 시킨다.
 * HTMLElement의 className과 같은 callback을 등록 및 제거 하는 기능을 상속시킨다.
 * HTML Tag의 Attributes에 약속된 AttributeName으로 callback을 등록 및 제거하는 기능을 상속시킨다.
 *	- 약속된 Attributes : evt_mclick, evt_mdoubleclick, evt_kdown, evt_kup, ...
 *
 * @class
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Event = function( url, $el, _this )
{
	if( !_this )
	{
		//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el );//***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
	}

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * @private
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	/**
	 * @private
	 * @property {Boolean}
	 */
	_this.bAddEvent_Keyboard = false;

	/**
	 * @private
	 * @property {Boolean}
	 */
	_this.bAddEvent_Mouse = false;

	/**
	 * @private
	 * @property {Object}
	 */
	var _o_events_callback = {};

	/**
	 * @private
	 * @property {Object}
	 */
	var _o_events_callback__className = {};

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
	 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
	};

	/**
	 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
	 * @function
	 */
	var _removeEvent = function(){};

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수
	 * @function
	 * @param {String} key
	 * @param {Function} func
	 */
	var _addEventCallBackFunction__ClassName = function( key, func )
	{
		

		var t = _o_events_callback__className;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		
	};

	/**
	 * Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수
	 * @function
	 * @param {String} key
	 * @param {Function}
	 */
	var _addEventCallBackFunction__EventType = function( key, func )
	{
		

		var t = _o_events_callback;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		
	};

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_o_events_callback = null;

		_o_events_callback__className = null;

		window.b2link.ui.staticUIMap_Remove( _this.__el.__KEY_UI );

		if( _dispose.super ) _dispose.super();

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {String} k
	 * @param {Event} e
	 */
	var _execute__evtType = function( k, e )
	{
		//

		if( k )
		{
			console.log( "Key : " + k );
			var f = _o_events_callback[ k ];
			if( f ) f( e );
		}

		//
	};
	_this._execute__evtType = _execute__evtType;

	/**
	 * @function
	 * @param {String} k
	 * @param {Event} e
	 */
	var _execute__className = function( k, e )
	{
		//

		if( "" == k ) return;

		var idx_blank = k.indexOf( " " );
		if( -1 != idx_blank ) k = k.substr( 0, idx_blank );

		if( k )
		{
			console.log( "Key : " + k );
			var f = _o_events_callback__className[ k ];
			if( f ) f( e );
		}

		//
	};
	_this._execute__className = _execute__className;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {String} key
	 * @param {Function}
	 */
	var _removeEventCallBackFunction__ClassName = function( key, func )
	{
		

		var t = _o_events_callback__className;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		
	};

	/**
	 * @function
	 * @param {String} key
	 * @param {Function}
	 */
	var _removeEventCallBackFunction__EventType = function( key, func )
	{
		

		var t = _o_events_callback;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	/**
	 * Parent HTMLElement에 evt_mClick등의 속성을 부여해놓았을시 자식 객체로 부터 부모객체를 검색한다.
	 * @function
	 * @param {HTMLElement} el
	 * @param {String} key
	 * @param {Event} e
	 * @return {String}
	 * @example
	 * <code>
		var o = b2link.STATIC.UI.SUI_MODALPANEL_TEXTAREABOX$MEMO;
		var el = o[ 0 ];
		var elCtrl = o[ 1 ];

		el.setAttribute( "evt_mclick", "asd");
		elCtrl.addEventCallBackFunction__EventType( "asd", function(){
			console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		});
	 * </code>
	 */
	var _getCallBackKeyFromEventType = function( el, key, e )
	{
		//

		var t = el;
		var k = null;
		while( !k )
		{
			try
			{
				//console.log( t );
				k = t.getAttribute( key );
				e.__defineTarget = t;
				t = t.parentElement;
			}
			catch( er )
			{
				window.TtwLog.log( "_getCallBackKeyFromEventType Error : " + er );
				break;
			}
		}

		//

		return k;
	};
	_this._getCallBackKeyFromEventType = _getCallBackKeyFromEventType;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( _setData.super ) _setData.super( d );
	};
	if( _this.setData ) _setData.super = _this.setData;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//----------;
	_addEvent();
	//----------;


	//----------;
	//Event Bubble은 발생시키지 않지만 유사한 효과를 위해;
	//while을 사용하여 eventTarget 객체부터 부모 객체들을 거쳐가며;
	//이벤트 속성을 검색하는데 종속적인 rootElement에서 중단 시키기 위한 로직;
	var f = function( s ){
		if( !$el.getAttribute( s ) )
		{
			/*/
			console.log( "Element.id : " +  $el.id );
			console.log( "강제추가 : " + s );
			//*/
			$el.setAttribute( s, "_temp_" );
		}
	};
	var a = [ "evt_mclick", "evt_mdoubleclick", "evt_kdown", "evt_kup" ];
		a.forEach( function( s ){ f( s ); } );
	var _tempFn_ = function( e ){};
	_addEventCallBackFunction__ClassName( "_temp_", _tempFn_ );
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.dispose = _dispose;

		_.addEventCallBackFunction__ClassName = _addEventCallBackFunction__ClassName;
		_.addEventCallBackFunction__EventType = _addEventCallBackFunction__EventType;
		_.removeEventCallBackFunction__ClassName = _removeEventCallBackFunction__ClassName;
		_.removeEventCallBackFunction__EventType = _removeEventCallBackFunction__EventType;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};



//---------------------------------------------------------------------------------------------------;






/**
 * EventDispatcher를 설정할수 있는 기능을 가진 객체를 생성한다. 또는 상속시킨다.
 * EventDispatcher의 Reference를 보관하고 가져오는 API가 존재한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.EventDispatcher = function( url, $el, _this )
{
	if( !_this )
	{
		//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el );//***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
	}

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * 이 API를 통해 생성되는 Object
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	/**
	 * 이 Controller에서 dispatchEvent또는 dispatchCustomEvent를 할시에 사용할 EventDispatcher
	 * @property {HTMLElement}
	 */
	var __eventDispatcher = null;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		if( _dispose.super ) _dispose.super();

		__eventDispatcher = null;

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * 설정한 EventDispatcher을 가져온다.
	 * @function
	 * @return {HTMLElement}
	 */
	var _getEventDispatcher = function(){ return __eventDispatcher; };
	/**
	 * 이 Controller에서 dispatchEvent또는 dispatchCustomEvent를 할시에 사용할 EventDispatcher을 설정한다.
	 * @function
	 * @param {HTMLElement} eventDispatcherElement
	 */
	var _setEventDispatcher = function( eventDispatcherElement ){ __eventDispatcher = eventDispatcherElement; };

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_setEventDispatcher( $el );

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.getEventDispatcher = _getEventDispatcher;
		_.setEventDispatcher = _setEventDispatcher;
	//--------------------------------------------------this;
	return _;
};





﻿




/**
 * 일반적인 Event Listener를 사전에 등록 후 약속된 callback를 실행하는 기능을 상속 시킨다.
 * HTMLElement의 className과 같은 callback을 등록 및 제거 하는 기능을 상속시킨다.
 * HTML Tag의 Attributes에 약속된 AttributeName으로 callback을 등록 및 제거하는 기능을 상속시킨다.
 *	- 약속된 Attributes : evt_kdown, evt_kup, ...
 *	- 'keydown', 'keyup'만 작동 한다.
 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Event_User_Keyboard = function( url, $el, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.Event( url, $el, _this ? _this : { __url : url } );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * @property {Boolean}
	 */
	var __bStopKeyboardEvent_Down = true;

	/**
	 * @property {Boolean}
	 */
	var __bStopKeyboardEvent_Up = true;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
	 * @Override
	 * @function
	 */
	var _addEvent = function()
	{
		if( !_this.bAddEvent_Keyboard )
		{
			_addEvent.super();

			_removeEvent();

			//$el.addEventListener( "keydown", _evt_kDown, false, 0, true );
			$el.addEventListener( "keyup", _evt_kUp, false, 0, true );

			_this.bAddEvent_Keyboard = true;
		}
	};
	_addEvent.super = _this.addEvent;

	/**
	 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
	 * @Override
	 * @function
	 */
	var _removeEvent = function()
	{
		_removeEvent.super();

		//$el.removeEventListener( "keydown", _evt_kDown, false );
		$el.removeEventListener( "keyup", _evt_kUp, false );

		_this.bAddEvent_Keyboard = false;
	};
	_removeEvent.super = _this.removeEvent;

	/**
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_kDown = function( e )
	{
		

		console.log( "Event Type : " + e.type );
		console.log( "keyCode : " + e.keyCode );

		if( __bStopKeyboardEvent_Down )
		{
			e.stopImmediatePropagation();
			e.stopPropagation();
		}

		var t = e.target;
		_this._execute__evtType( _this._getCallBackKeyFromEventType( t, "evt_kdown", e ), e );
		if( t.className.indexOf ) _this._execute__className( t.className, e );

		
	};

	/**
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_kUp = function( e )
	{
		//

		//console.log( "Event Type : " + e.type );
		console.log( "keyCode : " + e.keyCode );

		if( __bStopKeyboardEvent_Up )
		{
			e.stopImmediatePropagation();
			e.stopPropagation();
		}

		var t = e.target;
		_this._execute__evtType( _this._getCallBackKeyFromEventType( t, "evt_kup", e ), e );
		if( t.className.indexOf ) _this._execute__className( t.className, e );

		//
	};

	

	//	FUNCTION;

	

	/**
	 * _addEventCallBackFunction__ClassName, _addEventCallBackFunction__EventType에서
	 * e.stopImmediatePropagation();
	 * e.stopPropagation();
	 * 을 하게 만든다.
	 *
	 * @function
	 */
	var _active_StopEvent = function()
	{
		_this.bStopKeyboardEvent_Down
			= _this.bStopKeyboardEvent_Up
			= true;

		if( _active_StopEvent.super ) _active_StopEvent.super();
	};
	if( _this.active_StopEvent ) _active_StopEvent.super = _this.active_StopEvent;

	/**
	 * _addEventCallBackFunction__ClassName, _addEventCallBackFunction__EventType에서
	 * e.stopImmediatePropagation();
	 * e.stopPropagation();
	 * 을 하지 않게 만든다.
	 *
	 * @function
	 */
	var _deactive_StopEvent = function()
	{
		_this.bStopKeyboardEvent_Down
			= _this.bStopKeyboardEvent_Up
			= false;

		if( _deactive_StopEvent.super ) _deactive_StopEvent.super();
	};
	if( _this.deactive_StopEvent ) _deactive_StopEvent.super = _this.deactive_StopEvent;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_dispose.super();

		_this = null;
	};
	_dispose.super = _this._dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( _setData.super ) _setData.super( d );
	};
	if( _this.setData ) _setData.super = _this.setData;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	/**
	 * @function
	 * @return {Boolean}
	 */
	_this.__defineGetter__( "bStopKeyboardEvent_Down", function(){ return __bStopKeyboardEvent_Down; });
	_this.__defineSetter__( "bStopKeyboardEvent_Down", function( b ){
		__bStopKeyboardEvent_Down = b;
		if( b ) _this.__el.setAttribute( "evt_kdown", "__temp__" );
		else _this.__el.removeAttribute( "evt_kdown" );
	});

	/**
	 * @function
	 * @return {Boolean}
	 */
	_this.__defineGetter__( "bStopKeyboardEvent_Up", function(){ return __bStopKeyboardEvent_Up; });
	_this.__defineSetter__( "bStopKeyboardEvent_Up", function( b ){
		__bStopKeyboardEvent_Up = b;
		if( b ) _this.__el.setAttribute( "evt_kup", "__temp__" );
		else _this.__el.removeAttribute( "evt_kup" );
	});

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.active_StopEvent = _active_StopEvent;

		_.deactive_StopEvent = _deactive_StopEvent;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};





﻿




/**
 * 일반적인 Event Listener를 사전에 등록 후 약속된 callback를 실행하는 기능을 상속 시킨다.
 * HTMLElement의 className과 같은 callback을 등록 및 제거 하는 기능을 상속시킨다.
 * HTML Tag의 Attributes에 약속된 AttributeName으로 callback을 등록 및 제거하는 기능을 상속시킨다.
 *	- 약속된 Attributes : evt_kdown, evt_kup, ...
 *	- 'click', 'dbclick', 'keydown', 'keyup' 만 작동 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Event_User_KeyboardAndMouse = function( url, $el, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.Event( url, $el, _this ? _this : { __url : url } );
		_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
	 * @Override
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		_addEvent.super();
	};
	_addEvent.super = _this.addEvent;

	/**
	 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
	 * @Override
	 * @function
	 */
	var _removeEvent = function()
	{
		_removeEvent.super();
	};
	_removeEvent.super = _this.removeEvent;

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * _addEventCallBackFunction__ClassName, _addEventCallBackFunction__EventType에서
	 * e.stopImmediatePropagation();
	 * e.stopPropagation();
	 * 을 하게 만든다.
	 *
	 * @function
	 */
	var _active_StopEvent = function()
	{
		if( _active_StopEvent.super ) _active_StopEvent.super();
	};
	if( _this.active_StopEvent ) _active_StopEvent.super = _this.active_StopEvent;

	/**
	 * _addEventCallBackFunction__ClassName, _addEventCallBackFunction__EventType에서
	 * e.stopImmediatePropagation();
	 * e.stopPropagation();
	 * 을 하지 않게 만든다.
	 *
	 * @function
	 */
	var _deactive_StopEvent = function()
	{
		if( _deactive_StopEvent.super ) _deactive_StopEvent.super();
	};
	if( _this.deactive_StopEvent ) _deactive_StopEvent.super = _this.deactive_StopEvent;

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		if( _dispose.super ) _dispose.super();

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
		fn : {
		}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//----------;
	_addEvent();
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.active_StopEvent = _active_StopEvent;

		_.deactive_StopEvent = _deactive_StopEvent;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};





﻿




/**
 * 일반적인 Event Listener를 사전에 등록 후 약속된 callback를 실행하는 기능을 상속 시킨다.
 * HTMLElement의 className과 같은 callback을 등록 및 제거 하는 기능을 상속시킨다.
 * HTML Tag의 Attributes에 약속된 AttributeName으로 callback을 등록 및 제거하는 기능을 상속시킨다.
 *	- 약속된 Attributes : evt_kdown, evt_kup, ...
 *	- 'click', 'dbclick'만 작동 한다.
 * 'mouseover', 'mouseout'는 이벤트 과부하를 발생할수 있으므로 기본 적용 하지 않는 다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Event_User_Mouse = function( url, $el, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.Event( url, $el, _this ? _this : { __url : url } );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * @private
	 * @property {Boolean}
	 */
	var __bStopMouseEvent_Click = true;

	/**
	 * @private
	 * @property {Boolean}
	 */
	var __bStopMouseEvent_DoubleClick = true;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
	 * @Override
	 * @function
	 */
	var _addEvent = function()
	{
		if( !_this.bAddEvent_Mouse )
		{
			_addEvent.super();

			_removeEvent();

			$el.addEventListener( "click", _evt_mClick, false, 0, true );
			$el.addEventListener( "dbclick", _evt_mDoubleClick, false, 0, true );

			_this.bAddEvent_Mouse = true;
		}
	};
	_addEvent.super = _this.addEvent;

	/**
	 * 키보드 다운은 이벤트 과부하를 발생 시킬 수 있으므로 기본적으로 추가 하지 않음
	 * @Override
	 * @function
	 */
	var _removeEvent = function()
	{
		_removeEvent.super();

		$el.removeEventListener( "click", _evt_mClick, false );
		$el.removeEventListener( "dbclick", _evt_mDoubleClick, false );

		_this.bAddEvent_Mouse = false;
	};
	_removeEvent.super = _this.removeEvent;

	/**
	 * Mouse Click Event Listener
	 * 이 함수 한번만 실행되고 이벤트 버블을 발생시키지 않는 다.
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_mClick = function( e )
	{
		//

		//console.log( "Event Type : " + e.type );

		if( __bStopMouseEvent_Click )
		{
			e.stopImmediatePropagation();
			e.stopPropagation();
		}

		var t = e.target;
		_this._execute__evtType( _this._getCallBackKeyFromEventType( t, "evt_mclick", e ), e );
		if( t.className.indexOf ) _this._execute__className( t.className, e );

		//
	};

	/**
	 * Mouse Double Click Event Listener
	 * 이 함수 한번만 실행되고 이벤트 버블을 발생시키지 않는 다.
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_mDoubleClick = function( e )
	{
		//

		//console.log( "Event Type : " + e.type );

		if( __bStopMouseEvent_DoubleClick )
		{
			e.stopImmediatePropagation();
			e.stopPropagation();
		}

		var t = e.target;
		_this._execute__evtType( _this._getCallBackKeyFromEventType( t, "evt_mdoubleclick", e ), e );
		if( t.className.indexOf ) _this._execute__className( t.className, e );

		//
	};

	

	//	FUNCTION;

	

	/**
	 * _addEventCallBackFunction__ClassName, _addEventCallBackFunction__EventType에서
	 * e.stopImmediatePropagation();
	 * e.stopPropagation();
	 * 을 하게 만든다.
	 *
	 * @function
	 */
	var _active_StopEvent = function()
	{
		_this.bStopMouseEvent_Click
			= _this.bStopMouseEvent_DoubleClick
			= true;

		if( _active_StopEvent.super ) _active_StopEvent.super();
	};
	if( _this.active_StopEvent ) _active_StopEvent.super = _this.active_StopEvent;

	/**
	 * _addEventCallBackFunction__ClassName, _addEventCallBackFunction__EventType에서
	 * e.stopImmediatePropagation();
	 * e.stopPropagation();
	 * 을 하지 않게 만든다.
	 *
	 * @function
	 */
	var _deactive_StopEvent = function()
	{
		_this.bStopMouseEvent_Click
			= _this.bStopMouseEvent_DoubleClick
			= false;

		if( _deactive_StopEvent.super ) _deactive_StopEvent.super();
	};
	if( _this.deactive_StopEvent ) _deactive_StopEvent.super = _this.deactive_StopEvent;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		if( _dispose.super ) _dispose.super();

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( _setData.super ) _setData.super( d );
	};
	if( _this.setData ) _setData.super = _this.setData;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	/**
	 * @function
	 * @return {Boolean}
	 */
	_this.__defineGetter__( "bStopMouseEvent_Click", function(){ return __bStopMouseEvent_Click; });
	_this.__defineSetter__( "bStopMouseEvent_Click", function( b ){
		__bStopMouseEvent_Click = b;
		if( b ) _this.__el.setAttribute( "evt_mclick", "__temp__" );
		else _this.__el.removeAttribute( "evt_mclick" );
	});

	/**
	 * @function
	 * @return {Boolean}
	 */
	_this.__defineGetter__( "bStopMouseEvent_DoubleClick", function(){ return __bStopMouseEvent_DoubleClick; });
	_this.__defineSetter__( "bStopMouseEvent_DoubleClick", function( b ){
		__bStopMouseEvent_DoubleClick = b;
		if( b ) _this.__el.setAttribute( "evt_mdoubleclick", "__temp__" );
		else _this.__el.removeAttribute( "evt_mdoubleclick" );
	});

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//----------;
	_addEvent();
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.active_StopEvent = _active_StopEvent;

		_.deactive_StopEvent = _deactive_StopEvent;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};










/**
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Locale = function( url, $el, _this )
{
	if( !_this )
	{
		//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el );//***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
	}

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		//window.b2link.event.dispatchCE__CHANGED_LOCALE( window.document, {} );
		window.document.addEventListener( window.b2link.event.CHANGED_LOCALE, _this._evt_ChangedLocale, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		window.document.removeEventListener( window.b2link.event.CHANGED_LOCALE, _this._evt_ChangedLocale, false );
	};

	/**
	 * @override
	 * @function
	 */
	var _evt_ChangedLocale = function( e )
	{
		

		_this._reset_locale();

		
	};
	if( _this._evt_ChangedLocale ) _evt_ChangedLocale.super = _this._evt_ChangedLocale;
	_this._evt_ChangedLocale = _evt_ChangedLocale;

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		if( _dispose.super ) _dispose.super();
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	/**
	 * @override
	 * @function
	 */
	var _reset_locale = function()
	{
		

		debugger;

		$el.innerHTML = $el.__originalInnerHTML_Locale;
		$el.__originalInnerHTML = null;

		//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );

		
	};
	_this._reset_locale = _reset_locale;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * window.b2link.STATIC.CONFIG.URL.UI.LOCALE를 리턴한다.
	 *
	 * @function
	 * @return {String}
	 */
	var _getLocale = function(){ return window.b2link.STATIC.CONFIG.URL.UI.LOCALE };

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_addEvent();

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.reset_locale = _reset_locale;

		_.getLocale = _getLocale;
	//--------------------------------------------------this;
	return _;
};










/**
 * 추상적인 개념의 RootElement를 설정하는 기능을 가진 객체를 생성한다. 또는 상속시킨다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.RootElement = function( url, $el, _this )
{
	if( !_this )
	{
		//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el );//***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
	}

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	/**
	 * @property {HTMLElement}
	 */
	var __rootElement = null;
	/**
	 * __rootElement : {HTMLElement}'s Controller
	 * @property {Object}
	 */
	var __rootElementCtrl = null;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		if( _dispose.super ) _dispose.super();

		__rootElement = null;
		__rootElementCtrl = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( _setData.super ) _setData.super( d );
	};
	if( _this.setData ) _setData.super = _this.setData;

	/**
	 * @function
	 * @param {HTMLElement} rootElement
	 * @param {HTMLElement} rootElementCtrl
	 */
	var _setRootElementAndCtrl = function( rootElement, rootElementCtrl ){ _setRootElement( rootElement ); _setRootElementCtrl( rootElementCtrl ); };

	//--------------------------------------------------GET / SET;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _getRootElement = function(){ return __rootElement; };
	/**
	 * @function
	 * @param {HTMLElement} rootElement
	 * @param {HTMLElement} rootElementCtrl
	 */
	var _setRootElement = function( rootElement ){ __rootElement = rootElement; };

	/**
	 * @function
	 * @return {Object}
	 */
	var _getRootElementCtrl = function(){ return __rootElementCtrl; };
	/**
	 * @function
	 * @param {Object} rootElementCtrl
	 */
	var _setRootElementCtrl = function( rootElementCtrl ){ __rootElementCtrl = rootElementCtrl; };

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.setData = _setData;

		_.setRootElementAndCtrl = _setRootElementAndCtrl;

		_.getRootElement = _getRootElement;
		_.setRootElement = _setRootElement;
		_.getRootElementCtrl = _getRootElementCtrl;
		_.setRootElementCtrl = _setRootElementCtrl;
	//--------------------------------------------------this;
	return _;
};





﻿




/**
 * window.b2linkUIClass.base.EventDispatcher를 상속 받는다.
 *
 * EventDispatcher에 {HTMLUListElement}를 설정한다.
 * ListContainer 객체로 {HTMLUListElement}를 설정한다.
 * _this.dispatch_LIST_DATA_CHANGED가 정의 되어있다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.EventDispatcher = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el_ul );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

	/**
	 * @property {Element}
	 */
	//var _el_tbody = $f0( $el_table, "tbody" );

	/**
	 * @property {Element}
	 */
	//var _el_thead = $f0( $el_table, "thead" );

	/**
	 * List Container Element
	 * @property {Element}
	 */
	var _el_ListContainer = $el_ul;
	_this._el_ListContainer = _el_ListContainer;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * List Container( ul, tbody, ... )의 Data가 변경되었을 시 발생되는 이벤트
	 * @function
	 * @param {CustomEvent} e event
	 */
	var _dispatch_LIST_DATA_CHANGED = function()
	{
		window.b2link.event.dispatchCE__LIST_DATA_CHANGED(
			_this.getEventDispatcher()
			, window.b2link.eventDetail.LIST_DATA_CHANGED({
				firstItem : _this._getListItem_FirstData()
				, lastItem : _this._getListItem_LastData()
			})
		);
	};

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		//_el_tbody = null;
		//_el_thead = null;

		_el_ListContainer = null;
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * List Container Element를 가져온다.( ul, tbody, ... )
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	/*
	 * 첫번째 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_FirstData = function(){};
	_this._getListItem_FirstData = _getListItem_FirstData;

	/*
	 * 마지막 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_LastData = function(){};
	_this._getListItem_LastData = _getListItem_LastData;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	var _setData = function(){};
	_this._setData = _setData;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data ){};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_ul;

		_.dispose = _dispose;

		_.dispatch_LIST_DATA_CHANGED = _dispatch_LIST_DATA_CHANGED;

		_.get_el_ListContainer = _get_el_ListContainer;

		_.setData = _setData;
	//--------------------------------------------------this;

	return _;
};










/**
 * window.b2linkUIClass.baseList.EventDispatcher를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 보여줄 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거된다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.NextPrev = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.EventDispatcher( url, $el_ul );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//------------------------------;

	/**
	 * @property {Element}}
	 */
	var _el_ListContainer = _this.get_el_ListContainer();

	//------------------------------;

	_this._fn_apply_html_child = window.b2link.html_ul.apply_child;

	/**
	 * function( ListElement ){}
	 * @function
	 */
	_this._fn_getListIdx_First = window.b2link.el_list.getIndex_First;
	_this._fn_getListIdx_Last = window.b2link.el_list.getIndex_Last;

	//------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getCount = null;
	_this._fn_req_getCount = _fn_req_getCount;

	/**
	 * @function
	 */
	var _fn_req_getList_Range__id = null;
	_this._fn_req_getList_Range__id = _fn_req_getList_Range__id;

	//------------------------------;

	/**
	 * @Property {uint} 0 or 1 - 0(Prev), 1(Next)
	 */
	var _n_status_req = null;
	_this._n_status_req = _n_status_req;

	//------------------------------;

	/**
	 * @property {Object}
	 */
	var _status_itemListContainer = { idS : -1, idE : 10, limit : 10, maxCount : 0 };
	_this._status_itemListContainer = _status_itemListContainer;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _el_ListContainer );
		if( n == o.maxCount )
		{
			
			o.idS = o.maxCount + 1;
			return 1;
		}

		//*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS = n + 1;
		o.idE = o.idS + o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			//*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _status_itemListContainer;
		var n = _this._fn_getListIdx_First( _el_ListContainer );
		if( 0 == n )
		{
			
			o.idS = -2;
			return 1;
		}

		//*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idE = n - 1;
		o.idS = o.idE - o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;

		_fn_req_getCount = null;
		_fn_req_getList_Range__id = null;

		_n_status_req = null;

		_status_itemListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		

		var o = _status_itemListContainer;
		_this._fn_req_getList_Range__id( o.idS, o.idE, _res_Data );

		
	};

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		if( _calc_DataNext() )
		{
			
			return;
		}

		var o = _status_itemListContainer;
		/*/
		if( o.idE >= o.maxCount )
		{
			
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_n_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		

		_calc_DataNext();
		_calc_DataNext();

		var o = _status_itemListContainer;
		if( o.idE >= o.maxCount )
		{
			
			return;
		}

		if( o.idS < o.maxCount )
		{
			_n_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		if( _calc_DataPrev() )
		{
			
			return;
		}

		var o = _status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_n_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_n_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		

		_this._setData__ListItems( result );

		
	};
	_this._res_Data = _res_Data;

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	//--------------------------------------------------;

	/*
	 * 첫번째 데이터 정보 반환
	 * @function
	 * @return {Object}
	 */
	var _getListItem_FirstData = function()
	{
		


		if( _el_ListContainer.children.length > 0 )
		{
			
			return window.b2link.el_list.getItemData_First( _el_ListContainer );
		}

		
		return null;
	};
	_this._getListItem_FirstData = _getListItem_FirstData;

	/*
	 * 마지막 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_LastData = function()
	{
		

		var d;
		if( _el_ListContainer.children.length > 0 )
			d = window.b2link.el_list.getItemData_Last( _el_ListContainer );

		if( !d )
			//수정하기 - 20170117 - 송선우 - 수식으로 계산이 이상함;
			d = window.b2link.el_list.getItemData_Last__maxCount_Limit( _el_ListContainer, _this.get__status_itemListContainer() );

		
		return d;
	};
	_this._getListItem_LastData = _getListItem_LastData;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "maxCount" : null
	 *	"fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super();

		_this._fn_req_getCount = _fn_req_getCount = d.fn.req_getCount;
		_this._fn_req_getList_Range__id = _fn_req_getList_Range__id = d.fn.req_getList_Range__id;

		_set__status_itemListContainer( d.idStart, d.idEnd, d.limit, d.maxCount );

		
	};
	_setData.super = _this.setData;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _this._el_ListContainer;

		_this._fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;//override;

	//------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _set_Req__status_itemListContainer_maxCount = function()
	{
		

		_this._fn_req_getCount( _set_Req__status_itemListContainer_maxCount._f0 );

		
	};
	_this._set_Req__status_itemListContainer_maxCount = _set_Req__status_itemListContainer_maxCount;

	_set_Req__status_itemListContainer_maxCount._f0 = function( r ){ _status_itemListContainer.maxCount = r; };

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { "idS" : 0, "idE" : 10, "limit" : 10, "maxCount" : 0 };
	 */
	var _get__status_itemListContainer = function(){ return _status_itemListContainer; };
	/**
	 * @function
	 * @param {uint} idStart
	 * @param {uint} idEnd
	 * @param {uint} limit
	 * @param {uint} maxCount
	 */
	var _set__status_itemListContainer = function( idStart, idEnd, limit, maxCount )
	{
		

		_status_itemListContainer.idS = idStart ? idStart : -1;
		_status_itemListContainer.idE = idEnd ? idEnd : 20;
		_status_itemListContainer.limit = limit ? limit : 20;

		if( maxCount ) _status_itemListContainer.maxCount = maxCount;
		else _set_Req__status_itemListContainer_maxCount();

		console.log( _status_itemListContainer );

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_ul );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_ul;

	_.dispose = _dispose;

	_.req_Data = _req_Data;
	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	_.get_el_ListContainer = _get_el_ListContainer

	_.get__status_itemListContainer = _get__status_itemListContainer;
	_.set__status_itemListContainer = _set__status_itemListContainer;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};










/**
 * window.b2linkUIClass.baseList.EventDispatcher를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 보여줄 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 가져온 데이터는 계속 추가로 등록되어 보여준다.
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 남아있다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.NextPrevAdd = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.NextPrev( url, $el_ul );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	_this._fn_apply_html_child = window.b2link.html_ul.apply_child__ReUseKeyList;
	_this._fn_push_el_child = window.b2link.el_ul.push_child;
	_this._fn_unsihft_el_child = window.b2link.el_ul.unshift_child;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _this._el_ListContainer );
		if( n == o.maxCount )
		{
			
			o.idS = o.maxCount + 1;
			return 1;
		}

		/*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS = n + 1;
		o.idE = o.idS + o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			/*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_First( _this._el_ListContainer );
		if( 0 == n )
		{
			
			o.idS = -2;
			return 1;
		}

		/*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idE = n - 1;
		o.idS = o.idE - o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_this._fn_req_getCount = null;
		_this._fn_req_getList_Range__id = null;

		_this._status_itemListContainer = null;

		_this._n_status_req = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		if( _calc_DataNext() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		/*/
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		

		_calc_DataNext();
		_calc_DataNext();

		var o = _this._status_itemListContainer;
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		if( _calc_DataPrev() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length )
		{
			_this._fn_apply_html_child( el, data );

			//window.b2link.element.injectValueForListItems( el, data );
			//window.b2link.element.injectValueForListItemsAndID( el, data );
		}
		else
		{
			console.log( "_this._n_status_req : " + _this._n_status_req );
			if( _this._n_status_req ) _this._fn_push_el_child( el, data );
			else _this._fn_unsihft_el_child( el, data );
		}

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_ul );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_ul;

	_.dispose = _dispose;

	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	//--------------------------------------------------this;

	return _this;
};










/**
 * window.b2linkUIClass.baseList.NextPrevAdd를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터는 제거된다.
 * ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 새 데이터 표출시 재사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.NextPrevRoll = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.NextPrevAdd( url, $el_ul );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	_this._fn_change_el_child = window.b2link.el_ul.change_child;
	_this._fn_push_el_child = null;
	_this._fn_unsihft_el_child = null;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _this._el_ListContainer );
		if( n == o.maxCount )
		{
			
			o.idS = o.maxCount + 1;
			return 1;
		}

		/*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS += o.limit / o.limitTerm;
		o.idE += o.limit / o.limitTerm;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			//*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_First( _this._el_ListContainer );
		if( 0 == n )
		{
			
			o.idS = -2;
			return 1;
		}

		/*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idS -= o.limit / o.limitTerm;
		o.idE -= o.limit / o.limitTerm;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_this._fn_req_getCount = null;
		_this._fn_req_getList_Range__id = null;

		_this._status_itemListContainer = null;

		_this._n_status_req = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		if( _calc_DataNext() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		//*/
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		

		_calc_DataNext();
		_calc_DataNext();

		var o = _this._status_itemListContainer;
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		if( _calc_DataPrev() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "limitTerm" : 2
	 *	, "maxCount" : null
	 *	, "fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_this._fn_req_getCount = _fn_req_getCount = d.fn.req_getCount;
		_this._fn_req_getList_Range__id = _fn_req_getList_Range__id = d.fn.req_getList_Range__id;

		_set__status_itemListContainer( d.idStart, d.idEnd, d.limit, d.limitTerm, d.maxCount );

		
	};

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length ) _this._fn_apply_html_child( el, data );
		else _this._fn_change_el_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { "idS" : 0, "idE" : 10, "limit" : 10, "limitTerm" : 2, "maxCount" : 0 };
	 */
	//var _get__status_itemList = function(){ return _this._status_itemListContainer; };
	/**
	 * @function
	 * @param {uint} idStart
	 * @param {uint} idEnd
	 * @param {uint} limit
	 * @param {uint} limitTerm
	 * @param {uint} maxCount
	 */
	var _set__status_itemListContainer = function( idStart, idEnd, limit, limitTerm, maxCount )
	{
		

		_this._status_itemListContainer.idS = idStart ? idStart : -1;
		_this._status_itemListContainer.idE = idEnd ? idEnd : 20;
		_this._status_itemListContainer.limit = limit ? limit : 20;
		_this._status_itemListContainer.limitTerm = limitTerm ? limitTerm : 2;

		if( maxCount ) _this._status_itemListContainer.maxCount = maxCount;
		else _this._set_Req__status_itemListContainer_maxCount();

		console.log( _this._status_itemListContainer );

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_ul );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el =  $el_ul;

	_.dispose = _dispose;

	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};










/**
 * window.b2linkUIClass.baseList.NextPrevRoll를 상속한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.NextPrevRollUserHandleEvt = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.NextPrevRoll( url, $el_ul );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var _el_ListContainer = _this.get_el_ListContainer();

	var _bScrollBottomEnd = false;
	var _bScrollTopEnd = false;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		_addEvent_scroll_listItemContainer();
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_removeEvent_scroll_listItemContainer();
		_removeEvent_mWheel_listItemContainer();
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent_scroll_listItemContainer = function()
	{
		_removeEvent_scroll_listItemContainer();
		_el_ListContainer.addEventListener( "scroll", _evt_mScroll_listItemContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_scroll_listItemContainer = function()
	{
		_el_ListContainer.removeEventListener( "scroll", _evt_mScroll_listItemContainer, false );
	};

	/**
	 * @function
	 */
	var _addEvent_mWheel_listItemContainer = function()
	{
		_removeEvent_mWheel_listItemContainer();
		_el_ListContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_mWheel_listItemContainer = function()
	{
		_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mScroll_listItemContainer = function( e )
	{
		//

		//console.log( e );

		e.stopImmediatePropagation();
		e.stopPropagation();

		_removeEvent_scroll_listItemContainer();

		var t = e.target;//console.log( t );

		/*/
		console.log( "t.scrollLeft : " + t.scrollLeft );
		console.log( "t.scrollHeight : " + t.scrollHeight );
		console.log( "t.scrollTop : " + t.scrollTop );
		console.log( "t.scrollWidth : " + t.scrollWidth );
		//*/

		if( t.scrollHeight == ( t.clientHeight + t.scrollTop ) )
		{
			console.log( "scroll is Bottom." );

			_bScrollBottomEnd = true;
			_bScrollTopEnd = false;
			_addEvent_scroll_listItemContainer();
			

			//listItemContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
			_addEvent_mWheel_listItemContainer();

			return;
		}
		else if( 0 == t.scrollTop )
		{
			//console.log( "scroll is Top." );

			_bScrollBottomEnd = false;
			_bScrollTopEnd = true;
			_addEvent_scroll_listItemContainer();
			

			//listItemContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
			_addEvent_mWheel_listItemContainer();

			return;
		}

		_bScrollBottomEnd = false;
		_bScrollTopEnd = false;

		_addEvent_scroll_listItemContainer();

		//
	};

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 */
	var _evt_mWheel_listItemContainer = function( e )
	{
		//

		console.log( "e.wheelDelta : " + e.wheelDelta );
		//e = _fn_setMouseDeltaNomalize( e );

		//listItemContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
		_removeEvent_mWheel_listItemContainer();

		e.stopImmediatePropagation();
		e.stopPropagation();

		if( _bScrollBottomEnd && ( 0 > e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
			//_removeEvent_mWheel_listItemContainer();

			_el_ListContainer.scrollTop = _el_ListContainer.scrollTop / 2;
			$el_ul.js.req_Data_Next();
		}
		else if( _bScrollTopEnd && ( 0 < e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
			//_removeEvent_mWheel_listItemContainer();

			_el_ListContainer.scrollTop = _el_ListContainer.scrollHeight / 2;
			$el_ul.js.req_Data_Prev();
		}

		//
	};

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 * @return {MouseWheelEvent}
	 */
	/*/
	var _fn_setMouseDeltaNomalize = function( e )
	{
		var o = e,
			d = o.detail, w = o.wheelDelta,
			n = 225, n1 = n-1;

		//Normalize delta;
		d = d ? w && (f = w/d) ? d/f : -d/1.35 : w/120;
		//Quadratic scale if |d| > 1;
		d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
		//Delta *should* not be greater than 2...;
		e.delta = Math.min(Math.max(d / 2, -1), 1);

		return e;
	}
	//*/

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "limitTerm" : 2
	 *	, "maxCount" : null
	 *	, "fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super( d );

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	_this.setEventDispatcher( $el_ul );
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_ul;

	_.dispose = _dispose;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};









/**
 * window.b2linkUIClass.baseList.EventDispatcher를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 보여줄 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거된다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.NextPrevSearch = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.EventDispatcher( url, $el_ul );

	

	//	STATIC;

	

	/**
	 * @property {Element}}
	 */
	var _el_ListContainer = _this.get_el_ListContainer();

	//--------------------------------------------------;


	/**
	 * function( ListElement ){}
	 * @function
	 */
	_this._fn_apply_html_child = window.b2link.html_ul.apply_child;
	_this._fn_getListIdx_First = window.b2link.el_list.getIndex_First;
	_this._fn_getListIdx_Last = window.b2link.el_list.getIndex_Last;
	_this._fn_getItemData_First = window.b2link.el_list.getItemData_First;
	_this._fn_getItemData_Last = window.b2link.el_list.getItemData_Last;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getSearchCount = null;
	_this._fn_req_getSearchCount = _fn_req_getSearchCount;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getSearchList = null;
	_this._fn_req_getSearchList = _fn_req_getSearchList;

	//--------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var _status_itemListContainer = {};
	_this._status_itemListContainer = _status_itemListContainer;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _status_itemListContainer;
		var d = _this._fn_getItemData_Last( _el_ListContainer );
		if(d == null){
			
			o.skip = 0;
			return;
		}
		var n = d.seq;
		if( n == o.maxCount )
		{
			
			o.skip = 0;
			return;
		}

		o.skip = n;

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _status_itemListContainer;
		var n = _this._fn_getItemData_First( _el_ListContainer ).seq;
		if( 1 == n )
		{
			
			if( parseInt( o.maxCount % o.limit ) === 0 ){
				o.skip = (parseInt( o.maxCount / o.limit ) - 1) * o.limit;
			} else {
				o.skip = parseInt( o.maxCount / o.limit ) * o.limit;
			}
			return;
		}

		o.skip = n - 1 - o.limit;

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		var o = _status_itemListContainer;
		if(o.maxCount > o.limit)
		{
			_calc_DataNext();
			_fn_req_getSearchList( o.skip, o.limit, o.searchDivision, o.searchTeam, o.searchType, o.searchKeyword, _res_Data );
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		var o = _status_itemListContainer;
		if(o.maxCount > o.limit)
		{
			_calc_DataPrev();
			_fn_req_getSearchList( o.skip, o.limit, o.searchDivision, o.searchTeam, o.searchType, o.searchKeyword, _res_Data );
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object}
	 */
	var _setData = function( d )
	{
		

		_setData.super();

		_this._fn_req_getSearchCount = _fn_req_getSearchCount = d.fn.req_getSearchCount;
		_this._fn_req_getSearchList = _fn_req_getSearchList = d.fn.req_getSearchList;

		_set__status_itemListContainer( d.skip, d.limit, d.maxCount, d.searchDivision, d.searchTeam, d.searchType, d.searchKeyword );

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		

		var o = _status_itemListContainer;
		_this._fn_req_getSearchList( o.skip, o.limit, o.searchDivision, o.searchTeam, o.searchType, o.searchKeyword, _res_Data );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		

		_this._setData__ListItems( result );

		
	};
	_this._res_Data = _res_Data;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data ) // override 당함
	{
		

		var el = _this._el_ListContainer;

		_this._fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;//override;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function()
	{
		return _el_ListContainer;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object}
	 */
	var _get__status_itemListContainer = function()
	{
		return _status_itemListContainer;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {uint} skip
	 * @param {uint} limit
	 * @param {uint} maxCount
	 * @param {String} searchType
	 * @param {String} searchKeyword
	 */
	var _set__status_itemListContainer = function( _skip, _limit, _maxCount, _searchDivision, _searchTeam, _searchType, _searchKeyword )
	{
		

		_status_itemListContainer.skip = _skip ? _skip : 0;
		_status_itemListContainer.limit = _limit ? _limit : 40;
		_status_itemListContainer.searchDivision = _searchDivision ? _searchDivision : "";
		_status_itemListContainer.searchTeam = _searchTeam ? _searchTeam : "";
		_status_itemListContainer.searchType = _searchType ? _searchType : "";
		_status_itemListContainer.searchKeyword = _searchKeyword ? _searchKeyword : "";

		if( _maxCount ) _status_itemListContainer.maxCount = _maxCount;
		else _set_Req__status_itemListContainer_maxCount();

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _set_Req__status_itemListContainer_maxCount = function()
	{
		

		_this._fn_req_getSearchCount(
			_this._status_itemListContainer.searchDivision,
			_this._status_itemListContainer.searchTeam,
			_this._status_itemListContainer.searchType,
			_this._status_itemListContainer.searchKeyword,
			_set_Req__status_itemListContainer_maxCount._f0
		);

		
	};

	_this._set_Req__status_itemListContainer_maxCount = _set_Req__status_itemListContainer_maxCount;

	_set_Req__status_itemListContainer_maxCount._f0 = function( r ){
		_status_itemListContainer.maxCount = r;
	};

	//--------------------------------------------------;

	/**
	* @function
	*/
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;
		_fn_req_getSearchCount = null;
		_fn_req_getSearchList = null;
		_status_itemListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_ul );

	//--------------------------------------------------this;
	var _ = _this;
	_.__el = $el_ul;
	_.dispose = _dispose;
	_.req_Data = _req_Data;
	_.req_Data_Next = _req_Data_Next;
	_.req_Data_Prev = _req_Data_Prev;
	_.get_el_ListContainer = _get_el_ListContainer
	_.get__status_itemListContainer = _get__status_itemListContainer;
	_.set__status_itemListContainer = _set__status_itemListContainer;
	_.setData = _setData;
	//--------------------------------------------------this;
	return _this;
};






﻿




/**
 * window.b2linkUIClass.base.EventDispatcher를 상속 받는다.
 *
 * EventDispatcher에 {HTMLTableElement}를 설정한다.
 * ListContainer 객체로 {HTMLTableElement}를 설정한다.
 * _this.dispatch_TABLE_DATA_CHANGED가 정의 되어있다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.EventDispatcher = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el_table );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

	/**
	 * @property {Element}}
	 */
	var _el_tbody = $f0( $el_table, "tbody" );

	/**
	 * @property {Element}}
	 */
	var _el_thead = $f0( $el_table, "thead" );

	/**
	 * @property {Element}}
	 */
	var _el_ListContainer = _el_tbody;
	_this._el_ListContainer = _el_ListContainer;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 * @param {CustomEvent} e event
	 */
	var _dispatch_TABLE_DATA_CHANGED = function()
	{
		window.b2link.event.dispatchCE__TABLE_DATA_CHANGED(
			_this.getEventDispatcher()
			, window.b2link.eventDetail.TABLE_DATA_CHANGED({
				firstItem : _this._getListItem_FirstData()
				, lastItem : _this._getListItem_LastData()
			})
		);
	};

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_tbody = null;
		_el_thead = null;

		_el_ListContainer = null;
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * List Container Element를 가져온다.( ul, tbody, ... )
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	/*
	 * 첫번째 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_FirstData = function(){};
	_this._getListItem_FirstData = _getListItem_FirstData;

	/*
	 * 마지막 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_LastData = function(){};
	_this._getListItem_LastData = _getListItem_LastData;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	var _setData = function(){};
	_this._setData = _setData;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data ){};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.dispatch_TABLE_DATA_CHANGED = _dispatch_TABLE_DATA_CHANGED;

	_.get_el_ListContainer = _get_el_ListContainer;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};





﻿




/**
 * window.b2linkUIClass.baseTable.EventDispatcher를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 보여줄 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거된다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.NextPrev = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.EventDispatcher( url, $el_table );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//------------------------------;

	/**
	 * @property {Element}}
	 */
	var _el_ListContainer = _this.get_el_ListContainer();

	//------------------------------;

	_this._fn_apply_html_child = window.b2link.html_tbody.apply_child;

	/**
	 * function( ListElement ){}
	 * @function
	 */
	_this._fn_getListIdx_First = window.b2link.el_list.getIndex_First;
	_this._fn_getListIdx_Last = window.b2link.el_list.getIndex_Last;

	//------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getCount = null;
	_this._fn_req_getCount = _fn_req_getCount;

	/**
	 * @function
	 */
	var _fn_req_getList_Range__id = null;
	_this._fn_req_getList_Range__id = _fn_req_getList_Range__id;

	//------------------------------;

	/**
	 * @Property {uint} 0 or 1 - 0(Prev), 1(Next)
	 */
	var _n_status_req = null;
	_this._n_status_req = _n_status_req;

	//------------------------------;

	/**
	 * @property {Object}
	 */
	var _status_itemListContainer = { idS : -1, idE : 10, limit : 10, maxCount : 0 };
	_this._status_itemListContainer = _status_itemListContainer;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _el_ListContainer );
		if( n == o.maxCount )
		{
			
			o.idS = o.maxCount + 1;
			return 1;
		}

		//*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS = n + 1;
		o.idE = o.idS + o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			//*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _status_itemListContainer;
		var n = _this._fn_getListIdx_First( _el_ListContainer );
		if( 0 == n )
		{
			
			o.idS = -2;
			return 1;
		}

		//*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idE = n - 1;
		o.idS = o.idE - o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;

		_fn_req_getCount = null;
		_fn_req_getList_Range__id = null;

		_n_status_req = null;

		_status_itemListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		

		var o = _status_itemListContainer;
		_this._fn_req_getList_Range__id( o.idS, o.idE, _res_Data );

		
	};

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		if( _calc_DataNext() )
		{
			
			return;
		}

		var o = _status_itemListContainer;
		/*/
		if( o.idE >= o.maxCount )
		{
			
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_n_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		

		_calc_DataNext();
		_calc_DataNext();

		var o = _status_itemListContainer;
		if( o.idE >= o.maxCount )
		{
			
			return;
		}

		if( o.idS < o.maxCount )
		{
			_n_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		if( _calc_DataPrev() )
		{
			
			return;
		}

		var o = _status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_n_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_n_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		

		_this._setData__ListItems( result );

		
	};
	_this._res_Data = _res_Data;

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	/*
	 * 첫번째 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_FirstData = function()
	{
		

		if( _el_ListContainer.children.length > 0 )
		{
			
			return window.b2link.el_list.getItemData_First( _el_ListContainer );
		}

		
		return null;
	};
	_this._getListItem_FirstData = _getListItem_FirstData;

	/*
	 * 마지막 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_LastData = function()
	{
		

		var d;
		if( _el_ListContainer.children.length > 0 )
			d = window.b2link.el_list.getItemData_Last( _el_ListContainer );

		if( !d )
			//수정하기 - 20170117 - 송선우 - 수식으로 계산이 이상함;
			d = window.b2link.el_list.getItemData_Last__maxCount_Limit( _el_ListContainer, _this.get__status_itemListContainer() );

		
		return d;
	};
	_this._getListItem_LastData = _getListItem_LastData;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "maxCount" : null
	 *	"fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super();

		_this._fn_req_getCount = _fn_req_getCount = d.fn.req_getCount;
		_this._fn_req_getList_Range__id = _fn_req_getList_Range__id = d.fn.req_getList_Range__id;

		_set__status_itemListContainer( d.idStart, d.idEnd, d.limit, d.maxCount );

		
	};
	_setData.super = _this.setData;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _this._el_ListContainer;

		_this._fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_TABLE_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;//override;

	//------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _set_Req__status_itemListContainer_maxCount = function()
	{
		

		_this._fn_req_getCount( _set_Req__status_itemListContainer_maxCount._f0 );

		
	};
	_this._set_Req__status_itemListContainer_maxCount = _set_Req__status_itemListContainer_maxCount;

	_set_Req__status_itemListContainer_maxCount._f0 = function( r ){ _status_itemListContainer.maxCount = r; };

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { "idS" : 0, "idE" : 10, "limit" : 10, "maxCount" : 0 };
	 */
	var _get__status_itemListContainer = function(){ return _status_itemListContainer; };
	/**
	 * @function
	 * @param {uint} idStart
	 * @param {uint} idEnd
	 * @param {uint} limit
	 * @param {uint} maxCount
	 */
	var _set__status_itemListContainer = function( idStart, idEnd, limit, maxCount )
	{
		

		_status_itemListContainer.idS = idStart ? idStart : -1;
		_status_itemListContainer.idE = idEnd ? idEnd : 20;
		_status_itemListContainer.limit = limit ? limit : 20;

		if( maxCount ) _status_itemListContainer.maxCount = maxCount;
		else _set_Req__status_itemListContainer_maxCount();

		console.log( _status_itemListContainer );

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_table );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.req_Data = _req_Data;
	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	_.get_el_ListContainer = _get_el_ListContainer

	_.get__status_itemListContainer = _get__status_itemListContainer;
	_.set__status_itemListContainer = _set__status_itemListContainer;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};





﻿




/**
 * window.b2linkUIClass.baseTable.NextPrev를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 가져온 데이터는 계속 추가로 등록되어 보여준다.
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 남아있다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.NextPrevAdd = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.NextPrev( url, $el_table );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	_this._fn_apply_html_child = window.b2link.html_tbody.apply_child__ReUseKeyList;
	_this._fn_push_el_child = window.b2link.el_tbody.push_child;
	_this._fn_unsihft_el_child = window.b2link.el_tbody.unshift_child;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _this._el_ListContainer );
		if( n == o.maxCount )
		{
			
			o.idS = o.maxCount + 1;
			return 1;
		}

		/*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS = n + 1;
		o.idE = o.idS + o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			/*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_First( _this._el_ListContainer );
		if( 0 == n )
		{
			
			o.idS = -2;
			return 1;
		}

		/*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idE = n - 1;
		o.idS = o.idE - o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_this._fn_req_getCount = null;
		_this._fn_req_getList_Range__id = null;

		_this._status_itemListContainer = null;

		_this._n_status_req = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		if( _calc_DataNext() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		/*/
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		

		_calc_DataNext();
		_calc_DataNext();

		var o = _this._status_itemListContainer;
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		if( _calc_DataPrev() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length )
		{
			_this._fn_apply_html_child( el, data );

			//window.b2link.element.injectValueForListItems( el, data );
			window.b2link.element.injectValueForListItemsAndID( el, data );
		}
		else
		{
			var f0 = window.b2link.element.injectValueForListItem;
			var len = el.children.length;
			var i=0, iLen=data.length;

			console.log( "_this._n_status_req : " + _this._n_status_req );

			if( _this._n_status_req )
			{
				_this._fn_push_el_child( el, data );
				for( ; i<iLen; ++i )
				{
					data[ i ].$idx = i;
					f0( el.children[ i + len ], data[ i ] );
					//console.log( data[ i ] );
				}
			}
			else
			{
				_this._fn_unsihft_el_child( el, data );
				for( ; i<iLen; ++i )
				{
					data[ i ].$idx = i;
					f0( el.children[ i ], data[ i ] );
					//console.log( data[ i ] );
				}
			}
			//console.log( "기존 Length : " + len );
			//console.log( "시작 Index : " + i );
			//console.log( "추가 Length : " + iLen );
		}

		_this.dispatch_TABLE_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_table );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	//--------------------------------------------------this;

	return _this;
};





﻿




/**
 * window.b2linkUIClass.baseTable.NextPrevAdd를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터는 제거된다.
 * ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 새 데이터 표출시 재사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.NextPrevRoll = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.NextPrevAdd( url, $el_table );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	_this._fn_change_el_child = window.b2link.el_tbody.change_child;
	_this._fn_push_el_child = null;
	_this._fn_unsihft_el_child = null;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _this._el_ListContainer );
		if( n == o.maxCount )
		{
			
			o.idS = o.maxCount + 1;
			return 1;
		}

		/*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS += o.limit / o.limitTerm;
		o.idE += o.limit / o.limitTerm;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			//*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_First( _this._el_ListContainer );
		if( 0 == n )
		{
			
			o.idS = -2;
			return 1;
		}

		/*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idS -= o.limit / o.limitTerm;
		o.idE -= o.limit / o.limitTerm;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_this._fn_req_getCount = null;
		_this._fn_req_getList_Range__id = null;

		_this._status_itemListContainer = null;

		_this._n_status_req = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		

		if( _calc_DataNext() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		//*/
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		

		_calc_DataNext();
		_calc_DataNext();

		var o = _this._status_itemListContainer;
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			
			return;
		}

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		

		if( _calc_DataPrev() )
		{
			
			return;
		}

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "limitTerm" : 2
	 *	, "maxCount" : null
	 *	, "fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_this._fn_req_getCount = _fn_req_getCount = d.fn.req_getCount;
		_this._fn_req_getList_Range__id = _fn_req_getList_Range__id = d.fn.req_getList_Range__id;

		_set__status_itemListContainer( d.idStart, d.idEnd, d.limit, d.limitTerm, d.maxCount );

		
	};

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length ) _this._fn_apply_html_child( el, data );
		else _this._fn_change_el_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_TABLE_DATA_CHANGED();

		
	};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { "idS" : 0, "idE" : 10, "limit" : 10, "limitTerm" : 2, "maxCount" : 0 };
	 */
	//var _get__status_itemList = function(){ return _this._status_itemListContainer; };
	/**
	 * @function
	 * @param {uint} idStart
	 * @param {uint} idEnd
	 * @param {uint} limit
	 * @param {uint} limitTerm
	 * @param {uint} maxCount
	 */
	var _set__status_itemListContainer = function( idStart, idEnd, limit, limitTerm, maxCount )
	{
		

		_this._status_itemListContainer.idS = idStart ? idStart : -1;
		_this._status_itemListContainer.idE = idEnd ? idEnd : 20;
		_this._status_itemListContainer.limit = limit ? limit : 20;
		_this._status_itemListContainer.limitTerm = limitTerm ? limitTerm : 2;

		if( maxCount ) _this._status_itemListContainer.maxCount = maxCount;
		else _this._set_Req__status_itemListContainer_maxCount();

		console.log( _this._status_itemListContainer );

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setEventDispatcher( $el_table );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};





﻿




/**
 * window.b2linkUIClass.baseTable.NextPrevRoll를 상속 한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.NextPrevRollUserHandleEvt = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.NextPrevRoll( url, $el_table );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var _el_ListContainer = _this.get_el_ListContainer();

	var _bScrollBottomEnd = false;
	var _bScrollTopEnd = false;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		_addEvent_scroll_listItemContainer();
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_removeEvent_scroll_listItemContainer();
		_removeEvent_mWheel_listItemContainer();
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent_scroll_listItemContainer = function()
	{
		_removeEvent_scroll_listItemContainer();
		_el_ListContainer.addEventListener( "scroll", _evt_mScroll_listItemContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_scroll_listItemContainer = function()
	{
		_el_ListContainer.removeEventListener( "scroll", _evt_mScroll_listItemContainer, false );
	};

	/**
	 * @function
	 */
	var _addEvent_mWheel_listItemContainer = function()
	{
		_removeEvent_mWheel_listItemContainer();
		_el_ListContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_mWheel_listItemContainer = function()
	{
		_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mScroll_listItemContainer = function( e )
	{
		//

		//console.log( e );

		e.stopImmediatePropagation();
		e.stopPropagation();

		_removeEvent_scroll_listItemContainer();

		var t = e.target;//console.log( t );

		/*/
		console.log( "t.scrollLeft : " + t.scrollLeft );
		console.log( "t.scrollHeight : " + t.scrollHeight );
		console.log( "t.scrollTop : " + t.scrollTop );
		console.log( "t.scrollWidth : " + t.scrollWidth );
		//*/

		if( t.scrollHeight == ( t.clientHeight + t.scrollTop ) )
		{
			console.log( "scroll is Bottom." );

			_bScrollBottomEnd = true;
			_bScrollTopEnd = false;
			_addEvent_scroll_listItemContainer();
			

			//listItemContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
			_addEvent_mWheel_listItemContainer();

			return;
		}
		else if( 0 == t.scrollTop )
		{
			//console.log( "scroll is Top." );

			_bScrollBottomEnd = false;
			_bScrollTopEnd = true;
			_addEvent_scroll_listItemContainer();
			

			//listItemContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
			_addEvent_mWheel_listItemContainer();

			return;
		}

		_bScrollBottomEnd = false;
		_bScrollTopEnd = false;

		_addEvent_scroll_listItemContainer();

		//
	};

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 */
	var _evt_mWheel_listItemContainer = function( e )
	{
		//

		console.log( "e.wheelDelta : " + e.wheelDelta );
		//e = _fn_setMouseDeltaNomalize( e );

		//listItemContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
		_removeEvent_mWheel_listItemContainer();

		e.stopImmediatePropagation();
		e.stopPropagation();

		if( _bScrollBottomEnd && ( 0 > e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
			//_removeEvent_mWheel_listItemContainer();

			_el_ListContainer.scrollTop = _el_ListContainer.scrollTop / 2;
			$el_table.js.req_Data_Next();
		}
		else if( _bScrollTopEnd && ( 0 < e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
			//_removeEvent_mWheel_listItemContainer();

			_el_ListContainer.scrollTop = _el_ListContainer.scrollHeight / 2;
			$el_table.js.req_Data_Prev();
		}

		//
	};

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 * @return {MouseWheelEvent}
	 */
	/*/
	var _fn_setMouseDeltaNomalize = function( e )
	{
		var o = e,
			d = o.detail, w = o.wheelDelta,
			n = 225, n1 = n-1;

		//Normalize delta;
		d = d ? w && (f = w/d) ? d/f : -d/1.35 : w/120;
		//Quadratic scale if |d| > 1;
		d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
		//Delta *should* not be greater than 2...;
		e.delta = Math.min(Math.max(d / 2, -1), 1);

		return e;
	}
	//*/

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "limitTerm" : 2
	 *	, "maxCount" : null
	 *	, "fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super( d );

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	_this.setEventDispatcher( $el_table );
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * Layout을 정의하고 그안에는 container들을 AppendChild 하기 위한 용도이다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.FullSizeLayout = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.container.Layout( url, $el );
		_this.__FULL_SIZE_MODE = $el.__FULL_SIZE_MODE = 1;

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	//_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.FullSizeModalPanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

		_this.__FULL_SIZE_MODE = $el.__FULL_SIZE_MODE = 1;

	//Extends - Insection;
	window.b2linkExtends.injection.modalPanel( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-FullSizeModalPanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-FullSizeModalPanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.FullSizePanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

		_this.__FULL_SIZE_MODE = $el.__FULL_SIZE_MODE = 1;

	//Extends - Insection;
	window.b2linkExtends.injection.hide_show( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-FullSizePanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-FullSizePanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template(./ui) 에서 사용한다.
 *
 * window.b2linkUIClass.selector.***을 상속받은 ./ui_import/ 컴포넌트를 활용한 ./ui_template/에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.FullSizeSearchSelector = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

		_this.__FULL_SIZE_MODE = $el.__FULL_SIZE_MODE = 1;

	//Extends - Injection;
	window.b2linkExtends.injection.searchSelector( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mClick = function( fn )
	{
		_this.removeEvent_mClick();
		_this.setData( fn, null );
		//_this.addEvent__Callback( fn, null );
	};
	_this.removeEvent_mClick = function(){ _this.setData( null, null ); };
	//_this.removeEvent_mClick = function(){ _this.removeEvent__Callback(); };

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mDoubleClick = function( fn )
	{
		_this.removeEvent_mDoubleClick();
		_this.setData( null, fn );
		//_this.addEvent__Callback( null, fn );
	};
	_this.removeEvent_mDoubleClick = function(){ _this.setData( null, null ); };
	//_this.removeEvent_mDoubleClick = function(){ _this.removeEvent__Callback(); };

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-SearchSelector" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	/*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-SearchSelector" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.InfoPanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Insection;
	window.b2linkExtends.injection.hide_show( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-InfoPanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-InfoPanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.InputModalPanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Insection;
	window.b2linkExtends.injection.inputModalPanel( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-InputModalPanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	/**
	 * Modal을 동반한 Static Selector UI를 화면에 띄운 후 해당 List 항목을 MouseClick하였을 시에 Callback Function에 SelectedItem을 Parameter로 넘겨서 실행 시킨다.
	 * @function
	 * @param {Function} modalUIAPI window.b2link_ui.staticSelector***.***;
	 * @param {Function} callback function( selectedItem ){};
	 */
	var _showModal_SelectorItem_mClick = function( modalUIAPI, callback )
	{
		

		var o = modalUIAPI();

		var js = o[ 1 ];
			js.getListElement().js.addEvent_mClick( function( selectedItem ){
				//js.hideAndModal();
				js.hideAndModal_Sync();
				callback( selectedItem );
			});

		
	};

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	//*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-InputModalPanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.showModal_SelectorItem_mClick = _showModal_SelectorItem_mClick;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.InputPanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Insection;
	window.b2linkExtends.injection.inputPanel( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-InputPanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	/**
	 * Modal을 동반한 Static Selector UI를 화면에 띄운 후 해당 List 항목을 MouseClick하였을 시에 Callback Function에 SelectedItem을 Parameter로 넘겨서 실행 시킨다.
	 * @function
	 * @param {Function} modalUIAPI window.b2link_ui.staticSelector***.***;
	 * @param {Function} callback function( selectedItem ){};
	 */
	var _showModal_SelectorItem_mClick = function( modalUIAPI, callback )
	{
		

		var o = modalUIAPI();

		var js = o[ 1 ];
			js.getListElement().js.addEvent_mClick( function( selectedItem ){
				//js.hideAndModal();
				js.hideAndModal_Sync();
				callback( selectedItem );
			});

		
	};

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	//*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-InputPanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.showModal_SelectorItem_mClick = _showModal_SelectorItem_mClick;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * Layout을 정의하고 그안에는 container들을 AppendChild 하기 위한 용도이다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.Layout = function( url, $el, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Insection;
	window.b2linkExtends.injection.hide_show( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.ModalPanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Insection;
	window.b2linkExtends.injection.modalPanel( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-ModalPanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-ModalPanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.Panel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Insection;
	window.b2linkExtends.injection.hide_show( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-Panel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-Panel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template(./ui) 에서 사용한다.
 *
 * window.b2linkUIClass.selector.***을 상속받은 ./ui_import/ 컴포넌트를 활용한 ./ui_template/에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.SearchSelector = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Injection;
	window.b2linkExtends.injection.searchSelector( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mClick = function( fn )
	{
		_this.removeEvent_mClick();
		_this.setData( fn, null );
		//_this.addEvent__Callback( fn, null );
	};
	_this.removeEvent_mClick = function(){ _this.setData( null, null ); };
	//_this.removeEvent_mClick = function(){ _this.removeEvent__Callback(); };

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mDoubleClick = function( fn )
	{
		_this.removeEvent_mDoubleClick();
		_this.setData( null, fn );
		//_this.addEvent__Callback( null, fn );
	};
	_this.removeEvent_mDoubleClick = function(){ _this.setData( null, null ); };
	//_this.removeEvent_mDoubleClick = function(){ _this.removeEvent__Callback(); };

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-SearchSelector" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
		{
		}
	 * </code>
	 */
	/*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-SearchSelector" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template(./ui) 에서 사용한다.
 *
 * window.b2linkUIClass.selector.***을 상속받은 ./ui_import/ 컴포넌트를 활용한 ./ui_template/에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.Selector = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Injection;
	window.b2linkExtends.injection.selector( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mClick = function( fn )
	{
		_this.removeEvent_mClick();
		_this.setData( fn, null );
		//_this.addEvent__Callback( fn, null );
	};
	_this.removeEvent_mClick = function(){ _this.setData( null, null ); };
	//_this.removeEvent_mClick = function(){ _this.removeEvent__Callback(); };

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mDoubleClick = function( fn )
	{
		_this.removeEvent_mDoubleClick();
		_this.setData( null, fn );
		//_this.addEvent__Callback( null, fn );
	};
	_this.removeEvent_mDoubleClick = function(){ _this.setData( null, null ); };
	//_this.removeEvent_mDoubleClick = function(){ _this.removeEvent__Callback(); };

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-Selector" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	/*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-Selector" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });


		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_template/(./ui/) 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.container.TextBoxModalPanel = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.RootElement( url, $el, _this );
		_this = window.b2linkUIClass.inputor.DataInputElement( url, $el );

	//Extends - Insection;
	window.b2linkExtends.injection.textBoxModalPanel( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-TextBoxModalPanel" ) ); }
		catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성" ); }

		_this.$f0 = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//타이틀 바에 마우스 드래그 기능을 추가한다.;
	try{ window.b2link.ui_feature.drag( _this.$f0( $el, "titleBar-TextBoxModalPanel" ), true ); }
	catch( er ){ window.b2link_ui.message.error( "TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성", er ); }


	//--------------------------------------------------;
	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f = _this.addEventCallBackFunction__EventType;

		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "btn_Cancel", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hide(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal(); });
		f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_mClick_btn_Close", function( e ){ if( "click" != e.type ) return; _this.hideAndModal_MoveCurrentChildren(); });

		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hide(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal(); });
		f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveBGCLastChild(); });
		//f( "evt_kUp_Close__ESC", function( e ){ if( 27 == e.keyCode ) _this.hideAndModal_MoveCurrentChildren(); });
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
};







if( console ) console.log("[ S ] - " + fileNm + "----------" );


/**
 * @class
 * @param {String} url js file url
 * @param {HTMLDIVElement} $el_div 이 Controller 객체가 조작할 HTMLDIVElement
 */
window.b2linkUIClass.datepicker.Calendar = function( url, $el_div )
{
	

	var Calendar = window.b2link.util.importJS__Reuse( window.b2link.url.getServerURLByServers( "SYS0015_WebServer" ) + "/libs/B2LiNK/ui/datePicker/libs.B2LiNK.ui.datePicker.Calendar.js", arguments );

	

	//Extends;
	var _this = window.b2linkUIClass.inputor.DataInputElement( url, $el_div );
		_this = window.b2linkUIClass.base.RootElement( url, $el_div, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

	var _el_input_field = $f0( $el_div, "datepicker-input" );

	//--------------------------------------------------;

	//--------------------------------------------------;

	var minYear = 2016;
	var maxYear = new Date().getFullYear() + 5;
		maxYear = (maxYear <= minYear) ? minYear + 5 : maxYear;

	var _calendar = new Calendar({
		field : _el_input_field
		, container : $el_div
		, bound : false
		, language : window.b2link.STATIC.CONFIG.URL.UI.LOCALE
		, minDate : new Date( minYear, 0, 1 )
		, maxDate : new Date( maxYear, 11, 31 )
		, yearRange : [ minYear, maxYear ]
		, trigger : $el_div
	, } );
	//_calendar.setInputField( $f0( $el_div, "datepicker-input" ) );

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		

		_removeEvent();
		_el_input_field.addEventListener( "change", _evt_mClick_$el_div, false, 0, true );

		
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		

		_el_input_field.removeEventListener( "change", _evt_mClick_$el_div, false );

		
	};

	/**
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_mClick_$el_div = function( e )
	{
		

		_mClick._f0( _calendar );

		
	};

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_calendar.destroy();

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} cb_Complete function( date ){};
	 */
	var _mClick = function( cb_Complete )
	{
		

		if( !cb_Complete ) return;

		_mClick._cb_Complete = cb_Complete;

		
	};
	_mClick._cb_Complete = null;
	_mClick._f0 = function( date )
	{
		if( _mClick._cb_Complete )
		{
			_mClick._cb_Complete( date );

			//수정 - 20170214 - 송선우;
			//_mClick._cb_Complete._ownerCtrl.hideAndModal_Sync();
			_mClick._cb_Complete._ownerCtrl.hideAndModal_MoveBGCLastChild();

			//_mClick._cb_Complete = null;
		}
	};

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * </code>
	 */
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_addEvent();

	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f1 = _this.addEventCallBackFunction__EventType;
		f1( "evt_mClick_datePicker", _evt_mClick_$el_div );

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_div;

		_.calendar = _calendar;

		_.dispose = _dispose;

		_.mClick = _mClick;

		_.setData = _setData;
	//--------------------------------------------------this;

	window.b2link.obj.copyReference_Public_Function( _, _calendar );

	return _;
};


if( console ) console.log("[ E ] - " + fileNm + "----------" );







window.b2linkUIClass.form.DataElements = function( url, $el_div, _this )
{
	//Extends;
	var _this = _this ? _this : { __url : url };
	

	

	var _o_DataInputElements = {};

	
	var _setDataInputElements = function(){
		

		var o = _getDataInputElements();
		var a = $el_div.getElementsByTagName( "INPUT" );
		var io;

		for( i=0; i<a.length; i++ )
		{
			io = a[ i ];

			if( io.type == "radio" )
			{
				if( ! o[ io.name ] ) o[ io.name ] = {};
				o[ io.name ][ io.id ] = io;

				if( io.checked ) o[ io.name ][ "checked" ] = io.value;
				continue;
			}

			if( io.className || io.id ) o[ io.className || io.id ] = io;
		}

		//Textarea;
		var t = $el_div.getElementsByTagName( "TEXTAREA" );
		Array.from( t ).forEach( function( io ){ if( io.className || io.id ) o[ io.className || io.id ] = io; });

		//Select;
		t = $el_div.getElementsByTagName( "SELECT" );
		Array.from( t ).forEach( function( io ){ if( io.className || io.id ) o[ io.className || io.id ] = io; });

		//window.b2link.element.getFormElements( o, $el_div );

		
	};

	var _getDataInputElements = function()
	{
		

		return _o_DataInputElements;

		
	};

	var _getDataInputElements_fromDiv = function( el )
	{
		

		var o = {};
		var a = el.getElementsByTagName( "INPUT" );
		var io;
		for( i=0; i<a.length; i++ )
		{
			io = a[ i ];
			if( io.className || io.id )
			{
				if( io.className ) o[ io.className ] = io;
				else o[ io.id ] = io;
			}
		}

		//window.b2link.element.getFormElements( o, $el_div );

		return o;

		
	};

	var _clearDataInputElements = function()
	{
		
		var o = _getDataInputElements();
		for( key in o ){
			o[ key ].value = "";
		}
		
	};

	/**
	 * [_setInputValues description]
	 * @param {[type]} data		[description]
	 * @param {[type]} cls_segment [description]
	 */
	var _setInputValues = function( data, cls_segment, dataInputElements ){

		if( !data || Object.keys(data).length == 0 ){
			return;
		}

		var o = dataInputElements ? dataInputElements : _this.getDataInputElements();

		var el = null;
		var cls_nm = null;
		var input_prefix = "input__";

		for( key in data ){
			//console.log( key + " : " + typeof obj[key] + " : " + obj[key] );
			//if( typeof data[ key ] !== "object" && typeof data[ key ] !== "array" ){
			if( [ "array", "object" ].indexOf( (typeof data[ key ]).toLowerCase() ) < 0){
				cls_nm = input_prefix + (cls_segment ? cls_segment + "." : "") + key;
				el = o[ cls_nm ];
				if( el ){
					el.value = data[ key ];
				}
			} else {
				if( !Array.isArray(data[key]) ){
					_setInputValues( data[key], (cls_segment ? cls_segment + "." : "") + key, o );
				}
			}
		};
	}

	
	_this.setDataInputElements = _setDataInputElements;
	_this.getDataInputElements = _getDataInputElements;
	_this.getDataInputElements_fromDiv = _getDataInputElements_fromDiv;
	_this.clearDataInputElements = _clearDataInputElements;
	_this.setInputValues = _setInputValues;
	
	return _this;
};










/**
 * 한개의 input을 add와 update 양쪽에서 사용할 수 있도록 도와주는 class
 * ## 주의: 리스트/테이블 성 데이터가 있는경우 사용 불가
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.form.Inputs = function( url, $el_div )
{
	//Extends;
	var _this = window.b2linkUIClass.inputor.InputBox( url, $el_div );

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * $el_div에서 모든 form elements를 o 에 inject 해주는 function
	 * @Override
	 * @function
	 */
	var _setDataInputElements = function()
	{
		

		var o = _this.getDataInputElements();
		window.b2link.element.getFormElements( o, $el_div );

		
	};

	//--------------------------------------------------;

	/**
	 * $el_div의 form element들의 클래스 이름과 value를 key, value object로 get 해주는 function
	 *
	 * @function
	 * @return {Object} form elements들에 setting 할 데이터
	 */
	var _getDetailData = function()
	{
		

		var d = {};
		var formElements = window.b2link.element.getFormElements( null, $el_div );

		for( var key in formElements )
		{
			if( !formElements.hasOwnProperty( key ) ) continue;

			try
			{
				d[ formElements[ key ].classList[0] ] = window.b2link.element.getValueOfElement( formElements[ key ] );
			}
			catch( e ) // radio 등;
			{
				d[ formElements[ key ][0].classList[0] ] = window.b2link.element.getValueOfElement( formElements[ key ] );
			}
		}

		
		return d;
	};

	/**
	 * $el_div의 form element들에 value를 data의 key와 form element의 1번째 클래스 이름을 매칭하여 value를 set 해주는 function
	 * ## 주의: data의 키값과 form element의 1번째 클래스 이름이 매칭되어야함
	 *
	 * @function
	 * @param {Object} data form elements들에 setting 할 데이터
	 */
	var _setDetailData = function( data )
	{
		

		var o = _this.getDataInputElements();

		for( var s in o )
		{
			var value = data;
			var keys = s.split('.');

			for( var key in keys )
			{
				if( value == undefined ){ break; }

				value = value[ keys[ key ] ];
			}

			if( value != undefined && typeof(value) != "object" )
			{
				window.b2link.element.setValueOfElement( o[s], value );
			}
		}

		
	};


	var _clearDetailData = function()
	{
		

		var o = _this.getDataInputElements();

		for( var s in o )
		{
			window.b2link.element.setValueOfElement( o[s], "" );
		}

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	_this.setData({
		fn : {
			setDataInputElements : _setDataInputElements
		}
	})

	//--------------------------------------------------this;
	var _ = _this;

		_.setDetailData = _setDetailData;
		_.getDetailData = _getDetailData;
		_.clearDetailData = _clearDetailData;

	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.inputor.DataInputElement = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * 이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시키는 로직은 담은 Callback Function
	 * @function
	 */
	var _fn_clearDataInputElements = null;
	var _fn_getDataForQuery = null;
	var _fn_setDataInputElements = null;

	/**
	 * 대상 Element($el)에서 가지고 있는 데이터 Element의 Reference
	 * @property {Object}
	 */
	var _o_DataInputElements = {};

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * 이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시킨다.
	 * @function
	 */
	var _clearDataInputElements = function(){ _fn_clearDataInputElements(); };

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_fn_clearDataInputElements = null;
		_fn_getDataForQuery = null;
		_fn_setDataInputElements = null;

		_o_DataInputElements = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * Input Data 형태 Elements에서 Value(값)를 가져온다.
	 * @function
	 * @return {Object}
	 */
	var _getDataForQuery = function()
	{
		

		var r = _fn_getDataForQuery();
		window.TtwLog.info( r );

		
		return r;
	};

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"clearDataInputElements" : function(){ var o = _this.getDataInputElements(); o.??? = ... }
	 *
	 *		, "getDataForQuery" : function( dataInputElements ){}
	 *
	 *		, "setDataInputElements" : function(){ var o = _this.getDataInputElements(); o.??? = ... }
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super( d );

		_fn_clearDataInputElements = d.fn.clearDataInputElements;
		_fn_getDataForQuery = d.fn.getDataForQuery;
		_fn_setDataInputElements = d.fn.setDataInputElements;

		//_fn_setDataInputElements();
		_setDataInputElements();

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	/**
	 * Input Data 형태 Elements들을 담아놓은 구조체를 리턴해준다.
	 * @Override
	 * @function
	 * @return {Object}
	 */
	var _getDataInputElements = function(){ return _o_DataInputElements; };

	/**
	 * Input Data 형태 Elements들을 컨트롤 하기위한 하나의 구조체에 담는다.
	 * var o = _this.getDataInputElements();로 가져와서 사용한다.
	 * @function
	 */
	var _setDataInputElements = function()
	{
		

		_fn_setDataInputElements();

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		//이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시킨다.;
		_.clearDataInputElements = _clearDataInputElements;

		//Input Data 형태 Elements에서 Value(값)를 가져온다.;
		_.getDataForQuery = _getDataForQuery;

		_.setData = _setData;

		//Input Data 형태 Elements들을 담아놓은 구조체를 리턴해준다.;
		_.getDataInputElements = _getDataInputElements;

		//Input Data 형태 Elements들을 컨트롤 하기위한 하나의 구조체에 담는다.;
		_.setDataInputElements = _setDataInputElements;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.inputor.InputBox = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.inputor.DataInputElement( url, $el );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Injection;
	window.b2linkExtends.injection.inputBox( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_dispose.super();
	};
	_dispose.super = _this.dispose;

	/**
	 * Modal을 동반한 Static Selector UI를 화면에 띄운 후 해당 List 항목을 MouseClick하였을 시에 Callback Function에 SelectedItem을 Parameter로 넘겨서 실행 시킨다.
	 * @function
	 * @param {Function} modalUIAPI window.b2link_ui.staticSelector***.***;
	 * @param {Function} callback function( selectedItem ){};
	 */
	var _showModal_SelectorItem_mClick = function( modalUIAPI, callback )
	{
		

		var o = modalUIAPI();

		var js = o[ 1 ];
			js.getListElement().js.addEvent_mClick( function( selectedItem ){
				//js.hideAndModal();
				js.hideAndModal_Sync();
				callback( selectedItem );
			});

		
	};

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 */
	//*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		//Modal을 동반한 Static Selector UI를 화면에 띄운 후 해당 List 항목을 MouseClick하였을 시에 Callback Function에 SelectedItem을 Parameter로 넘겨서 실행 시킨다.;
		_.showModal_SelectorItem_mClick = _showModal_SelectorItem_mClick;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.inputor.TextAreaBox = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.inputor.DataInputElement( url, $el );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Injection;
	window.b2linkExtends.injection.textAreaBox( _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	

	//	FUNCTION;

	

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 */
	//*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};










/**
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.list.SearchList = function( url, $el_div, _this, d )
{
	/**
	* 이 API를 통해 생성되는 Object
	* @property {Object}
	*/
	var _this = _this ? _this : { __url : url };

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------;

	//----------Request에서 사용하는 Parameters;
	var _reqParams__limit;//{String};

	var _reqParams__nm_db;//{String};
	var _reqParams__nm_col;//{String};

	var _reqParams__skip;//{Number};
	//----------Request에서 사용하는 Parameters;

	//--------------------------------------------------;

	var _el_result_filter_panel = _this.$f0( $el_div, "result-filter-panel" );
	var _el_result_field = _this.$f0( $el_div, "result-field" );

	var _el_search_btns = _this.$f0( $el_div, "search-btns" );
	var _el_search_field = _this.$f0( $el_div, "search-field" );
	var _el_search_foldable_box = _this.$f0( $el_div, "search-foldable-box" );


	//TABLE;
	var _el_tbody = _this.$f0( $el_div, "tbody" );
	var _el_tfoot = _this.$f0( $el_div, "tfoot" );
	var _el_thead = _this.$f0( $el_div, "thead" );

	/**
	 * @property {Array}
	 */
	var result_set = [];

	//--------------------------------------------------페이지네비 컴포넌트 시작;
	var _nav_ul = _this.$f0( $el_div, "page_navigation" );
	var _nav_ulCtrl = _nav_ul.js;
		_nav_ulCtrl.setData({
			  _n_item_size : _reqParams__limit ? _reqParams__limit : 5//리스트에 뿌려지는 아이템 갯수;
			, _n_page_size : 5//리스트 하단에 뿌려지는 페이지 번호 갯수;
			, _n_cur_page_num : 1//현재 페이지;
			, _b_show_page_size : true//아이템 갯수 select box 기능 사용여부;
			, _b_show_move_func : true//페이지 바로가기 기능 사용여부;
		});
	//--------------------------------------------------페이지네비 컴포넌트 종료;

	//네비게이터에서 토탈 아이템 갯수를 정의 해주고 네이게이터를 그려준다.;
	_nav_ulCtrl.set_total_item_cnt( 0 );

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		$el_div.addEventListener( window.b2link.event.HIDED_EL, _evt_hide_el, false, 0, true );

		_el_search_btns.addEventListener( "click", _evt_search_btns_click, false, 0, true );

		_el_search_field.addEventListener( "keyup", _evt_search_input_enter, false, 0, true );
		_el_search_field.addEventListener( "click", _evt_search_input_click, false, 0, true );
		_el_search_foldable_box.addEventListener( "click", _evt_search_foldable, false, 0, true );

		_el_result_filter_panel.addEventListener( "click", _evt_result_filter, false, 0, true );

		_nav_ul.addEventListener( window.b2link.event.NAVIGATION_ITEM_SELECTED, _evt_nav_item_selected, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$el_div.removeEventListener( window.b2link.event.HIDED_EL, _evt_hide_el, false );

		_el_search_btns.removeEventListener( "click", _evt_search_btns_click, false );
		_el_search_field.removeEventListener( "keyup", _evt_search_input_enter, false );
		_el_search_foldable_box.removeEventListener( "click", _evt_search_foldable, false );

		_el_result_filter_panel.removeEventListener( "change", _evt_result_filter, false );

		_nav_ul.removeEventListener( window.b2link.event.NAVIGATION_ITEM_SELECTED, _evt_nav_item_selected, false );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	var _evt_search_input_enter = function( e )
	{
		

		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		var t = e.target;

		if( e.keyCode === 13 )//Enter;
		{
			if( t.tagName === "INPUT" ) _req_Search( _el_search_field );
		}
		else if( e.keyCode !== 91 && ( e.keyCode < 9 || e.keyCode > 40 ) )
		{
			var attr = t.getAttribute( "evt_mclick" );
			switch( attr )
			{
				case "evt_date_picker" :
					t.value = "";
				break;

				default : break;
			}
		}

		
	};

	//--------------------------------------------------;

	var _evt_search_input_click = function( e )
	{
		

		var t = e.target;
		var attr = t.getAttribute("evt_mclick");

		switch( attr )
		{
			case "evt_date_picker" :
				window.b2link_ui.date_picker.calendar.mClickInModal( function( calendar ) {

					t.value = calendar.getFormatDate( calendar.getDate(), "-" );

					// 기간별 날짜 조건 2개 중에 한 쪽을 입력하면 나머지 쪽도 동일한 날짜 자동 추가
					var tag = t.parentElement.getElementsByTagName("input");
					var i=0, iLen=tag.length;
					for( ; i<iLen; ++i )
					{
						var io = tag[ i ];
						if ( !io.value.trim() )
						{
								io.value = t.value;
						}
					}

				});
			break;

			default : break;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_search_btns_click = function( e )
	{
		

		var t = e.target.getAttribute("class");

		switch( t )
		{
			case "btn_Search" :

				//검색 버튼 클릭시 페이지네이션 초기화
				_reqParams__skip = 0;
				_setRequestParameters._d.skip = 0;
				_nav_ulCtrl.setData({
					_n_cur_page_num : 1
				});
				_nav_ulCtrl.set_total_item_cnt( 0 );
				_nav_ulCtrl.__el.getElementsByClassName( "s_itemSize" )[ 0 ].options.selectedIndex = 0;

				_req_Search( _el_search_field );

				break;
			case "btn_Reset" :
				_req_Reset( _el_search_field );
				break;
			default : break;
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_result_filter = function( e )
	{
		

		var t = e.target;//HTMLElement;

		if( t.tagName === "INPUT")
		{
			var ct = e.currentTarget;//HTMLElement;

			if( t.id === "check-filter-all" ) _fn_result_filter_all_yn( ct );
			else _fn_result_filter_tag_yn( ct, t );
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_search_foldable = function( e )
	{
		

		var _el_search_panel = $el_div.getElementsByClassName( "search-panel" );
		var _el_search_foldable = $el_div.getElementsByClassName( "search-foldable" );

		if( _el_search_panel.length )
		{
			var elsp0 = _el_search_panel[ 0 ];
			var elsp1 = _el_search_panel[ 1 ];
			var elsf0 = _el_search_foldable[ 0 ];
			var elsf1 = _el_search_foldable[ 1 ];

			if( elsp0.style.display === "block" )
			{
				var clientWidth = elsp0.clientWidth;

				if( elsp0 ) elsp0.style.display = "none";
				if( elsp1 ) elsp1.style.display = "block";
				if( elsf0 ) elsf0.style.display = "none";
				if( elsf1 ) elsf1.style.display = "block";

				elsp1.style.width = ( clientWidth - 20 ) + "px";
			}
			else
			{
				if( elsp0 ) elsp0.style.display = "block";
				if( elsp1 ) elsp1.style.display = "none";
				if( elsf0 ) elsf0.style.display = "block";
				if( elsf1 ) elsf1.style.display = "none";
			}
		}

		
	};

	//--------------------------------------------------;

	/**
	 * 페이지네비 컴포넌트 이벤트 발생
	 * @param {CustomEvent} e event
	 */
	var _evt_nav_item_selected = function( e )
	{
		

		_reqParams__skip = _nav_ulCtrl.getData()._n_skip_num;
		_reqParams__limit = _nav_ulCtrl.getData()._n_limit_num;

		_req_Search( _el_search_field );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_hide_el = function( e )
	{
		

		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		_req_Reset( _el_search_field );//검색 패널 필드 초기화;

		//검색 패널 초기화;
		var _el_search_foldable = $el_div.getElementsByClassName( "search-foldable" );
		if( _el_search_foldable.length )
		{
			var elsf0 = _el_search_foldable[ 0 ];
			var elsf1 = _el_search_foldable[ 1 ];
			if( elsf0 ) elsf0.style.display = "block";
			if( elsf1 ) elsf1.style.display = "none";
		}

		var _el_search_panel = $el_div.getElementsByClassName( "search-panel" );
		if( _el_search_panel.length )
		{
			var elsp0 = _el_search_panel[ 0 ];
			var elsp1 = _el_search_panel[ 1 ];
			if( elsp0 ) elsp0.style.display = "block";
			if( elsp1 ) elsp1.style.display = "none";
		}


		//검색 필터 초기화;
		_fn_result_filter_all_yn( _el_result_filter_panel, true );

		_setData__tbody( [] );//결과 테이블 초기화;

		//페이지네비 초기화;
		_reqParams__skip = _setRequestParameters._d.skip;
		_reqParams__limit = _setRequestParameters._d.limit;

		_nav_ulCtrl.setData({
			  _n_item_size	 : _reqParams__limit//리스트에 뿌려지는 아이템 갯수;
			, _n_page_size	 : 5//리스트 하단에 뿌려지는 페이지 번호 갯수;
			, _n_cur_page_num: 1//현재 페이지;
			, _b_show_page_size : true//아이템 갯수 select box 기능 사용여부;
			, _b_show_move_func : true//페이지 바로가기 기능 사용여부;
		});
		_nav_ulCtrl.set_total_item_cnt( 0 );
		_nav_ulCtrl.__el.getElementsByClassName( "s_itemSize" )[ 0 ].options.selectedIndex = 0;

		_removeEvent();

		//컨텐츠 보기 이벤트 처리;
		/*/
		$el_div.removeEventListener( window.b2link.event.SHOWED_EL, _evt_show_el, false, 0 );
		$el_div.addEventListener( window.b2link.event.SHOWED_EL, _evt_show_el, false, 0, true );
		/*///20170416 - 송선우;
		window.b2link.event.addEventBeforeRemove( $el_div, window.b2link.event.SHOWED_EL, _evt_show_el );
		//*/

		
	}

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_show_el = function( e )
	{
		

		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		_addEvent();

		
	}

	

	//	FUNCTION;

	

	/**
	 * @function
	 * @param {Element} el
	 */
	var _req_Search = function( el )
	{
		

		var find = _getFindObj( el );

		console.log( "find : ", find );

		_req_Data( find );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Element} el
	 */
	var _req_Reset = function( el )
	{
		

		var tag = null;

		if( !el ) return null;

		tag = el.children[ 0 ].getElementsByTagName( "SELECT" );
		var io;
		var i=0, iLen=tag.length;
		for( ; i<iLen; ++i )
		{
			var io = tag[ i ];
			if( io.getAttribute( "class" ) != null
				&& io.getAttribute( "class" ).indexOf( "find-" ) === 0//"find-" 조금 위험해보임;
				&& io.selectedIndex !== 0 )
			{
				if ( io.getAttribute( "readonly" ) ) continue;
				tag[ i ].selectedIndex = 0;
			}
		}

		tag = el.children[ 0 ].getElementsByTagName( "INPUT" );
		var io;
		var i=0, iLen=tag.length;
		for( ; i<iLen; ++i )
		{
			var io = tag[ i ];
			if( io.getAttribute( "class" ) != null
				&& io.getAttribute( "class" ).indexOf( "find-" ) === 0//"find-" 조금 위험해보임;
				&& io.value.trim() !== "" )
			{
				if ( io.getAttribute( "readonly" ) ) continue;
				io.value = "";
			}
		}

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} find
	 * @param {Object} sort SORT는 항후 테이블 THEAD에서 정렬 아이콘을 CLICK 했을 때 넘기면 된다.
	 */
	var _req_Data = function( find, sort )
	{
		

		window.TtwLog.log( "_reqParams__nm_db : " + _reqParams__nm_db );
		window.TtwLog.log( "_reqParams__nm_col : " + _reqParams__nm_col );
		window.TtwLog.log( "_reqParams__skip : " + _reqParams__skip );
		window.TtwLog.log( "_reqParams__limit : " + _reqParams__limit );

		window.b2link_service.list.getSearchList({
				db_nm : _reqParams__nm_db
				, col_nm : _reqParams__nm_col
				, skip : _reqParams__skip
				, limit : _reqParams__limit

				, find : find ? window.b2link.uri.getURIReplaceSharp__JSON( find ) : "{}"
				, sort : sort ? JSON.stringify( sort ) : "{}"
				, cbFunction : _res_Data
			}
			, _this
		);

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} result
	 */
	var _res_Data = function( result )
	{
		

		if( result.error )
		{
			window.b2link_ui.message.alert( "SQL ERROR : " + result.error.codeName + " [" + result.error.code + "]" );
			_setData__tbody();
			return;
		}

		_setData__tbody( result.list );

		var totalCount = result.totalCount > 0 ? result.totalCount : 0;
		_nav_ulCtrl.set_total_item_cnt( totalCount );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__tbody = function( data )
	{
		

		if( !data || data.length === 0 )
		{
			while( _el_tbody.rows[ 0 ] )
				_el_tbody.deleteRow( 0 );

			_fn_result_filter_tag_nothing( _el_result_filter_panel );

			_el_tbody.style.display = "none";
			_el_tfoot.style.display = "";

			_nav_ulCtrl.set_total_item_cnt( 0 );

			result_set = [];//결과 보관;

		}
		else
		{
			result_set = data;//결과 보관;

			_el_tfoot.style.display = "none";
			_el_tbody.style.display = "";

			window.b2link.html_tbody.apply_child( _el_tbody, data );
			window.b2link.element.injectValueForListItemsAndIDX( _el_tbody, data );//tr에 list_item_value 설정;

			//결과 필터 싱크 처리;
			var ths = _el_thead.getElementsByTagName( "th" );
			var trs = _el_tbody.getElementsByTagName( "tr" );

			var f0 = window.b2link.util_string.braceStringToEmpty;
			var io;
			var i=0, iLen=trs.length;
			for( ; i<iLen; ++i )
			{
				io = trs[ i ];

				var tds = io.children
				var jo;
				var j=0, jLen=tds.length;
				for( ; j<jLen; ++j )
				{
					tds[ j ].style.display = ths[ j ].style.display;
					tds[ j ].innerText = f0( tds[ j ].innerText );
				}
			}

		}

		 
	 };

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} el
	 * @param {} reset
	 */
	var _fn_result_filter_all_yn = function( el, reset )
	{
		

		if( !el ) el = _el_result_filter_panel;

		//결과 필터 전체 체크만 일괄 처리;
		var checkboxes = el.getElementsByTagName( "INPUT" );

		_el_tfoot.getElementsByTagName( "TD" )[ 0 ].colSpan = ( checkboxes.length - 1 );

		if( reset )//결과 필드 초기화;
			checkboxes[ 0 ].checked = true;

		var i=0, iLen=checkboxes.length;
		for( ; i<iLen; ++i )
			checkboxes[ i ].checked = checkboxes[ 0 ].checked;


		//결과 필터 전체 체크에 따른 기능 처리;
		var th = _el_thead.getElementsByTagName( "th" );
		var i=0, iLen=th.length;
		for( ; i<iLen; ++i )
			th[ i ].style.display = checkboxes[ 0 ].checked ? "" : "none";

		var tr = _el_tbody.getElementsByTagName( "tr" );
		var i=0, iLen=tr.length;
		for( ; i<iLen; ++i )
		{
			var tds = tr[ i ].children;
			var j=0, jLen=tds.length;
			for( ; j<jLen; ++j )
				tds[ j ].style.display = checkboxes[ 0 ].checked ? "" : "none";
		}

		//결과 필터 전체 체크에 따른 푸터 영역 처리;
		if( checkboxes[ 0 ].checked )
		{
			if( !result_set || result_set.length === 0 ) _el_tfoot.style.display = "";
			else _el_tfoot.style.display = "none";
		}
		else _el_tfoot.style.display = "none";

		
	}

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement}
	 * @param {} t
	 */
	var _fn_result_filter_tag_yn = function( el, t )
	{
		

		if( !el ) el = _el_result_filter_panel;

		//결과 필터 전체 자동 설정;
		var checkboxes = el.getElementsByTagName( "INPUT" );
		var i=1, j=1, iLen=checkboxes.length;
		for( ; i < iLen; ++i)
			if( checkboxes[ i ].checked ) ++j;

		if( i === j ) checkboxes[ 0 ].checked = true;
		else checkboxes[ 0 ].checked = false;

		_el_tfoot.getElementsByTagName( "TD" )[ 0 ].colSpan = ( j - 1 );

		//결과 필터 전체 체크에 따른 푸터 영역 처리;
		if( j === 1 )
			_el_tfoot.style.display = "none";
		else
		{
			if( !result_set || result_set.length === 0 ) _el_tfoot.style.display = "";
			else _el_tfoot.style.display = "none";
		}

		//검색 결과 항목 숨김 처리;
		var idx = t.id.substring( t.id.lastIndexOf( "-" ) + 1 );

		var tr = _el_thead.children;
		var th = tr[ 0 ].children;
			th[ idx ].style.display = t.checked ? "" : "none";

		var tr = _el_tbody.children;

		var io;
		var i=0, iLen=tr.length;
		for( ; i<iLen; ++i )
		{
			io = tr[ i ];
			var tds = io.children;
				tds[ idx ].style.display = t.checked ? "" : "none";
		}

		
	}

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} el
	 */
	var _fn_result_filter_tag_nothing = function( el )
	{
		if( !el ) el = _el_result_filter_panel;

		//결과 필터 내에 체크가 없다면 초기화;
		var checkboxes = el.getElementsByTagName( "INPUT" );

		var i=1, j=1, iLen=checkboxes.length;
		for( ; i<iLen; ++i )
			if( checkboxes[ i ].checked ) ++j;

		if( j === 1 ) _fn_result_filter_all_yn( _el_result_filter_panel, true );
	}

	//페이지 로딩때 비활성화 할 컬럼을 지정할 수 있다.
	//cols = [ 1, 3, 5 ]
	//1, 3, 5 번 컬럼을 비활성화 한다.
	//가장 왼쪽 컬럼부터 0 부터 시작.
	var _set_column_disabled = function( cols )
	{
		if( !cols || cols.length == 0 ) return;

		var el = _el_result_filter_panel;
		var t;
		var f0 = _fn_result_filter_tag_yn;

		cols.forEach( function( col_num ){
			//수정하기 - 20170416 - 송선우;
			//id를 사용하지 않고 처리할수 있을 듯;
			//재생성 될때 미리 reference 만들어 놓기 또는 부모 자식 레퍼런스로 접근 방식;
			//_initialize_UI에서 생성할때 사전에 멤버 변수에 담아놓으면 될듯;
			t = document.getElementById( "check-filter-" + col_num );
			t.checked = false;
			f0( el, t );
		});
	}

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _initialize_UI = function()
	{
		

		var th = null;

		//결과 필터 내에 체크박스 만들기;
		th = _el_thead.getElementsByTagName( "TH" );
		var io;
		var i=0, iLen=th.length;
		for( ; i<iLen; ++i )
		{
			io = th[ i ];
			var input = window.document.createElement( "INPUT" );
				input.type = "checkbox";
				input.id = "check-filter-" + i;
				input.defaultChecked = true;
				input.checked = true;
				input.style = "margin-right: 2px;";
				input.value = "";

			var t = document.createTextNode( io.innerText );

			var label = window.document.createElement( "LABEL" );
				label.setAttribute( "for", "check-filter-" + i );
				label.style = "margin: 0px 10px; cursor: pointer;"
				label.appendChild( input );
				label.appendChild( t );

			_el_result_filter_panel.appendChild( label );
		}

		window.b2link.html_tbody.apply_child( _el_tbody, [{ _id : "" }] );

		
	};

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_this.$f0 = null;


		_reqParams__nm_db = null;
		_reqParams__nm_col = null;
		_reqParams__skip = null;
		_reqParams__limit = null;

		result_set = null;

		_el_search_field = null;
		_el_result_filter_panel = null;
		_el_search_btns = null;
		_el_search_foldable_box = null;
		_el_result_field = null;
		_el_thead = null;
		_el_tbody = null;
		_el_tfoot = null;

		_nav_ul = null;
		_nav_ulCtrl = null;

		if( _dispose.super ) _dispose.super();
		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	/**
	 * 검색조건 구하기
	 * @function
	 * @param {HTMLElement} el
	 * @return {Object}
	 */
	var _getFindObj = function( el )
	{
		

		var tag = null;
		var find = {};

		if( !el ) el = _el_search_field;

		tag = el.children[ 0 ].getElementsByTagName( "SELECT" );
		var io;
		var i=0, iLen=tag.length;
		for( ; i<iLen; ++i )
		{
			var io = tag[ i ];
			if( io.getAttribute( "class" ) != null
				&& io.getAttribute( "class" ).indexOf( "find-" ) === 0//"find-" 조금 위험해보임;
				&& io.selectedIndex !== 0 )
			{
				var key = io.getAttribute( "class" ).replace( "find-", "" ).replace( "import-html", "" ).trim();
				find[ key ] = io.value;
			}
		}

		tag = el.children[ 0 ].getElementsByTagName( "INPUT" );
		var io;
		var i=0, iLen=tag.length;
		for( ; i<iLen; ++i )
		{
			io = tag[ i ];
			if( io.getAttribute( "class" ) != null
				&& io.getAttribute( "class" ).indexOf( "find-" ) === 0//"find-" 조금 위험해보임;
				&& io.value.trim() !== "" )
			{
				var key = io.getAttribute( "class" ).replace( "find-", "" ).trim();
				find[ key ] = io.value.trim();

				// 기간별 날짜 검색 조건이 있다면 유효성 체크
				if( io.getAttribute( "data-type" ) === "from-to" )
				{
					if( io.getAttribute( "data-item" ) === "from" )
					{
						if( !tag[ i+1 ].value.trim() )
						{
							window.b2link_ui.message.alert( "기간별 검색의 종료일을 선택하세요!" );
							return;
						}
					}
					if( io.getAttribute( "data-item" ) === "to" )
					{
						if( !tag[ i-1 ].value.trim() )
						{
							window.b2link_ui.message.alert( "기간별 검색의 시작일을 선택하세요!" );
							return;
						}
					}
				}

			}
		}

		

		return find;
	};

	/**
	 * @function
	 * @return {Object}
	 * <code>
		{
			"db_nm" : ""
			, "col_nm" : ""
			, "skip" : 0
			, "limit" : 0
		}
	 * </code>
	 */
	var _getRequestParameters = function( d )
	{
		

		var o = {
			db_nm : _reqParams__nm_db
			, col_nm : _reqParams__nm_col
			, skip : _reqParams__skip
			, limit : _reqParams__limit
		};

		
		return o;
	};

	//--------------------------------------------------SET;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
		{
			"nm_db" : ""
			, "nm_col" : ""
			, "skip" : 0
			, "limit" : 5
		}
	 * </code>
	 */
	var _setRequestParameters = function( d )
	{
		

		//초기 데이터;
		_setRequestParameters._d = d;

		_reqParams__limit = d.limit;

		_reqParams__nm_db = d.nm_db;
		_reqParams__nm_col = d.nm_col;

		_reqParams__skip = d.skip;

		
	};
	_setRequestParameters._d = null;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//----------;
	_addEvent();

	_initialize_UI();
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;

		_.req_Data = _req_Data;
		//_.req_Reset = _req_Reset;
		_.req_Submit = _req_Search;

		//_.res_Data = _res_Data;

		//_.fn_result_filter_all_yn = _fn_result_filter_all_yn;
		//_.fn_result_filter_tag_yn = _fn_result_filter_tag_yn;
		//_.fn_result_filter_tag_nothing = _fn_result_filter_tag_nothing;

		_.getFindObj = _getFindObj;

		_.getRequestParameters = _getRequestParameters;

		_.set_column_disabled = _set_column_disabled;
		//_.setData__tbody = _setData__tbody;

		_.setRequestParameters = _setRequestParameters;

	//--------------------------------------------------this;
	return _;
};








if( console ) console.log("[ S ] - " + fileNm + "----------" );


/**
 * @class
 * @param {String} url js file url
 * @param {HTMLDIVElement} $el_div 이 Controller 객체가 조작할 HTMLDIVElement
 */
window.b2linkUIClass.scheduler.Scheduler = function( url, $el_div )
{
	

	var Scheduler = window.b2link.util.importJS__Reuse( window.b2link.url.getServerURLByServers( "SYS0015_WebServer" ) + "/libs/ui/scheduler/libs.ui.scheduler.Scheduler.js", arguments );

	

	var _this = window.b2linkUIClass.container.FullSizeLayout( url, $el_div );
		_this.removeEvent();

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * @property
	 */
	var scheduler = Scheduler.getSchedulerInstance();

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		window.addEventListener( "resize", _evt_resize$parentElement, false, 0, true );

		$el_div.addEventListener( window.b2link.event.RESIZED_EL, _evt_resized_el, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		window.removeEventListener( "resize", _evt_resize$parentElement, false );
		$el_div.removeEventListener( window.b2link.event.RESIZED_EL, _evt_resized_el, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resize$parentElement = function( e )
	{
		

		_setPosition();

		
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resized_el = function( e )
	{
		

		_setPosition();

		
	};

	

	//	FUNCTION;

	

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		//수정하기 - 20170602 - 송선우 - dispose 없나?;
		scheduler = null;
	};
	_dispose.super = _this.dispose;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		

		//load json schedule data;
		scheduler.load( result );

		
	};

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
		{
			"schedulerType" : "wearing"//"wearing", "release";
		}
	 * </code>
	 */
	var _setData = function( d )
	{
		window.b2link_service_schedule.schedule_logistics.getSearchList( "type", d.schedulerType, _res_Data );
		_setData.super( d );
	};
	_setData.super = _this.setData;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		

		scheduler._obj.style.height = ( window.innerHeight - 5 ) + "px";
		scheduler.update_view();

		
	};

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//change options and refresh scheduler;
	//목록(리스트) 보기 스케줄을 보여줄 기간 - 현재 월 기준으로 1개월 전부터 ~ 3개월 후까지의 내용만 보여줌;
	//scheduler.config.list_start = scheduler.date.add(new Date(), -1, "month");
	//scheduler.config.list_end = scheduler.date.add(new Date(), 3, "month");

	//init scheduler;
	scheduler.init( $el_div, new Date(), "month" );

	/**
	 * @param {String} id
	 */
	scheduler.showModalPage = function( id )
	{
		//스케줄 클릭(더블클릭시) 이벤트를 디스패치 시킨다.;
		console.log( "id : " + id );

		scheduler._hideMonthToolTip();

		//수정하기 - 20170602 - 송선우 - getEvent() 명명 수정하기 Event 객체를 가져오는게 아니다;
		var selectedItem = scheduler.getEvent( id );
		debugger;

		window.b2link.event.dispatchCE__LIST_SELECTED_ITEM( $el_div, { data : selectedItem });
	};

	//----------;
	_addEvent();
	_setPosition();

	//_setData();
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;

	window.b2link.obj.copyReference_Public_Function( _, Scheduler );

	return _;
};


if( console ) console.log("[ E ] - " + fileNm + "----------" );







/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el_select 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.select.Locale_DBSchemaResource = function( url, $el_select, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.Locale( url, $el_select, _this ? _this : null );

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @override
	 * @function
	 */
	var _evt_ChangedLocale = function( e )
	{
		

		_reset_locale();

		
	};
	if( _this._evt_ChangedLocale ) _evt_ChangedLocale.super = _this._evt_ChangedLocale;
	_this._evt_ChangedLocale = _evt_ChangedLocale;

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_this = null;

		if( _dispose.super ) _dispose.super();
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @example
	 * <code>
		//Test HTML에 삽입;
		<import-html url_js="./ui_import/select-db-value/select-db-value.js">
			./ui_include/select-db-value/category/category_delivery_info_remark__nm_kr.html
		</import-html>

		//Browser Console에서 입력;
		window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "us";
		window.b2link.event.dispatchCE__CHANGED_LOCALE( window.document, {} );
	 * </code>
	 */
	var _reset_locale = function()
	{
		

		var $el = $el_select;

		var url = $el.__URL_HTML.replace( ".html", "" );
		var urlLen = url.length;

		var idx__cd = url.lastIndexOf( "__cd" );
		if( -1 != idx__cd ){}
		else
		{
			var idx__nm = url.lastIndexOf( "__nm" );
			if( -1 != idx__nm )
			{
				//if( ( urlLen - 5 ) != idx__nm ){}else{}//__nm_kr, __nm_cn, __nm_us, ...;
				var replaceStr = url.slice( urlLen - 2, urlLen );
				var html = window.b2link.xhr.reqSync_String( url.replace( "__nm_" + replaceStr, "__nm_" + _this.getLocale() ) + ".html" );
				var el = window.b2link.html.createHTMLElement( html );

				$el.innerHTML = el.innerHTML;

				el.innerHTML = "";
				el = null;
			}
		}

		
	};
	_this._reset_locale = _reset_locale;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//--------------------------------------------------this;
	var _ = _this;
	//--------------------------------------------------this;
	return _;
};










/**
 * 사용 금지
 * window.b2linkUIClass.selector.*** 에서만 사용한다.
 *
 * window.b2linkUIClass.base.EventDispatcher를 상속한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {HTMLElement} _this
 */
window.b2linkUIClass.selector.BaseEvent_User = function( url, $el, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el, _this ? _this : null );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mClick = function( fn )
	{
		_this.removeEvent_mClick();
		//_this.setData( fn, null );
		_this.addEvent__Callback( fn, null );
	};
	//_this.removeEvent_mClick = function(){ _this.setData( null, null ); };
	_this.removeEvent_mClick = function(){ _this.removeEvent__Callback(); };

	/**
	 * @function
	 * @param {Function} fn
	 */
	_this.addEvent_mDoubleClick = function( fn )
	{
		_this.removeEvent_mDoubleClick();
		//_this.setData( null, fn );
		_this.addEvent__Callback( null, fn );
	};
	//_this.removeEvent_mDoubleClick = function(){ _this.setData( null, null ); };
	_this.removeEvent_mDoubleClick = function(){ _this.removeEvent__Callback(); };

	

	//	FUNCTION;

	

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.selector.List = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.base.RootElement( url, $el_ul );
	var _this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_ul, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * @property {HTMLUListElement}
	 */
	var _el_ListContainer = $el_ul;
	//var _el_ListContainer = _this.get_el_ListContainer();

	var _fn_apply_html_child = window.b2link.html_ul.apply_child;

	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;

	var _fn_getListItem = null;

	var _fn_req_Data = null;

	var _fn_temp = function(){};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @override
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
		//KeyboardEvent;
		//_el_ListContainer.addEventListener( "keyup", _evt_kUp__el_ListContainer, false, 0, true );
	};

	/**
	 * @override
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
		//KeyboardEvent;
		//_el_ListContainer.removeEventListener( "keyup", _evt_kUp__el_ListContainer, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mClick( listItem );

		
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mDoubleClick( listItem );

		
	};

	/**
	 * KeyboardEvent;
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	/*/
	var _evt_kUp__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_kUp( listItem );

		
	};
	//*/

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} evt_mClick
	 * @param {Function} evt_mDoubleClick
	 */
	var _addEvent__Callback = function( evt_mClick, evt_mDoubleClick )
	{
		_fn_cb_mClick = evt_mClick;
		_fn_cb_mDoubleClick = evt_mDoubleClick;
	};

	/**
	 * @function
	 */
	var _removeEvent__Callback = function()
	{
		_fn_cb_mClick = null;
		_fn_cb_mDoubleClick = null;
	};

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_ListContainer = null;

		_fn_req_Data = null;

		//_dispose.super();
	};
	//_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 */
	var _req_Data = function()
	{
		

		if( _fn_req_Data )
		{
			if( arguments.hasOwnProperty( "0" ) ) _fn_req_Data( _res_Data, arguments );
			else _fn_req_Data( _res_Data );
		}
		//else window.b2link_ui.message.error( "_req_Data Error : _fn_req_Data가 존재하지 않습니다." );

		
	};

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		

		_setData__ListItems( result );

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	/*/
	var _getListItem = function( t )
	{
//		
//		var listItem = _fn_getListItem( t );
//			//console.log( listItem );
//		
//		return listItem;

		return _fn_getListItem( t );
	};
	//*/

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"cb_mClick" : function( e ){}
	 *		"cb_mDoubleClick" : function( e ){}
	 *
	 *		, "req_Data" : function( cbComplete ){}
	 *
	 *		, "getListItem" : function( event.target ){}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		//_setData.super( d );

		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;

		_fn_req_Data = d.fn.req_Data ? d.fn.req_Data : _fn_req_Data;
		_fn_getListItem = d.fn.getListItem ? d.fn.getListItem : _fn_getListItem;

		
	};
	//_setData.super = _this.setData;

	/**
	 * @override
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _el_ListContainer;

		_fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		if( data ) window.b2link.element.injectValueForListItemsAndID( el, data );

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = _el_ListContainer;

		_.addEvent__Callback = _addEvent__Callback;

		_.dispose = _dispose;

		_.removeEvent__Callback = _removeEvent__Callback;

		_.req_Data = _req_Data;

		_.get_res_Data = _res_Data;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터는 제거된다.
 * ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 새 데이터 표출시 재사용한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.selector.ListRoll = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.NextPrevRollUserHandleEvt( url, $el_ul );
	var _this = window.b2linkUIClass.base.RootElement( url, $el_ul, _this );
		_this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_ul, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//var _el_ListContainer = $el_table.tBodies[ 0 ];
	var _el_ListContainer = _this.get_el_ListContainer();

	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;

	var _fn_getListItem = null;

	var _fn_req_Data = null;

	var _fn_temp = function(){};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
		//KeyboardEvent;
		//_el_ListContainer.addEventListener( "keyup", _evt_kUp__el_ListContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
		//KeyboardEvent;
		//_el_ListContainer.removeEventListener( "keyup", _evt_kUp__el_ListContainer, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mClick( listItem );

		
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mDoubleClick( listItem );

		
	};

	/**
	 * KeyboardEvent;
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	/*/
	var _evt_kUp__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_kUp( listItem );

		
	};
	//*/

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} evt_mClick
	 * @param {Function} evt_mDoubleClick
	 */
	var _addEvent__Callback = function( evt_mClick, evt_mDoubleClick )
	{
		_fn_cb_mClick = evt_mClick;
		_fn_cb_mDoubleClick = evt_mDoubleClick;
	};

	/**
	 * @function
	 */
	var _removeEvent__Callback = function()
	{
		_fn_cb_mClick = null;
		_fn_cb_mDoubleClick = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		

		if( _fn_req_Data )
		{
			if( arguments.hasOwnProperty( "0" ) ) _fn_req_Data( _res_Data, arguments );
			else _fn_req_Data( _res_Data );
		}
		else window.b2link_ui.message.error( "_req_Data Error : _fn_req_Data가 존재하지 않습니다." );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		

		_setData__ListItems( result );

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	var _getListItem = function( t )
	{
//		
//		var listItem = _fn_getListItem( t );
//			//console.log( listItem );
//		
//		return listItem;

		return _fn_getListItem( t );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"cb_mClick" : function( e ){}
	 *		"cb_mDoubleClick" : function( e ){}
	 *
	 *		, "req_Data" : function( cbComplete ){}
	 *
	 *		, "getListItem" : function( event.target ){}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super( d );

		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;

		_fn_req_Data = d.fn.req_Data;

		_fn_getListItem = d.fn.getListItem;

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_ul;

		_.addEvent__Callback = _addEvent__Callback;

		_.dispose = _dispose;

		_.removeEvent__Callback = _removeEvent__Callback;

		_.setData = _setData;
	//--------------------------------------------------this;

	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.selector.Table = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.base.RootElement( url, $el_table );
		_this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_table, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;


	/**
	 * @property {HTMLElement}
	 */
	var _el_ListContainer = $el_table.tBodies[ 0 ];
	//var _el_ListContainer = _this.get_el_ListContainer();

	var _fn_apply_html_child = window.b2link.html_tbody.apply_child;

	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;

	var _fn_getListItem = null;

	var _fn_req_Data = null;

	var _fn_temp = function(){};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @override
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
		//KeyboardEvent;
		//_el_ListContainer.addEventListener( "keyup", _evt_kUp__el_ListContainer, false, 0, true );
	};

	/**
	 * @override
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
		//KeyboardEvent;
		//_el_ListContainer.removeEventListener( "keyup", _evt_kUp__el_ListContainer, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mClick( listItem );

		
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mDoubleClick( listItem );

		
	};

	/**
	 * KeyboardEvent;
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	/*/
	var _evt_kUp__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_kUp( listItem );

		
	};
	//*/

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} evt_mClick
	 * @param {Function} evt_mDoubleClick
	 */
	var _addEvent__Callback = function( evt_mClick, evt_mDoubleClick )
	{
		_fn_cb_mClick = evt_mClick;
		_fn_cb_mDoubleClick = evt_mDoubleClick;
	};

	/**
	 * @function
	 */
	var _removeEvent__Callback = function()
	{
		_fn_cb_mClick = null;
		_fn_cb_mDoubleClick = null;
	};

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_this.$f0 = null;

		_el_ListContainer = null;

		_fn_req_Data = null;

		//_dispose.super();
	};
	//_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 */
	var _req_Data = function()
	{
		

		if( _fn_req_Data )
		{
			if( arguments.hasOwnProperty( "0" ) ) _fn_req_Data( _res_Data, arguments );
			else _fn_req_Data( _res_Data );
		}
		else window.b2link_ui.message.error( "_req_Data Error : _fn_req_Data가 존재하지 않습니다." );

		
	};

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		

		_setData__ListItems( result );

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	/*/
	var _getListItem = function( t )
	{
//		
//		var listItem = _fn_getListItem( t );
//			//console.log( listItem );
//		
//		return listItem;

		return _fn_getListItem( t );
	};
	//*/

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"cb_mClick" : function( e ){}
	 *		"cb_mDoubleClick" : function( e ){}
	 *
	 *		, "req_Data" : function( cbComplete ){}
	 *
	 *		, "getListItem" : function( event.target ){}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		//_setData.super( d );

		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;

		_fn_req_Data = d.fn.req_Data;

		_fn_getListItem = d.fn.getListItem;

		
	};
	//_setData.super = _this.setData;

	/**
	 * @override
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		

		//console.log( data );

		var el = _el_ListContainer;

		_fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

		//_.__el = _el_ListContainer;
		_.__el = $el_table;

		_.addEvent__Callback = _addEvent__Callback;

		_.dispose = _dispose;

		_.removeEvent__Callback = _removeEvent__Callback;

		_.req_Data = _req_Data;

		_.get_el_ListContainer = _get_el_ListContainer;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};










/**
 * ./ui_import/ 에서 사용한다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터는 제거된다.
 * ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 새 데이터 표출시 재사용한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.selector.TableRoll = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.NextPrevRollUserHandleEvt( url, $el_table );
		_this = window.b2linkUIClass.base.RootElement( url, $el_table, _this );
		_this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_table, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	var _el_ListContainer = $el_table.tBodies[ 0 ];
	//var _el_ListContainer = _this.get_el_ListContainer();

	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;

	var _fn_getListItem = null;

	var _fn_req_Data = null;

	var _fn_temp = function(){};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
		//KeyboardEvent;
		//_el_ListContainer.addEventListener( "keyup", _evt_kUp__el_ListContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
		//KeyboardEvent;
		//_el_ListContainer.removeEventListener( "keyup", _evt_kUp__el_ListContainer, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mClick( listItem );

		
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mDoubleClick( listItem );

		
	};

	/**
	 * KeyboardEvent;
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	/*/
	var _evt_kUp__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_kUp( listItem );

		
	};
	//*/

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} evt_mClick
	 * @param {Function} evt_mDoubleClick
	 */
	var _addEvent__Callback = function( evt_mClick, evt_mDoubleClick )
	{
		_fn_cb_mClick = evt_mClick;
		_fn_cb_mDoubleClick = evt_mDoubleClick;
	};

	/**
	 * @function
	 */
	var _removeEvent__Callback = function()
	{
		_fn_cb_mClick = null;
		_fn_cb_mDoubleClick = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		

		if( _fn_req_Data )
		{
			if( arguments.hasOwnProperty( "0" ) ) _fn_req_Data( _res_Data, arguments );
			else _fn_req_Data( _res_Data );
		}
		else window.b2link_ui.message.error( "_req_Data Error : _fn_req_Data가 존재하지 않습니다." );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		

		_setData__ListItems( result );

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	var _getListItem = function( t )
	{
//		
//		var listItem = _fn_getListItem( t );
//			//console.log( listItem );
//		
//		return listItem;

		return _fn_getListItem( t );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"cb_mClick" : function( e ){}
	 *		"cb_mDoubleClick" : function( e ){}
	 *
	 *		, "req_Data" : function( cbComplete ){}
	 *
	 *		, "getListItem" : function( event.target ){}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		

		_setData.super( d );

		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;

		_fn_req_Data = d.fn.req_Data;

		_fn_getListItem = d.fn.getListItem;

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	LOGIC;

	

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_table;

		_.addEvent__Callback = _addEvent__Callback;

		_.dispose = _dispose;

		_.removeEvent__Callback = _removeEvent__Callback;

		_.setData = _setData;
	//--------------------------------------------------this;

	return _;
};









/**
 * ./ui_import/ 에서 사용한다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터는 제거된다.
 * ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 새 데이터 표출시 재사용한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.selector.ListRollSearch = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.NextPrevRollUserHandleEvtSearch( url, $el_ul );
	var _this = window.b2linkUIClass.base.RootElement( url, $el_ul, _this );
		_this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_ul, _this );

	

	//	STATIC;

	

	var _el_ListContainer = _this.get_el_ListContainer();
	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;
	var _fn_getListItem = null;
	var _fn_req_Data = null;
	var _fn_temp = function(){};

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		if (e.target.nodeName.toLowerCase() === 'ul' )
		{
			_fn_cb_mClick( null );
			e.stopPropagation();
			e.preventDefault();
			
			return;
		}
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );

		_fn_cb_mClick( listItem );

		
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		

		console.log( e.target );
		if (e.target.nodeName.toLowerCase() === 'ul' )
		{
			_fn_cb_mClick( null );
			e.stopPropagation();
			e.preventDefault();
			
			return;
		}
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );

		_fn_cb_mDoubleClick( listItem );

		
	};

	

	//	FUNCTION;

	

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	var _getListItem = function( t )
	{
		return _fn_getListItem( t );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 */
	var _setData = function( d )
	{
		

		_setData.super( d );
		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;
		_fn_getListItem = d.fn.getListItem;

		
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	

	//	GETTER / SETTER;

	


	

	//	LOGIC;

	

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_ul;
	_.dispose = _dispose;
	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};











/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el_select 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.table.Table = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el_table );
		_this = window.b2linkUIClass.base.RootElement( url, $el_table, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el_table, _this );

	

	//	STATIC;

	

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	/**
	 * @property {HTMLElement}
	 */
	var _el_tbody = _this.$f0( $el_table, "tbody" );

	/**
	 * @property {HTMLElement}
	 */
	var _el_thead = _this.$f0( $el_table, "thead" );

	//--------------------------------------------------;

	/**
	 * _el_thead.children[ 0 ]이(tr_th) template html( {{}}등으로 작성되있는 상태 ) 상태인지 여부
	 * @property {Boolean}
	 */
	var _bFirst_template_html_tr_td = 1;

	/**
	 * _el_tbody.children[ 0 ]이(tr_td) template html( {{}}등으로 작성되있는 상태 ) 상태인지 여부
	 * @property {Boolean}
	 */
	var _bFirst_template_html_tr_th = 1;

	/**
	 * @property {Array}
	 */
	var _data = null;

	/**
	 * @property {String}
	 */
	var _template_html_tr_td = null;

	/**
	 * @property {String}
	 */
	var _template_html_tr_th = null;

	//--------------------------------------------------;

	//--------------------------------------------------;

	

	//	EVENT;

	

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		

		//_addEvent.super()
		_removeEvent();

		
	};
	_addEvent.super = _this.addEvent;

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		

		//_removeEvent.super();

		
	};
	_removeEvent.super = _this.removeEvent;

	

	//	FUNCTION;

	

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		

		_removeEvent();

		if( _dispose.super ) _dispose.super();

		_this = null;

		
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 */
	var _draw = function()
	{
		

		if( _bFirst_template_html_tr_td )
		{
			_bFirst_template_html_tr_td = 0;
			window.b2link.html_tbody.apply_child__ReUseKeyList( _el_tbody, _data );
			window.b2link.element.injectValueForListItemsAndID( _el_tbody, _data );
		}
		else
		{
			_redraw();
		}

		
	};

	/**
	 * 내부 상태 값에 따라서 <tr>들을 객체들을 생성하거나 재사용한다.
	 * @Override
	 * @function
	 */
	var _draw_or_redraw = function()
	{
		

		if( 1 == _el_tbody.children[ 0 ].length && _bFirst_template_html_tr_td )
		{
			_draw();
		}
		else
		{
			_redraw();
		}

		
	};

	//--------------------------------------------------;



	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 */
	var _redraw = function()
	{
		

		if( _bFirst_template_html_tr_td )
		{
			_draw();
		}
		else
		{
			window.b2link.el_tbody.change_child( _el_tbody, _data );
		}

		
	};

	//--------------------------------------------------;

	

	//	GETTER / SETTER;

	

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @function
	 * @param {String} s
	 */
	var _setTemplateHTML_TR_TD = function( s )
	{
		

		_template_html_tr_td = s;

		_el_tbody.innerHTML = "";
		_el_tbody.innerHTML = _template_html_tr_td;

		_bFirst_template_html_tr_td = 1;

		_draw_or_redraw();

		
	};

	/**
	 * @function
	 * @param {String} s
	 */
	var _setTemplateHTML_TR_TH = function( s )
	{
		

		_template_html_tr_th = s;

		_el_tbody.innerHTML = "";
		_el_tbody.innerHTML = _template_html_tr_th;

		_bFirst_template_html_tr_td = 1;

		_draw_or_redraw();

		
	};

	//--------------------------------------------------GET / SET;

	/**
	 * @function
	 * @return {Array}
	 */
	var _getDataProvider = function(){ return _data; };

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setDataProvider = function( data )
	{
		

		_data = data;
		_draw_or_redraw();

		
	};

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _getTBody = function(){ return _el_tbody; }

	/**
	 * @function
	 * @param {HTMLElement} el_tbody
	 */
	var _setTBody = function( el_tbody )
	{
		

		if( el_tbody.parentElement == $el_table )
		{
			_el_tbody = el_tbody;
		}

		
	};

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _getTHead = function(){ return _el_thead; };

	/**
	 * @function
	 * @param {HTMLElement} el_thead
	 */
	var _setTHead = function( el_thead )
	{
		

		if( el_thead.parentElement == $el_table )
		{
			_el_thead = el_thead;
		}

		
	};

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	_this.__defineSetter__( "thead_th", _setTemplateHTML_TR_TH );
	_this.__defineSetter__( "tbody_tr", _setTemplateHTML_TR_TD );

	//--------------------------------------------------GETTER / SETTER;

	_this.__defineGetter__( "dataProvider", _getDataProvider );
	_this.__defineSetter__( "dataProvider", _setDataProvider );

	//--------------------------------------------------;

	

	//	LOGIC;

	

	window.b2link.el_tbody.change_child( _el_tbody, [] );

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_table;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.dispose = _dispose;

		_.draw_or_redraw = _draw_or_redraw;

		_.getTBody = _getTBody;
		_.setTBody = _setTBody;

		_.getTHead = _getTHead;
		_.setTHead = _setTHead;
	//--------------------------------------------------this;
	return _;
};






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_resource;

window.b2link_resource = window.b2link_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_resource;


//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_resource.download;

window.b2link_resource.download = window.b2link_resource.download || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_resource.download;

//--------------------------------------------------[ S ] - Resource-Image-BrandLogo Download API;

/*///전체 테스트 코드;
window.b2link_resource.download.getIMG_HTMLElement( "Resource-Image-BrandLogo", "thumnail", 0 );
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo( "thumnail", 1 );
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_original( 2 );
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_thumnail( 3 );

window.b2link_resource.download.getIMG_HTMLElement_ReUse( "Resource-Image-BrandLogo", "thumnail", 4 );
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo( "thumnail", 5 );
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_original( 6 );
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_thumnail( 7 );

console.log( window.b2link_resource.download.getIMG_HTMLString( "Resource-Image-BrandLogo", "thumnail", 8 ) );
console.log( window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo( "thumnail", 9 ) );
console.log( window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original( 10 ) );
console.log( window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail( 11 ) );

console.log( window.b2link_resource.download.getURL( "Resource-Image-BrandLogo", "thumnail", 12 ) );
console.log( window.b2link_resource.download.getURL__ResourceImageBrandLogo( "thumnail", 13 ) );
console.log( window.b2link_resource.download.getURL__ResourceImageBrandLogo_original( 14 ) );
console.log( window.b2link_resource.download.getURL__ResourceImageBrandLogo_thumnail( 15 ) );
//*/


/**
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement=function(n,e,o){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString(n,e,o))};

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo=function(e,n){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo(e,n))};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_original=function(e){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original(e))};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_thumnail=function(e){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail(e))};

/**
 * 한번 생성한 IMG Element를 보관하고 있다가 다시 꺼내서 반환한다.
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
!function(){var e={};window.b2link_resource.download.getIMG_HTMLElement_ReUse=function(n,o,r){var t=n+"/"+o+"/"+r;return e[t]?e[t]:(e[t]=window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString(n,o,r)),e[t])},window.b2link_resource.download.getIMG_HTMLElement_ReUse._clear=function(){e={}}}();

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo=function(e,o){return window.b2link_resource.download.getIMG_HTMLElement_ReUse("Resource-Image-BrandLogo",e,o)};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_original=function(e){return window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo("original",e)};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_thumnail=function(e){return window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo("thumnail",e)};

/**
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
!function(){var n={};window.b2link_resource.download.getIMG_HTMLString=function(o,r,i){var e=o+"/"+r+"/"+i;return n[e]?n[e]:(n[e]='<img src="'+window.b2link_resource.download.getURL(o,r,i)+'"/>',n[e])},window.b2link_resource.download.getIMG_HTMLString._clear=function(){n={}}}();

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo=function(o,n){return window.b2link_resource.download.getIMG_HTMLString("Resource-Image-BrandLogo",o,n)};

/**
 * @function
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original=function(o){return window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo("original",o)};

/**
 * @function
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail=function(o){return window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo("thumnail",o)};

/**
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
!function(){var n={};window.b2link_resource.download.getURL=function(o,i,e){var d=o+"/"+i+"/"+e;return n[d]?n[d]:(n[d]="./resource/"+o+"/download?sid="+window.b2link.session.getSession__sid()+"&filePath="+i+"/_id/"+e+".png",n[d])},window.b2link_resource.download.getURL._clear=function(){n={}}}();

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
 * </code>
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getURL__ResourceImageBrandLogo=function(o,e){return window.b2link_resource.download.getURL("Resource-Image-BrandLogo",o,e)};

/**
 * @function
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getURL__ResourceImageBrandLogo_original=function(o){return window.b2link_resource.download.getURL__ResourceImageBrandLogo("original",o)};

/**
 * @function
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getURL__ResourceImageBrandLogo_thumnail=function(o){return window.b2link_resource.download.getURL__ResourceImageBrandLogo("thumnail",o)};

//--------------------------------------------------[ E ] - Resource-Image-BrandLogo Download API;






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service;

window.b2link_service = window.b2link_service || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service;

/**
 * @function
 * @param {String} nm_db
 * @return {String}
 */
window.b2link_service.getURL_DB = function( nm_db ){ return window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( nm_db ) + nm_db + "/"; };

/**
 * @function
 * @param {String} nm_db
 * @return {String}
 */
window.b2link_service.getURL_DB__NPROXY = function( nm_db ){ return window.b2link.url.getServerURLByDB( nm_db ) + nm_db + "/"; };

/**
 * @function
 * @param {String} nm_db
 * @return {String}
 */
window.b2link_service.getURL_DB__PROXY = function( nm_db ){ return window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( nm_db ) + nm_db + "/"; };


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.STATIC;

window.b2link_service.STATIC = window.b2link_service.STATIC || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.STATIC;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.STATIC.CONST;

window.b2link_service.STATIC.CONST = window.b2link_service.STATIC.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.STATIC.CONST;

//--------------------------------------------------window.b2link_service.STATIC.CONST.RESPONSE_CODE;

window.b2link_service.STATIC.CONST.RESPONSE_CODE = window.b2link_service.STATIC.CONST.RESPONSE_CODE || {};

(function(){
	var _ = window.b2link_service.STATIC.CONST.RESPONSE_CODE;
		_.__defineGetter__( "REQUEST_FAILED"       , function(){ return  0; } );
		_.__defineGetter__( "REQUEST_SUCCESS"      , function(){ return  1; } );
		_.__defineGetter__( "BAD_VALUE"            , function(){ return  2; } );
		_.__defineGetter__( "HOST_NOT_FOUND"       , function(){ return  7; } );
		_.__defineGetter__( "AUTHENTICATION_FAILED", function(){ return 18; } );
		_.__defineGetter__( "NETWORK_TIMEOUT"      , function(){ return 89; } );
		_.__defineGetter__( "OPERATION_FAILED"     , function(){ return 96; } );
})();

//--------------------------------------------------window.b2link_service.STATIC.CONST.RESPONSE_CODE;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.base_query;

window.b2link_service.base_query = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.base_query;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.common;

window.b2link_service.common = window.b2link_service.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.common;

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.b2link_service.common._fn_req=function(n,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.b2link_service.common._fn_req_for_string_result=function(n,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res_for_string_result(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 문자열을 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.b2link_service.common._fn_req_for_string_result__locale_label=function(n,_,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res_for_string_result__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,_,i)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.b2link_service.common._fn_req_POST=function(e,i,s,o){var r=window.b2link.session.getSession();i.Expires=r.Expires,i.mid=r.mid,i.sid=r.sid,++n,e+="nCached="+n,window.b2link_service.common._fn_res_POST(SUtilXMLHttpReqPost.reqSync__paramsObj(e,i,s).responseText,o)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.b2link_service.common._fn_req_POST__Str=function(n,i,s,r){var t=window.b2link.session.getSession();i.Expires=t.Expires,i.mid=t.mid,i.sid=t.sid,++e,n+="nCached="+e;var o=STtwUtilXMLHttpReqPost.reqSyncReturn__paramsStr(n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),JSON.stringify(i).replace(/\\"/gi,'"'),{"Content-type":"text/plain"}).responseText;window.b2link_service.common._fn_res_POST(o,r)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.b2link_service.common._fn_req__locale_label=function(n,i,l){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,i,l)}}();


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.common_storage;

window.b2link_service.common_storage = window.b2link_service.common_storage || {};

//--------------------------------------------------window.b2link_service.common_storage.g***;

/**
 * DB에서 Public로 식별되는 DB & Collection만 사용할수 있는 API
 * Client Memory 상에 보관되어있으면 있는 값을 리턴하고 없으면 서버에 요청해서 가져와서 저장하고 리턴한다.
 * Client Memory를 비우는 API는 별도로 존재한다.
 * Public DB Schema가 새롭게 추가되어 필요시 요청바람.
 *
 *
 * DB 목록
 * category
 * list_static
 *
 * DB * Collection 목록
 * brand.brand_basic
 *
 * information.exchange_rate
 *
 * member.member_public
 *
 * partner.partner_buyer
 * partner.partner_logistics
 * partner.partner_supplier
 *
 * product.product_basic
 * product.product_type
 *
 * @function
 * @param {String} nm_prop _id$***, cd$***
 * @param {*} value
 * @return {*}
 * @example
 * <code>
	{
		var data = window.b2link_service.common_storage.get( "_id$country", 0 );

		var data = window.b2link_service.common_storage.get( "cd$category_division", "BOD" );
	}
 * </code>
 */
//!function(){var e=SUtilXMLHttpReqGet.reqSyncReturn,n=window.b2link.STATIC.CONFIG.URL,i=n.PROXY+window.b2link.url.getServerURLByDB("_query_public")+"_query_public/findOne/getDoc?",r=n.PROXY+window.b2link.url.getServerURLByDB("_instance")+"_instance/",s=JSON.parse(e(r+"cols/getAllList").responseText),o=JSON.parse(e(r+"dbs_cols__public/getAllList").responseText);window.b2link_service.common_storage.get=function(n,r){if(-1==n.indexOf("_id$")&&-1==n.indexOf("cd$"))return window.b2link_ui.message.error("window.b2link_service.common_storage.get Error : "+n+"는 이 API 사용 불가능함."),null;var t=n.split("$"),l=t[1],c=s[l].db;window.b2link_service.common._checkDBColNames(c,l);try{var _=o[c][l];if(_){var w=_[r];return w?w:(_[r]=JSON.parse(e(i+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:n,v:r})).responseText),_[r])}}catch(a){return window.b2link_ui.message.error(a),null}}}();
//try{!function(){var e,r=SUtilXMLHttpReqGet.reqSyncReturn,n=window.b2link.STATIC.CONFIG.URL,i=n.PROXY+window.b2link.url.getServerURLByDB("_query_public")+"_query_public/findOne/getDoc?",t=n.PROXY+window.b2link.url.getServerURLByDB("_instance")+"_instance/";try{e=JSON.parse(r(t+"cols/getAllList").responseText)}catch(o){window.TtwLog.error("Collections 정보를 가져오지 못함."),e={}}var s;try{s=JSON.parse(r(t+"dbs_cols__public/getAllList").responseText)}catch(o){window.TtwLog.error("Collections( + DB 이름) 정보를 가져오지 못함."),s={}}window.b2link_service.common_storage.get=function(n,t){var o=n.split("$"),l=o[1],c=e[l].db;window.b2link_service.common._checkDBColNames(c,l);try{var w=s[c][l];if(w){var a=w[t];return a?a:(w[t]=JSON.parse(r(i+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:n,v:t})).responseText),w[t])}}catch(_){return window.b2link_ui.message.error(_),null}}}();}catch(e){}

//Reposity 별 개별 파일로 존재해야 레파지토리별 URL API 정보에 맞게 요청한다;
//try{!function(){var e,r=SUtilXMLHttpReqGet.reqSyncReturn,n=window.b2link.STATIC.CONFIG.URL,i=n.PROXY+window.b2link.url.getServerURLByDB("_query_public")+"_query_public/findOne/getDoc?",t=n.PROXY+window.b2link.url.getServerURLByDB("_instance")+"_instance/";try{e=JSON.parse(r(t+"cols/getAllList").responseText)}catch(o){e={}}var s;try{s=JSON.parse(r(t+"dbs_cols__public/getAllList").responseText)}catch(o){s={}}window.b2link_service.common_storage.get=function(n,t){var o=n.split("$"),l=o[1],c=e[l].db;window.b2link_service.common._checkDBColNames(c,l);try{var w=s[c][l];if(w){var a=w[t];return a?a:(w[t]=JSON.parse(r(i+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:n,v:t})).responseText),w[t])}}catch(_){return window.b2link_ui.message.error(_),null}}}();}catch(e){}

//--------------------------------------------------window.b2link_service.common_storage.g***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.common_storage;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.list;

window.b2link_service.list = window.b2link_service.list || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.list;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.search_selector;

window.b2link_service.search_selector = {};

window.b2link_service.search_selector.db = {
	"administrator": [
		"administrator_brand_regist_req",
		"administrator_product_regist_req"
	],
	"authority": [
		"auth_col",
		"auth_col_c",
		"auth_col_d",
		"auth_col_r",
		"auth_col_u",
		"auth_db",
		"auth_db_c",
		"auth_db_d",
		"auth_db_r",
		"auth_db_u"
	],
	"brand": [
		"brand_basic"
	],
	"category": [
		"category_cost_adjustment",
		"category_delivery_info_remark",
		"category_delivery_status",
		"category_delivery_type",
		"category_division",
		"category_division_part_BID_BD",
		"category_division_part_BID_MKT",
		"category_division_part_BID_PP",
		"category_division_part_BID_SA",
		"category_division_part_BLS_DEV",
		"category_division_part_BSD_BM",
		"category_division_part_BSD_IS",
		"category_division_part_BSD_LOG",
		"category_division_part_BSD_OFL",
		"category_division_part_BSD_ONL",
		"category_division_part_BSD_SO",
		"category_division_team_BID",
		"category_division_team_BLS",
		"category_division_team_BSD",
		"category_division_team_SHI",
		"category_division_team_SSD",
		"category_expenses_proof",
		"category_extra_order_wearing",
		"category_fi_approbation",
		"category_fi_reject_reason",
		"category_inspection_detail_type",
		"category_inspection_type",
		"category_member_rank",
		"category_packaging_material_unit",
		"category_partner",
		"category_partner_buyer",
		"category_partner_logistics",
		"category_partner_supplier",
		"category_product_depth_000",
		"category_product_depth_001_CP000",
		"category_product_depth_001_CP001",
		"category_product_depth_001_CP002",
		"category_product_depth_002_CP000000",
		"category_product_depth_002_CP000001",
		"category_product_depth_002_CP000002",
		"category_product_depth_002_CP000003",
		"category_product_depth_002_CP001000",
		"category_product_depth_002_CP001001",
		"category_product_depth_002_CP002000",
		"category_product_depth_002_CP002001",
		"category_product_depth_003_CP000000000",
		"category_product_depth_003_CP000000001",
		"category_product_depth_003_CP000000002",
		"category_product_depth_003_CP000000003",
		"category_product_depth_003_CP000000004",
		"category_product_depth_003_CP000000005",
		"category_product_depth_003_CP000000006",
		"category_product_depth_003_CP000000007",
		"category_product_depth_003_CP000000008",
		"category_product_depth_003_CP000001000",
		"category_product_depth_003_CP000001001",
		"category_product_depth_003_CP000001002",
		"category_product_depth_003_CP000001003",
		"category_product_depth_003_CP000001004",
		"category_product_depth_003_CP000002000",
		"category_product_depth_003_CP000002001",
		"category_product_depth_003_CP000002002",
		"category_product_depth_003_CP000002003",
		"category_product_depth_003_CP000002004",
		"category_product_depth_003_CP000002005",
		"category_product_depth_003_CP000002006",
		"category_product_depth_003_CP000002007",
		"category_product_depth_003_CP000003000",
		"category_product_depth_003_CP000003001",
		"category_product_depth_003_CP001000000",
		"category_product_depth_003_CP001001000",
		"category_product_depth_003_CP001001001",
		"category_product_depth_003_CP001001002",
		"category_product_depth_003_CP001001003",
		"category_product_depth_003_CP001001004",
		"category_product_depth_003_CP001001005",
		"category_product_depth_003_CP001001006",
		"category_product_depth_003_CP001001007",
		"category_product_depth_003_CP001001008",
		"category_product_depth_003_CP001001009",
		"category_product_depth_003_CP002000000",
		"category_product_depth_003_CP002000001",
		"category_product_depth_003_CP002001000",
		"category_product_status",
		"category_purchase_reason",
		"category_release_operation_packaging_material",
		"category_release_operation_range",
		"category_release_operation_type",
		"category_request_result",
		"category_sale_reason",
		"category_stock_exception",
		"category_stock_merge_status",
		"category_stock_transfer_status",
		"category_tax_bill",
		"category_tax_included",
		"category_transaction_entity",
		"category_transaction_result",
		"category_update_reason"
	],
	"company": [
		"company_info_basic"
	],
	"information": [
		"exchange_rate_daily",
		"exchange_rate_raw_data",
		"exchange_rate_realtime"
	],
	"list_static": [
		"bank_code_domestic",
		"bank_swift_cn",
		"bank_swift_kr",
		"bank_swift_us",
		"country",
		"country__b2ker",
		"currency",
		"currency__b2ker",
		"email_detail",
		"job_title",
		"messenger",
		"phone_cell_kr",
		"phone_tel_kr",
		"postalcode_cn",
		"postalcode_kr",
		"trade_disposal",
		"trade_terms",
		"zipcode_kr"
	],
	"member": [
		"member_basic",
		"member_date",
		"member_public",
		"member_session",
		"member_session_log",
		"member_webhook"
	],
	"partner": [
		"partner_buyer",
		"partner_logistics",
		"partner_person",
		"partner_supplier"
	],
	"product": [
		"product_basic",
		"product_type"
	],
	"server_file": [
		"file_batch_log",
		"file_entity",
		"file_log",
		"file_orphan"
	],
	"settlement": [
		"settlement_cost_logistics_delivery_release",
		"settlement_cost_logistics_delivery_wearing",
		"settlement_cost_logistics_operation",
		"settlement_cost_logistics_release",
		"settlement_cost_logistics_storage",
		"settlement_cost_logistics_wearing",
		"settlement_cost_purchase",
		"settlement_deposit_information",
		"settlement_payment_information",
		"settlement_profit",
		"settlement_purchase_status",
		"settlement_sale_status"
	],
	"stock": [
		"history_wearing",
		"stock_distribution_history",
		"stock_distribution_req",
		"stock_entity",
		"stock_merge_req",
		"stock_quantity",
		"stock_split_req",
		"stock_transfer_history",
		"stock_transfer_req",
		"warehouse"
	],
	"transaction": [
		"transaction_approval",
		"transaction_delivery_information",
		"transaction_entity",
		"transaction_schedule_release",
		"transaction_schedule_wearing"
	],
	"transaction_purchase_order_purchase": [
		"transaction_purchase_order_purchase_req",
		"transaction_purchase_order_purchase_res",
		"update_history_transaction_purchase_order_purchase_req",
		"update_history_transaction_purchase_order_purchase_res"
	],
	"transaction_purchase_order_sale": [
		"transaction_purchase_order_sale_req",
		"transaction_purchase_order_sale_res",
		"update_history_transaction_purchase_order_sale_req",
		"update_history_transaction_purchase_order_sale_res"
	],
	"transaction_purchase_return": [
		"transaction_purchase_return"
	],
	"transaction_sale_return": [
		"transaction_sale_return"
	],
	"transaction_stock_release": [
		"transaction_inspection_report_release",
		"transaction_packing_list_release",
		"transaction_stock_release_req",
		"transaction_stock_release_res",
		"update_history_transaction_inspection_report_release",
		"update_history_transaction_packing_list_release",
		"update_history_transaction_stock_release_req",
		"update_history_transaction_stock_release_res"
	],
	"transaction_stock_wearing": [
		"transaction_inspection_report_wearing",
		"transaction_packing_list_wearing",
		"transaction_stock_wearing_req",
		"transaction_stock_wearing_res",
		"update_history_transaction_inspection_report_wearing",
		"update_history_transaction_packing_list_wearing",
		"update_history_transaction_stock_wearing_req",
		"update_history_transaction_stock_wearing_res"
	]
};



//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.search_selector;


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.selector;

window.b2link_service.selector = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.selector;

//중요 - 수정하기 - 20170317 - 송선우;
window.b2link_service.selector.db = window.b2link_service.search_selector.db;




//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		"nm_db" : ""
		, "nm_col" : ""

		, "cd" : ""

		, "cbFunction" : function( data ){};
	}
 * </code>
 */
window.b2link_service.base_query.getDoc_cd = function( d )
{
	

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/findOne/getDoc_cd?";

	window.b2link_service.common._fn_req( _url + "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col + "&cd=" + d.cd, d.cbFunction );

	
};


//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		"nm_db" : ""
		, "nm_col" : ""

		, "_id" : NaN

		, "cbFunction" : function( result ){};
	}
 * </code>
 */
window.b2link_service.base_query.getDoc__id = function( d )
{
	//

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/findOne/getDoc__id?";

	window.b2link_service.common._fn_req( _url + "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col + "&_id=" + d._id, d.cbFunction );

	//
};


//



//
//


/**
 * Database Name과 Collection Name를 체크한다.
 *
 * @function
 * @param {String} nm_db
 * @param {String} nm_col
 */
window.b2link_service.common._checkDBColNames = function( nm_db, nm_col )
{
	//

	if( !nm_db )
	{
		window.b2link_ui.message.error( "nm_db : " + nm_db );
		window.TtwLog.error( "nm_db : " + nm_db );
		debugger;
	}

	if( !nm_col )
	{
		window.b2link_ui.message.error( "nm_col : " + nm_col );
		window.TtwLog.error( "nm_col : " + nm_col );
		debugger;
	}

	//
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.b2link_service.common._checkSessionAuth__ErrorMessage = function( result, cbFunction, localeOwner )
{
	//

	window.HykLog.error( "시스템 기능 사용 권한 오류" );
	window.HykLog.error( JSON.stringify( result ) );
	window.HykLog.error( "당신은 위 권한이 없습니다. 필요시 공식적인 절차로 관리자에게 요청 바랍니다." );

	//
};


//



//
//


/**
 * @function
 * @param {*} req
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_authRes = function( result, cbFunction )
{
	

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.b2link_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	
};


//




//
//


/**
 * @function
 * @param {String} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.b2link_service.common._fn_authRes_for_string_result = function( result, cbFunction )
{
	

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.b2link_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result - cbFunction( result ); -  Error : " + e );
		debugger;
	}

	
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
window.b2link_service.common._fn_authRes_for_string_result__locale_label = function( result, cbFunction, localeOwner )
{
	//

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result__locale_label - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.b2link_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	var resStr = window.b2link.string.applyParentheses( result, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url ) );

	if( resStr )
	{
		try{ cbFunction( resStr ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result__locale_label - cbFunction( resStr ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( result ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_authRes_for_string_result__locale_label - cbFunction( result ); -  Error : " + e );
			debugger;
		}
	}

	//
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제 function( data ){};
 */
window.b2link_service.common._fn_authRes_POST = function( result, cbFunction )
{
	//

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_POST - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.b2link_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes_POST - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.b2link_service.common._fn_authRes__locale_label = function( result, cbFunction, localeOwner )
{
	//

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.b2link_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	var resultString;
	var resultObj;

	try
	{
		resultString = window.b2link.string.applyParentheses(
			result
			, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url )
		);
	}
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - resultString = window.b2link.string.applyParentheses( -  Error : " + e );
		//debugger;
	}

	try{ resultObj = JSON.parse( resultString ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - resultObj = JSON.parse( resultString ); -  Error : " + e );
		//debugger;
	}

	if( resultObj )
	{
		try{ cbFunction( resultObj ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - cbFunction( resultObj ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( JSON.parse( result ) ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_authRes__locale_label - cbFunction( JSON.parse( result ) ); -  Error : " + e );
			debugger;
		}
	}

	//
};


//



//
//


(function(){
	var _date = new Date();

	/**
	 * 특별히 사용할 용도 외엔 사용 금지 입니다.
	 *
	 * POST 방식의 XMLHTTPRequest 요청
	 *
	 * @function
	 * @param {String} url Server URL
	 * @param {Object} params POST 요청시 전송할 Parameters
	 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
	 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
	 */
	window.b2link_service.common._fn_req_POST__ArrayBuffer = function( url, params, requestHeaders, cbFunction )
	{
		//

		//console.log( "url : " + url );

		url += window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		++_date;
		url += "nCached=" + _date;

		//var xhr = SUtilXMLHttpReqPost.reqSyncReturn__paramsForm( url, params, requestHeaders );
		var xhr = SUtilXMLHttpReqPost.reqSyncReturn__paramsStr( url, params, requestHeaders );

		window.b2link_service.common._fn_res_POST( xhr.responseText, cbFunction );

		//debugger;
		xhr = null;

		//
	};
})();


//



//
//


(function(){
	var _date = new Date();

	/**
	 * 특별히 사용할 용도 외엔 사용 금지 입니다.
	 *
	 * POST 방식의 XMLHTTPRequest 요청
	 *
	 * @function
	 * @param {XMLHTTPRequest} xhr
	 * @param {String} url Server URL
	 * @param {Object} params POST 요청시 전송할 Parameters
	 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
	 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
	 */
	window.b2link_service.common._fn_req_POST__ArrayBuffer__Ref = function( xhr, url, params, requestHeaders, cbFunction )
	{
		//

		//console.log( "url : " + url );

		url += window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		++_date;
		url += "nCached=" + _date;

		SUtilXMLHttpReqPost.reqSyncReturn__paramsStr__Ref( xhr, url, params, requestHeaders );

		window.b2link_service.common._fn_res_POST( xhr.responseText, cbFunction );

		//debugger;
		//xhr = null;

		//
	};
})();


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_res = function( result, cbFunction )
{
	

	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	
};


//



//
//


/**
 * @function
 * @param {String} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.b2link_service.common._fn_res_for_string_result = function( result, cbFunction )
{
	

	try{ cbFunction( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res_for_string_result - cbFunction( result ); -  Error : " + e );
		debugger;
	}

	
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
window.b2link_service.common._fn_res_for_string_result__locale_label = function( result, cbFunction, localeOwner )
{
	//


	var resStr = window.b2link.string.applyParentheses( result, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url ) );

	if( resStr )
	{
		try{ cbFunction( resStr ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_res_for_string_result__locale_label - cbFunction( resStr ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( result ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_res_for_string_result__locale_label - cbFunction( result ); -  Error : " + e );
			debugger;
		}
	}

	//
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.b2link_service.common._fn_res_POST = function( result, cbFunction )
{
	//

	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res_POST - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res_POST - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.b2link_service.common._fn_res__locale_label = function( result, cbFunction, localeOwner )
{
	//

	var resultString;
	var resultObj;

	try
	{
		resultString = window.b2link.string.applyParentheses(
			result
			, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url )
		);
	}
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res__locale_label - resultString = window.b2link.string.applyParentheses( -  Error : " + e );
		//debugger;
	}

	try{ resultObj = JSON.parse( resultString ); }
	catch( e )
	{
		window.TtwLog.error( "window.b2link_service.common._fn_res__locale_label - resultObj = JSON.parse( resultString ); -  Error : " + e );
		//debugger;
	}

	if( resultObj )
	{
		try{ cbFunction( resultObj ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_res__locale_label - cbFunction( resultObj ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( JSON.parse( result ) ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link_service.common._fn_res__locale_label - cbFunction( JSON.parse( result ) ); -  Error : " + e );
			debugger;
		}
	}

	//
};


//



//
//


(function(){
	var _date = new Date();

	/**
	 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
	 *
	 * @function
	 * @param {String} url Server URL
	 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
	 */
	window.b2link_service.common._fn_reqAsync = function( url, cbFunction )
	{
		//

		//console.log( "url : " + url );
		url += window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		//console.log( "url : " + url );


		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		++_date;
		url += "&nCached=" + _date;

		STtwUtilXMLHttpReqGet.req( url, {
			cbFunctions : {
				onloadend : function( e ){
					window.b2link_service.common._fn_res( e.target.responseText, cbFunction )
				}
			}
		});

		//
	};
})();


//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		db_nm : ""
		, col_nm : ""

		, find : ""//JSONString;
		, limit : {Uint}
		, skip : {Uint}
		, sort : ""//JSONString;

		, cbFunction : function( result, owner ){}//owner에 _this가 들어가게 됨;
	}
 * </code>
 * @param {Object} _this HTMLElement's Controller
 */
window.b2link_service.list.getListItemDetail = function( d, _this )
{
	

	var nm_db = d.db_nm;
	var nm_col = d.col_nm;

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( nm_db, nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req__locale_label(
		window.b2link.STATIC.CONFIG.URL.PROXY
			+ window.b2link.url.getServerURLByDB( nm_db )
			+ nm_db + "/" + nm_col + "/getListItemDetail?"
			+ "&db_nm=" + nm_db + "&col_nm=" + nm_col + "&limit=" + d.limit + "&skip=" + d.skip + "&find=" + d.find + "&sort=" + d.sort
		, d.cbFunction
		, _this );

	
};


//




//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		db_nm : ""
		, col_nm : ""

		, find : ""//JSONString;
		, limit : {Uint}
		, skip : {Uint}
		, sort : ""//JSONString;

		, cbFunction : function( result, owner ){}//owner에 _this가 들어가게 됨;
	}
 * </code>
 * @param {Object} _this HTMLElement's Controller
 */
window.b2link_service.list.getSearchList = function( d, _this )
{
	

	var nm_db = d.db_nm;
	var nm_col = d.col_nm;

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( nm_db, nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req__locale_label(
		window.b2link.STATIC.CONFIG.URL.PROXY
			+ window.b2link.url.getServerURLByDB( nm_db )
			+ nm_db + "/" + nm_col + "/getSearchList?"
			+ "&db_nm=" + nm_db + "&col_nm=" + nm_col + "&limit=" + d.limit + "&skip=" + d.skip + "&find=" + d.find + "&sort=" + d.sort
		, d.cbFunction
		, _this );

	
};


//




//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		db_nm : ""
		, col_nm : ""

		, find : ""//JSONString;
		, limit : {Uint}
		, skip : {Uint}
		, sort : ""//JSONString;

		, cbFunction : function( result, owner ){}//owner에 _this가 들어가게 됨;
	}
 * </code>
 * @param {Object} _this HTMLElement's Controller
 */
window.b2link_service.list.setListItemDetail = function( d, _this )
{
	

	var nm_db = d.db_nm;
	var nm_col = d.col_nm;

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( nm_db, nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req__locale_label(
		window.b2link.STATIC.CONFIG.URL.PROXY
			+ window.b2link.url.getServerURLByDB( nm_db )
			+ nm_db + "/" + nm_col + "/setListItemDetail?"
			+ "&db_nm=" + nm_db + "&col_nm=" + nm_col + "&param=" + d.param
		, d.cbFunction
		, _this );

	
};


//




//
//


/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_db" : ""
 *	, "nm_col" : ""
 *	, "cbFunction" : function( data ){};
 * }
 * </code>
 */
window.b2link_service.search_selector.getCount = function( d )
{
	//

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req(
		window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/count/getCount__SearchKeyword?"
			+ "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col + "&data=" + JSON.stringify( d.data )
		, d.cbFunction );

	//
};


//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_db" : ""
 *	, "nm_col" : ""
 *	, "cbFunction" : function( data ){};
 * }
 * </code>
 */
window.b2link_service.search_selector.getSelectorList = function( d )
{
	//

	//*///삭제하기 - 20170125 - 송선우;
	var t = window.b2link_service.search_selector.getSelectorList.__data_temp;
	if( t[ d.nm_db ] )
		if( t[ d.nm_db ][ d.nm_col ] )
		{
			d.cbFunction( t[ d.nm_db ][ d.nm_col ] );
			return;
		}
	//*/

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req(
		window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/find/getSelectorList__SearchKeyword?"
			+ "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col + "&data=" + JSON.stringify( d.data )
			+ ( d.limit ? "&limit=" + d.limit : "" )
			+ ( d.skip ? "&skip=" + d.skip : "" )
		, d.cbFunction );

	//
};







/*/
//수정하기 - 20170123 - 송선우 - db목록 참조 어디다 배치하는게 옳은가?;
var db = window.b2link_service.selector.db;

window.b2link_service.selector.selectorList = {};

//삭제하기 - 20170125 - 송선우 - 위 API로 공식 사용예정;
//window.b2link_service.staticSelectorList = {};

for( var s in db )
{
	window.b2link_service.selector.selectorList[ s ] = function( d )
	{
		

		//내용 개발 해야함 db 단위로 공통 분모 추출해서 추가하기;

		
		return null;
	};
	window.b2link_service.selector.selectorList[ s ]._nm_db = s;

	//삭제하기 - 20170125 - 송선우 - 위 API로 공식 사용예정;
	//window.b2link_service.staticSelectorList[ s ] = window.b2link_service.selector.selectorList[ s ];

	var a = db[ s ];
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		//window.b2link_service.staticSelectorList[ "getSelectorList_" + a[ i ] ] =
		//window.b2link_service.staticSelectorList[ a[ i ] ] =
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ] = function( cbFunction )

		{
			
			var t = arguments.callee;

			d = d ? d : {};
			d.nm_db = t._nm_db;
			d.nm_col = t._nm_col;
				console.log( d.nm_db + " - " + d.nm_col );
			d.cbFunction = cbFunction;

			window.b2link_service.search_selector.getSelectorList( d );
			//window.b2link_service.selector.selectorList[ d.nm_db ][ d.nm_col ]( d );

			
			return o;
		};
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ]._nm_db = s;
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ]._nm_col = a[ i ];
	}
}
//*/







window.b2link_service.search_selector.getSelectorList.__data_temp = {
	list_static : {
		country : [
			  { _id : 29 , cd_us3 : "KOR", cd_us2 : "KR", nm_kr : "대한민국",		nm_us : "", nm_cn : "", cd_n : 410 }
			, { _id : 70 , cd_us3 : "USA", cd_us2 : "US", nm_kr : "미국",			nm_us : "", nm_cn : "", cd_n : 840 }
			, { _id : 181, cd_us3 : "CHN", cd_us2 : "CN", nm_kr : "중화인민공화국",	nm_us : "", nm_cn : "", cd_n : 156 }
		]

		, country_phone_num : [
			  { _id : 205, area : 8, country_phone_num : "+82", nm : "대한민국",		nm_kr : "대한민국",		 nm_us : "", nm_cn : "" }
			, { _id : 0  , area : 1, country_phone_num : "+1" , nm : "미국",			nm_kr : "미국",			 nm_us : "", nm_cn : "" }
			, { _id : 212, area : 8, country_phone_num : "+86", nm : "중화인민공화국",	nm_kr : "중화인민공화국",nm_us : "", nm_cn : "" }
		]

		, currency : [
			  { _id : 34 , cd_us3 : "CNY", cd_n : 156, E : 2, nm_currency : "Chinese yuan", locations : { country : "CHN" } }
			, { _id : 79 , cd_us3 : "KRW", cd_n : 410, E : 2, nm_currency : "South Korean won", locations : { country : "KOR" } }
			, { _id : 149, cd_us3 : "USD", cd_n : 840, E : 2, nm_currency : "United States dollar", locations : { country : "USA" } }
		]
	}
};








//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		"nm_db" : ""
		, "nm_col" : ""

		, "id_gt" : NaN
		, "id_lt" : NaN

		, "cbFunction" : function( data ){};
	}
 * </code>
 */
window.b2link_service.search_selector.getSelectorList_Range = function( d )
{
	//

	//*///삭제하기 - 20170125 - 송선우;
	var t = window.b2link_service.selector.getSelectorList.__data_temp;
	if( t[ d.nm_db ] )
		if( t[ d.nm_db ][ d.nm_col ] )
		{
			d.cbFunction( t[ d.nm_db ][ d.nm_col ] );
			return;
		}
	//*/

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req(
		window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/find/getSelectorList_Range?"
			+ "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col
			+ "&id_gt=" + d.id_gt + "&id_lt=" + d.id_lt
		, d.cbFunction );

	//
};


//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_db" : ""
 *	, "nm_col" : ""
 *	, "cbFunction" : function( data ){};
 * }
 * </code>
 */
window.b2link_service.selector.getCount = function( d )
{
	//

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req(
		window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/count/getCount?"
			+ "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col
		, d.cbFunction );

	//
};


//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
	{
		"nm_db" : ""
		, "nm_col" : ""

		, "cbFunction" : function( data ){};
	}
 * </code>
 */
window.b2link_service.selector.getSelectorList = function( d )
{
	//

	//*///삭제하기 - 20170125 - 송선우;
	var t = window.b2link_service.selector.getSelectorList.__data_temp;
	if( t[ d.nm_db ] )
		if( t[ d.nm_db ][ d.nm_col ] )
		{
			d.cbFunction( t[ d.nm_db ][ d.nm_col ] );
			return;
		}
	//*/

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req(
		window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/find/getSelectorList?"
			+ "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col
		, d.cbFunction );

	//
};







//수정하기 - 20170123 - 송선우 - db목록 참조 어디다 배치하는게 옳은가?;
var db = window.b2link_service.selector.db;

window.b2link_service.selector.selectorList = {};

//삭제하기 - 20170125 - 송선우 - 위 API로 공식 사용예정;
window.b2link_service.staticSelectorList = {};

for( var s in db )
{
	window.b2link_service.selector.selectorList[ s ] = function( d )
	{
		//

		//내용 개발 해야함 db 단위로 공통 분모 추출해서 추가하기;

		//
		return null;
	};
	window.b2link_service.selector.selectorList[ s ]._nm_db = s;

	//삭제하기 - 20170125 - 송선우 - 위 API로 공식 사용예정;
	window.b2link_service.staticSelectorList[ s ] = window.b2link_service.selector.selectorList[ s ];

	var a = db[ s ];
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		window.b2link_service.staticSelectorList[ "getSelectorList_" + a[ i ] ] =
		window.b2link_service.staticSelectorList[ a[ i ] ] =
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ] = function( cbFunction )
		{
			//
			var t = arguments.callee;

			d = d ? d : {};
			d.nm_db = t._nm_db;
			d.nm_col = t._nm_col;
				console.log( d.nm_db + " - " + d.nm_col );
			d.cbFunction = cbFunction;

			window.b2link_service.selector.getSelectorList( d );
			//window.b2link_service.selector.selectorList[ d.nm_db ][ d.nm_col ]( d );

			//
			return o;
		};
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ]._nm_db = s;
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ]._nm_col = a[ i ];
	}
}







window.b2link_service.selector.getSelectorList.__data_temp = {
	list_static : {
		country : [
			  { _id : 29 , cd_us3 : "KOR", cd_us2 : "KR", nm_kr : "대한민국",		nm_us : "", nm_cn : "", cd_n : 410 }
			, { _id : 70 , cd_us3 : "USA", cd_us2 : "US", nm_kr : "미국",			nm_us : "", nm_cn : "", cd_n : 840 }
			, { _id : 181, cd_us3 : "CHN", cd_us2 : "CN", nm_kr : "중화인민공화국",	nm_us : "", nm_cn : "", cd_n : 156 }
		]

		, country_phone_num : [
			  { _id : 205, area : 8, country_phone_num : "+82", nm : "대한민국",		nm_kr : "대한민국",		 nm_us : "", nm_cn : "" }
			, { _id : 0  , area : 1, country_phone_num : "+1" , nm : "미국",			nm_kr : "미국",			 nm_us : "", nm_cn : "" }
			, { _id : 212, area : 8, country_phone_num : "+86", nm : "중화인민공화국",	nm_kr : "중화인민공화국",nm_us : "", nm_cn : "" }
		]

		, currency : [
			  { _id : 34 , cd_us3 : "CNY", cd_n : 156, E : 2, nm_currency : "Chinese yuan", locations : { country : "CHN" } }
			, { _id : 79 , cd_us3 : "KRW", cd_n : 410, E : 2, nm_currency : "South Korean won", locations : { country : "KOR" } }
			, { _id : 149, cd_us3 : "USD", cd_n : 840, E : 2, nm_currency : "United States dollar", locations : { country : "USA" } }
		]
	}
};








//



//
//


/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_db" : ""
 *	, "nm_col" : ""
 *	, "id_gt" : NaN
 *	, "id_lt" : NaN
 *	, "cbFunction" : function( data ){};
 * }
 * </code>
 */
window.b2link_service.selector.getSelectorList_Range = function( d )
{
	//

	//*///삭제하기 - 20170125 - 송선우;
	var t = window.b2link_service.selector.getSelectorList.__data_temp;
	if( t[ d.nm_db ] )
		if( t[ d.nm_db ][ d.nm_col ] )
		{
			d.cbFunction( t[ d.nm_db ][ d.nm_col ] );
			return;
		}
	//*/

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//window.b2link.debug._check_mongodb_queryParameter( d );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	window.b2link_service.common._fn_req(
		window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/find/getSelectorList_Range?"
			+ "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col + "&id_gt=" + d.id_gt + "&id_lt=" + d.id_lt
		, d.cbFunction );

	//
};


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service__instance;

window.b2link_service__instance = window.b2link_service__instance || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service__instance;

/**
 * @function
 * @return {String}
 */
window.b2link_service__instance.__defineGetter__( "URL", function(){ return window.b2link_service.getURL_DB( "_instance" ); } );


//



//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service__instance.cols;

window.b2link_service__instance.cols = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service__instance.cols;

/**
 * @function
 * @return {String}
 */
window.b2link_service__instance.cols.__defineGetter__( "URL", function(){ return window.b2link_service__instance.URL + "cols/"; } );


//



//
//


/**
 * transaction_entity의 progress 순서 구조체 가져오기
 * DB목록와 Collection 목록을 가져온다.
 * @function
 * @param {Function} cbFunction function( result ){}
 */
window.b2link_service__instance.cols.getDBName = function( col_nm, cbFunction )
{
	//

	window.b2link_service.common._fn_req( window.b2link_service__instance.cols.URL + "getDBName?col_nm=" + col_nm, cbFunction );

	//
};


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui

window.b2link_ui = window.b2link_ui || {};

window.b2link_ui.CONST = window.b2link_ui.CONST || {};

window.b2link_ui.CONST.PARAMETER = window.b2link_ui.CONST.PARAMETER || {};

window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE = { display : false };



/**
 * window.b2link_ui*** 함수가 호출 될시에 arguments[ 0 ]을 가져와서 modal 여부를 판단한다.
 * data(arguments[ 0 ])가 없을시엔 기본 Flase를 반환한다.
 * @function
 * @param {Object} data
 * @return {Boolean}
 */
window.b2link_ui.isModal_DefaultFalse = function( data )
{
	//

	if( data )
		if( data.hasOwnProperty( "modal" ) ) return data.modal;

	return false;

	//
};

/**
 * window.b2link_ui*** 함수가 호출 될시에 arguments[ 0 ]을 가져와서 modal 여부를 판단한다.
 * data(arguments[ 0 ])가 없을시엔 기본 True 반환한다.
 * @function
 * @param {Object} data
 * @return {Boolean}
 */
window.b2link_ui.isModal_DefaultTrue = function( data )
{
	//

	if( data )
		if( data.hasOwnProperty( "modal" ) ) return data.modal;

	return true;

	//
};

/**
 * @function
 * @param {Object} ui_data
 * @param {Object} ui_options
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.b2link_ui.addUI__DefaultModalFalse = function( ui_data, ui_options )
{
	//

	var o;
	if( window.b2link_ui.isModal_DefaultFalse( ui_options ) )
	{
		//o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//
	return o;
};

/**
 * @function
 * @param {Object} ui_data
 * @param {Object} ui_options
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.b2link_ui.addUI__DefaultModalTrue = function( ui_data, ui_options )
{
	//

	//o[ 0 ] : element, o[ 1 ] : element controller;
	var o;
	if( window.b2link_ui.isModal_DefaultTrue( ui_options ) )
	{
		//o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//
	return o;
};



//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui


//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.common;

window.b2link_ui.common = window.b2link_ui.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.common;






//
//



//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.complex_search_selector;

window.b2link_ui.complex_search_selector = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.complex_search_selector;


//----------------------------------------------------------------------------------------------------window.b2link_ui.complex_search_selector.d***;

//./window.b2link_ui.complex_search_selector.division_member.js;
!function(){var _=window.b2link_ui.complex_search_selector.division_member=function(_){var e=window.b2link_ui.complex_search_selector.division_member;e._cb0=_,e._elC0=window.b2link_ui.selector.list.category.category_division(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_division:null},_._f0=function(e){_._p0.cd$category_division=e.list_item_value.cd,_._elC0.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.member.member_public()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f1)},_._f1=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.division_team_member.js;
!function(){var _=window.b2link_ui.complex_search_selector.division_team_member=function(_){var e=window.b2link_ui.complex_search_selector.division_team_member;e._cb0=_,e._elC0=window.b2link_ui.selector.list.category.category_division(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(window.b2link_ui.complex_search_selector.division_team_member._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_division:null,cd$category_division_team:null},_._f0=function(e){var i=e.list_item_value;_._p0.cd$category_division=i.cd,_._elC0.hideAndModal_Sync(),_._elC1=window.b2link_ui.selector.list.category["category_division_team_"+i.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_MoveCurrentChildren(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){_._p0.cd$category_division_team=e.list_item_value.cd,_._elC1.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.member.member_public()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f2)},_._f2=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.division_team_part_member.js;
!function(){var _=window.b2link_ui.complex_search_selector.division_team_part_member=function(_){var e=window.b2link_ui.complex_search_selector.division_team_part_member;e._cb0=_,e._elC0=window.b2link_ui.selector.list.category.category_division(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_Sync(),e._elC0.addEvent_mClick(window.b2link_ui.complex_search_selector.division_team_part_member._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_division:null,cd$category_division_team:null,cd$category_division_part:null},_._f0=function(e){var i=e.list_item_value;_._p0.cd$category_division=i.cd,_._elC0.hideAndModal_Sync(),_._elC1=window.b2link_ui.selector.list.category["category_division_team_"+i.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){var i=e.list_item_value;_._p0.cd$category_division_team=i.cd,_._elC1.hideAndModal_Sync();try{_._elC2=window.b2link_ui.selector.list.category["category_division_part_"+_._p0.cd$category_division+"_"+i.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_Sync(),_._elC2.addEvent_mClick(_._f2)}catch(l){window.TtwLog.log("window.b2link_ui.complex_search_selector.division_team_part_member : part가 없는 Team 이다."),_._elC3=window.b2link_ui.search_selector.list.member.member_public()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)}},_._f2=function(e){_._p0.cd$category_division_part=e.list_item_value.cd,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.member.member_public()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//----------------------------------------------------------------------------------------------------window.b2link_ui.complex_search_selector.d***;


//----------------------------------------------------------------------------------------------------window.b2link_ui.complex_search_selector.p***;

//./window.b2link_ui.complex_search_selector.partner_buyer__company_type_company__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_buyer__company_type_company__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_buyer__company_type_company__person;e._cb0=_,e._f0()};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_buyer:null},_._p1={"partner_info.nm_col":"partner_buyer","partner_info._id":-1},_._f0=function(){_._p1["partner_info.nm_col"]="partner_buyer",_._elC1=window.b2link_ui.selector.list.category.category_partner_buyer(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){_._p0.cd$category_partner_buyer=e.list_item_value.cd,_._elC1.hideAndModal_Sync(),_._elC2=window.b2link_ui.search_selector.list.partner[_._p1["partner_info.nm_col"]](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_Sync(),_._elC2.reqParam__fixed=_._p0,_._elC2.req_data__first(),_._elC2.addEvent_mClick(_._f2)},_._f2=function(e){_._p1["partner_info._id"]=e.list_item_value._id,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_buyer__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_buyer__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_buyer__person;e._cb0=_,e._f0()};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_buyer:null},_._p1={"partner_info.nm_col":"partner_buyer"},_._f0=function(){_._p1["partner_info.nm_col"]="partner_buyer",_._elC1=window.b2link_ui.selector.list.category.category_partner_buyer(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f2)},_._f2=function(e){_._elC1.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person;e._cb0=_,e._f0()};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_logistics:null},_._p1={"partner_info.nm_col":"partner_logistics","partner_info._id":-1},_._f0=function(){_._p1["partner_info.nm_col"]="partner_logistics",_._elC1=window.b2link_ui.selector.list.category.category_partner_logistics(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){_._p0.cd$category_partner_logistics=e.list_item_value.cd,_._elC1.hideAndModal_Sync(),_._elC2=window.b2link_ui.search_selector.list.partner[_._p1["partner_info.nm_col"]](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_Sync(),_._elC2.reqParam__fixed=_._p0,_._elC2.req_data__first(),_._elC2.addEvent_mClick(_._f2)},_._f2=function(e){_._p1["partner_info._id"]=e.list_item_value._id,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_logistics__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_logistics__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_logistics__person;e._cb0=_,e._f0()};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_logistics:null},_._p1={"partner_info.nm_col":"partner_logistics"},_._f0=function(){_._p1["partner_info.nm_col"]="partner_logistics",_._elC1=window.b2link_ui.selector.list.category.category_partner_logistics(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f2)},_._f2=function(e){_._elC1.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_supplier__company_type_company__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_supplier__company_type_company__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_supplier__company_type_company__person;e._cb0=_,e._f0()};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_supplier:null},_._p1={"partner_info.nm_col":"partner_supplier","partner_info._id":-1},_._f0=function(){_._p1["partner_info.nm_col"]="partner_supplier",_._elC1=window.b2link_ui.selector.list.category.category_partner_supplier(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){_._p0.cd$category_partner_supplier=e.list_item_value.cd,_._elC1.hideAndModal_Sync(),_._elC2=window.b2link_ui.search_selector.list.partner[_._p1["partner_info.nm_col"]](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_Sync(),_._elC2.reqParam__fixed=_._p0,_._elC2.req_data__first(),_._elC2.addEvent_mClick(_._f2)},_._f2=function(e){_._p1["partner_info._id"]=e.list_item_value._id,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_supplier__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_supplier__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_supplier__person;e._cb0=_,e._f0()};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_supplier:null},_._p1={"partner_info.nm_col":"partner_supplier"},_._f0=function(){_._p1["partner_info.nm_col"]="partner_supplier",_._elC1=window.b2link_ui.selector.list.category.category_partner_supplier(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f2)},_._f2=function(e){_._elC1.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_type_company_type_company__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_type_company_type_company__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_type_company_type_company__person;e._cb0=_,e._elC0=window.b2link_ui.selector.list.category.category_partner(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_partner_buyer:null},_._p1={"partner_info.nm_col":null,"partner_info._id":-1},_._f0=function(e){var n=e.list_item_value;_._p1["partner_info.nm_col"]=n.cd,_._elC0.hideAndModal_Sync(),_._elC1=window.b2link_ui.selector.list.category["category_"+n.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_Sync(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){_._p0.cd$category_partner_buyer=e.list_item_value.cd,_._elC1.hideAndModal_Sync(),_._elC2=window.b2link_ui.search_selector.list.partner[_._p1["partner_info.nm_col"]](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_Sync(),_._elC2.reqParam__fixed=_._p0,_._elC2.req_data__first(),_._elC2.addEvent_mClick(_._f2)},_._f2=function(e){_._p1["partner_info._id"]=e.list_item_value._id,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p1,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.partner_type__person.js;
!function(){var _=window.b2link_ui.complex_search_selector.partner_type__person=function(_){var e=window.b2link_ui.complex_search_selector.partner_type__person;e._cb0=_,e._elC0=window.b2link_ui.selector.list.category.category_partner(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={"partner_info.nm_col":null},_._f0=function(e){_._p0["partner_info.nm_col"]=e.list_item_value.cd,_._elC0.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.partner.partner_person()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f1)},_._f1=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.product_depth0123_product.js;
!function(){var _=window.b2link_ui.complex_search_selector.product_depth0123_product=function(_){var e=window.b2link_ui.complex_search_selector.product_depth0123_product;e._cb0=_,e._p0={},e._elC0=window.b2link_ui.selector.list.category.category_product_depth_000(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_product_depth_000:""},_._f0=function(e){var d=e.list_item_value;_._p0.cd$category_product_depth_000=d.cd,_._elC0.hideAndModal_Sync(),_._elC1=window.b2link_ui.selector.list.category["category_product_depth_001_"+d.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_MoveCurrentChildren(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){var d=e.list_item_value;_._p0.cd$category_product_depth_001=d.cd,_._elC1.hideAndModal_Sync(),_._elC2=window.b2link_ui.selector.list.category["category_product_depth_002_"+d.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_MoveCurrentChildren(),_._elC2.addEvent_mClick(_._f2)},_._f2=function(e){var d=e.list_item_value;_._p0.cd$category_product_depth_002=d.cd,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.selector.list.category["category_product_depth_003_"+d.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC3.showAndModal_MoveCurrentChildren(),_._elC2.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._p0.cd$category_product_depth_003=e.list_item_value.cd,_._elC3.hideAndModal_Sync(),_._elC4=window.b2link_ui.search_selector.list.product.product_basic()[1],_._elC4.reqParam__fixed=_._p0,_._elC4.req_data__first(),_._elC4.addEvent_mClick(_._f4)},_._f4=function(e){_._elC4.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC4.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.product_depth012_product.js;
!function(){var _=window.b2link_ui.complex_search_selector.product_depth012_product=function(_){var e=window.b2link_ui.complex_search_selector.product_depth012_product;e._cb0=_,e._p0={},e._elC0=window.b2link_ui.selector.list.category.category_product_depth_000(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_product_depth_000:""},_._f0=function(e){var d=e.list_item_value;_._p0.cd$category_product_depth_000=d.cd,_._elC0.hideAndModal_Sync(),_._elC1=window.b2link_ui.selector.list.category["category_product_depth_001_"+d.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_MoveCurrentChildren(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){var d=e.list_item_value;_._p0.cd$category_product_depth_001=d.cd,_._elC1.hideAndModal_Sync(),_._elC2=window.b2link_ui.selector.list.category["category_product_depth_002_"+d.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC2.showAndModal_MoveCurrentChildren(),_._elC2.addEvent_mClick(_._f2)},_._f2=function(e){_._p0.cd$category_product_depth_002=e.list_item_value.cd,_._elC2.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.product.product_basic()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f3)},_._f3=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.product_depth01_product.js;
!function(){var _=window.b2link_ui.complex_search_selector.product_depth01_product=function(_){var e=window.b2link_ui.complex_search_selector.product_depth01_product;e._cb0=_,e._p0={},e._elC0=window.b2link_ui.selector.list.category.category_product_depth_000(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_product_depth_000:""},_._f0=function(e){var d=e.list_item_value;_._p0.cd$category_product_depth_000=d.cd,_._elC0.hideAndModal_Sync(),_._elC1=window.b2link_ui.selector.list.category["category_product_depth_001_"+d.cd](window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],_._elC1.showAndModal_MoveCurrentChildren(),_._elC1.addEvent_mClick(_._f1)},_._f1=function(e){_._p0.cd$category_product_depth_001=e.list_item_value.cd,_._elC1.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.product.product_basic()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f2)},_._f2=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//./window.b2link_ui.complex_search_selector.product_depth0_product.js;
!function(){var _=window.b2link_ui.complex_search_selector.product_depth0_product=function(_){var e=window.b2link_ui.complex_search_selector.product_depth0_product;e._cb0=_,e._p0={},e._elC0=window.b2link_ui.selector.list.category.category_product_depth_000(window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE)[1],e._elC0.showAndModal_MoveCurrentChildren(),e._elC0.addEvent_mClick(e._f0)};_._cb0,_._elC0,_._elC1,_._elC2,_._elC3,_._p0={cd$category_product_depth_000:""},_._f0=function(e){_._p0.cd$category_product_depth_000=e.list_item_value.cd,_._elC0.hideAndModal_Sync(),_._elC3=window.b2link_ui.search_selector.list.product.product_basic()[1],_._elC3.reqParam__fixed=_._p0,_._elC3.req_data__first(),_._elC3.addEvent_mClick(_._f1)},_._f1=function(e){_._elC3.hideAndModal_MoveBGCLastChild(),_._cb0&&_._cb0(e.list_item_value),_._elC3.reqParam__fixed=null}}();

//----------------------------------------------------------------------------------------------------window.b2link_ui.complex_search_selector.p***;



//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.complex_selector;

window.b2link_ui.complex_selector = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.complex_selector;


//



//
//


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


//



//
//


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
	

	var c = window.b2link_ui.date_picker.calendar({ display : false })[ 1 ];
		c.mClick( cb_Complete );

	cb_Complete._ownerCtrl = c;

	c.showAndModal_MoveCurrentChildren();

	
};


//



//
//


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
	//////////

	var url = "./ui_include/test-form/" + nm_db + "/" + nm_col + ".html";

	//////////

	return window.b2link_ui.el_form.getEL_FormFromDB._loadURL( url, bReload );
};
window.b2link_ui.el_form.getEL_FormFromDB._disposeStore = function()
{
	//////////

	var f0 = window.b2link.element.dispose;
	var t = window.b2link_ui.el_form.getEL_FormFromDB._store;
	for( var s in t )
	{
		f0( t[ s ] );
		t[ s ] = null;
		delete t[ s ];
	}

	//////////
};
window.b2link_ui.el_form.getEL_FormFromDB._loadURL = function( url, bReload )
{
	//////////

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

	//////////
	return r;
};
window.b2link_ui.el_form.getEL_FormFromDB._store = {};
window.b2link_ui.el_form.getEL_FormFromDB.reloadAll = function()
{
	//////////

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

	//////////
};


//



//
//


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


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.inputor;

window.b2link_ui.inputor = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.inputor;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 * @example
 * <code>
	//객체를 생성 후 화면엔 표출하지 않고 Reference만 담아 놓는다.;
	var o = window.b2link_ui.inputor.address({ display : false });

	//HTMLElement Reference를 담아놓는다.;
	var el = o[ 0 ];//HTMLElement;

	//HTMLElement's Controller Reference를 담아 놓는다.;
	var elC = o[ 1 ];//HTMLElement's Controller;

	//뷰 객체를 화면에 표출한다.
	elC.show();

	//뷰 HTMLElement에 뷰 객체가 발생시키는 이벤트의 리스너를 추가한다.;
	el.addEventListener( window.b2link.event.DATA_WRITE_COMPLETE, function( e ){

		//이벤트가 발생되면 리스너가 작동 하자마자 이벤트를 제거한다.;
		//이벤트 리스너의 중첩으로 인한 메모리 누수 방지;
		el.removeEventListener( window.b2link.event.DATA_WRITE_COMPLETE, arguments.callee, false );

		//넘겨받은 이벤트 디테일 객체로 하고싶은 로직을 완성한다.;
		//window.b2link.html.applyBrace_children( _el__article_info_shipping, e.detail );
	}, false, 0, true );
 * </code>
 */
window.b2link_ui.inputor.address=function(){var i={url:window.b2link.STATIC.CONFIG.URL.UI.BASE+"static/inputor/address/",nm:"address",css_url:"./css_ui/",css_front_nm:"static_ui_inputor-",key:"SUI_INPUTOR$ADDRESS"},n=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(i,arguments[0]);return n};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 * @example
 * <code>
	//객체를 생성 후 화면엔 표출하지 않고 Reference만 담아 놓는다.;
	var o = window.b2link_ui.inputor.address.modal({ display : false });

	//HTMLElement Reference를 담아놓는다.;
	var el = o[ 0 ];//HTMLElement;

	//HTMLElement's Controller Reference를 담아 놓는다.;
	var elC = o[ 1 ];//HTMLElement's Controller;

	//다른 모달과 중첩 사용을 원하면 이런 모달 생성 함수를 호출한다.;
	elC.showAndModal_MoveCurrentChildren();

	//다른 모달이 없고 싱글 모달 뷰 일경우 기본 모달 생성 함수를 호출한다.;
	//비동기 이벤트가 포함되어있다. - 동기로직 작성 불가;
	//elC.showAndModal();

	//다른 모달이 없고 싱글 모달 뷰 일경우 기본 모달 생성 함수를 호출한다.;
	//비동기 이벤트가 빠진다. - 동기로직 작성 가능;
	elC.showAndModal_Sync();

	//뷰 HTMLElement에 뷰 객체가 발생시키는 이벤트의 리스너를 추가한다.;
	el.addEventListener( window.b2link.event.DATA_WRITE_COMPLETE, function( e ){

	//이벤트가 발생되면 리스너가 작동 하자마자 이벤트를 제거한다.;
	//이벤트 리스너의 중첩으로 인한 메모리 누수 방지;
	el.removeEventListener( window.b2link.event.DATA_WRITE_COMPLETE, arguments.callee, false );

		//넘겨받은 이벤트 디테일 객체로 하고싶은 로직을 완성한다.;
		//window.b2link.html.applyBrace_children( _el__article_info_shipping, e.detail );
	}, false, 0, true );
 * </code>
 */
window.b2link_ui.inputor.address.modal=function(){var i={url:window.b2link.STATIC.CONFIG.URL.UI.BASE+"static/inputor/address/",nm:"address",css_url:"./css_ui/",css_front_nm:"static_ui_inputor-",key:"SUI_INPUTOR$ADDRESS"},n=window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI(i,arguments[0]);return n};


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.message;

window.b2link_ui.message = window.b2link_ui.message || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.message;

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Function} calllback function( result ){}
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.alert( "경고", null, function( result ){ console.log( result ); } );

	window.b2link_ui.message.alert({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"
		, text : "내용 메세지"
		, callback : function( result ){ console.log( result ); }
	}, null );

	window.b2link_ui.message.alert({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"

		//, text : "내용 메세지"
		, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )

		, type : null
		, callback : function( result ){ console.log( result ); }
	});
 * </code>
 */
window.b2link_ui.message.alert = TtwMessageBox.alert;

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Function} calllback function( result ){}
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.confirm( "확인", null, function( result ){ console.log( result ); } );

	window.b2link_ui.message.confirm({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"
		, text : "내용 메세지"

		, type : null

		, callback : function( result ){ console.log( result ); }
	});

	window.b2link_ui.message.confirm({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"

		//, text : "내용 메세지"
		, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )
	}, null, function( result ){ console.log( result ); } );
 * </code>
 */
window.b2link_ui.message.confirm = TtwMessageBox.confirm;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.b2link_ui.message.error( "모달 메세지를 띄우겠다" );
	window.b2link_ui.message.modalbox.hide( o );
 * </code>
 */
window.b2link_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.b2link_ui.message.message( s ); };

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Number} time 1000이 1초
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.message( "잠시 보이고 사라질 메세지" );

	window.b2link_ui.message.message( "10초 보이고 사라질 메세지", null, 10000 );
 * </code>
 */
window.b2link_ui.message.message = TtwMessageBox.message;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.b2link_ui.message.modalbox( "모달 메세지를 띄우겠다" );
	window.b2link_ui.message.modalbox.hide( o );
 * </code>
 */
window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;



/**
 * 메세지 박스 API를 전부 활성화 시킨다.
 * @function
 */
window.b2link_ui.message.active = function()
{
	window.b2link_ui.message.alert = TtwMessageBox.alert;
	window.b2link_ui.message.confirm = TtwMessageBox.confirm;
	window.b2link_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.b2link_ui.message.message( s ); };
	window.b2link_ui.message.message = TtwMessageBox.message;
	window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;
};

/**
 * 메세지 박스 작동 해제 소스
 * @function
 */
window.b2link_ui.message.deactive = function(){ window.b2link_ui.message.alert = window.b2link_ui.message.confirm = window.b2link_ui.message.error = window.b2link_ui.message.message = window.b2link_ui.message.modalbox = function(){}; };

//--------------------------------------------------SYS0030(Brand Portal);

/**
 * 메세지 박스 API를 활성화 시킨다.
 * window.b2link_ui.message.alert 만 활성화 시킨다.
 * SYS0030(BrandPortal)에서 사용한다.
 * @function
 */
window.b2link_ui.message.active.BrandPortal = function()
{
	window.b2link_ui.message.alert = TtwMessageBox.alert;
	//window.b2link_ui.message.confirm = TtwMessageBox.confirm;
	//window.b2link_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.b2link_ui.message.message( s ); };
	//window.b2link_ui.message.message = TtwMessageBox.message;
	//window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;
};
window.b2link_ui.message.active.SYS0030 = window.b2link_ui.message.active.BrandPortal;

//--------------------------------------------------;




//



//
//


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


//



//
//


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



//



//
//


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

	

	return o;
};


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.staticFileUploader;

window.b2link_ui.staticFileUploader = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.staticFileUploader;


//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.staticModalPanelPreview;

window.b2link_ui.staticModalPanelPreview = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.staticModalPanelPreview;






//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.staticModalPanelTextAreaBox;

window.b2link_ui.staticModalPanelTextAreaBox = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.staticModalPanelTextAreaBox;

//./window.b2link_ui.staticModalPanelTextAreaBox.memo.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticModalPanelTextAreaBox.memo = function()
{
	//

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/modalPanel/textAreaBox/memo/"
		, nm : "memo"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_modalPanel_textAreaBox-"
		, key : "SUI_MODALPANEL_TEXTAREABOX$MEMO"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	//

	return o;
};

//./window.b2link_ui.staticModalPanelTextAreaBox.purchase_reason_etc.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticModalPanelTextAreaBox.purchase_reason_etc = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/modalPanel/textAreaBox/purchase_reason_etc/"
		, nm : "purchase_reason_etc"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_modalPanel_textAreaBox-"
		, key : "SUI_MODALPANEL_TEXTAREABOX$PURCHASE_REASON_ETC"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	

	return o;
};

//./window.b2link_ui.staticModalPanelTextAreaBox.release_res_delay_reason.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticModalPanelTextAreaBox.release_res_delay_reason = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/modalPanel/b2link_transaction_release_res/"
		, nm : "delay_reason"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_modalPanel_transaction_release_res-"
		, key : "SUI_MODALPANEL_TEXTAREABOX$release_res_delay_reason"
	};

	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	

	return o;
};

//./window.b2link_ui.staticModalPanelTextAreaBox.sale_reason_etc.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticModalPanelTextAreaBox.sale_reason_etc = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/modalPanel/textAreaBox/sale_reason_etc/"
		, nm : "sale_reason_etc"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_modalPanel_textAreaBox-"
		, key : "SUI_MODALPANEL_TEXTAREABOX$SALE_REASON_ETC"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	

	return o;
};

//./window.b2link_ui.staticModalPanelTextAreaBox.wearing_res_delay_reason.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticModalPanelTextAreaBox.wearing_res_delay_reason = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/modalPanel/b2link_transaction_wearing_res/"
		, nm : "delay_reason"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_modalPanel_transaction_wearing_res-"
		, key : "SUI_MODALPANEL_TEXTAREABOX$wearing_res_delay_reason"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	

	return o;
};

//./window.b2link_ui.staticModalPanelTextAreaBox.wearing_res_product_location.js;
/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.staticModalPanelTextAreaBox.wearing_res_product_location = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "static/modalPanel/b2link_transaction_wearing_res/"
		, nm : "product_location"
		, css_url : "./css_ui/"
		, css_front_nm : "static_ui_modalPanel_transaction_wearing_res-"
		, key : "SUI_MODALPANEL_TEXTAREABOX$wearing_res_product_location"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );

	

	return o;
};


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.staticScheduler;

window.b2link_ui.staticScheduler = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.staticScheduler;


//



//
//


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

	

	return o;
};


//



//
//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.test;

window.b2link_ui.test = window.b2link_ui.test || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.test;


//



//
//


/**
 * @function
 * @param {*} result
 */
window.b2link_ui.common._checkSessionAuth__ErrorMessage = function( result )
{
	//

	/*/
	window.b2link_ui.message.error( JSON.stringify( result ) );
	//*/
	// TODO :: 다국어 적용
	window.b2link_ui.message.error( result.d + " 권한이 없습니다." );
	//*/

	//
};


//



//
//


(function(){

	/**
	 * @function
	 * @param {Function} cbFunction function( selectedData ){}
	 * @example
	 * <code>
		window.b2link_ui.complex_search_selector.division_member( function( selectedData ){
			console.log( selectedData );
		});
	 * </code>
	 */
	var _ = window.b2link_ui.complex_search_selector.division_member = function( cbFunction )
	{
		//

		var _ = window.b2link_ui.complex_search_selector.division_member
			_._cb0 = cbFunction;

			_._elC0 = window.b2link_ui.selector.list.category.category_division( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
			_._elC0.showAndModal_MoveCurrentChildren();
			//_._elC0.showAndModal_Sync();
			//_._elC0.req_data__first();
			//Division 선택;
			_._elC0.addEvent_mClick( _._f0 );

		//
	};
	_._cb0;
	_._elC0;
	_._elC1;
	_._elC2;
	_._elC3;
	_._p0 = { cd$category_division : null };
	_._f0 = function( li )
	{
		_._p0.cd$category_division = li.list_item_value.cd;
		_._elC0.hideAndModal_Sync();

		//Member 검색;
		_._elC3 = window.b2link_ui.search_selector.list.member.member_public()[ 1 ];
		_._elC3.reqParam__fixed = _._p0;
		_._elC3.req_data__first();
		//_._elC3.req_dataCount();
		_._elC3.addEvent_mClick( _._f1 );
	};
	_._f1 = function( li )
	{
		_._elC3.hideAndModal_MoveBGCLastChild();
		if( _._cb0 ) _._cb0( li.list_item_value );
		_._elC3.reqParam__fixed = null;
	};

})();


//



//
//


(function(){

	/**
	 * @function
	 * @param {Function} cbFunction function( selectedData ){}
	 * @example
	 * <code>
		window.b2link_ui.complex_search_selector.division_team_member( function( selectedData3, selectedData2, selectedData1 ){
			console.log( selectedData3 );
			console.log( selectedData2 );
			console.log( selectedData1 );
		});
	 * </code>
	 */
	var _ = window.b2link_ui.complex_search_selector.division_team_member = function( cbFunction )
	{
		//

		var _ = window.b2link_ui.complex_search_selector.division_team_member;
			_._cb0 = cbFunction;

			_._elC0 = window.b2link_ui.selector.list.category.category_division( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
			_._elC0.showAndModal_MoveCurrentChildren();
			//_._elC0.showAndModal_Sync();
			//_._elC0.req_data__first();

			//Division 선택;
			_._elC0.addEvent_mClick( window.b2link_ui.complex_search_selector.division_team_member._f0 );

		//
	};
	_._cb0;
	_._elC0;
	_._elC1;
	_._elC2;
	_._elC3;
	_._p0 = { cd$category_division : null, cd$category_division_team : null };
	_._f0 = function( li )
	{
		var lv = _._f0._selectedItem =  li.list_item_value;

		_._p0.cd$category_division = lv.cd;
		_._elC0.hideAndModal_Sync();

		_._elC1 = window.b2link_ui.selector.list.category[ "category_division_team_" + lv.cd ]( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC1.showAndModal_MoveCurrentChildren();
		//_._elC1.showAndModal_Sync();
		//_._elC1.req_data__first();

		//Division-Team 선택;
		_._elC1.addEvent_mClick( _._f1 );
	};
	_._f0._selectedItem;
	_._f1 = function( li )
	{
		_._f1._selectedItem = li.list_item_value;
		_._p0.cd$category_division_team = li.list_item_value.cd;
		_._elC1.hideAndModal_Sync();

		//Member 검색;
		_._elC3 = window.b2link_ui.search_selector.list.member.member_public()[ 1 ];
		_._elC3.reqParam__fixed = _._p0;
		_._elC3.req_data__first();
		//_._elC3.req_dataCount();
		_._elC3.addEvent_mClick( _._f2 );
	};
	_._f1._selectedItem;
	_._f2 = function( li )
	{
		_._elC3.hideAndModal_MoveBGCLastChild();
		if( _._cb0 ) _._cb0( li.list_item_value, _._f1._selectedItem, _._f0._selectedItem );
		_._elC3.reqParam__fixed = null;
	};

})();


//



//
//


(function(){

	/**
	 * @function
	 * @param {Function} cbFunction function( selectedData ){}
	 * @example
	 * <code>
		window.b2link_ui.complex_search_selector.division_team_part_member( function( selectedData3, selectedData2, selectedData1, selectedData0 ){
			console.log( selectedData3 );
			console.log( selectedData2 );
			console.log( selectedData1 );
			console.log( selectedData0 );
		});
	 * </code>
	 */
	var _ = window.b2link_ui.complex_search_selector.division_team_part_member = function( cbFunction )
	{
		//

		var _ = window.b2link_ui.complex_search_selector.division_team_part_member;
			_._cb0 = cbFunction;

			_._elC0 = window.b2link_ui.selector.list.category.category_division( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
			_._elC0.showAndModal_Sync();
			//_._elC0.req_data__first();

			//Division 선택;
			_._elC0.addEvent_mClick( window.b2link_ui.complex_search_selector.division_team_part_member._f0 );

		//
	};
	_._cb0;
	_._elC0;
	_._elC1;
	_._elC2;
	_._elC3;
	_._p0 = { cd$category_division : null, cd$category_division_team : null, cd$category_division_part : null };
	_._f0 = function( li )
	{
		_._f0.selectedItem = li.list_item;
		var lv = li.list_item_value;

		_._p0.cd$category_division = lv.cd;
		_._elC0.hideAndModal_Sync();

		_._elC1 = window.b2link_ui.selector.list.category[ "category_division_team_" + lv.cd ]( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC1.showAndModal_Sync();
		//_._elC1.req_data__first();

		//Division-Team 선택;
		_._elC1.addEvent_mClick( _._f1 );
	};
	_._f0.selectedItem;
	_._f1 = function( li )
	{
		_._f1.selectedItem = li.list_item_value;
		var lv = li.list_item_value;

		_._p0.cd$category_division_team = lv.cd;
		_._elC1.hideAndModal_Sync();

		//Division-Team-Part 선택;
		try
		{
			_._elC2 = window.b2link_ui.selector.list.category[ "category_division_part_" + _._p0.cd$category_division + "_" + lv.cd ]( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
			_._elC2.showAndModal_Sync();
			//_._elC2.req_data__first();
			_._elC2.addEvent_mClick( _._f2 );
		}
		catch( er )
		{
			window.TtwLog.log( "window.b2link_ui.complex_search_selector.division_team_part_member : part가 없는 Team 이다." );

			//Member 검색;
			_._elC3 = window.b2link_ui.search_selector.list.member.member_public()[ 1 ];
			_._elC3.reqParam__fixed = _._p0;
			_._elC3.req_data__first();
			_._elC3.addEvent_mClick( _._f3 );
		}
	};
	_._f1.selectedItem;
	_._f2 = function( li )
	{
		_._f2.selectedItem = li.list_item_value;
		_._p0.cd$category_division_part = li.list_item_value.cd;
		_._elC2.hideAndModal_Sync();

		//Member 검색;
		_._elC3 = window.b2link_ui.search_selector.list.member.member_public()[ 1 ];
		_._elC3.reqParam__fixed = _._p0;
		_._elC3.req_data__first();
		//_._elC3.req_dataCount();
		_._elC3.addEvent_mClick( _._f3 );
	};
	_._f2.selectedItem;
	_._f3 = function( li )
	{
		_._elC3.hideAndModal_MoveBGCLastChild();
		if( _._cb0 ) _._cb0( li.list_item_value, _._f2.selectedItem, _._f1.selectedItem, _._f0.selectedItem );
		_._elC3.reqParam__fixed = null;
	};

})();


//



//
//


(function(){

	/**
	 * @function
	 * @param {Function} cbFunction function( selectedData ){}
	 * @example
	 * <code>
		window.b2link_ui.complex_search_selector.partner_buyer__company_type_company__person( function( selectedData3, selectedData2, selectedData1 ){
			console.log( selectedData3 );
			console.log( selectedData2 );
			console.log( selectedData1 );
		});
	 * </code>
	 */
	var _ = window.b2link_ui.complex_search_selector.partner_buyer__company_type_company__person = function( cbFunction )
	{
		//

		var _ = window.b2link_ui.complex_search_selector.partner_buyer__company_type_company__person;
			_._cb0 = cbFunction;

			_._f0();

		//
	};
	_._cb0;
	_._elC0;
	_._elC1;
	_._elC2;
	_._elC3;
	_._p0 = { cd$category_partner_buyer : null };
	_._p1 = { "partner_info.nm_col" : "partner_buyer", "partner_info._id" : -1 };
	_._f0 = function()
	{
		_._p1[ "partner_info.nm_col" ] = "partner_buyer";
		//_._elC0.hideAndModal_Sync();

		_._elC1 = window.b2link_ui.selector.list.category.category_partner_buyer( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC1.showAndModal_Sync();
		//_._elC1.req_data__first();

		//category.category_partner_buyer 선택;
		_._elC1.addEvent_mClick( _._f1 );
	}
	_._f1 = function( li )
	{
		_._f1._selectedItem = li.list_item_value;
		_._p0.cd$category_partner_buyer = li.list_item_value.cd;
		_._elC1.hideAndModal_Sync();

		//partner.partner_buyer 검색;
		_._elC2 = window.b2link_ui.search_selector.list.partner[ _._p1[ "partner_info.nm_col" ] ]( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC2.showAndModal_Sync();
		_._elC2.reqParam__fixed = _._p0;
		_._elC2.req_data__first();
		//_._elC2.req_dataCount();
		_._elC2.addEvent_mClick( _._f2 );
	};
	_._f1._selectedItem;
	_._f2 = function( li )
	{
		_._f2._selectedItem = li.list_item_value;
		_._p1[ "partner_info._id" ] = li.list_item_value._id;
		_._elC2.hideAndModal_Sync();

		//partner_person 검색;
		_._elC3 = window.b2link_ui.search_selector.list.partner.partner_person()[ 1 ];
		_._elC3.reqParam__fixed = _._p1;
		_._elC3.req_data__first();
		//_._elC3.req_dataCount();
		_._elC3.addEvent_mClick( _._f3 );
	};
	_._f2._selectedItem;
	_._f3 = function( li )
	{
		_._elC3.hideAndModal_MoveBGCLastChild();
		if( _._cb0 ) _._cb0( li.list_item_value, _._f2._selectedItem, _._f1._selectedItem );
		_._elC3.reqParam__fixed = null;
	};

})();


//



//
//


(function(){
	/**
	 * @function
	 * @param {Function} cbFunction function( selectedData ){}
	 * @example
	 * <code>
		window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person( function( selectedData3, selectedData2, selectedData1 ){
			console.log( selectedData3 );
			console.log( selectedData2 );
			console.log( selectedData1 );
		});
	 * </code>
	 */
	var _ = window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person = function( cbFunction )
	{
		////

		var _ = window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person;
			_._cb0 = cbFunction;

			_._f0();

		////
	};
	_._cb0;
	_._elC0;
	_._elC1;
	_._elC2;
	_._elC3;
	_._p0 = { cd$category_partner_logistics : null };
	_._p1 = { "partner_info.nm_col" : "partner_logistics", "partner_info._id" : -1 };
	_._f0 = function()
	{
		_._p1[ "partner_info.nm_col" ] = "partner_logistics";
		//_._elC0.hideAndModal_Sync();

		_._elC1 = window.b2link_ui.selector.list.category.category_partner_logistics( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC1.showAndModal_Sync();
		//_._elC1.req_data__first();

		//category.category_partner_logistics 선택;
		_._elC1.addEvent_mClick( _._f1 );
	}
	_._f1 = function( li )
	{
		_._f1._selectedItem = li.list_item_value;
		_._p0.cd$category_partner_logistics = li.list_item_value.cd;
		_._elC1.hideAndModal_Sync();

		//partner.partner_logistics 선택;
		_._elC2 = window.b2link_ui.search_selector.list.partner[ _._p1[ "partner_info.nm_col" ] ]( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC2.showAndModal_Sync();
		_._elC2.reqParam__fixed = _._p0;
		_._elC2.req_data__first();
		//_._elC2.req_dataCount();
		_._elC2.addEvent_mClick( _._f2 );
	};
	_._f1._selectedItem;
	_._f2 = function( li )
	{
		_._f2._selectedItem = li.list_item_value;
		_._p1[ "partner_info._id" ] = li.list_item_value._id;
		_._elC2.hideAndModal_Sync();

		//parnter.partner_person;
		_._elC3 = window.b2link_ui.search_selector.list.partner.partner_person()[ 1 ];
		_._elC3.reqParam__fixed = _._p1;
		_._elC3.req_data__first();
		//_._elC3.req_dataCount();
		_._elC3.addEvent_mClick( _._f3 );
	};
	_._f2._selectedItem;
	_._f3 = function( li )
	{
		_._elC3.hideAndModal_MoveBGCLastChild();
		if( _._cb0 ) _._cb0( li.list_item_value, _._f2._selectedItem, _._f1._selectedItem );
		_._elC3.reqParam__fixed = null;
	};
})();


//



//
//


(function(){

	/**
	 * @function
	 * @param {Function} cbFunction function( selectedData ){}
	 * @example
	 * <code>
		window.b2link_ui.complex_search_selector.partner_supplier__company_type_company__person( function( selectedData3, selectedData2, selectedData1 ){
			console.log( selectedData3 );
			console.log( selectedData2 );
			console.log( selectedData1 );
		});
	 * </code>
	 */
	var _ = window.b2link_ui.complex_search_selector.partner_supplier__company_type_company__person = function( cbFunction )
	{
		//

		var _ = window.b2link_ui.complex_search_selector.partner_supplier__company_type_company__person;
			_._cb0 = cbFunction;

			_._f0();

		//
	};
	_._cb0;
	_._elC0;
	_._elC1;
	_._elC2;
	_._elC3;
	_._p0 = { cd$category_partner_supplier : null };
	_._p1 = { "partner_info.nm_col" : "partner_supplier", "partner_info._id" : -1 };
	_._f0 = function()
	{
		_._p1[ "partner_info.nm_col" ] = "partner_supplier";
		//_._elC0.hideAndModal_Sync();

		_._elC1 = window.b2link_ui.selector.list.category.category_partner_supplier( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC1.showAndModal_Sync();
		//_._elC1.req_data__first();

		//category.category_parnter_supplier 선택;
		_._elC1.addEvent_mClick( _._f1 );
	}
	_._f1 = function( li )
	{
		_._f1._selectedItem = li.list_item_value;
		_._p0.cd$category_partner_supplier = li.list_item_value.cd;
		_._elC1.hideAndModal_Sync();

		//partner.partner_supplier 검색;
		_._elC2 = window.b2link_ui.search_selector.list.partner[ _._p1[ "partner_info.nm_col" ] ]( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
		_._elC2.showAndModal_Sync();
		_._elC2.reqParam__fixed = _._p0;
		_._elC2.req_data__first();
		//_._elC2.req_dataCount();
		_._elC2.addEvent_mClick( _._f2 );
	};
	_._f1._selectedItem;
	_._f2 = function( li )
	{
		_._f2._selectedItem = li.list_item_value;
		_._p1[ "partner_info._id" ] = li.list_item_value._id;
		_._elC2.hideAndModal_Sync();

		//partner.partner_person 검색;
		_._elC3 = window.b2link_ui.search_selector.list.partner.partner_person()[ 1 ];
		_._elC3.reqParam__fixed = _._p1;
		_._elC3.req_data__first();
		//_._elC3.req_dataCount();
		_._elC3.addEvent_mClick( _._f3 );
	};
	_._f2._selectedItem;
	_._f3 = function( li )
	{
		_._elC3.hideAndModal_MoveBGCLastChild();
		if( _._cb0 ) _._cb0( li.list_item_value, _._f2._selectedItem, _._f1._selectedItem );
		_._elC3.reqParam__fixed = null;
	};

})();


//



//
//


/**
 * @function
 * @param {Function} cb_Complete
 * @param {Object} options { display : true, modal true }
 * @example
 * <code>
	window.b2link_ui.date_picker.calendar.mClick( function( calendar ){
		debugger;
		console.log( calendar.getFormatDate( calendar.getDate(), "-" ) );
	});
 * </code>
 */
window.b2link_ui.date_picker.calendar.mClick = function( cb_Complete, options )
{
	

	var c = window.b2link_ui.date_picker.calendar( { display : false } )[ 1 ];//HTMLElement's Controller;
		c.calendar.gotoToday();
		c.mClick( cb_Complete );

	cb_Complete._ownerCtrl = c;
	//cb_Complete._ownerCtrl.hideAndModal_MoveBGCLastChild();
	c.showAndModal();

	
};


//







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
	

	var c = window.b2link_ui.date_picker.calendar({ display : false })[ 1 ];
		c.calendar.gotoToday();
		c.mClick( cb_Complete );
		
	cb_Complete._ownerCtrl = c;

	c.showAndModal_MoveCurrentChildren();

	
};






//
//


(function(){

	var _store = {
		singleAlert : null
		, singleConfirm : null
	};

	var _fns_singleMessage = {
		1 : function( d, f ){ return f( d[ 0 ] ); }
		, 2 : function( d, f ){ return f( d[ 0 ], d[ 1 ] ); }
		, 3 : function( d, f ){ return f( d[ 0 ], d[ 1 ], d[ 2 ] ); }
	};

	/**
	 * @function
	 * @param {String} text
	 * @param {String} type null
	 * @param {Function} calllback function( result ){}
	 * @return {HTMLElement}
	 * @example
	 * <code>
		window.b2link_ui.message.alert( "경고", null, function( result ){ console.log( result ); } );
		window.b2link_ui.message.alert( "경고", function( result ){ console.log( result ); } );

		window.b2link_ui.message.alert({
			left : 10
			, top : 20
			, width : 300
			, height : 300
			, title : "타이틀"
			, text : "내용 메세지"
			, callback : function( result ){ console.log( result ); }
		});

		window.b2link_ui.message.alert({
			left : 10
			, top : 20
			, width : 300
			, height : 300
			, title : "타이틀"

			//, text : "내용 메세지"
			, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )

			, type : null
			, callback : function( result ){ console.log( result ); }
		});
	 * </code>
	 */
	window.b2link_ui.message.alert = TtwMessageBox.alert;

	/**
	 * singleAlert 사용하여 마지막에 띄운 Alert만 화면에 유지시켜 놓는 다.
	 * @function
	 * @return {HTMLDIVElement}
	 */
	window.b2link_ui.message.singleAlert = function()
	{
		if( _store.singleAlert )
		{
			_store.singleAlert.remove();
			_store.singleAlert = null;
		}

		_store.singleAlert = _fns_singleMessage[ arguments.length ]( arguments, window.b2link_ui.message.alert );

		return _store.singleAlert;
	};

	/**
	 * @function
	 * @param {String} text
	 * @param {String} type null
	 * @param {Function} calllback function( result ){}
	 * @return {HTMLElement}
	 * @example
	 * <code>
		window.b2link_ui.message.confirm( "확인", null, function( result ){ console.log( result ); } );

		window.b2link_ui.message.confirm({
			left : 10
			, top : 20
			, width : 300
			, height : 300
			, title : "타이틀"
			, text : "내용 메세지"

			, type : null

			, callback : function( result ){ console.log( result ); }
		});

		window.b2link_ui.message.confirm({
			left : 10
			, top : 20
			, width : 300
			, height : 300
			, title : "타이틀"

			//, text : "내용 메세지"
			, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )
		}, null, function( result ){ console.log( result ); } );
	 * </code>
	 */
	window.b2link_ui.message.confirm = TtwMessageBox.confirm;

	/**
	 * singleConfirm 사용하여 마지막에 띄운 Confirm만 화면에 유지시켜 놓는 다.
	 * @function
	 * @return {HTMLDIVElement}
	 */
	window.b2link_ui.message.singleConfirm = function()
	{
		if( _store.singleConfirm )
		{
			_store.singleConfirm.remove();
			_store.singleConfirm = null;
		}

		_store.singleConfirm = _fns_singleMessage[ arguments.length ]( arguments, window.b2link_ui.message.confirm );

		return _store.singleConfirm;
	};

})();

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.b2link_ui.message.error( "모달 메세지를 띄우겠다" );
	window.b2link_ui.message.modalbox.hide( o );
 * </code>
 */
window.b2link_ui.message.error = function( s )
{
	window.TtwLog.error( s );
	return window.b2link_ui.message.message( s );
}

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Number} time 1000이 1초
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.message( "잠시 보이고 사라질 메세지" );

	window.b2link_ui.message.message( "10초 보이고 사라질 메세지", null, 10000 );
 * </code>
 */
window.b2link_ui.message.message = TtwMessageBox.message;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.b2link_ui.message.modalbox( "모달 메세지를 띄우겠다" );
	window.b2link_ui.message.modalbox.hide( o );
 * </code>
 */
window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;



/**
 * 메세지 박스 API를 전부 활성화 시킨다.
 * @function
 */
window.b2link_ui.message.active = function()
{
	window.b2link_ui.message.alert = TtwMessageBox.alert;
	window.b2link_ui.message.confirm = TtwMessageBox.confirm;
	window.b2link_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.b2link_ui.message.message( s ); };
	window.b2link_ui.message.message = TtwMessageBox.message;
	window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;
};

/**
 * 메세지 박스 작동 해제 소스
 * @function
 */
window.b2link_ui.message.deactive = function(){ window.b2link_ui.message.alert = window.b2link_ui.message.confirm = window.b2link_ui.message.error = window.b2link_ui.message.message = window.b2link_ui.message.modalbox = function(){}; };

//--------------------------------------------------SYS0030(Brand Portal);

/**
 * 메세지 박스 API를 활성화 시킨다.
 * window.b2link_ui.message.alert 만 활성화 시킨다.
 * SYS0030(BrandPortal)에서 사용한다.
 * @function
 */
window.b2link_ui.message.active.BrandPortal = function()
{
	window.b2link_ui.message.alert = TtwMessageBox.alert;
	//window.b2link_ui.message.confirm = TtwMessageBox.confirm;
	//window.b2link_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.b2link_ui.message.message( s ); };
	//window.b2link_ui.message.message = TtwMessageBox.message;
	//window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;
};
window.b2link_ui.message.active.SYS0030 = window.b2link_ui.message.active.BrandPortal;

//--------------------------------------------------;




//




//


/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.form__db__properties = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/form__db__properties/"
		, nm : "form__db__properties"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$form__db__properties"
	};

	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( d, arguments[ 0 ] );

	

	return o;
};


//







/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.list__b2link = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/list__b2link/"
		, nm : "list__b2link"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$list__b2link"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.list__b2link_service = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/list__b2link_service/"
		, nm : "list__b2link_service"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$list__b2link_service"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.list__b2link_ui = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/list__b2link_ui/"
		, nm : "list__b2link_ui"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$list__b2link_ui"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.list__b2link__All = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/list__b2link__All/"
		, nm : "list__b2link__All"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$list__b2link__All"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.search_selector = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/search_selector/"
		, nm : "search_selector"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$search_selector"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.selector = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/selector/"
		, nm : "selector"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$selector"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.selector_list = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/selector-list/"
		, nm : "selector-list"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$selector-list"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.selector_table = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/selector-table/"
		, nm : "selector-table"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$selector-table"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.select__db__search_field = function()
{
	

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/select__db__search_field/"
		, nm : "select__db__search_field"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$select__db__search_field"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};










/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.select__db__values = function()
{
	

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/select__db__value/"
		, nm : "select__db__value"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$select__db__value"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	
	return o;
};







//


/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.test_Menu = function()
{
	

	var _nm = "test_Menu";
	if( window.b2link.STATIC.UI.__checkKey( _nm ) )
	{
		window.b2link.STATIC.UI.__show( _nm );
		return window.b2link.STATIC.UI.__getObj( _nm );
	}

	var _url = window.b2link.STATIC.CONFIG.URL.UI.test;

	var html = window.b2link.ui.__getFileNM_HTML( _url, _nm );
	var js = window.b2link.ui.__getFileNM_JS( _url, _nm );
	var css = window.b2link.ui.__getFileNM_CSS( "./css_ui/", "div__" + _nm );

	var _rootDiv = window.b2link.STATIC.CONST.ROOT_DIV;
	var f = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI;
	var o = f( _nm, html, js, css, _rootDiv.ID_UI_COMPONENT_FIXED );

	

	return o;
};


//







//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui__dev

window.b2link_ui__dev = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui__dev










//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui__dev.index_dev_mongodb;

window.b2link_ui__dev.index_dev_mongodb = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui__dev.index_dev_mongodb;






//
//


/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui__dev.index_dev_mongodb.queryTester = function()
{
	

	var p = {
		url : "./ui/index_dev_mongodb/queryTester/"
		, nm : "queryTester"
		, css_url : "./css_ui/"
		, css_front_nm : "div__index_dev_mongodb-"
		, key : "index_dev_mongodb$queryTester"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	

	return o;
};


//




//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_url_member;

window.b2link_url_member = window.b2link_url_member || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_url_member;


//




//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_url_member.member_basic;

window.b2link_url_member.member_basic = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_url_member.member_basic;


//




//


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_url_member.member_session;

window.b2link_url_member.member_session = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_url_member.member_session;


//




//


/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url_member.member_basic.getParam = function( d )
{
	//

	//var email = d.email_f + "@" + d.email_e;

	var url  = "";
		url += "bConn=" + 0;

	if( d.cd_rank )
		url += "&cd_rank=" + d.cd_rank;

	if( d.email_f && d.email_e )
	{
		url += "&email=" + d.email_f + "@" + d.email_e;
		url += "&email_id=" + d.email_f;
		url += "&email_domain=" + d.email_e;

		url += "&mid=" + d.email_f + "@" + d.email_e;
	}

	if( d.mid )
		url += "&mid=" + d.mid;

	if( d.name_f && d.name_l )
	{
		/*/
		var nm = {
			a : d.name_f + d.name_l
			, f : d.name_f
			, l : d.name_l
		};
		nm = JSON.stringify( nm );
		//nm = window.encodeURIComponent( nm );
		/*/
		var nm = '{"a":"' + d.name_f + d.name_l + '","f":"' + d.name_f + '","l":"' + d.name_l + '"}';
		//*/

		url += "&nm=" + nm;
		url += "&nm_cn=" + nm;
		url += "&nm_kr=" + nm;
		url += "&nm_us=" + nm;
	}
	if( d.phone_cell )
		url += "&phone_cell=" + d.phone_cell;

	if( d.phone_tel )
		url += "&phone_tel=" + d.phone_tel;

	if( d.cd_div )
		url += "&cd_div=" + d.cd_div;

	if( d.cd_div_team )
		url += "&cd_div_team=" + d.cd_div_team;

	if( d._id$messenger )
		url += "&_id$messenger=" + d._id$messenger;

	if( d.messenger_id )
		url += "&messenger_id=" + d.messenger_id;


	if( d.password )
		url += "&mpw=" + d.password;

	//

	return url;
};


//




//


/**
 * @function
 * @param {Object} d session { "mid" : "", "mid" : "", "Expires" : "" }
 * @return {String}
 */
window.b2link_url_member.member_session.getParam = function( d )
{
	//
	//

	//return "&sid=" + d.sid + "&mid=" + d.mid;
	//return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires;
	//return "&sid=" + d.sid + "&d_ex=" + d.Expires;
	return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires + "&SCODE=" + d.SCODE;
};


//







//----------------------------------------------------------------------------------------------------[ S ] - window.service_member

window.service_member = window.service_member || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member










//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.admin;

window.service_member.admin = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.admin;










//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.common;

window.service_member.common = window.service_member.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.common;










//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.public;

window.service_member.public = window.service_member.public || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.public;










//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.session;

window.service_member.session = window.service_member.session || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.session;










//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.update;

window.service_member.update = window.service_member.update || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.update;






//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//
		//
		//

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}
		else
		{
			var r = JSON.parse( result );
			//
			window.b2link.session.setSession( r );
			cbFunction( r );

			window.b2link_ui.message.message( "Sign In Success" );
			window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );
		}

		//
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in = function( d, cbFunction )
	{
		//

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				_t.PROXY
					+ window.b2link.url.getServerURLByDB( "member" )
					+ "member/common/sign_in?"
					//+ "member__SYS0030/common/sign_in?";
					+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//
	};
})();


//



//
//


/**
 * Signin 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.common.sign_in.params = function( d )
{
	//
	//
	return "mid=" + d.mid
		+ "&mpw="+ d.mpw
		//+ "&d_ex=" + new Date()
		+ "&date_cache=" + new Date();
};


//



//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//
		//
		//

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}
		else
		{
			var r = JSON.parse( result );
			//
			window.b2link.session.setSession( r );
			cbFunction( r );

			window.b2link_ui.message.message( "Sign In Success" );
			window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );
		}

		//
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in__multi = function( d, cbFunction )
	{
		//

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				_t.PROXY
					+ window.b2link.url.getServerURLByDB( "member" )
					+ "member/common/sign_in__multi?"
					//+ "member__SYS0030/common/sign_in__multi?";
					+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//
	};
})();


//



//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//
		//
		//

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}
		else
		{
			var r = JSON.parse( result );
			//
			window.b2link.session.setSession( r );
			cbFunction( r );

			window.b2link_ui.message.message( "Sign In Success" );
			window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );
		}

		//
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in__single = function( d, cbFunction )
	{
		//

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				_t.PROXY
					+ window.b2link.url.getServerURLByDB( "member" )
					+ "member/common/sign_in__single?"
					//+ "member__SYS0030/common/sign_in__single?";
					+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//
	};
})();


//



//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//
		//
		//

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link_ui.message.error( "Signout Failure" );
			window.b2link.event.dispatchCE__SIGN_OUT_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link_ui.message.message( "Signout Success" );
			window.b2link.event.dispatchCE__SIGN_OUT_SUCCESS( window, null );
		}

		cbFunction( r );

		//
	};

	/**
	 * Signout 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_out = function( d, cbFunction )
	{
		//

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				_t.PROXY
					+ window.b2link.url.getServerURLByDB( "member" )
					+ "member/common/sign_out?"
					+ window.service_member.common.sign_out.params( d ), null
			).responseText
			, cbFunction
		);

		//
	};
})();


//



//
//


/**
 * Signout 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.common.sign_out.params = function( d )
{
	//
	//
	return "mid=" + d.mid
		//+ "&d_ex=" + new Date()
		+ "&sid=" + d.sid
		+ "&date_cache=" + new Date();
};


//



//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.public.sign_up = function( d, cbFunction )
	{
		//

		window.b2link_service.common._fn_req(
			_t.PROXY
				+ window.b2link.url.getServerURLByDB( "member" )
				+ "member/public/sign_up?"
				+ window.service_member.public.sign_up.params( d )
			, cbFunction
		);

		//
	};
})();


//



//
//


/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.sign_up.params = function( d )
{
	//
	//

	return "data=" + JSON.stringify( d );
};


//



//
//


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * Signup 요청 함수
 * @function
 * @param {Object} d
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.public.sign_up__checkOverlap = function( d, cbFunction )
{
	//

	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/public/sign_up__checkOverlap?";

	window.b2link_service.common._fn_req( _url + window.service_member.public.sign_up__checkOverlap.params( d ), cbFunction );

	//
};


//



//
//


/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.sign_up__checkOverlap.params = function( d )
{
	//
	//

	return "data=" + JSON.stringify( d );
};


//



//
//


(function(){
	var _date = new Date();
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.session.destroy_session = function( cbFunction )
	{
		//

		var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/session/destroy_session?";

		/*/
		window.b2link.session.removeSession();
		//window.b2link_service.common._fn_req( _url + window.service_member.session.destroy_session.params( window.b2link.session.getSession() ), cbFunction );
		window.b2link_service.common._fn_req( _url, cbFunction );
		/*/
		var url = _url + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		window.b2link.session.removeSession();

		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		//++_date;
		//url += "&nCached=" + _date;

		try{ cbFunction( SUtilXMLHttpReqGet.reqSyncReturn( url, null ).responseText ); }
		catch( e )
		{
			//debugger;
			
		}
		//*/

		//
	};
})();


//



//
//


/**
 * Destroy Session
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.session.destroy_session.params = function( d )
{
	//
	//

	return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires;
};


//



//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.update.get_update_member_info = function( d, cbFunction )
	{
		//

		var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/update/get_update_member_info?";

		window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

		//
	};
})();


//



//
//


(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.update.update = function( d, cbFunction )
	{
		//

		var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/update/update?";

		window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

		//
	};
})();


//







//----------------------------------------------------------------------------------------------------[ S ] - window.uiDev;

window.uiDev = window.uiDev || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.uiDev;










//----------------------------------------------------------------------------------------------------[ S ] - window.uiDev.MongoDB;

window.uiDev.MongoDB = window.uiDev.MongoDB || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.uiDev.MongoDB;










//----------------------------------------------------------------------------------------------------[ S ] - window.uiDev;

window.uiDev = window.uiDev || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.uiDev;










//----------------------------------------------------------------------------------------------------[ S ] - window.uiDev.MongoDB;

window.uiDev.MongoDB = window.uiDev.MongoDB || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.uiDev.MongoDB;






//
//


window.uiDev.MongoDB = window.uiDev.MongoDB || {};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.uiDev.MongoDB.QueryTester = function()
{
	

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

	

	return o;
};


//







//----------------------------------------------------------------------------------------------------[ S ] - window.ui_member

window.ui_member = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_member










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_member.admin;

window.ui_member.admin = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_member.admin;










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_member.common;

window.ui_member.common = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_member.common;










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_member.public;

window.ui_member.public = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_member.public;






//
//


/**
 * sign in UI 화면에 필요한 리소스를 서버에 요청 후 View와 Controller를 생성하여 반환하고 화면에 View를 표출한다.
 * 이미 한번 생성되어있으면 존재하는 객체를 반환한다.
 * arguments의 옵션을 통해 View를 표출하지 않고 객체만 반환 받는게 가능하다.
 *
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_member.common.sign_in = function()
{
	

	var p = {
		url : "./ui/member/common/"
		, nm : "sign_in"
		, css_url : "./css_ui/"
		, css_front_nm : "div-member-common-"
		, key : "member-common$sign_in"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	if( elC.evt_Complete__SignIn )
	{
		
		return o;
	}

	elC.evt_Complete__SignIn = window.ui_member.common.sign_in._evt_Complete__SignIn;

	
	return o;
};

/**
 * @function
 * @param {} result
 */
window.ui_member.common.sign_in._evt_Complete__SignIn = function( result )
{
	

	if( window.b2link.response.getResultStatus( result ) )
	{
		//window.b2link_ui_member.member_basic.getAllList();
		//window.b2link_ui_member.member_basic.getAllList__nm();
	}
	else window.b2link.log.error__Signin_failure();

	
};


//



//
//


/**
 * sign in UI 화면에 필요한 리소스를 서버에 요청 후 View와 Controller를 생성하여 반환하고 화면에 View를 Modal로 표출한다.
 * 이미 한번 생성되어있으면 존재하는 객체를 반환한다.
 * arguments의 옵션을 통해 View를 표출하지 않고 객체만 반환도 가능하다.
 *
 * 화면에 Modal로 표출한다.
 *
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_member.common.sign_in.modal = function()
{

	

	var p = {
		url : "./ui/member/common/"
		, nm : "sign_in"
		, css_url : "./css_ui/"
		, css_front_nm : "div-member-common-"
		, key : "member-common$sign_in"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	if( elC.evt_Complete__SignIn )
	{
		
		return o;
	}

	elC.evt_Complete__SignIn = window.ui_member.common.sign_in._evt_Complete__SignIn;

	

	return o;
};


//



//
//


/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_member.public.sign_up = function()
{
	

	var p = {
		url : "./ui/member/public/"
		, nm : "sign_up"
		, css_url : "./css_ui/"
		, css_front_nm : "div-member-public-"
		, key : "member-public$sign_up"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

//	if( !o[ 1 ].getEvt_Complete__Add() )
//	{
//		o[ 1 ].setEvt_Complete__Add( function( result ){
//			
//			if( window.b2link.response.getResultStatus( result ) )
//			{
//				//*/
//				o[ 1 ].hide();
//				/*/
//				window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
//				//*/
//			}
//			else
//			{
//				window.b2link_ui.message.error( "회원 가입 실패" );
//			}
//
//			
//		});
//	}

	
	return o;
};


//



//
//


/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_member.public.sign_up.modal = function()
{
	

	var p = {
		url : "./ui/member/public/"
		, nm : "sign_up"
		, css_url : "./css_ui/"
		, css_front_nm : "div-member-public-"
		, key : "member-public$sign_up"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

//	if( !o[ 1 ].getEvt_Complete__Add() )
//	{
//		o[ 1 ].setEvt_Complete__Add( function( result ){
//			
//			if( window.b2link.response.getResultStatus( result ) )
//			{
//				//*/
//				o[ 1 ].hide();
//				/*/
//				window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
//				//*/
//			}
//			else
//			{
//				window.b2link_ui.message.error( "회원 가입 실패" );
//			}
//
//			
//		});
//	}

	
	return o;
};


//







//----------------------------------------------------------------------------------------------------[ S ] - window.ui_nodejs_os

window.ui_nodejs_os = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_nodejs_os










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_nodejs_os.info;

window.ui_nodejs_os.info = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_nodejs_os.info;






//
//


/**
 * sign in UI 화면에 필요한 리소스를 서버에 요청 후 View와 Controller를 생성하여 반환하고 화면에 View를 표출한다.
 * 이미 한번 생성되어있으면 존재하는 객체를 반환한다.
 * arguments의 옵션을 통해 View를 표출하지 않고 객체만 반환 받는게 가능하다.
 *
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_nodejs_os.info.basic = function()
{
	

	var p = {
		url : "./ui/nodejs_os/info/"
		, nm : "basic"
		, css_url : "./css_ui/"
		, css_front_nm : "div-nodejs-os-info-"
		, key : "nodejs-os-info$basic"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	
	return o;
};


//







//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner;

window.ui_spinner = window.ui_spinner || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner;

(function(){
	var _hideList = [];

	/**
	 * @function
	 */
	window.ui_spinner.addHideFunction = function( f ){ _hideList.push( f ); };

	/**
	 * 모든 Spinner API들의 *.hide()를 호출한다.
	 * @function
	 */
	window.ui_spinner.hides = function()
	{
		var a = _hideList;

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];
			io();
		}
	};
})();










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.div;

window.ui_spinner.div = window.ui_spinner.div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.div;










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.img;

window.ui_spinner.img = window.ui_spinner.img || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.img;










//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.spinkit;

window.ui_spinner.spinkit = window.ui_spinner.spinkit || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.spinkit;

/*/
window.ui_spinner.spinkit.setTime_Hide( 2500 );

var a = [
	"1-rotating-plane"
	, "2-double-bounce"
	, "3-wave"
	, "4-wandering-cubes"
	, "5-pulse"
	, "6-chasing-dots"
	, "7-three-bounce"
	, "8-circle"
	, "9-cube-grid"
	, "10-fading-circle"
	, "11-folding-cube"
];

var p = {
	i : 0
	, iLen : a.length - 1
};

var _fn = function(){

	window.ui_spinner.spinkit.setMode( a[ p.i ] );

	window.ui_spinner.spinkit.show();

	window.ui_spinner.spinkit.hide();

	if( p.i < p.iLen ) ++p.i;
	else p.i = 0;

	setTimeout( _fn, 3000 );
};

setTimeout( _fn, 3000 );



window.ui_spinner.spinkit.hide();
window.ui_spinner.spinkit.show();

window.ui_spinner.spinkit.setMode( "1-rotating-plane" );
window.ui_spinner.spinkit.setMode( "2-double-bounce" );
window.ui_spinner.spinkit.setMode( "3-wave" );
window.ui_spinner.spinkit.setMode( "4-wandering-cubes" );
window.ui_spinner.spinkit.setMode( "5-pulse" );
window.ui_spinner.spinkit.setMode( "6-chasing-dots" );
window.ui_spinner.spinkit.setMode( "7-three-bounce" );
window.ui_spinner.spinkit.setMode( "8-circle" );
window.ui_spinner.spinkit.setMode( "9-cube-grid" );
window.ui_spinner.spinkit.setMode( "10-fading-circle" );
window.ui_spinner.spinkit.setMode( "11-folding-cube" );
//*/
!function(){var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),n=window.b2link.xhr.reqSync_String,e=window.b2link.html.createHTMLElement,t=window.ui_spinner.spinkit,o=i+"/ui/Spinner/spinkit/1-rotating-plane.html";t.el=null,t.timeHide=700,t.timeout=-1;

/**
 * CSS3 기반의 Spinner Hide API
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 */
window.ui_spinner.spinkit.hide=function(){var i=window.ui_spinner.spinkit;i.el||(i.el=e(n(o))),window.b2link.common.clearTimeout(i.timeout),i.timeout=window.b2link.common.setTimeout(function(){window.b2link.element.removeChild(window.document.body,i.el),i.el.style.display="none"},i.timeHide)},window.ui_spinner.addHideFunction(window.ui_spinner.spinkit.hide);

/**
 * CSS3 파일 기반의 Spinner Show API
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 */
window.ui_spinner.spinkit.show=function(){var i=window.ui_spinner.spinkit;i.el||(i.el=e(n(o))),window.b2link.common.clearTimeout(i.timeout),i.el.style.display="",window.b2link.element.appendChild(window.document.body,i.el);var t=i.el,l=i.el.children[0];t.style.bottom="0px",t.style.top="0px",window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(l),t.style.top=l.style.top,t.style.bottom="",l.style.left="0px",l.style.top="0px"};

/**
 * @function
 * @param {HTMLElement} el
 */
window.ui_spinner.spinkit.setElement=function(i){return"DIV"!=i.tagName?void window.b2link_ui.message.error("DIV만 가능"):void(t.el=i)};

/**
 * @function
 * @param {String} mode
 * <code>
	"1-rotating-plane"
	"2-double-bounce"
	"3-wave"
	"4-wandering-cubes"
	"5-pulse"
	"6-chasing-dots"
	"7-three-bounce"
	"8-circle"
	"9-cube-grid"
	"10-fading-circle"
	"11-folding-cube"
 * </code>
 */
window.ui_spinner.spinkit.setMode=function(o){t.el=e(n(i+"/ui/Spinner/spinkit/"+o+".html"))};

/**
 * @function
 * @param {Number} n 1000이 1초
 */
window.ui_spinner.spinkit.setTime_Hide=function(i){t.timeHide=i}
}();






//
//


window.ui_spinner.div.simple = window.ui_spinner.div.simple || {};



(function(){

	var t = window.ui_spinner.div.simple;

		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.time = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	

	/**
	 * GIF 파일 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.div.simple.hide = function()
	{
		

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			t.el.style.display = "none";
		}, t.time );

		
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.div.simple.hide );

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.div.simple.show = function()
	{
		

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";

		
	};

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.div.simple.setElement = function( el )
	{
		

		if( "DIV" != el.tagName )
		{
			window.b2link_ui.message.error( "DIV만 가능" );
			return;
		}

		t.el = el;

		
	};

})();


//



//
//


window.ui_spinner.img.simple = window.ui_spinner.img.simple || {};



(function(){

	var t = window.ui_spinner.img.simple;

		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.time = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	

	/**
	 * GIF 파일 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.img.simple.hide = function()
	{
		

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			t.el.style.display = "none";
		}, t.time );

		
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.img.simple.hide );

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.img.simple.show = function()
	{
		

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";

		
	};

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.img.simple.setElement = function( el )
	{
		

		if( "IMG" != el.tagName )
		{
			window.b2link_ui.message.error( "IMG만 가능" );
			return;
		}

		t.el = el;

		
	};

})();


//



//
//


/*/

window.ui_spinner.spinkit.setTime_Hide( 2500 );

var a = [
	"1-rotating-plane"
	, "2-double-bounce"
	, "3-wave"
	, "4-wandering-cubes"
	, "5-pulse"
	, "6-chasing-dots"
	, "7-three-bounce"
	, "8-circle"
	, "9-cube-grid"
	, "10-fading-circle"
	, "11-folding-cube"
];

var p = {
	i : 0
	, iLen : a.length - 1
};

var _fn = function(){

	window.ui_spinner.spinkit.setMode( a[ p.i ] );

	window.ui_spinner.spinkit.show();

	window.ui_spinner.spinkit.hide();

	if( p.i < p.iLen ) ++p.i;
	else p.i = 0;

	setTimeout( _fn, 3000 );
};

setTimeout( _fn, 3000 );



window.ui_spinner.spinkit.hide();
window.ui_spinner.spinkit.show();

window.ui_spinner.spinkit.setMode( "1-rotating-plane" );
window.ui_spinner.spinkit.setMode( "2-double-bounce" );
window.ui_spinner.spinkit.setMode( "3-wave" );
window.ui_spinner.spinkit.setMode( "4-wandering-cubes" );
window.ui_spinner.spinkit.setMode( "5-pulse" );
window.ui_spinner.spinkit.setMode( "6-chasing-dots" );
window.ui_spinner.spinkit.setMode( "7-three-bounce" );
window.ui_spinner.spinkit.setMode( "8-circle" );
window.ui_spinner.spinkit.setMode( "9-cube-grid" );
window.ui_spinner.spinkit.setMode( "10-fading-circle" );
window.ui_spinner.spinkit.setMode( "11-folding-cube" );
//*/

(function(){

	var host = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" );

	var f0 = window.b2link.xhr.reqSync_String;
	var f1 = window.b2link.html.createHTMLElement;

	var t = window.ui_spinner.spinkit;

	var url = host + "/ui/Spinner/spinkit/1-rotating-plane.html";
		/*/
		host + "/ui/Spinner/spinkit/1-rotating-plane.html"
		host + "/ui/Spinner/spinkit/2-double-bounce.html"
		host + "/ui/Spinner/spinkit/3-wave.html"
		host + "/ui/Spinner/spinkit/4-wandering-cubes.html"
		host + "/ui/Spinner/spinkit/5-pulse.html"
		host + "/ui/Spinner/spinkit/6-chasing-dots.html"
		host + "/ui/Spinner/spinkit/7-three-bounce.html"
		host + "/ui/Spinner/spinkit/8-circle.html"
		host + "/ui/Spinner/spinkit/9-cube-grid.html"
		host + "/ui/Spinner/spinkit/10-fading-circle.html"
		host + "/ui/Spinner/spinkit/11-folding-cube.html"
		//*/
		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.timeHide = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	

	/**
	 * CSS3 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.spinkit.hide = function()
	{
		

		var t = window.ui_spinner.spinkit;

		if( !t.el ) t.el = f1( f0( url ) );

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			window.b2link.element.removeChild( window.document.body, t.el );
			t.el.style.display = "none";
		}, t.timeHide );

		
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.spinkit.hide );

	/**
	 * CSS3 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.spinkit.show = function()
	{
		var t = window.ui_spinner.spinkit;

		if( !t.el ) t.el = f1( f0( url ) );

		

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";
		window.b2link.element.appendChild( window.document.body, t.el );

		var elP = t.el;
		var elC = t.el.children[ 0 ];

		elP.style.bottom = "0px";
		elP.style.top = "0px";
		window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( elC );
		//elP.style.left = elC.style.left;
		elP.style.top = elC.style.top;
		elP.style.bottom = "";
		elC.style.left = "0px";
		elC.style.top = "0px";

		
	};

	/**
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.spinkit.setElement = function( el )
	{
		

		if( "DIV" != el.tagName )
		{
			window.b2link_ui.message.error( "DIV만 가능" );
			return;
		}

		t.el = el;

		
	};

	/**
	 * @function
	 * @param {String} mode
	 * <code>
		"1-rotating-plane"
		"2-double-bounce"
		"3-wave"
		"4-wandering-cubes"
		"5-pulse"
		"6-chasing-dots"
		"7-three-bounce"
		"8-circle"
		"9-cube-grid"
		"10-fading-circle"
		"11-folding-cube"
	 * </code>
	 */
	window.ui_spinner.spinkit.setMode = function( mode ){ t.el = f1( f0( host + "/ui/Spinner/spinkit/" + mode + ".html" ) ); };

	/**
	 * @function
	 * @param {Number} n 1000이 1초
	 */
	window.ui_spinner.spinkit.setTime_Hide = function( n ){ t.timeHide = n; };

})();


//







//----------------------------------------------------------------------------------------------------[ S ] - window.zzzzzzzzzz__development__js

window.zzzzzzzzzz__development__js = window.zzzzzzzzzz__development__js || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.zzzzzzzzzz__development__js










//----------------------------------------------------------------------------------------------------[ S ] - window.zzzzzzzzzz__development__js.console;

window.zzzzzzzzzz__development__js.console = window.zzzzzzzzzz__development__js.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.zzzzzzzzzz__development__js.console;






//
//


/**
 * @function
 */
(function(){
	//--------------------------------------------------[ S ] - Create Console;
	window.HykLog 	= SUtilCommon.create_Console( "송선우" );
	window.RayLog 	= SUtilCommon.create_Console( "송선우" );
	window.cparkLog = SUtilCommon.create_Console( "송선우" );
	window.Rh2Log 	= SUtilCommon.create_Console( "송선우" );
	window.JkLog 	= SUtilCommon.create_Console( "송선우" );
	window.JaceLog 	= SUtilCommon.create_Console( "송선우" );
	window.JamesLog = SUtilCommon.create_Console( "송선우" );
	window.BenLog 	= SUtilCommon.create_Console( "송선우" );
	window.KaiLog 	= SUtilCommon.create_Console( "송선우" );
	window.AlexLog 	= SUtilCommon.create_Console( "송선우" );
	window.CSJLog 	= SUtilCommon.create_Console( "송선우" );
	window.TtwLog 	= SUtilCommon.create_Console( "송선우" );
	//--------------------------------------------------[ E ] - Create Console;
})();


//

