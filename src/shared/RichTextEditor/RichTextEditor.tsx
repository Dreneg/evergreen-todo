import Quill from 'quill';
import React, { useEffect, useRef, useState } from 'react';
import './RichTextEditor.css';
import { EDITOR_OPTIONS } from './RichTextEditorOptions';

interface Props {
  className: string;
  content?: string;
  onContentUpdate?: (content: string | undefined) => void;
}

function RichTextEditor({ content, onContentUpdate, className }: Props): JSX.Element {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorInstance, setEditorInstance] = useState<Quill>();

  useEffect(() => {
    if (editorRef && editorRef.current) {
      const quillRef = new Quill(editorRef.current, {
        modules: {
          toolbar: EDITOR_OPTIONS,
        },
        theme: 'snow',
      });
      setEditorInstance(quillRef);
    }
  }, [editorRef]);

  useEffect(() => {
    if (editorInstance) {
      editorInstance.root.innerHTML = content ? content : '';
    }
  }, [editorInstance, content]);

  const onBlur = (): void => {
    const currentContent = editorInstance?.root.innerHTML;
    onContentUpdate && onContentUpdate(currentContent);
  };

  return <div className={className} ref={editorRef} onBlur={onBlur}></div>;
}

export default RichTextEditor;
