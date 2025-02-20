import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";

export default function AboutPage() {
  return (
    <div>
      {/* Reuse your existing NavBar */}
        <NavBar />

      {/* Your About Me content */}
      <AboutMe />
    </div>
  );
}
