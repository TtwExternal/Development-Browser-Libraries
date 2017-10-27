//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.inputor.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;