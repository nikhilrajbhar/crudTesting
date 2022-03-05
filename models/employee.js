import mongoose from 'mongoose';
// const { ObjectId } = mongoose.Schema.Types;

const employeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    salary: {
        type: Number
    },
    profile: {
        type: String
    }

});

export default mongoose.models.employee || mongoose.model('employee', employeeSchema);