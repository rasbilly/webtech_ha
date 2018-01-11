function pushToSide(sec,ue,text){
	var ueContent=document.getElementById(ue).value 
	var textContent=document.getElementById(text).value 

	if(ueContent===""||textContent===""){
		return alert("Füllen sie alle Felder aus")
	}

	var article=document.createElement("article")
	var h2=document.createElement("h2")
	var p=document.createElement("p")
	var hr=document.createElement("hr")

	h2.appendChild(document.createTextNode(ueContent))
	p.appendChild(document.createTextNode(textContent))
	article.appendChild(h2)
	article.appendChild(hr)

	article.appendChild(p)


	document.getElementById(sec).appendChild(article)
	document.getElementById("delete").click()
}