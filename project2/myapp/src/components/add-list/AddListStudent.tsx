import React, { useState } from "react";
import "./AddListStudent.css";
import * as XLSX from "xlsx";
import { json } from "stream/consumers";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddListStudent = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<any>();
  const takeFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  
  const callApi = async () => {
    try {
      console.log(file);
      
      const res: any = await axios.post("http://localhost:8080/api/v1/import", {file: file}, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if(res.status == 200) {
        navigate('/searchStudent')
      }
    } catch (error) {}
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5">
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
