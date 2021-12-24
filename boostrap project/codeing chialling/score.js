const user =prompt("What is you name ?");
const subject=prompt("Which subject's mark do you went to know");

const examScore = Math.floor( Math.random() * 100) + 1;

if(examScore >= 80){
    alert(`Congrats ${user} !! You pass You examscore in ${subject} is ${examScore} marks`)
}else if(examScore >= 60){
    alert(`Not bad ${user} !! You pass too You examscore in ${subject} is ${examScore} marks`)
}else if(examScore >= 40){
    alert(`You fall ${user} !! You fall !! You examscore in ${subject} is ${examScore} mark, 
    is stuped`)
}else{
    alert(`You fall ${user} !! You are stuped`)
};