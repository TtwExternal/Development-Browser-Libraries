HTMLSelectElement.event = HTMLSelectElement.event || {};

HTMLSelectElement.event.CHANGED_VALUE = "changedValue";

HTMLSelectElement.prototype.__value = HTMLSelectElement.prototype.__lookupSetter__( "value" );
HTMLSelectElement.prototype.__defineSetter__( "value", function( v ){
	debugger;
	this.__value( v );
	this.dispatchEvent( new Event( "changedValue" ) );
});