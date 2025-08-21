import React from "react";
import logoImage from "../../../assets/logo.jpeg";

const Logo = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <img className="rounded-full shadow-2xl w-48 h-48 object-cover" src={logoImage} alt="VPeakFit Logo" />
      </div>
    </section>
  );
};

export default Logo;
