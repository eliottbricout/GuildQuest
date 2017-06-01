var model = {
			  "biomeId": 1,
			  "type": "plain",
			  "buildings": [
			    {
			      "buildingId": 1,
			      "name": "Ville 1",
			      "x":350,  
			      "y":280,
			      "characters": [
			        {
			          "characterId": 1,
			          "name": "kadoc",
			          "type": 1
			        }
			      ]
			    },
			    {
			      "buildingId": 2,
			      "name": "Tour de guet",
			      "x":400,  
			      "y":400,
			      "characters": []
			    },
			    {
			      "buildingId": 3,
			      "name": "Tour de guet",
			      "x":700,  
			      "y":418,
			      "characters": []
			    },
			    {
			      "buildingId": 4,
			      "name": "Tour de guet",
			      "x":690,  
			      "y":170,
			      "characters": [
			        {
			          "characterId": 6,
			        }
			      ]
			    },
			    {
			      "buildingId": 5,
			      "type" : "donjondeglace",
			      "name": "Tour de guet",
			      "x":500,  
			      "y":550,
			      "characters": []
			    },
			    {
			      "buildingId": 6,
			      "name": "Tour de guet",
			      "type" : "ville",
			      "x":500,  
			      "y":350,
			      "characters": [			      ]
			    },
			    {
			      "buildingId": 7,
			      "name": "Tour de guet",
			      "x":500,  
			      "y":210,
			      "characters": [
			        {
			          "characterId": 4,
			          "name": "elcayote",
			          "type": 4
			        }]
			    },
			    {
			      "buildingId": 8,
			      "name": "Tour de guet",
			      "x":680,  
			      "y":300,
			      "characters": []
			    }
			  ],
			  "roads": [
			    {
			      "roadId": 1,
			      "building1": 1,
			      "building2": 2,
			      "characters": [
			        {
			          "characterId": 0,
			          "name": "elcayote",
			          "type": 0
			        }
			      ]
			    },
			    {
			      "roadId": 2,
			      "building1": 1,
			      "building2": 7
			    },
			    {
			      "roadId": 3,
			      "building1": 2,
			      "building2": 6
			    },
			    {
			      "roadId": 5,
			      "building1": 6,
			      "building2": 7
			    },
			    {
			      "roadId": 6,
			      "building1": 6,
			      "building2": 8,
			      "characters": [
			        {
			          "characterId": 2,
			          "name": "elcayote",
			          "type": 2
			        }
			      ]
			    },
			    {
			      "roadId": 7,
			      "building1": 7,
			      "building2": 4
			    },
			    {
			      "roadId": 8,
			      "building1": 7,
			      "building2": 8
			    },
			    {
			      "roadId": 9,
			      "building1": 4,
			      "building2": 8
			    },
			    {
			      "roadId": 10,
			      "building1": 8,
			      "building2": 3
			    },
			    {
			      "roadId": 11,
			      "building1": 3,
			      "building2": 5
			    },
			    {
			      "roadId": 12,
			      "building1": 2,
			      "building2": 5,
			      "characters": [
			        {
			          "characterId": 3,
			          "name": "elcayote",
			          "type": 3
			        }
			      ]
			    },
			    {
			      "roadId": 12,
			      "building1": 6,
			      "building2": 3,
			      "characters": [
			        {
			          "characterId": 5,
			          "name": "elcayote",
			          "type": 5
			        }
			      ]
			    }
			  ],
		      "characters": [
		        {
		          "characterId": 0,
		          "name": "steropes",
		          "level": "80",
		          "classe": "voleur",
		          "type": 0
		        },
		        {
		          "characterId": 1,
		          "name": "dridri95",
		          "level": "-10",
		          "classe": "barbare",
		          "type": 1
		        },
		        {
		          "characterId": 2,
		          "name": "floutch",
		          "level": "1",
		          "classe": "animal de compagnie",
		          "type": 2
		        },
		        {
		          "characterId": 3,
		          "name": "patton",
		          "level": "50",
		          "classe": "archer",
		          "type": 3
		        },
		        {
		          "characterId": 4,
		          "name": "coubrit",
		          "level": "30",
		          "classe": "paladin",
		          "type": 4
		        },
		        {
		          "characterId": 5,
		          "name": "elcayote",
		          "level": "100",
		          "classe": "mage",
		          "type": 5
		        },
		        {
		          "characterId": 6,
		          "name": "kadoc",
		          "level": "20",
		          "classe": "chaman",
		          "type": 6
		        }
		      ]
			}

var model2 = { biome : {
						img : "images/plain.jpg",
						nom : "plaine"
				      },
			  points : [{x:50,  y:50,  link:[1,2], characters:[true]},
					    {x:87,  y:150, link:[2,4]},
				 	    {x:100, y:75,  link:[3,4],ville:true},
					    {x:267, y:75,  link:[4]},
					    {x:280, y:170, link:[]}
					  ] 
			}

var img = 4;
var images = {};
var canvas;
var personnagecliquable = [];
var drag = {x:undefined,y:undefined};
var carte = {x:200,y:150};
var ctx;
$(document).ready(function(){
	loadimage ();
	window.addEventListener("mousemove", fonctionMove);
	window.addEventListener("mousedown", fonctionClicdown);
	window.addEventListener("mouseup", fonctionClicup);
	window.addEventListener("click", fonctionClic);
});

