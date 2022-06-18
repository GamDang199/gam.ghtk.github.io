import React, { useState } from "react";
import "./AddListStudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import showToast from "../toastify";
import { ToastContainer } from "react-toastify";

const AddListStudent = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<any>();
  const takeFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const callApi = async () => {
    await axios
      .post(
        "http://localhost:8080/api/v1/import",
        { file: file },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((res) => {
        showToast("Thêm file thành công", "success");
        navigate("/searchStudent");
      })
      .catch((error) => {
        console.log(error);
        showToast("Failed!", "error");
      });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form action="post" onSubmit={handleSubmit}>
        <input
          type="file"
          className="btn add-data"
          accept={".xlsx,.xls"}
          onChange={takeFile}
        />
        <button className="btn btn-primary" type="submit" onClick={callApi}>
          Import
        </button>
      </form>
    </div>
  );
};

export default AddListStudent;
