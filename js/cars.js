function visibleFindStore() {
  document.getElementById("findstore").style.visibility = "visible";
}

function dltLoginStorageEvent() {
  document.getElementById("findstore").style.visibility = "hidden";
}

/*******----sign in form---*****/

function signIn() {
  document.getElementById("signIn").style.display = "block";
  document.getElementById("signUp").style.display = "none";
  document.getElementById("hidden-All").style.opacity = ".1";
}

function signUp() {
  document.getElementById("signUp").style.display = "block";
  document.getElementById("signIn").style.display = "none";
  document.getElementById("hidden-All").style.opacity = ".1";
}

function closForms() {
  document.getElementById("signIn").style.display = "none";
  document.getElementById("signUp").style.display = "none";
  document.getElementById("hidden-All").style.opacity = "1";
}

/*sign in foerm*/

/*responseve site*/

var myHiddenMenu = document.getElementById("menu-container"),
  munuButton = document.getElementById("menu-button");

function vuFunc() {
  "use strict";

  myHiddenMenu.classList.toggle("container-menu-two");

  mySection.classList.remove("section");
  findStore.classList.remove("myfind");
  myLoginTable.classList.remove("login-two");
  munuButton.classList.toggle("transformation");
}

/*responseve site*/

/*---------------start functions of chang background Imgs---------------****
 ******----------------------------------------------------------***********/

function changImgs() {
  var randomImgs = Math.floor(Math.random() * myImgs.length);

  document.getElementById(
    "background"
  ).style.backgroundImage = `url(${myImgs[randomImgs]})`;
}

window.addEventListener("load", changImgs);

setInterval(changImgs, 7000);

var myMinus = -100;

document.getElementById("background").style.height =
  window.innerHeight + myMinus + "px";

/*---------------end functions of chang background Imgs---------------******
 *****-----------------------------------------------------------***********/

/**********----------start back to up-----------*************/

var butnup = document.getElementById("backUP");

