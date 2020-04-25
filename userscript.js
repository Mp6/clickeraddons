// ==UserScript==
// @name         Mp6's Cookie Addons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Minor addons for cookie clicker
// @author       Mp6
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

function Mp6LoadMod() {
	Game.LoadMod('');
}

window.addEventListener("load", Mp6LoadMod, false);