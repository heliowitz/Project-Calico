var Colors = {
	red:0xf25346,
	white:0xFFFAF0,
	brown:0x59332e,
	pink:0xF5986E,
	brownDark:0x23190f,
	blue:0x68c3c0,
};
window.addEventListener('load', init, false);
var startButton = document.getElementById( 'startButtonId' );



function init() {
	
	// set up the scene, the camera and the renderer
	createScene();

	// add the lights
	createLights();

	// add the objects
	createSea();
	createSky();

	// start a loop that will update the objects' positions 
	// and render the scene on each frame
	runAnim=true;
	isPlay=true;
	loop();
}
// // Start Button
// startButton.onclick = function StartAnimation() {

// // Start and Pause 
// if (!runAnim) { 
// startButton.innerHTML = 'Pause';
// runAnim = true;
// isPlay = true;
// loop();
// } else {
//       startButton.innerHTML = 'Restart';
//       runAnim = false;
//       isPlay = false;
//       // stop();
// }
// }
var scene,
		camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
		renderer, container;

function createScene() {
	// Get the width and the height of the screen,
	// use them to set up the aspect ratio of the camera 
	// and the size of the renderer.
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;

	// Create the scene
	scene = new THREE.Scene();

	// Add a fog effect to the scene; same color as the
	// background color used in the style sheet
	scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
	
	// Create the camera
	aspectRatio = WIDTH / HEIGHT;
	fieldOfView = 60;
	nearPlane = 1;
	farPlane = 10000;
	camera = new THREE.PerspectiveCamera(
		fieldOfView,
		aspectRatio,
		nearPlane,
		farPlane
		);
	
	// Set the position of the camera
	camera.position.x = 0;
	camera.position.z = 200;
	camera.position.y = 100;
	
	// Create the renderer
	renderer = new THREE.WebGLRenderer({ 
		// Allow transparency to show the gradient background
		// we defined in the CSS
		alpha: true, 

		// Activate the anti-aliasing; this is less performant,
		// but, as our project is low-poly based, it should be fine :)
		antialias: true 
	});

	// Define the size of the renderer; in this case,
	// it will fill the entire screen
	renderer.setSize(WIDTH, HEIGHT);
	
	// Enable shadow rendering
	renderer.shadowMap.enabled = true;
	
	// Add the DOM element of the renderer to the 
	// container we created in the HTML
	container = document.getElementById('world');
	container.appendChild(renderer.domElement);
	
	// Listen to the screen: if the user resizes it
	// we have to update the camera and the renderer size
	window.addEventListener('resize', handleWindowResize, false);
}
function handleWindowResize() {
	// update height and width of the renderer and the camera
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
}
var hemisphereLight, shadowLight;

function createLights() {
	// A hemisphere light is a gradient colored light; 
	// the first parameter is the sky color, the second parameter is the ground color, 
	// the third parameter is the intensity of the light
	hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
	
	// A directional light shines from a specific direction. 
	// It acts like the sun, that means that all the rays produced are parallel. 
	shadowLight = new THREE.DirectionalLight(0xffffff, .9);

	// Set the direction of the light  
	shadowLight.position.set(150, 350, 350);
	
	// Allow shadow casting 
	shadowLight.castShadow = true;

	// define the visible area of the projected shadow
	shadowLight.shadow.camera.left = -400;
	shadowLight.shadow.camera.right = 400;
	shadowLight.shadow.camera.top = 400;
	shadowLight.shadow.camera.bottom = -400;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;

	// define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performant
	shadowLight.shadow.mapSize.width = 2048;
	shadowLight.shadow.mapSize.height = 2048;
	
	// to activate the lights, just add them to the scene
	scene.add(hemisphereLight);  
	scene.add(shadowLight);

	// an ambient light modifies the global color of a scene and makes the shadows softer
	ambientLight = new THREE.AmbientLight(0xdc8874, .5);
	scene.add(ambientLight);
}
// First let's define a Sea object :
Sea = function(){
	// var geom = new THREE.CylinderGeometry(600,600,800,40,10);
	// geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

	// // important: by merging vertices we ensure the continuity of the waves
	// geom.mergeVertices();

	// // get the vertices
	// var l = geom.vertices.length;

	// // create an array to store new data associated to each vertex
	// this.waves = [];

	// for (var i=0; i<l; i++){
	// 	// get each vertex
	// 	var v = geom.vertices[i];

	// 	// store some data associated to it
	// 	this.waves.push({y:v.y,
	// 									 x:v.x,
	// 									 z:v.z,
	// 									 // a random angle
	// 									 ang:Math.random()*Math.PI*2,
	// 									 // a random distance
	// 									 amp:5 + Math.random()*15,
	// 									 // a random speed between 0.016 and 0.048 radians / frame
	// 									 speed:0.016 + Math.random()*0.032
	// 									});
	// };
	// var mat = new THREE.MeshPhongMaterial({
	// 	color:Colors.blue,
	// 	transparent:true,
	// 	opacity:.8,
	// 	shading:THREE.FlatShading,
	// });

	// this.mesh = new THREE.Mesh(geom, mat);
	// this.mesh.receiveShadow = true;
	var geom = new THREE.SphereGeometry(600,35,35);
	geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
	var color = new THREE.Color("rgb(40,96,46)");
	var mat = new THREE.MeshPhongMaterial({
		color: Colors.brown,
		transparent:false,
		opacity:0.7,
		shading:THREE.FlatShading,
	});
	this.mesh = new THREE.Mesh(geom, mat);
	this.mesh.receiveShadow = true;
}


