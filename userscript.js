// ==UserScript==
// @name         Mp6's Cookie Addons
// @source 		 https://raw.githubusercontent.com/Mp6/clickeraddons/master/userscript.js
// @version      0.3
// @description  Minor addons for cookie clicker
// @author       Mp6
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

function Mp6LoadMod() {
	Game.LoadMod('https://raw.githubusercontent.com/Mp6/clickeraddons/master/initialize_scripts.js');
}

window.addEventListener("ready", Mp6LoadMod, false);