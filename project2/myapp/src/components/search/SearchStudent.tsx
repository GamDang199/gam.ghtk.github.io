import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ISudent from "../../model/student";
import ISudentDTO from "../../model/studentDTO";
import "./SearchStudent.css";

const SearchStudent = () => {
  const [data, setData] = useState<ISudentDTO>({
    codeStudent: "",
    fullname: "",
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [resData, setResData] = useState<ISudent[]>([]);
  useEffect(() => {}, [resData]);
  const callApiGet = async () => {
    try {
      await axios
        .post("http://localhost:8080/api/v1/students/searchStudent", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setResData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
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

  let displayData = (e: any) =>
    e.map((item: any, index: any) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.codeStudent}</td>
        <td>{item.fullname}</td>
        <td>{item.nameSchool}</td>
        <td>{item.classroom}</td>
        <td>{item.totalPoint}</td>
        <td>{item.note}</td>
        <td>
          <button className="btn btn-danger" onClick={handleShow}>
            Chi tiet
          </button>
        </td>
      </tr>
    ));

  return (
    <div>
      {/* <Modal show={show}></Modal> */}
      <div className="mt-5 form-search">
        <form onSubmit={submit}>
          <div className="block-input">
            <label htmlFor="" className="labelInput">
              Ma sinh vien
            </label>
            <input
              type="text"
              className="input-search"
              size={25}
              onChange={changeCodeStudent}
            />
          </div>
          <div className="block-input mt-5">
            <label htmlFor="" className="labelInput">
              Ho va ten
            </label>
            <input
              type="text"
              className="input-search"
              size={25}
              onChange={changeFullname}
            />
          </div>

          <button
            className="btn btn-primary button-search mt-5 mb-5"
            onClick={callApiGet}
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="displayInfoStu container">
        <table className="table table-bordered table-dark">
          <thead className="thead-dark">
            <tr>
              <td>STT</td>
              <td>Ma sinh vien</td>
              <td>Ho va ten</td>
              <td>Truong tieu hoc</td>
              <td>Lop</td>
              <td>Tong diem</td>
              <td>Ghi chu</td>
              <td></td>
            </tr>
          </thead>

          <tbody>{displayData(resData)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchStudent;
