import React from 'react';
import { Introduction } from './elements/introduction';
import { TopMenus } from './elements/header';
import { Experience } from './elements/experience';
import { Portfolio } from './elements/portfolio';
import { Contact } from './elements/contact';

function App() {
  return (
    <div>
      
      <TopMenus/>
      <section id="introduction"><Introduction/></section>
      <section id="experience"><Experience/></section>
      <section id="projects"><Portfolio/></section>
      <section id="contacts"><Contact/></section>
    </div>
  );
}

export default App;


