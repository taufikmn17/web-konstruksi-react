import { useState, useEffect } from 'react';

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwigeXVNYURubhGoyZaLCbI5rqz8-xhH9j0Yj1yOtEOGwS31uRZSn64WabCOQt3DYAY/exec";


    // Mengambil data dari Google Sheets Apps Script
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(SCRIPT_URL);
                
                if (!response.ok) {
                    throw new Error('Gagal terhubung');
                }

                const data = await response.json();
                
                // Ambil bagian array project dari objek { projects: [...], blog: [...] }
                const projectArray = data.projects || [];
                
                // Balik urutan, ambil 3 data teratas untuk halaman Home
                setProjects([...projectArray].reverse().slice(0, 3));
                setHasError(false);
            } catch (error) {
                console.error("Gagal mengambil data :", error);
                setHasError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Efek Counter Statistik
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        
        const startCounting = (counter) => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            let count = 0;
            
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            const interval = duration / steps;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.round(count).toLocaleString('id-ID') + suffix;
                    setTimeout(updateCount, interval);
                } else {
                    counter.innerText = target.toLocaleString('id-ID') + suffix;
                }
            };

            updateCount();
        };

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const countersInsection = entry.target.querySelectorAll('.counter');
                    countersInsection.forEach(counter => {
                        if (!counter.classList.contains('counted')) {
                            counter.classList.add('counted');
                            startCounting(counter);
                        }
                    });
                }
            });
        }, { threshold: 0.2 });

        const statsSection = document.getElementById('stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        return () => {
            if (statsSection) observer.unobserve(statsSection);
        };
    }, []);

    return (
      <div 
        className="w-full bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920')" }}
      >
        <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full">
        
          {/* --- SECTION PERTAMA (HERO SECTION FULL & BERSIH) --- */}
          <section id="home" className="relative w-full h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden bg-black">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 z-0">
                  <source src="/video/beranda.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 z-0"></div>
              <div className="relative z-10 text-white max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                    Build Your Vision to Perfection
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed text-gray-200 font-light max-w-2xl">
                    Bring your dream luxury home to life with exceptional quality and meticulous attention to detail. From the initial concept to the final handover, we are committed to building a home that truly reflects your unique style and vision. Let us help you create a space where elegance meets comfort.
                  </p>
                  <a href="#about" className="inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase border-b-2 border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition">
                      CONSULT WITH US &rarr;
                  </a>
              </div>
          </section>

          {/* --- SECTION KEDUA (STATISTIK) --- */}
          <section id="stats-section" className="w-full bg-white py-10 md:py-16">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-xl text-center md:text-left">
                          <h3 className="text-3xl font-bold mb-1 counter" data-target="50" data-suffix="+">0+</h3>
                          <p className="text-xs uppercase tracking-wider font-semibold">Published Projects</p>
                          <span className="opacity-75 text-[10px]">Since 2010</span>
                      </div>
                      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-xl text-center md:text-left">
                          <h3 className="text-3xl font-bold mb-1 counter" data-target="15" data-suffix="+">0+</h3>
                          <p className="text-xs uppercase tracking-wider font-semibold">Years</p>
                          <span className="opacity-75 text-[10px]">Experience</span>
                      </div>
                      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-xl text-center md:text-left">
                          <h3 className="text-3xl font-bold mb-1 counter" data-target="100" data-suffix="+">0+</h3>
                          <p className="text-xs uppercase tracking-wider font-semibold">Architects and Vendor</p>
                          <span className="opacity-75 text-[10px]">Relations</span>
                      </div>
                      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-xl text-center md:text-left">
                          <h3 className="text-3xl font-bold mb-1 counter" data-target="25000" data-suffix="">25,000</h3>
                          <p className="text-xs uppercase tracking-wider font-semibold">Square Meters.</p>
                          <span className="opacity-75 text-[10px]">Constructor</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION KETIGA (ABOUT) --- */}
          <section id="about" className="w-full bg-white py-10 md:py-16">
              <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">At a Glance</h4>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Us</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                          Founded in 2010 as <strong className="text-gray-900">Semangat Karya</strong>, we set out with a clear vision to establish ourselves as a premier contractor in Surabaya. In our pursuit for luxury living-space, we rebranded in 2018 to become <strong className="text-gray-900">STK Contractor</strong>, dedicating ourselves exclusively to the art of luxury home construction. With our guiding principle, <strong className="text-gray-900">"Build Your Vision to Perfection,"</strong> we are committed to transforming your dreams into concrete realities, one detail at a time.
                      </p>
                      <a href="#" className="inline-flex items-center text-blue-900 font-bold border-b-2 border-blue-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition">
                          SEE IN ACTION &rarr;
                      </a>
                  </div>
                  <div className="bg-gray-200 h-72 md:h-80 rounded-lg flex items-center justify-center text-gray-500 shadow-xl overflow-hidden">
                      <video className="w-full h-full object-cover" controls>
                          <source src="/video/beranda.mp4" type="video/mp4" />
                          Browser Anda tidak mendukung tag video.
                      </video>
                  </div>
              </div>
          </section>

          {/* --- SECTION KEEMPAT (WORKFLOW) --- */}
          <section className="py-10 md:py-16 text-white w-full relative bg-blue-950/50">
              <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                  <h4 data-aos="none" className="text-blue-400 font-bold tracking-widest text-sm mb-2 uppercase drop-shadow-md">Our Workflow</h4>
                  <h2 data-aos="none" className="text-3xl md:text-4xl font-extrabold mb-10 text-white drop-shadow-md">Strategic Steps Towards Excellent Results</h2>
                  
                  <div className="relative grid md:grid-cols-4 gap-8">
                      <div className="absolute top-6 left-0 w-full h-1 bg-blue-500/80 hidden md:block z-0 shadow-sm">0</div>
      
                      <div data-aos="none" data-aos-delay="100" className="relative z-10">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full mb-4 border-4 border-blue-950 flex items-center justify-center font-bold text-lg shadow-xl">1</div>
                          <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">Consultation</h3>
                          <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md font-medium">Understanding your vision, budget, and requirements through detailed project analysis.</p>
                      </div>
                      <div data-aos="none" data-aos-delay="200" className="relative z-10">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full mb-4 border-4 border-blue-950 flex items-center justify-center font-bold text-lg shadow-xl">2</div>
                          <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">Planning</h3>
                          <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md font-medium">Handling blueprints, engineering calculations, and all necessary legal building permits.</p>
                      </div>
                      <div data-aos="none" data-aos-delay="300" className="relative z-10">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full mb-4 border-4 border-blue-950 flex items-center justify-center font-bold text-lg shadow-xl">3</div>
                          <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">Construction</h3>
                          <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md font-medium">Executing structure and foundation works with high-quality materials and professional safety.</p>
                      </div>
                      <div data-aos="none" data-aos-delay="400" className="relative z-10">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full mb-4 border-4 border-blue-950 flex items-center justify-center font-bold text-lg shadow-xl">4</div>
                          <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">Finishing</h3>
                          <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md font-medium">Finalizing interior/exterior aesthetics and rigorous quality checks before handover.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION KELIMA (COMMITMENT TO QUALITY) --- */}
          <section className="w-full bg-white py-10 md:py-16">
              <div data-aos="none" className="container mx-auto px-4 md:px-8 lg:px-16">
                  <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">Our Values</h4>
                  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">Commitment to Quality</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" alt="Extreme Precision" className="w-full h-48 object-cover rounded-xl mb-4"/>
                          <h3 className="text-blue-500 font-bold text-xl mb-2">Extreme Precision</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">We believe that the best quality is born from attention to detail. Every corner and material is chosen to provide maximum satisfaction.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img src="https://images.pexels.com/photos/5849581/pexels-photo-5849581.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Innovation" className="w-full h-48 object-cover rounded-xl mb-4"/>
                          <h3 className="text-blue-500 font-bold text-xl mb-2">Innovative Solutions</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Facing field challenges with creative and smart solutions. We adapt without compromising safety or project integrity.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Full Transparency" className="w-full h-48 object-cover rounded-xl mb-4"/>
                          <h3 className="text-blue-500 font-bold text-xl mb-2">Full Transparency</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Honest and regular communication is the key to project security. We always prioritize clear information at every stage of work.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION KEENAM (PROJECTS) --- */}
          <section id="projects" className="w-full bg-white relative z-20 py-10 md:py-16">
              <div data-aos="none" className="container mx-auto px-4 md:px-8 lg:px-16">
                  <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">Our Work</h4>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Selected Projects</h2>
                      <a href="/project" className="text-blue-900 font-bold border-b-2 border-blue-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition w-fit">VIEW FULL GALLERY &rarr;</a>
                  </div>
                  
                  {loading ? (
                      <div className="text-center py-12">
                          <p className="text-gray-500 text-base animate-pulse">Loading projects...</p>
                      </div>
                  ) : hasError ? (
                      <div className="text-center py-12">
                          <p className="text-gray-500 text-base">Failed to load data. Please refresh the page.</p>
                      </div>
                  ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {projects.map((project) => (
                              <div key={project.id} className="group cursor-pointer">
                                  <div className="overflow-hidden rounded-2xl shadow-lg mb-4 h-72 border border-gray-200 relative">
                                      <img 
                                          src={project.image} 
                                          alt={project.title} 
                                          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                      />
                                      <div className="absolute top-4 left-4 bg-blue-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                                          {project.category}
                                      </div>
                                  </div>
                                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-600 transition mb-1">
                                      {project.title}
                                  </h3>
                                  <p className="text-gray-500 text-sm">{project.location}</p>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          </section>

          {/* --- SECTION KETUJUH (CALL TO ACTION / CTA SECTION) --- */}
          <section className="relative py-10 md:py-16 bg-blue-950/50">
              <div className="relative z-20 container mx-auto px-6 text-center text-white">
                  <div data-aos="none" className="mb-4 font-bold tracking-widest text-xl">WEB <span className="font-light">CONTRACTOR</span></div>
                  <h2 data-aos="none" className="text-3xl md:text-5xl font-bold mb-4">Build Your Vision<br />to Perfection</h2>
                  <p data-aos="none" className="text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
                      Contact us and start your journey to building your dream home with exceptional quality.
                  </p>
                  <div data-aos="none">
                      <a href="#contact" className="inline-block border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-950 transition duration-300">
                          CONSULT WITH US NOW &rarr;
                      </a>
                  </div>
              </div>
          </section>

          {/* --- SECTION KEDELAPAN (CONTACT SECTION) --- */}
          <section id="contact" className="w-full bg-white py-10 md:py-16 border-t border-gray-100">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="max-w-3xl mb-12">
                      <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">Get in Touch</h4>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Let's Discuss Your Project</h2>
                      <p className="text-gray-600 text-base leading-relaxed">
                          Have a vision in mind? Reach out to our expert team for consultations, inquiries, or start planning your dream luxury home today.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-3xl shadow-lg">
                          <h3 className="text-2xl font-bold text-blue-950 mb-6">Contact Information</h3>
                          <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                                      📍
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-blue-950 text-sm uppercase tracking-wider">Office Location</h4>
                                      <p className="text-gray-600 text-sm mt-1">Jl. Surabaya, Jawa Timur, Indonesia</p>
                                  </div>
                              </div>
                              
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
                          </div>
                      </div>

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
          </section>

          {/* --- FOOTER SECTION --- */}
          <footer className="w-full bg-blue-950 text-white pt-16 pb-8 border-t border-blue-900/55">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                      
                      {/* Kolom 1: Brand & Bio */}
                      <div>
                          <h3 className="text-2xl font-extrabold tracking-tight mb-4 text-white">
                              Web <span className="text-blue-400">Contractor</span>
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                              "Build Your Vision to Perfection." We are your trusted partner in bringing your dream luxury home to life with exceptional quality, elegance, and uncompromising detail.
                          </p>
                          <div className="flex space-x-4">
                              {/* Instagram */}
                              <a 
                                  href="https://instagram.com" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="w-10 h-10 bg-blue-900/60 hover:bg-blue-600 rounded-full flex items-center justify-center transition text-sm text-white"
                                  title="Instagram"
                              >
                                  📸
                              </a>
                              
                              {/* TikTok */}
                              <a 
                                  href="https://tiktok.com" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="w-10 h-10 bg-blue-900/60 hover:bg-blue-600 rounded-full flex items-center justify-center transition text-sm text-white"
                                  title="TikTok"
                              >
                                  🎵
                              </a>
                              
                              {/* YouTube */}
                              <a 
                                  href="https://youtube.com" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="w-10 h-10 bg-blue-900/60 hover:bg-blue-600 rounded-full flex items-center justify-center transition text-sm text-white"
                                  title="YouTube"
                              >
                                  ▶️
                              </a>
                          </div>
                      </div>

                      {/* Kolom 2: Quick Links */}
                      <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Quick Links</h4>
                          <ul className="space-y-3 text-sm text-gray-300">
                              <li>
                                  <a href="#home" className="hover:text-white transition flex items-center gap-2">
                                      &rarr; Home
                                  </a>
                              </li>
                              <li>
                                  <a href="#about" className="hover:text-white transition flex items-center gap-2">
                                      &rarr; About Us
                                  </a>
                              </li>
                              <li>
                                  <a href="#projects" className="hover:text-white transition flex items-center gap-2">
                                      &rarr; Project
                                  </a>
                              </li>
                              <li>
                                  <a href="#contact" className="hover:text-white transition flex items-center gap-2">
                                      &rarr; Contact & Location
                                  </a>
                              </li>
                          </ul>
                      </div>

                      {/* Kolom 3: Services */}
                      <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Our Services</h4>
                          <ul className="space-y-3 text-sm text-gray-300">
                              <li className="hover:text-white transition">Luxury Home Construction</li>
                              <li className="hover:text-white transition">Planning & Architecture</li>
                              <li className="hover:text-white transition">Project Management</li>
                              <li className="hover:text-white transition">Finishing & Total Renovation</li>
                          </ul>
                      </div>

                      {/* Kolom 4: Working Hours */}
                      <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Working Hours</h4>
                          <p className="text-sm text-gray-300 mb-2">Monday - Friday: 08:00 AM - 05:00 PM</p>
                          <p className="text-sm text-gray-300 mb-4">Saturday: 08:00 AM - 02:00 PM</p>
                          <p className="text-xs text-gray-400 leading-relaxed">
                              Sunday & National Holidays: Closed (WhatsApp consultations remain available).
                          </p>
                      </div>

                  </div>

                  {/* Garis Bawah / Copyright */}
                  <div className="border-t border-blue-900/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
                      <p>&copy; {new Date().getFullYear()} Web Contractor. All rights reserved.</p>
                      <div className="flex space-x-6">
                          <a href="#" className="hover:text-white transition">Privacy Policy</a>
                          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                      </div>
                  </div>
              </div>
          </footer>
        </div>
      </div>
    );
}