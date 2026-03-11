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

    show && (

      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 bg-sky-600 hover:bg-sky-500 text-white p-3 rounded-full shadow-lg transition z-50"
      >

        <ArrowUp size={22} />

      </button>

    )

  );

}