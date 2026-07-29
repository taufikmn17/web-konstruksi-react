export default function About() {
    return (
        <div className="w-full bg-white pt-24 pb-16">
            {/* --- HERO SECTION ABOUT --- */}
            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16">
                <div className="max-w-3xl">
                    <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">About Us</h4>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Crafting Excellence Since 2010</h1>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Dedicated exclusively to the art of luxury home construction, transforming architectural dreams into concrete realities with uncompromising precision and elegance.
                    </p>
                </div>
            </section>

            {/* --- MAIN STORY SECTION --- */}
            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-blue-600 font-semibold tracking-widest text-sm uppercase mb-3 block">Our Heritage</span>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Journey & Evolution</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Founded in 2010 as <strong className="text-gray-900">Semangat Karya</strong>, we set out with a clear vision to establish ourselves as a premier contractor in Surabaya. Through years of dedication, trust, and mastering complex structural engineering, we continuously evolved to meet higher standards of aesthetic and structural demands.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        In our pursuit for luxury living-space, we rebranded in 2018 to become <strong className="text-gray-900">STK Contractor</strong>, dedicating ourselves exclusively to the art of luxury home construction. Guided by our core principle, <strong className="text-gray-900">"Build Your Vision to Perfection,"</strong> we handle every detail from the initial concept to the final handover.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <img 
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" 
                            alt="Luxury Project 1" 
                            className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg border border-gray-100"
                        />
                        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg text-center">
                            <span className="block text-3xl font-extrabold mb-1">15+</span>
                            <span className="text-xs uppercase tracking-wider font-semibold opacity-80">Years Experience</span>
                        </div>
                    </div>
                    <div className="space-y-4 pt-8">
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-blue-950 mb-2 text-base">Surabaya Based</h4>
                            <p className="text-gray-600 text-xs leading-relaxed">Serving premium high-end residential clients with localized expertise and trusted vendor networks.</p>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
                            alt="Luxury Project 2" 
                            className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg border border-gray-100"
                        />
                    </div>
                </div>
            </section>

            {/* --- CORE VALUES SECTION --- */}
            <section className="bg-gray-50 py-10 md:py-16 border-y border-gray-100">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-3xl mb-10">
                        <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">What Drives Us</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Our Core Principles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
                            <h3 className="text-xl font-bold text-blue-950 mb-3">Extreme Precision</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Exceptional quality is born from meticulous attention to detail. Every corner, structural joint, and material is curated to ensure maximum durability and aesthetic pleasure.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
                            <h3 className="text-xl font-bold text-blue-950 mb-3">Innovative Solutions</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Tackling intricate site challenges with creative engineering solutions, adapting quickly without ever compromising structural safety or project timeline integrity.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
                            <h3 className="text-xl font-bold text-blue-950 mb-3">Full Transparency</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Trust is built through honest, open communication. We maintain complete clarity regarding budgeting, timeline milestones, and progression updates at every phase.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION SECTION --- */}
            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16">
                <div className="bg-blue-950 text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Let's collaborate to turn your unique vision into an architectural masterpiece. Consult with our expert team today.
                        </p>
                    </div>
                    <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition shadow-lg shrink-0">
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}