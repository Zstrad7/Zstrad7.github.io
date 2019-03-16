var weatherSum = new XMLHttpRequest
weatherSum.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e645b27a21704bcc46696c7157f91494&units=imperial', true);
weatherSum.send();
weatherSum.onload = function () {

    var weatherData = JSON.parse(weatherSum.responseText);
    console.log(weatherData);

    document.getElementById('value1').innerHTML = weatherData.weather[0].description;
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;

    var temp = weatherData.main.temp;
    var speed = weatherData.wind.speed;

var windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp) * Math.pow(speed, 0.16);

windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;

}
var weatherWeek = new XMLHttpRequest
weatherWeek.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e645b27a21704bcc46696c7157f91494&units=imperial', true);
weatherWeek.send();
weatherWeek.onload = function () {
    var weekInfo = JSON.parse(weatherWeek.responseText);
    console.log(weekInfo);

    var listDay=[];
    var listHigh=[];
    var listIcon=[];
    for (i=0; i<weekInfo.list.length; ++i){
        time=weekInfo.list[i].dt_txt;
        if (time.includes("18:00:00")){
            var date = new Date(weekInfo.list[i].dt*1000);
            var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDay = day[date.getDay()];
            listDay.push(findDay);

            var iconcode = weekInfo.list[i].weather["0"].icon;
            var iconpath = "https://openweathermap.org/img/w/"+ iconcode + ".png";
            listIcon.push(iconpath);

            var temp = weekInfo.list[i].main.temp;
            var temp = Math.round(temp);
            listHigh.push(temp);
        }
     continue;
    }


document.getElementById('day1').innerHTML = listDay[0];
document.getElementById('day2').innerHTML = listDay[1];
document.getElementById('day3').innerHTML = listDay[2];
document.getElementById('day4').innerHTML = listDay[3];
document.getElementById('day5').innerHTML = listDay[4];

document.getElementById('weatherPic1').src = listIcon[0];
document.getElementById('weatherPic2').src = listIcon[1];
document.getElementById('weatherPic3').src = listIcon[2];
document.getElementById('weatherPic4').src = listIcon[3];
document.getElementById('weatherPic5').src = listIcon[4];

document.getElementById('temp1').innerHTML = listHigh[0];
document.getElementById('temp2').innerHTML = listHigh[1];
document.getElementById('temp3').innerHTML = listHigh[2];
document.getElementById('temp4').innerHTML = listHigh[3];
document.getElementById('temp5').innerHTML = listHigh[4];
}

var aside = document.querySelector('aside');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var Info = jsonObj['towns'];
for(var i = 0; i<Info.length; i++){
    if(Info[i].name == "Preston"){
        var myarticle = document.createElement('div');
        var mylist = document.createElement('ul');
        var myPicture = document.createElement('img');
        var currentEvents = Info[i].events;
        for (var n = 0; n<currentEvents.length; n++){
            if (i===2){
                continue;
            }
                var listItems = document.createElement('li');
                listItems.textContent = currentEvents[n];
                mylist.appendChild(listItems);
            
        }
        myPicture.src="images/preston-city.jpg";
        myarticle.appendChild(mylist);
        myarticle.appendChild(myPicture);
        myarticle.className = "townevents";
        aside.appendChild(myarticle);
    }
}
}

    
