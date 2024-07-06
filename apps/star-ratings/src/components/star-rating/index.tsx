import { cn } from "@repo/common-utils";
import { useState } from "react";
import type { FunctionComponent } from "react";
import Star from "~/components/star-icon";

type Props = {
  noOfStars?: number;
};

const StarRating: FunctionComponent<Props> = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex: number) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex gap-x-4">
      {Array.from({ length: noOfStars }, (_, i) => i + 1).map((index) => (
        <button
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          key={`star-${index}`}
        >
          <Star
            className={cn(
              "size-16 origin-center transform transition-[transform]",
              {
                "scale-125": hover === index,
              },
            )}
            filled={index <= (hover || rating)}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
