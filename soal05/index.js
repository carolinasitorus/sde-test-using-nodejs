const Month = require('./month');


function searchMonth(_name) {
	var array = Month.listOfMonth();
	var result = array.filter(function (obj) {
	  return obj.name === _name;
	})[0];
	return result;
}
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
    return arr;
}

var arrayParam = ['desember', 'februari', 'januari', 'maret', 'juni'];
var paramOrders = [];
var sortedParam = [];
var temp = temp;
arrayParam.forEach(function(name){
    obj = searchMonth(name);
    paramOrders.push(obj);
});

for (var i=0; i<paramOrders.length-1; i++){
    for(var j=i+1; j<paramOrders.length; j++){
    	var temp = paramOrders[i];
    	if(temp.position_order>paramOrders[j].position_order){
            paramOrders[i] = paramOrders[j];
            paramOrders[j] = temp;
    	}
    }
}

paramOrders.forEach(function(monthObj){
	console.log(monthObj.name);
});

