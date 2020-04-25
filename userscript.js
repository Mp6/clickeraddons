import {Mp6ModLoader} from './src/Loader.js';

function Mp6LoadMod() {
	let load_interval = setInterval(()=>{
		if(typeof Game.ready !== 'unedfined' && Game.ready)
		{
			console.log('Loading Mp6 Cookie Addon Version 0.20');
			Mp6.loader = new Mp6ModLoader();
			clearInterval(load_interval);
		}
	}, 1000);
}

export const Mp6 = {};
window.addEventListener("load", Mp6LoadMod, false);