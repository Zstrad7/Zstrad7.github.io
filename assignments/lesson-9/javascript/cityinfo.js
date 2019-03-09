var townlist, town;
var article = document.querySelector('article');
var requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType='json';
request.send();
request.onload=function() {
    var townInfo = request.response;
    showData(townInfo);
}
function showData(jsonObj) {
    town=jsonObj['towns'];
for (townlist = 0; townlist<town.length; townlist++) {
    if(town[townlist].name == 'Preston')
    makeTownData(town[townlist]);
}
for (townlist = 0; townlist<town.length; townlist++) {
    if(town[townlist].name == 'Soda Springs')
    makeTownData(town[townlist]);
}
for (townlist = 0; townlist<town.length; townlist++) {
    if(town[townlist].name == 'Fish Haven')
    makeTownData(town[townlist]);
}
}
function makeTownData(jsonObj) {
    var town=jsonObj;
    var myarticle = document.createElement('article');
    var myH5 = document.createElement('h5');
    var myH6 = document.createElement('h6');
    var mypara1 = document.createElement('p');
    var mypara2 = document.createElement('p');
    var mypara3 = document.createElement('p');
    var myPicture = document.createElement('img');
    myH5.textContent= town.name;
    myH6.textContent= town.motto;
    mypara1.textContent= 'Year Founded:'+ town.yearFounded;
    mypara2.textContent= 'Population:'+ town.currentPopulation;
    mypara3.textContent= 'Average Rainfall:'+ town.averageRainfall;

    switch (myH5.textContent) {
        case "Preston":
        myPicture.src="images/preston-good.jpg";
        break;
        case "Soda Springs":
        myPicture.src="images/soda-springs.jpg";
        break;
        case "Fish Haven":
        myPicture.src="images/fish-haven.jpg";
        break;
    }
    myarticle.appendChild(myH5);
    myarticle.appendChild(myH6);
    myarticle.appendChild(mypara1);
    myarticle.appendChild(mypara2);
    myarticle.appendChild(mypara3);
    myarticle.appendChild(myPicture);
    myarticle.className = "townfacts";
    article.appendChild(myarticle);
}
