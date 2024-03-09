import React, { useState } from "react";

import "./Admin.css";
import { Link } from "react-router-dom";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddIcon from "@mui/icons-material/Add";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { ref as refs, set, push } from "firebase/database";
import  {storage , Database} from '../../Firebase';


export default function Admin() {
  const [status, Setstatus] = useState({
    Book: "",
    Category: "",
    Details: "",
  });

  const [file, setfile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

   const uploadFile = () => {
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
      );
      alert("Data successfully added to Firestore")
      console.log(imgUrl)
      // sendSubmit();
  };

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleStatus = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    Setstatus((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    uploadFile();
  };
  return (
    <>
    <div className="main_admin">
      <div className="admin_form">
        <form onSubmit={handleSubmit}>
          <div>
            <h2> Book Name </h2>
            <input
              type="text"
              placeholder="Name"
              value={status.Book}
              onChange={handleStatus}
              name="Book"
            />
          </div>
          <div>
            <h2> Book Category </h2>
            <input
              type="text"
              placeholder="Category"
              value={status.Category}
              onChange={handleStatus}
              name="Category"
            />
          </div>
          <div>
            <h2> Book Details </h2>
            <textarea
              placeholder="Details"
              id="w3review"
              name="Details"
              rows="4"
              cols="80"
              value={status.Details}
              onChange={handleStatus}
            ></textarea>
          </div>
          <div>
            <input
              placeholder="file"
              type="file"
              onChange={handleFileChange}
              name="file"
              multiple
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="icon">
          <Link to="/List">
            <ChecklistIcon/>
          </Link>
          <Link to="/admin">
            <AddIcon />
          </Link>
        </div>
      </div>
    </div>   
  </>
  );
}
