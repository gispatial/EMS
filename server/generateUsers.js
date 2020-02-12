var faker = require('faker');

var users = [];

for (var i = 1; i <= 10; i++) {
  users.push({
    id: i,
    email: faker.internet.email(),
    name: faker.name.findName(),
    profilePic: "https://source.unsplash.com/100x100/?people",
  });
}

console.log(JSON.stringify(users));
