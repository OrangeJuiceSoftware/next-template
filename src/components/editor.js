import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-github';
import { Col } from 'antd';

import mermaid from 'mermaid';
import unified from 'unified';

// Unified plugins
import html from 'remark-html';
import markdown from 'remark-parse';
import mermaidRmk from '../parser';

mermaid.initialize({
  startOnLoad: true
});

export default () => {
  const [rawContent, setRawContent] = useState(`
  # This is a header And
  this is a paragraph

  \`\`\`mermaid
  gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d
  \`\`\`

  \`\`\`mermaid
  gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d
  \`\`\`
`);

  const updateRawContent = (raw) => {
    setRawContent(raw);
    mermaid.init(); //Mermaid API is shit... No way around this unless you have the IDs of the divs...
  };

  const [htmlContent, setHtmlContent] = useState('');
  unified()
    .use(markdown)
    .use(mermaidRmk)
    .use(html)
    .process(rawContent, (err, file) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(file.contents);
      if (htmlContent !== file.contents) {
        setHtmlContent(file.contents);
      }
    });

  return (
    <>
      <Col span={12}>
        <AceEditor
          // onLoad={this.onLoad}
          fontSize={14}
          highlightActiveLine={true}
          mode={'markdown'}
          name={'blah2'}
          onChange={updateRawContent}
          debounceChangePeriod={50}
          placeholder={'Placeholder Text'}
          showGutter={true}
          showPrintMargin={true}
          theme={'github'}
          value={rawContent}
          setOptions={{
            // enableBasicAutocompletion: false,
            // enableLiveAutocompletion: false,
            // enableSnippets: false,
            // showLineNumbers: true,
            // tabSize: 2
          }}/>
      </Col>

      <Col span={12}>
        <div style={{ height: 500 }} dangerouslySetInnerHTML={{ __html:htmlContent }}></div>
      </Col>
    </>
  );
};
