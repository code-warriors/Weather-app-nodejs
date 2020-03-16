const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

const publicFolderPath = path.join(__dirname, '../public');
const partialPath = path.join(__dirname,'../templates/partials');
console.log(partialPath)

//setup handlebars
app.set('views',path.join(__dirname,'../templates/views'));
app.set('view engine','hbs');
hbs.registerPartials(partialPath);

//setup the static directory
app.use(express.static(publicFolderPath));


//Setup the routing configuration
app.get('/',(req,res)=>{
    res.render('index',
    {
        name:'pawan',
        lastname:'bisht',
        title:'Home Page',
        footer:'Home Page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',
    {
        title:'About Page',
        footer:'About Page'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',
    {
        title:'Help page',
        type:'help for contact',
        email:'help@gmail.com',
        footer:'help page'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('pageNotFound',{
        title:'404',
        error:'Help article Page Not Found'
    });
})


app.get('/query/:id',(req,res)=>{
    if(req.query.search)
    {
        console.log(req.query);
        console.log(req.params);
        res.send({
            search:req.query.search
        })
    }
    else
    {
        res.send({
            errorMsg:"U must have to provide the search place"
        })
    }
    
})


app.get('/product',(req,res)=>{
    console.log(req.query);
})

app.get('*',(req,res)=>{
    res.status(404);
    res.render('pageNotFound',{
        title:'404',
        error:'Page Not Found'
    });
})


//Setup the server
app.listen('3000',()=>{
    console.log("Server Running at : 3000")
})