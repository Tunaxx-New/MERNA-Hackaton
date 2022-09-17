const getClasses = (style, classes) => {
    var filtered = []
    Object.keys(style).reduce(function (lol, key) {
        if (classes.includes(key.toString()))
            filtered.push(style[key]);
        return filtered
    }, {});
    return filtered.join(' ')
}

export default getClasses