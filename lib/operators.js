const operators = {
  eq: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('eq') : '$eq',
      value
    }
  },
  ne: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('ne') : '$ne',
      value
    }
  },
  gte: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('gte') : '$gte',
      value
    }
  },
  gt: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('gt') : '$gt',
      value
    }
  },
  lte: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('lte') : '$lte',
      value
    }
  },
  lt: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('lt') : '$lt',
      value
    }
  },
  not: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('not') : '$not',
      value
    }
  },
  is: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('is') : '$is',
      value
    }
  },
  in: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('in') : '$in',
      value: value.split(',')
    }
  },
  notIn: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('notIn') : '$notIn',
      value: value.split(',')
    }
  },
  like: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('like') : '$like',
      value
    }
  },
  notLike: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('notLike') : '$notLike',
      value
    }
  },
  iLike: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('iLike') : '$iLike',
      value
    }
  },
  notILike: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('notILike') : '$notILike',
      value
    }
  },
  startsWith: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('startsWith') : '$startsWith',
      value
    }
  },
  endsWith: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('endsWith') : '$endsWith',
      value
    }
  },
  substring: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('substring') : '$substring',
      value
    }
  },
  regexp: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('regexp') : '$regexp',
      value
    }
  },
  notRegexp: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('notRegexp') : '$notRegexp',
      value
    }
  },
  iRegexp: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('iRegexp') : '$iRegexp',
      value
    }
  },
  notIRegexp: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('notIRegexp') : '$notIRegexp',
      value
    }
  },
  between: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('between') : '$between',
      value: value.split(',')
    }
  },
  notBetween: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('notBetween') : '$notBetween',
      value: value.split(',')
    }
  },
  overlap: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('overlap') : '$overlap',
      value: value.split(',')
    }
  },
  contains: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('contains') : '$contains',
      value: value.split(',')
    }
  },
  contained: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('contained') : '$contained',
      value: value.split(',')
    }
  },
  adjacent: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('adjacent') : '$adjacent',
      value: value.split(',')
    }
  },
  strictLeft: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('strictLeft') : '$strictLeft',
      value: value.split(',')
    }
  },
  strictRight: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('strictRight') : '$strictRight',
      value: value.split(',')
    }
  },
  noExtendRight: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('noExtendRight') : '$noExtendRight',
      value: value.split(',')
    }
  },
  noExtendLeft: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('noExtendLeft') : '$noExtendLeft',
      value: value.split(',')
    }
  },
  and: (symbolic, value) => {
    let parsedValue = value.split(',');
    if(parsedValue.includes('null')){
      parsedValue = parsedValue.filter(att => att !== 'null')
      parsedValue.push(null);
    }
    return {
      comparisonOp: symbolic ? Symbol.for('and') : '$and',
      value: parsedValue
    }
  },
  or: (symbolic, value) => {
    let parsedValue = value.split(',');
    if(parsedValue.includes('null')){
      parsedValue = parsedValue.filter(att => att !== 'null')
      parsedValue.push(null);
    }
    return {
      comparisonOp: symbolic ? Symbol.for('or') : '$or',
      value: parsedValue
    }
  },
};

module.exports = operators;
