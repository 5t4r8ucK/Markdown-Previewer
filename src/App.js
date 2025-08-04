import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
// Markdown It Plugins
import markdownitEmoji from 'markdown-it-emoji';
import markdownitSub from 'markdown-it-sub';
import markdownitSup from 'markdown-it-sup';
import markdownitIns from 'markdown-it-ins';
import markdownitMark from 'markdown-it-mark';
import markdownitFootnote from 'markdown-it-footnote';
import markdownitAbbr from 'markdown-it-abbr';
import markdownitDeflist from 'markdown-it-deflist';
import markdownitContainer from 'markdown-it-container';
import hljs from 'highlight.js/lib/core';
// Data
import icons from './assets/data/icons.js';
import exampleText from './assets/data/exampleText.js';
// CSS
import './assets/css/App.css';

const TextArea = ({text, setText}) => {
  const handleChange = (event) => setText(
    event.target.value
  )
  return (
    <textarea
      id='editor'
      value={text}
      onChange={handleChange}>
    </textarea>
  )
}

function Editor({icons, text, setText}) {
  const listItems = icons.map((icon) => {
    if (icon.name === 'fas fa-heading') {
      return (
        <li key={icon.id}>
          <button>
            <i className={icon.name}></i>{icon.id}
          </button>
        </li>
      )
    } else {
      return (
        <li key={icon.id}>
          <button>
            <i className={icon.name}></i>
          </button>
        </li>
      )
    }
  });

  return (
    <section id='editor-container'>
      <header>
        <small>Editor</small>
      </header>
      <menu>
        {listItems}
      </menu>
      <form>
        <TextArea text={text} setText={setText}/>
      </form>
    </section>
  )
}

function Preview({text}) {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
    breaks: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
      return '';
    }
  })
    .use(markdownitEmoji)
    .use(markdownitSub)
    .use(markdownitSup)
    .use(markdownitIns)
    .use(markdownitMark)
    .use(markdownitFootnote)
    .use(markdownitAbbr)
    .use(markdownitDeflist)
    .use(markdownitContainer, 'error');
  const markedText = md.render(text);

  return (
    <section id='preview-container'>
      <header>
        <small>Preview</small>
      </header>
      <article
        id='preview'
        dangerouslySetInnerHTML={{__html: markedText}} >
      </article>
      <footer>
        Example text parsed with&#8194;
        <a
          href='https://github.com/markdown-it/markdown-it'
          title='MarkdownIt'>
            MarkdownIt
        </a>
      </footer>
    </section>
  )
}

function App() {
  // State
  const initialState = exampleText;
  const [text, setText] = useState(initialState);

  return (
    <React.Fragment>
      <Editor icons={icons} text={text} setText={setText}/>
      <Preview text={text}/>
    </React.Fragment>
  );
}

export default App;
