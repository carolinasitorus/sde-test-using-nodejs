class Month {
	constructor(_positionOrder, _name) {
		this.position_order = _positionOrder;
		this.name = _name;
	}

	static listOfMonth() {
		var months = [
		    'Januari',
		    'Februari',
		    'Maret',
		    'April',
		    'Mei',
		    'Juni',
		    'Juli',
		    'Agustus',
		    'September',
		    'Oktober',
		    'November',
		    'Desember'
		];
		var monthsObj = [];
		months.forEach(function(name, key) {
             monthsObj.push(new Month(key+1, name));
		});
		return monthsObj;
	}
}
module.exports = Month;