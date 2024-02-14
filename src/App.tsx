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
          <div className="w-3/4 mx-auto tracking-wide">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elementum aenean tempor
              aliquam non donec. Orci nunc lorem tincidunt viverra amet diam dui
              dolor mus. Feugiat duis aliquet enim ipsum eu pellentesque.
            </p>
            <br />
            <p>
              Viverra ac sed ac ullamcorper gravida sed facilisi. Risus semper
              feugiat duis aliquet enim ipsum eu pellentesque.
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
                <p className="opacity-80">
                  Fullstack Engineer | AWS Certified Solutions Architect
                </p>
                <span className="opacity-80">Gamer by night. (or noon)</span>
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
                  <a href={socialLinks.github}>
                    <GithubLogo size={socialIconSize} />
                  </a>
                  <a href={socialLinks.twitter}>
                    <TwitterLogo size={socialIconSize} />
                  </a>
                  <a href={socialLinks.linkedin}>
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
