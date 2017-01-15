function expand_face_block(){
    
    faceBlockInterface.setAttribute('scale', {x: 2, y: 5, z: .5});
    faceBlock.setAttribute('scale', {x: 2, y: 5, z: .5});
    nameTag.setAttribute('scale', {x: .5, y: .5, z: .5});
    nameTagReflection.setAttribute('scale', {x: .5, y: -.5, z: .5});
    FBCProfessional.setAttribute('scale', {x: 2, y: .75, z: 1});
    FBCProfessionalReflection.setAttribute('scale', {x: 2, y: .75, z: 1});
    FBCAcademic.setAttribute('scale', {x: 2, y: .75, z: 1});
    FBCAcademicReflection.setAttribute('scale', {x: 2, y: .75, z: 1});
    FBCPersonal.setAttribute('scale', {x: 2, y: .75, z: 1});
    FBCPersonalReflection.setAttribute('scale', {x: 2, y: .75, z: 1});

}

function face_block_token_expand(){

    faceBlockExpandToken.setAttribute('scale', {x: 1, y: 1, z: 1});
    faceBlockMirrorExpandToken.setAttribute('scale', {x: 1, y: 1, z: 1});
    faceBlockExpand.setAttribute('scale', {x: .25, y: .5, z: .25});
    faceBlockMirrorExpand.setAttribute('scale', {x: .25, y: .5, z: .25});

}


function collapse_face_block(){

    faceBlockInterface.setAttribute('scale', {x: 0, y: 0, z: 0});
    faceBlock.setAttribute('scale', {x: 0, y: 0, z: 0});
    faceBlockExpandToken.setAttribute('scale', {x: 0, y: 0, z: 0});
    faceBlockMirrorExpandToken.setAttribute('scale', {x: 0, y: 0, z: 0});
    faceBlockExpand.setAttribute('scale', {x: 0, y: 0, z: 0});
    faceBlockMirrorExpand.setAttribute('scale', {x: 0, y: 0, z: 0});
    console.log(name);
    nameTag.setAttribute('scale', {x: 0, y: 0, z: 0});
    nameTagReflection.setAttribute('scale', {x: 0, y: 0, z: 0});
    FBCProfessional.setAttribute('scale', {x: 0, y: 0, z: 0});
    FBCProfessionalReflection.setAttribute('scale', {x: 0, y: 0, z: 0});
    FBCAcademic.setAttribute('scale', {x: 0, y: 0, z: 0});
    FBCAcademicReflection.setAttribute('scale', {x: 0, y: 0, z: 0});
    FBCPersonal.setAttribute('scale', {x: 0, y: 0, z: 0});
    FBCPersonalReflection.setAttribute('scale', {x: 0, y: 0, z: 0});

}
