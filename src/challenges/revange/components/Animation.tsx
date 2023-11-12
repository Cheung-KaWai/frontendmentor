import gsap from "gsap";
import { useEffect } from "react";

export const Animation = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".community", { x: -300, opacity: 0 }, { x: 0, duration: 1, opacity: 1, ease: "power1.out" }, 0);
    tl.fromTo(".hero", { x: 300, opacity: 0 }, { x: 0, duration: 1, opacity: 1, ease: "power1.out" }, 0);
    tl.fromTo(".circleButton", { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1,0.3)" });
    tl.fromTo(".title", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" }, "<0.5");
    tl.fromTo(".subTitle", { y: 100 }, { y: 0, duration: 0.5, ease: "power1.out" }, "<0.1");
    tl.fromTo(".topCase", { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.out" }, 1);
    tl.fromTo(".product", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.out" }, 1);
    tl.fromTo(".cornerButton", { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1,0.3)" }, "<0.5");
    tl.fromTo(".join", { x: 300, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.out" }, 1.5);
    tl.fromTo(".category", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.out" }, 1.5);
    tl.fromTo(".categoryButton", { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1,0.3)" }, "<0.5");
    tl.fromTo(
      ".menu",
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "elastic.out(1,0.3)", stagger: 0.1 },
      2
    );
    tl.fromTo(".logo", { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1,0.3)" }, "<0.5");
  }, []);

  return <></>;
};
