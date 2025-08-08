import React from "react";

const Loading = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
    </section>
  );
};

export default React.memo(Loading);
