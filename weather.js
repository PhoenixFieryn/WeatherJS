class Weather {
    constructor(city, state) {
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await Weather.secretKey().then(secret => fetch(`http://api.weatherstack.com/current?access_key=${secret}&query=${this.city + ' ' + this.state}`))

        const result = await response.json();
        return result;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

    static async secretKey() {
        const response = await fetch('key.json');
        const result = await response.json();
        return result.secret;
    }
}