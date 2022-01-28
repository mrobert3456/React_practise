import { useState } from "react";
import axios from "axios";
import storage from './firebase';
const FileUpload = () => {
  const [fileR, setFile] = useState("");

  const onFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
    console.log(fileR.name);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myfile", fileR);

    //console.log(fileR.selectedFile);

    // Request made to the backend api
    // Send formData object
    //let reader =new FileReader();
    //reader.readAsDataURL(fileR);
    const config = {
      headers: {
        "Content-Type": "text/plain",
      },
      method: "POST",
      body: formData,
    };
    // axios.put(`api/public/fileok`,formData).then(res=>{
    //   console.log(res);
    // });
  

    fetch("gs://fileupload-5b84a.appspot.com", {
      method: "POST",
      body: formData,
    });
  };

  const upload = ()=>{
    storage.ref(`/files/${fileR.name}`).put(fileR)
    .on("state_changed" , alert("success") , alert);
  }
  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h3>File Upload using React!</h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={upload}>Upload!</button>
      </div>
    </div>
  );
};

export default FileUpload;
