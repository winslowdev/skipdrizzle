console.log('keep calm and clear or mostly sunny')


$(() => { /// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///

    // ============================================================================================ //
    // ============================================================================================ //
    // HEADER //// WITH APP TITLE
    // ============================================================================================ //
    // ============================================================================================ //

    // HEADER — APPENDED TO BODY
    const $header = $('<header>')
    $header.appendTo('body')

    // APP TITLE — APPENDED TO HEADER
    const $h1 = $('<h1>').text('weather or not')
    $h1.appendTo($header)

    // ============================================================================================ //
    // ============================================================================================ //
    // #LOCATION-CONTAINER //// WITH LOCATION INPUTS
    // ============================================================================================ //
    // ============================================================================================ //

    // LOCATION INPUT CONTAINER — APPENDED TO BODY
    const $locationContainer = $('<div>').attr('id', 'location-container')
    $locationContainer.appendTo('body')

    // ========== FROM CITY

    // CURRENT LOCATION DIV
    const $fromCity = $('<div>').addClass('location-input')
    $fromCity.appendTo($locationContainer)

    // CURRENT LOCATION INPUT
    const $fromCityAnswer = $('<input>').attr({
        'type': 'text',
        'name': 'from-city-answer',
        'placeholder': 'I\'m currently in...' // VISIBLE TO USERS
    })
    $fromCityAnswer.appendTo($fromCity)// FROM CITY ANSWER FIELD ADDED TO FROM CITY DIV

    // ========== TO CITY

    // TO LOCATION DIV
    const $toCity = $('<div>').addClass('location-input')
    $toCity.appendTo($locationContainer)

    // TO LOCATION INPUT
    const $toCityAnswer = $('<input>').attr({
        'type': 'text',
        'name': 'to-city-answer',
        'placeholder': 'But I\'m going to...' // VISIBLE TO USERS
    })
    $toCityAnswer.appendTo($toCity)// TO CITY ANSWER FIELD ADDED TO TO CITY DIV

    // // ========== SUBMIT CITIES

    const $buttonCities = $('<button>').attr({ // BUTTON FOR SUBMITTING LOCATIONS
        'type': 'submit',
        'value': 'submit-cities',
        'id': 'lets-go'
    }).text('let\'s go') // TEXT ON BUTTON; LET'S GO + ARROW

    const $buttonCitiesIcon = $('<img>').attr({ // ARROW ICON ON CITIES BUTTON
        'src': 'images/arrow-white.png',
        'id': 'button-cities-icon'
    })
    $buttonCitiesIcon.appendTo($buttonCities) // ADDED ARROW TO CITIES BUTTON
    $buttonCities.appendTo($locationContainer) // SUBMIT CITIES BUTTON ADDED TO HEADER

    // ============================================================================================ //
    // ============================================================================================ //
    // MAIN //// CONTAINS LEFT AND RIGHT ARROWS & FORECAST CAROUSEL
    // ============================================================================================ //
    // ============================================================================================ //

    const $main = $('<main>') // CREATED MAIN CONTENT CONTAINER
    $main.appendTo('body')  // ADDED TO THE BODY, BELOW HEADER

    const $h2main = $('<h2>').attr('id', 'atlanta')
    $h2main.appendTo($main)

    // ========== LEFT ARROW

    const $arrowBack = $('<div>').addClass('nav-arrow') // CREATED LEFT ARROW CONTAINER
    $arrowBack.hide()
    $arrowBack.appendTo($main) // ADDED TO MAIN

    const $arrowBackIcon = $('<img>').attr({ // CREATED LEFT ARROW
        'src': 'images/arrow-white.png',
        'id': 'left-arrow'
    })
    $arrowBackIcon.appendTo($arrowBack) // ADDED LEFT ARROW TO LEFT ARROW CONTAINER

    const $arrowBackLabel = $('<p>').attr('id', 'nav-arrow-back').text('back')
    $arrowBackLabel.appendTo($arrowBack)

    // ====================================================================== FORECAST CAROUSEL

    const $currentReports = $('<div>').attr('id', 'current-reports')
    $currentReports.appendTo($main)

    // ======== CITY 1 ========= //
    const $report1 = $('<div>').addClass('forecast')
    $report1.appendTo($currentReports)

    // ======== CITY 2 ========= //
    const $report2 = $('<div>').addClass('forecast')
    $report2.appendTo($currentReports)

    // ======== SUMMARY ========= //
    const $report3 = $('<div>').addClass('forecast')
    $report3.appendTo($currentReports)

    // ========== RIGHT ARROW

    const $arrowNext = $('<div>').addClass('nav-arrow') // CREATED RIGHT ARROW CONTAINER
    $arrowNext.hide()
    $arrowNext.appendTo($main) // ADDED TO MAIN

    const $arrowNextIcon = $('<img>').attr({ // CREATED RIGHT ARROW
        'src': 'images/arrow-white.png',
        'id': 'nav-arrow-next'
    })
    $arrowNextIcon.appendTo($arrowNext) // ADDED RIGHT ARROW TO RIGHT ARROW CONTAINER

    const $arrowNextLabel = $('<p>').attr('id', 'back-arrow-label').text('next')
    $arrowNextLabel.prependTo($arrowNext)

    // ====================================================================== FORECAST CAROUSEL
    // ====================================================================== FORECAST CAROUSEL


    // ========== BUTTON INFORMATION

    let currentCityIndex = 0
    let $currentCity = $currentReports.children().eq(currentCityIndex)
    let numberOfMessages = $currentReports.children().length - 1


    $arrowNextIcon.on('click', () => { // next button
        $currentCity.hide()
        if (currentCityIndex < numberOfMessages) {
            currentCityIndex += 1
        } else {
            currentCityIndex = 0
        }
        $currentCity = $($currentReports).children().eq(currentCityIndex)
        // show the new currentCity
        $currentCity.show()
    })

    $arrowBackIcon.on('click', () => {
        $currentCity.hide()
        if (currentCityIndex > 0) {
            currentCityIndex -= 1
        } else {
            currentCityIndex = numberOfMessages
        }
        $currentCity = $($currentReports).children().eq(currentCityIndex)
        $currentCity.show()
    })

    console.log(numberOfMessages)

    // ============================================================================================ //
    // ============================================================================================ //
    // FOOTER
    // ============================================================================================ //
    // ============================================================================================ //

    const $footer = $('<footer>')
    $footer.html('this app was made with determination and a mac. <span class="break">keep calm and clear or mostly sunny.')
    $footer.appendTo('body')

    // ============================================================================================ //
    // ============================================================================================ //
    // AJAX //////////////////// STRONGER THAN GREECE / GREASE. THE MORE YOU REALIZE.
    // ============================================================================================ //
    // ============================================================================================ //

    // ========== ICON GLOSSARY
    const $iconClear = $('<img>').attr({ 'src': 'images/weather/clear.png', 'id': 'sky-conditions' })
    const $iconCloudy = $('<img>').attr({ 'src': 'images/weather/cloudy-part.png', 'id': 'sky-conditions' })
    const $iconDrizzleMist = $('<img>').attr({ 'src': 'images/weather/drizzle-mist.png', 'id': 'sky-conditions' })
    const $iconDustSandAsh = $('<img>').attr({ 'src': 'images/weather/dust-sand-ash.png', 'id': 'sky-conditions' })
    const $iconFog = $('<img>').attr({ 'src': 'images/weather/fog-haze.png', 'id': 'sky-conditions' })
    const $iconRain = $('<img>').attr({ 'src': 'images/weather/rain.png', 'id': 'sky-conditions' })
    const $iconSmoke = $('<img>').attr({ 'src': 'images/weather/smoky.png', 'id': 'sky-conditions' })
    const $iconSnow = $('<img>').attr({ 'src': 'images/weather/snow.png', 'id': 'sky-conditions' })
    const $iconStorm = $('<img>').attr({ 'src': 'images/weather/thunderstorm.png', 'id': 'sky-conditions' })
    const $iconTornado = $('<img>').attr({ 'src': 'images/weather/tornado.png', 'id': 'sky-conditions' })
    const $iconCrystalBall = $('<img>').attr({ 'src': 'images/or-not/crystal-ball.png', 'id': 'sky-conditions' })
    
    // ==== OTHER ICONS
    const $iconCoffee = $('<img>').attr({ 'src': 'images/or-not/coffee.png', 'id': 'sky-conditions' })
    const $iconDrink = $('<img>').attr({ 'src': 'images/or-not/drink.png', 'id': 'sky-conditions' })
    const $iconShorts = $('<img>').attr({ 'src': 'images/or-not/shorts.png', 'id': 'sky-conditions' })
    const $iconSwimwear = $('<img>').attr({ 'src': 'images/or-not/swimwear.png', 'id': 'sky-conditions' })
    
    let atlanta = 30303;

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?zip=" + atlanta + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
    }).then(
        (data) => {
            ///// ATLANTA /////
            const homeConditions = data.weather[0].main; // cloud conditions
            const homeTemperature = Math.round(data.main.temp); // current temperature
            let homeWeather;

            if (homeConditions === "Clouds") {
                homeWeather = "partly cloudy";
            } else if (homeConditions === "Clear") {
                homeWeather = "clear"
            } else if (homeConditions === "Thunderstorm") {
                homeWeather = "storming"
            } else if (homeConditions === "Rain") {
                homeWeather = "raining"
            } else if (homeConditions === "Drizzle") {
                homeWeather = "drizzling"
            } else if (homeConditions === "Mist") {
                homeWeather = "misty"
            } else if (homeConditions === "Haze") {
                homeWeather = "hazy"
            } else if (homeConditions === "Snow") {
                homeWeather = "snowing"
            } else if (homeConditions === "Smoke") {
                homeWeather = "smoky"
            } else if (homeConditions === "Dust") {
                homeWeather = "dusty"
            } else if (homeConditions === "Sand") {
                homeWeather = "sand"
            } else if (homeConditions === "Ash") {
                homeWeather = "there's volcanic ash"
            } else if (homeConditions === "Squall") {
                homeWeather = "super frickin' windy"
            } else if (homeConditions === "Tornado") {
                homeWeather = "there's a tornado watch"
            } else {
                homeWeather = "who knows"
            }

            $h2main.html('Hello from <span class="break">Atlanta</span> — <br /> where it\'s ' + homeTemperature + '°F and ' + homeWeather)
            console.log(atlanta + ": " + homeConditions + ", " + homeTemperature)
        },
        () => {
            console.log('coming back foggy. try again')
        })

    $('#lets-go').on('click', (event) => { // submit location on click
        event.stopPropagation(); // prevent page from reloading;


        $arrowNext.show()
        $arrowBack.show()
        $h2main.hide()

        let cityStart = $('input[name="from-city-answer"]').val(); // answers to the 'where from?'
        let cityEnd = $('input[name="to-city-answer"]').val(); // answers to the 'where from?'

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityStart + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
        }).then(
            (data) => {
                ///// CITY 1 /////
                const skyConditions1 = data.weather[0].main; // cloud conditions
                const currentTemp1 = Math.round(data.main.temp); // current temperature
                const city1 = data.name; // current temperature
                let weathering1;
                console.log(skyConditions1)

                if (skyConditions1 === "Clouds") {
                    weathering1 = "partly cloudy";
                    $iconCloudy.appendTo($report1)
                } else if (skyConditions1 === "Clear") {
                    weathering1 = "clear";
                    $iconClear.appendTo($report1)
                } else if (skyConditions1 === "Thunderstorm") {
                    weathering1 = "storming"
                    $iconStorm.appendTo($report1)
                } else if (skyConditions1 === "Rain") {
                    weathering1 = "raining"
                    $iconRain.appendTo($report1)
                } else if (skyConditions1 === "Drizzle") {
                    weathering1 = "drizzling"
                    $iconDrizzleMist.appendTo($report1)
                } else if (skyConditions1 === "Mist") {
                    weathering1 = "misty"
                    $iconDrizzleMist.appendTo($report1)
                } else if (skyConditions1 === "Haze") {
                    weathering1 = "hazy"
                    $iconFog.appendTo($report1)
                } else if (skyConditions1 === "Snow") {
                    weathering2 = "snowing"
                    $iconSnow.appendTo(report1)
                } else if (skyConditions1 === "Smoke") {
                    weathering1 = "smoky"
                    $iconSmoke.appendTo($report1)
                } else if (skyConditions1 === "Dust") {
                    weathering1 = "dusty"
                    $iconDustSandAsh.appendTo($report1)
                } else if (skyConditions1 === "Sand") {
                    weathering1 = "sandy"
                    $iconDustSandAsh.appendTo($report1)
                } else if (skyConditions1 === "Ash") {
                    weathering1 = "there's volcanic ash"
                    $iconFog.appendTo($report1)
                } else if (skyConditions1 === "Squall") {
                    weathering1 = "super frickin' windy"
                    $iconFog.appendTo($report1)
                } else if (skyConditions1 === "Tornado") {
                    weathering1 = "there's a tornado watch"
                    $iconTornado.appendTo($report1)
                } else {
                    const $noData = $('<h2>').text("We're channeling Miss Cleo and everything's coming back foggy. Try again later.")
                    $noData.appendTo($report1)
                    $iconCrystalBall.appendTo($report1)
                }

                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityEnd + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
                }).then(
                    (data) => {

                        ///// CITY 2 /////
                        const skyConditions2 = data.weather[0].main; // cloud conditions
                        const currentTemp2 = Math.round(data.main.temp); // current temperature
                        const city2 = data.name; // current temperature
                        let weathering2;

                        if (skyConditions2 === "Clouds") {
                            weathering2 = "partly cloudy";
                            $iconCloudy.appendTo($report2)
                        } else if (skyConditions2 === "Clear") {
                            weathering2 = "clear";
                            $iconClear.appendTo($report2)
                        } else if (skyConditions2 === "Thunderstorm") {
                            weathering2 = "storming"
                            $iconStorm.appendTo($report2)
                        } else if (skyConditions2 === "Rain") {
                            weathering2 = "raining"
                            $iconRain.appendTo($report2)
                        } else if (skyConditions2 === "Drizzle") {
                            weathering2 = "drizzling"
                            $iconDrizzleMist.appendTo($report2)
                        } else if (skyConditions2 === "Mist") {
                            weathering2 = "misty"
                            $iconDrizzleMist.appendTo($report2)
                        } else if (skyConditions2 === "Haze") {
                            weathering2 = "hazy"
                            $iconFog.appendTo($report2)
                        } else if (skyConditions2 === "Snow") {
                            weathering2 = "snowing"
                            $iconSnow.appendTo(report2)
                        } else if (skyConditions2 === "Smoke") {
                            weathering1 = "smoky"
                            $iconSmoke.appendTo($report2)
                        } else if (skyConditions2 === "Dust") {
                            weathering1 = "dusty"
                            $iconDustSandAsh.appendTo($report2)
                        } else if (skyConditions2 === "Sand") {
                            weathering1 = "sandy"
                            $iconDustSandAsh.appendTo($report2)
                        } else if (skyConditions2 === "Ash") {
                            weathering1 = "there's volcanic ash"
                            $iconFog.appendTo($report2)
                        } else if (skyConditions2 === "Squall") {
                            weathering1 = "super frickin' windy"
                            $iconFog.appendTo($report2)
                        } else if (skyConditions2 === "Tornado") {
                            weathering1 = "there's a tornado watch"
                            $iconTornado.appendTo($report2)
                        } else {
                            const $noData = $('<h2>').text("We're channeling Miss Cleo and everything's coming back foggy. Try again later.")
                            $noData.appendTo($report2)
                            $iconCrystalBall.appendTo($report2)
                        }

                        let $reportText1 = $('<h2>').addClass('report-text').html("<span class='rn'>#rn</span> it's " + currentTemp1 + "°F and " + weathering1 + " in " + city1 + ". <p>next up: " + city2 + ".").css({ 'font-size': '4rem', 'line-height': '4rem' })
                        $reportText1.appendTo($report1)

                        let $reportText2 = $('<h2>').addClass('report-text').html("#rn it's " + currentTemp2 + "°F and " + weathering2 + " in " + city2 + ". <p>next up: " + "recap.").css({ 'font-size': '4rem', 'line-height': '4rem' })
                        $reportText2.appendTo($report2)

                        ///// RECAP INFORMATION /////

                        if ((currentTemp1 & currentTemp2) > 90) {
                            let $reportText3 = $('<h2>').addClass('report-text').text("you should go jump in a pool or something. it's pretty hot");
                            $reportText3.appendTo($report3).css({ 'font-size': '4rem', 'line-height': '4rem' })
                        } else if ((skyConditions1 || skyconditions2) === "Rain") {
                            let $reportText3 = $('<h2>').addClass('report-text').text("you definitely want to make sure you take an umbrella with you");
                            $reportText3.appendTo($report3).css({ 'font-size': '4rem', 'line-height': '4rem' })
                        } else if ((currentTemp1 || currentTemp2) > 60) {
                            let $reportText3 = $('<h2>').addClass('report-text').text("it's pretty nice outside. you should go enjoy yourself.");
                            $reportText3.appendTo($report3).css({ 'font-size': '4rem', 'line-height': '4rem' })
                        } else if ((currentTemp1 || currentTemp2) < 60) {
                            let $reportText3 = $('<h2>').addClass('report-text').text("it's kinda cold out there. take a jacket or coat!");
                            $reportText3.appendTo($report3).css({ 'font-size': '4rem', 'line-height': '4rem' })
                        } else {
                            let $reportText3 = $('<h2>').addClass('report-text').text("i'll let you decide what to do!");
                            $reportText3.appendTo($report3).css({ 'font-size': '4rem', 'line-height': '4rem' })
                        }




                        console.log(city1 + ": " + skyConditions1 + ", " + currentTemp1)
                        console.log(city2 + ": " + skyConditions2 + ", " + currentTemp2)
                    },
                    () => {
                        console.log('coming back foggy. try again')
                    })

            })
    }) // END OF #SUBMIT-LOCATION BUTTON CLICK; DO NOT ERASE

    // ============================================================================================ //
    // ============================================================================================ //
}) // DOCUMENT.READY /// DO NOT TOUCH ///
// ============================================================================================ //
// ============================================================================================ //