import React, { useState, useRef, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = ({ dataForText }) => {
  const isMounted = useRef(true);
  const [editorState, setEditorState] = useState(undefined);
  const [editedData, setEditedData] = useState("");

  useEffect(() => {
    const initialContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          type: "unstyled",
          text: `${
            dataForText.name ? `Name: ${dataForText.name}` : ""
          }\n\n\n\n\n\n\n\n\n\n\n\n   ${
            dataForText.address ? `Address: ${dataForText.address}` : ""
          } \n\n\n\n\n\n\n\n\n\n\n\n   ${
            dataForText.email ? `Email: ${dataForText.email}` : ""
          } \n\n\n\n\n\n\n\n\n\n\n\n   ${
            dataForText.phone ? `Phone: ${dataForText.phone}` : ""
          }`,
          key: "foo",
        },
      ],
    });
    setEditorState(EditorState.createWithContent(initialContentState));

    return () => {
      isMounted.current = false;
    };
  }, [dataForText]);

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const updatedData = contentState.getPlainText();
    setEditedData(updatedData);
    console.log(newEditorState);
  };

  const handleSave = () => {
    console.log("Edited data:", editedData);
  };

  useEffect(() => {
    return () => {
      isMounted.current = true;
    };
  }, []);

  return (
    <>
      {" "}
      <div>
        {editorState && (
          <Editor
            editorState={editorState}
            toolbar={{
              options: ["inline", "list"],
              inline: { options: ["bold", "italic", "underline"] },
              list: { options: ["unordered", "ordered"] },
            }}
            onEditorStateChange={handleEditorChange}
          />
        )}
      </div>
      <button style={{ cursor: "pointer" }} onClick={() => handleSave}>
        Save
      </button>
    </>
  );
};

export default RichTextEditor;
