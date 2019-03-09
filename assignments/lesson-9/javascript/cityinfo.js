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
	var check =1;
    town=jsonObj['towns'];
for(var i = 0; i<town.length; i++) {
    if(town[i].name == "Preston" || town[i].name == "Soda Springs" || town[i].name == "Fish Haven")
	{
    var myarticle = document.createElement('div');
    var myH5 = document.createElement('h5');
    var myH6 = document.createElement('h6');
    var mypara1 = document.createElement('p');
    var mypara2 = document.createElement('p');
    var mypara3 = document.createElement('p');
    var myPicture = document.createElement('img');
    myH5.textContent= town[i].name;
    myH6.textContent= town[i].motto;
    mypara1.textContent= 'Year Founded:'+ town[i].yearFounded;
    mypara2.textContent= 'Population:'+ town[i].currentPopulation;
    mypara3.textContent= 'Average Rainfall:'+ town[i].averageRainfall + " inches";

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
}
}
