/**
 * Mod loader for Mp6's cookie clicker addons
 *
 * @author Mp6
 */
import {Mp6} from './../userscript.js';
import {Mp6Utilities} from './Utilities.js';
import {Mp6OptimalCookies} from './OptimalCookies.js';

export class Mp6ModLoader {
	constructor() {
		this.debug = true;

		if(this.debug)
			console.log('Loader Version 0.11');

		if(this.debug)
			console.log('Loading External Scripts');
		this.LoadExternalScripts();
		this.InitializeAddons();
	}

	LoadExternalScripts() {
		let that = this;

		// Load jQuery
		let jQuery = document.createElement('script');
		jQuery.setAttribute('type', 'text/javascript');
		jQuery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
		document.head.appendChild(jQuery);
	}

	InitializeAddons() {
		Mp6.utilities = new Mp6Utilities();
		Mp6.optimal_cookies = new Mp6OptimalCookies();
	}
}