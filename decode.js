//using a while loop

function decode(str){
	var str1 = "", i = 0;
	str1 += str[i+1];
	i = i + 2;
	while(i < str.length){
		i = i + parseInt(str[i]) + 1;
		str1 += str[i];
		i = i + 1;
	}
	return str1;
}

var str = "0h2abe1zy2467";
console.log(decode(str));
//"hey7"
