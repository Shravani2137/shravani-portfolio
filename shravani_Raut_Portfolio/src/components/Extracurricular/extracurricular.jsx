import React, { useState } from "react";
import { Extracurricular as ExtracurricularData } from "../../constants";

const Extracurricular = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section
      id="Extracurricular"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXTRACURRICULARS</h2>
        <div className="w-40 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Activities that helped me grow outside academics.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExtracurricularData.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="bg-gray-900 border border-white/20 rounded-2xl p-6 shadow-xl 
                       hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 
                       cursor-pointer"
          >
            <span className="bg-purple-700/20 text-purple-400 px-3 py-1 text-xs rounded-full font-semibold">
              {item.tag}
            </span>

            <h3 className="text-2xl font-bold text-white mt-4">{item.title}</h3>

            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-white text-3xl hover:text-purple-500"
            >
              &times;
            </button>

            <div className="p-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-gray-400 mb-6">{selectedItem.description}</p>

             
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Extracurricular;
