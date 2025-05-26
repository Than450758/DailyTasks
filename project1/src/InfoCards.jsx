import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faPalette, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faCogs,
    title: "With APIs",
    description: "Between our Javascript API and our GraphQL API, we’re ready to answer all your requests.",
    color: "bg-pink-300",
    shadow: "shadow-pink-500/50",
  },
  {
    icon: faPalette,
    title: "Styling Icons",
    description: "Make your icons look the best with our styling tools.",
    color: "bg-purple-300",
    shadow: "shadow-purple-500/50",
  },
  {
    icon: faCloudUploadAlt,
    title: "Uploading Icons",
    description: "Now with the magic of Kits, you can upload your own icons and use them right alongside official Font Awesome ones!",
    color: "bg-red-300",
    shadow: "shadow-red-500/50",
  },
];

export default function InfoCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-white w-80 rounded-xl overflow-hidden shadow-md transition-transform transform hover:scale-105"
        >
          <div className="flex justify-center items-center p-6 text-4xl text-blue-900">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div className={`${item.color} p-6 pb-8 shadow-inner rounded-b-xl`}>
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
