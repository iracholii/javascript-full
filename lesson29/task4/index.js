export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    callback.apply(context, args);
  }, delay);
};

const callback = {
  message: 'test',
  showPrompt(arg) {
    console.log(`${this.message} + ${arg}`);
  },
};

delay(1000, callback.showPrompt, callback, 'text');
