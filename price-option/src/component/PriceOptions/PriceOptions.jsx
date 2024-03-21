import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym equipment",
        "Sauna and steam room access",
        "Swimming pool access",
      ],
      price: "$30/month",
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to gym equipment",
        "Access to gym equipment",
        "Group fitness classes",
      ],
      price: "$50/month",
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Group fitness classes",
        "Personal trainer sessions",
        "Sauna and steam room access",
        "Swimming pool access",
      ],
      price: "$80/month",
    },
  ];

  return (
    <div className=" m-12 space-y-6">
      <h2 className="text-5xl text-center">Best Price of The Town</h2>
      <div className=" grid md:grid-cols-3 gap-10">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
