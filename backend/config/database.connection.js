const mongoose=require('mongoose')

const {MONGODB_URL}=process.env
exports.connect=()=>
{
    mongoose.connect(MONGODB_URL).then((conn) =>
    {
        console.log(`Db is connected at ${conn.connection.host}`);
    })
    .catch((error) =>
    {
        console.log("db connnection error ", error)
        process.exit(1);
    })
}