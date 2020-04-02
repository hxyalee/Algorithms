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

    const subManager = {
      unsubscribe: () => this.events[eventName].delete(cb),
    }
    return subManager
  }

  emit(eventName, ...params) {
    if (!this.events[eventName] || this.events[eventName].size === 0) {
      console.log(`no subscriptions to ${eventName}`)
      return
    }
    this.events[eventName].forEach(cb => {
      cb(...params)
    })
  }
}