import { useState } from "react";
// import SignUp from "../SignUp";

const useUploadImage = (props) => { 
  const [imageUrl, setImageUrl] = useState("");

  const imgPath = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string and save to localStorage
      localStorage.setItem("image", reader.result);
      setImageUrl(reader.result);
    },
    false
  );

  if (imgPath) {
    reader.readAsDataURL(imgPath);
    // localStorage.setItem("image", reader.readAsDataURL(imgPath));
  }

  return [imageUrl];
};

export default useUploadImage;
