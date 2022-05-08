const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const getDelay = (from, to) => Math.random() * (to - from) + from;

const request = url =>
  new Promise(resolve => {
    const randomDelay = getDelay(1000, 3000);
    setTimeout(() => {
      // console.log(randomDelay);
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/${userId}`);
  // console.log(userUrls);
  const requests = userUrls.map(userUrl => request(userUrl));
  // console.log(requests);
  return Promise.race(requests);
};

getUserASAP('userId_4152455').then(user => {
  console.log(user);
});

getUserASAP('userId_8967654').then(user => {
  console.log(user);
});
