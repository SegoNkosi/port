import React from 'react';

const ProjectShowcase = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">[Hotilo Homepage Screenshot]</span>
          </div>
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">[Hotilo Booking Flow Screenshot]</span>
          </div>
        </div>
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">[Hotilo Dashboard Screenshot]</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;