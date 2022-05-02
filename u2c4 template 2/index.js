// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector('#masaiForm');
form.addEventListener('submit',takeInput);

var matchData = JSON.parse(localStorage.getItem('schedule')) || [];
function takeInput(){
    event.preventDefault();
    var matchObj = {
        matchNumber : form.matchNum.value,
        teamA : form.teamA.value,
        teamB : form.teamB.value,
        date : form.date.value,
        venue : form.venue.value
    }
    matchData.push(matchObj);
    localStorage.setItem('schedule',JSON.stringify(matchData));
}