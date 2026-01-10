interface PropertyProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyProps) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="mt-2 font-bold">${property.price} / night</p>
      </div>
    </div>
  );
}
