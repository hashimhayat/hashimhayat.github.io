console.log('hi from messages');

var database = firebase.database();

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

writeUserData(1, 'hashim', 'hh1316');