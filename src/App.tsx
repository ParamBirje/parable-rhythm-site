import {
  GithubLogo,
  TwitterLogo,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { socialLinks } from "./components/links";

function App() {
  const socialIconSize = 25;

  return (
    <main className="bg-primary text-white font-monty min-h-screen">
      <div className="max-w-[900px] mx-auto p-4 flex flex-col gap-20">
        {/* Hero */}
        <section
          id="hero"
          className="uppercase flex flex-col gap-20 items-center text-center"
        >
          {/* Logo */}
          <div className="absolute -top-[5vh] flex justify-center items-start opacity-5 text-[18rem] tracking-tight select-none z-[0]">
            <p>ﮩ٨ـ</p>
          </div>

          <div className="flex flex-col gap-2 pt-[18vh] z-[1]">
            <h1 className="text-4xl tracking-[.3em]">Parable Rhythm</h1>
            <h2 className="font-thin text-[1.21rem] tracking-[.25em]">
              A crime thriller game powered by{" "}
              <span className="font-bold">A.I.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium tracking-widest">Cases Opening On</p>
            <p className="text-2xl font-bold tracking-[0.25em] relative left-1">
              29<span className="text-secondary">.</span>02
              <span className="text-secondary">.</span>2024
            </p>
          </div>
        </section>

        {/* Trailer Video */}
        <section id="trailer">
          <div className="h-[25em] w-3/4 mx-auto bg-[url('./assets/detective.jpg')] bg-center bg-cover flex justify-center items-center rounded-sm">
            <button className="uppercase tracking-widest font-light">
              Trailer Coming Soon
            </button>
          </div>
        </section>

        {/* Synopsis */}
        <section id="synopsis" className="flex flex-col gap-7 text-center">
          <h3 className="font-bold tracking-[0.25em] uppercase text-lg">
            Syn<span className="text-secondary">o</span>psis
          </h3>
          <div className="w-3/4 mx-auto tracking-wider leading-7 opacity-90">
            <p>
              A crime thriller set in a modern town of Genai (pronounced
              gun-aa-ee), where every case takes a different turn depending on
              how you choose to solve crimes. Every action has a consequence and
              will drive the case into an unexpected pattern of events.
            </p>
            <br />
            <p>
              You play as a veteran detective who has now been assigned a desk
              job at the headquarters. The Police Department assigns cases for
              you, to solve them through their software. Your task is to
              communicate and collaborate with the lead in-charge of cases,
              Inspector Neel Ray.
            </p>
          </div>
        </section>

        {/* Developed By */}
        <section id="developed_by" className="flex flex-col gap-7">
          <h3 className="font-bold tracking-[0.25em] uppercase text-lg text-center">
            Devel<span className="text-secondary">o</span>ped By
          </h3>
          <div className="w-3/4 mx-auto rounded-md bg-primary-light p-4 flex gap-5">
            <div className="bg-[url('./assets/cropped_profile_pic.jpg')] bg-cover h-[8em] w-[8em] rounded-md" />

            <div className="flex flex-col justify-between">
              <div className="tracking-wide">
                <h4 className="text-xl font-medium tracking-normal">
                  Param Birje
                </h4>
                <div className="opacity-80">
                  <p>Fullstack Engineer | AWS Certified Solutions Architect</p>
                  <span>Gamer by night. (or noon)</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center justify-between">
                <a
                  href="https://parameater.co"
                  target="_blank"
                  className="flex items-center gap-1 hover:underline underline-offset-2"
                >
                  <p>parameater.co</p>
                  <ArrowUpRight size={15} />
                </a>

                <div className="flex gap-3 items-center">
                  <a href={socialLinks.github} target="_blank">
                    <GithubLogo size={socialIconSize} />
                  </a>
                  <a href={socialLinks.twitter} target="_blank">
                    <TwitterLogo size={socialIconSize} />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank">
                    <LinkedinLogo size={socialIconSize} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="call_to_action"
          className="my-14 text-center flex flex-col gap-3"
        >
          <div className="flex justify-center items-start opacity-90 text-4xl tracking-tight select-none z-[0]">
            <p>ﮩ٨ـ</p>
          </div>
          <p className="font-extralight text-2xl tracking-[.25em] uppercase">
            Even the obvious will fade in panic
          </p>
          <p className="text-3xl font-bold tracking-[0.25em] relative left-1">
            29<span className="text-secondary">.</span>02
            <span className="text-secondary">.</span>2024
          </p>
        </section>
      </div>

      <footer className="text-center opacity-80 pt-20 pb-10">
        Built with ♥️ by{" "}
        <a
          href="https://parameater.co"
          target="_blank"
          className="hover:underline"
        >
          Param Birje
        </a>
      </footer>
    </main>
  );
}

export default App;
