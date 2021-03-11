const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yogodb");

const activitySeed = [
  {
    type: "Mind",
    name: "Journal",
    description: "Take some time to journal. Share your thoughts or document your feelings.",
    durationMinutes: 15,
  },
  {
    type: "Mind",
    name: "Read a Book",
    description: "Read a new book or just read something that you enjoy.",
    durationMinutes: 60,
  },
  {
    type: "Mind",
    name: "Meditate",
    durationMinutes: 5,
  },
  {
    type: "Mind",
    name: "Unplug",
    description: "Turn off or silence your phone and disconnect from your tech.",
    durationMinutes: 120,
  },
  {
    type: "Mind",
    name: "Draw",
    description: "Doodle or draw what's in your mind or around you.",
    durationMinutes: 30,
  },
  {
    type: "Mind",
    name: "Read Poetry",
    description: "Read some new poetry or something that brings you comfort.",
    durationMinutes: 30,
  },
  {
    type: "Body",
    name: "Go for a walk/Get outside",
    description: "Take a journey around the neighborhood.",
    durationMinutes: 30,
  },
  {
    type: "Body",
    name: "Dance",
    description: "Turn on some music and just let loose.",
    durationMinutes: 15,
  },
  {
    type: "Body",
    name: "Take a Nap",
    description: "Find a comfy spot and catch some zzz’s.",
    durationMinutes: 60,
  },
  {
    type: "Body",
    name: "Stretch",
    durationMinutes: 10,
  },
  {
    type: "Body",
    name: "Drink Water",
    durationMinutes: 1,
  },
  {
    type: "Social",
    name: "Call a Friend",
    durationMinutes: 15,
  },
  {
    type: "Social",
    name: "Go Out to Lunch",
    durationMinutes: 90,
  },
  {
    type: "Social",
    name: "Visit a Museum",
    durationMinutes: 120,
  },
  {
    type: "Social",
    name: "Cuddle a Pet",
    durationMinutes: 15,
  },
  {
    type: "Social",
    name: "Mail a Card or Letter",
    durationMinutes: 30,
  },
  {
    type: "Social",
    name: "Go to a Game Night",
    durationMinutes: 120,
  },
];

db.SystemActivity.remove({})
  .then(() => db.SystemActivity.collection.insertMany(activitySeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
