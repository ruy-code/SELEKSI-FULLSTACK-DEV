function concat(){
	var result;
	if (arguments.length > 0) {
		var lgt = arguments.length;
		var joinThem = '';
		for (var i = 0; i < lgt; i++) {
			if (i == lgt-1) {
				joinThem += arguments[i];
			}else{
				joinThem += arguments[i] + ' ';
			}
		}
		result = joinThem;
	}else{
		result = 'Tidak ada parameter yang dimasukan';
	}
	
	return result;
}

// console.log(concat('hallo','apa','kabar','kalian','semua'))