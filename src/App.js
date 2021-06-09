import React from 'react';
import './assets/css/App.css';

function Editor(props) {
  return (
    <section id="editor">
      <header>
        <p>Editor</p>
      </header>
      <menu>
        <li>
          <button>
          <i className="fas fa-heading"></i>1
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-heading"></i>2
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-heading"></i>3
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-heading"></i>4
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-heading"></i>5
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-heading"></i>6
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-link"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-code"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-th-large"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-list"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-quote-left"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="far fa-image"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-bold"></i>
          </button>
        </li>
      </menu>
      <form>
        <textarea></textarea>
      </form>
    </section>
  )
}

function Preview(props) {
  return (
    <section id="preview">
      <header>
        <p>Preview</p>
      </header>
      <article>

      </article>
    </section>
  )
}

function App() {
  return (
    <React.Fragment>
      <Editor />
      <Preview />
    </React.Fragment>
  );
}

export default App;
