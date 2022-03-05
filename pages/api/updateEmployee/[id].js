import Employee from "../../../models/employee";
import createHandler from "../../../mongoose/createHandler";

const handler = createHandler();

handler.put(async (req, res) => {
    await updateEmployee(req, res)
});


const updateEmployee = async (req, res) => {
    let { id } = req.query;
    let { name, age, salary } = req.body;
    console.log('req.query', req.query);
    try {
        const updatedEmployee = await Employee.findOneAndUpdate(
            { _id: id },
            { $set: { name:name, age:age, salary:salary } },
            { new: true },
        )
        res.status(201).json(updatedEmployee)

    } catch (error) {
        console.log('error', error)
    }
}

export default (req, res) => handler.run(req, res)