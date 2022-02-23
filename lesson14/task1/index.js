let text = 'Just learn it';
export function sendMessage(name) {
  console.log(`${name}, ${text}! Your Gromcode`);
}

export function setMessage(anotherText) {
  text = anotherText;
}
