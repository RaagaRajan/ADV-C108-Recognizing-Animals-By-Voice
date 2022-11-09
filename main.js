function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/G0qNGBHKW/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice of - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("Cat");
        img1 = document.getElementById("Dog");
        img2 = document.getElementById("Tiger");
        img3 = document.getElementById("Cow");

        if (results[0].label == "Cat") {
            img.src = 'Cat.gif';
            img1.src = 'Dog.jpg';
            img2.src = 'Tiger.jpg';
            img3.src = 'Cow.jpg';
        }
        else if (results[0].label == "Dog") {
            img.src = 'Cat.jpg';
            img1.src = 'Dog.png';
            img2.src = 'Tiger.jpg';
            img3.src = 'Cow.jpg';
        }
        else if (results[0].label == "Tiger") {
            img.src = 'Cat.jpg';
            img1.src = 'Dog.jpg';
            img2.src = 'Tiger.png';
            img3.src = 'Cow.jpg';
        }
        else {
            img.src = 'Cat.jpg';
            img1.src = 'Dog.jpg';
            img2.src = 'Tiger.jpg';
            img3.src = 'Cow.png';  

    } 
}
}