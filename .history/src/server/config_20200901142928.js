exportconst TIMEOUT = 5000;

const devBaseURL = "https://httpbin.org";
const proBaseURL = "https://production.org";
console.log(process.env.NODE_ENV);
exportconst baseURL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;