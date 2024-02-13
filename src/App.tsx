// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <main className="bg-primary text-white font-poppins">
      {/* Hero */}
      <section id="hero">
        <div>ﮩ٨ـ</div>
        <h1 className="text-3xl font-bold">Parable Rhythm</h1>
        <h2>A crime thriller game powered by A.I.</h2>

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
