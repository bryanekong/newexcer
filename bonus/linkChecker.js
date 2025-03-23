
const axios = require('axios');

async function checkLinksStatus(links) {
  for (let link of links) {
    try {
      const response = await axios.get(link);
      console.log(`${link} => ${response.status}`);
    } catch (error) {
      console.log(`${link} => Error`);
    }
  }
}

checkLinksStatus(["https://example.com", "https://invalid.url"]);
