
let person_name = document.querySelector("#name");
let btn = document.querySelector("#check");
let maleImage = document.querySelector("#male");
let femaleImage = document.querySelector("#female");
let prob = document.querySelector("span");

btn.addEventListener('click', function () {
    let name = person_name.value

    if (name == '') {
        alert("Please enter your name");
    }

    fetch('https://api.genderize.io/?name=' + name)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            //    console.log(data.gender)
            //    console.log(data.probability)
            prob.innerHTML = "Probability : " + data.probability;

            if (data.gender == "male") {
                maleImage.style.display = 'block';
                femaleImage.style.display = 'none';
            } else {
                femaleImage.style.dispaly = 'block';
                maleImage.style.dispaly = 'none';
            }
        })
})