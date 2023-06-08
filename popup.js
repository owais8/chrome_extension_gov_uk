
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
checkbox1.addEventListener("change", async e => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if(e.target.checked){
    chrome.storage.sync.set({nextAvailable: true}, function(){});
  }
  else{
        chrome.storage.sync.set({nextAvailable: false}, function(){});

  }
});
checkbox2.addEventListener("change", async e => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if(e.target.checked){
    chrome.storage.sync.set({previousAvailable: true}, function(){});
  }
  else{
        chrome.storage.sync.set({previousAvailable: false}, function(){});
  }
});
checkbox3.addEventListener("change", async e => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if(e.target.checked){
    chrome.storage.sync.set({randomDelay: true}, function(){});
    document.getElementById("seconds").disabled = true;
  }
  else{
        chrome.storage.sync.set({randomDelay: false}, function(){});
        document.getElementById("seconds").disabled = false;
  }
});

seconds.addEventListener("input", async e => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.storage.sync.set({seconds: e.target.value}, function(){});
});
changeColor.addEventListener("click", async  () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  on.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    document.getElementById('on').style.backgroundColor="green";
    document.getElementById('on').style.color="white";
    document.getElementById('off').style.backgroundColor="";
    var startTime = new Date();
    chrome.storage.sync.set({time: startTime.getTime()}, function(){});

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: onSwitch,
    });
  });
  off.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    document.getElementById('off').style.backgroundColor="red";
    document.getElementById('on').style.color="black";
    document.getElementById('on').style.backgroundColor="";
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: offSwitch,
    });
  });

  
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    localStorage.setItem("slots",0);
    localStorage.setItem("time",0)
  }
  function onSwitch() {
    localStorage.setItem("switch",1);
    startTime = new Date()
    localStorage.setItem("time",startTime)
    chrome.storage.sync.set({yourValue: true}, function(){});
    window.location.reload();

  }
  function offSwitch() {
    localStorage.setItem("switch",0);
    localStorage.setItem("slots",0);
    localStorage.setItem("time",0)
    chrome.storage.sync.set({yourValue: false}, function(){});
    console.log(document.body.style.backgroundColor); // red

  }
  window.onload = function () {
    chrome.storage.sync.get(['seconds'], function(result){
    document.getElementById("seconds").value =result.seconds

});
chrome.storage.sync.get(['nextAvailable'], function(result){
    if(result.nextAvailable==true){
      document.getElementById("checkbox1").checked = true;

    }
});
chrome.storage.sync.get(['previousAvailable'], function(result){
    if(result.previousAvailable==true){
      document.getElementById("checkbox2").checked = true;

    }
});
chrome.storage.sync.get(['randomDelay'], function(result){
  if(result.randomDelay==true){
    document.getElementById("checkbox3").checked = true;

  }
});
    var switch1=localStorage.getItem("switch")
    var key='switch'
    chrome.storage.sync.get(['yourValue'], function(result){
      if(result.yourValue==true){
        document.getElementById('on').style.backgroundColor="green";
        document.getElementById('on').style.color="white";
        document.getElementById('off').style.backgroundColor="";
      }
      else{
        document.getElementById('off').style.backgroundColor="red";
        document.getElementById('on').style.color="black";
        document.getElementById('on').style.backgroundColor="";
      }
    });
 }

