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
    type: "mind",
    name: "Take a Moment",
    description: "Take a moment to think about some things you appreciate about yourself",
    durationMinutes: 2,
  },
  {
    type: "mind",
    name: "Breathe",
    description:
      "Take some time to do some deep breathing.",
    durationMinutes: 5,
  },
  {
    type: "mind",
    name: "Listen to Music",
    description:
      "Make a playlist or select one that will support your process today.",
    durationMinutes: 30,
  },
  {
    type: "mind",
    name: "Watch a Movie",
    description:
      "Find a movie that brings you joy or comfort",
    durationMinutes: 120,
  },
  {
    type: "body",
    name: "Go for a Walk/Get outside",
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
    type: "body",
    name: "Exercise",
    durationMinutes: 60,
  },
  {
    type: "body",
    name: "Go for a Run/Jog",
    durationMinutes: 20,
  },
  {
    type: "body",
    name: "Take a hot shower/bath",
    description: "Get clean and relax.",
    durationMinutes: 15,
  },
  {
    type: "body",
    name: "Try Yoga",
    durationMinutes: 20,
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
    name: "Cuddle a pet",
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
  {
    type: "social",
    name: "Have a Happy Hour with Friends",
    durationMinutes: 120,
  },
  {
    type: "social",
    name: "Share Some Affirmations",
    description: "Call a family member or a friend and share some positive statements with them.",
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
