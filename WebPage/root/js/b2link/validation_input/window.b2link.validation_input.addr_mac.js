//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/validation_input/window.b2link.validation_input.addr_mac.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MAC Address Validation
 * @function
 * @param {String} d EE-B6-A6-0E-C4-46
 * @return {Boolean}
 */
window.b2link.validation_input.addr_mac = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.addr_mac():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.addr_mac():{Boolean}----------" );

	if( 6 == d.split( "-" ).length ) return 1;
	return 0;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
