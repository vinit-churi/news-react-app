let dev = {
  apiGateway: {
    NEWS_API_KEY: "c8ecc81fda1c46748c525dddc461c065",
    BASE_URL: "YOUR_DEV_API_GATEWAY_URL",
    URL_:
      "http://newsapi.org/v2/everything?q=tesla%stocks&from=2021-01-07&sortBy=publishedAt&language=en&pageSize=20&apiKey=c8ecc81fda1c46748c525dddc461c065",

    url_health:
      '"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c8ecc81fda1c46748c525dddc461c065',
    url_science:
      '"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=c8ecc81fda1c46748c525dddc461c065',
    url_sports:
      '"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c8ecc81fda1c46748c525dddc461c065',
    url_technology:
      '"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c8ecc81fda1c46748c525dddc461c065',
    url_business:
      '"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c8ecc81fda1c46748c525dddc461c065',
    url_entertainment:
      '"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c8ecc81fda1c46748c525dddc461c065',
  },
};

export default dev = {
  ...dev,
};

// var url =
//   "http://newsapi.org/v2/top-headlines?" +
//   "country=us&" +
//   "apiKey=c8ecc81fda1c46748c525dddc461c065";
// var req = new Request(url);
// fetch(req).then(function (response) {
//   console.log(response.json());
// });
