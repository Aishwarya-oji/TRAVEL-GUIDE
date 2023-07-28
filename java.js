var country= document.getElementById("lightBoldText");
var welcome= document.getElementById("headingBoldText");
var optionImageDisplay= document.getElementById("displayImage");
var bg= document.querySelector("body");
var description= document.getElementById("infoText");
$(document).ready(function(){
    $("#option1").click(function(){
        welcome.innerHTML="Namaste";
        country.innerHTML="INDIA";
        optionImageDisplay.src="https://i.postimg.cc/cLqBzjDS/tm.png";
      // bg.style.background="lightblue";
        bg.style.backgroundImage="linear-gradient(to bottom, #5edfff , #3e64ff)"
        // bg.style.backgroundImage="linear-gradient(to bottom, #4c9a2a, #76ba1b)";
        description.innerHTML="The culture of India refers collectively to the thousands of distinct and unique cultures of all religions and communities present in India. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.";
    });
    $("#option2").click(function(){
        welcome.innerHTML="Konnichiwa";
        country.innerHTML="JAPAN";
        optionImageDisplay.src="https://i.postimg.cc/CxjspNtf/shrine.png";
      // bg.style.background="red";
        bg.style.backgroundImage="linear-gradient(to top, #ff8080, #f9c1cb)";
        // bg.style.backgroundImage="linear-gradient(to bottom, #5edfff , #3e64ff)";
        description.innerHTML="The culture of Japan has changed greatly over the millennia, from the country's prehistoric Jōmon period, to its contemporary modern culture, which absorbs influences from Asia, Europe, and North America.";

    });
    $("#more").click(function(){
        welcome.innerHTML="Explore";
        country.innerHTML="ASIA";
        optionImageDisplay.src="https://i.postimg.cc/xTNPtY35/monk.png";
        bg.style.background="#46290d";
        description.innerHTML="The history of Asia can be seen as the distinct histories of several peripheral coastal regions: East Asia, South Asia, Southeast Asia and the Middle East, linked by the interior mass of the Central Asian steppes.";

    });
});