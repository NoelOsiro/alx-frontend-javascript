function updateUniqueItems(groceriesMap) {
    // Check if the argument is a Map
    if (!(groceriesMap instanceof Map)) {
        throw new Error("Cannot process");
    }

    // Iterate over the entries of the map
    for (const [item, quantity] of groceriesMap.entries()) {
        // If the quantity is 1, update it to 100
        if (quantity === 1) {
            groceriesMap.set(item, 100);
        }
    }

    return groceriesMap;
}
export default updateUniqueItems;