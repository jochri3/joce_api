const Employee = require("../models/Employee");
const BASE_URI = "/api/employees";
const EmployeesController = require("../controllers/EmployeesController");
module.exports = app => {
  app.get(BASE_URI, (req, res) => {
    EmployeesController.get(req, res, Employee);
  });

  app.get(`${BASE_URI}/:id`, async ({ params: { id } }, res) => {
    try {
      const employee = await Employee.findById(id);
      if (employee) {
        return res.send(employee);
      }
      return res.json("Not found").status(404);
    } catch (err) {
      return res.json({ error: "Server error" }).status(500);
    }
  });

  app.post(`${BASE_URI}`, async ({ body }, res) => {
    try {
      const employee = new Employee(body);
      employee.save();
      return res.send(employee);
    } catch (err) {
      return res.send("Server error").status(500);
    }
  });

  app.put(`${BASE_URI}/:id`, async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (employee) {
        employee.update(req.body);
        return res.send("Update succesfull");
      } else {
        return res.json("Not found").status(404);
      }
    } catch (err) {
      return res.json("Server error").status(500);
    }
  });

  app.delete(`${BASE_URI}/:id`, async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (employee) {
        employee.delete();
        return res.send("Delection succesfull");
      } else {
        return res.json("Not found").status(404);
      }
    } catch (err) {
      return res.json("Server error").status(500);
    }
  });
};

// url : http://jojo.com/users/44444444
// uri :/users/4444444444
