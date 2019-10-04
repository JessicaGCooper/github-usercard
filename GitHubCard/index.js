/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios

// .get('https://api.github.com/users/JessicaGCooper')
//   .then(response => {
//     console.log(response);
//   })
// .get('https://api.github.com/users/JessicaGCooper/followers')
//   .then(response => {
//     console.log(response);
//   })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const entryPoint = document.querySelector('.cards');

const gitHubMagic = (object) => {

  //add elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameTitle = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const profileUrl = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  //add classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameTitle.classList.add('name');
  userName.classList.add('username');
  
  //add content
  userImg.src = object.avatar_url;
  nameTitle.textContent = object.name;
  userName.textContent = object.login;
  userLocation.textContent = object.location;
  profileUrl.textContent = object.html_url;
  profileUrl.href = object.html_url;
  userFollowers.textContent = `Followers: ${object.followers}`;
  userFollowing.textContent =  `Following: ${object.following}`;
  userBio.textContent = `Bio: ${object.bio}`

 
   //add structure
   card.appendChild(userImg);
   card.appendChild(cardInfo);
   cardInfo.appendChild(nameTitle);
   cardInfo.appendChild(userName);
   cardInfo.appendChild(userLocation);
   cardInfo.appendChild(userProfile);
   userProfile.appendChild(profileUrl);
   cardInfo.appendChild(userFollowers);
   cardInfo.appendChild(userFollowing);
   cardInfo.appendChild(userBio);


   return card
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

axios
.get('https://api.github.com/users/JessicaGCooper')
  .then(response => {
    const func = gitHubMagic(response.data);
    entryPoint.appendChild(func);
    return axios.get('https://api.github.com/users/JessicaGCooper/followers');
  })
  .then (response => {
    const followersArray = response.data
    followersArray.forEach(element => { 
      axios.get(element.url)
      .then(response => {
        const followersFunc = gitHubMagic(response.data);
        entryPoint.appendChild(followersFunc);
      })
    })
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ['https://api.github.com/users/brudnak', "https://api.github.com/users/devaneereid", "https://api.github.com/users/ddelfaus", "https://api.github.com/users/mark-halls", "https://api.github.com/users/RaymondTrinh91"]
  
// for (let i = 0; i < followersArray.length; i++){
//   axios.get(followersArray[i])
//   .then(response => {
//   const followersFunc = gitHubMagic(response.data);
//   entryPoint.appendChild(followersFunc);
// })
// }

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

