//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.obj.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.obj;

window.b2link.obj = window.b2link.obj || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.obj;


//----------------------------------------------------------------------------------------------------window.b2link.obj.c***;

/**
 * @function
 * @param {Object} t
 * @param {Object} d
 */
window.b2link.obj.copyReference_Public_Function=function(n,o){for(var i in o)-1==i.indexOf("_")&&"function"==typeof o[i]&&(n.hasOwnProperty(i)||(n[i]=o[i]))};

//----------------------------------------------------------------------------------------------------window.b2link.obj.c***;

//----------------------------------------------------------------------------------------------------window.b2link.obj.g***;

/**
 * @function
 * @param {Object} t
 * @param {String} k
 * @return {Object}
 */
window.b2link.obj.getValueFromKey_dotKeyRef=function(t,k){return SUtilObject.getValueFromKey_dotKeyRef(t,k);};

//----------------------------------------------------------------------------------------------------window.b2link.obj.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;