import React, { useState } from "react";
import { Extracurricular as ExtracurricularData } from "../../constants";

const Extracurricular = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section
      id="Extracurricular"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >
      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          EXTRACURRICULARS
        </h2>

        <div className="w-40 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Activities that helped me grow outside academics.
        </p>
      </div>

      {/* ================= EXTRACURRICULAR CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExtracurricularData.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="bg-gray-900 border border-white/20 rounded-2xl p-6
                       shadow-xl hover:shadow-purple-500/40
                       hover:-translate-y-2 transition-all duration-300
                       cursor-pointer"
          >
            {/* Tag */}
            <span
              className="bg-purple-700/20 text-purple-400
                         px-3 py-1 text-xs rounded-full font-semibold"
            >
              {item.tag}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mt-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Click hint */}
            <p className="text-purple-400 text-xs mt-5 font-semibold">
              Click to view memories →
            </p>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80
                     flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-2xl shadow-2xl
                       w-full max-w-5xl max-h-[90vh]
                       overflow-y-auto relative
                       border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ================= CLOSE BUTTON ================= */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-white
                         text-3xl hover:text-purple-500
                         z-20"
            >
              &times;
            </button>

            <div className="p-8">

              {/* ================= TITLE ================= */}
              <h3 className="text-3xl font-bold text-white mb-3">
                {selectedItem.title}
              </h3>

              {/* ================= TAG ================= */}
              <span
                className="inline-block bg-purple-700/20
                           text-purple-400 px-3 py-1
                           text-xs rounded-full font-semibold mb-4"
              >
                {selectedItem.tag}
              </span>

              {/* ================= DESCRIPTION ================= */}
              <p className="text-gray-400 mb-8">
                {selectedItem.description}
              </p>

              {/* ================= PHOTOS ================= */}
              {selectedItem.photos &&
                selectedItem.photos.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-5">
                      Moments & Memories
                    </h4>

                    {/* Horizontal Gallery */}
                    <div
                      className="flex gap-5 overflow-x-auto
                                 pb-5 scrollbar-thin
                                 scrollbar-thumb-purple-600
                                 scrollbar-track-gray-800"
                    >
                      {selectedItem.photos.map((photo, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0
                                     w-[280px] h-[200px]
                                     rounded-xl overflow-hidden
                                     border border-white/20
                                     shadow-lg"
                        >
                          <img
                            src={photo}
                            alt={`${selectedItem.title} ${index + 1}`}
                            className="w-full h-full object-cover
                                       hover:scale-105
                                       transition-transform
                                       duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* ================= NO PHOTOS ================= */}
              {(!selectedItem.photos ||
                selectedItem.photos.length === 0) && (
                <p className="text-gray-500 text-sm">
                  No memories added yet.
                </p>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Extracurricular;