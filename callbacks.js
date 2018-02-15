function getUser(username, fn) {
  const users = {
    'bob' : { age: 17, email: 'bob@gmail.com'},
    'darlene' : { age: 25, email: 'darlene@gmail.com'},

}

const user = users[username]

if (user) {
  fn(undefined, user)
} else {
  fn('That user does not exist!', user)
}
}

getUser('charles', (err, user) => {
  if(err) {
    console.log(err)
  } else {
  console.log(user.email)
}
})


getUser('bob', user => {
  console.log(user.age)
})

//fn (function to call) is our callback function and gets passed in as a parameter
// error first. Error expected as the first argument.


//This is dry version
/*
const user2 = getUser('bob')

if(user2) {
  console.log(user2.age)
} else {
  console.log('That user does not exist')
}
*/
