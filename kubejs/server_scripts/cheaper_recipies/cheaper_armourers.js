ServerEvents.recipes(event => {
    event.remove({output: 'armourers_workshop:soap'});
    event.shaped('armourers_workshop:mannequin', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S:'#armourers_workshop:skin_cubes',
        A:'minecraft:armor_stand'
    });
    
    event.shapeless('armourers_workshop:soap', ['minecraft:slime_ball', 'minecraft:rotten_flesh']);
});
