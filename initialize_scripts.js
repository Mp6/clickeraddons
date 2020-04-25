/**
 * Mod loader for Mp6's cookie clicker addons
 *
 * @author Mp6
 */
class Mp6ModLoader {
	constructor() {
		this.debug = true;

		if(this.debug)
			console.log('Loader Version 0.2');

		// Set up class list
		this.classes = [
			'Mp6Utilities',
			'Mp6OptimalCookies',
		];

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

		var scripts = [
			'https://cdn.jsdelivr.net/gh/Mp6/clickeraddons@latest/utilities.js',
			'https://cdn.jsdelivr.net/gh/Mp6/clickeraddons@latest/optimal_cookies.js',
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

	InitializeAddons() {
		let that = this;
		let init_interval = setInterval(()=>{
			
			let all_found = true;
			that.classes.forEach((classname) => {
				if(window[classname] === 'undefined')
					all_found = false;
			});

			if(this.debug)
				console.log(all_found ? 'We found them' : 'Not found yet');
			if(all_found)
			{
				Mp6.utilities = new Mp6Utilities();
				Mp6.optimal = new Mp6OptimalCookies();
				clarInterval(init_interval);
			}
		}, 1000);
	}
}

var Mp6;
Mp6.loader = new Mp6ModLoader();