class EventEmitter {
  constructor() {
    this.events = {}
  }

  subscribe(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].add(cb)
    } else {
      this.events[eventName] = new Set()
      this.events[eventName].add(cb)
    }


    return {
      unsubscribe: () => this.events[eventName].delete(cb),
    }
  }

  emit(eventName, ...params) {
    if (!this.events[eventName] || Object.keys(this.events) === 0) {
      console.log(`no subscriptions to ${eventName}`)
      return
    }
    //this.callbacks.[eventName].apply(null, params);
    this.events[eventName].forEach(cb => {
      cb(...params)
    })
  }

let emitter = new EventEmitter();

let sub = emitter.subscribe("test", () => console.log('Hello!'));
emitter.emit("test");
emitter.emit("test");
sub.unsubscribe();
emitter.emit("test");