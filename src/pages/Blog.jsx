import { useState, useEffect } from 'react';

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwigeXVNYURubhGoyZaLCbI5rqz8-xhH9j0Yj1yOtEOGwS31uRZSn64WabCOQt3DYAY/exec";

    useEffect(() => {
        async function fetchBlogPosts() {
            try {
                const response = await fetch(SCRIPT_URL);
                const data = await response.json();
                
                if (data.blog && Array.isArray(data.blog)) {
                    setBlogPosts(data.blog);
                } else if (Array.isArray(data)) {
                    setBlogPosts(data);
                } else {
                    setHasError(true);
                }
            } catch (error) {
                console.error("Gagal memuat data blog dari Google Sheets:", error);
                setHasError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogPosts();
    }, []);

    // Helper format tanggal dari Google Sheets
    function formatDate(dateString) {
        if (!dateString) return '';
        if (dateString.includes('T')) {
            const dateObj = new Date(dateString);
            return dateObj.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }
        return dateString;
    }

    // Helper format konten teks agar otomatis mendeteksi sub-judul dan paragraf
    function smartFormatContent(text) {
        if (!text) return '';
        if (text.includes('<p>') || text.includes('<h2>')) {
            return text;
        }

        const lines = text.split('\n');
        let htmlOutput = '';

        lines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) return;

            if (/^\d+\.\s/.test(trimmed) || (trimmed.length < 60 && !trimmed.endsWith('.'))) {
                htmlOutput += `<h2 class="text-xl md:text-2xl font-bold text-blue-950 pt-4 mb-2">${trimmed}</h2>`;
            } else {
                htmlOutput += `<p class="mb-4 leading-relaxed">${trimmed}</p>`;
            }
        });

        return htmlOutput;
    }

    // TAMPILAN DETAIL ARTIKEL (KETIKA KLIK READ MORE)
    if (selectedPost) {
        return (
            <div className="w-full bg-white text-gray-900 min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
                    <button 
                        onClick={() => setSelectedPost(null)}
                        className="inline-flex items-center text-sm font-bold text-blue-900 hover:text-blue-600 mb-8 transition"
                    >
                        &larr; Kembali ke Blog
                    </button>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-12 border border-gray-100">
                        <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-100 text-sm text-gray-500">
                            <span>📅 {formatDate(selectedPost.date)}</span>
                            <span>•</span>
                            <span>{selectedPost.author || 'Admin WEB Contractor'}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
                            {selectedPost.title}
                        </h1>

                        <div className="mb-8 rounded-xl overflow-hidden shadow-md h-72 md:h-96 bg-gray-100">
                            <img 
                                src={selectedPost.image_url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'} 
                                alt={selectedPost.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div 
                            className="text-gray-700 text-base md:text-lg space-y-4"
                            dangerouslySetInnerHTML={{ __html: smartFormatContent(selectedPost.content) }}
                        />

                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <button 
                                onClick={() => setSelectedPost(null)}
                                className="inline-flex items-center text-blue-950 font-semibold hover:text-blue-600 transition"
                            >
                                &larr; Kembali ke Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // TAMPILAN UTAMA DAFTAR ARTIKEL (BLOG LIST)
    return (
        <div className="w-full bg-white text-gray-900 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                
                {/* Header Halaman (Rata Kiri Sesuai Standar) */}
                <div className="py-10 md:py-16 max-w-3xl">
                    <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">ARTICLE</h4>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Insights, Tips, and Construction Trends</h1>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Explore our latest articles, expert guides, and industry insights on architecture, construction, and luxury property development.
                    </p>
                </div>

                {/* Kondisi Loading / Error / Grid Kartu */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse border border-gray-100">
                                <div className="h-52 bg-gray-200 w-full"></div>
                                <div className="p-6">
                                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : hasError ? (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-base">Failed to load data. Please refresh the page.</p>
                    </div>
                ) : blogPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300">
                                <div>
                                    <div className="h-52 overflow-hidden bg-gray-100">
                                        <img 
                                            src={post.image_url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'} 
                                            alt={post.title} 
                                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-gray-400 mb-2">{formatDate(post.date)}</div>
                                        <h3 className="text-blue-950 font-bold text-xl mb-3 leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <button 
                                        onClick={() => setSelectedPost(post)}
                                        className="inline-block bg-[#173860] hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow transition"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-base">Belum ada artikel blog tersedia di Google Sheets.</p>
                    </div>
                )}

            </div>
        </div>
    );
}