const app = require("./app");
const connectDatabase=require('./database/connection')
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT || 8000







// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

// Connecting to server
const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
  });

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });