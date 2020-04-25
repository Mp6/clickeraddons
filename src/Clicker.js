/**
 * Clicker script to save my wrist
 *
 * @author Mp6
 */
import {Mp6} from './../userscript.js';

export class Mp6Clicker {
	constructor() {
		this.debug = true;

		if(this.debug)
			console.log('Clicker Version 0.4');

		this.running_clicker = false;
		this.interval_value = 100;
		this.interval = undefined;

		this.InitializeListener();
	}

	InitializeListener() {
		let that = this;
		jQuery(window).on('keydown', (event)=>{
			if(event.originalEvent.code == 'ControlLeft')
				that.StartClicker();
		});

		$(window).on('keyup', (event)=>{
			if(event.originalEvent.code == 'ControlLeft' && that.running_clicker)
				that.StopClicker();
		});
	}

	StartClicker() {
		if(this.running_clicker)
			return;
		this.interval = setInterval(()=>{
			Game.ClickCookie();
		}, this.interval_value);
		this.running_clicker = true;
	}

	StopClicker() {
		if(!this.running_clicker)
			return;
		clearInterval(this.interval);
		this.running_clicker = false;
	}
}