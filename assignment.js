/* kilometer to Meter - Convert Kilometer to meter*/

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        const meter = (kilometer * 1000);
        return meter;
    } else {
        console.log("Please Enter Valid Input");
    }
}
var totalMeter = kilometerToMeter(17);
console.log(totalMeter);



/* Budget Calculator- Total calculation */

function bugetCalculator(watch, mobile, laptop) {
    if (watch, mobile, laptop > 0) {
        var firstItem = (watch * 50);
        var secondItem = (mobile * 100);
        var thirdItem = (laptop * 500);
        var totalCost = firstItem + secondItem + thirdItem;
        return totalCost;
    } else {
        console.log("Please give the right input");
    }
}
var totalBudget = bugetCalculator(2, 4, 1);
console.log(totalBudget);





/* hotelCost- total cost after discount */

function hotelCost(day) {
    if (day > 0) {
        if (day <= 10) {
            var totalCost = day * 100;
        } else if (day <= 20) {
            var first = 10 * 100;
            var firstDiscount = (day - 10) * 80;
            var totalCost = first + result2;
        } else {
            var first = 10 * 100;
            var firstDiscount = 10 * 80;
            var secondDiscount = (day - 20) * 50;
            var totalCost = first + firstDiscount + secondDiscount;
        }
        return totalCost;
    } else {
        console.log("Sorry!! Invalid Input");
    }
}
var fullCost = hotelCost(30);
console.log(fullCost);



/* megaFriend-Find Longest Name of A friend*/

function megaFriend(friends) {
    var word = 0;
    var longestWord;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > word) {
            word = friends[i].length;
            longestWord = friends[i];
        }
    }
    return longestWord;
}
var longestFriend = megaFriend(["Tanvir", "Prince", "Rahat", "Jhankar", "Mahbub", "Shakib Al Hasan"]);
console.log(longestFriend);