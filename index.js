// Code your solution here
// findMatching
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
//fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
// matchName
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
// Complete Example with Test Data
const drivers = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];

// Function to find matching drivers
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names begin with specific letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function to find drivers by name property
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

// Test cases
console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'Bobby'));
// Output: ['Bobby']

console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'Sa'));
// Output: ['Sammy', 'Sally', 'Sarah']

console.log(matchName(drivers, 'Bobby'));
// Output: [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
