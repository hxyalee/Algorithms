// Write an emitter class: 
/* emitter = new Emitter (); 
// 1. Support subscribing to events. sub = emitter.subscribe('event_name', callback); sub2 = emitter.subscribe('event_name', callback2); 
// 2. Support emitting events. 
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. emitter.emit('event_name', foo, bar); 
// 3. Support unsubscribing existing subscriptions by releasing them. sub.release(); 
// `sub` is the reference returned by `subscribe` above */

class Emitter{ 
	constructor(){
		this.events = []
	}
	subscribe(event_name, callback){
		this.events.push( {name: event_name, cback: callback} );
	}
	emit(event_name, arg1, arg2){
		let event_object = this.events.filter(event => {
			return event.name === event_name;
		});
		let func = event_object.cback;
		return func(arg1, arg2);
	}
	release(event_name){
		this.events.filter(event => event.name != event_name);
	}
}


let a = new Emitter()
a.subscribe('hoay', () => console.log('fucloff'))