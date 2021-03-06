//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/complex_search_selector/window.b2link_ui.complex_search_selector.division_team_member.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.complex_search_selector.division_team_member():{void}----------" );

		var _ = window.b2link_ui.complex_search_selector.division_team_member;
			_._cb0 = cbFunction;

			_._elC0 = window.b2link_ui.selector.list.category.category_division( window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE )[ 1 ];
			_._elC0.showAndModal_MoveCurrentChildren();
			//_._elC0.showAndModal_Sync();
			//_._elC0.req_data__first();

			//Division 선택;
			_._elC0.addEvent_mClick( window.b2link_ui.complex_search_selector.division_team_member._f0 );

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.complex_search_selector.division_team_member():{void}----------" );
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

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;