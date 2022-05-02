// write js code here corresponding to favourites.html

var tbody = document.querySelector('tbody');
var favouriteData = JSON.parse(localStorage.getItem('favourites'));

displayData(favouriteData);
function displayData(favouriteData){
    favouriteData.forEach((element,index) => {
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
        let td5 = document.createElement('td')
        let delet = document.createElement('button');
        delet.innerText = 'Delete';
        delet.style.color = 'red';
        delet.addEventListener('click',function(){
            deletFun(element,index);
        });
        
        td5.append(delet);
        tr.append(matchNumber,teamA,teamB,date,venue,td5);
        tbody.append(tr);
    });
}
function deletFun(element,index){
    favouriteData.splice(index,1);
    localStorage.setItem('favourites',JSON.stringify(favouriteData));
    window.location.reload();
}
