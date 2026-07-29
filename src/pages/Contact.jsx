export default function Contact() {
    return (
        <div className="w-full bg-white text-gray-900 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                
                {/* Header Halaman */}
                <div className="py-10 md:py-16 max-w-3xl">
                    <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">Get in Touch</h4>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Let's Discuss Your Project</h1>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Have a vision in mind? Reach out to our expert team for consultations, inquiries, or start planning your dream luxury home today.
                    </p>
                </div>

                {/* Konten Utama Kontak (Grid Informasi & Peta) */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Informasi Kontak */}
                    <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-3xl shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-950 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            
                            {/* Lokasi */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-950 text-sm uppercase tracking-wider">Office Location</h4>
                                    <p className="text-gray-600 text-sm mt-1">Jl. Surabaya, East Java, Indonesia</p>
                                </div>
                            </div>
                            
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                                    ✉️
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-950 text-sm uppercase tracking-wider">Email Us</h4>
                                    <a href="mailto:iniemail@gmail.com" className="text-gray-600 hover:text-blue-600 transition text-sm mt-1 block">
                                        iniemail@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            {/* WhatsApp / Telepon */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                                    📞
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-950 text-sm uppercase tracking-wider">Call / WhatsApp</h4>
                                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition text-sm mt-1 block">
                                        +62 812-3456-7890
                                    </a>
                                </div>
                            </div>

                            {/* Sosial Media */}
                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="font-bold text-blue-950 text-sm uppercase tracking-wider mb-3">Follow Us</h4>
                                <div className="flex space-x-3">
                                    {/* Instagram */}
                                    <a 
                                        href="https://instagram.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition text-sm text-blue-600 hover:text-white"
                                        title="Instagram"
                                    >
                                        📸
                                    </a>
                                    
                                    {/* TikTok */}
                                    <a 
                                        href="https://tiktok.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition text-sm text-blue-600 hover:text-white"
                                        title="TikTok"
                                    >
                                        🎵
                                    </a>
                                    
                                    {/* YouTube */}
                                    <a 
                                        href="https://youtube.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition text-sm text-blue-600 hover:text-white"
                                        title="YouTube"
                                    >
                                        ▶️
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Kontainer Peta Google Maps */}
                    <div className="bg-gray-200 h-96 rounded-3xl shadow-lg border border-gray-200 overflow-hidden relative">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9413.242796372218!2d112.73478372421005!3d-7.265738766942504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f960aee9a64d%3A0xaa9e2f2c4ed67175!2sTunjungan%20Plaza!5e0!3m2!1sid!2sid!4v1782756685084!5m2!1sid!2sid" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Google Maps Location"
                        ></iframe>
                    </div>

                </div>

            </div>
        </div>
    );
}