// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mergeDeep(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var isObject = function (obj) { return obj && typeof obj === "object"; };
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(function (key) {
        var targetValue = target[key];
        var sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}
export default mergeDeep;
//# sourceMappingURL=mergeDeep.js.map