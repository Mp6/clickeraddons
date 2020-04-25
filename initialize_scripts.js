/**
 * Mod loader for Mp6's cookie clicker addons
 *
 * @author Mp6
 */
class Mp6ModLoader {
	constructor() {
		this.debug = true;

		if(this.debug)
			console.log('Loading External Scripts');
		LoadExternalScripts();
	}

	LoadExternalScripts() {
		let that = this;

		// Load jQuery
		let jQuery = document.createElement('script');
		jQuery.setAttribute('type', 'text/javascript');
		jQuery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
		document.head.appendChild(jQuery);

		var scripts = [
			'https://raw.githubusercontent.com/Mp6/clickeraddons/master/utilities.js',
			'https://raw.githubusercontent.com/Mp6/clickeraddons/master/optimal_cookies.js',
		];

		scripts.forEach((script) => {
			let script_element = document.createElement('script');
			script_element.setAttribute('type', 'text/javascript');
			script_element.setAttribute('src', script);
			document.head.appendChild(script_element);

			if(that.debug)
				console.log('Loaded script from source "' + script + '"');
		});
	}

	StartMp6Scripts() {
		Mp6.utilities = new Mp6Utilities();
		Mp6.optimal = new Mp6OptimalCookies();
	}
}

var Mp6;
Mp6.loader = new Mp6ModLoader();