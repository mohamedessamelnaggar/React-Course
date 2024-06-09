import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import Header from "./components/Header/Header.jsx"
import CoreConcept from './components/CoreConcept.jsx';
import { EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic] = useState()

  function HandleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select Topic !!!!</p>;
  if (selectedTopic) {
    tabContent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
  }

  return (
    <div>
      <header><h1>Hello World</h1></header>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItems) => (<CoreConcept key={conceptItems.title} {...conceptItems} />))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => HandleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => HandleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => HandleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => HandleClick('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
