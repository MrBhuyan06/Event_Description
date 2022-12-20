const app = require('./app.js')

const {PORT}= process.env || 4000

app.listen(PORT,(req, res)=>
{
   console.log(`server is running at http://localhost:${PORT}/api/v1`);
})