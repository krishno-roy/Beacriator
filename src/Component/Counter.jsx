import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const Counter = () => {
  // State to manage the counter values
  const [counters, setCounters] = useState({
    creators: 0,
    projects: 0,
    clients: 0,
  });

  // Target values for the counters
  const targetValues = {
    creators: 24,
    projects: 100,
    clients: 50,
  };

  // Duration of the counter animation in milliseconds
  const duration = 2000;

  useEffect(() => {
    const increments = {
      creators: targetValues.creators / (duration / 50),
      projects: targetValues.projects / (duration / 50),
      clients: targetValues.clients / (duration / 50),
    };

    const interval = setInterval(() => {
      setCounters((prev) => {
        const newValues = {
          creators: Math.min(
            prev.creators + increments.creators,
            targetValues.creators
          ),
          projects: Math.min(
            prev.projects + increments.projects,
            targetValues.projects
          ),
          clients: Math.min(
            prev.clients + increments.clients,
            targetValues.clients
          ),
        };

        if (
          newValues.creators >= targetValues.creators &&
          newValues.projects >= targetValues.projects &&
          newValues.clients >= targetValues.clients
        ) {
          clearInterval(interval);
        }

        return newValues;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(counters).map((key, index) => (
        <div
          key={index}
          className="bg-pink-300 py-8 px-6 text-center rounded-3xl hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-5xl sm:text-6xl font-bold flex justify-center items-center">
            {Math.round(counters[key])}
            <FaPlus className="ml-2 text-2xl" />
          </h2>
          <p className="text-xl sm:text-2xl font-semibold mt-2 capitalize">
            {key}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
