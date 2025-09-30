import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

// Example visitor data (ISO3 codes)
const visitorData = {
    USA: 200,
    IND: 150,
    LKA: 50,
    DEU: 80,
};

const idToISO3 = {
    840: "USA", // United States
    356: "IND", // India
    144: "LKA", // Sri Lanka
    276: "DEU", // Germany
};

const home = () => {

    const [geoJson, setGeoJson] = useState(null);

    useEffect(() => {
        // Convert TopoJSON to GeoJSON
        const countries = feature(worldData, worldData.objects.countries);
        setGeoJson(countries);
    }, []);

    // Style countries based on visitor data
    const styleCountry = (feature) => {
        const iso3 = idToISO3[feature.id]; // map numeric id to ISO3
        const visitors = iso3 ? visitorData[iso3] : 0;

        return {
            fillColor: visitors ? "#0868ac" : "#e0e0e0",
            weight: 1,
            color: "white",
            fillOpacity: visitors ? 0.7 : 0.3,
        };
    };

    // Add tooltip with visitor numbers
    const onEachCountry = (feature, layer) => {
        const iso3 = idToISO3[feature.id];
        const visitors = iso3 ? visitorData[iso3] || 0 : 0;

        layer.bindTooltip(
            `${feature.properties.name}: ${visitors} visitors`,
            { permanent: false, direction: "auto" }
        );
    };

    return (
        <>
            <div class="dashboard-container">

                <div class="dashboard-main">

                    <div class="transfer-cards">
                        <div class="transfer-card">
                            <div class="card-icon">
                                <i class="fa-duotone fa-solid fa-users"></i>
                            </div>
                            <p class="card-title">Total Visitors</p>
                            <h2 class="card-amount">21286</h2>
                        </div>

                        <div class="transfer-card">
                            <div class="card-icon">
                                <i class="fa-solid fa-thumbs-up"></i>
                            </div>
                            <p class="card-title">Total Likes</p>
                            <h2 class="card-amount">9684</h2>
                        </div>

                        <div class="transfer-card">
                            <div class="card-icon">
                                <i class="fa-solid fa-cloud-arrow-down"></i>
                            </div>
                            <p class="card-title">Total Downloads</p>
                            <h2 class="card-amount">11244</h2>
                        </div>
                    </div>


                    <div class="promo-card">
                        <div class="promo-info">
                            <h2 class="promo-title">Smart blogs management</h2>
                            <p class="promo-desc">
                                Comming soon! Stay tuned for updates on our new feature.
                            </p>
                        </div>

                    </div>


                    <div class="transaction-section">
                        <div class="transaction-card">
                            <h3 class="section-title">Most Liked Blog</h3>

                            <div class="transaction-item">
                                <div class="transaction-icon">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="transaction-content">
                                    <div class="transaction-title">How to Make a Food Website w...</div>
                                    <div class="transaction-time">
                                        Likes 356
                                    </div>
                                </div>
                                <button className='liked-btn'>View</button>
                            </div>

                            <div class="transaction-item">
                                <div class="transaction-icon">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="transaction-content">
                                    <div class="transaction-title">Create a Stunning Dashboard w...</div>
                                    <div class="transaction-time">
                                        Likes 236
                                    </div>
                                </div>
                                <button className='liked-btn'>View</button>
                            </div>
                        </div>

                        <div class="transaction-card">
                            <h3 class="section-title">Most Active Users</h3>

                            <div class="transaction-item">
                                <div class="transaction-icon">
                                    <img
                                        src="https://i.pravatar.cc/100?img=12"
                                        alt="Lisa Johnson"
                                    />
                                </div>
                                <div class="transaction-content">
                                    <div class="transaction-title">Lisa Johnson</div>
                                    <div class="transaction-time">
                                        <i class="far fa-clock"></i> Today, 09:35
                                    </div>
                                </div>
                                <div class="transaction-amount">10 Posts</div>
                            </div>

                            <div class="transaction-item">
                                <div class="transaction-icon">
                                    <img
                                        src="https://i.pravatar.cc/100?img=11"
                                        alt="Michael Torres"
                                    />
                                </div>
                                <div class="transaction-content">
                                    <div class="transaction-title">Michael Torres</div>
                                    <div class="transaction-time">
                                        <i class="far fa-clock"></i> Monday, 17:45
                                    </div>
                                </div>
                                <div class="transaction-amount">8 Posts</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="dashboard-sidebar">
                    <div class="savings-card">
                        <h3 class="savings-title">Most Users From...</h3>
                        <div className="chart-container">
                            <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; OpenStreetMap contributors"
                                />
                                {geoJson && (
                                    <GeoJSON
                                        data={geoJson}
                                        style={styleCountry}
                                        onEachFeature={onEachCountry}
                                    />
                                )}
                            </MapContainer>
                        </div>
                    </div>

                    <div class="plan-card">
                        <div class="plan-info">
                            <div class="plan-title">Budget Goal 2025</div>
                            <div class="plan-status">On Track</div>
                        </div>

                        <div class="plan-progress">
                            <div class="plan-percentage">68%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home