var fonctionClicdown = function(e) {
  var e = e || window.event;
   	console.log(e.button);

  if(e.button == 2){
  	  var positions = getMousePosition(e,canvas);
  	drag.x = positions[0];
  	drag.y = positions[1];
  }
}

var fonctionMove = function(e){
  	if(drag.x !== undefined && drag.y !== undefined){ 	
	console.log(drag);

  	  var positions = getMousePosition(e,canvas);
  	    console.log(positions[0] - drag.x);

  		carte.x += (positions[0] - drag.x)/20;
  		carte.y += (positions[1] - drag.y)/20;

  		if(carte.x < 0) carte.x = 0 ;
  		if(carte.y < 0) carte.y = 0 ;
  		if(carte.x > 500) carte.x = 500;
  		if(carte.y > 300) carte.y = 300;

  		drawPlateau(ctx,model,carte.x,carte.y);	
  	}
}

var fonctionClicup = function(e) {
  var e = e || window.event;
  var positions = getMousePosition(e,canvas);
  if(e.button == 2){
  	drag.x = undefined;
  	drag.y = undefined;
  }
}

var fonctionClic = function(e) {
  var e = e || window.event;
  var positions = getMousePosition(e,canvas);

  personnagecliquable.forEach(function(hitbox){
  	    if ( positions[0] > hitbox.x && positions[ 0 ] < hitbox.x+30 && positions[ 1 ] > hitbox.y  && positions[ 1 ] < hitbox.y+30) {
  	    	var perso = findPerso(hitbox.id);
    		alert(" nom : "+    perso.name +"\n niveau : "+ perso.level + "\n classe : "+perso.classe);
  		}
  });
}

var getOffsetPosition = function(obj){
    var offsetX = offsetY = 0;
 
    if (obj.offsetParent) {
        do {
            offsetX += obj.offsetLeft;
            offsetY += obj.offsetTop;
        } while(obj = obj.offsetParent);
    }
    return [offsetX,offsetY];
}
 
var getMousePosition = function(e,canvasElement){
    OFFSET = getOffsetPosition(canvasElement);
 
    mouse_x = (e.pageX || (e.clientX + document.body.scrollLeft +  document.documentElement.scrollLeft)) - OFFSET[0];
    mouse_y = (e.pageY || (e.clientY + document.body.scrollTop + document.documentElement.scrollTop)) - OFFSET[1];
 
    return [mouse_x,mouse_y];
}

function loadimage(){
	images.biomeimg = new Image();
	images.village = new Image();  
	images.perso = new Image();  
	images.donjondeglace= new Image();  
	
	images.biomeimg.src = 'images/biome/'+model.type+'.png';
	images.village.src = 'images/village2.png';
	images.perso.src = 'images/personnage/sprite.png';
	images.donjondeglace.src = 'images/Donjon_de_glace.png';

	images.village.onload = imageload;
	images.biomeimg.onload = imageload;
	images.perso.onload = imageload;
	images.donjondeglace.onload = imageload;
}

function imageload() {
	img--;
	if(img < 1){
		canvas = $("#map")[0];
    	ctx = canvas.getContext("2d");
  		drawPlateau(ctx,model,carte.x,carte.y);	
	}
}

function drawPlateau(ctx,model,x,y){
	ctx.drawImage(images.biomeimg,x,y,700,500,0, 0,700,500);
	model.roads.forEach(function(road){
		var building1 = model.buildings.find(function(element){
  			return element.buildingId === road.building1;
		})
		var building2 = model.buildings.find(function(element){
  			return element.buildingId === road.building2;
		})

		line(ctx,building1.x-carte.x,building1.y-carte.y,building2.x-carte.x,building2.y-carte.y);

		if(road.characters && road.characters.length > 0){
			var x = (building1.x+building2.x)/2;
			var y = (building1.y+building2.y)/2;
			drawPerso(ctx,road.characters[0].characterId,x-16-carte.x,y-16-carte.y);
		}
	});
	model.buildings.forEach(function(point){

		drawPoint(ctx,point.x-carte.x,point.y-carte.y);
		if(point.type === "ville"){
			ctx.drawImage(images.village, point.x-images.village.width/3-carte.x, point.y-images.village.width/3-carte.y);
		}
		if(point.type === "donjondeglace"){
			ctx.drawImage(images.donjondeglace, point.x-images.donjondeglace.width/2-carte.x, point.y-images.donjondeglace.height+10-carte.y);
		}
		if(point.characters && point.characters.length > 0){
			drawPerso(ctx,point.characters[0].characterId,point.x-16-carte.x,point.y-16-carte.y);
		}
	});

}

function drawPoint(ctx,x,y){
	ctx.fillStyle = "#ff0000";
	ctx.beginPath();
	ctx.lineWidth="2";
	ctx.arc(x, y, 3, 0, 2 * Math.PI);
	ctx.stroke();
}

function line(ctx,x,y,x2,y2){
	ctx.fillStyle = "#ff0000";
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}

function drawPerso(ctx,id,x,y){
	var type = findPerso(id).type;
	personnagecliquable.push({"id":id,"x":x,"y":y});
	ctx.drawImage(images.perso,(type%4)*95,(Math.trunc(type/4)*128),30,32,x, y,30,32);
}

function findPerso(id){
	return model.characters.find(function(perso){
		return perso.characterId === id;
	})
}