exports.get = async (req, res, Employee) => {
  try {
    const employees = await Employee.find();
    return res.send(employees);
  } catch (err) {
    console.log(err);
  }
};
