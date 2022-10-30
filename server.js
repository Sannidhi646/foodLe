const express=require("express");
const bodyParser=require("body-parser");

// const showFunction=require("./location")
var deli=[{
    latitude: 30, longitude: 100
},
{
    latitude: 13, longitude: 90
},
{
    latitude: 120, longitude: 120
},
{
    latitude: 200, longitude: 200
},
{
    latitude: 250, longitude: 250
}
]

const app=express();
app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res)  {
    res.sendFile(__dirname+"/index.html");
});

app.post("/postLocation", function (req, res)  {
    let user;
    console.log(req.body);
    user=req.body;

    var ulat=user.latitude;
    var ulong=user.longitude;
    var dist=1000000;
    var ind=-1;
    
    for(let i = 0; i<5; i++){
        let lat=deli[i].latitude;
        let lon=deli[i].longitude;
        var temp=((ulat-lat)*(ulat-lat))+((ulong-lon)*(ulong-lon));
        if(temp<dist){
           dist=temp;
           ind = i;
        }
    }
    console.log(deli[ind]);


    




});
app.post("/postLocation",function(res,req){
    res.send(deli[ind])
});




// app.post("/",function(req,res)
// {
// //    showFunction.getLocation();
// })


app.listen(3000,function(){
    console.log("server started on port 3000");
    
});
