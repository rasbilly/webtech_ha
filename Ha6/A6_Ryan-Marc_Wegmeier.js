// Dies ist ein beispielhaftes Personen-Array, welches den Aufbau verdeutlicht
// Es enthält weitere Arrays mit [name, birthYear, status, gender].
const persons = [
['Max', 1967, 2, 'm'],
['Maria', 1990, 1, 'f'],
['Meik', 1982, 2, 'm'],
['Mareike', 1985, 3, 'f'],
['Mervin', 1971, 1, 'm'],
['Magdalena', 1979, 1, 'f'],
];
// Diese Funktion filtert das übergebene Array nach dem Geschlecht ('m' | 'f')
// Zum Beispiel: filterGender(persons, 'f')
// Bsp-Rückgabe:
// [ [ 'Maria', 1990, 1, 'f' ],
// [ 'Mareike', 1995, 3, 'f' ],
// [ 'Magdalena', 1979, 1, 'f' ] ]
function filterGender(personsArray, gender) {
	return personsArray.filter(e=>e[3]===gender)
}
// Diese Funktion berechnet das Alter jeder Person
// Zum Beispiel: getAge(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 50 ],
// [ 'Maria', 27 ],
// [ 'Meik', 35 ],
// [ 'Mareike', 32 ],
// [ 'Mervin', 46 ],
// [ 'Magdalena', 38 ] ]
function getAge(personsArray) {
	return personsArray.map(e=>[e[0], new Date().getFullYear()-e[1]])
}
// Diese Funktion berechnet den Status (Alter * Statuszahl) jeder Person
// und sortiert das Array (höchster Status zuerst, bei
// gleichem Status: nach Namen alphabetisch)
// für String-Vergleiche in der Mozilla Referenz nachschauen
// Zum Beispiel: getSortedStatus(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 100 ],
// [ 'Mareike', 96 ],
// [ 'Meik', 70 ],
// [ 'Mervin', 46 ],
// [ 'Magdalena', 38 ],
// [ 'Maria', 27 ] ]
function comparator(e1,e2){
	if(e1[2]<e2[2]){
		return true
	}else if(e1[2]>e2[2]){
		return false
	}else{
		return e1[0]>e2[0]
	}
}


function getSortedStatus(personsArray) {
	return personsArray.map(e=>[e[0], new Date().getFullYear()-e[1], (new Date().getFullYear()-e[1])*e[2]]).sort((e1,e2)=>comparator(e1,e2)).map(e=>[e[0], e[2]])
}
// Diese Funktion gibt ein Array mit den Namen aller Personen zurück
// Zum Beispiel: getNames(persons)
// Bsp-Rückgabe:
// [ 'Max', 'Maria', 'Meik', 'Mareike', 'Mervin', 'Magdalena' ]
function getNames(personsArray) {
	return personsArray.map(e=>e[0])
}
// Diese Funktion gibt das addierte Alter aller Personen zurück
// Zum Beispiel: getAggregatedAge(persons)
// Bsp-Rückgabe:
// 228
function getAggregatedAge(personsArray) {
	return personsArray.map(e=>new Date().getFullYear()-e[1]).reduce((a,b)=>a+b)
}
// Diese Funktion gibt ein Objekt zurück, welches zwei Eigenschaften hat: 'Woman' und 'Men'
// Der Wert entspricht der Anzahl der Frauen und Männer im übergebenen Array
// Zum Beispiel: getAmount(persons)
// Bsp-Rückgabe:
// { Woman: 3, Men: 3 }
function getAmount(personsArray) {
	return {Women:filterGender(list,"f").length, Men:filterGender(list,"m").length}
}