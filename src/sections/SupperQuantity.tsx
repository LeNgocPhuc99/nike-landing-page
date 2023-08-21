// component import
import Button from "@/components/Button";

// image import
import { shoe8 } from "@/assets/images";

const SupperQuantity = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red">Quantity</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, out meticulous crafted footwear is
          designed to elevate your experience, proving you with unmatched
          quantity, innovation, and touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensure your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Detail" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SupperQuantity;
