import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {

    const position = [23.8103, 90.4125];
    const serviceCenters = useLoaderData();
    console.log(serviceCenters);

    const mapRef = useRef(null)

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if (district) {
            const coord = [district.latitude, district.longitude];
            console.log(district, coord);

            // GO to the location through Ref and using LeafletJs 
            mapRef.current.flyTo(coord, 14);
        }
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-8 p-10 md:py-20 md:px-[100px] bg-white rounded-4xl'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-secondary'>We are available in 64 districts</h1>
            <div className='my-12'>
                <form onSubmit={handleSearch}>
                    <label className="input pr-0 rounded-4xl w-full md:w-1/2">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" name='location' />
                        <button className='btn btn-primary text-secondary rounded-4xl'>Search</button>
                    </label>
                </form>
            </div>
            <div>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    ref={mapRef}
                    className='h-[600px] w-full'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;