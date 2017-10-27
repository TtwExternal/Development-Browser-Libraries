//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/complex_search_selector/window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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
		////window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person():{void}----------" );

		var _ = window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person;
			_._cb0 = cbFunction;

			_._f0();

		////window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.complex_search_selector.partner_logistics__company_type_company__person():{void}----------" );
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

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;