const mongoose=require('mongoose')

const eventSchema= mongoose.Schema(
    {
        eventname:
        {
            type:String,
            required:[true, "event tittle is required"],

        },
        eventlink:
        {
            type:String,
            required:[true, "link tittle is required"],
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('events', eventSchema)