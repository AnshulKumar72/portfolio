import { X } from "lucide-react"; // Install lucide-react if not present
import { useState } from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificate"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 relative"
      aria-label="Certificates section"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Verified credentials and achievements I’ve earned throughout my learning journey
        </p>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-gray-900 border border-white rounded-2xl p-4 shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
              <img
                src={certificate.img}
                alt={`${certificate.title} certificate`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
            <p className="text-sm text-gray-400">{certificate.organization}</p>
            <p className="text-xs text-gray-500">{certificate.date}</p>
            <button
              onClick={() => setSelectedCertificate(certificate)}
              className="mt-4 bg-[#8245ec] text-white px-4 py-2 rounded-lg w-full hover:bg-purple-600"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 border border-white rounded-xl shadow-lg max-w-3xl w-full p-4 sm:p-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-3 right-3 text-white hover:text-gray-400"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Certificate Image */}
            <div className="w-full h-[60vh] overflow-hidden rounded-lg">
              <img
                src={selectedCertificate.img}
                alt="Full certificate"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Certificate Info */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-white">{selectedCertificate.title}</h3>
              <p className="text-gray-400">{selectedCertificate.organization}</p>
              <p className="text-gray-500 text-sm">{selectedCertificate.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
