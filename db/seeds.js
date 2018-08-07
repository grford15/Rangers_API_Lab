use rangersdb;

db.dropDatabase();

db.players.insertMany([
  {
  name: "Alan McGregor",
  position: "Goalkeeper",
  squadNumber: 1,
  age: 36,
  nationality: "Scottish"
},
{
  name: "Wes Foderingham",
  position: "Goalkeeper",
  squadNumber: 13,
  age: 27,
  nationality: "English"
},
{
  name: "James Tavernier",
  position: "Full-Back",
  squadNumber: 2,
  age: 26,
  nationality: "English"
},
{
  name: "Alfredo Morelos",
  position: "Striker",
  squadNumber: 20,
  age: 22,
  nationality: "Columbian"
},
{
  name: "Daniel Candieas",
  position: "Winger",
  squadNumber: 21,
  age: 30,
  nationality: "Portugese"
},
{
  name: "Connor Goldson",
  position: "Defender",
  squadNumber: 6,
  age: 25,
  nationality: "English"
},
{
  name: "Ryan Jack",
  position: "Midfielder",
  squadNumber: 8,
  age: 26,
  nationality: "Scottish"
},
{
  name: "Jordan Rossiter",
  position: "Midfielder",
  squadNumber: 18,
  age: 21,
  nationality: "English"
},
{
  name: "Nikola Katic",
  position: "Defender",
  squadNumber: 19,
  age: 21,
  nationality: "Croatian"
},
{
  name: "Lassana Coulibaly",
  position: "Midfielder",
  squadNumber: 23,
  age: 22,
  nationality: "Malian"
}
]);
