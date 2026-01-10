interface PropertyDetailProps {
  property: {
    title: string;
    location: string;
    price: number;
    description: string;
    image: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500 mt-1">{property.location}</p>

      <p className="text-xl font-semibold mt-3">
        ${property.price} / night
      </p>

      <p className="mt-4 text-gray-700">{property.description}</p>
    </div>
  );
}
