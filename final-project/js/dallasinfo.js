var templelist, temple;
var article = document.querySelector('article');
var requestURL ='https://zstrad7.github.io/templedata.json';
var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType='json';
request.send();
request.onload=function() {
    var templeInfo = request.response;
    showInfo(templeInfo);
}
function showInfo(jsonObj) {
    temple=jsonObj['temples'];
for(var i = 0; i<temple.length; i++) {
    if(temple[i].name == "Dallas")
	{
    var myarticle = document.createElement('div');
    var myH5 = document.createElement('h5');
    var myH6 = document.createElement('h6');
    var mypara1 = document.createElement('p');
    var mypara2 = document.createElement('p');
    var mypara3 = document.createElement('p');
    var mypara4 = document.createElement('p');
    var mypara5 = document.createElement('p');
    var mypara6 = document.createElement('p');
    var mypara7 = document.createElement('p');
    var mypara8 = document.createElement('p');
    var mypara9 = document.createElement('p');
    var mypara10 = document.createElement('p');
    var mypara11 = document.createElement('p');
    var mypara12 = document.createElement('p');
    var mypara13 = document.createElement('p');
    var mypara14 = document.createElement('p');
    var mypara15 = document.createElement('p');
    myH5.textContent= temple[i].name;
    myH6.textContent= temple[i].address;
    mypara1.textContent= 'Email:'+ temple[i].email;
    mypara2.textContent= 'History:'+ temple[i].history;
    mypara3.textContent= 'Baptism schedule:'+ temple[i].baptism;
    mypara4.textContent= 'Initiatory schedule:'+ temple[i].initiatory;
    mypara5.textContent= 'Session schedule:'+ temple[i].session;
    mypara6.textContent= 'Sealing schedule:'+ temple[i].sealing;  
    mypara7.textContent= 'Services:';
    mypara8.textContent= temple[i].service1;
    mypara9.textContent= temple[i].service2;
    mypara10.textContent= temple[i].service3;
    mypara11.textContent= temple[i].service4;
    mypara12.textContent='Closures:';
    mypara13.textContent= temple[i].closure1;
    mypara14.textContent= temple[i].closure2;
    mypara15.textContent= temple[i].closure3;

    
    myarticle.appendChild(myH5);
    myarticle.appendChild(myH6);
    myarticle.appendChild(mypara1);
    myarticle.appendChild(mypara2);
    myarticle.appendChild(mypara3);
    myarticle.appendChild(mypara4);
    myarticle.appendChild(mypara5);
    myarticle.appendChild(mypara6);
    myarticle.appendChild(mypara7);
    myarticle.appendChild(mypara8);
    myarticle.appendChild(mypara9);
    myarticle.appendChild(mypara10);
    myarticle.appendChild(mypara11);
    myarticle.appendChild(mypara12);
    myarticle.appendChild(mypara13);
    myarticle.appendChild(mypara14);
    myarticle.appendChild(mypara15);
    myarticle.className = "templefacts";
    article.appendChild(myarticle);
}
}
}
var weatherSum = new XMLHttpRequest
weatherSum.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4684888&appid=e645b27a21704bcc46696c7157f91494&units=imperial', true);
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

    let d = [weatherData.wind.deg];
    let windDir="";
    if((d>=337 && d<360)|| (d>=0 && d<=22)){
        windDir="N";
    }
    else if (d>=23 && d<=67){
        windDir="NE";
    }
    else if (d >= 68 && d <= 112) {
        windDir ="E";
    }

    else if (d >= 113 && d <= 157) {
        windDir ="SE";
    }

     else if (d >= 158 && d <= 202) {
        windDir ="S";
    }

    else if (d >= 203 && d <= 246) {
        windDir ="SW";
    }

    else if (d >= 247 && d <= 290) {
        windDir ="W";
    }

    else { windDir = "NW";}
    document.getElementById('dir').innerHTML=windDir;

var windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp) * Math.pow(speed, 0.16);

windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;

}