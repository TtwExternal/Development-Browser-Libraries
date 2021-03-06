//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/container/window.b2linkUIClass.container.InputModalPanel.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

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
		window.TtwLog.timeStamp( "-- [ S ] - _showModal_SelectorItem_mClick():void----------" );

		var o = modalUIAPI();

		var js = o[ 1 ];
			js.getListElement().js.addEvent_mClick( function( selectedItem ){
				//js.hideAndModal();
				js.hideAndModal_Sync();
				callback( selectedItem );
			});

		window.TtwLog.timeStamp( "-- [ E ] - _showModal_SelectorItem_mClick():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;