//setter getter

function Etst(val) {
	var value = val;
	this.getValue = function(){
		return value;
	};
	this.setValue = function(val){
		value = val;
	}
}

var etst = new Etst("test");
etst.value
etst.setValue("test2");
etst.getValue();

//使用prototype
function Etst(val){
	this.value = val
}
Etst.prototype = {
	get value(){
		return this._value;
	},
	set value(val){
		this._value = val;
	}
};