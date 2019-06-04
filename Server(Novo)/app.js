const app = require('./config/server.js');
const port = 3001;

app.listen(port,()=>{
	console.log("Servidor localhost: " + port);
})