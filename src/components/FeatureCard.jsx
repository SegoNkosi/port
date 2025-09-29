import React from 'react';

const FeatureCard = ({ feature }) => {
    const colorClasses = {
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', tag: 'bg-blue-100 text-blue-800' },
        green: { bg: 'bg-green-100', text: 'text-green-600', tag: 'bg-green-100 text-green-800' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600', tag: 'bg-purple-100 text-purple-800' },
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', tag: 'bg-yellow-100 text-yellow-800' },
        red: { bg: 'bg-red-100', text: 'text-red-600', tag: 'bg-red-100 text-red-800' }
    };

    const colors = colorClasses[feature.color] || colorClasses.blue;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition duration-300">
            <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${feature.icon} ${colors.text} text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, index) => (
                    <span key={index} className={`${colors.tag} text-xs px-2 py-1 rounded`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FeatureCard;