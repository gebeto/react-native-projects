export const API_KEY = "349aa954145a2556fd60ae1cf3026fc8";
export const WEATHER_URL = (query) => `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

export const BING_KEY = "ApgCJAn6t_2Wo464SjNbbQqlP0xaaVOFz8FaAqi0Vv0wgIblokJDX1uZKt4j9L7w"
// export const BING_API = (query) => `https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/${query}?key=${BING_KEY}`;
export const BING_API = (query) => `https://dev.virtualearth.net/REST/V1/Imagery/Map/AerialWithLabels/${query}?key=${BING_KEY}`;

export const REQUEST = (query) => {
	return fetch(WEATHER_URL(query)).then(res => res.json());
};
