function reverseWord(text){
	var tempText ='';
	var textLength = text.length - 1;
	
	for (var i = textLength; i >= 0; i--) {
		tempText += text[i];
	}

	return tempText;
}
