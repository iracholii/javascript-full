export const getMostActiveDevs = repoData => {
  return fetch(
    `https://api.github.com/repos/${repoData.userId}/${repoData.repoId}/commits?per_page=100`,
  )
    .then(response => response.json())
    .then(data => {
      // const result = [];
      const result = [{ count: null, name: null, email: null }];
      const arr = data
        .map(obj => {
          return obj.commit.author;
        })
        .filter(el => {
          const date = new Date(el.date);
          const toDate = new Date();
          const dayCurrent = new Date(toDate).getDate();
          const fromDate = new Date(toDate).setDate(dayCurrent - repoData.days);

          // console.log(date);
          // console.log(toDate);
          // console.log(fromDate);

          return date >= fromDate && date <= toDate;
        })
        //
        .map(el => {
          if (result[0].name === el.name) {
            result[0].count += 1;
          }
          if (result[0].name !== el.name) {
            result[0] = { count: 1, name: el.name, email: el.email };
          }
          return el;
        });
      //
      console.log(arr);
      return result;
    });
};

getMostActiveDevs({ days: 5, userId: 'iracholii', repoId: 'javascript-full' }).then(result =>
  console.log(result),
);

getMostActiveDevs({ days: 2, userId: 'iracholii', repoId: 'javascript-full' }).then(result =>
  console.log(result),
);
