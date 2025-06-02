const headerBtn = document.querySelector('.header-btn');
const closeBtn = document.querySelector('.close-btn');
const sideDrawer = document.querySelector('.side-drawer');
const pageOverlay = document.querySelector('.page-overlay');

const headerBtnn = document.querySelector('.filter-btn');
const closeBtnn = document.querySelector('.close-btn-filter');
const sideDrawerr = document.querySelector('.filter-drawer');
const pageOverlayy = document.querySelector('.page-overlay-filter');

const userDropdown = document.querySelector('.btn-p')
const profileWrapper = document.querySelector('.profile-dropdown')

const bell = document.querySelector('.bell');
const notification = document.querySelector('.messages-container')

const cart = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container')
const heart = document.querySelector('.heart')
const heartContainer = document.querySelector('.heart-container')

const explore = document.querySelector('.Explore');
const exploreContainer = document.querySelector('.explore-popper')

const teach = document.querySelector('.teach');
const teachContainer = document.querySelector('.teaching-popper')

const business = document.querySelector('.ud-business');
const businessContainer = document.querySelector('.business-popper')

//first slider
headerBtn.addEventListener('click', () => {
  sideDrawer.classList.add('show');
  closeBtn.style.display = "block";
  pageOverlay.style.display = "block";


})
closeBtn.addEventListener('click', () => {
  sideDrawer.classList.remove('show');
  closeBtn.style.display = "none";
  pageOverlay.style.display = "none";

})

//second slider
headerBtnn.addEventListener('click', () => {
  sideDrawerr.classList.add('show');
  closeBtnn.style.display = "block";
  pageOverlayy.style.display = "block";

})
closeBtnn.addEventListener('click', () => {
  sideDrawerr.classList.remove('show');
  closeBtnn.style.display = "none";
  pageOverlayy.style.display = "none";
})

//color-changer when clicked
// const checkImages = document.querySelectorAll('.border-img');

// checkImages.forEach((checkImage) => {
//   checkImage.addEventListener('click', () => {
//     checkImage.classList.toggle('checked');
//   }); 
// });


//profile dropdown
userDropdown.addEventListener('mouseover',()=>{
  profileWrapper.classList.add('pop')
  userDropdown.classList.add('changeBg')
})
userDropdown.addEventListener('mouseleave',()=>{
  profileWrapper.classList.remove('pop')
  userDropdown.classList.remove('changeBg')
})


//remove event at 981px;
headerBtnn.addEventListener('click', () => {
  if (window.innerWidth >= 981) {
    sideDrawerr.classList.remove('show');
    closeBtnn.style.display = "none";
    pageOverlayy.style.display = "none";
  }
})

//pop notification
bell.addEventListener('mouseover',()=>{
  notification.classList.add('pop')
  bell.classList.add('changeBg')
})
bell.addEventListener('mouseleave',()=>{
  notification.classList.remove('pop')
  bell.classList.remove("changeBg")
})

//pop cart
cart.addEventListener('mouseover',()=>{
  cartContainer.classList.add('pop')
  cart.classList.add('changeBg')
})
cart.addEventListener('mouseleave',()=>{
  cartContainer.classList.remove('pop')
  cart.classList.remove("changeBg")
})
//pop heart
heart.addEventListener('mouseover',()=>{
  heartContainer.classList.add('pop')
  heart.classList.add("changeBg")
})
heart.addEventListener('mouseleave',()=>{
  heartContainer.classList.remove('pop')
  heart.classList.remove("changeBg")
})
//explore popper
explore.addEventListener('mouseover',()=>{
  exploreContainer.classList.add('pop')
  explore.classList.add('changeBg')
})
explore.addEventListener('mouseleave',()=>{
  exploreContainer.classList.remove('pop')
  explore.classList.remove('changeBg')
})
//pop teach
teach.addEventListener('mouseover',() => {
  teachContainer.classList.add('pop');
  teach.classList.add('changeBg')
})
teach.addEventListener('mouseleave',() => {
  teachContainer.classList.remove('pop');
  teach.classList.remove('changeBg')
})
//pop business
business.addEventListener('mouseover',() => {
  businessContainer.classList.add('pop');
  business.classList.add('changeBg')
})
business.addEventListener('mouseleave',() => {
  businessContainer.classList.remove('pop');
  business.classList.remove('changeBg')
})
console.log(business);
//rotateArrow
const arrowImages = document.querySelectorAll('.arrowImage');

