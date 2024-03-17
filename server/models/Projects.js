const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Projects = model('Projects', projectSchema);

module.exports = Projects;
