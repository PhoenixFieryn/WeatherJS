class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.visibility = document.getElementById('w-visibility');
    }

    paint(weather) {
        this.location.textContent = weather.location.name + ', ' + weather.location.region;
        let description = 'Details: ';
        weather.current.weather_descriptions.forEach((description, index) => {
            description += `${index > 0 ? ', ' : ''}${description}`;
        })
        this.desc.textContent = description;
        this.string.textContent = `Temperature: ${weather.current.temperature}`;
        this.icon.setAttribute('src', weather.current.weather_icons[0]);
        this.humidity.textContent = `Humidity: ${weather.current.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}`;
        this.wind.textContent = `Wind Speed: ${weather.current.wind_speed}`;
        this.visibility.textContent = `Visibility: ${weather.current.visibility}`;
    }
}