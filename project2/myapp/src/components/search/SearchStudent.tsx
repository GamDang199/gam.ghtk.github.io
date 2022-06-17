import axios from "axios";
import React, { useState } from "react";
import ISudentDTO from "../../model/studentDTO";
import "./SearchStudent.css";

const SearchStudent = () => {
  const [data, setData] = useState<any>({ codeStudent: "", fullname: "" });
  const callApiGet = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/students/searchStudent",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  const changeCodeStudent = (e: any) => {
    setData({ ...data, codeStudent: e.target.value });
  };
  const changeFullname = (e: any) => {
    setData({ ...data, fullname: e.target.value });
  };
  const submit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-5">
        <form onSubmit={submit}>
          <div>
            <label htmlFor="">Ma sinh vien</label>
            <input
              type="text"
              className="input-search"
              size={50}
              onChange={changeCodeStudent}
            />
          </div>
          <div>
            <label htmlFor="">Ho va ten</label>
            <input
              type="text"
              className="input-search"
              size={50}
              onChange={changeFullname}
            />
          </div>

          <button
            className="btn btn-primary button-search"
            onClick={callApiGet}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchStudent;
