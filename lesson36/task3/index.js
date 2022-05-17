/**
 * @param {string[]} users
 * @return {promise}
 */

// export const getUsersBlogs = async users => {
//   const fetchArray = userId => {
//     return fetch(`https://api.github.com/users/${userId}`).then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to get user data');
//       } else {
//         return response.json();
//       }
//     });
//   };
//   const usersArray = await Promise.all(users.map(userId => fetchArray(userId)));
//   return usersArray.map(userData => userData.blog);
// };

export const getUsersBlogs = async users => {
  const fetchArray = userId => {
    return fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get user data');
        }
        return response.json();
      })
      .then(userData => userData.blog);
  };
  const usersBlogs = await Promise.all(users.map(userId => fetchArray(userId)));
  return usersBlogs;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
