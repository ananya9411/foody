import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20 px-4">
      <h2 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-teal-500 underline">
        Return to Home
      </Link>
    </div>
  );
}
