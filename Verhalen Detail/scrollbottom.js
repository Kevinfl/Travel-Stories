scrollingElement = (document.scrollingElement || document.body)
function scrollToBottom () {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

//Require jQuery
function scrollSmoothToBottom (id) {
   $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
   }, 500);
}
