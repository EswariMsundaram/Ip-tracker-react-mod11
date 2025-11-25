const API_KEY="at_xSTYSfFahRCI3lCJZyAv6BKS3uTYY"



export async function fetchIpData(domain = "") {
  
  let url;

  // If no input - user's IP
  if (!domain) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
  } 

  // If input is an IP
  else if (/^\d{1,3}(\.\d{1,3}){3}$/.test(domain)) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${domain}`;
  } 
  // Otherwise treat it as a domain
  else {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${domain}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch IP/Domain data");
  }

  return await response.json();
}