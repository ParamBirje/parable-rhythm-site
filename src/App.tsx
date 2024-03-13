import {
  GithubLogo,
  TwitterLogo,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { socialLinks } from "./components/links";
import Button from "./components/Button";

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

          <div className="flex flex-col gap-3">
            <p className="font-medium tracking-widest">Play Now On</p>
            <Button>AWS PartyRock</Button>
          </div>
        </section>

        {/* Trailer Video */}
        <section id="trailer">
          {/* <button className="hover:scale-105 duration-200 h-[25em] w-3/4 mx-auto bg-[url('./assets/thumb2.png')] bg-center bg-cover flex justify-center items-center rounded-sm">
            <Play weight="fill" className="text-red-400 shadow-xl" size={100} />
          </button> */}
          <iframe
            className="h-[40vh] w-3/4 mx-auto"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/mM8Ow1fC4b4?si=Y3jZkcUFI7KKbcfV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
              You play as a newly assigned detective who has been assigned a desk
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

          {/* Profile Card */}
          <div className="w-3/4 mx-auto rounded-md bg-primary-light p-4 flex flex-col md:flex-row gap-5">
            <div className="bg-[url('./assets/cropped_profile_pic.jpg')] bg-cover h-[8em] w-[8em] rounded-md mx-auto md:mx-0" />

            <div className="flex flex-col justify-between gap-5 md:gap-0">
              <div className="tracking-wide text-center md:text-left flex flex-col gap-3 md:gap-0">
                <h4 className="text-xl font-medium tracking-normal">
                  Param Birje
                </h4>
                <div className="opacity-80">
                  <p>Fullstack Engineer | AWS Certified Solutions Architect</p>
                  <span>Gamer by night. (or noon)</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
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

          {/* Devpost Blog Link */}
          <div className="w-3/4 mx-auto rounded-md bg-primary-light p-4 flex flex-col md:flex-row gap-5">
            <div className="bg-[url('https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/797/792/datas/medium.jpg')] bg-cover bg-center h-[5em] w-[8em] rounded-md mx-auto md:mx-0" />

            <div className="flex flex-col justify-between gap-5 md:gap-0">
              <div className="tracking-wide text-center md:text-left flex flex-col gap-3 md:gap-0">
                <a href="https://devpost.com/software/test-kbdsc2" target="_blank">
                  <h4 className="text-md font-medium tracking-normal">
                    Inspiration, Challenges and Achievements of Parable Rhythm
                  </h4>
                </a>
              </div>

              {/* Socials */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
                <a
                  href="https://community.aws/content/2c4mtEtbFQKoiQvy9TMwXs0xHiN"
                  target="_blank"
                  className="flex items-center gap-1 hover:underline underline-offset-2"
                >
                  <p>Devpost</p>
                  <ArrowUpRight size={15} />
                </a>

              </div>
            </div>
          </div>



          {/* Blog Link */}
          <div className="w-3/4 mx-auto rounded-md bg-primary-light p-4 flex flex-col md:flex-row gap-5">
            <div className="bg-[url('https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2023/02/16/aws_bp_primarylogo_01.png')] bg-cover bg-center h-[5em] w-[8em] rounded-md mx-auto md:mx-0" />

            <div className="flex flex-col justify-between gap-5 md:gap-0">
              <div className="tracking-wide text-center md:text-left flex flex-col gap-3 md:gap-0">
                <a href="https://community.aws/content/2c4mtEtbFQKoiQvy9TMwXs0xHiN" target="_blank">
                  <h4 className="text-md font-medium tracking-normal">
                    Gauging the Community Impact and Envisioning Real World Architecture
                  </h4>
                </a>
              </div>

              {/* Socials */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
                <a
                  href="https://community.aws/content/2c4mtEtbFQKoiQvy9TMwXs0xHiN"
                  target="_blank"
                  className="flex items-center gap-1 hover:underline underline-offset-2"
                >
                  <p>community.aws</p>
                  <ArrowUpRight size={15} />
                </a>

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

          <div>
            <Button>Play Now</Button>
          </div>
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
