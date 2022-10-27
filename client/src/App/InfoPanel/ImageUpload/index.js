import React, { useState } from "react";

const ImageUpload = ({ handleUpload }) => {
  return (
    <div>
      <input
        type="file"
        name="image"
        onChange={(event) => {
          handleUpload(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default ImageUpload;
