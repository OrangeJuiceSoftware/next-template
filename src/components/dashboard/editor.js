import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-github';
import markdownIt from 'markdown-it';
import markdownItMermaid from 'markdown-it-mermaid';

import { Col, Form, Icon, Input, Button, Checkbox } from 'antd';

const mdi = markdownIt();
mdi.use(markdownItMermaid);
mdi.mermaid.loadPreferences({
  get: key => {
    if (key === 'mermaid-theme') {
      return 'default';
    } else if (key === 'gantt-axis-format') {
      return '%Y/%m/%d';
    } else {
      return undefined;
    }
  }
});

export default () => {
  const [raw, setRaw] = useState(`
  # This is a header And 
  this is a paragraph

  \`\`\`mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\`
`);

  const markdown = mdi.render(raw);

  return(
    <>
      <Col span={12}>
        <AceEditor
          placeholder="Placeholder Text"
          mode="markdown"
          theme="github"
          name="blah2"
          // onLoad={this.onLoad}
          onChange={setRaw}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={raw}
          setOptions={{
            // enableBasicAutocompletion: false,
            // enableLiveAutocompletion: false,
            // enableSnippets: false,
            // showLineNumbers: true,
            // tabSize: 2
          }}/>
      </Col>
      <Col span={12}>
        <div style={{ height: 500 }} dangerouslySetInnerHTML={{ __html:markdown }}></div>
      </Col>
    </>
  );
};


