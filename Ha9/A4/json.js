var articles=[

{"title":"Was sind SPA","text":"Single-Page-Application sind Anwendungen, die aus einem einzigen HTML-Dokument bestehen. Deren Inhalte werden dynamisch nachgeladen."},
{"title":"Vorteile","text":"Alle Inhalte werden über AJAX (Asynchronous JavaScript and XML) nachgeladen. Benutzerinteraktionen werden im Hintergrund ausgeführt. Bedingt durch Frameworks wie AngularJS wreden sämtliche page reloads nicht mehr notwendig -> Steigerung der Geschwindigkeit. Geringerer Kommunikationsaufwand mit dem Webserver"},
{"title":"Nachteile","text":"Single-Page-Applications sind ungeeignet aus Sicht der Suchmaschinenoptimierung, da die Inhalte über JavaScript nachgeladen werden, fällt es Suchmaschinen schwerer Single-Page-Applications zu durchsuchen (mit Außnahmen). Gravierende Nachteile haben Single-Page-Applications nicht. Höhere Entwicklungsaufwand gegenüber klassischen Webanwendungen. Höhere Anforderungen im Bereich Responsive-Design"}
]

function getContent(element){


	var sideArticles=document.querySelectorAll("article")

	if(sideArticles.length==0){

	

		articles.forEach(e=>{
		var article=document.createElement("article")
		var h2=document.createElement("h2")
		var p=document.createElement("p")
		var hr=document.createElement("hr")

		h2.appendChild(document.createTextNode(e.title))
		p.appendChild(document.createTextNode(e.text))
		
		article.appendChild(h2)
		article.appendChild(hr)

		article.appendChild(p)
		document.getElementById(element).appendChild(article)

	})
}
}


window.onload=getContent("art")

