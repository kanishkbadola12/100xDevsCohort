/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) {
    return [];
  }
  
  let obj = [];

  obj.push({
    'category': transactions[0]['category'],
    'totalSpent': transactions[0]['price']
  });

  for (let i = 1; i < transactions.length; i++) {
    let newCategory = true;
    obj.forEach(function (item) {
      if (item['category'] === transactions[i]['category']) {
        item['totalSpent'] = item['totalSpent'] + transactions[i]['price'];
        newCategory = false;
      }
    });
    if (newCategory) {
      obj.push({
        'category': transactions[i]['category'],
        'totalSpent': transactions[i]['price']
      });
    }
  };

  return obj;
}

module.exports = calculateTotalSpentByCategory;
