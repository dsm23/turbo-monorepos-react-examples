import StarRating from "~/components/star-rating";

const App = () => (
  <main className="container">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Star ratings Example
    </h1>

    <div className="mt-6">
      <StarRating />
      <StarRating noOfStars={10} />
    </div>
  </main>
);

export default App;
