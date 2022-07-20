import { gsap } from "gsap";
import { useEffect, useRef } from "react";
export default function NavBarOverlay() {
  let wrapper = useRef();
  let content = useRef();
  useEffect(() => {
    gsap.to(wrapper, {
      translateY: 0,
      duration: 1.5,
      delay: 0.5,
    });
    gsap.to(content, {
      translateY: 0,
      duration: 1,
      delay: 0.6,
    });
  });
  return (
    <section
      ref={(el) => (wrapper = el)}
      className="h-screen -translate-y-full fixed top-0 left-0 bottom-0 right-0 bg-black"
    >
      <section
        ref={(el) => (content = el)}
        className="bg-slate-900 h-full  -translate-y-full w-full flex flex-col flex-nowrap py-[5vw]  px-[3vw]"
      >
        <div className="d border-b border-red-800 flex-1"></div>
        <div className="d border-b border-red-800 flex-1"></div>
        <div className="d border-b border-red-800 flex-1"></div>
        <div className="d border-b border-red-800 flex-1"></div>
        <div className="d border-b border-red-800 flex-1"></div>
      </section>
    </section>
  );
}
