function expand_master_block(){

    MBCollapse.setAttribute('scale', {x: .25, y: .5, z: .25});
    MBCollapseToken.setAttribute('scale', {x: 1, y: 1, z: 3});
    MBMirrorCollapse.setAttribute('scale', {x: .25, y: .5, z: .25});
    MBMirrorCollapseToken.setAttribute('scale', {x: 1, y: 1, z: 3});
    MB1.setAttribute('scale', {x: 5, y: .83333, z: .5});
    MB2.setAttribute('scale', {x: 5, y: .83333, z: .5});
    MB3.setAttribute('scale', {x: 5, y: .83333, z: .5});
}

function unselect_face(block_array, button_array, block_r_array, button_r_array){

    for(var i = 0; i < block_array.length; i++){
	block_array[i].setAttribute('color', '#c4c5c0');
	button_array[i].setAttribute('scale', {x: 0, y: 0, z: 0});
	block_r_array[i].setAttribute('color', '#c4c5c0');
	button_r_array[i].setAttribute('scale', {x: 0, y: 0, z: 0});
    }
}

function collapse_master_block(){

    unselect_face([MB1, MB2, MB3], [MB1Button, MB2Button, MB3Button], [MB1Reflection, MB2Reflection, MB3Reflection], [MB1ButtonR, MB2ButtonR, MB3ButtonR]);

    MBCollapse.setAttribute('scale', {x: 0, y: 0, z: 0});
    MBCollapseToken.setAttribute('scale', {x: 0, y: 0, z: 0});
    MBMirrorCollapse.setAttribute('scale', {x: 0, y: 0, z: 0});
    MBMirrorCollapseToken.setAttribute('scale', {x: 0, y: 0, z: 0});
    MB1.setAttribute('scale', {x: 0, y: 0, z: 0});
    MB2.setAttribute('scale', {x: 0, y: 0, z: 0});
    MB3.setAttribute('scale', {x: 0, y: 0, z: 0});

}
