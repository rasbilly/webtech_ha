function element(s,n){
	this.string=s;
	this.number=n;
}

var array=[new element("a",5),new element("b",10),new element("c",4),new element("d",22),new element("u",34)]


array.filter((a,b,c)=>a.number>5) 	// item, index, array
array.map(a=>a.number)				// item,index,array
array.map.(a=>a.number).reduce((a,b)=>a+b, startwert) // akkumulator, startwert
array.sort((a,b)=>a.string<b.string)

array.forEach((a,b,c)=>console.log(a))		// item,index,array (undefined)
array.every(a=>a.number>1) // item, index, array --> element a nimmt den nächsten Wert nur an, wenn vorheriges Prädikat true war (boolean)
array.some(a=>a.number>1)// item, index, array --> abbruch wenn ein Element das Prädikat erfüllt  (boolean)
aray.some(a=>a.number>1) // item, index, array --> abbruch wenn ein Element das Prädikat erfüllt Rückgabewert=item

