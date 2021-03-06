//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/selector/window.b2linkUIClass.selector.ListRoll.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

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
		window.TtwLog.timeStamp( "----- [ S ] - _evt_mClick__el_ListContainer():void----------" );

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mClick( listItem );

		window.TtwLog.timeStamp( "----- [ E ] - _evt_mClick__el_ListContainer():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _evt_mDoubleClick__el_ListContainer():void----------" );

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mDoubleClick( listItem );

		window.TtwLog.timeStamp( "----- [ E ] - _evt_mDoubleClick__el_ListContainer():void----------" );
	};

	/**
	 * KeyboardEvent;
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	/*/
	var _evt_kUp__el_ListContainer = function( e )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _evt_kUp__el_ListContainer():void----------" );

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_kUp( listItem );

		window.TtwLog.timeStamp( "----- [ E ] - _evt_kUp__el_ListContainer():void----------" );
	};
	//*/

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

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
		window.TtwLog.timeStamp( "----- [ S ] - _req_Data():void----------" );

		if( _fn_req_Data )
		{
			if( arguments.hasOwnProperty( "0" ) ) _fn_req_Data( _res_Data, arguments );
			else _fn_req_Data( _res_Data );
		}
		else window.b2link_ui.message.error( "_req_Data Error : _fn_req_Data가 존재하지 않습니다." );

		window.TtwLog.timeStamp( "----- [ E ] - _req_Data():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _res_Data():void----------" );

		_setData__ListItems( result );

		window.TtwLog.timeStamp( "----- [ E ] - _res_Data():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	var _getListItem = function( t )
	{
//		window.TtwLog.timeStamp( "----- [ s ] - _getListItem():{ListItemElement}----------" );
//		var listItem = _fn_getListItem( t );
//			//console.log( listItem );
//		window.TtwLog.timeStamp( "----- [ E ] - _getListItem():{ListItemElement}----------" );
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
		window.TtwLog.timeStamp( "----- [ S ] - _setData():void----------" );

		_setData.super( d );

		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;

		_fn_req_Data = d.fn.req_Data;

		_fn_getListItem = d.fn.getListItem;

		window.TtwLog.timeStamp( "----- [ E ] - _setData():void----------" );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

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

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;