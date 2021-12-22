const swup = new Swup();


function openform() {
    var modal = document.getElementById("modal-contact");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
          
    }
    }
}

// parallax myface //
$('body').mousemove(function(e) {
    var amountMovedX = (e.pageX * -0.6 / 6);
    var amountMovedY = (e.pageY * -0.6 / 6);
    $('.myface').css('left', amountMovedX + 'px');
     $('.myface').css('top', amountMovedY + 'px');
 });
// parallax myface //

function welcomeScribble() {
    
    var scribble = document.querySelector(".is-active");
    scribble.classList.remove("is-active");
    document.getElementById("nav-home").className = " is-active";
}

function aboutScribble() {
    
    var scribble = document.querySelector(".is-active");
    scribble.classList.remove("is-active");
    document.getElementById("nav-about").className += " is-active";
}

function workScribble() {
    
    var scribble = document.querySelector(".is-active");
    scribble.classList.remove("is-active");
    document.getElementById("nav-work").className += " is-active";
}

function contactScribble() {

  var scribble = document.querySelector(".is-active");
  scribble.classList.remove("is-active");
  document.getElementById("nav-contact").className += " is-active";
}






function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-wrap");
  if (c == "eggs");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add highlight class to the current button (highlight it)
function circlescribble() {
  if (document.querySelector('.btn') != null) {
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("highlight");
        current[0].className = current[0].className.replace(" highlight", "");
        this.className += " highlight";
      });
    }
  }
}



function right() {
  const firstList = document.querySelector(".show");
  const ul =firstList.querySelector(".gallery");
// get the first child element
  const chocolate = ul.firstElementChild;
// append chocolate to list
  ul.append(chocolate);
}

function left() {
  const firstList = document.querySelector(".show");
  const ul = firstList.querySelector(".gallery");
// get the first child element
  const chocolate = ul.lastElementChild;
// append chocolate to list
  ul.prepend(chocolate);
}



function createObserver() {
  if (document.querySelector('.fade-in') != null) {
    const faders = document.querySelector(".fade-in");
    const appearOptions = {};

  const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      }
      else {
        return;
      }
    });
  }, appearOptions);

  appearOnScroll.observe(faders);
    }
}




function init() {
  createObserver();
  circlescribble();
}

document.addEventListener('swup:contentReplaced', init);
window.addEventListener("load", init);


//contact form stuff//
var sendbtn = document.querySelector('#send');
var ele = document.getElementsByTagName('input');
var ele2 = document.getElementsByClassName('input')

$(document).ready(function() {
  sendbtn.disabled = true;
  $('input').keyup(function() {
    for (i = 0; i <= ele.length; i++) {

      // Check the element type
      if (ele[i].value != '' && ele[1].value.includes('@')) {
          sendbtn.disabled = false;    // Disable the button.
      }
      else {
          sendbtn.disabled = true;   // Enable the button.
      }
  }
  });
});



//modal sstuff//

var sendbtn = document.querySelector('#send');
var modalbg = document.querySelector('.thanksmodal');
var modalclose = document.querySelector('.modal-close');

sendbtn.addEventListener('click', function() {
  modalbg.classList.add('bg-active');
  $('#form_id').trigger("reset");
});

modalclose.addEventListener('click', function() {
  modalbg.classList.remove('bg-active');
});

window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.classList.remove('bg-active');
        
  }
}