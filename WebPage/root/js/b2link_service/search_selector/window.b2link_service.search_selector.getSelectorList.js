//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/search_selector/window.b2link_service.search_selector.getSelectorList.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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
	//window.TtwLog.timeStamp( "---- [ S ] -window.b2link_service.search_selector.getSelectorList():void----------" );

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

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.search_selector.getSelectorList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

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
		window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.selector.selectorList[ s ]:{Array}----------" );

		//내용 개발 해야함 db 단위로 공통 분모 추출해서 추가하기;

		window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.selector.selectorList[ s ]:{Array}----------" );
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
			window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.selector.selectorList[ a[ i ] ]:{Array}----------" );
			var t = arguments.callee;

			d = d ? d : {};
			d.nm_db = t._nm_db;
			d.nm_col = t._nm_col;
				console.log( d.nm_db + " - " + d.nm_col );
			d.cbFunction = cbFunction;

			window.b2link_service.search_selector.getSelectorList( d );
			//window.b2link_service.selector.selectorList[ d.nm_db ][ d.nm_col ]( d );

			window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.selector.selectorList[ a[ i ] ]:{Array}----------" );
			return o;
		};
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ]._nm_db = s;
		window.b2link_service.selector.selectorList[ s ][ a[ i ] ]._nm_col = a[ i ];
	}
}
//*/

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

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

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;