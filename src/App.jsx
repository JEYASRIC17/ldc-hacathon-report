
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/About";
import Teams from "./pages/team";
import Mentor from "./pages/mentor";
import HackathonTimeline from "./pages/HackathonTimeline";
import EvaluationCriteria from "./pages/Evaluationcriteria";
import Judges from "./pages/Judges";
import Milestones from "./pages/eventmilstone";
import EventVideos from "./pages/EventVideos";
import ScrollToTop from "./components/ScrollToTop";
import Departments from "./pages/departments"; 

function App() {
  return (
    <div className="relative min-h-screen antialiased selection:bg-blue-500/40 selection:text-white">
      
      {/* 🟢 STEP 1: VIDEO LAYER (Fixed & Sharp) */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        
        
        <div className="absolute inset-0 bg-white/5 z-0" />
      </div>

     
      <div className="relative z-10 isolate">
        
       
        <style dangerouslySetInnerHTML={{ __html: `
          section, main { background-color: transparent !important; }
        ` }} />

       <main className="relative z-10">
        <Navbar />
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="videos"><EventVideos /></section>
        <section id="HackathonTimeline"><HackathonTimeline /></section>
        <section id="teams"><Teams /></section>
        <section id="mentor"><Mentor /></section>
        <section id="EvaluationCriteria"><EvaluationCriteria /></section>
        <section id="judges"><Judges /></section>
        <section id="department"><Departments /></section>
        <section id="milestones"><Milestones /></section>
      </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;