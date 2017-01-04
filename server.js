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
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Schulich Dentistry",
		projType:"Data Analysis Client",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Graphic Designers",
		projType:"Website",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Movies DB",
		projType:"MySQL Database Client",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"TCP Packet Guaranteed",
		projType:"Client / Server Program",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Pacman AI",
		projType:"Minimax Agent",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Asteroids",
		projType:"Java Game",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Outer Space",
		projType:"Java Simulation",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Personal Site",
		projType:"Website",
		tileIcon:""
	},
	{
		tileImg:[
			"./assets/projectImgs/test/test1.png",
			"./assets/projectImgs/test/test2.png",
			"./assets/projectImgs/test/test3.png"
		],
		projName:"Personal Site",
		projType:"Website",
		tileIcon:""
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