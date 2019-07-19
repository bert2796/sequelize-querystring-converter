# Sequelize querystring converter

Convert your query string into sequlize query criteria to filter, sort and paginate your data.

## Installation

```js
npm install sequelize-querystring-converter
```

or

```js
yarn add sequelize-querystring-converter
```

## Features

* Pagination using limit and offset query parameters
* Multi-Column Sort
* Filtering with operator support (currently supported: and, or, lt, lte, gt, gte, ne, eq, not, between, notBetween, in, notIn, startsWith, endsWith, and substring)

## Usage

```javascript
const queryStringConverter = require('sequelize-querystring-converter');

const obj = queryStringConverter.convert({
  query: {
    category: 'Shirts',
    name: 'substring:Shirt',
    price: 'between:0,5000',
    discount: 'gte:10',
    brand: 'in:Nike,New Balance,Puma',
    color: 'black',
    sort: '-price',
    offset: 15,
    limit: 15
  },
  basedProperties: ['name', 'price', 'discount', 'brand']
});
// category property will be ignored because it's not defined in basedProperties
// obj = {
//  where: {
//    name: { [Symbol(substring)]: 'Shirt' },
//    price: { [Symbol(between)]: ['0', '5000'] },
//    discount: { [Symbol(gte)]: '10' },
//    brand: { [Symbol(10)]: ['Nike', 'New Balance', 'Puma'] }
//    color: 'black'
//  },
//  order: [['price', 'DESC']],
//  offset: 15,
//  limit: 15,
// };
```

## API

### `convert({ sort, offset, limit, basedProperties })`

Convert object into sequelize criteria

#### sort

Type: `string`

default: undefined

An optional parameter to describe sorting rules (ascending or descending).
Use `-` sign for descending while `+` for ascending, by default if sign is not presented it will automatically set to `+` sign (ex: `sort=-createdAt` or `sort=+createdAt`).
Value can be separated by a comma if multiple sort condition is needed (ex: `sort=id,name`).

#### offset

Type: `string`
default: undefined

An optional parameter to define how many data will be skipped.

#### limit

Type: `string`
default: undefined

An optional parameter to define how many data will be displayed.

#### basedProperties

Type: `Array<string>`
default: undefined

An optional parameter to define what properties will be used for filtering, sorting and searching.

## Example

```javascript
const querystringConverter = require('sequelize-querystring-converter');
const { Product } = require('../models');

async function listProducts = async (req, res) {
  // assuming api request would be like this
  // base_url/products?brand=Nike&sort=-createdAt
  // then query object will be equal to this
  // { brand: 'Nike', sort: '-createdAt' }
  const { query } = req;

  try {
    const criteria = querystringConverter.convert({ query });
    // criteria = { where: { brand: 'Nike' }, order: [ ['createdAt', 'DESC'] ]}

    const products = await Product.findAll(criteria);
    // products = [
    // {id: 2, name: 'Sample Product 2', brand: 'Nike', createdAt: '2019-07-18 08:25:30'},
    // {id: 1, name: 'Sample Product 1', brand: 'Nike', createdAt '2019-07-16 10:00:01}
    // ...
    //]

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = { listProducts };
```
