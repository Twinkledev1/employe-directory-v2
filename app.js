import express from "express";
import employeesRouter from "./api/employees.js";

const app = express();

// Body parsing middleware for JSON requests
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Mount the employees router at /employees
app.use("/employees", employeesRouter);

// Catch-all error-handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
