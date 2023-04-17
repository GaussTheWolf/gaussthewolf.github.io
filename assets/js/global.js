function wolfMode() {
    getAllTextNodes().forEach(function (node) {
        node.nodeValue = node.nodeValue.replace(new RegExp('[a-zA-z]+', 'g'), function (text) {
            switch (text.length) {
            case 1:
                return 'A';
            case 2:
                return 'AW';
            default:
                return 'AW' + 'O'.repeat(text.length - 2);
            }
        });
    });
}

function foxMode() {
    getAllTextNodes().forEach(function (node) {
        node.nodeValue = node.nodeValue.replace(new RegExp('[a-zA-z]', 'g'), 'A');
    });
}

function getAllTextNodes() {
    var result = [];
    (function scanSubTree(node) {
        if (node.childNodes.length)
            for (var i = 0; i < node.childNodes.length; i++)
                scanSubTree(node.childNodes[i]);
        else if (node.nodeType == Node.TEXT_NODE)
            result.push(node);
    }(document));
    return result;
}

let typedChars = [];

document.onkeypress = function (e) {
    e = e || window.event;
    var charCode = typeof e.which == 'number' ? e.which : e.keyCode;
    if (charCode) {
        typedChars.push(String.fromCharCode(charCode));
        while (typedChars.length > 4) {
            typedChars.shift();
        }
        if (typedChars.toString() === 'w,o,l,f') {
            wolfMode();
        }
        if (typedChars.slice(Math.max(typedChars.length - 3, 0)).toString() === 'f,o,x') {
            foxMode();
        }
    }
};
