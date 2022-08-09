

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    // if (count < 0) count *= -1;
    if (count == 0) count = 1;

    // for (let i = 1; i <= count; i++){
    //     if (i %2 != 0 || i %-2 != 0) {
    //         console.log(i);
    //     }
    // }

    for(let i = 0; i <= Math.abs(count); i++){
        if (i %2 != 0) {
            console.log(i * Math.sign(count));
        }
    }
}
printOdds(10);
printOdds(-10);
printOdds(0);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let yesDrive = `${name}, you can drive!`;
    let noDrive = `${name}, you're too little to drive!`;

    if (age < 16){
        console.log(noDrive);
    }
    else {
        console.log(yesDrive);
    }
}
checkAge("Gandalf", 496);
checkAge("Tommy Pickle", 2);

function canDoThisThing(age, ageRequired){
    return age >= ageRequired;
}
function checkDOB(name, age) {
    let drivingOK = canDoThisThing(age, 16);

    if (drivingOK) {
        console.log(`${name} can drive!`);
    }
    else {
        console.log(`Sorry ${name}, still too little to drive!`);
    }
}

checkDOB("Gandalf", 496);
checkDOB("Tommy Pickle", 2);

console.log("EXERCISE 3:\n==========\n");
function cartesianQuadrantChecker (x, y) {
    if (x > 0 && y > 0) {
        return 'Q1';  
    } else if (x < 0 && y > 0) {
        return 'Q2';
    } else if (x < 0 && y < 0) {
        return 'Q3';
    } else if (x > 0 && y < 0) {
        return 'Q4';
    } else if (x != 0 && y == 0) {
        return `It's on the x-axis.`;
    } else if (x != 0 && y > 0) {
        return `It's on the y-axis.`;
    } else {
        return `It's on the x/y origin.`;
    }
}
console.log(cartesianQuadrantChecker(0,0));
console.log(cartesianQuadrantChecker(15,-15));

console.log("EXERCISE 4:\n==========\n");

const isATriangle = (d, e, f) => d + e > f && d + f > e && e + f > d && d != 0 && e!= 0 && f!= 0;

function triangleType(d, e, f){
    let passedCheck = isATriangle(d, e, f);
    if (passedCheck) {
        if (d == e && e && f) {
            return "Equilateral Triangle";
        } else if (d == e || d == f || e == f) {
            return "Isosceles Triangle";
        } else {
            return "Scalene Triangle";
        }
    }else {
        return "This is not a valid triangle.";
    }
}

console.log(triangleType(0,0,0));
console.log(triangleType(1,8,5));
console.log(triangleType(4,4,4));

console.log("EXERCISE 5:\n==========\n"); //Bonus


