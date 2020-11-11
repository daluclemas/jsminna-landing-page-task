let hamBurger=document.querySelector('.hamburger');
let header=document.querySelector('.header');
let navContent=document.querySelector('.nav-content');
let nav=document.querySelector('.nav');
let navLinks=document.querySelectorAll('.nav-links');
let topIcon=document.querySelector('.top-icon');
let lastIcon=document.querySelector('.last-icon');
let middleIcon=document.querySelector('.middle-icon');
let mobileIcons=document.getElementById('mobile-header-icons');
let navHr=document.querySelectorAll('.nav-content-hr');
let headerImage=document.getElementById('header-img');



document.getElementById('hamburger').addEventListener('click',function (){
    hamBurger.classList.toggle('change');

   header.classList.toggle('header-change');

   navContent.classList.toggle('nav-content-change');

   navLinks.forEach(item=>{
       item.classList.toggle('nav-links-change');
   });

   nav.classList.toggle('nav-change');

   topIcon.classList.toggle('top-icon-change');
   
   lastIcon.classList.toggle('last-icon-change');

   middleIcon.classList.toggle('middle-icon-change');

   mobileIcons.style.display='flex';

   navHr.forEach(item=>{
    item.classList.add('nav-hr-change');

//toggle logo
    const toggle=(img1,img2)=>{

        if(headerImage.src.match(img1)){
            headerImage.src=img2; 
        }

        else{
            headerImage.src=img1;
        } 

    };
   
 toggle('images/logo-bookmark.svg','bookmark-edit5.svg');
    
});

});


//the part under features

let intelligentSearch=document.getElementById('content2-show-text-h1');
let intelligentSearch2=document.getElementById('content2-show-text-p');
let imgChange=document.getElementById('content-show-image');


//speedy sharing
document.getElementById('content2-div2').addEventListener('click',function (){

    document.getElementById('content2-div2').style.borderBottom='2px solid var(--primary-soft-red)';

    document.getElementById('content2-div1').style.borderBottom='none';

    document.getElementById('content2-div3').style.borderBottom='none';

    imgChange.src='images/illustration-features-tab-2.svg';

    intelligentSearch.textContent='intelligent search';

    intelligentSearch2.textContent='our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
});


//easy sharing
document.getElementById('content2-div3').addEventListener('click',function (){

    document.getElementById('content2-div3').style.borderBottom='2px solid var(--primary-soft-red)';

    document.getElementById('content2-div2').style.borderBottom='none';

    document.getElementById('content2-div1').style.borderBottom='none';

    imgChange.src='images/illustration-features-tab-3.svg';

    intelligentSearch.textContent='share your bookmarks';

    intelligentSearch2.textContent='easily share your bookmarks and collections with others. Create a shareable link that youcan send at the click of a button.';
});


//faQs
document.getElementById('content2-div1').addEventListener('click',function (){

    document.getElementById('content2-div1').style.borderBottom='2px solid var(--primary-soft-red)';

    document.getElementById('content2-div2').style.borderBottom='none';

    document.getElementById('content2-div3').style.borderBottom='none';

    imgChange.src='images/illustration-features-tab-1.svg';

    intelligentSearch.textContent='bookmark in one click';

    intelligentSearch2.textContent='organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.';
});

//faQs-what is bookmark
let bookmarkDisplay=document.getElementById('bookmark-images');

bookmarkDisplay.addEventListener('click',function (){
    let paragraphToggle=document.querySelector('.bookmark-text-display');

    paragraphToggle.classList.toggle('display');
});

//faqs-how can i request a new browser
let requestDisplay=document.getElementById('request-images');

requestDisplay.addEventListener('click',function (){
    let paragraphToggle=document.querySelector('.request-text-display');

    paragraphToggle.classList.toggle('display');
});


//faqs-is there a mobile app
let mobileappDisplay=document.getElementById('mobile-app-images');

mobileappDisplay.addEventListener('click',function (){
    let paragraphToggle=document.querySelector('.mobile-app-text-display');

    paragraphToggle.classList.toggle('display');
});


//faqs-what about other chromium browser
let chromiumDisplay=document.getElementById('chromium-images');

chromiumDisplay.addEventListener('click',function (){
    let paragraphToggle=document.querySelector('.chromium-text-display');

    paragraphToggle.classList.toggle('display');
});

let logIn=document.querySelector( '.login-link');

logIn.addEventListener('click', function (){
    window.location.assign('jsminna signup/index.html')
});