//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/validation_date/window.b2link.validation_date.dateObject__YMDHoMiSe.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Date InputElemehts Object Validation
 * @function
 * @param {Object} { y : 2017, m : 9, d : 10, ho : 17, mi : 18, se 19 }
 * @return {Boolean}
 */
window.b2link.validation_date.dateObject__YMDHoMiSe = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_date.dateObject__YMDHoMiSe():{Boolean}----------" );

	var f = window.b2link_ui.message.error ? window.b2link_ui.message.error : window.TtwLog.error;

	if( 2015 > d.y || 2017 < d.y ){ f( "Year is not valid." ); return 0; }
	if( 0 > d.m || 12 < d.m){ f( "Month is not valid." ); return 0; }
	if( 0 > d.d && 31 < d.d ){ f( "Day is not valid." ); return 0; }
	if( 0 > d.ho && 24 < d.ho ){ f( "Hour is not valid." ); return 0; }
	if( 0 > d.mi && 59 < d.mi ){ f( "Minute is not valid." ); return 0; }
	if( 0 > d.se && 59 < d.se ){ f( "Seconds is not valid." ); return 0; }
	//if( 0 > d.mil && 59 > d.mil ){ f( "Miliseconds is not valid." ); return 0; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_date.dateObject__YMDHoMiSe():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
