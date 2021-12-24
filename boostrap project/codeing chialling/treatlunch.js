function treatlunch(){
const crew = ["luffy", "zoro", "chopper", "usoop", "sanji", "nami", "robin", "franky"];

const totalCrew = crew.length;
const random =Math.floor(Math.random() * totalCrew)// 0 - 0.9 * 9
const treat = crew[random];
return `${treat} will by lunch for all of us`
}
