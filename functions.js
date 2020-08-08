const axios = require('axios')

REST_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?"

API_KEY = "use_dotenv_to_set_the_API_key_here"

REST_ENDPOINT += "appid=" + API_KEY

module.exports.weather = async function(query) {
	const endpoint = REST_ENDPOINT + "&q=" + query.city
	result = await axios.get(endpoint) 
	return result.data
}