const Express=require('express');
const fetch=require('node-fetch');
require('dotenv').config();
const app=Express();
const router=Express.Router();
const api_key=process.env.API_KEY;
const api_key_data=`https://api.data.gov.in/resource/aef46eab-6704-4d5b-bdc4-6b79e43faf74?api-key=${api_key}&format=json&offset=0&limit=100`;

router.get('/',(req,res,next)=>{
    fetch(api_key_data)
    .then(response=>{
    return response.json();
    })
    .then(data=>{
        res.render('../views/defaultindex',{

        });    
    })
    .catch(err=>{
        console.log(err);
    });
});

module.exports=router;