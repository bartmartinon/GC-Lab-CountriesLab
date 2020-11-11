class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayText() {
        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("OfficialLanguage").innerText = this.lang;
        document.getElementById("HelloWorld").innerText = this.greeting;
    }

    DisplayColor() {
        document.getElementById("Color1").style.backgroundColor = this.colors[0];
        document.getElementById("Color2").style.backgroundColor = this.colors[1];
        if (this.colors.length > 2) {
            document.getElementById("Color3").style.backgroundColor = this.colors[2];
        }
        else {
            document.getElementById("Color3").style.backgroundColor = this.colors[1];
        }
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["green", "red", "white"]);
let france = new Country("France", "Francais", "Bonjour, le monde!", ["blue", "white", "red"]);
let england = new Country("England", "Ye Olde English", "Good day to you, good world!", ["blue", "red", "white"]);
let sweden = new Country("Sweden", "Swedish", "Hej varlden!", ["blue", "yellow"]);

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        document.getElementById("Flag").src = "images/USA.png";
        document.getElementById("Flag").alt = "USA";
    }
    else if (input === "Mexico") {
        country = mexico;
        document.getElementById("Flag").src = "images/Mexico.png";
        document.getElementById("Flag").alt = "Mexico";
    }
    else if (input === "Algeria") {
        country = algeria;
        document.getElementById("Flag").src = "images/Algeria.png";
        document.getElementById("Flag").alt = "Algeria";
    }
    else if (input === "France") {
        country = france;
        document.getElementById("Flag").src = "images/France.png";
        document.getElementById("Flag").alt = "France";
    }
    else if (input === "England") {
        country = england;
        document.getElementById("Flag").src = "images/England.png";
        document.getElementById("Flag").alt = "England";
    }
    else if (input === "Sweden") {
        country = sweden;
        document.getElementById("Flag").src = "images/Sweden.png";
        document.getElementById("Flag").alt = "Sweden";
    }

    country.DisplayText();
    country.DisplayColor();
}
