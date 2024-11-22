import LeftSection from "./sections/LiftSection";
import RightSection from "./sections/RightSection";

function App() {
  return (
    <div className="mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%] mt-14 ">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
