function min(z1,z2){
	if(isNaN(z1)||isNaN(z2)) {return false} else if(z1<z2){  return z1} else{  return z2}
}

function isEven(z1){
	if(isNaN(z1)) return false 
		else{
			if(z1==0) return true
				if(z1==1) return false
					if(z1>1) return isEven(z1-2)
				}
		}

function rec(z){
	if (z==0) {return 0} else {return z+rec(z-1)}
		}


function countLetter(s,c){
	var x=0
	if(!isNaN(s)||!isNaN(c)){return false}
		if(s.length==0)return 0
			else {
				for(var i=0;i<s.length;i++){
					if(s[i]==c){x++}
				}
			return x
		}
	}

console.log(countLetter(100,""))