function expand_master_block(){

    MBCollapse.setAttribute('scale', {x: .25, y: .5, z: .25});
    MB1.setAttribute('scale', {x: 5, y: .83333, z: .5});
    MB2.setAttribute('scale', {x: 5, y: .83333, z: .5});
    MB3.setAttribute('scale', {x: 5, y: .83333, z: .5});
    console.log("expanded");
}

function collapse_master_block(){

    MBCollapse.setAttribute('scale', {x: 0, y: 0, z: 0});
    MB1.setAttribute('scale', {x: 0, y: 0, z: 0});
    MB2.setAttribute('scale', {x: 0, y: 0, z: 0});
    MB3.setAttribute('scale', {x: 0, y: 0, z: 0});

}