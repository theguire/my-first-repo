function getStats() {
	//var s = document.getElementById( "stat-button" );
	alert( "hello");
	//document.getElementById( "num-words" ).innerHTML = getNumberOfWords( s );
};

function getNumberOfWords( s ){
	var numWords = 0;
	for ( int i=0; i < s.length; i++ ){
		if ( s(i) === " " )
			numWords++;
	}
	return numWords;
}