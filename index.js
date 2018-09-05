module.exports = (object, hash_table) => {
    let new_object = {};
    if (Array.isArray(object)) {
        new_object = [];
    }
    for (const [key, val] of Object.entries(object)) {
        const new_key = hash_table[key];
        if (val !== null && typeof val === 'object') {
            // If value is an object, call recursively
            if (typeof new_key !== 'undefined') {
                new_object[new_key] = module.exports(val, hash_table);
            } else {
                new_object[key] = module.exports(val, hash_table);
            }
        } else {
            if (new_key) {
                new_object[new_key] = val;
            } else {
                // Key is not in the hash, keep same name
                new_object[key] = val;
            }
        }
    }
    return new_object;
};
