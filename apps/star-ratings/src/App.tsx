import StarRating from "~/components/star-rating";
import Navbar from "./components/navbar";
import { ThemeProvider } from "@repo/react-ui";

const App = () => (
  <ThemeProvider storageKey="star-ratings-example">
    <Navbar />
    <main className="container">
      <h1 className="mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Star ratings Example
      </h1>

      <div className="mt-10">
        <StarRating />
        <StarRating noOfStars={10} />
      </div>
    </main>
  </ThemeProvider>
);

export default App;
