function ready(fn){
  (document.readyState!=='loading')?fn():document.addEventListener('DOMContentLoaded',fn)
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


ready(function(){
  console.log('Hello');

  sleep(500).then(() => { 
    // let siteSection = document.getElementsByClassName("md-sec");
    // for(i = 0; i < siteSection.length; i++){
    //     siteSection[i].classList.toggle("active");
    // }
    let siteSection = document.getElementById("md-site");
    siteSection.classList.toggle("active"); 
  });

  sleep(1100).then(() => { 
    let siteContent = document.getElementById("md-site-content");
    siteContent.classList.toggle("active");
    // let siteContent = document.getElementsByClassName("md-content");
    // for(i = 0; i < siteContent.length; i++){
    //     siteContent[i].classList.toggle("active");
    // }
  });


});

function toggleSection(curSection){
    // let siteContent = document.getElementById("md-" + curSection + "-content");
    // siteContent.classList.toggle("active");

    // to hide
    let sections = document.getElementsByClassName("md-content active");
    // to show
    let flag = document.getElementById("md-" + curSection + "-content");
    

    if(sections[0].id == flag.id){
      return;
    }
    // hide current section
    sections[0].classList.remove("active");
    
    sleep(500).then(() => { 
      let toHide = document.getElementsByClassName("md-sec active");
      toHide[0].classList.toggle("active");
      // let siteSection = document.getElementById("md-site");
      // siteSection.classList.toggle("active"); 
    });

    sleep(500).then(() => { 
      // let toHide = document.getElementsByClassName("md-s-site active");
      // toHide[i].classList.toggle("active");
      // let siteSection = document.getElementById("md-site");
      // siteSection.classList.toggle("active");
      let toShow = document.getElementById("md-" + curSection);
      toShow.classList.toggle("active");  
    });
    sleep(600).then(() => { 
      flag.classList.toggle("active");
    });
    
}

  