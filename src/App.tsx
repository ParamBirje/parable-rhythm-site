// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <main className="max-w-[1280px] mx-auto p-4 bg-primary text-white font-monty min-h-screen flex flex-col gap-5">
      {/* Hero */}
      <section
        id="hero"
        className="uppercase flex flex-col items-center text-center"
      >
        <div>
          {/* Logo */}
          <div className="fixed top-0 left-[40%] opacity-20 text-[10.5rem] tracking-tighter">
            ﮩ٨ـ
          </div>

          <h1 className="text-4xl tracking-[.5em]">Parable Rhythm</h1>
          <h2 className="font-thin text-3xl tracking-[.2em]">
            A crime thriller game powered by <span>A.I.</span>
          </h2>
        </div>

        <div>
          <p>Cases Opening On</p>
          <p>
            29<span>.</span>02<span>.</span>2024
          </p>
        </div>
      </section>

      {/* Trailer Video */}
      <section id="trailer">
        <div className="">
          <button>Watch</button>
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
    </main>
  );
}

export default App;
