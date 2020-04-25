/**
 * Utility scripts used by other components of Mp6's clicker addons
 *
 * @author Mp6
 */
export class Mp6Utilities {
	constructor() {
		this.debug = true;
		if(this.debug)
			console.log('Utlities Version 0.3');
		this.update_callbacks = [];
		this.update_interval = 500;
		this.StartUpdateLoop();
	}

	RegisterUpdateCallback(object, callback) {
		this.update_callbacks.push({object: object, callback: callback});
	}

	UpdateLoop() {
		let that = this;
		this.interval = setInterval(()=>{
			that.update_callbacks.forEach((callback)=>{
				callback.object[callback.callback]();
			});
		}, this.update_interval);
	}

	StartUpdateLoop() {
		this.UpdateLoop();
	}
}