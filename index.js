// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    if (dist > 42){
        let blocks = dist - 42
        return blocks
    }
    else{
        let blocks = 42 - dist
        return blocks
    }
}
function distanceFromHqInFeet(dist){
    return distanceFromHqInBlocks(dist) * 264

}
function distanceTravelledInFeet(num1, num2) {
    if (num2 > num1) {
        let disTravelled = (num2 - num1)*264
        return disTravelled
        }
        else{
            let disTravelled= (num1 - num2)*264
            return disTravelled
        }
    }

    const calculatesFarePrice = (start, destination) => {
            let disTravelled = distanceTravelledInFeet(start, destination)
            if (disTravelled < 400) {
                let cost = 0
                return cost
            }
            if(disTravelled >400, disTravelled<2000) {
                let cost = (disTravelled-400) * 0.02
                return cost
            }
            else if (disTravelled > 2000, disTravelled<2500){
                let cost = 25
                return cost
            }
      else {
        return "cannot travel that far"
      }
    }

