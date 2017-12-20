<style>
  /* Defines a cleaner look for tables */
  table  { border: 1px solid; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
   function buildTable(data) {
  var table=document.createElement("table") 
  var trHead=document.createElement("tr")
    
    Object.keys(data[0]).forEach(e=>{
      var th=document.createElement("th")
        th.appendChild(document.createTextNode(e))
      trHead.appendChild(th)
        table.appendChild(trHead)
    })
        
        
        
    
    data.forEach(e=>{
    var tr=document.createElement("tr")
    Object.values(e).forEach(p=>{
      var td=document.createElement("td")
        td.appendChild(document.createTextNode(p))
        if(typeof p=="number"){
              td.style.textAlign="right"
        }
        tr.appendChild(td)
    })
    table.appendChild(tr)
    })
    
    
  
   
    return table
    
    
    
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>



<span><H1>test</H1></span><span>test</span>

<script>
   function byTagName(node, tagName) {
  var list = []
    tagName = tagName.toUpperCase()

    function deepSearch(node) {
      node.childNodes.forEach(e=>{
        if (e.nodeType == document.ELEMENT_NODE) { //Check if child is a tag
          if (e.nodeName == tagName)
            list.push(e);
          deepSearch(e); // check nested tags
        }
      })
    }

    deepSearch(node);
    return list;
  }


  console.log(byTagName(document.body, "h1").length);
  // → 1
 
</script>