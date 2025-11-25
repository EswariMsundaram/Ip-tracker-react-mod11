##IP Tracker Project##
**Project Overview**

The IP Tracker is a web application that allows users to track the IP address of any website or device and display the following information:

Public IP address

Location (city, region, country, postal code)

Time zone

ISP (Internet Service Provider)

Map visualization of the location

It fetches data from the Geo.IPify API and displays the location using Leaflet maps in React.

**Features**

IP Address Search

Users can enter an IP address (e.g., 8.8.8.8) to fetch location data.

Automatic User IP Detection

On page load, the app fetches the current public IP address of the user.

Dynamic Map Visualization

Displays the IP location on a Leaflet map.

Updates the map center and marker dynamically when a new IP/domain is searched.

Error Handling

Displays messages for invalid inputs, failed API calls, or empty input.

Responsive Design

Works on desktop and mobile viewports.

Tech Stack

Frontend: React, React Hooks

Map: Leaflet + React-Leaflet

API: Geo.IPify (IP & Domain Lookup)

Styling: CSS (can be customized)

Project Structure
src/
components/MapView.jsx   - Displays Leaflet map with dynamic marker
utils/api.js             - Fetch function to call Geo.IPify API
App.js                   - Main component handling state, search, and info display
App.css                  - Styling


Data Flow

User types an IP or domain in the input box (SearchBar).

On submit, the app calls fetchIpData(input) from utils/api.js.

API returns a JSON object with ip, location, timezone, and isp.

ipData state is updated in App.js.

App 
Displays IP, location, timezone, ISP

MapView → displays location marker on the map

If the input is empty or invalid, an error message is displayed.


