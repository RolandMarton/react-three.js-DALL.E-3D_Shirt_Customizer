import React from "react";

import { useSnapshot } from "valtio";
import state from "../store";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "upload") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: "#000",
      };
    } else if (type === "label") {
      return {
        color: "#000",
      };
    }
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label
          htmlFor="file-upload"
          className="filepicker-label"
          style={generateStyle("upload")}
        >
          Upload File
        </label>

        <p className="mt-2 text-xs truncate" style={generateStyle("label")}>
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
