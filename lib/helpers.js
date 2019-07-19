const uniqBy = (arr, predicate) => {
  const cb = typeof predicate === 'function' ? predicate : (o) => o[predicate];

  return [...arr.reduce((map, item) => {
    const key = (item === null || item === undefined) ?
      item : cb(item);

    map.has(key) || map.set(key, item);

    return map;
  }, new Map()).values()];
};

const pickBy = (object) => {
  const obj = {};
  for (const key in object) {
      if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
          obj[key] = object[key];
      }
  }
  return obj;
}

const uniq = (array) => {
  return [...new Set(array)];
}

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
       obj[key] = object[key];
    }
    return obj;
  }, {});
}

module.exports = { uniqBy, pickBy, uniq, pick };
