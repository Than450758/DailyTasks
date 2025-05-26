import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faVuejs,
  faAngular,
  faPython,
  faWordpress,
  faLess
} from "@fortawesome/free-brands-svg-icons";

const techs = [
  { name: "Vue.js", icon: faVuejs },
  { name: "React", icon: faReact },
  { name: "Ember", image: "https://cdn.worldvectorlogo.com/logos/ember-tomster.svg" },
  { name: "Angular", icon: faAngular },
  { name: "Python/Django", icon: faPython },
  { name: "SCSS", image: "https://cdn.worldvectorlogo.com/logos/sass-1.svg" },
  { name: "Less", icon: faLess },
  { name: "WordPress", icon: faWordpress },
];

export default function StackGrid() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Use Font Awesome with Your Preferred Syntax or Stack…
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 flex items-center space-x-4 hover:scale-105 transition-transform"
          >
            {tech.icon ? (
              <FontAwesomeIcon icon={tech.icon} size="2x" className="text-blue-900" />
            ) : (
              <img src={tech.image} alt={tech.name} className="w-8 h-8" />
            )}
            <span className="font-semibold text-blue-900">{tech.name}</span>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-sm text-gray-700">
        And more! Font Awesome works with{" "}
        <a href="#" className="text-blue-600 underline">Squarespace</a>,{" "}
        <a href="#" className="text-blue-600 underline">Require.js</a>,{" "}
        <a href="#" className="text-blue-600 underline">Rails with Turbolinks</a>, and{" "}
        <a href="#" className="text-blue-600 underline">jQuery</a> too.
      </p>
    </div>
  );
}
