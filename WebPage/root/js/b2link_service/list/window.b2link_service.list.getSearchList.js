//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/list/window.b2link_service.list.getSearchList.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.list.getSearchList():void----------" );

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

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.list.getSearchList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
