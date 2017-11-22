
function sum(array){
	var x=0
	for(var i=0;i<array.length;i++){
		x=x+array[i]
	}
	return x
}

//console.log(sum(range(1,100)))



function reverseArray(array){
	var revArray=[]
	for(var i=array.length-1;i>=0;i=i-1){
		revArray.push(array[i])
	}return revArray
}



function arrayToList(array){
	var nextValue=null
	var list
    for(var i=array.length-1;i>=0;i--){
    	list={value:array[i], next:nextValue}

    	nextValue=list
    }
    return list
}


function arrayToListRek(array){
	return (array.length>1)?  {value:array[0], next:arrayToListRek(array.slice(1))} : {value:array[0], next:null}
}

function listToArray(list){
	var array=[]
	if(list.value==null)return []
	while(list.next!=null){
		array.push(list.value)
		list=list.next
	}
	array.push(list.value)
	return array
}

function prepand(e,list){
	return {value:e, next:list}
}

function nth(list, i){

	if(count(list)!=0&&i<count(list)&&i>=0){
		for(var x=0;x<i;x++){
			list=list.next
		}return list.value
	}return undefined

}

function count(list){
	var c=0
	while(list.next!=null){
		c++
		list=list.next
	}return (list.value!=null)? c+1 : 0

}

//console.log(listToArray(arrayToListRek([1,2,3,4,5,6,7,8,9])))




function deepEqual(v1, v2){
	if(v1===v2)return true

	if(v1==null || typeof v1 !="object"||v2==null || typeof v2!= "object"){return false}

	var counterA=0,counterB=0

	var array1=Object.getOwnPropertyNames(v1).sort()
	var array2=Object.getOwnPropertyNames(v2).sort()
	for(var prop in array1){
		if(!(prop in array2)){return false}
	}

	

	for(var prop in v1){
		if(!deepEqual(v1[prop],v2[prop])){return false}
	} 
return true
}

//http://eloquentjavascript.net/04_data.html