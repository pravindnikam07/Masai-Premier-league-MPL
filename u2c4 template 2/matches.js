// write js code here corresponding to matches.html

var matchData = JSON.parse(localStorage.getItem('schedule'));
var tbody = document.querySelector('tbody');
var favouriteData = JSON.parse(localStorage.getItem('favourites')) || [];

displayData(matchData);
function displayData(matchData){
    tbody.innerHTML=null;
    matchData.forEach((element,index) => {
        let tr = document.createElement('tr');
        let matchNumber = document.createElement('td');
        matchNumber.innerText = element.matchNumber;
        let teamA = document.createElement('td');
        teamA.innerText = element.teamA;
        let teamB = document.createElement('td');
        teamB.innerText = element.teamB;
        let date = document.createElement('td');
        date.innerText = element.date;
        let venue = document.createElement('td');
        venue.innerText = element.venue;
        let favourite = document.createElement('td');
        favourite.innerText = 'Favourite';
        favourite.style.color = 'green';
        favourite.addEventListener('click',function(){
            favouriteFun(element,index);
        });
        
        tr.append(matchNumber,teamA,teamB,date,venue,favourite);
        tbody.append(tr);
    });
}

function favouriteFun(element){
    favouriteData.push(element);
    localStorage.setItem('favourites',JSON.stringify(favouriteData));
}

function filterByVenue(){
    let selected = document.querySelector('#filterVenue').value;
    if (selected == 'none'){
        displayData(matchData);
    }
    else{
        let filterList = matchData.filter(function(element){
            if (selected == element.venue) return element;
        })
        displayData(filterList);
    }
}