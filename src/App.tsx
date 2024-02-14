// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
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
        <section id="synopsis">
          <h3>
            Syn<span>o</span>psis
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum aenean tempor
            aliquam non donec. Orci nunc lorem tincidunt viverra amet diam dui
            dolor mus. Viverra ac sed ac ullamcorper gravida sed facilisi. Risus
            semper feugiat duis aliquet enim ipsum eu pellentesque.
          </p>
        </section>

        {/* Developed By */}
        <section>
          <h3>
            Devel<span>o</span>ped By
          </h3>
          <div>{/* Developer Card */}</div>
        </section>

        {/* CTA */}
        <section id="call_to_action">
          <p>Even the obvious will fade in panic</p>
          <p>
            29<span>.</span>02<span>.</span>2024
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
