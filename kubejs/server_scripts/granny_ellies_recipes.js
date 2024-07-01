ServerEvents.recipes(event => {
    // REMOVING RECIPES
    event.remove({ output: 'born_in_chaos_v1:smoked_flesh' })
    event.remove({output: 'apotheosis:diamond_mining_arrow'})
    // ADDING SHAPED CRAFTING
    event.shaped('minecraft:elytra', [
        ' AA',
        'AB ',
        'A A'
],{
    A: 'minecraft:phantom_membrane',
    B: 'paraglider:paraglider'
})
    //SHAPELESS CRAFTING
    event.shapeless(
        Item.of('minecraft:paper', 1), // arg 1: output
        [
        '4x minecraft:phantom_membrane'
        ]
    )
    // COOKING RECIPES
    event.smoking('minecraft:leather', 'minecraft:rotten_flesh')
    event.blasting('2x minecraft:shulker_shell', 'minecraft:amethyst_block')
})