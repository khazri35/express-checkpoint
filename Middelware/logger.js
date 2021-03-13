const date= new Date();
const hour= date.getHours();
const day = date.getDay();


const logger= (req, res, next )=>{
    if(day!== 0 && day!== 6 && hour >=9 && hour < 17)
    {
        next()
    }
    else {res.send("Sorry, the web application is only available in working time (Monday to Friday,  from 9 to 17) ")}
            
    }

    module.exports= logger;