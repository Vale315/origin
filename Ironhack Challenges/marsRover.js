// Rover Object Goes Here
// ======================
const roverObj = {
  dir: "N",
  x:0,
  y:0,
  travelLog: [{x:0,y:0}]
};
// ======================
function turnLeft(command){
    console.log("turnLeft was called!");
    if(roverObj.dir === "N" && command === "l"){
      roverObj.dir = "W";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    else if(roverObj.dir === "W" && command === "l"){
      roverObj.dir = "S";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    else if(roverObj.dir === "S" && command === "l"){
      roverObj.dir = "E";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    else if(roverObj.dir === "E" && command === "l"){
      roverObj.dir = "N";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    console.log(`Rover has position: x=${roverObj.x}, y=${roverObj.y}`);
    let newPosition = {x: roverObj.x, y: roverObj.y};
      roverObj.travelLog.push(newPosition);
}
  
function turnRight(command){
    console.log("turnRight was called!");
    if(roverObj.dir === "N" && command === "r"){
      roverObj.dir = "E";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    else if(roverObj.dir === "E" && command === "r"){
      roverObj.dir = "S";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    else if(roverObj.dir === "S" && command === "r"){
      roverObj.dir = "W";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    else if(roverObj.dir === "W" && command === "r"){
      roverObj.dir = "N";
      console.log(`Rover is now facing ${roverObj.dir}`);
    }
    console.log(`Rover has position: x=${roverObj.x}, y=${roverObj.y}`);
    let newPosition = {x: roverObj.x, y: roverObj.y};
      roverObj.travelLog.push(newPosition);
}
  
function moveForward(command){
    console.log("moveForward was called");
  if(roverObj.dir === "E" && roverObj.y === 9 && command === "f"){
    console.log("You can't place Rover outside of the grid!");
  }else if(roverObj.dir ==="E" && roverObj.y < 9 && command === "f"){
    roverObj.y++;
  }else if(roverObj.dir === "W" && roverObj.y === 0 && command === "f"){
    console.log("You can't move outside of the board, move rigth");
  }else if(roverObj.dir === "W" && roverObj.y > 0 && command === "f"){
    roverObj.y--; 
  }else if(roverObj.dir === "N" && roverObj.x === 9 && command === "f"){
    console.log("You can't place Rover outside of the grid!");
  }else if(roverObj.dir === "N" && roverObj.x < 9 && command === "f"){
    roverObj.x++;
  }else if(roverObj.dir === "S" && roverObj.x === 0 && command === "f"){
    console.log("You can't move outside of the board, move rigth");
  }else if(roverObj.dir === "S" && roverObj.x > 0 && command === "f"){
    roverObj.x--; 
  }
  console.log(`Rover has position: x=${roverObj.x}, y=${roverObj.y}`);
  let newPosition = {x: roverObj.x, y: roverObj.y};
    roverObj.travelLog.push(newPosition);
}

function moveBackward(command){
  console.log("moveBackward was called");
if(roverObj.dir === "E" && roverObj.y === 0 && command === "b"){
  console.log("You can't place Rover outside of the grid!");
}else if(roverObj.dir ==="E" && roverObj.y > 0 && command === "b"){
  roverObj.y--;
}else if(roverObj.dir === "W" && roverObj.y === 9 && command === "b"){
  console.log("You can't move outside of the board, move rigth");
}else if(roverObj.dir === "W" && roverObj.y < 9 && command === "b"){
  roverObj.y++; 
}else if(roverObj.dir === "N" && roverObj.x === 0 && command === "b"){
  console.log("You can't place Rover outside of the grid!");
}else if(roverObj.dir === "N" && roverObj.x > 0 && command === "b"){
  roverObj.x--;
}else if(roverObj.dir === "S" && roverObj.x === 9 && command === "b"){
  console.log("You can't move outside of the board, move rigth");
}else if(roverObj.dir === "S" && roverObj.x < 9 && command === "b"){
  roverObj.x++; 
}
console.log(`Rover has position: x=${roverObj.x}, y=${roverObj.y}`);
let newPosition = {x: roverObj.x, y: roverObj.y};
  roverObj.travelLog.push(newPosition);
}

function orders(orders){
 
    for (let i = 0; i < orders.length; i++){
      let order = orders[i];
      console.log(i);
      switch(order){
        case "l": // left
          turnLeft(order);
          break;
        case "r": // right
          turnRight(order);
          break;  
        case "f": // forward
          moveForward(order);
          break; 
        case "b":
          moveBackward(order);
          break;
        default:
          console.log("Please enter a valid order: r, l, f or b");
          break;
      }
      //console.log(`X = ${roverObj.travelLog[i].x}`);
      //console.log(`Y = ${roverObj.travelLog[i].y}`);
    }
    
   console.log(roverObj.travelLog); 
  }

orders("fffffrffffflffffffrrrss");