window.onscroll = function () {
  if (window.pageYOffset >= 900) {
    butnup.style.display = "block";
  } else {
    butnup.style.display = "none";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', { speed: 700 });

/**********----------end back to up-----------*************/

/*--start the code of show password-------------******------------*/

var inputPss = document.getElementById("pssd"),
  btnpssd = document.getElementById("btnshow");

inputPss.oninput = function () {
  btnpssd.style.visibility = "visible";

  if (this.value == "") {
    btnpssd.style.visibility = "hidden";
  }
};

btnpssd.onclick = function () {
  if (this.textContent === "show") {
    inputPss.setAttribute("type", "text");
    btnpssd.textContent = "hide";
  } else {
    inputPss.setAttribute("type", "password");
    btnpssd.textContent = "show";
  }
};

var inputPss2 = document.getElementById("pssd2"),
  btnpssd2 = document.getElementById("btnshow2");

inputPss2.oninput = function () {
  btnpssd2.style.visibility = "visible";

  if (this.value == "") {
    btnpssd2.style.visibility = "hidden";
  }
};

btnpssd2.onclick = function () {
  if (this.textContent === "show") {
    inputPss2.setAttribute("type", "text");
    btnpssd2.textContent = "hide";
  } else {
    inputPss2.setAttribute("type", "password");
    btnpssd2.textContent = "show";
  }
};

/*--end the code of show password-------------******------------*/

/**-------chang type------**/

function changInputType() {
  document.getElementById("emailUP").setAttribute("type", "email");
  document.getElementById("username").setAttribute("type", "email");

  if (btnpssd2.textContent === "hide") {
    inputPss2.setAttribute("type", "password");
  }
  if (btnpssd.textContent === "hide") {
    inputPss.setAttribute("type", "password");
  }
}

/**-------chang type------**/

/*----end the code of search----*/

/**--------start the code of the products----**
 **-------------------------------------------**/

/*----start search in products----*/

var Myinput = document.getElementById("SearchByName");

function eventOFsearch() {
  var value = Myinput.value;

  var data = mySearch(value, myProductData);
  addProduct(data);

  showGalry();
}

addProduct(myProductData);

function mySearch(value, data) {
  filteredData = [];

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    var name = data[i].name.toLowerCase();

    if (name.includes(value)) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
}

/*----end search in products----*/

function addProduct(data) {
  const container = document.getElementById("newcarsContainer");
  container.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var myElement = `
  
    <div>
      <div>
          <p>
            <span>${data[i].description}</span>
            <span>${data[i].Module}</span>
            <span>${data[i].price}</span>
          </p>   
      </div>
      <img src=${data[i].src} name="${myProductData[i].price}" 
      data-text="${myProductData[i].description}">
    </div>
  `;

    container.innerHTML += myElement;
  }
}

/**--------start the code of the products---------**
 ***--------------------------------------------***/

/**-------Start Learn more container Galery--------**/

const LearnMoreGalery = document.getElementById("LearnMoreGalery");
var CNTRGalery = document.getElementById("CNTRGalery");
var containerProducts = document.getElementById("newcarsContainer");
var CNTallSITE = document.getElementById("hidden-All");
const closeMore = document.getElementById("closeMore");

window.onload = function () {
  showGalry();

  CNTRGalery.innerHTML = "";

  for (var i = 0; i < myProductData.length; i++) {
    var myElementTwo = `
      
        <div>
          <div>
              <p>
                <span>${myProductData[i].description}</span>
                <span>${myProductData[i].Module}</span>
                <span>${myProductData[i].price}</span>
              </p>
          </div>
          <img src=${myProductData[i].src} name="${myProductData[i].price}" 
          data-text="${myProductData[i].description}">
        </div>
      `;
    CNTRGalery.innerHTML += myElementTwo;

    for (var i = 0; i < CNTRGalery.children.length; i++) {
      CNTRGalery.children[i].onclick = function () {
        document.getElementById("details").style.display = "block";

        document.getElementById("description").innerHTML = "";
        document.getElementById(
          "description"
        ).innerHTML += this.lastElementChild.getAttribute("data-text");
        document.getElementById("price").innerHTML = "";
        document.getElementById(
          "price"
        ).innerHTML += this.lastElementChild.name;

        document.getElementById("detailsIMG").innerHTML = "";
        var myCopy = this.lastElementChild.cloneNode(true);
        document.getElementById("detailsIMG").append(myCopy);

        window.scrollTo(0, 0);
      };
    }
  }
};

function showGalry() {
  for (var i = 0; i < containerProducts.children.length; i++) {
    containerProducts.children[i].addEventListener("click", function () {
      addClasses();

      showDetails(this);
    });
  }
}

function showDetails(paramThis) {
  document.getElementById("details").style.display = "block";

  document.getElementById("description").innerHTML = "";
  document.getElementById(
    "description"
  ).innerHTML += paramThis.lastElementChild.getAttribute("data-text");
  document.getElementById("price").innerHTML = "";
  document.getElementById("price").innerHTML += paramThis.lastElementChild.name;

  document.getElementById("detailsIMG").innerHTML = "";
  var myCopy2 = paramThis.lastElementChild.cloneNode(true);
  document.getElementById("detailsIMG").append(myCopy2);

  document.getElementById("twoCNTR").scrollTo(0, 0);
}

function addClasses() {
  document.getElementById("details").style.display = "none";

  CNTallSITE.classList.add("cnt-all");
  closeMore.style.display = "block";
  LearnMoreGalery.style.display = "block";

  document.getElementById("twoCNTR").scrollTo(0, 0);
}

var x = -55;

var Galerycntr = document.getElementById("twoCNTR");

Galerycntr.style.height = window.innerHeight + x + "px";

/*---close the Learn more---*/

function closeTheMore() {
  CNTallSITE.classList.remove("cnt-all");
  LearnMoreGalery.style.display = "none";
  closeMore.style.display = "none";

  window.scrollTo(0, 1700);
}

/*---close the Learn more---*/

/**-------End Learn more container Galery--------**/
