const { Task } = require('../models'); // adjust path if needed
const sequelize = require('../config/db'); // optional, just for testing connection

async function seedTasks() {
  try {
    await sequelize.authenticate(); // test connection
    console.log('Database connected');

    const tasks = [
      {
        title: "Finish Lab 06",
        description: "Complete Sequelize ORM implementation",
        completed: "pending"
      },
      
      {
        title: "Test CRUD Routes",
        description: "Verify GET, PUT, DELETE using Postman",
        completed: "pending"
      },
      {
        title: "Refactor Code",
        description: "Replace raw SQL with Sequelize methods",
        completed: "in-progress"
      },
      {
        title: "Prepare Presentation",
        description: "Prepare slides for Lab 06 demonstration",
        completed: "completed"
      }
    ];

    await Task.bulkCreate(tasks);
    console.log('Tasks inserted successfully!');
    process.exit(0); // exit after done
  } catch (err) {
    console.error('Error seeding tasks:', err);
    process.exit(1);
  }
}

seedTasks();
