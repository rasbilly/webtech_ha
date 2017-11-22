
function min(z1,z2){
	return (isNaN(z1)||isNaN(z2))?NaN : z1<z2?z1:z2
}


function mod2(z){
	if(!isNaN(z)&&z<0)z=z*-1

	return isNaN(z)?NaN:
	z==0 ? true : z==1 ? false : mod2(z-2)

}


function countBs(s){
	var x=0
	if (!isNaN(s)) {
		return false
	}else{
		for(var i=0;i<s.length;i++){
			if(s.charAt(i)=='B') x++	
		} 
	}return x
}



function countChar(s,c){
	var x=0
	s=String(s).toUpperCase()
	c=String(c).toUpperCase()
	for(var i=0;i<s.length;i++){
		if(s.charAt(i)==c) x++	
	}
	return x
}

console.log(mod2("test"))



//annonyme Funktionen
//protoTypen 
// funktionsliterale