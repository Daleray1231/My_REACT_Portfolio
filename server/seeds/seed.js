const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { Projects } = require('../models');

const techData = require('./projectData.json');

db.once('open', async () => {
  await cleanDB('Projects');

  await Projects.insertMany(techData);

  console.log('Projects seeded!');
  process.exit(0);
});
