import { useEffect, useState } from "react";
import { useLoaderData, useRouteError } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import HorizontalIndicator from "~/components/indicator";

type Data = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

type Products = {
  products: Data[];
};

const url = "https://dummyjson.com/products?limit=100";

export const meta: MetaFunction = () => {
  return [
    { title: "Scroll indicator example" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const response = await fetch(url);
  const data = (await response.json()) as Products | null;

  return data?.products ?? [];
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <main className="container">
      <h1 className="mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        An error occured
      </h1>
    </main>
  );
}

const App = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const data = useLoaderData<typeof loader>();

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight,
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <>
      <HorizontalIndicator scrollPercentage={scrollPercentage} />

      <main className="container">
        <h1 className="mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Scroll Indicator
        </h1>
        <div className="data-container">
          {data.length > 0
            ? data.map((dataItem) => (
                <p key={`${dataItem.id}-${dataItem.title}`}>{dataItem.title}</p>
              ))
            : null}
        </div>
      </main>
    </>
  );
};

export default App;
