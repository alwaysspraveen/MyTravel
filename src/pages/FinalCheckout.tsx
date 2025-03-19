import { useLocation } from "react-router-dom";

function FinalCheckout() {
  const location = useLocation();
  const details = location.state;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Final Checkout</h1>
      <p className="text-xl">Hotel Name: {details.hotelName}</p>
      <p className="text-xl">Price: {details.price}</p>
      <p className="text-xl">Rating: {details.rating}</p>
      <p className="text-xl">Facilities:</p>
      <ul className="list-disc pl-6">
        {details.facilities.map((facility : string, index : string) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
}

export default FinalCheckout;
