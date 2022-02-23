/**
 * @return {object}
 */

// algo
// 1. записати message в масив у вигляді об'єкта з типом методу
// 2. при виклику функції getRecords повертати пустий масив, якщо повідомлень типу заданого в аргументі не поступало
// 3. повертати масив з усіма повідомленнями, відсортованими по часу якщо аргумент не переданий
// 4. повертати масив з повідомленнями з типом заданого аргумента, відсортованими по часу

// input: none
// return: object
export const createLogger = () => {
  const messagesArr = [];

  // input: string
  // return: undefined
  function warn(string) {
    messagesArr.push({
      message: string,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  // input: string
  // return: undefined
  function error(string) {
    messagesArr.push({
      message: string,
      dateTime: new Date(),
      type: 'error',
    });
  }

  // input: string
  // return: undefined
  function log(string) {
    messagesArr.push({
      message: string,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // input: string
  // return: array
  function getRecords(messageType) {
    if (messageType !== undefined) {
      return messagesArr
        .filter(element => element.type === messageType)
        .sort((a, b) => b.dateTime - a.dateTime);
    }
    return messagesArr.sort((a, b) => b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
