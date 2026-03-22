"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function NewPage() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://newsdata.io/api/1/latest?apikey=pub_5281385ba9e64182517f03918881c22ab1bf1&language=th"
                );

                setNews(response.data.results);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNews();
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
        <div className="bg-black min-h-screen">
            <h1 className="text-4xl text-center my-5 text-white">New API</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {news.map((item) => (
                    <a key={item.article_id} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-amber-400 w-full rounded-xl p-3 hover:shadow-lg hover:scale-105 transition block">
                        <h2 className="text-center text-lg font-bold mb-2 line-clamp-2">{item.title}</h2>

                        {item.image_url && (
                            <img
                                src={item.image_url}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded"
                            />
                        )}

                        <p className="text-sm text-gray-950 mt-2 line-clamp-3">{item.description || "ไม่มีรายละเอียด"}</p>

                        <p className="text-center text-gray-950 mt-3 text-sm"> อ่านข่าวเต็ม </p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default NewPage;