const express = require('express')
const app = express()  
const port = 3000

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

var projectTileData = [
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Fitbit",
		projType:"Desktop Client",
		tileIcon:"",
		tag:"fitbit"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Schulich Dentistry",
		projType:"Data Analysis Client",
		tileIcon:"",
		tag:"schulich"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Graphic Designers",
		projType:"Website",
		tileIcon:"",
		tag:"graphic"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Movies DB",
		projType:"MySQL Database Client",
		tileIcon:"",
		tag:"movies"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"TCP Packet Guaranteed",
		projType:"Client / Server Program",
		tileIcon:"",
		tag:"tcp"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Pacman AI",
		projType:"Minimax Agent",
		tileIcon:"",
		tag:"pacman"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Asteroids",
		projType:"Java Game",
		tileIcon:"",
		tag:"asteroids"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Outer Space",
		projType:"Java Simulation",
		tileIcon:"",
		tag:"simulation"
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Personal Site",
		projType:"Website",
		tileIcon:"",
		tag:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Lists",
		projType:"Web App",
		tileIcon:"",
		tag:""
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