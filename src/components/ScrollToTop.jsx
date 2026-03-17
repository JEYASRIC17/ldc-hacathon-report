import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 
      bg-[#004aad] hover:bg-[#003a8c] 
      text-white p-3 rounded-full shadow-lg 
      transition-all duration-500
      ${show ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"}
      z-50`}
    >

      <ArrowUp size={22} />

    </button>

  );

}