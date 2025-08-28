import express from "express";
import employees from "#db/employees";

const employeesRouter = express.Router();

// GET /employees - returns all employees
employeesRouter.get("/", (req, res) => {
  res.json(employees);
});

// GET /employees/random - returns a random employee
// Note: This route must come BEFORE /:id to avoid "random" being treated as an ID
employeesRouter.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// GET /employees/:id - returns a specific employee by ID
employeesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  
  // req.params are always strings, so we need to convert `id` into a number
  const employee = employees.find((e) => e.id === +id);
  
  if (!employee) {
    return res.status(404).send("Employee not found");
  }
  
  res.json(employee);
});

// POST /employees - creates a new employee
employeesRouter.post("/", (req, res) => {
  // Check if request body exists
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send("Request body is required");
  }
  
  // Check if name is provided and not empty
  if (!req.body.name || req.body.name.trim() === "") {
    return res.status(400).send("Name is required");
  }
  
  // Generate unique ID (using the highest existing ID + 1)
  const maxId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) : 0;
  const newEmployee = {
    id: maxId + 1,
    name: req.body.name.trim()
  };
  
  // Add the new employee to the array
  employees.push(newEmployee);
  
  // Return the new employee with status 201
  res.status(201).json(newEmployee);
});

export default employeesRouter;