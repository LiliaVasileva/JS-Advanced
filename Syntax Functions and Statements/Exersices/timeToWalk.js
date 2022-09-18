function timeToWalk (steps, footprint, speed){
    let distanceInMeters = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInMeters / speedMetersInSec;
    let result =Math.floor(distanceInMeters / 500)
    let timeInMin = Math.floor(distanceInMeters / 60);
    let timeInSec = Math.floor(time - (timeInMin * 60))
    let timeInH = Math.floor(time / 3600)
    timeInMin += result;
    timeInH += Math.floor(timeInMin /60);
    timeInMin = timeInMin % 60
    console.log(`${timeInH}:${timeInMin}:${timeInSec}` )
}

timeToWalk(4000, 0.60, 5)