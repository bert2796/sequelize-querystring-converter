const operators = {
  and: true,
  or: true,
  lt: true,
  lte: true,
  gt: true,
  gte: true,
  ne: true,
  eq: true,
  not: true,
  between: true,
  notBetween: true,
  in: true,
  notIn: true,
  startsWith: true,
  endsWith: true,
  substring: true,
  and: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('and') : '$and',
      value: value.split(',')
    }
  },
  or: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('or') : '$or',
      value: value.split(',')
    }
  },
  lt: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('lt') : '$lt',
      value
    }
  },
  lte: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('lte') : '$lte',
      value
    }
  },
  gt: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('gt') : '$gt',
      value
    }
  },
  gte: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('gte') : '$gte',
      value
    }
  },
  ne: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('ne') : '$ne',
      value
    }
  },
  eq: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('eq') : '$eq',
      value
    }
  },
  not: (symbolic, value) => {
    return {
      comparisonOp: symbolic ? Symbol.for('not') : '$not',
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
};

module.exports = operators;
