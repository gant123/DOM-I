const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Get all Imgs
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Add content for Nav bar items by selecting Nav bar and looping through each <a> tag
let navItems = document.querySelectorAll('a');

let n = 1;
navItems.forEach(function(item) {
  item.innerHTML = siteContent.nav['nav-item-' + n];
  n++;
});

//cta Section
  
let cta = document.querySelector('.cta-text').children;
let h1 = cta[0];
h1.innerHTML = siteContent.cta.h1;

let button = cta[1];
button.innerHTML = siteContent.cta.button;

//Main content
 //Top content
let mainContent = document.querySelector('.text-content').children;
let h4 = mainContent[0];
h4.innerHTML = siteContent['main-content']['features-h4'];

let textP = mainContent[1];
textP.innerHTML = siteContent['main-content']['features-content'];
  //Grab last div on top-content
let aboutH4 = document.querySelector('.top-content').lastElementChild;
  //Create new class to add input from JSON object
aboutH4.classList.add('about-content');
let newAboutH4 = document.querySelector('.about-content').children[0];
newAboutH4.innerHTML = siteContent['main-content']['about-h4'];
// console.log(aboutH4);

let aboutCont = document.querySelector('.about-content').children[1];
aboutCont.innerHTML = siteContent['main-content']['about-content'];


  //bottom Content
let botContent = document.querySelector('.bottom-content').children;
firstH = botContent[0];
secondH = botContent[1];
thirdH = botContent[2];

  //Add classes
 firstH.classList.add('first');
 secondH.classList.add('second');
 thirdH.classList.add('third');

  //link to new classes to add content
 let botContentOne = document.querySelector('.first').children;
 servH4 = botContentOne[0];
 servP = botContentOne[1];
 servH4.innerHTML = siteContent['main-content']['services-h4'];
 servP.innerHTML = siteContent['main-content']['services-content']

 let botContentTwo = document.querySelector('.second').children;
 proH4 = botContentTwo[0];
 proP = botContentTwo[1];
 proH4.innerHTML = siteContent['main-content']['product-h4'];
 proP.innerHTML = siteContent['main-content']['product-content']

 let botContentThree = document.querySelector('.third').children;
 visH4 = botContentThree[0];
 visP = botContentThree[1];
 visH4.innerHTML = siteContent['main-content']['vision-h4'];
 visP.innerHTML = siteContent['main-content']['vision-content']
 
//Contact section
let contact = document.querySelector('.contact').children;
conH4 = contact[0];
address = contact[1];
phone = contact[2];
email = contact[3];

conH4.innerHTML = siteContent['contact']['contact-h4'];
address.innerHTML = siteContent['contact']['address'];
phone.innerHTML = siteContent['contact']['phone'];
email.innerHTML = siteContent['contact']['email'];


//Footer
let foot = document.querySelector('footer').children[0];
foot.innerHTML = siteContent['footer']['copyright'];



