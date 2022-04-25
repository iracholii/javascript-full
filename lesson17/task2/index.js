export const callbackPrompt = {
  message: 'Write your phone number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(callbackPrompt), ms);
  },
};

// showPrompt
// input: none
// output: undefined

// showDeferredPrompt
// input: number
// output: undefined

// callbackPrompt.showPrompt();
// callbackPrompt.showDeferredPrompt(5000);
