
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

const preUpdateStudent = (id) => {
  axios.get(`http://localhost:3000/api/student/${id}`).then(res => {
    // console.log(res.data);
    displayInfoStuForm(res.data);
  }).catch(er => {
    console.log(er);
  })
}

const updateStudent = (id) => {
  axios
    .put(`urlBase/${id}`, getDataFromInput())
    .then((res) => {
      console.log("Update successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteStudent = (id) => {
  console.log(id);
  axios.delete("http://localhost:3000/api/student/" + id).then(res => {
    console.log("Delete susccessfully!");
  }).catch(er => {
    console.log("Delete failed!");
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
            <button class="btn btn-edit" id="btn-edit" onclick="preUpdateStudent(${s.id})">Edit</button>
        </td>
        <td>
            <button class="btn btn-delete" id="btn-delete" onclick="deleteStudent(${s.id})">Delete</button>
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

const displayInfoStuForm = (data) => {
  console.log(data.name);
  document.getElementById("fullname").value = data.name;
  document.getElementById("classroom").value = data.classroom;
  document.getElementById("email").value = data.email;
  document.getElementById("birthday").value = data.birthday;

}

// Validator = (formSelector) => {
//   var formRules = {};
//   console.log(formSelector);
// };
