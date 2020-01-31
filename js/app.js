console.log('keep calm and clear or mostly sunny')


$(() => { /// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///

    const $container = $('<div>').addClass('container')
    const $content = $('<div>').addClass('content')

    // ============================================================================================ //
    // ============================================================================================ //
    // HEADER //// GREETING, APP TITLE, LOCATION INPUTS
    // ============================================================================================ //
    // ============================================================================================ //

    $container.attr('id', 'header').appendTo('body')
    $content.appendTo('#header')

    // GREETING & TITLE
    const $greeting = $('<h6>').appendTo($content)
    const $appTitle = $('<h1>').text('Skipdrizzle').appendTo($content)

    // LOCATIONS FORM
    const $locations = $('<form>').attr('id', 'locations').appendTo($content)

    const $userInput1 = $('<input>').addClass('location-input').attr({
        'type': 'text',
        'name': 'input-1',
        'placeholder': 'Enter first zip code'
    }).appendTo($locations)

    const $userInput2 = $('<input>').attr({
        'type': 'text',
        'name': 'input-2',
        'placeholder': 'Enter second zip code'
    }).appendTo($locations)


    const $userInputSubmit = $('<button>').attr({ // BUTTON FOR SUBMITTING LOCATIONS
        'type': 'submit',
        'value': 'submit-cities',
        'id': 'lets-go'
    }).text('Let\'s go').appendTo($locations)


    // ============================================================================================ //
    // ============================================================================================ //
    // MAIN //// CONTAINS LEFT AND RIGHT ARROWS & FORECAST CAROUSEL
    // ============================================================================================ //
    // ============================================================================================ //


    const $main = $('<main>').attr('id', 'main').appendTo('body')
    const $dividerTop = $('<div>').addClass('divider').appendTo($main)

    // STANDARD MESSAGE DISAPPEARS AFTER LOCATION SEARCH
    const $h2main = $('<h2>').addClass('atlanta').text('Enter two zip codes above to get the current weather for both locations as well as recommendations based on them.')
    $h2main.appendTo($main)

    // ====================================================================== FORECAST CAROUSEL
    // ====================================================================== FORECAST CAROUSEL

    // ========== LEFT ARROW
    // ========== LEFT ARROW

    const $arrowBack = $('<div>').addClass('nav').hide().appendTo($main)
    const $arrowBackIcon = $('<img>').attr('src', 'images/arrow-white.png').addClass('arrow').appendTo($arrowBack)
    const $arrowBackLabel = $('<p>').appendTo($arrowBack)


    // ========== DATA RENDER
    // ========== DATA RENDER

    const $forecastCards = $('<div>').addClass('atlanta').attr('id', 'forecast-cards').hide().appendTo($main)
    const $card1 = $('<div>').addClass('card-report').appendTo($forecastCards)
    const $card2 = $('<div>').addClass('card-report').appendTo($forecastCards)
    const $card3 = $('<div>').addClass('card-report').appendTo($forecastCards)

    // ========== RIGHT ARROW
    // ========== RIGHT ARROW

    const $arrowNext = $('<div>').addClass('nav').hide().appendTo($main)
    const $arrowNextLabel = $('<p>').appendTo($arrowNext)
    const $arrowNextIcon = $('<img>').attr('src', 'images/arrow-white.png').addClass('arrow').css('transform', 'rotate(180deg)').appendTo($arrowNext)

    // ========== DATA INCLUSION
    // ========== DATA INCLUSION

    let thisCityIndex = 0
    let $thisCity = $forecastCards.children().eq(thisCityIndex)
    let cardsNumber = $forecastCards.children().length - 1

    $arrowBack.on('click', () => {
        $thisCity.hide()
        if (thisCityIndex > 0) {
            thisCityIndex -= 1
        } else {
            thisCityIndex = cardsNumber
        }
        $thisCity = $($forecastCards).children().eq(thisCityIndex)
        $thisCity.show()
    })

    $arrowNext.on('click', () => {
        $thisCity.hide()
        if (thisCityIndex < cardsNumber) {
            thisCityIndex += 1
        } else {
            thisCityIndex = 0
        }
        $thisCity = $($forecastCards).children().eq(thisCityIndex)
        $thisCity.show()
    })

    console.log(cardsNumber)

    // ====================================================================== FORECAST CAROUSEL
    // ====================================================================== FORECAST CAROUSEL


    const $dividerBottom = $('<div>').addClass('divider').appendTo($main)


    // ============================================================================================ //
    // ============================================================================================ //
    // FOOTER
    // ============================================================================================ //
    // ============================================================================================ //

    const $footer = $('<footer>').appendTo('body')
    const $footerText = $('<p>').html('<a href="https://wins.dev" target="_blank">winslow</a> made this app with determination and a mac. <span class="breaker">keep calm and clear or mostly sunny.</span>').appendTo($footer)


    // ============================================================================================ //
    // ============================================================================================ //
    // AJAX //////////////////// STRONGER THAN GREECE / GREASE. THE MORE YOU REALIZE.
    // ============================================================================================ //
    // ============================================================================================ //

    // ========== WEATHER ICONS
    // ========== WEATHER ICONS

    const $weatherClear = $('<img>').attr('src', 'images/weather/clear.png').addClass('weather-icon')
    const $weatherCloudy = $('<img>').attr('src', 'images/weather/cloudy-part.png').addClass('weather-icon')
    const $weatherDrizzleMist = $('<img>').attr('src', 'images/weather/drizzle-mist.png').addClass('weather-icon')
    const $weatherDustSandAsh = $('<img>').attr('src', 'images/weather/dust-sand-ash.png').addClass('weather-icon')
    const $weatherFog = $('<img>').attr('src', 'images/weather/fog-haze.png').addClass('weather-icon')
    const $weatherRain = $('<img>').attr('src', 'images/weather/rain.png').addClass('weather-icon')
    const $weatherSmoke = $('<img>').attr('src', 'images/weather/smoky.png').addClass('weather-icon')
    const $weatherSnow = $('<img>').attr('src', 'images/weather/snow.png').addClass('weather-icon')
    const $weatherStorm = $('<img>').attr('src', 'images/weather/thunderstorm.png').addClass('weather-icon')
    const $weatherTornado = $('<img>').attr('src', 'images/weather/tornado.png').addClass('weather-icon')


    // ========== NOT ICONS
    // ========== NOT ICONS

    const $notCoffee = $('<img>').attr('src', 'images/or-not/coffee.png')
    const $notCrystalBall = $('<img>').attr('src', 'images/or-not/crystal-ball.png').addClass('weather-icon')
    const $notDrink = $('<img>').attr('src', 'images/or-not/drink.png')
    const $notShorts = $('<img>').attr('src', 'images/or-not/shorts.png')
    const $notSwimwear = $('<img>').attr('src', 'images/or-not/swimwear.png')


    // ========== HOME ZIP DEFINITION
    // ========== HOME ZIP DEFINITION

    let home = 30363;


    // ========== AJAX CALL
    // ========== AJAX CALL

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?zip=" + home + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
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

            $greeting.text('Hello from Atlanta, where it\'s ' + homeTemperature + '° & ' + homeWeather + '.')

        }, () => {
            console.log('coming back foggy. try again')
        })

    $userInputSubmit.on('click', (event) => {
        window.location.assign('#main')
        event.preventDefault();

        $h2main.hide()
        $arrowNext.show()
        $arrowBack.show()
        $forecastCards.show();

        let cityStart = $('input[name="input-1"]').val();
        let cityEnd = $('input[name="input-2"]').val();

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
                    $notCloudy.appendTo($card1)
                } else if (skyConditions1 === "Clear") {
                    weathering1 = "clear";
                    $weatherClear.appendTo($card1)
                } else if (skyConditions1 === "Thunderstorm") {
                    weathering1 = "storming"
                    $weatherStorm.appendTo($card1)
                } else if (skyConditions1 === "Rain") {
                    weathering1 = "raining"
                    $weatherRain.appendTo($card1)
                } else if (skyConditions1 === "Drizzle") {
                    weathering1 = "drizzling"
                    $weatherDrizzleMist.appendTo($card1)
                } else if (skyConditions1 === "Mist") {
                    weathering1 = "misty"
                    $weatherDrizzleMist.appendTo($card1)
                } else if (skyConditions1 === "Haze") {
                    weathering1 = "hazy"
                    $weatherFog.appendTo($card1)
                } else if (skyConditions1 === "Snow") {
                    weathering2 = "snowing"
                    $weatherSnow.appendTo(card1)
                } else if (skyConditions1 === "Smoke") {
                    weathering1 = "smoky"
                    $weatherSmoke.appendTo($card1)
                } else if (skyConditions1 === "Dust") {
                    weathering1 = "dusty"
                    $weatherDustSandAsh.appendTo($card1)
                } else if (skyConditions1 === "Sand") {
                    weathering1 = "sandy"
                    $weatherDustSandAsh.appendTo($card1)
                } else if (skyConditions1 === "Ash") {
                    weathering1 = "there's volcanic ash"
                    $weatherFog.appendTo($card1)
                } else if (skyConditions1 === "Squall") {
                    weathering1 = "super frickin' windy"
                    $weatherFog.appendTo($card1)
                } else if (skyConditions1 === "Tornado") {
                    weathering1 = "there's a tornado watch"
                    $weatherTornado.appendTo($card1)
                } else {
                    const $noData = $('<h2>').text("We're channeling Miss Cleo and everything's coming back foggy. Try again later.")
                    $noData.appendTo($card1)
                    $notCrystalBall.appendTo($card1)
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
                            $weatherCloudy.appendTo($card2)
                        } else if (skyConditions2 === "Clear") {
                            weathering2 = "clear";
                            $weatherClear.appendTo($card2)
                        } else if (skyConditions2 === "Thunderstorm") {
                            weathering2 = "storming"
                            $weatherStorm.appendTo($card2)
                        } else if (skyConditions2 === "Rain") {
                            weathering2 = "raining"
                            $weatherRain.appendTo($card2)
                        } else if (skyConditions2 === "Drizzle") {
                            weathering2 = "drizzling"
                            $weatherDrizzleMist.appendTo($card2)
                        } else if (skyConditions2 === "Mist") {
                            weathering2 = "misty"
                            $weatherDrizzleMist.appendTo($card2)
                        } else if (skyConditions2 === "Haze") {
                            weathering2 = "hazy"
                            $weatherFog.appendTo($card2)
                        } else if (skyConditions2 === "Snow") {
                            weathering2 = "snowing"
                            $weatherSnow.appendTo(card2)
                        } else if (skyConditions2 === "Smoke") {
                            weathering1 = "smoky"
                            $weatherSmoke.appendTo($card2)
                        } else if (skyConditions2 === "Dust") {
                            weathering1 = "dusty"
                            $weatherDustSandAsh.appendTo($card2)
                        } else if (skyConditions2 === "Sand") {
                            weathering1 = "sandy"
                            $weatherDustSandAsh.appendTo($card2)
                        } else if (skyConditions2 === "Ash") {
                            weathering1 = "there's volcanic ash"
                            $weatherFog.appendTo($card2)
                        } else if (skyConditions2 === "Squall") {
                            weathering1 = "super frickin' windy"
                            $weatherFog.appendTo($card2)
                        } else if (skyConditions2 === "Tornado") {
                            weathering1 = "there's a tornado watch"
                            $weatherTornado.appendTo($card2)
                        } else {
                            const $noData = $('<h2>').text("We're channeling Miss Cleo and everything's coming back foggy. Try again later.")
                            $noData.appendTo($card2)
                            $notCrystalBall.appendTo($card2)
                        }

                        // CARD 1 LAYOUT
                        let $card1Location = $('<h2>').text(city1).appendTo($card1)
                        let $card1Information = $('<p>').addClass('report-text').text(currentTemp1 + '° & ' + weathering1).appendTo($card1)
                        $arrowNextLabel.text('next to ' + city2)

                        // CARD 2 LAYOUT
                        let $card2Location = $('<h2>').text(city2).appendTo($card2)
                        let $card2Information = $('<p>').addClass('report-text').text(currentTemp2 + '° & ' + weathering2).appendTo($card2)
                        $arrowNextLabel.text('next to overview')





                        let $reportText2 = $('<h2>').addClass('report-text').html("#rn it's " + currentTemp2 + "°F and " + weathering2 + " in " + city2 + ". <p>next up: " + "recap.")
                        $reportText2.appendTo($card2)

                        ///// RECAP INFORMATION /////

                        if ((currentTemp1 & currentTemp2) > 90) {
                            let $reportText3 = $('<h2>').addClass('report-text').text("you should go jump in a pool or something. it's pretty hot");
                            $reportText3.appendTo($card3).css('font-size': '4rem', 'line-height': '4rem' })
                        } else if ((skyConditions1 || skyconditions2) === "Rain") {
                            let $reportText3 = $('<h2>').addClass('report-text').text("you definitely want to make sure you take an umbrella with you");
                            $reportText3.appendTo($card3).css('font-size': '4rem', 'line-height': '4rem' })
                        } else if ((currentTemp1 || currentTemp2) > 60) {
                            let $reportText3 = $('<h2>').addClass('report-text').text("it's pretty nice outside. you should go enjoy yourself.");
                            $reportText3.appendTo($card3).css('font-size': '4rem', 'line-height': '4rem' })
                        } else if ((currentTemp1 || currentTemp2) < 60) {
                            let $reportText3 = $('<h2>').addClass('report-text').text("it's kinda cold out there. take a jacket or coat!");
                            $reportText3.appendTo($card3).css('font-size': '4rem', 'line-height': '4rem' })
                        } else {
                            let $reportText3 = $('<h2>').addClass('report-text').text("i'll let you decide what to do!");
                            $reportText3.appendTo($card3).css('font-size': '4rem', 'line-height': '4rem' })
                        }

                        $arrowBackLabel.text('back to #overview')
                        $arrowNextLabel.text('next to ' + city2)




                        console.log(city1 + ": " + skyConditions1 + ", " + currentTemp1)
                        console.log(city2 + ": " + skyConditions2 + ", " + currentTemp2)
                    }, () => {
                        console.log('coming back foggy. try again')
                    })

            })
    }) // END OF #SUBMIT-LOCATION BUTTON CLICK; DO NOT ERASE

    // ============================================================================================ //
    // ============================================================================================ //
}) // DOCUMENT.READY /// DO NOT TOUCH ///
// ============================================================================================ //
// ============================================================================================ //