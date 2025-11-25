//const API_KEY="at_EYDcjQM8mkAoBTho7RnMXWg9wZ585"

export async function fetchIpData(domain=""){
    const url=domain ? `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${domain}`
                     : `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`

    const response=await fetch(url)
    if(!response.ok){
        throw new Error("Failed to fetch IP data")
    }
    return await response.json()
}