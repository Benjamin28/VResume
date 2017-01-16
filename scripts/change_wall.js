function minimize_event_wall(direction){

    var right = [personal_change_wall]
    var left =  [master_change_wall]
    
    if(direction == "right"){
	personal_change_wall.setAttribute('scale', {x: 0, y: 0, z: 0});
	master_change_wall.setAttribute('scale', {x: 1, y: 1, z: 1});
    }

    if(direction == "forward"){
	personal_change_wall.setAttribute('scale', {x: 1, y: 1, z: 1});
	master_change_wall.setAttribute('scale', {x: 0, y: 0, z: 0});
    }
    
}

