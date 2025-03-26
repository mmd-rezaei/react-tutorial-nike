import { services } from "../constant/index";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section
      className="max-container flex justifuy-center 
    flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
