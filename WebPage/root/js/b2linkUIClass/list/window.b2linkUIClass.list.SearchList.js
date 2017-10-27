//----------------------------------------------------------------------------------------------------;
var fileNm = ".js/b2linkUIClass/list/window.b2linkUIClass.list.SearchList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

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
		window.KaiLog.timeStamp( "-- [ S ] - _evt_search_input_enter():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _evt_search_input_enter():void----------" );
	};

	//--------------------------------------------------;

	var _evt_search_input_click = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_search_input_enter():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _evt_search_input_enter():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_search_btns_click = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_search_btns_click():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _evt_search_btns_click():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_result_filter = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_result_filter():void----------" );

		var t = e.target;//HTMLElement;

		if( t.tagName === "INPUT")
		{
			var ct = e.currentTarget;//HTMLElement;

			if( t.id === "check-filter-all" ) _fn_result_filter_all_yn( ct );
			else _fn_result_filter_tag_yn( ct, t );
		}

		window.KaiLog.timeStamp( "-- [ E ] - _evt_result_filter():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_search_foldable = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_search_foldable():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _evt_search_foldable():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * 페이지네비 컴포넌트 이벤트 발생
	 * @param {CustomEvent} e event
	 */
	var _evt_nav_item_selected = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_nav_item_selected():void----------" );

		_reqParams__skip = _nav_ulCtrl.getData()._n_skip_num;
		_reqParams__limit = _nav_ulCtrl.getData()._n_limit_num;

		_req_Search( _el_search_field );

		window.KaiLog.timeStamp( "-- [ E ] - _evt_nav_item_selected():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_hide_el = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_hide_el():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _evt_hide_el():void----------" );
	}

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_show_el = function( e )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _evt_show_el():void----------" );

		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		_addEvent();

		window.KaiLog.timeStamp( "-- [ E ] - _evt_show_el():void----------" );
	}

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Element} el
	 */
	var _req_Search = function( el )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _req_Search():void----------" );

		var find = _getFindObj( el );

		console.log( "find : ", find );

		_req_Data( find );

		window.KaiLog.timeStamp( "-- [ E ] - _req_Search():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Element} el
	 */
	var _req_Reset = function( el )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _req_Reset():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _req_Reset():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} find
	 * @param {Object} sort SORT는 항후 테이블 THEAD에서 정렬 아이콘을 CLICK 했을 때 넘기면 된다.
	 */
	var _req_Data = function( find, sort )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _req_Data():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} result
	 */
	var _res_Data = function( result )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _res_Data():void----------" );

		if( result.error )
		{
			window.b2link_ui.message.alert( "SQL ERROR : " + result.error.codeName + " [" + result.error.code + "]" );
			_setData__tbody();
			return;
		}

		_setData__tbody( result.list );

		var totalCount = result.totalCount > 0 ? result.totalCount : 0;
		_nav_ulCtrl.set_total_item_cnt( totalCount );

		window.KaiLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__tbody = function( data )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _setData__tbody():void----------" );

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

		 window.KaiLog.timeStamp( "-- [ E ] - _setData__tbody():void----------" );
	 };

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} el
	 * @param {} reset
	 */
	var _fn_result_filter_all_yn = function( el, reset )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _fn_result_filter_all_yn():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _fn_result_filter_all_yn():void----------" );
	}

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement}
	 * @param {} t
	 */
	var _fn_result_filter_tag_yn = function( el, t )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _fn_result_filter_tag_yn():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _fn_result_filter_tag_yn():void----------" );
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
		window.KaiLog.timeStamp( "-- [ S ] - _initialize_UI():void----------" );

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

		window.KaiLog.timeStamp( "-- [ E ] - _initialize_UI():void----------" );
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

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	/**
	 * 검색조건 구하기
	 * @function
	 * @param {HTMLElement} el
	 * @return {Object}
	 */
	var _getFindObj = function( el )
	{
		window.Rh2Log.timeStamp( "-- [ S ] - _getFindObj():void----------" );

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

		window.Rh2Log.timeStamp( "-- [ E ] - _getFindObj():void----------" );

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
		window.Rh2Log.timeStamp( "-- [ S ] - _getRequestParameters():void----------" );

		var o = {
			db_nm : _reqParams__nm_db
			, col_nm : _reqParams__nm_col
			, skip : _reqParams__skip
			, limit : _reqParams__limit
		};

		window.Rh2Log.timeStamp( "-- [ E ] - _getRequestParameters():void----------" );
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
		window.TtwLog.timeStamp( "-- [ S ] - _setRequestParameters():void----------" );

		//초기 데이터;
		_setRequestParameters._d = d;

		_reqParams__limit = d.limit;

		_reqParams__nm_db = d.nm_db;
		_reqParams__nm_col = d.nm_col;

		_reqParams__skip = d.skip;

		window.TtwLog.timeStamp( "-- [ E ] - _setRequestParameters():void----------" );
	};
	_setRequestParameters._d = null;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
