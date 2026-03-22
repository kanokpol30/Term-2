"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function JikanPage() {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function fetchAnime() {
            axios.get('https://api.jikan.moe/v4/anime')
                .then((response) => {
                    console.log(response);
                    setAnime(response.data.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
        fetchAnime();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-4xl">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-4xl text-red-500">Error: {error}</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-4xl text-center my-5">Jikan Anime API</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {anime.map((item) => (
                    <div key={item.mal_id} className="bg-gray-700 w-full rounded-xl p-3 hover:shadow-lg transition">
                        <h2 className="text-center text-xl font-bold truncate">{item.title}</h2>
                        <div className="flex justify-center mt-2">
                            <img src={item.images.jpg.image_url} alt={item.title} className="w-full h-auto rounded"/>
                        </div>
                        <p className="text-center text-sm mt-2 text-gray-300">
                            Score: {item.score || 'N/A'} | Episodes: {item.episodes || 'N/A'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}   


export default JikanPage;