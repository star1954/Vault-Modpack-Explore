ServerEvents.recipes(event => {
    let recipeTable = [];
    recipeTable.push(['create:andesite_scaffolding','create:andesite_alloy']);
    recipeTable.push(['create:brass_scaffolding','create:brass_ingot']);
    recipeTable.push(['create:copper_scaffolding','minecraft:copper_ingot']);
    recipeTable.forEach(element => {
        event.remove({output: element[0]})
    });
    recipeTable.forEach(element => {
        event.stonecutting('16x '+element[0], element[1]);
    })
});