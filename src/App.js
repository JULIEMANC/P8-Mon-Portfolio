import Layout from'./componements/layout'
import About from './componements/about';
import Projects from './componements/projects';
import Competences from './componements/skills';
import Contact from './componements/contact';

import './App.css';


function App() {
  return (
<Layout>
<About/>
<Competences/>
<Projects/>
<Contact/>
</Layout>
  );
}

export default App;
