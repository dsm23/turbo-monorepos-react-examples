import { useEffect, useState } from "react";
import ImageSlider from "~/components/image-slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/shadcn";
import { Image } from "~/types";

const url = "https://picsum.photos/v2/list";
const page = 1;
const limit = 10;

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrorMsg(e.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // if (url !== "") fetchImages(url);
    fetchImages(url);
  }, []);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <main className="container">
      <h1 className="sr-only">Image slider Example</h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Barebones Example
      </h2>

      <div className="mt-6">
        <ImageSlider images={images} />
      </div>

      <h2 className="mt-20 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Shadcn/Embla example
      </h2>

      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <img src={image.download_url} alt={image.download_url} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};

export default App;
