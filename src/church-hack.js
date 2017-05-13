
// Alonzo Church's hack coined by the Jerald J. Sussman

// Demonstrations of functions as First class citizens

// Simplified version of cons, car, cdr

/*
 * Basic Axioms these functions should satisfy to
 * left(pair(A, B)) = A
 * right(pair(A, B)) = B 
 */


// Basic Store for a pair
function pair(leftItem, rightItem) {
  return function (eitherLeftOrRight) {
    return eitherLeftOrRight(leftItem, rightItem)
  }
}

// Retrieve the left item of the pair
function left(pairData) {
  return pairData(function (leftItem, rightItem) {
    return leftItem;
  });
}

// Retrieve the right item of the pair
function right(pairData) {
  return pairData(function (leftItem, rightItem) {
    return rightItem;
  });
}


var p = pair(3, 4)
console.log(left(p))
console.log(right(p))

var ps = pair('leftString', 'rightString')
console.log(left(ps))
console.log(right(ps))
