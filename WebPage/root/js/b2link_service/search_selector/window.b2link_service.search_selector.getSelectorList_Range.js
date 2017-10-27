//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/search_selector/window.b2link_service.search_selector.getSelectorList_Range.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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
	//window.TtwLog.timeStamp( "---- [ S ] -window.b2link_service.search_selector.getSelectorList_Range():void----------" );

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

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.search_selector.getSelectorList_Range():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;