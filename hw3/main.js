const axios = require("axios");

window.onload = (e) => {
  e.preventDefault();
  getAllStudent();
};

const urlBase = "http://localhost:3000/api/student";

const getAllStudent = () => {
  axios
    .get(urlBase)
    .then((res) => {
      displayListStudent(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createStudent = () => {
  axios
    .post(urlBase, getDataFromInput())
    .then((res) => {
      alert("Them moi thanh cong");
      console.log(res);
    })
    .catch((error) => {
      alert("Failed!");
    });
};

const preUpdateStudent = (data) => {

}

const updateStudent = (id) => {
  axios.put(`urlBase/${id}`,  getDataFromInput()).then(res => {
      console.log("Update successfully!");
  }).catch(error => {
    console.log(error);
  })
}

const displayStudent = (s, index) => {
  return `
    <tr key={index}>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.classroom}</td>
        <td>${s.email}</td>
        <td>${s.birthday}</td>
        <td>
            <button class="btn btn-edit" id="btn-edit" >Edit</button>
        </td>
        <td>
            <button class="btn btn-delete" id="btn-delete">Delete</button>
        </td>
    </tr>
    `;
};

const displayListStudent = (data) => {
  let listStudent = "";
  data.map((item, index) => {
    listStudent += displayStudent(item, index);
  });
  document.getElementById("display-data").innerHTML = listStudent;
};

const getDataFromInput = () => {
  let user = {
    name: document.getElementById("fullname").value,
    classroom: document.getElementById("classroom").value,
    email: document.getElementById("email").value,
    birthday: document.getElementById("birthday").value,
  };
  return user;
};

// Validator = (formSelector) => {
//   var formRules = {};
//   console.log(formSelector);
// };
