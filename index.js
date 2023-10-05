function hasTargetSum (array, target) {
  // Sort the input array in ascending order
  array.sort((a, b) => a - b);

  // Initializa two pointers
  let left = 0;
  let right = array.length -1;

  while (left < right) {
    const currentSum = array[left] + array[right];
    //Found a pair with the target sum
    if (currentSum === target) {
      return true; 
    } else if (currentSum < target) {
      // If the current sum is less than tghe target, move the left pointer to the right
      left++;
    } else {
      // If the current sum is greater than the target,move the right pointer to the left
      right--;
    }
  }
  // No pair eith thr target sum found
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n*log(n))
/* 
  Add your pseudocode here
  
  //
    1. Sort the input array in ascending order.
    2. Start with two pointers, left pointing to the first element, and right pointing to the last element of the sorted array.
    
    3. While left < right:
        a. Calculate the sum of elements at array[left] and array[right].
        b. If the sum is equal to the target:
            i. Return true, indicating that a pair with the target sum was found.
        c. If the sum is less than the target:
            i. Increment the left pointer by 1.
        d. If the sum is greater than the target:
            i. Decrement the right pointer by 1.
    
    4. If the loop completes without finding a pair with the target sum:
        a. Return false, indicating that no such pair exists in the array.

/*
  Add written explanation of your solution here
*/
  
//The array is first sorted in ascending order using the sort method.

// Two pointers, left and right, are used at the beginning and end of the sorted array.

// The while loop continues until the left pointer is less than the right pointer.

// Inside the loop, it calculates the current sum of elements at the left and right pointers.

// If the current sum is equal to the target, it returns true as it found a pair with the target sum.

// If the current sum is less than the target, it means we need a larger sum, so it increments the left pointer.

// If the current sum is greater than the target, it means we need a smaller sum, so it decrements the right pointer.

// If no pair with the target sum is found after looping through the array, it returns false.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