// Instantiate the sea and add it to the scene:

var sea;

function createSea(){
	sea = new Sea();

	// push it a little bit at the bottom of the scene
	sea.mesh.position.y = -575;

	// add the mesh of the sea to the scene
	scene.add(sea.mesh);
}
Cloud = function(){
	// Create an empty container that will hold the different parts of the cloud
	this.mesh = new THREE.Object3D();
	
	// create a cube geometry;
	// this shape will be duplicated to create the cloud
	var geom = new THREE.BoxGeometry(20,20,20);
	
	// create a material; a simple white material will do the trick
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.white,  
	});
	
	// duplicate the geometry a random number of times
	var nBlocs = 3+Math.floor(Math.random()*10);
	for (var i=0; i<nBlocs; i++ ){
		
		// create the mesh by cloning the geometry
		var m = new THREE.Mesh(geom, mat); 
		
		// set the position and the rotation of each cube randomly
		m.position.x = i*15;
		m.position.y = Math.random()*10;
		m.position.z = Math.random()*10;
		m.rotation.z = Math.random()*Math.PI*2;
		m.rotation.y = Math.random()*Math.PI*2;
		
		// set the size of the cube randomly
		var s = .1 + Math.random()*.9;
		m.scale.set(s,s,s);
		
		// allow each cube to cast and to receive shadows
		m.castShadow = true;
		m.receiveShadow = true;
		
		// add the cube to the container we first created
		this.mesh.add(m);
	} 
}
// Define a Sky Object
Sky = function(){
	// Create an empty container
	this.mesh = new THREE.Object3D();
	
	// choose a number of clouds to be scattered in the sky
	this.nClouds = 20;
	
	// To distribute the clouds consistently,
	// we need to place them according to a uniform angle
	var stepAngle = Math.PI*2 / this.nClouds;
	
	// create the clouds
	for(var i=0; i<this.nClouds; i++){
		var c = new Cloud();
	 
		// set the rotation and the position of each cloud;
		// for that we use a bit of trigonometry
		var a = stepAngle*i; // this is the final angle of the cloud
		var h = 750 + Math.random()*200; // this is the distance between the center of the axis and the cloud itself

		// Trigonometry!!! I hope you remember what you've learned in Math :)
		// in case you don't: 
		// we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
		c.mesh.position.y = Math.sin(a)*h;
		c.mesh.position.x = Math.cos(a)*h;

		// rotate the cloud according to its position
		c.mesh.rotation.z = a + Math.PI/2;

		// for a better result, we position the clouds 
		// at random depths inside of the scene
		c.mesh.position.z = -400-Math.random()*400;
		
		// we also set a random scale for each cloud
		var s = 1+Math.random()*2;
		c.mesh.scale.set(s,s,s);

		// do not forget to add the mesh of each cloud in the scene
		this.mesh.add(c.mesh);  
	}  
}

// Now we instantiate the sky and push its center a bit
// towards the bottom of the screen

var sky;

function createSky(){
	sky = new Sky();
	sky.mesh.position.y = -475;
	scene.add(sky.mesh);
}
renderer.render(scene, camera);
function loop(){
	if (!isPlay) return;
	// Rotate the propeller, the sea and the sky
	sea.mesh.rotation.z += .001;
	sky.mesh.rotation.z += .001;

	// render the scene
	renderer.render(scene, camera);

	// call the loop function again
	requestAnimationFrame(loop);
}
function stop(){
	console.log("stop");
	// for (i = 0; i<20; i++){
	// 	sea.mesh.rotation.z += 0.001-0.00005*i;
	// 	sky.mesh.rotation.z += 0.001-0.00005*i;
	// 	renderer.render(scene, camera);
	// }
	renderer.render(scene, camera);
	requestAnimationFrame(stop);
}
function start(){
	runAnim=true;
	console.log("Started?");
	loop();
}