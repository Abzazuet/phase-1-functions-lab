function distanceFromHqInBlocks(destination){
    return Math.abs(42-destination);
}
function distanceFromHqInFeet(destination){
    return distanceFromHqInBlocks(destination)*264;
}
function distanceTravelledInFeet(startOfDestination, endOfDestination){
    let numberOfBlocks = Math.abs(startOfDestination-endOfDestination);
    return numberOfBlocks * 264;

}
function calculatesFarePrice(startOfDestination, endOfDestination){
    let distanceInFeet = distanceTravelledInFeet(startOfDestination, endOfDestination);
    if (distanceInFeet > 2500){
        return 'cannot travel that far';
    }
    else if (distanceInFeet < 2000 && distanceInFeet > 400){
        return (distanceInFeet - 400) * 0.02;
    }
    else if (distanceInFeet <= 400){
        return 0;
    }
    else { 
        return 25;
    }
}
console.log(calculatesFarePrice(43, 44));
