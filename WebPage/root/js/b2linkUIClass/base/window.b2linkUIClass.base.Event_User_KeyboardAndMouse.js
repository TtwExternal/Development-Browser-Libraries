﻿//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/base/window.b2linkUIClass.base.Event_User_KeyboardAndMouse.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

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

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


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

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;