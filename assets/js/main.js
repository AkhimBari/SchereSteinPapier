const originalPlayer = document.getElementById("originalPlayer");
const kiPlayer = document.getElementById("kiPlayer");
const result = document.getElementById("result");
let buttons = document.getElementById("buttons")
let rock = 1
let paper = 2;
let scissors = 3;
let ungeheuer = 0;
let maschine = 0;
let versuche = 0





const kiDevelopment = () => {
    const originalPlayer = document.getElementById("originalPlayer");
    const kiPlayer = document.getElementById("kiPlayer");
    originalPlayer.textContent = ungeheuer;
    kiPlayer.textContent = maschine;
};




function myFunction(monster) {
    if (five.checked) {
        let cyberZilla = Math.floor(Math.random() * 3) + 1;
        versuche += 1
        if (monster == cyberZilla) {
            result.innerHTML = "Face to Face";
        } else if (
            (monster == rock && cyberZilla == paper) ||
            (monster == paper && cyberZilla == scissors) ||
            (monster == scissors && cyberZilla == rock)
        ) {
            result.innerHTML = " cyberZilla wins!";
            maschine++;
            kiDevelopment();
        } else if (
            (monster == rock && cyberZilla == scissors) ||
            (monster == paper && cyberZilla == rock) ||
            (monster == scissors && cyberZilla == paper)
        ) {
            result.innerHTML = " Godzilla wins!";
            ungeheuer++;
            kiDevelopment();
        } if (versuche == five.value) {
            result.innerHTML = " Das Spiel ist vorbei";
            result.style.color = "green";
            buttons.style.display = "none";
        }
    }




    if (ten.checked) {
        let cyberZilla = Math.floor(Math.random() * 3) + 1;
        versuche += 1
        if (monster == cyberZilla) {
            result.innerHTML = "Face to Face";
        } else if (
            (monster == rock && cyberZilla == paper) ||
            (monster == paper && cyberZilla == scissors) ||
            (monster == scissors && cyberZilla == rock)
        ) {
            result.innerHTML = " du lappen";
            maschine++;
            kiDevelopment();
        } else if (
            (monster == rock && cyberZilla == scissors) ||
            (monster == paper && cyberZilla == rock) ||
            (monster == scissors && cyberZilla == paper)
        ) {
            result.innerHTML = " bruder du bist der King";
            ungeheuer++;
            kiDevelopment();
        } if (versuche == ten.value) {
            result.innerHTML = " Das Spiel ist vorbei";
            result.style.color = "green";
            buttons.style.display = "none";
        }


    }
    if (fifthTeen.checked) {
        let cyberZilla = Math.floor(Math.random() * 3) + 1;
        versuche += 1
        if (monster == cyberZilla) {
            result.innerHTML = "Face to Face";
        } else if (
            (monster == rock && cyberZilla == paper) ||
            (monster == paper && cyberZilla == scissors) ||
            (monster == scissors && cyberZilla == rock)
        ) {
            result.innerHTML = " du lappen";
            maschine++;
            kiDevelopment();
        } else if (
            (monster == rock && cyberZilla == scissors) ||
            (monster == paper && cyberZilla == rock) ||
            (monster == scissors && cyberZilla == paper)
        ) {
            result.innerHTML = " bruder du bist der King";
            ungeheuer++;
            kiDevelopment();
        } if (versuche == fifthTeen.value) {
            result.innerHTML = " Das Spiel ist vorbei";
            result.style.color = "green";
            buttons.style.display = "none";
        }


    }
    if (twenty.checked) {
        let cyberZilla = Math.floor(Math.random() * 3) + 1;
        versuche += 1
        if (monster == cyberZilla) {
            result.innerHTML = "Face to Face";
        } else if (
            (monster == rock && cyberZilla == paper) ||
            (monster == paper && cyberZilla == scissors) ||
            (monster == scissors && cyberZilla == rock)
        ) {
            result.innerHTML = "du lappen";
            maschine++;
            kiDevelopment();
        } else if (
            (monster == rock && cyberZilla == scissors) ||
            (monster == paper && cyberZilla == rock) ||
            (monster == scissors && cyberZilla == paper)
        ) {
            result.innerHTML = " bruder du bist der King";
            ungeheuer++;
            kiDevelopment();
        } if (versuche == twenty.value) {
            result.innerHTML = " Das Spiel ist vorbei";
            result.style.color = "green";
            buttons.style.display = "none";
        }
    }
}













































