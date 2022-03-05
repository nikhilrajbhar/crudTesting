import Employee from "../../../models/employee";
import createHandler from "../../../mongoose/createHandler";

const handler = createHandler();

handler.delete(async (req, res) => {
    await deleteEmployee(req, res)
});


const deleteEmployee = async (req, res) => {
    console.log('req.query', req.query);
    let { id } = req.query;
    try {
        await Employee.findByIdAndDelete({ _id: id })
        res.status(201).json({message:"Data Deleted"})

    } catch (error) {
        console.log('error', error)
    }
}

export default (req, res) => handler.run(req, res)