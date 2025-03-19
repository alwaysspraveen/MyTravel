import { useState } from "react";

const ReadMoreLess = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-2">
      <p className="leading-8">{isExpanded ? text : text.slice(0, 50) + "..."}</p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 mt-2">{isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreLess;
