"use strict";!function(){function n(){var o=$(".book-search-input")[0].value||"";o&&o.trim()&&(location.href="/book/search?bookName="+o)}window.addEventListener("load",function(){window.touchEvent.tap($(".book-searct-a")[0],n),$(".book-search-input")[0].onkeypress=function(o){13==o.keyCode&&n()}})}();