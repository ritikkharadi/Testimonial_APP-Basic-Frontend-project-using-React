import "./App.css";
import Testimonial from './Testimonial'
import reviews from './data'

function App() {
  return (
    <div className=" bg-slate-200 flex flex-col items-center justify-center h-screen w-screen">
    <div className=" text-center">
      <p className="text-4xl font-bold text-black">Our Testimonials</p>
      <div className=" bg-purple-700 w-fit h-3"></div>
      <Testimonial reviews={reviews} />
    </div>
  </div>
  
  );
}

export default App;
