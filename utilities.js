class Mp6Utilities {
	constructor() {
		this.update_callbacks = [];
		this.update_interval = 500;
	}

	RegisterUpdateCallback(callback) {
		this.update_callbacks.push(callback);
	}

	UpdateLoop() {
		let that = this;
		this.update_callbacks.forEach((callback)=>{
			callback();
		});
		setTimeout(()=>{
			that.UpdateLoop();
		}, this.update_interval);
	}

	StartUpdateLoop() {
		this.UpdateLoop();
	}
}