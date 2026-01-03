import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-light rounded-[2rem] shadow-xl overflow-hidden border border-brand-green/10">
                    <div className="grid grid-cols-1 lg:grid-cols-3">

                        {/* Left Panel: Delivery Info */}
                        <div className="p-10 space-y-8 bg-white lg:col-span-1">
                            <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                                Delivery Network
                            </div>

                            <h2 className="text-4xl font-bold text-brand-dark">
                                We Deliver <span className="text-brand-green">Fresh Across</span>
                            </h2>

                            <p className="text-gray-500">
                                Daily salad drops to homes and offices in our exclusive delivery zone.
                            </p>

                            <div className="flex space-x-2">
                                <button className="px-6 py-2 rounded-full bg-brand-green text-white font-medium shadow-lg transition-all cursor-default">Delhi NCR</button>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-brand-dark">Delhi NCR</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Delhi</span>
                                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Noida</span>
                                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Gurgaon</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 text-center border-t border-gray-100">
                                <div>
                                    <div className="text-xl font-bold text-brand-dark">10k+</div>
                                    <div className="text-xs text-gray-400">Happy Subscribers</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-brand-dark">4.9★</div>
                                    <div className="text-xs text-gray-400">Rating</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-brand-dark">3</div>
                                    <div className="text-xs text-gray-400">Active Cities</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Map */}
                        <div className="h-[500px] lg:h-auto lg:col-span-2 relative">
                            {isClient ? (
                                <MapContainer
                                    // @ts-ignore
                                    center={[28.6139, 77.2090]}
                                    zoom={11}
                                    scrollWheelZoom={false}
                                    doubleClickZoom={false}
                                    touchZoom={false}
                                    dragging={false}
                                    zoomControl={false}
                                    className="h-full w-full z-0"
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {/* @ts-ignore */}
                                    <Circle
                                        center={[28.6139, 77.2090]}
                                        radius={25000}
                                        pathOptions={{ color: '#059669', fillColor: '#059669', fillOpacity: 0.2 }}
                                    />
                                    <Marker position={[28.6139, 77.2090]}>
                                        <Popup>
                                            Pristine Salads <br /> Delhi NCR Kitchen
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            ) : (
                                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400">Loading Map...</span>
                                </div>
                            )}

                            {/* Map overlay card */}
                            <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-2xl z-[1000] max-w-xs">
                                <h4 className="font-bold text-gray-900 flex items-center">
                                    <MapPin className="w-4 h-4 text-brand-green mr-2" />
                                    Delhi NCR
                                </h4>
                                <p className="text-xs text-gray-500 pl-6">India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
