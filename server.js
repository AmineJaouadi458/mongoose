const mongoose = require("mongoose");
const Person = require("./models/Person");
require("dotenv").config();
let uri = process.env.URI;
mongoose
  .connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

// Person.create({
//   name: "Micheal Jackson",
//   age: 30,
//   favoriteFoods: ["Pizza", "Burgers", "Pasta"],
// });
// Person.insertMany([
//   {
//     name: "Alison Burger",
//     age: 48,
//     favoriteFoods: ["Meat Balls", "Burgers", "Pasta"],
//   },
//   {
//     name: "John Marston ",
//     age: 27,
//     favoriteFoods: ["French Fries", "Lasagne", "Hamburgers"],
//   },
//   {
//     name: "Sasha Brown ",
//     age: 18,
//     favoriteFoods: ["Chicken", "Pizza", "Rice"],
//   },
// ]);
// // let data = Person.find();
// // console.log(data);

// Person.find({ name: "Alison Burger" })
//   .then((people) => {
//     console.log("People with the name Alison:", people);
//   })
//   .catch((error) => {
//     console.error("Error finding people:", error);
//   });

// Person.findById("67366d2fc049779fcb8e50a8")
//   .then((people) => {
//     if (people) {
//       console.log("Found person by ID:", people);
//     } else {
//       console.log("No person found with that ID.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error finding person by ID:", error);
//   });
// Person.findOne({ favoriteFoods: ["Chicken", "Pizza", "Rice"] })
//   .then((people) => {
//     if (people) {
//       console.log("Found person with the favorite food:", people);
//     } else {
//       console.log("No person found with that favorite food.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error finding person by favorite food:", error);
//   });
// Person.findByIdAndUpdate("67366d2fc049779fcb8e50a8", {
//   $push: {
//     favoriteFoods: "Hamburger",
//   },
// })
//   .then((updatedPerson) => {
//     console.log("Updated Person", updatedPerson);
//   })
//   .catch((err) => {
//     console.error("Error updating person", err);
//   });
// Person.findOneAndUpdate(
//   { name: "John Marston " },
//   { $set: { age: 20 } },
//   { new: true }
// );
// const userId = "6736eba5417846ec6fe2fb75";
// Person.findByIdAndDelete(userId)
//   .then((people) => {
//     if (people) {
//       console.log("User deleted successfully:", people);
//     } else {
//       console.log("User not found");
//     }
//   })
//   .catch((error) => {
//     console.error("Error deleting user:", error);
//   });
// Person.deleteMany({
//   age: { $gte: 20 },
// })
//   .then(function () {
//     console.log("Data deleted");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// Person.find({ favoriteFoods: "Hamburgers" })
//   .sort({ name: 1 })
//   .limit(2)
//   .select({ age : 1})
//   .then((data) => console.log(data))
// .catch((err)=>console.log(err))