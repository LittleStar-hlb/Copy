/**
 * 观察者类，用于实现观察者模式。
 */
class Observer {
  constructor() {
    this.observers = [];
  }

  /**
   * 订阅观察者。
   * @param {Function} fn - 要订阅的观察者函数。
   */
  subscribe(fn) {
    this.observers.push(fn);
  }

  /**
   * 取消订阅观察者。
   * @param {Function} fn - 要取消订阅的观察者函数。
   */
  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  /**
   * 广播数据给所有观察者。
   * @param {*} data - 要广播的数据。
   */
  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}

const observer = new Observer();
