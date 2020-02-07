console.log('keep calm and clear or mostly sunny')


$(() => { /// DOCUMENT.READY /// DO NOT TOUCH /// DOCUMENT.READY /// DO NOT TOUCH ///

    const $container = $('<div>').addClass('container')
    const $content = $('<div>').addClass('content')
    let arrowLabelCity1;
    let arrowLabelCity2;

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
    const $arrowBackLabel = $('<p>').text(arrowLabelCity1).appendTo($arrowBack)


    // ========== DATA RENDER
    // ========== DATA RENDER

    const $forecastCards = $('<div>').attr('id', 'cards').hide().appendTo($main)

    const $card1 = $('<div>').addClass('card').appendTo($forecastCards)
    const $card1Title = $('<h2>').appendTo($card1)
    const $card1Weather = $('<div>').addClass('duo').appendTo($card1)
    const $card1Message = $('<h4>').appendTo($card1Weather)

    const $card2 = $('<div>').addClass('card').appendTo($forecastCards)
    const $card2Title = $('<h2>').appendTo($card2)
    const $card2Weather = $('<div>').addClass('duo').appendTo($card2)
    const $card2Message = $('<h4>').appendTo($card2Weather)

    const $card3 = $('<div>').addClass('card').appendTo($forecastCards)
    const $card3Title = $('<h2>').text('Summary').appendTo($card3)
    const $card3Weather = $('<div>').addClass('duo').appendTo($card3)
    const $card3Message = $('<h4>').appendTo($card3Weather)


    // ========== RIGHT ARROW
    // ========== RIGHT ARROW

    const $arrowNext = $('<div>').addClass('nav').hide().appendTo($main)
    const $arrowNextLabel = $('<p>').text(arrowLabelCity2).appendTo($arrowNext)
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


    // const $dividerBottom = $('<div>').addClass('divider').appendTo($main)


    // ============================================================================================ //
    // ============================================================================================ //
    // FOOTER
    // ============================================================================================ //
    // ============================================================================================ //

    // const $footer = $('<footer>').appendTo('body')
    // const $footerText = $('<p>').html('<a href="https://wins.dev" target="_blank">winslow</a> designed and coded this app with determination and a mac. <span class="breaker">keep calm and clear or mostly sunny.</span>').appendTo($footer)


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
    const $weatherHaze = $('<img>').attr('src', 'images/weather/fog-haze.png').addClass('weather-icon')
    const $weatherRain = $('<img>').attr('src', 'images/weather/rain.png').addClass('weather-icon')
    const $weatherSmoke = $('<img>').attr('src', 'images/weather/smoky.png').addClass('weather-icon')
    const $weatherSnow = $('<img>').attr('src', 'images/weather/snow.png').addClass('weather-icon')
    const $weatherSquall = $('<img>').attr('src', 'images/weather/squall.png').addClass('weather-icon')
    const $weatherStorm = $('<img>').attr('src', 'images/weather/thunderstorm.png').addClass('weather-icon')
    const $weatherTornado = $('<img>').attr('src', 'images/weather/tornado.png').addClass('weather-icon')

    // ========== NOT ICONS
    // ========== NOT ICONS

    const $notCoffee = $('<img>').attr('src', 'images/or-not/coffee.png')
    const $notCrystalBall = $('<img>').attr('src', 'images/or-not/crystal-ball.png').addClass('weather-icon')
    const $notDrink = $('<img>').attr('src', 'images/or-not/drink.png')
    const $notShorts = $('<img>').attr('src', 'images/or-not/shorts.png')
    const $notSwimwear = $('<img>').attr('src', 'images/or-not/swimwear.png')


    // ========== WEATHER FUNCTIONS
    // ========== WEATHER FUNCTIONS

    const returnStatus = (conditions) => {
        switch (conditions) {
            case "Ash":
                return 'ashy because volcano';
                break;
            case "Clear":
                return 'clear';
                break;
            case "Clouds":
                return 'cloudy';
                break;
            case "Drizzle":
                return 'drizzling';
                break;
            case "Dust":
                return 'dusty';
                break;
            case "Haze":
                return 'hazy';
                break;
            case "Mist":
                return 'misty';
                break;
            case "Rain":
                return 'raining';
                break;
            case "Sand":
                return 'sandy';
                break;
            case "Smoke":
                return 'smoky';
                break;
            case "Snow":
                return 'snowing';
                break;
            case "Squall":
                return 'super frickin\' windy';
                break;
            case "Thunderstorm":
                return 'storming';
                break;
            case "Tornado":
                return 'there might be a tornado';
                break;

            default:
                return 'who knows';
        }
    }

    const findWeatherIcon = (conditions) => {
        switch (conditions) {
            case "Ash" || "Dust" || "Sand":
                return $weatherDustSandAsh;
                break;
            case "Clear":
                return $weatherClear;
                break;
            case "Clouds":
                return $weatherCloudy;
                break;
            case "Drizzle" || "Mist":
                return $weatherDrizzleMist;
                break;
            case "Haze":
                return $weatherHaze;
                break;
            case "Rain":
                return $weatherRain;
                break;
            case "Smoke":
                return $weatherSmoke;
                break;
            case "Snow":
                return $weatherSnow;
                break;
            case "Squall":
                return $weatherSquall;
                break;
            case "Thunderstorm":
                return $weatherStorm;
                break;
            case "Tornado":
                return $weatherTornado;
                break;
            default:
        }
    }


    // ========== OVERVIEW FUNCTIONS
    // ========== OVERVIEW FUNCTIONS

    let temperatureCode;
    let conditionsCode;

    const determineIfMatch = (i, j) => {
        if (i === j) {
            return true
        } else {
            return false
        }
    }

    // FINAL LINE(S)
    const endSummary = (temperature, conditions) => {
        if ((temperature === "cold" || "very cold") && (conditions === "rainy")) {
            return "Cold and rainy? That sucks."
        } else if ((temperature === "hot" || "warm") && (conditions === "clear")) {
            return `You should go jump in a pool or something. It's pretty ${temperature}.`
        } else if ((temperature === "cold" || "very cold") && (conditions === "cloudy" || "clear")) {
            return `Hey, at least it's not raining... that I know of.`
        }
    }

    // MIDDLE LINES : CONDITIONS
    const continueSummary = (city1, cond1, city2, cond2) => {
        let match = determineIfMatch(cond1, cond2);

        if ((cond1 || cond2) === "raining") {
            conditionsCode = "rainy"
            return "take an umbrella since it's raining in " + (match === true ? `both ${city1} and ${city2}.` : (cond1 === "raining" ? `${city1}.` : `${city2}.`))
        } else if ((cond1 || cond2) === "clear") {
            conditionsCode = "clear"
            return "it's clear skies in " + (match === true ? ` both ${city1} and ${city2}.` : (cond1 === "clear" ? `${city1}, but ${cond2} in ${city2}.` : `${city2}, but ${cond1} in ${city1}.`))
        } else if ((cond1 || cond2) === "cloudy") {
            conditionsCode = "cloudy"
            return "you're not in the clear. Because you're in the 'cloudy'. Don't hate the jokes."
        }
    }

    // FIRST LINES : TEMPERATURE
    const startSummary = (city1, temp1, city2, temp2) => {
        if ((temp1 && temp2) > 88) {
            temperatureCode = "hot"
            return "'d might as well not wear any clothes. It\'s too hot for that, but at least "
        } else if (temp1 && temp2 > 60) {
            temperatureCode = "warm"
            return " should just put on a shirt and jeans. The temperature is pretty nice, but it's warmer in " + (temp1 > temp2 ? `${city1} than it is in ${city2}. Also, ` : `${city2} than it is in ${city1}. Also, `)
        } else if (temp1 && temp2 > 45) {
            temperatureCode = "cool"
            return " might wanna take a jacket since it's getting pretty cool. You'll probably wanna skip the shorts and trade those flip flops for tennis shoes unless you want those little piggies to cry 'wee wee' all the way home. By the way, "
        } else if (temp1 && temp2 > 25) {
            temperatureCode = "cold"
            return " gotta stay warm, so maybe wear a coat and comfortable jeans. And trade those flip flops for tennis shoes unless you want those little piggies to cry 'wee wee' all the way home. By the way, "
        } else if ((temp1 && temp2) < 10) {
            temperatureCode = "cold"
            return "'ll probably wanna wear a heavy coat and pants. Thick pants. Thick. And just so you know, it's colder in " + (temp1 < temp2 ? `${city1} than it is in ${city2}. Also, ` : `${city2} than it is in ${city1}. Also, `)
        }
    }

    const generateSummary = (city1, city1Conditions, city1Temp, city2, city2Conditions, city2Temp) => {
        return "You" + startSummary(city1, city1Temp, city2, city2Temp) + " " + continueSummary(city1, city1Conditions, city2, city2Conditions) + " " + endSummary(temperatureCode, conditionsCode)
    }


    // ========== AJAX CALL FOR DATA RENDERING
    // ========== AJAX CALL FOR DATA RENDERING

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?zip=" + 30363 + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
    }).then(
        (data) => {

            // ========== ATLANTA
            // ========== ATLANTA

            let homeTemp = Math.round(data.main.temp);
            let homeConditions = returnStatus(data.weather[0].main)

            $greeting.text('Hello from Atlanta, where it\'s ' + homeTemp + '° & ' + homeConditions + '.')

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

        // let locationInput1 = $('input[name="input-1"]').val();
        // let locationInput2 = $('input[name="input-2"]').val();

        let locationInput1 = 'Truth or Consequences'
        let locationInput2 = 'Hawaiian Paradise Park'

        // ========== AJAX CALL
        // ========== AJAX CALL

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + locationInput1 + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
        }).then(
            (data) => {

                // ========== INPUT 1
                // ========== INPUT 1

                let city1 = data.name;
                let city1Temp = Math.round(data.main.temp);
                let city1Conditions = returnStatus(data.weather[0].main);

                $card1Title.text(city1)
                $card1Message.html(city1Temp + '° <span class="highlight">&</span><br />' + city1Conditions)
                findWeatherIcon(data.weather[0].main).prependTo($card1Weather)


                // ========== AJAX CALL
                // ========== AJAX CALL

                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/weather?q=" + locationInput2 + ",us&units=imperial&appid=052b6765bf73ea440e9f314c5808f645"
                }).then(
                    (data) => {

                        // ========== INPUT 2
                        // ========== INPUT 2

                        let city2 = data.name;
                        let city2Temp = Math.round(data.main.temp);
                        let city2Conditions = returnStatus(data.weather[0].main);

                        $card2Title.text(city2)
                        $card2Message.html(city2Temp + '° <span class="highlight">&</span><br />' + city2Conditions)
                        findWeatherIcon(data.weather[0].main).prependTo($card2Weather)

                        $card3Message.text(generateSummary(city1, city1Conditions, city1Temp, city2, city2Conditions, city2Temp))

                        $arrowBackLabel.text('back')
                        $arrowNextLabel.text('next')

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