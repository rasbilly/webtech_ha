const persons = [
['Max', 1967, 2, 'm'],
['Maria', 1990, 1, 'f'],
['Meik', 1982, 2, 'm'],
['Mareike', 1985, 3, 'f'],
['Mervin', 1971, 1, 'm'],
['Magdalena', 1979, 1, 'f'],
];



function filterGender(list,gender){
	return list.filter(e=>e[3]===gender)
}

function getAge(list){
	return list.map(e=>[e[0], new Date().getFullYear()-e[1]])
}

function getSortedStatus(list){
	return list.map(e=>[e[0], new Date().getFullYear()-e[1], (new Date().getFullYear()-e[1])*e[2]]).sort((e1,e2)=>comparator(e1,e2))

}


function comparator(e1,e2){
	if(e1[2]<e2[2]){
		return true
	}else if(e1[2]>e2[2]){
		return false
	}else{
		return e1[0]>e2[0]
	}
}

function getNames(list){
	return list.map(e=>e[0])
}

function getAggregatedAge(list){
	return list.map(e=>new Date().getFullYear()-e[1]).reduce((a,b)=>a+b)
}

function getAmount(list){
	return {Women:filterGender(list,"f").length, Men:filterGender(list,"m").length}
}