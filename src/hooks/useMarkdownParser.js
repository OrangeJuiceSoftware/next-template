import { useState, useEffect } from 'react';

import mermaid from 'mermaid';
import unified from 'unified';

// Unified plugins
import html from 'remark-html';
import markdown from 'remark-parse';
import mermaidRmk from '../parser';

mermaid.initialize({
  startOnLoad: true
});

export default (rawMarkdown) => {
  const [result, setResult] = useState();

  console.log('hoook');

  useEffect(() => {
    console.log('unified');

    unified()
      .use(markdown)
      .use(mermaidRmk)
      .use(html)
      .process(rawMarkdown, (err, file) => {
        if (err) {
          return console.log(err);
        }

        setResult(file.contents);
      });

  }, [rawMarkdown]);

  useEffect(() => {
    console.log('mermaid');

    try {
      mermaid.init(); //Mermaid API is shit... No way around this unless you have the IDs of the divs...
    } catch (error) {
      console.log(error);
    }
  }, [result]);


  return result;
};