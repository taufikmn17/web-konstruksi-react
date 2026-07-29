import { useState, useEffect } from 'react';

export default function Project() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [allProjects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwigeXVNYURubhGoyZaLCbI5rqz8-xhH9j0Yj1yOtEOGwS31uRZSn64WabCOQt3DYAY/exec";

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(SCRIPT_URL);
                const data = await response.json();
                
                if (data.projects && Array.isArray(data.projects)) {
                    setAllProjects(data.projects);
                } else if (Array.isArray(data)) {
                    setAllProjects(data);
                } else {
                    setHasError(true);
                }
            } catch (error) {
                console.error("Gagal memuat data project:", error);
                setHasError(true);
            } finally {
                setLoading(false);
            }
        };
    
        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === 'All' 
        ? allProjects 
        : allProjects.filter(project => project.category === activeCategory);

    const categories = ['All', ...new Set(allProjects.map(item => item.category))];

    return (
      <div className="w-full bg-white text-gray-900 min-h-screen pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
              
              {/* Header Halaman */}
              <div className="py-10 md:py-16 max-w-3xl">
                  <h4 className="text-blue-600 font-semibold tracking-widest text-sm mb-3 uppercase">Portfolio</h4>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Our Complete Projects</h1>
                  <p className="text-gray-600 text-base leading-relaxed">
                      Explore our extensive collection of completed luxury residences, commercial properties, and custom architectural builds crafted with meticulous precision and unmatched quality.
                  </p>
              </div>

              {/* Status Loading (Skeleton UI), Error, atau Konten */}
              {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[1, 2, 3].map((n) => (
                          <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse border border-gray-100">
                              <div className="h-80 bg-gray-200 w-full"></div>
                              <div className="p-6">
                                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                              </div>
                          </div>
                      ))}
                  </div>
              ) : hasError ? (
                  <div className="text-center py-16">
                      <p className="text-gray-500 text-base">Failed to load data. Please refresh the page.</p>
                  </div>
              ) : (
                  <div className="py-6">
                      {/* Filter Kategori Dinamis */}
                      <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-200 pb-6">
                          {categories.map((category) => (
                              <button
                                  key={category}
                                  onClick={() => setActiveCategory(category)}
                                  className={`px-5 py-2 rounded-full text-sm font-semibold transition shadow-sm ${
                                      activeCategory === category
                                          ? 'bg-blue-900 text-white shadow-md'
                                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                  }`}
                              >
                                  {category}
                              </button>
                          ))}
                      </div>

                      {/* Grid Semua Project */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredProjects.map((project) => (
                              <div key={project.id} className="group cursor-pointer">
                                  <div className="overflow-hidden rounded-2xl shadow-lg mb-4 h-80 border border-gray-200 relative">
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
                                  <p className="text-gray-500 text-sm font-medium">{project.location}</p>
                              </div>
                          ))}
                      </div>

                      {/* Jika project tidak ditemukan dalam kategori */}
                      {filteredProjects.length === 0 && (
                          <div className="text-center py-16">
                              <p className="text-gray-500 text-base">No projects found in this category.</p>
                          </div>
                      )}
                  </div>
              )}

          </div>
      </div>
    );
}