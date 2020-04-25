const operators = require('./operators');
const { uniqBy, pickBy, pick } = require('./helpers');

const extractSort = ({ sort, basedProperties }) => {
  if (sort === '' || sort === undefined) return undefined;

  let sortClause = [];
  let properties = sort.split(',');

  if (basedProperties.length > 0) {
    properties =  properties.filter(property => basedProperties.includes(property.replace(/^-/, '')));
  }

  if (properties.length) {
    properties = properties.length > 1 ? uniqBy(properties, item => item.replace(/^-/, '')) : properties;
    sortClause = properties.map(property => {
      return property.charAt(0) === '-' ? [property.slice(1), 'DESC'] : [property, 'ASC']
    });
  }

  return sortClause;
};

const extractWhere = ({ query, basedProperties, symbolic }) => {
  let properties;
  if (basedProperties.length > 0) {
    properties = pick(query, basedProperties);
  } else {
    const { sort, offset, limit, select, ...others } = query;
    properties = others;
  }

  if (!(Object.keys(properties).length > 0)) return undefined;

  let whereClause = {};
  for (let property in properties) {
    if (properties[property].includes(':')) {
      let [comparisonOp, value] = properties[property].split(':');
      if (comparisonOp in operators) {
        let result = operators[comparisonOp](symbolic, value);
        whereClause[property] = { [result.comparisonOp]: result.value === 'null' ? null : result.value };
      }
    } else {
      whereClause[property] = properties[property] === 'null' ? null : properties[property];
    }
  }

  return whereClause;
};

const convert = ({ query, basedProperties = [], symbolic = true }) => {
  if (typeof query !== 'object') {
    throw new Error('Query must be object');
  }

  const criteria = {
    where: extractWhere({ query, basedProperties, symbolic }),
    order: extractSort({ sort: query.sort, basedProperties }),
    offset: typeof query.offset === 'string' ? parseInt(query.offset) : query.offset,
    limit:  typeof query.limit === 'string' ? parseInt(query.limit) : query.limit
  };

  return pickBy(criteria);
};

module.exports = { convert };
