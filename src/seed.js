const db = require("./config/db");

const tasks = [
  { title: 'Setup MySQL', description: 'Install MySQL, create taskdb, and add taskuser.', status: 'pending' },
  { title: 'Install mysql2', description: 'Add mysql2 and create a promise-based connection pool.', status: 'pending' },
  { title: 'Create table', description: 'Write the SQL schema for the tasks table.', status: 'pending' },
  { title: 'Build CRUD', description: 'Implement full CRUD routes using raw SQL queries.', status: 'pending' },
  { title: 'Test API', description: 'Use Postman to test routes and verify persistence.', status: 'pending' },
  { title: 'Add validation', description: 'Validate request body fields before inserting into the database.', status: 'pending' },
  { title: 'Add pagination', description: 'Implement page and limit query parameters for GET tasks.', status: 'pending' },
  { title: 'Handle errors', description: 'Create unified error responses for database and router issues.', status: 'pending' },
  { title: 'Improve structure', description: 'Organize project folders for routes, config, and controllers.', status: 'pending' },
  { title: 'Write report', description: 'Prepare the brief report comparing in-memory vs MySQL storage.', status: 'pending' },
  { title: 'Setup dotenv', description: 'Configure environment variables using dotenv package.', status: 'in-progress' },
  { title: 'Create README', description: 'Add project description and instructions in README.md.', status: 'completed' },
  { title: 'Setup Git', description: 'Initialize git repository and push to GitHub.', status: 'completed' },
  { title: 'Install ESLint', description: 'Add ESLint for consistent code style.', status: 'in-progress' },
  { title: 'Add logger', description: 'Integrate simple logging for debugging purposes.', status: 'in-progress' }
];

async function seed() {
  try {
    for (const task of tasks) {
      // Check if task already exists
      const [rows] = await db.query('SELECT id FROM tasks WHERE title = ?', [task.title]);
      if (rows.length === 0) {
        await db.query(
          'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
          [task.title, task.description, task.status]
        );
        console.log(`Inserted task: ${task.title}`);
      } else {
        console.log(`Task already exists: ${task.title}`);
      }
    }
    console.log('Seeding completed.');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
