//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_resource/__define/200_define_window.b2link_resource.download.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_resource.download;

window.b2link_resource.download = window.b2link_resource.download || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_resource.download;

//--------------------------------------------------[ S ] - Resource-Image-BrandLogo Download API;

/*///전체 테스트 코드;
window.b2link_resource.download.getIMG_HTMLElement( "Resource-Image-BrandLogo", "thumnail", 0 );
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo( "thumnail", 1 );
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_original( 2 );
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_thumnail( 3 );

window.b2link_resource.download.getIMG_HTMLElement_ReUse( "Resource-Image-BrandLogo", "thumnail", 4 );
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo( "thumnail", 5 );
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_original( 6 );
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_thumnail( 7 );

console.log( window.b2link_resource.download.getIMG_HTMLString( "Resource-Image-BrandLogo", "thumnail", 8 ) );
console.log( window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo( "thumnail", 9 ) );
console.log( window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original( 10 ) );
console.log( window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail( 11 ) );

console.log( window.b2link_resource.download.getURL( "Resource-Image-BrandLogo", "thumnail", 12 ) );
console.log( window.b2link_resource.download.getURL__ResourceImageBrandLogo( "thumnail", 13 ) );
console.log( window.b2link_resource.download.getURL__ResourceImageBrandLogo_original( 14 ) );
console.log( window.b2link_resource.download.getURL__ResourceImageBrandLogo_thumnail( 15 ) );
//*/


/**
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement=function(n,e,o){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString(n,e,o))};

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo=function(e,n){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo(e,n))};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_original=function(e){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original(e))};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement__ResourceImageBrandLogo_thumnail=function(e){return window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail(e))};

/**
 * 한번 생성한 IMG Element를 보관하고 있다가 다시 꺼내서 반환한다.
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
!function(){var e={};window.b2link_resource.download.getIMG_HTMLElement_ReUse=function(n,o,r){var t=n+"/"+o+"/"+r;return e[t]?e[t]:(e[t]=window.b2link.html.createHTMLElement(window.b2link_resource.download.getIMG_HTMLString(n,o,r)),e[t])},window.b2link_resource.download.getIMG_HTMLElement_ReUse._clear=function(){e={}}}();

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo=function(e,o){return window.b2link_resource.download.getIMG_HTMLElement_ReUse("Resource-Image-BrandLogo",e,o)};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_original=function(e){return window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo("original",e)};

/**
 * @function
 * @param {uint} _id
 * @return {HTMLImageElement} <img> 엘리먼트를 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo_thumnail=function(e){return window.b2link_resource.download.getIMG_HTMLElement_ReUse__ResourceImageBrandLogo("thumnail",e)};

/**
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
!function(){var n={};window.b2link_resource.download.getIMG_HTMLString=function(o,r,i){var e=o+"/"+r+"/"+i;return n[e]?n[e]:(n[e]='<img src="'+window.b2link_resource.download.getURL(o,r,i)+'"/>',n[e])},window.b2link_resource.download.getIMG_HTMLString._clear=function(){n={}}}();

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo=function(o,n){return window.b2link_resource.download.getIMG_HTMLString("Resource-Image-BrandLogo",o,n)};

/**
 * @function
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_original=function(o){return window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo("original",o)};

/**
 * @function
 * @param {uint} _id
 * @return {String} <img src=""/> HTML 문자열을 반환한다
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo_thumnail=function(o){return window.b2link_resource.download.getIMG_HTMLString__ResourceImageBrandLogo("thumnail",o)};

/**
 * @function
 * @param {String} folderOrRepositoryName
 * <code>
	"img"
	"Resource-Image-BrandLogo"
	, ...
 * </code>
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
	, ...
 * </code>
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL( "Resource-Image-BrandLogo", "thumnail", 59 );
 * </code>
 */
!function(){var n={};window.b2link_resource.download.getURL=function(o,i,e){var d=o+"/"+i+"/"+e;return n[d]?n[d]:(n[d]="./resource/"+o+"/download?sid="+window.b2link.session.getSession__sid()+"&filePath="+i+"/_id/"+e+".png",n[d])},window.b2link_resource.download.getURL._clear=function(){n={}}}();

/**
 * @function
 * @param {String} targetFolder
 * <code>
	"large"
	"original"
	"size-h32"
	"size-h64"
	"size-w32"
	"size-w64"
	"small"
	"thumnail"
 * </code>
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL__ResourceImageBrandLogo( "thumnail", 59 );
 * </code>
 */
window.b2link_resource.download.getURL__ResourceImageBrandLogo=function(o,e){return window.b2link_resource.download.getURL("Resource-Image-BrandLogo",o,e)};

/**
 * @function
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL__ResourceImageBrandLogo_original( 59 );
 * </code>
 */
window.b2link_resource.download.getURL__ResourceImageBrandLogo_original=function(o){return window.b2link_resource.download.getURL__ResourceImageBrandLogo("original",o)};

/**
 * @function
 * @param {uint} _id
 * @return {String}
 *
 * @example
 * <code>
	var url = window.b2link_resource.download.getURL__ResourceImageBrandLogo_thumnail( 59 );
 * </code>
 */
window.b2link_resource.download.getURL__ResourceImageBrandLogo_thumnail=function(o){return window.b2link_resource.download.getURL__ResourceImageBrandLogo("thumnail",o)};

//--------------------------------------------------[ E ] - Resource-Image-BrandLogo Download API;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;