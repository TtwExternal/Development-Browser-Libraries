//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.uri.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.uri;

window.b2link.uri = window.b2link.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.decodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.decodeURI(i)),n[i]},window.b2link.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.decodeURIComponent(o)),n[o]},window.b2link.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.encodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.encodeURI(i)),n[i]},window.b2link.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.encodeURIComponent(o)),n[o]},window.b2link.uri.encodeURIComponent._clear=function(){n={}}}();

//----------------------------------------------------------------------------------------------------window.b2link.uri.g***;

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
window.b2link.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

/**
 * @function
 * @param {String} s 문자열
 * @return {String} #을 !MzU=!로 변경
 */
window.b2link.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};

/**
 * @function
 * @param {Object} data
 * @return {String} #을 !MzU=!로 변경
 */
window.b2link.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};

//----------------------------------------------------------------------------------------------------window.b2link.uri.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;