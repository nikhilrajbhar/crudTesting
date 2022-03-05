import mongoose from 'mongoose';

const dbConnectionString = process.env.MONGO_STRING;
const databaseMiddleware = async (req, res, next) => {
    try {
        if (!global.mongoose) {
            console.log("trying......to connect..........");
            global.mongoose = await mongoose.connect(dbConnectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
        console.log("connected");
        return next();

    } catch (ex) {
        console.log("not connected");
        console.log(ex);

    }
}
export default databaseMiddleware;