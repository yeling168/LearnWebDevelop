function styleHeaderSiblings(tag, theclass) {
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName(tag);
  for (var i = 0; i < headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
    addClass(elem, theclass);
  }
}

function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    element.className += " ";
    element.className += value;
  }
}

function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
addLoadEvent(function () {
  styleHeaderSiblings("h1", "intro")
});