// INDEX.JS
$(window).on('load', function(){
	$('body').addClass('loaded');

	$('.grid').masonry({
		itemSelector: '.tile', 
		columnWidth: 420, 
		isFitWidth: true
	});
	// ABOUT
	$('#About').click(function(){
		if ($('body').hasClass('overlayShow') && $('body').hasClass('aboutShow')){ // Hide
			$('body').addClass('aboutHide');
			$('body').removeClass('aboutShow');

			$('body').addClass('overlayHide');
			$('body').removeClass('overlayShow');

			$('body').removeClass('aboutFocus');
			$('body').removeClass('aboutHidden');
			$('body').removeClass('projectsFocus');
			$('body').removeClass('projectsHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
		} 
		else {
			if ($('body').hasClass('projectsShow')){ // Switch from Projects
				$('body').addClass('projectsHide');
				$('body').removeClass('projectsShow');

				$('body').removeClass('projectsFocus');
				$('body').removeClass('aboutHidden');

				$('body').addClass('aboutFocus');
				$('body').addClass('projectsHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');

				$('body').addClass('aboutFocus');
				$('body').addClass('projectsHidden');
				}
				$('body').addClass('aboutShow');
				$('body').removeClass('aboutHide');			
		}	
	});
	// Projects
	$('#Projects').click(function(){
		if ($('body').hasClass('overlayShow') && $('body').hasClass('projectsShow')){ // Hide
			$('body').addClass('projectsHide');
			$('body').removeClass('projectsShow');

			$('body').addClass('overlayHide');
			$('body').removeClass('overlayShow');

			$('body').removeClass('aboutFocus');
			$('body').removeClass('aboutHidden');
			$('body').removeClass('projectsFocus');
			$('body').removeClass('projectsHidden');

			$('body').addClass('aboutDefault');
			$('body').addClass('projectsDefault');
		} 
		else {
			if ($('body').hasClass('aboutShow')){ // Switch from About
				$('body').addClass('aboutHide');
				$('body').removeClass('aboutShow');

				$('body').removeClass('aboutFocus');
				$('body').removeClass('projectsHidden');

				$('body').addClass('projectsFocus');
				$('body').addClass('aboutHidden');

			} else { // Show
				$('body').addClass('overlayShow');
				$('body').removeClass('overlayHide');

				$('body').removeClass('aboutDefault');
				$('body').removeClass('projectsDefault');

				$('body').addClass('aboutHidden');
				$('body').addClass('projectsFocus');
			}
			$('body').addClass('projectsShow');
			$('body').removeClass('projectsHide');	
		}	
	});
});

// PROJECTS.JS
function showInfo(proj){
	var id = "#"+proj;
	$('#projectGrid').fadeOut(200);
	$(id).fadeIn(200);
}
function hideInfo(proj){
	var id = "#"+proj;
	$('#projectGrid').fadeIn(200, function(){
		$('.grid').masonry({
			itemSelector: '.tile', 
			columnWidth: 420, 
			isFitWidth: true
		});
	});
	$(id).fadeOut(200);
}

// BACKGROUND.JS
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
	createScene();
	createLights();
	createSea();
	createSky();
	runAnim=true;
	isPlay=true;
	loop();
}
var scene,
		camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
		renderer, container;

function createScene() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	scene = new THREE.Scene();

	scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
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
	
	camera.position.x = 0;
	camera.position.z = 200;
	camera.position.y = 100;
	
	renderer = new THREE.WebGLRenderer({ 
		alpha: true, 
		antialias: true 
	});
	renderer.setSize(WIDTH, HEIGHT);
	renderer.shadowMap.enabled = true;
	
	container = document.getElementById('world');
	container.appendChild(renderer.domElement);
	
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
	hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9) 
	shadowLight = new THREE.DirectionalLight(0xffffff, .9);
	shadowLight.position.set(150, 350, 350);
	shadowLight.castShadow = true;
	shadowLight.shadow.camera.left = -400;
	shadowLight.shadow.camera.right = 400;
	shadowLight.shadow.camera.top = 400;
	shadowLight.shadow.camera.bottom = -400;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;
	shadowLight.shadow.mapSize.width = 2048;
	shadowLight.shadow.mapSize.height = 2048;
	
	scene.add(hemisphereLight);  
	scene.add(shadowLight);

	ambientLight = new THREE.AmbientLight(0xdc8874, .5);
	scene.add(ambientLight);
}
Sea = function(){
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
var sea;
function createSea(){
	sea = new Sea();
	sea.mesh.position.y = -575;
	scene.add(sea.mesh);
}
Cloud = function(){
	this.mesh = new THREE.Object3D();
	var geom = new THREE.BoxGeometry(20,20,20);
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.white,  
	});
	var nBlocs = 3+Math.floor(Math.random()*10);
	for (var i=0; i<nBlocs; i++ ){
		var m = new THREE.Mesh(geom, mat); 
		m.position.x = i*15;
		m.position.y = Math.random()*10;
		m.position.z = Math.random()*10;
		m.rotation.z = Math.random()*Math.PI*2;
		m.rotation.y = Math.random()*Math.PI*2;
		var s = .1 + Math.random()*.9;
		m.scale.set(s,s,s);
		m.castShadow = true;
		m.receiveShadow = true;
		this.mesh.add(m);
	} 
}
Sky = function(){
	this.mesh = new THREE.Object3D();
	this.nClouds = 20;
	var stepAngle = Math.PI*2 / this.nClouds;
	for(var i=0; i<this.nClouds; i++){
		var c = new Cloud();
		var a = stepAngle*i; // this is the final angle of the cloud
		var h = 750 + Math.random()*200; // this is the distance between the center of the axis and the cloud itself
		c.mesh.position.y = Math.sin(a)*h;
		c.mesh.position.x = Math.cos(a)*h;
		c.mesh.rotation.z = a + Math.PI/2;
		c.mesh.position.z = -400-Math.random()*400;
		var s = 1+Math.random()*2;
		c.mesh.scale.set(s,s,s);
		this.mesh.add(c.mesh);  
	}  
}
var sky;
function createSky(){
	sky = new Sky();
	sky.mesh.position.y = -475;
	scene.add(sky.mesh);
}
renderer.render(scene, camera);
function loop(){
	if (!isPlay) return;
	sea.mesh.rotation.z += .001;
	sky.mesh.rotation.z += .001;
	renderer.render(scene, camera);
	requestAnimationFrame(loop);
}
function stop(){
	console.log("stop");
	renderer.render(scene, camera);
	requestAnimationFrame(stop);
}
function start(){
	runAnim=true;
	console.log("Started?");
	loop();
}