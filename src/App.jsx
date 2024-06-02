import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js'

const reactDesciption = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img
        src={props.image}
        alt={props.title}
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const description = reactDesciption[getRandomInt(2)];
  return (
    <header>
      <img
        src={reactImg}
        alt="Stylized atom"
      />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
             />
             <CoreConcept {...CORE_CONCEPTS[1]}/>
             <CoreConcept {...CORE_CONCEPTS[2]}/>
             <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
