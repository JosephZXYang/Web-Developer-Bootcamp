function printReverse(arr) {
    for (var i = arr.length-1; i >= 0; i -- ){
        console.log(arr[i]);
    }
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(num) {
		sum = sum + num;
	});
	console.log(sum);
}

function max(arr) {
	var max = arr[0];
	arr.forEach(function(num)) {
		if (num > max) {
			max = num;
		}
	};
	console.log(max);
}