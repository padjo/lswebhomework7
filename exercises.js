//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if ( x > y) {
    return x;
  }
  return(y);
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  if (language == 'German') {
    return('Guten Tag!');
  } else if (language == 'English') {
    return('Hello!');
  } else if (language == 'Spanish') {
    return('Hola!');
  }else return('Hello!');
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if(num == 10 || num == 5) {
    return(true);
  } else {
    return(false);
  }
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if(num > 20 && num < 50) {
    return(true);
  } else return(false);
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  Math.floor(num);
  if(num > 0 && num < 1) {
    return(false);
  } else if(Math.floor(num) % 1 === 0){
    return(true);
  } else {
    return(false);
  }
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if (num % 15 == 0) {
    return('fizzbuzz');
  }else if (num % 5 == 0) {
    return('buzz');
  }else if (num % 3 == 0) {
    return('fizz');
  }else {
    return(num);
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if (num === 1 || num === 0){
		return false;
	}
  var i = 2;
  while (i < num) {
    if(num % i == 0) {
      return(false);
    }
    i++;

  }
  return(true);
}

function returnFirst(arr) {
  //return the first item from the array
  return(arr.shift());
}

function returnLast(arr) {
  //return the last item of the array
  // version 1
  // return arr[arr.length - 1];
  // version 2
  return(arr.pop());
}

function getArrayLength(arr) {
  //return the length of the array
  return(arr.length);
}

function incrementByOne(arr) {
  //arr is an array of integers
  //increase each integer by one
  //return the array
  return(arr.map(function (element) {
  return element + 1;
}));
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return(arr);
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  return(words.join(' '));
}


function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  var result = [false];
   arr.map(function(testItem){
     if(testItem == item) {
       result[0] = true;
     }
   });
   return(result[0]);
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var total = 0;
  numbers.map(function(number) {total = total + number;});
  return total;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  //var animals = [6,7,8];
   total = function(sum, num) {
    return sum + num;
  };
  var total = testScores.reduce(total, 0);
  return(total / testScores.length);
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var findLargest = function(largestSoFar, numberToCheck) {
    if (largestSoFar <= numberToCheck) {
      return numberToCheck;
    } else {
      return largestSoFar;
    }
 };

 var answer = numbers.reduce(findLargest, 0);
 return(answer);
}

function makeCat(name, age) {
  //create a new object with a name property with the value set to the name argument
  //add an age property to the object with the value set to the age argument
  //add a method called meow that returns the string 'Meow!'
  //return the object
  var cat = {
          name:name,
          age:age ,
          meow : function() {
            return('Meow!');
          }
  };
  return cat;
}



function addProperty(object, property) {
  //add the property to the object with a value of null
  //return the object
  //note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  //method is a string that contains the name of a method on the object
  //invoke this method
  //nothing needs to be returned
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  //mysteryNumberObject has a property called mysteryNumber
  //multiply the mysteryNumber property by 5 and return the product
  return (mysteryNumberObject.mysteryNumber * 5);
}

function deleteProperty(object, property) {
  //remove the property from the object
  //return the object
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  //create a new object with properties matching the arguments passed in.
  //return the new object
  var object = {
      name:name,
      email: email,
      password: password,
  };
  return object;
}

function hasEmail(user) {
  //return true if the user has a value for the property 'email'
  //otherwise return false
  if (user['email']) {
   return true;
 } else {
   return false;
 }
}

function hasProperty(object, property) {
  //return true if the object has the value of the property argument
  //property is a string
  //otherwise return false
  if (object[property]) {
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  //check to see if the provided password matches the password property on the user object
  //return true if they match
  //otherwise return false
  if(user.password === password) {
    return true;
  } else {
    return false;
  }
}

function updatePassword(user, newPassword) {
  //replace the existing password on the user object with the value of newPassword
  //return the object
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  //user has a property called friends that is an array
  //add newFriend to the end of the friends array
  //return the user object
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  //users is an array of user objects.
  //each user object has the property 'isPremium'
  //set each user's isPremium property to true
  //return the users array
  var toPremium = function(user) {
       return(user.isPremium = true);
   };
   users.map(toPremium);
   return users;
}

function sumUserPostLikes(user) {
  //user has an array property called 'posts'
  //posts is an array of post objects
  //each post object has an integer property called 'likes'
  //sum together the likes from all the post objects
  //return the sum
    numLikes = function(sum,like) {
    return sum + like.likes;
  };

  var numLikes = user.posts.reduce(numLikes, 0);
  return numLikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
  //add a method to the storeItem object called 'calculateDiscountPrice'
  //this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  //the method then subtracts the discount from the price and returns the discounted price
  //example:
  //price -> 20
  //discountPercentage -> .2
  //discountPrice = 20 - (20 * .2)
  //var discountPrice;
  storeItem.calculateDiscountPrice = function() {
    var discountPrice = (storeItem.price - (storeItem.price * storeItem.discountPercentage));
    return discountPrice;

  };
  return storeItem;
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
