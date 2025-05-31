exports.handler = async (event, context) => {
  const API_KEY = process.env.API_KEY; // Must match Netlify's variable name
  const location = event.queryStringParameters.location || "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { 
      statusCode: 200, 
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" } 
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};