class Month {
	constructor(_positionOrder, _name) {
		this.position_order = _positionOrder;
		this.name = _name;
	}

	static listOfMonth() {
		var months = [
		    'januari',
		    'februari',
		    'maret',
		    'april',
		    'mei',
		    'juni',
		    'juli',
		    'agustus',
		    'september',
		    'oktober',
		    'november',
		    'desember'
		];
		var monthsObj = [];
		months.forEach(function(name, key) {
             monthsObj.push(new Month(key+1, name));
		});
		return monthsObj;
	}
}
module.exports = Month;