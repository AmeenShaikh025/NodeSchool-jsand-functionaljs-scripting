//1st

// function uppercase(str) {
//   return str.toUpperCase();
// }

// module.exports = uppercase;

//2nd

// function repeat(opertation, num) {
//   for (let i = 0; i < num; i++) {
//     opertation();
//   }
// }

// module.exports = repeat;

//3rd //map

// function doubleAll(numbers) {
//   return numbers.map(num => num * 2);
// }
// module.exports = doubleAll;

//4th filter

// function getShortMessages(messages) {
//   return messages
//     .filter(msg => msg.message.length < 50)
//     .map(msg => msg.message);
// }
// module.exports = getShortMessages;

//5th every() and some()

// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(submittedUser => {
//       return goodUsers.some(goodUser => {
//         return goodUser.id === submittedUser.id;
//       });
//     });
//   };
// }

// module.exports = checkUsersValid;

//6th reduce

// function countWords(inputWords) {
//   let res = {};
//   for (let i = 0; i < inputWords.length; i++) {
//     if (res[inputWords[i]]) {
//       res[inputWords[i]]++;
//     } else {
//       res[inputWords[i]] = 1;
//     }
//   }
//   return res;
// }

// function countWords(inputWords) {
//   return inputWords.reduce((acc, cur, index, arry) => {
//     acc[cur] = ++acc[cur] || 1;
//     return acc;
//   }, {});
// }

// module.exports = countWords;

//7th Recursion

function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  reduce(arr,fn(prev,cur,idx,arr),initial) {
    return cur +=prev
  }

}

module.exports = reduce;
