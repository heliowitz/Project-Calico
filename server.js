const express = require('express')
const app = express()  
const port = 3000

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

var projectTileData = [
	{
		tileImg:[
			"./assets/projectImgs/Fitbit/1.png",
			"./assets/projectImgs/Fitbit/2.png",
			"./assets/projectImgs/Fitbit/3.png"
		],
		projName:"Fitbit",
		projType:"Desktop Client",
		tag:"fitbit"
	},
	{
		tileImg:[
			"./assets/projectImgs/Schulich/1.png",
			"./assets/projectImgs/Schulich/2.png",
			"./assets/projectImgs/Schulich/3.png"
		],
		projName:"Schulich Dentistry",
		projType:"Data Analysis Client",
		tag:"schulich"
	},
	{
		tileImg:[
			"./assets/projectImgs/GraphicDesigners/1.png",
			"./assets/projectImgs/GraphicDesigners/2.png",
			"./assets/projectImgs/GraphicDesigners/3.png"
		],
		projName:"Graphic Designers",
		projType:"Website",
		tag:"graphic"
	},
	{
		tileImg:[
			"./assets/projectImgs/Movies/1.png",
			"./assets/projectImgs/Movies/2.png",
			"./assets/projectImgs/Movies/3.png"
		],
		projName:"Movies DB",
		projType:"MySQL Database Client",
		tag:"movies"
	},
	{
		tileImg:[
			"./assets/projectImgs/TCP/1.png",
			"./assets/projectImgs/TCP/2.png"
		],
		projName:"TCP Packet Guaranteed",
		projType:"Client / Server Program",
		tag:"tcp"
	},
	{
		tileImg:[
			"./assets/projectImgs/Pacman/1.png"
		],
		projName:"Pacman AI",
		projType:"Minimax Agent",
		tag:"pacman"
	},
	{
		tileImg:[
			"./assets/projectImgs/Asteroids/1.png",
			"./assets/projectImgs/Asteroids/2.png",
			"./assets/projectImgs/Asteroids/3.png"
		],
		projName:"Asteroids",
		projType:"Java Game",
		tag:"asteroids"
	},
	{
		tileImg:[
			"./assets/projectImgs/OuterSpace/1.png",
			"./assets/projectImgs/OuterSpace/2.png",
			"./assets/projectImgs/OuterSpace/3.png"
		],
		projName:"Outer Space",
		projType:"Java Simulation",
		tag:"simulation"
	},
	{
		tileImg:[
			"./assets/projectImgs/PersonalSite/1.png",
			"./assets/projectImgs/PersonalSite/2.png",
			"./assets/projectImgs/PersonalSite/3.png"
		],
		projName:"Personal Site",
		projType:"Website",
		tag:"website"
	},
	{
		tileImg:[
			"./assets/projectImgs/Lists/1.png"
		],
		projName:"Lists",
		projType:"Web App",
		tag:"lists"
	}
];

app.get('/', function(req, res) {
    res.render('pages/index.ejs', {
    	data:projectTileData
    });
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})