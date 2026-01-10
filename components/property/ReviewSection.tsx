import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  author: string;
  comment: string;
  rating: number;
}

interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="border rounded p-4 bg-gray-50"
        >
          <p className="font-medium">{review.author}</p>
          <p className="text-yellow-500">⭐ {review.rating}/5</p>
          <p className="text-gray-700 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
