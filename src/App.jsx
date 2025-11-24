import { useEffect, useState } from "react";
import "./App.css";
import { fetchIpData } from "./utils/api";
import MapView from "./compoents/MapView";

function App() {
  //ipData-API response,error message, user input(IP or domain)

  const [domain, setDomain] = useState("");
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Load user IP on Page load
  useEffect(() => {
    const loadInitialIp = async () => {
      setLoading(true);
      try {
        const response = await fetchIpData(); // no IP ->returns user's IP
        setIpData(response);
        setError("");
      } catch (error) {
        setError("Failed to fetch initial IP");
      } finally {
        setLoading(false);
      }
    };
    loadInitialIp();
  }, []);

  //Handle input
  const handleInputChange = (e) => {
    setDomain(e.target.value);
  };
  //Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!domain.trim()) {
      setError("Please enter an IP address or domain");
      return;
    } else {
      fetchIpData(domain);
    }
    setLoading(true);
    try {
      const response = await fetchIpData(domain);
      setIpData(response);
      setError("");
    } catch (error) {
      setError("Invalid IP/Domain");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            placeholder="Search for Ip address or domain to Track"
            onChange={handleInputChange}
            value={domain}
          />
          <button className="arrow" type="submit">
            <img src="./icon-arrow.svg" alt="search" />
          </button>
        </div>
     
      {/* Status Messages */}
      <div className="mapData">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Info Card */}
        {ipData && (
          <div className="parent">
            <div className="ipHeader">
              <strong>IP: </strong>
            </div>
            <div className="ipData">
              {ipData.ip}
            </div>

            <div className="locationHeader">
              <strong>Location: </strong> 
            </div>
            <div className="locationData">
              {ipData.location?.region},
              {ipData.location?.country}
            </div>

            <div className="timezoneHeader">
              <strong>TimeZone:</strong> 
            </div>
            <div className="timezoneData">
              {ipData.location?.timezone}
            </div>

            <div className="ispHeader">
              <strong>ISP:</strong> 
            </div>
            <div className="ispData">
              {ipData.isp}
            </div>
          </div>
        )}
      </div>
      {/* Map View */}
      <div className="map">
        {ipData && (
        <MapView lat={ipData.location.lat} lng={ipData.location.lng} />
      )}
      </div>
       </form>
    </div>
  );
}

export default App;
