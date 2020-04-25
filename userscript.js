// ==UserScript==
// @name         Mp6's Cookie Addons
// @source       https://github.com/Mp6/clickeraddons
// @version      0.8
// @updateURL    https://raw.githubusercontent.com/Mp6/clickeraddons/master/userscript.js
// @downloadURL  https://raw.githubusercontent.com/Mp6/clickeraddons/master/userscript.js
// @description  Minor addons for cookie clicker
// @author       Mp6
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function Mp6LoadMod() {
	var mp6loadready = setInterval(()=>{
		console.log('Loading Mods');
		if(typeof Game.ready !== 'undefined' && Game.ready)
		{
			Game.LoadMod('https://gitcdn.link/repo/Mp6/clickeraddons/master/initialize_scripts.js');
			clearInterval(mp6loadready);
		}
		else
			Mp6LoadMod();
	}, 1000);
}

window.addEventListener("load", Mp6LoadMod, false);