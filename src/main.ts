import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  <div class="container">
  <h1>Become an Algebra master!</h1>
  <!-- <script type="module">
  import pdfjs - dist from https: //cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/+esm 
</script> -->

<h1 id="title"></h1>
<h2 id="sub-title"></h2>

<div class="container">

  <ul>
    <li>Section 1: Getting started</li>
    <li>Section 2: Algebra 1 - Operations</li>
  </ul>

  <section>
    <h2>Section 2: Algebra 1 - Operations </h2>

    <ul>
      <li>5. Introduction to operations</li>
      <li>6. RESOURCE: Quiz solutions for this section</li>
      <li>7. Variables </li>
    </ul>

    <div class="reading-video-quiz">

      <p>Reading</p>
      <p>Reading: Algebra1.notes.pdf</p>
      <p>Reading: Algebra1.quizes.pdf</p>
      <p>Video</p>
      <p>Quiz</p>

    </div>

    <div class="resources">
      <h3>Resources for Section 2</h3>
      <ul>
        <li>variables.pdf</li>
        <li>Identifying multiplication.pdf</li>
        <li>Associative Property.pdf</li>
        <li>Commutative Property.pdf</li>
        <li>Transitive Property.pdf</li>
        <li>Understood 1.pdf</li>
        <li>Adding and Substracting Like Terms.pdf</li>
        <li>Multiplying and divigin like terms.pdf</li>
        <li>Distributibe Property.pdf</li>
        <li>Distributive Property with fractionspdf</li>
        <li>PEMDAS and order of operations.pdf</li>
      </ul>
    </div>
  </section>
  
 

</div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
