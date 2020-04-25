// ==UserScript==
// @name         Mp6's Cookie Addons
// @source       https://github.com/Mp6/clickeraddons
// @version      0.6
// @updateURL    https://raw.githubusercontent.com/Mp6/clickeraddons/master/userscript.js
// @downloadURL  https://raw.githubusercontent.com/Mp6/clickeraddons/master/userscript.js
// @description  Minor addons for cookie clicker
// @author       Mp6
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// @run-at       document-start
// ==/UserScript==

function Mp6LoadMod() {
	console.log('Loading Mods');
	Game.LoadMod('https://raw.githubusercontent.com/Mp6/clickeraddons/master/initialize_scripts.js');
}

window.addEventListener("load", Mp6LoadMod, false);