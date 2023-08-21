// component import
import ServiceCard from "@/components/ServiceCard";

// const import
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-gap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} service={service} />
      ))}
    </section>
  );
};

export default Services;
