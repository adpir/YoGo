const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yogodb");

const activitySeed = [
  {
    type: "mind",
    name: "Journal",
    description:
      "Take some time to journal. Share your thoughts or document your feelings.",
    durationMinutes: 15,
  },
  {
    type: "mind",
    name: "Read a Book",
    description: "Read a new book or just read something that you enjoy.",
    durationMinutes: 60,
  },
  {
    type: "mind",
    name: "Meditate",
    durationMinutes: 5,
  },
  {
    type: "mind",
    name: "Unplug",
    description:
      "Turn off or silence your phone and disconnect from your tech.",
    durationMinutes: 120,
  },
  {
    type: "mind",
    name: "Draw",
    description: "Doodle or draw what's in your mind or around you.",
    durationMinutes: 30,
  },
  {
    type: "mind",
    name: "Read Poetry",
    description: "Read some new poetry or something that brings you comfort.",
    durationMinutes: 30,
  },
  {
    type: "body",
    name: "Go for a walk/Get outside",
    description: "Take a journey around the neighborhood.",
    durationMinutes: 30,
  },
  {
    type: "body",
    name: "Dance",
    description: "Turn on some music and just let loose.",
    durationMinutes: 15,
  },
  {
    type: "body",
    name: "Take a Nap",
    description: "Find a comfy spot and catch some zzz’s.",
    durationMinutes: 60,
  },
  {
    type: "body",
    name: "Stretch",
    durationMinutes: 10,
  },
  {
    type: "body",
    name: "Drink Water",
    durationMinutes: 1,
  },
  {
    type: "social",
    name: "Call a Friend",
    durationMinutes: 15,
  },
  {
    type: "social",
    name: "Go Out to Lunch",
    durationMinutes: 90,
  },
  {
    type: "social",
    name: "Visit a Museum",
    durationMinutes: 120,
  },
  {
    type: "social",
    name: "Cuddle a Pet",
    durationMinutes: 15,
  },
  {
    type: "social",
    name: "Mail a Card or Letter",
    durationMinutes: 30,
  },
  {
    type: "social",
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