arrowImages.forEach(img => {
  img.addEventListener('click', () => {
    //closest finds the closest parent element (accordion-panel) and queryselector finds the child element within parent element
    const wrapper = img.closest('.accordion-panel').querySelector('.accordion-content-wrapper');
    
    //if(wrappper)-means it only runs the event only if it finds the child element within parent element(accordion-panel and accordion content wrapper)
    if (wrapper) {

      if (wrapper.style.display === 'block') {
        wrapper.style.display = 'none';
      } else {
        wrapper.style.display = 'block';
      }

      img.classList.toggle('rotateArr');
    }
  });
});



//fetch courses data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
//array to store selected topics

let SelectedTopics = []
let selectedLevels = []

//filter 
function FilterCourses(){
  
  const courseContainer = document.querySelector('.course-list-container');
  courseContainer.innerHTML='';
  let FilteredCourses;
//all course
if(SelectedTopics.length === 0 && selectedLevels.length === 0){
  FilteredCourses = data.courses;
}else{
  FilteredCourses = data.courses.filter(course =>{
    const Topic = SelectedTopics.length === 0|| SelectedTopics.some(topic =>
       course.name.toLowerCase().includes(topic.toLowerCase())
      );
    const levell = selectedLevels.length === 0 || selectedLevels.some(level =>
      course.level.toLowerCase().includes(level.toLowerCase())
    );
    return Topic && levell;

    });

  }
//disable function
// function disableCheckboxes(disable){
//   const checkboxes = document.querySelectorAll('.topic-checkbox,.level-checkbox');
//   checkboxes.forEach(checkbox =>{
//     checkbox.disabled = disable;
//   })
// }
//  //disable checkbox
//  if(FilteredCourses.length === 0){
//   disableCheckboxes(true);
//  } else{
//   disableCheckboxes(false);
//  }


//if no courses found
if(FilteredCourses.length === 0){
  
  const emptymsg = document.createElement('div');
  emptymsg.classList.add('no-course');
  emptymsg.textContent = ' 🚫 No results found... Adjust your filters and try again!';
  courseContainer.appendChild(emptymsg)
}else{
  //display filtered course
  FilteredCourses.forEach(course => {
    const coursecard = document.createElement('div');
    coursecard.classList.add('module-popper');
    coursecard.innerHTML = `
    <div class="course-card">
            <div class="module-img">
              <img src="${course.image}" alt="${course.name}" class="course-card-image" />
            </div>
            <div class="module-main-content">
              <div style="margin-bottom: 4px; line-height: 17px">
                <h3 class="module-title">
                  <a href="/course/${course.name}">
                    ${course.name}
                  </a>
                </h3>
              </div>
              <p class="course-description">
                ${course.p}
              </p>
              <div class="card-instructor">${course.instructor}</div>
              <div class="card-rating">
                <span class="rating-number">${course.rating}</span>
                <img src="SVG/svgexport-12.svg">
                <span class="review-text">${course.reviews}</span>
              </div>
               <div class="meta-infoo">
                <span class="module-row">${course.hours}</span>
                <span class="module-row">${course.lectures}</span>
                <span class="module-row">${course.level}</span>
              </div>
              <div class="price-text-container">
                <div class="price-text">
                  <span>${course.price}</span>
                </div>
              </div>
            </div>
          </div>
    `;
    courseContainer.appendChild(coursecard);
  })
}
}
FilterCourses();

//arduino checkbox 
const arduinoCheckBox = document.querySelector('#u55-checkbox--1357');
arduinoCheckBox.addEventListener('click',() => {
  if(arduinoCheckBox.checked){
    SelectedTopics.push('arduino')
  }else{
    SelectedTopics = SelectedTopics.filter(topic => topic !== 'arduino')
  }
  FilterCourses()
});
//it fundamentals
const ITCheckbox = document.querySelector('#u55-checkbox--1358');
ITCheckbox.addEventListener('click',() => {
  if(ITCheckbox.checked){
    SelectedTopics.push('it fundamentals')
  }else{
    SelectedTopics = SelectedTopics.filter(topic => topic !== 'it fundamentals')
  }
  FilterCourses()

})

