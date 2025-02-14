import ServiceCard from "./ui/ServiceCard";

const Services = () => {
  return (
    <div className="py-28 flex justify-center items-center gap-28">
      <ServiceCard
        title="FREE AND FAST DELIVERY"
        desc="Free delivery for all orders over $140"
        logo="/services-logo/icon-delivery.svg"
      />
      <ServiceCard
        title="24/7 CUSTOMER SERVICE"
        desc="Friendly 24/7 customer support"
        logo="/services-logo/icon-customer-service.svg"
      />
      <ServiceCard
        title="MONEY BACK GUARANTEE"
        desc="We return money within 30 days"
        logo="/services-logo/icon-secure.svg"
      />
    </div>
  );
};

export default Services;
