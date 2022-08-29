// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// [7,1,5,3,6,4]

var maxProfitFn = function (prices) {
  var smallestValueIndex = 0;
  var hightestValueIndex = 0;
  var maxProfit = 0;

  for (let index = 1; index < prices.length; index++) {
    const price = prices[index];
    if (price > prices[hightestValueIndex]) {
      hightestValueIndex = index;
    }

    if (price < prices[smallestValueIndex]) {
      smallestValueIndex = index;
    }

    if (smallestValueIndex > hightestValueIndex) {
      hightestValueIndex = smallestValueIndex;
    }

    if (smallestValueIndex < hightestValueIndex) {
      maxProfit = Math.max(
        maxProfit,
        prices[hightestValueIndex] - prices[smallestValueIndex]
      );
    }
  }
  //   console.log(maxProfit);
  return maxProfit;
};
// maxProfitFn([7, 1, 5, 3, 6, 4]); // 5
// maxProfitFn([7, 6, 4, 3, 1]); // 0
// maxProfitFn([3, 4, 2, 1]); // 1
maxProfitFn([17, 18, 19, 20, 8, 12, 13, 20, 3, 10, 30]); // 27
