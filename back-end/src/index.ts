import { app } from "./app";

const start = async() =>{
    console.log('starting up.....!!!!!');

    app.listen(3000, () => {
        console.log('Listening on port 3000!!!!');
      });
    }
    
    start()
    
    