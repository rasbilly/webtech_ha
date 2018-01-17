function InputTypeError(value){
	 this.value=value;
}

InputTypeError.prototype.toString=function(){return "Value: "+this.value+" does not match"}

function getCharacterCount(text){
	if(text!=null && typeof text!="string" && text != undefined) return new InputTypeError(text);
	var res= (text==undefined || text==null||!new RegExp(".").test(text))?0: text.match(/./g).length;
	return res
			
	
}

function getWords( text ){
	if(text!=null && typeof text!="string") return new InputTypeError(text);
	var res=  (text==null||text==undefined)?[]:(/[^a-zA-Z0-9_€]/)[Symbol.split](text).filter(e=>e!="")
	return res
}


function getLongestWords( text ){
	if(text!=null && typeof text!="string" && text != undefined) return new InputTypeError(text);
var length;
return (text==null||text==undefined)?[]:getWords(text).sort((a,b)=>a.length>b.length).map(e=>{length=e.length;return e}).filter(e=>e.length>=length)
}


function getWordFrequency(text){
	if(text!=null && typeof text!="string" && text != undefined) return new InputTypeError(text);
	var lists=[]
	var endlist=[]
	if(text==null||text==undefined) return[]
	else{
		getWords(text).forEach(e=>{
			var x=new RegExp(e+" ","gi")[Symbol.match](arrayToString(getWords(text)))
			if(!lists.includes(x))lists.push(x)
			})
			lists.sort((a,b)=>a>b)
			
			var counter=1;
			var current;
			for(var i=0;i<lists.length;){
				current=lists[i]
				if(i+1!=lists.length&&arrayToString(lists[i])==arrayToString(lists[i+1])){
					
					counter++;
					i++;
				}else{
					endlist.push([current[0],counter])
					i++;
					counter=1
				}
			}
			
			var result="";
			endlist.forEach(e=>result+=e[0]+": "+e[1]+", ")
			return "{"+result.substring(0,result.length-2)+"}"
		
		
	}
	
}


function filterTUBMails( text ){
	if(text!=null && typeof text!="string" && text != undefined) return new InputTypeError(text);
	if(text==null || text==undefined){
		return []
	}else{
	//	return text.split(/\s/).filter(e=>{var p=(/[\\.a-zA-Z0-9_-]+@mailbox.tu-berlin.de/i)[Symbol.match](e);return (p!=null)?p[0].length==e.length:false}).map(e=>{var indi=(/@/ig)[Symbol.search](e);return e.substring(0,indi)+e.substring(indi,e.length).toLowerCase()})
//		return text.split(/\s/).filter(e=>{var p=(/[\\.a-zA-Z0-9_-]+@mailbox.tu-berlin.de/i)[Symbol.match](e);return (p!=null)?p[0].length==e.length:false}).map(e=>{var indi=(/@/ig)[Symbol.search](e);return e.substring(0,indi)+e.substring(indi,e.length).toLowerCase()})
		 return (/[\\.a-zA-Z0-9_-]+@mailbox.tu-berlin.de/ig)[Symbol.match](text).map(e=>{var indi=(/@/ig)[Symbol.search](e);return e.substring(0,indi)+e.substring(indi,e.length).toLowerCase()})
	}
	
}



function arrayToString(array){
	var reg=/[0-9]+-[0-12]{}/
	var str=" ";
	array.forEach(e=>str+=e+" ")
	return str
	
}




function getUnpublishingDate( text ){
	if(text!=null && typeof text!="string" && text != undefined) return new InputTypeError(text);

	var reg=/[0-9]+-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|3[0-1])T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.[0-9]{3}Z/g;
	var current=new Date();
	var low=new Date(current.getTime());
	var max=new Date(current.getTime());
	low.setDate(low.getDate()+1)
	max.setDate(max.getDate()+30)
	current.setMilliseconds(0);
	current.setMinutes(0)
	current.setSeconds(0)
	low.setMilliseconds(0);
	low.setMinutes(0)
	low.setSeconds(0)
	max.setMilliseconds(0);
	max.setMinutes(0)
	max.setSeconds(0)
	
	if(text==""||text==null||text==undefined){
		console.log("1")
		return low;
	}
	if((/\bmax\b/g).test(text))return max;
	if((/\min\b/g).test(text))return low;
	if(reg[Symbol.match](text)!=null&&reg[Symbol.match](text)[0].length==text.length){
		var x=new Date(text)
		x.setMilliseconds(0);
		x.setMinutes(0)
		x.setSeconds(0)
		
		if(x.getTime()>low.getTime()&&x.getTime()<max.getTime()){return x}
		else{return low}
		
	}else{
		return low
	}
	
}

var x="2018-01-01T15:45:00.000Z"


var p=(/[\\.a-zA-Z0-9_-]+@mailbox.tu-berlin.de/ig)[Symbol.match]("hallo@mailbox.tu-berlin.de ich bin ein x+y@mailbox.tu-berlin.de und ein +@mailbox.tu.berlin.de und ein fsfs@mail.box.tu-berlin.de")

console.log(filterTUBMails({test:"test"}))










		