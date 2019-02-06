"use strict";

/**
 * Append a new image element onto the page using URL as source
 */
const addImage = (url) => {
  const img = document.createElement('img');
  img.src = url;

  const output = document.querySelector('.output');
  output.insertBefore(img, output.firstChild);
};

/**
 * Asynchronously fetch Github data from username
 */
const fetchUser = (username) => {
  const apiEndpoint = 'https://api.github.com';
  const url = `${apiEndpoint}/users/${username}`;
  
  fetch(url).then(resp => resp.json()).then(data => data.avatar.toString()).then(addImage);
  // in case the above line breaks because of rate limiting, see note at bottom
  // Promise.resolve(backupJSON).then(data => data.avatar.toString()).then(addImage);
};

/**
 * Sets up form event listener
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    fetchUser(event.target[0].value);
  }, false);
}, false);


// In case Github API fails for rate limiting or other reason, uncomment the
// following line. Also, comment out the `fetch()` call on line 21 and uncomment
// the `Promise.resolve()` call below it to mock the results of the API call.
//
// var backupJSON = { "login": "zachfedor", "avatar_url": "https://avatars2.githubusercontent.com/u/11153782?v=4", "bio": null, "created_at": "2015-02-23T03:06:21Z", "email": null, "gravatar_id": "", "html_url": "https://github.com/zachfedor", "id": 11153782, "name": "Zach Fedor", "node_id": "MDQ6VXNlcjExMTUzNzgy", "repos_url": "https://api.github.com/users/zachfedor/repos", "type": "User", "updated_at": "2019-01-23T01:41:53Z", "url": "https://api.github.com/users/zachfedor" };
