// My personal notes for explanation, author@ Jaffar Shah

function calculateRectangleArea(length, width) { //defining which function first
  var area = length * width; //assign variable where from physics a = l * w
  if (area > 0) {
  return area;
  }
}
function calculateTriangleArea(base, height) {
  var area = base * height / 2;
  if (area > 0) {
  return area;
  }
}
function calculateCircleArea(radius){
  if(radius < 0 ){
    return undefined;
  } else {
    return(Math.PI * Math.pow(radius,2));
  }
}

// Inputs from lhl
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined