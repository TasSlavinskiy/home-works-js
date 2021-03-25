
    // the first task

    let customWindow = window.open("./index.html", "Custom Window", "width=300,height=300");

    function changeWindow(customWindow, timeout) {
        setTimeout( ()=> {
            setWindow(customWindow, 500);
            setTimeout( ()=> {
                setWindow(customWindow, 500, 200);
                setTimeout( ()=> {
                    customWindow.close();
                }, timeout)
            }, timeout)
        }, timeout)
    }

    function setWindow(customWindow, configSize, configCoordinates) {
        customWindow.resizeTo(configSize, configSize);
        customWindow.moveTo(configCoordinates, configCoordinates);
    }

    changeWindow(customWindow, 2000)

    // the second task

    const button_for_change_style_p = document.querySelector(".change_style");
    const p_change_style = document.querySelector("#text");

    button_for_change_style_p.addEventListener("click", ()=> {
        p_change_style.style.color = "orange";
        p_change_style.style.fontSize = "20px";
        p_change_style.style.fontFamily = "Comic Sans MS";
    })
    
    // the third task

    const thridSection = document.querySelector("#thirdTask");
    let just_click = thridSection.querySelector(".just_click"),
        double_click = thridSection.querySelector(".double_click"),
        hold_click = thridSection.querySelector(".hold_click"),
        hover_link = thridSection.querySelector("a");

    function changeBackgroundInThridSection(element, event, color) {
        element.addEventListener(event, () => {
            if (thridSection.classList.contains(color)) {
                changeBackground(thridSection, "");
            } else {
                changeBackground(thridSection, color);
            }
        })
    }


    function changeBackground(elem, color) {
        elem.style.background = color;
        elem.className = color;
    }

    changeBackgroundInThridSection(just_click, "click", "#53A0F3");
    changeBackgroundInThridSection(double_click, "dblclick", "#F77BCF");
    changeBackgroundInThridSection(hold_click, "mousedown", "#9F5F16");
    changeBackgroundInThridSection(hold_click, "mouseup", "#9F5F16");
    changeBackgroundInThridSection(hover_link, "mouseover", "#EFFF4D");
    changeBackgroundInThridSection(hover_link, "mouseout", "#EFFF4D");

    // the fourth task 

    const selectMenu = formDropDown.names;

    function deleteOption(){
        let removeButton = formDropDown.remove;
        let selectedOption = selectMenu.options[selectMenu.selectedIndex];
        removeButton.addEventListener("click", ()=> {
            selectedOption.remove();
        })
    }
     
    selectMenu.addEventListener("change", deleteOption);

    // the fifth task

    const buttonLive = document.querySelector(".live-button");
    const textArea = document.querySelector(".text-section");

    function addText(text) {
        let pElem = document.createElement("p");
        textArea.appendChild(pElem);
        pElem.innerText = text;
    }

    class LiveButton {
        handleEvent(event) {
            switch (event.type) {
                case "click":
                    addText("I was pressed!")
                    break;
                case "mouseover":
                    addText("Mouse on me!")
                    break;
                case "mouseout":
                    addText("Mouse is not on me!")
                    break;    
            }
        }
    }

    let liveButton = new LiveButton();
    buttonLive.addEventListener("click", liveButton);
    buttonLive.addEventListener("mouseover", liveButton);
    buttonLive.addEventListener("mouseout", liveButton);

    // the sixth task

    const size_window = document.querySelector(".size-window");
    let dinamic_span = size_window.firstElementChild;


    window.addEventListener('resize', ()=> {
        let width = window.innerWidth; 
        let height = window.innerHeight; 
        dinamic_span.innerHTML = "Width: " + width + ", Height: " + height;
    });

    //  the seventh task
    
    let citiesGermany = ["Berlin", "Hamburg", "Munich", "Cologne", "Leipzig"],
        citiesUkraine = ["Kyiv", "Odesa", "Donetsk", "Lviv", "Khmelnytskyi"],
        citiesUSA = ["New York", "Los Angeles", "Chicago", "Houston", "Boston", "Atlanta", "Washington"];

    const country_section = document.querySelector(".country-block");     
    const countryNav = country_section.querySelector("#country");
    const citiesNav = country_section.querySelector("#cities");
    let show_paragraph = country_section.lastElementChild;

    function showSelectedItems(country, city) {
        show_paragraph.firstElementChild.innerHTML = country + ", " + city;
    }

    function addCities(country,citiesArr) {
        citiesNav.options.length = 0;
        citiesArr.forEach(element => {
            let option = document.createElement("option");
            citiesNav.appendChild(option)
            option.innerText = element;
        });
        citiesNav.addEventListener("change", ()=> {
            let selectedCity = citiesNav.options[citiesNav.selectedIndex];
            showSelectedItems(country, selectedCity.innerText)
        })
    }
    
    countryNav.addEventListener("change", ()=> {
        let selectedCountry = countryNav.options[countryNav.selectedIndex];
        switch (selectedCountry.value) {
            case "ger":
                addCities(selectedCountry.innerText, citiesGermany)
                break;
            case "usa":
                addCities(selectedCountry.innerText, citiesUSA)
                break;
            case "ukr":
                addCities(selectedCountry.innerText, citiesUkraine)
                break;        
            default:
                break;
        }
    })

