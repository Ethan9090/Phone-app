Webcam.set({
    width : 250,
    height : 230,
    image_format : 'png',
    png_quality : 1080,
    constraints : {
        facingMode : "environment"
    }
});

cam = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("my_img").innerHTML = '<img id="My_Img" src="' + data_url + '"/>';
    });
}

var ImageClassifyier = ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded() { console.log("Model loaded"); }


function compare(){

    var my_url = document.getElementById("My_Img");

    ImageClassifyier.classify(my_url,Results)

}

function Results(error,array){
    
    if(error){
        console.error(error);
    }
    else{
        console.log(array)
    var answer = array[0].label;
    document.getElementById("span1").innerHTML = answer;
    }

}