const Express=require('express');
const controller=require('./controller/controller');
const defaultController=require('./controller/defaultcontroller');
const app=Express();

const port=process.env.PORT || 3000;
app.set('view engine','ejs');
app.set('views','views');
app.use(controller);
app.use('/',defaultController);
app.use(Express.static('public'));
app.listen(port,()=>{
    console.log(`starting server at port ${port}...`);
});



