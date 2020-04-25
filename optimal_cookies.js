/**
 * Used to display optimal cookies needed in bank for golden cookie clicks
 *
 * @author Mp6
 */
class Mp6OptimalCookies {
	constructor() {
		this.debug = true;
		if(this.debug)
			console.log('Optimal Cookies Version 0.1');
		Mp6.utilities.RegisterUpdateCallback(this.show_optimal_golden);
	}

	show_optimal_golden() {
		// Insert element into document if it doesn't exist
		//document.getElementById('optimal_golden_amount').remove();
		if(!document.getElementById('optimal_golden_amount'))
		{
			// Grab parent and create our element
			const section = document.getElementById('sectionRight');
			let  wrap = document.createElement('div');
			wrap.id = 'optimal_golden_amount';

			// Style the element
			wrap.style.textAlign = 'center';
			wrap.style.paddingTop = '15px';
			wrap.style.paddingBottom = '15px';
			wrap.style.fontSize = '18px';
			wrap.style.lineHeight = '25px';
			wrap.style.background = '#000';
			wrap.style.height = '60px';
			wrap.style.width = '318px';
			wrap.style.position = 'fixed';
			wrap.style.right = '0px';
			wrap.style.top = '0px';
			wrap.style.zIndex = '100000000';
			wrap.style.overflow = 'hidden';
			wrap.style.overflowY = 'scroll';

			// Insert the element
			section.insertBefore(wrap, document.getElementById('smallSupport'));
		}

		// Define constants
		const wrap = document.getElementById('optimal_golden_amount'),
			comma_names = {
				1: 'Thousand',
				2: 'Million',
				3: 'Billion',
				4: 'Trillion',
				5: 'Quadrillion',
				6: 'Quintillion',
				7: 'Sextillion',
				8: 'Septillion',
				9: 'Octillion',
				10: 'Nonillion',
				11: 'Decillion',
				12: 'Undecillion',
				13: 'Duodecillion',
				14: 'Tredecillion',
				15: 'Quattuordecillion',
				16: 'Quindecillion',
				17: 'Sexdecillion',
				18: 'Septendecillion',
				19: 'Fucking too many dude idk, get help or something jesus christ',
			};

		// Get the necessary cookie amount
		let amount = this.get_big_number(Game.cookiesPs.toLocaleString());

		// Insert amounts to panel based on status of frenzy
		wrap.innerHTML = '<h2 style="font-size: 20px; font-weight: bold;">Optimal Cookies</h2>' + this.name_properly(amount.optimal, amount.comma_count);
		if(Game.buffs['Frenzy'] === undefined)
			wrap.innerHTML = wrap.innerHTML + '<br>' + this.name_properly(amount.optimal_frenzy, amount.comma_count) + ' (While Frenzied)';

		// Insert amount to our HTML element
		wrap.innerHTML = wrap.innerHTML + '<h2 style="font-size: 20px; font-weight: bold;">You will receive</h2>' + this.name_properly(amount.received, amount.comma_count);
		if(Game.buffs['Frenzy'] === undefined)
			wrap.innerHTML = wrap.innerHTML + '<br>' + this.name_properly(amount.received_frenzy, amount.comma_count) + ' (While Frenzied)';

		let that = this;
		setTimeout(()=>{
			that.show_optimal_golden();
		}, 5000);
	}

	get_big_number(amount) {
		let comma_count = amount.match(/,/g);
		if(comma_count !== null)
		{
			comma_count = comma_count.length;
			if(comma_count > 19)
				comma_count = 19;
			string_array = amount.split(',');
			let format_amount = string_array[0] + '.' + string_array[1];
			let format_obj = {
				original: Math.round(parseFloat(format_amount)),
				optimal: Math.round(parseFloat(format_amount) * 6000),
				optimal_frenzy: Math.round(parseFloat(format_amount) * 6000 * 7),
				received: Math.round(parseFloat(format_amount) * 900),
				received_frenzy: Math.round(parseFloat(format_amount) * 900 * 7),
				comma_count: comma_count,
			};
			return format_obj;
		}
		let format_obj = {
			dec: Math.round(parseFloat(amount)),
			optimal: Math.round(parseFloat(amount) * 6000),
			optimal_frenzy: Math.round(parseFloat(amount) * 6000 * 7),
			received: Math.round(parseFloat(amount) * 900),
			received_frenzy: Math.round(parseFloat(amount) * 900 * 7),
			comma_count: 0,
		};
		return format_obj;
	}

	name_properly(amount, comma_count) {
		// Define comma constants
		const comma_names = {
			1: 'Thousand',
			2: 'Million',
			3: 'Billion',
			4: 'Trillion',
			5: 'Quadrillion',
			6: 'Quintillion',
			7: 'Sextillion',
			8: 'Septillion',
			9: 'Octillion',
			10: 'Nonillion',
			11: 'Decillion',
			12: 'Undecillion',
			13: 'Duodecillion',
			14: 'Tredecillion',
			15: 'Quattuordecillion',
			16: 'Quindecillion',
			17: 'Sexdecillion',
			18: 'Septendecillion',
			19: 'Fucking too many dude idk, get help or something jesus christ',
		};
		let adtl_count = amount.toLocaleString().match(/,/g);

		if(adtl_count == null)
			adtl_count = 0;

		let total_count = adtl_count.length + comma_count;

		if(total_count == 0)
			return amount.toLocaleString();

		// Check comma bounds and apply string modifications
		if(total_count > 19)
			total_count = 19;
		if(total_count > 0)
		{
			const string_array = amount.toLocaleString().split(',');
			amount = string_array[0] + '.' + string_array[1] + ' ' + comma_names[total_count];
		}

		return amount;
	}

	StartUpdateLoop() {

	}
}