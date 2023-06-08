
var allDivTr = document.getElementsByClassName("roundedBorder-4")[1].getElementsByTagName('tr');
var slots = allDivTr.length;
slots-=2
console.log(slots);
var switch1=localStorage.getItem("switch");
if(switch1==1){
if(document.getElementsByClassName("error")[2]!==undefined){
   if(document.getElementsByClassName("error")[2].innerText==='You have reserved the maximum number of slots allowed as part of this process'){
    alert("Slots booking Completed")
    localStorage.setItem("switch",0);

   } 
}
var table=document.getElementsByClassName('testcatfirst');

for(var j=0;j<table.length;j++){
    var tds=table[j].querySelectorAll("td")
    console.log(tds)
    for(var i=0;i<tds.length;i++){
        if(tds[i].classList.value=='day slotsavailable'){
            const input = tds[i].querySelector('a').click();
    
        }
    }
}
//var tds=document.querySelectorAll("#browseslots td");

window.onload=function(){
    var seats=document.getElementsByClassName('reserve centre')
    for(var i=0;i<seats.length;i++){
 
        if(seats[i].querySelector('a')!=="undefined"){
            slots=Number(localStorage.getItem("slots"));
            slots+=1
            localStorage.setItem("slots",slots);
        var a=seats[i].querySelector('a').click()

        }
}
}
setTimeout(function() {
    document.getElementsByClassName('laquo largetext bold')[1].click()

}, 500);

var nextAvailable=Number(localStorage.getItem("nextAvailable"));
var previousAvailable=Number(localStorage.getItem("previousAvailable"));
console.log(previousAvailable)

chrome.storage.sync.get(['nextAvailable'], function(result){
    if(result.nextAvailable==true){
        setTimeout(function() { 
            var next=document.getElementById('searchForWeeklySlotsNextAvailable')
        if(next!=="undefined"){
            next.click()
        }
         }, 500);
    }
});
chrome.storage.sync.get(['previousAvailable'], function(result){
    if(result.previousAvailable==true){
        setTimeout(function() { 
            var next=document.getElementById('searchForWeeklySlotsPreviousAvailable')
        if(next!=="undefined"){
            next.click()
        }
         }, 700);
    }
});



for(var i=0;i<tds.length;i++){
    if(tds[i].classList.value=='day slotsavailable'){
        const input = tds[i].querySelector('a').click();

    }
}
chrome.storage.sync.get(['randomDelay'], function(res){
    if(res.randomDelay==true){
        var seconds=Math.floor(Math.random() * (2 - 1 + 1) + 1)
        setTimeout(function() { window.location.reload(true); }, (Number(seconds)*1000));
    }
    else{
        chrome.storage.sync.get(['time'], function(result){
            var endTime = new Date();
            var timeDiff = endTime.getTime() - result.time //in ms
            // strip the ms
            timeDiff /= 1000;
            var second = Math.round(timeDiff);
            if(second>240){
                var startTime = new Date();
                setTimeout(function() { window.location.reload(true); }, (Number(10)*1000));
                chrome.storage.sync.set({time: startTime.getTime()}, function(){});
            }
            else{
                chrome.storage.sync.get(['seconds'], function(result){
                    setTimeout(function() { window.location.reload(true); }, (Number(result.seconds)*1000));
                    
                    });
            }
            
            });
    }

    });
/*
setTimeout(function() {
    document.getElementById('refineSearch1').click()
    setTimeout(function() {
        document.getElementById('submitSlotSearch').click() 
           
    }, 1000);
      
}, 7000);
*/

localStorage.setItem("slots",slots);

var startTime=localStorage.getItem("time");
var endTime = new Date();
var timeDiff = endTime - startTime;
timeDiff /= 1000;

// get seconds 
var seconds = Math.round(timeDiff);
if(seconds>180){
    alert("Too much time has been elapsed. Please checkout in order to ensure that you donot loose already added slots")
}
}


