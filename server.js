const express = require('express')
const app = express()  
const port = 3000

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

var projectTileData = [
	{
		tileImg:[
			"./assets/projectImgs/Leonardo/1.png",
		],
		projName:"Leonardo App Store",
		projType:"App Store",
		tag:"leonardo",
		github:"",
		link:"http://support.leonardo.com/hc/en-us/articles/225619607-Vizlly-August-2016-Release-Details",
		stack:"MEAN Stack, MySQL, Java, CSS (Boostrap, LESS), JS",
		about:[
			"Worked with an agile scrum team to design, develop, test, and launch Leonardo’s first app store.",
			"Worked with design and architecture teams to refactor existing code to better follow internal standards and improve efficiency.",
			"Performed debugging, code reviewing, and bug fixing for several Leonardo software applications.",
			"Created automation scripts for unit testing features in Jasmine and Karma."
		],
		notes:[
			"Was done while working for Leonardo Worldwide Corporation as a full stack software engineering intern."
		],
		timeout: 7000
	},
	{
		tileImg:[
			"./assets/projectImgs/Fitbit/1.png",
			"./assets/projectImgs/Fitbit/2.png",
			"./assets/projectImgs/Fitbit/3.png",
			"./assets/projectImgs/Fitbit/4.png"
		],
		projName:"Fitbit",
		projType:"Desktop Client",
		tag:"fitbit",
		github:"",
		link:"https://www.youtube.com/watch?v=xBEWqx16H2U&t=40s",
		stack:"Java, Swing",
		about:[
			"Developed a desktop client for Fitbit users in the Western U Computer Science Department. The client uses Fitbit API to display data, set goals, track progress, and earn trophies. ",
			"Worked with Fitbit customers to gather requirements, designed mockups, and wrote unit and integration tests.",
			"Oversaw aspects of UI design and implementation, and developed key aspects of program logic.",
			"Was chosen by the faculty judges as the best client built. "
		],
		notes:[
			"One of the first times not simply working in a team environment, but working closely with a series of clients. Learned to develop beyond one’s own whims, but rather to fulfil a need."
		],
		timeout: 7000
	},
	{
		tileImg:[
			"./assets/projectImgs/Schulich/1.png",
			"./assets/projectImgs/Schulich/2.png",
			"./assets/projectImgs/Schulich/3.png",
			"./assets/projectImgs/Schulich/4.png"
		],
		projName:"Schulich Dentistry",
		projType:"Data Analysis Client",
		tag:"schulich",
		github:"https://github.com/heliowitz/Schulich-Dentistry",
		link:"",
		stack:"C++, QT",
		about:[
			"Built upon an Excel desktop client for the Schulich School of Dentistry to analyze and present Excel data.",
			"Worked directly with clients (Schulich Dentistry Faculty) to determine requirements and use cases.",
			"Oversaw a complete UI overhaul, minimizing whitespace, and implementing a tabbing system for multiple data files. "
		],
		notes:[
			"Team had a big emphasis on code design: most of the legwork was done in ensuring that legacy code was refactored to be more cohesive, with reduced coupling. ",
			"Also restructured elements of the program to ensure greater reusability and modularity, making it easier for future development. "
		],
		timeout: 11000
	},
	{
		tileImg:[
			"./assets/projectImgs/GraphicDesigners/1.png",
			"./assets/projectImgs/GraphicDesigners/2.png",
			"./assets/projectImgs/GraphicDesigners/3.png",
			"./assets/projectImgs/GraphicDesigners/4.png"
		],
		projName:"Graphic Designers",
		projType:"Website",
		tag:"graphic",
		github:"https://github.com/heliowitz/Graphic-Designers",
		link:"http://publish.uwo.ca/~yding96/index.html",
		stack:"HTML, CSS (Bootstrap), JS (JQuery)",
		about:[
			"Built a website to showcase the styles and impacts of famous graphic designers.",
			"Was selected as one of the best websites created in the class, and is currently used as a model of success for 2nd year web students. "
		],
		notes:[
			"A good way to explore how designers worked, and took their lessons to heart in future project designs."
		],
		timeout: 12000
	},
	{
		tileImg:[
			"./assets/projectImgs/Movies/1.png",
			"./assets/projectImgs/Movies/2.png",
			"./assets/projectImgs/Movies/3.png",
			"./assets/projectImgs/Movies/4.png",
			"./assets/projectImgs/Movies/5.png"
		],
		projName:"Movies DB",
		projType:"MySQL Database Client",
		tag:"movies",
		github:"https://github.com/heliowitz/Movies-DB",
		link:"",
		stack:"MySQL, Python, HTML, CSS (Bootstrap), JS (JQuery)",
		about:[
			"Developed an IMDb-style database client that allows different users (staff, customers, etc.) to access or manipulate certain aspects of the data.",
			"Designed and implemented a modern UI using Bootstrap and JQuery.",
			"Used a MySQL Community Server and Flask to implement backend functionality."
		],
		notes:[
			"Used Vagrant to ensure that all code worked on an isolated linux environment.",
			"Practiced principles of relational database design and security (parameterized queries, etc.)."
		],
		timeout: 8000
	},
	{
		tileImg:[
			"./assets/projectImgs/Asteroids/1.png",
			"./assets/projectImgs/Asteroids/2.png",
			"./assets/projectImgs/Asteroids/3.png"
		],
		projName:"Asteroids",
		projType:"Java Game",
		tag:"asteroids",
		github:"https://github.com/heliowitz/Asteroids",
		link:"",
		stack:"Java, Greenfoot, Illustrator",
		about:[
			"Developed a version of the classic arcade game Asteroids, with additional implemented features (power-ups, enemies, shields, etc.).",
			"Created original sprites and graphics using Adobe Illustrator."
		],
		notes:[
			"An introduction to game-design. Was a great personal outlet for creativity."
		],
		timeout: 10000
	},
	{
		tileImg:[
			"./assets/projectImgs/Pacman/1.png",
			"./assets/projectImgs/Pacman/2.png"
		],
		projName:"Pacman AI",
		projType:"Minimax Agent",
		tag:"pacman",
		github:"https://github.com/heliowitz/Pacman-AI",
		link:"",
		stack:"Python",
		about:[
			"Implemented a Pacman AI agent using minimax decision-making, that successfully beats the game 100% of the time.",
			"Created custom heuristics with alpha-beta pruning to allow for deeper minimax search depth without sacrificing time complexity."
		],
		notes:[
			"Eager to edit this program to experiment with certain learning agents rather than simple utility or goal-based agents (q-learning, etc.)."
		],
		timeout: 9000
	},
	{
		tileImg:[
			"./assets/projectImgs/OuterSpace/1.png",
			"./assets/projectImgs/OuterSpace/2.png",
			"./assets/projectImgs/OuterSpace/3.png",
			"./assets/projectImgs/OuterSpace/4.png"
		],
		projName:"Outer Space",
		projType:"Java Simulation",
		tag:"simulation",
		github:"https://github.com/heliowitz/Outer-Space",
		link:"",
		stack:"Java, Greenfoot",
		about:[
			"Developed a planetary program that tracked and simulated planets of development and space. Used a physics engine to track orbiting and gravitational pull between objects."
		],
		notes:[
			"The first time working in a group taught me how to build projects in a team environment.",
			"Led a team of 4 from ideation to final execution, delegating tasks and modules to different members of the team."
		],
		timeout: 13000
	},
	{
		tileImg:[
			"./assets/projectImgs/PersonalSite/1.png",
			"./assets/projectImgs/PersonalSite/2.png",
			"./assets/projectImgs/PersonalSite/3.png",
			"./assets/projectImgs/PersonalSite/4.png"
		],
		projName:"Personal Site",
		projType:"Website",
		tag:"website",
		github:"https://github.com/heliowitz/Personal-Site-Old",
		link:"",
		stack:"HTML (EJS), CSS (Bootstrap), JS (JQuery)",
		about:[
			"Developed a personal website to showcase personal projects.",
			"Significantly improved from last year’s implementation."
		],
		notes:[
			"Switched from plain static HTML to Node with Express and EJS templating.",
			"Focused much more on optimization of CSS and JS delivery.",
			"Deploying a Node application led to exploring various tools and concepts in the world of devops.",
			"Looking to refactor into classic MVC using Angular or Virtual DOM using React as a next step."
		],
		timeout: 6000
	}
];

app.get('/', function(req, res) {
    res.render('pages/index.ejs', {
    	data:projectTileData
    });
});

app.listen(process.env.PORT || 3000, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})