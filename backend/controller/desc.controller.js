const Event=require('../models/event.schema.js')

// home route

exports.home=(req, res)=>
{
    res.send('Welcome user')
}

// event add

exports.addEvent= async (req, res)=>
{
   try {
    const {eventname,eventlink}=req.body
   if(!(eventname && eventlink))
   {
    throw new Error("eventname and eventlink are required")
   }
   
//    const extEvent= await eventSchema.findOne({e_link:eventlink})

//    if(extEvent)
//    {
//     throw new Error("eventlink is Already Exists")
//    }
   
   // insert into database
   const events= await event.create(
    {
     eventname,
     eventlink
    }
   )

   res.status(200).json({
    success:true,
    events
   })




   } catch (error) {
    console.log("Error in save into database ", error);
   }

}

// getEvent

exports.getEvent= async (req, res) =>
{
    try 
    {
    const events= await event.find()
    res.status(200).json({
        success:true,
        events
       })  
    } 
    catch (error) {
        console.log(error);
        res.json({
          success:false,
          message:error.message
        })
    }
}


// edit route
exports.editEvent= async (req, res) =>
{
    try {
      
       const events= await Event.findByIdAndUpdate(req.params.id, req.body);
       res.status(201).json({
        success:true,
        message:'event sucessFully update',
        
       })
  
    } 
    
    
    
    
    catch (error) {
        console.log(error);
    res.status(201).json({
      success:false,
      message:error.message
    })
    }
}

// delete User

exports.deleteEvent= async (req, res) =>
{
   try {
    const events= await Event.findByIdAndDelete(req.params.id)
    res.status(201).json({
        success:true,
        message:'event sucessFully delete'
       })
   } catch (error) {
    console.log(error);
    res.status(201).json({
      success:false,
      message:error.message
    })
   }
}