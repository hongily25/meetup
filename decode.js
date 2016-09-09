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
decode(str);
//"hey7"

//double digits
function decode(str){
	var str1 = "", dd = "", i = 0;
	str1 += str[i+1];
	i = i + 2;
	while(i < str.length-1){
		if(parseInt(str[i]) != 0 && !isNaN(str[i+1])){
			dd = str[i] + str[i+1];
			dd = parseInt(dd) + i + 2;
			if(dd < str.length){
				i = dd;
				str1 += str[i];
				console.log(i);
			}else{
				i = i + parseInt(str[i]) + 1;
				str1 += str[i];
				i = i + 1;
			}
		}else{
			i = i + parseInt(str[i]) + 1;
			str1 += str[i];
			i = i + 1;
		}
	}
	return str1;
}

var str = "0h10a7be1zy246";
decode(str);
//ha6
var str = "0h10a7be1zy246l"
decode(str);
//hl
