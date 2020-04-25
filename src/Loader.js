/**
 * Mod loader for Mp6's cookie clicker addons
 *
 * @author Mp6
 */
import {Mp6} from './../userscript.js';
import {Mp6Utilities} from './Utilities.js';
import {Mp6OptimalCookies} from './OptimalCookies.js';
import {Mp6Clicker} from './Clicker.js';

export class Mp6ModLoader {
	constructor() {
		this.debug = true;

		if(this.debug)
			console.log('Loader Version 0.14');

		this.LoadExternalScripts();
		this.InitializeAddons();
	}

	LoadExternalScripts() {
		if(this.debug)
			console.log('Loading External Scripts');

		let that = this;

		// Load jQuery
		let jQuery = document.createElement('script');
		jQuery.setAttribute('type', 'text/javascript');
		jQuery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
		document.head.appendChild(jQuery);
	}

	InitializeAddons() {
		let that = this;
		this.load_interval = setInterval(()=>{
			if(typeof jQuery !== 'undefined')
			{
				if(that.debug)
					console.log('jQuery is defined, loading other classes');
				Mp6.utilities = new Mp6Utilities();
				Mp6.optimal_cookies = new Mp6OptimalCookies();
				Mp6.clicker = new Mp6Clicker();
				clearInterval(that.load_interval);
			}
		}, 500);
	}
}