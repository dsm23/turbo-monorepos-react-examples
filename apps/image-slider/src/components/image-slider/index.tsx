import { useState } from "react";
import type { FunctionComponent } from "react";
import { cn } from "@repo/common-utils";
import { Button } from "@repo/react-ui";
import type { Image } from "~/types";
import ArrowLeftIcon from "../arrow-left-icon";
import ArrowRightIcon from "../arrow-right-icon";

type Props = {
  images: Image[];
};

const ImageSlider: FunctionComponent<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="relative" role="region" aria-roledescription="carousel">
      <div className="overflow-hidden">
        <div className="-ml-4 flex">
          <Button
            className={cn(
              "absolute top-1/2 -left-12 h-8 w-8 -translate-y-1/2 rounded-full",
            )}
            variant="outline"
            size="icon"
            onClick={handlePrevious}
          >
            <ArrowLeftIcon className="size-4" />
          </Button>
          <span className="sr-only">Previous slide</span>
          {images.map((imageItem, index) => (
            <div
              key={imageItem.id}
              role="group"
              aria-roledescription="slide"
              className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", {
                hidden: currentSlide !== index,
              })}
            >
              <img alt={imageItem.download_url} src={imageItem.download_url} />
            </div>
          ))}

          <Button
            className={cn(
              "absolute top-1/2 -right-12 h-8 w-8 -translate-y-1/2 rounded-full",
            )}
            variant="outline"
            size="icon"
            onClick={handleNext}
          >
            <ArrowRightIcon className="size-4" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
