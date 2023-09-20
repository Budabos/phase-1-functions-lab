// Code your solution in this file!

function distanceFromHqInBlocks(pickupBlock) {
    // Scuber's headquarters is at 42nd street
    const hqBlock = 42;
    
    // Calculate the absolute difference between pickupBlock and hqBlock
    const blocksAway = Math.abs(pickupBlock - hqBlock);
  
    return blocksAway;
  }
  const pickupBlockValue = 8; //  variable if declared elsewhere
  const blocksAway = distanceFromHqInBlocks(pickupBlock);
  console.log(`The pickup location is ${blocksAway} blocks away from Scuber's headquarters.`);
  
  const feetAway = distanceFromHqInFeet(pickupBlock);
  console.log(`The pickup location is ${feetAway} feet away from Scuber's headquarters.`);


//distance = (destination - start) * 264
function distanceTravelledInFeet(start, destination) {
    // The difference between destination and start blocks
    const blockDifference = Math.abs(destination - start);
  
    //The distance traveled in feet
    const distanceInFeet = blockDifference * 264;
  
    return distanceInFeet;
  }
const startBlock = 10;
const endBlock = 20;
const distance = distanceTravelledInFeet(startBlock, endBlock);
console.log(`The passenger traveled ${distance} feet.`);



function distanceFromHqInFeet(pickupBlock) {
    // using  distanceFromHqInBlocks function to get the number of blocks away
    const blocksAway = distanceFromHqInBlocks(pickupBlock);
  
    // Conversion of blocks to feet (1 block = 264 feet)
    const distanceInFeet = blocksAway * 264;
  
    return distanceInFeet;
  }
const pickupBlock = 8; // Replace this with the actual block number
const distanceToHQ = distanceFromHqInFeet(pickupBlock);
console.log(`The pickup location is ${distanceToHQ} feet away from Scuber's headquarters.`);


function calculatesFarePrice(start, destination) {
    // Calculating the distance in feet using the distanceTravelledInFeet function
    const distanceInFeet = Math.abs(destination - start) * 264;
  
    if (distanceInFeet <= 400) {
      return 0;

    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;

    } else if (distanceInFeet <= 2500) {
      return 25;

    } else {
      return "cannot travel that far";
    }
  }
  
