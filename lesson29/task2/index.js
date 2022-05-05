/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  console.log('Ping');
  let index = count;

  const intervalId = setInterval(() => {
    index -= 1;
    if (index > 0) {
      console.log('Ping');
    } else {
      clearInterval(intervalId);
    }
  }, period);
};

// examples
// pinger(5, 1000); // makes 5 writes with 1000 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval
