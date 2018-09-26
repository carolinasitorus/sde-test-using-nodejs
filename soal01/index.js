function swap(a, b) {
	var temp = a;
	a = b;
	b = temp;
	var result = {
		a: a,
		b: b
	};
	return result;
}

console.log(swap(3,7));