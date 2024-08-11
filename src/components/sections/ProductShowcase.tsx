import React from "react";
import prodimage from "@/assets/product-image.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24">
      <div className="container">
        <div className="">Boost you productivity</div>
        <h2>A more effective way to track progress</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          accusamus esse. Unde praesentium mollitia rerum quo voluptates
          adipisci aliquam natus?
        </p>
        <Image src={prodimage} alt="prod image" className="" />
      </div>
    </section>
  );
};

export default ProductShowcase;
