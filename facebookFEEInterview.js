// create an emiiter class where you can create,
// subscribe to events, release those subscriptions
// and emit the callbacks stored to the event.
// 1. creating an emitter:
// let emitter = new Emitter();
// 2. subscribing to an emitter:
// s = emitter.subscribe('event_name', callback)
// and releasing that subscription
// s.unsubscribe
// 3. emitting all the events in stored

// post interview thougths:
// i think i did ok (update: moved on to the next round!)
// first started with a simple object and an array as value to store callbacks 
// the interviewer seemed to think that the approach was ok but asked me
// to try and optimise the code I wrote. So I made used of a hashmap
// however, since I wasn't familiar with hashmap syntax, I had a few issues 
// with implementing the add and remove functions. But interviewer said
// that the syntax error was something I could ignore -- he just wanted to 
// see how I designed stuff. Also, I kind of rushed into implementing/coding the
// class itself when optimising and missed a part where I have to create a map
// of different event names.
// Also, I had to do a analysis on why the optimisation
// would work better despite having a nested map
// and compare when different approaches would be better.
// pre optimization
/*
class EventEmitter {
  constructor() {
    this.events = new Object();
  }

  subscribe(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].add(cb)
    } else {
      this.events[eventName] = new Array()
      this.events[eventName].push(cb)
    }
    return {
      unsubscribe: () => this.events[eventName].splice(this.events[eventName.indexOf(cb)]),
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
}
*/

// post optimization
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, cb) {
    if (this.events[eventName]) {
      // case where callback exists
      if(this.events[eventName][cb] && this.events[eventName][cb] > 0){
        this.events[eventName].set(cb, this.events[eventName][cb] + 1);
      // case where callback count doesnt exist so is 1
      } else{
        this.events[eventName].set(cb, 1);
      }
    } else {
      this.events[eventName] = new Map()
      this.events[eventName].set(cb, 1)
    }
    return {
      unsubscribe: () => this.events[eventName].set(cb, this.events[eventName][cb] - 1),
    }
  }

  emit(eventName, ...params) {
    if (!this.events[eventName] || Object.keys(this.events) === 0) {
      console.log(`no subscriptions to ${eventName}`)
      return
    }
    this.events[eventName].forEach((count, cb) => {
      console.log(cb,count)
      for(let i = 0; i < count; i++)
        cb(...params)
    })
  }
}
let emitter = new EventEmitter();

let sub = emitter.subscribe("test", () => console.log('Hello!'));
emitter.emit("test");
emitter.emit("test");
sub.unsubscribe();
emitter.emit("test");