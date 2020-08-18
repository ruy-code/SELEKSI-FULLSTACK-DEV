function getValue(ary,nbr){
	var result;
	if (ary.length == 0) {
		result = 'Panjang array minimal 1';
	}else if(ary.length <= nbr ){
		result = 'Array tidak memiliki index ke - '+nbr;
	}else{
		result = ary[nbr];
	}
	// console.log(ary.length)
	return result;
}

// alert(getValue([],5));