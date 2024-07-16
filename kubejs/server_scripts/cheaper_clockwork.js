ServerEvents.recipes(event => {
    event.shaped('vs_clockwork:physics_infuser',[
        'ISI',
        'SIS',
        'ISI',
    ],{
        S: '#minecraft:stone_tool_materials',
        I: 'minecraft:iron_ingot'
    });
    event.shaped('vs_clockwork:wanderwand',[
        ' SS',
        ' IS',
        'I  ',
    ],{
        S: '#minecraft:stone_tool_materials',
        I: 'minecraft:iron_ingot'
    });
});