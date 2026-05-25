const startValue = localStorage.getItem('students')
let records;
if (startValue !== null) {
    records = JSON.parse(startValue)
} else {
    records = []
}

// let records = JSON.parse(localStorage.getItem(students)) ?? []

const container = document.querySelector('tbody')

function deleteStudent(studentId) {
    records = records.filter((student) => student.id !== studentId)
    localStorage.setItem("students", JSON.stringify(records))
    updateTableUI()
}

function updateTableUI() {
    container.innerHTML = ""

    records.forEach((student) => {
        const row = document.createElement('tr')

        const nameColumn = document.createElement('td')
        nameColumn.textContent = student.name
        row.appendChild(nameColumn)

        const classColumn = document.createElement('td')
        classColumn.textContent = student.currentClass
        row.appendChild(classColumn)

        const genderColumn = document.createElement('td')
        genderColumn.textContent = student.gender
        row.appendChild(genderColumn)

        const ageColumn = document.createElement('td')
        ageColumn.textContent = student.age
        row.appendChild(ageColumn)

        const actionsColumn = document.createElement('td')
        actionsColumn.innerHTML = `
            <a href="edit-student.html?id=${student.id}&name=${student.name}">
                <button type="button">
                    <span class="material-symbols-outlined">edit</span>
                </button>
            </a>
        `
        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.innerHTML = `
            <span class="material-symbols-outlined">delete</span>
        `
        deleteButton.addEventListener('click', () => deleteStudent(student.id))
        actionsColumn.appendChild(deleteButton)

        row.appendChild(actionsColumn)
        container.appendChild(row)
    })
}

updateTableUI()
console.table(records)

//We need to get the student details from the form
//Target form
const form = document.querySelector('form')
//Add event listener to form (submit)
form.addEventListener('submit', (event) => {

    event.preventDefault() // prevent default form submission behavior

    //Get values from input elements inside the form
    const studentNameInput = document.querySelector('#student-name')
    const studentClassInput = document.querySelector('#student-class')
    const studentGenderInput = document.querySelector('#student-gender')
    const studentAgeInput = document.querySelector('#student-age')

    //Create new student object from values inside the form
    const newStudent = {
        id: records.length + 1,
        name: studentNameInput.value,
        currentClass: studentClassInput.value,
        gender: studentGenderInput.value,
        age: parseInt(studentAgeInput.value)
    }

    //Add new student object to array
    records.push(newStudent)
    localStorage.setItem("students", JSON.stringify(records))

    //Use createElements to render the updated array
    updateTableUI()
    console.table(records)

    studentNameInput.value = ""
    studentClassInput.value = ""
    studentGenderInput.value = ""
    studentAgeInput.value = ""
})