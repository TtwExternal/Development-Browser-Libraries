//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/ui_member/window.ui_member.public.sign_up.modal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_member.public.sign_up.modal = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.ui_member.public.sign_up.modal():{Array}----------" );

	var p = {
		url : "./ui/member/public/"
		, nm : "sign_up"
		, css_url : "./css_ui/"
		, css_front_nm : "div-member-public-"
		, key : "member-public$sign_up"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

//	if( !o[ 1 ].getEvt_Complete__Add() )
//	{
//		o[ 1 ].setEvt_Complete__Add( function( result ){
//			window.TtwLog.timeStamp( "[ S ] - o[ 1 ].setEvt_Complete__Add( function( result ){----------" );
//			if( window.b2link.response.getResultStatus( result ) )
//			{
//				//*/
//				o[ 1 ].hide();
//				/*/
//				window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
//				//*/
//			}
//			else
//			{
//				window.b2link_ui.message.error( "회원 가입 실패" );
//			}
//
//			window.TtwLog.timeStamp( "[ E ] - o[ 1 ].setEvt_Complete__Add( function( result ){----------" );
//		});
//	}

	window.TtwLog.timeStamp( "---- [ E ] - window.ui_member.public.sign_up.modal():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;