function roadRadar(speed, area){
    let driverSpeed = Number(speed);
    let areaDriving  = area;
    let speedLimitZone = undefined;

    let toPrint = `Driving ${driverSpeed} km/h in  ${speedLimitZone} zone`
    if (areaDriving === 'motorway' && driverSpeed <= 130){
        let speedLimitZone = 130;
        console.log(toPrint)

    }
}

roadRadar('129', 'motorway')