export const fetchUserData = async userName => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error('Failed to load data');
  }

  // return fetch(`https://api.github.com/users/${userName}`).then(response => {
  //   if (response.status === 200) {
  //     return response.json();
  //   }

  //   throw new Error('Failed to load data');
  // });
};

export const fetchRepositories = async url => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    throw new Error('Failed to load data');
  }

  // return fetch(url).then(response => {
  //   if (response.status === 200) {
  //     return response.json();
  //   }

  //   throw new Error('Failed to load data');
  // });
};
