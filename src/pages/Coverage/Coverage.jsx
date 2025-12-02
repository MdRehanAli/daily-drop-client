import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {

    const position = [23.8103, 90.4125];
    const serviceCenters = useLoaderData();
    console.log(serviceCenters);

    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-8 py-20 px-[100px] bg-white rounded-4xl'>
            <h1 className='text-4xl font-extrabold text-secondary'>We are available in 64 districts</h1>
            <div>
                {/* ** */}
            </div>
            <div>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false}
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