function replaceTextOnPage(){
  getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp('[a-zA-z]', 'g'), 'A');
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) 
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE) 
        result.push(node);
    })(document);

    return result;
  }
}

let typedChars = [];

document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) {
    	typedChars.push(String.fromCharCode(charCode));
    	while(typedChars.length > 3) {
    		typedChars.shift();
    	}
    	if(typedChars.toString() === "f,o,x") {
    		replaceTextOnPage();
    	}
    }
};
