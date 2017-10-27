//----------------------------------------------------------------------------------------------------;
var fileNm = "js/ui_spinner/__define/000_define_window.ui_spinner.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner;

window.ui_spinner = window.ui_spinner || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner;

(function(){
	var _hideList = [];

	/**
	 * @function
	 */
	window.ui_spinner.addHideFunction = function( f ){ _hideList.push( f ); };

	/**
	 * 모든 Spinner API들의 *.hide()를 호출한다.
	 * @function
	 */
	window.ui_spinner.hides = function()
	{
		var a = _hideList;

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];
			io();
		}
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;