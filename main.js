document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne");
    let slider = document.querySelector(".slider-img");
    let leftArrow = document.querySelector(".leftOne");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    }
});


// 2



document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne2");
    let slider = document.querySelector(".slider-img2");
    let leftArrow = document.querySelector(".leftOne2");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    } 
})


// 3


document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne3");
    let slider = document.querySelector(".slider-img5");
    let leftArrow = document.querySelector(".leftOne3");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    } 
})

// 4 





// 5

document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne3");
    let slider = document.querySelector(".slider-img3");
    let leftArrow = document.querySelector(".leftOne3");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    } 
})

// 6

document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne6");
    let slider = document.querySelector(".slider-img6");
    let leftArrow = document.querySelector(".leftOne6");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    } 
})

// 7


document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne7");
    let slider = document.querySelector(".slider-img7");
    let leftArrow = document.querySelector(".leftOne7");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    }
})

// 8

document.addEventListener("DOMContentLoaded", () => {
    let rightArrow = document.querySelector(".rightOne8");
    let slider = document.querySelector(".slider-img8");
    let leftArrow = document.querySelector(".leftOne8");

    if (rightArrow && slider && leftArrow) {
        rightArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft += 500;
        });

        leftArrow.addEventListener("click", () => {
            slider.style.scrollBehavior = "smooth";
            slider.scrollLeft -= 500;
        });
    }
})






// section1 ----------

// Function to fetch and display data from the first endpoint
function fetchData() {
    fetch("https://web-backend-l6ae.onrender.com/data")
        .then((res) => res.json())
        .then((data) => cardList(data))
        .catch((err) => console.log(err));
}

fetchData();

function cardList(data) {
    let store = data.map((el) => singleCard(el.image, el.name, el.price, el.button));
    document.querySelector(".slider-img").innerHTML = store.join('');
}

function singleCard(image, name, price, button) {
    let card = `
    
        <div class="pic">
        <a href="description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
            <img src="${image}" alt="">
            </a>
            <p>${name}</p>
            <p>${price}</p>
            <button class="btn Add"><a href="">${button}</a></button>
        </div>
    `;
    return card;
}
   
   
//   section 2

document.addEventListener("DOMContentLoaded", () => {
    function fetchWomenData() {
        fetch("https://web-backend-l6ae.onrender.com/womensproduct")
            .then((res) => res.json())
            .then((data) => wCardList(data))
            .catch((err) => console.log(err));
    }

    fetchWomenData();

    function wCardList(data) {
        let collectdata = data.map((el) => womenCard(el.image, el.title, el.price, el.button));
        let sliderImg2Element = document.querySelector(".slider-img2");
        if (sliderImg2Element) {
            sliderImg2Element.innerHTML = collectdata.join("");
        }
    } // <- Moved this closing curly brace here

    function womenCard(image, title, price, button) {
        let women = `
            <div class="pic2">
            <a href="description.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}">
                <img src="${image}" alt="">
                </a>
                <p>${title}</p>
                <p>${price}</p>
                <button class="btn Add"><a href="#">Add TO Card</a></button>
            </div>
        `;
        return women;
    }
});
