import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/About";
import Teams from "./pages/team";
import Mentor from "./pages/mentor";



import HackathonTimeline from "./pages/HackathonTimeline";


import EvaluationCriteria from "./pages/Evaluationcriteria";
import Judges from "./pages/Judges";
import Milestones from "./pages/eventmilstone"
import EventVideos from "./pages/EventVideos";   
import ScrollToTop from "./components/ScrollToTop";
import Departments from "./pages/departments"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        {/* ✅ EVENT VIDEOS ADDED */}
        <section id="videos">
          <EventVideos />
        </section>
         <section id="HackathonTimeline">
          <HackathonTimeline />
        </section>
       
        <section id="teams">
          <Teams />
        </section>
        
         <section id="mentor">
          <Mentor />
        </section>
         <section id="EvaluationCriteria">
          <EvaluationCriteria/>
        </section>
         <section id="judges">
          <Judges />
        </section>
         <section id="department">
          <Departments/>
        </section>
        <section id="milestones">
          <Milestones />
        </section>
       
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;