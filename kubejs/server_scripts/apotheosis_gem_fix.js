ServerEvents.recipes(event => {
    event.shapeless('apotheosis:gem','apotheosis:gem').modifyResult((grid, result) => {
        let item = grid.find(Item.of('apotheosis:gem'));
        let gem_data = [item.nbt.gem, item.nbt.affix_data.rarity];
        console.log(gem_data);
        return result.withNBT({
            affix_data: {
                rarity: gem_data[1]
            },
            gem: gem_data[0]
        });
    });
});