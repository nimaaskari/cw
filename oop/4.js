const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const add = document.querySelector("#add");
const deleteBTN = document.querySelector("#delete");
const tbody = document.querySelector("tbody");
const phone = document.querySelector("#phone");
const tel = document.querySelector("#tel");
const pic = document.querySelector("#image");
const dob = document.querySelector("#dob");
const vip = document.querySelector("#vip");
const email = document.querySelector("#email");

let rowArr = [];

add.addEventListener("click", () => {
	let id = new Date().getTime();
	let rowObj = {
		id: id,
		check: false,
		str1: `<tr fakeId="${id}">
    <th check="false" scope="row" >
      <button onClick="check(event)"
      id="${id}"
        class="btn"
        style="
          width: 15px;
          background-color: #ddd;
          height: 15px;
          border: 1px grey solid;
        "
      ></button>
    </th>
    <td scope="col">${firstNameInput.value}</td>

    <td scope="col">${lastNameInput.value}</td>
    <td scope="col">${phone.value}</td>
    <td scope="col">${tel.value}</td>
    <td scope="col">${pic.value}</td>
    <td scope="col">${dob.value}</td>
    <td scope="col">${vip.value}</td>
    <td scope="col">${email.value ?? "no email"}</td> 

    <td scope="col" class="d-flex justify-content-around">
      <a href="#" onClick="deleteRow(event)">Delete</a>
      <div>|</div>
      <a href="#"  onClick="edit(event)">Edit</a>
    </td>
  </tr>`,
		str2: `<tr fakeId="${id}">
    <th  scope="row" ">
      <svg onClick="check(event)"
      id="${id}"
      onClick="check(event)"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-check2-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
        />
        <path
          d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
        />
      </svg>
    </th>
    <td scope="col">${firstNameInput.value}</td>

    <td scope="col">${lastNameInput.value}</td>
    <td scope="col">${phone.value}</td>
    <td scope="col">${tel.value}</td>
    <td scope="col">${pic.value}</td>
    <td scope="col">${dob.value}</td>
    <td scope="col">${vip.value}</td>
    <td scope="col">${email.value ?? "no email"}</td> 



    <td scope="col" class="d-flex justify-content-around">
      <a href="#" onClick="deleteRow(event)">Delete</a>
      <div>|</div>
      <a href="#" onClick="edit(event)">Edit</a>
    </td>
  </tr>`,
	};

	rowArr.push(rowObj);

	render();
});

function render() {
	tbody.innerHTML = "";
	for (let i = 0; i < rowArr.length; i++) {
		if (rowArr[i].check == false) {
			tbody.innerHTML += rowArr[i].str1;
		} else if (rowArr[i].check == true) {
			tbody.innerHTML += rowArr[i].str2;
		}
	}
}

function check(event) {
	let tempId = event.target.id;
	for (let i = 0; i < rowArr.length; i++) {
		if (tempId == rowArr[i].id) {
			if (rowArr[i].check == true) {
				rowArr[i].check = false;
				render();
				return;
			}
			if (rowArr[i].check == false) {
				rowArr[i].check = true;
				render();
				return;
			}
		}
	}
}

deleteBTN.addEventListener("click", () => {
	for (let i = 0; i < rowArr.length; ) {
		if (rowArr[i].check == true) {
			rowArr.splice(i, 1);
			i = 0;
			continue;
		}
		i++;
	}
	render();
});

function deleteRow(event) {
	let temp = event.target.parentElement.parentElement.getAttribute("fakeId");
	for (let i = 0; i < rowArr.length; ) {
		if (rowArr[i].id == temp) {
			rowArr.splice(i, 1);
			i = 0;
			continue;
		}
		i++;
	}
	render();
}

function edit(event) {
	let temp = event.target.parentElement.parentElement.getAttribute("fakeId");
	let newFirst = prompt("please enter new first name");
	let newLast = prompt("please enter new last name");
	for (let i = 0; i < rowArr.length; i++) {
		if (rowArr[i].id == temp) {
			rowArr[i].str1 = `<tr fakeId="${temp}">
      <th check="false" scope="row" >
        <button onClick="check(event)"
        id="${temp}"
          class="btn"
          style="
            width: 15px;
            background-color: #ddd;
            height: 15px;
            border: 1px grey solid;
          "
        ></button>
      </th>
      <td scope="col">${newFirst}</td>
  
      <td scope="col">${newLast}</td>
  
      <td scope="col" class="d-flex justify-content-around">
        <a href="#" onClick="deleteRow(event)">Delete</a>
        <div>|</div>
        <a href="#"  onClick="edit(event)">Edit</a>
      </td>
    </tr>`;
			rowArr[i].str2 = `<tr fakeId="${temp}">
    <th  scope="row" ">
      <svg onClick="check(event)"
      id="${temp}"
      onClick="check(event)"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-check2-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
        />
        <path
          d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
        />
      </svg>
    </th>
    <td scope="col">${newFirst}</td>

    <td scope="col">${newLast}</td>

    <td scope="col" class="d-flex justify-content-around">
      <a href="#" onClick="deleteRow(event)">Delete</a>
      <div>|</div>
      <a href="#" onClick="edit(event)">Edit</a>
    </td>
  </tr>`;
			render();
		}
	}
}
