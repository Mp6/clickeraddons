class Mp6ModLoader {
	constructor() {
		LoadExternalScripts();
	}

	LoadExternalScripts() {
		// Load jQuery
		let jQuery = document.createElement('script');
		jQuery.setAttribute('type', 'text/javascript');
		jQuery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
		document.head.appendChild(jQuery);

		var scripts = [''];

		scripts.forEach((script) => {
			let script_element = document.createElement('script');
			script_element.setAttribute('type', 'text/javascript');
			script_element.setAttribute('src', script);
			document.head.appendChild(script_element);
		});
	}

	StartMp6Scripts() {
		Mp6.utilities = new Mp6Utilities();
		Mp6.optimal = new Mp6OptimalCookies();
	}
}

var Mp6;
Mp6.loader = new Mp6ModLoader();