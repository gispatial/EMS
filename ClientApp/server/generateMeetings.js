var faker = require('faker');

var meetings = [];

for (var i = 1; i<= 10; i++) {
  meetings.push({
    id: i,
    subject: faker.lorem.sentence(),
    datetime: faker.date.future(),
    description: faker.lorem.sentences(),
    imageUrl: "https://source.unsplash.com/1600x900",
    attendees: addAttendies(),
  });
}

function addAttendies() {
  var count = getRandNumber();
  var attendees = [];
  for (var i = 1; i<= count; i++) {
    attendees.push(getRandNumber())
  }
  return attendees;
}

function getRandNumber() {
  return Math.floor(Math.random() * 10) + 1
}

console.log(JSON.stringify(meetings));
