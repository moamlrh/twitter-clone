import React from "react";
import CloseIcon from "@material-ui/icons/Close";

function ImageCom(handleTextAreaValueChange, textAreaValueState) {
  const [filePath, setFilePath] = React.useState(textAreaValueState.img);
  const [fileIsSelected, setFileSelected] = React.useState(null);

  const resetInputFileAndRemoveImage = () => {
    setFileSelected(null);
    setFilePath(null);
    handleTextAreaValueChange({ value: "", img: "" });
  };

  const handleChangeInput = (e) => {
    if (e.target.files[0]) {
      setFileSelected(e.target.files[0]);
      setFilePath(
        (window.URL || window.webkitURL).createObjectURL(e.target.files[0])
      );
    }
    handleTextAreaValueChange({
      value: textAreaValueState.value,
      img: (window.URL || window.webkitURL).createObjectURL(e.target.files[0]),
    });
  };

  const handeUploadIconClicked = () => {
    document.getElementById("upload-input").click();
  };

  const ShowImageComp = (
    <>
      {fileIsSelected && (
        <div className="create-post-media-upload">
          <CloseIcon
            className="remove-selected-img"
            onClick={resetInputFileAndRemoveImage}
          />
          <img
            src={textAreaValueState.img}
            alt="the media will appear"
            className="image-uploaded"
          />
        </div>
      )}
    </>
  );

  const InputFileUploadComp = (
    <div className="upload-media">
      <input
        type="file"
        onChange={handleChangeInput}
        id="upload-input"
        className="input-upload-media"
      />
    </div>
  );

  return {
    ShowImageComp,
    setFileSelected,
    InputFileUploadComp,
    handeUploadIconClicked,
    filePath,
    resetInputFileAndRemoveImage,
    fileIsSelected,
  };
}

export default ImageCom;
