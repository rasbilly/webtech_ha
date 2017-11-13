function a1(){
	var s="#"
	while(s.length<=7){
		console.log(s);
		s=s+"#"
	}
}


function a2(){
	var x=0
	var s=""
	while(x<=100){
		if(x%3==0){
			s=s+"Fizz"
			if(x%5==0){
				s=s+"Buzz"
			}
		console.log(s)
		}else console.log(x)
		x++
		s=""
	}
}



function a3(){
	var i=0
	var s=""
	while(i<=8){
		if(!(i%2)){
			while(s.length!=8){
			s=s+" #"
			}
				console.log(s)
				i++

				s=""
			}
		 else{
			while(s.length!=8){
			s=s+"# "
			}
				console.log(s)
				i++
				s=""
			}
		}
	}
	


a2()