//electronics
const electronicCheckbox = document.querySelector('#u55-checkbox--1359');

electronicCheckbox.addEventListener('click',()=>{
  if(electronicCheckbox.checked){
    SelectedTopics.push('electronics')
  }else{
    SelectedTopics = SelectedTopics.filter(topic => topic !== 'electronics')
  }
  FilterCourses()
})
//computer hardware
const computer = document.querySelector('#u55-checkbox--1362');

computer.addEventListener('click',()=>{
  if(computer.checked){
    SelectedTopics.push('computer hardware')
  }else{
    SelectedTopics = SelectedTopics.filter(topic => topic !== 'computer hardware')
  }
  FilterCourses()
})
//levels
const AllLevel = document.querySelector('#all-level')
const Beginner = document.querySelector('#beginner')
const intermediate = document.querySelector('#intermediate')
const expert = document.querySelector('#expert')
//all level
AllLevel.addEventListener('click',() =>{
  if(AllLevel.checked){
    selectedLevels.push('All level');
  }else{
    selectedLevels = selectedLevels.filter(level => level !== 'All level')
  }
  FilterCourses();
});
//beginner
Beginner.addEventListener('click',() =>{
  if(Beginner.checked){
    selectedLevels.push('beginner');
  }else{
    selectedLevels = selectedLevels.filter(level => level !== 'beginner')
  }
  FilterCourses();
})
//intermediate
intermediate.addEventListener('click',() =>{
  if(intermediate.checked){
    selectedLevels.push('intermediate');
  }else{
    selectedLevels = selectedLevels.filter(level => level !== 'intermediate')
  }
  FilterCourses();
})
//expert
expert.addEventListener('click',() =>{
  if(expert.checked){
    selectedLevels.push('expert');
  }else{
    selectedLevels = selectedLevels.filter(level => level !== 'expert')
  }
  FilterCourses();
})
  });



const doneBtn = document.querySelector('.bottom-sticky-btn');
doneBtn.addEventListener('click',()=>{
  pageOverlayy.style.display="none";
  closeBtnn.style.display="none"

})
const hideFilter = document.querySelector('.filter-drawer-left');
const container = document.querySelector('.course-list-container')
headerBtnn.addEventListener('click',()=>{
  hideFilter.classList.toggle('transition');
  container.classList.toggle('position');
  hideFilter.classList.toggle('pop');

})
const accordionTogglers = document.querySelectorAll('.accordion-toggler');
const accordionwrapper = document.querySelectorAll('.accordion-content-wrapper');
const arrowIcons = document.querySelectorAll('.arrowImage')
accordionTogglers.forEach((accordionToggler,index) =>{
  accordionToggler.addEventListener('click',()=>{
    accordionwrapper[index].classList.toggle('displayContents')
    arrowIcons[index].classList.toggle('rotateArr')
  })
})


document.querySelectorAll('.topic-checkbox').forEach(checkbox => {
  const svg = checkbox.closest('label').querySelector('svg'); 

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      svg.classList.add('checked');  
    } else {
      svg.classList.remove('checked');  
    }
  });
});
//checked-980px
const checkImages = document.querySelectorAll('.border-imgs');
checkImages.forEach(checkImage =>{
  checkImage.addEventListener('click',()=>{
  checkImage.classList.toggle('removes')
})
});

document.querySelectorAll('.check').forEach(div => {
  div.addEventListener('click', () => {
    const checkbox = div.querySelector('input[type="checkbox"]');
    if (checkbox) {
      if (checkbox.checked) {
        checkbox.checked = false; 
      } else {
        checkbox.checked = true; 
      }
    }
    
  });
});

const filterbg = document.querySelector('.filter-btn');
filterbg.addEventListener('mouseover',()=>{
  filterbg.classList.add('bg')
})
filterbg.addEventListener('mouseleave',()=>{
  filterbg.classList.remove('bg')
})
const sortbg = document.querySelector('#select');
sortbg.addEventListener('mouseover',()=>{
  sortbg.classList.add('bg')
})
sortbg.addEventListener('mouseleave',()=>{
  sortbg.classList.remove('bg')
})









      
 





































 






































 


























7












