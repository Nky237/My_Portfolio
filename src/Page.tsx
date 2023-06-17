import Bio from "./components/Bio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Foot from "./components/Foot";
import Home from "./components/Home";
import Job from "./components/Job";
import Skills from "./components/Skills";
import Tes from "./components/Tes";

const Page: React.FC = () => {
  return (
    <div className="pages">
      <section>
        <Home />
      </section>
      <section>
        <Bio />
      </section>
      <section>
        <Job />
      </section>
      <section>
        <Tes />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Foot />
      </section>
    </div>
  );
};

export default Page;
