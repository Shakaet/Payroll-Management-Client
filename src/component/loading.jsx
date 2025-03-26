import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-lg font-semibold text-gray-700 animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
