
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(order);
  }
};

function refundOrder(orderNumber, orderType) {
  for (i = 0; i < orderType.length; i++) {
    if (orderType[i].orderNumber === orderNumber) {
      orderType.splice(i, 1);
    }
  }
};

function listItems(deliveryOrders) {
  var newArray = [];
  for (i = 0; i < deliveryOrders.length; i++) {
    newArray.push(deliveryOrders[i].item);
  }
  return newArray.join(', ');
  // return newArray;
};

function searchOrder(deliveryOrders, food) {
  //var deliveryOrders = [order1, order2];
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      return (true);
    }
  }
  return (false);
};

// Takes an array of objects
// Searches array for orderNumber
// returns true or false
