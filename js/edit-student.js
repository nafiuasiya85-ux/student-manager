let students = JSON.parse(localStorage.getItem("students")) ?? []


const params = new URLSearchParams(window.location.search)
const studentId = parseInt(params.get('id'))

const currentStudent = students.find((x) => {
    return x.id === studentId
})

console.log(currentStudent)

const studentNameInput = document.querySelector('#student-name')
const studentClassInput = document.querySelector('#student-class')
const studentGenderInput = document.querySelector('#student-gender')
const studentAgeInput = document.querySelector('#student-age')

studentNameInput.value = currentStudent.name ?? ""
studentClassInput.value = currentStudent.currentClass ?? ""
studentGenderInput.value = currentStudent.gender ?? ""
studentAgeInput.value = currentStudent.age ?? ""

const form = document.querySelector('form')
//Add event listener to form (submit)
form.addEventListener('submit', (event) => {

    event.preventDefault() // prevent default form submission behavior

    //Create new student object from values inside the form
    currentStudent.name = studentNameInput.value
    currentStudent.currentClass = studentClassInput.value
    currentStudent.gender = studentGenderInput.value
    currentStudent.age = studentAgeInput.value
    //Add new student object to array
    
    const updatedStudentsArray = students.map((x)=>{
        if (x.id === studentId) {
            return {...x, ...currentStudent}
        } else {
            return x
        }
    })

    localStorage.setItem('students', JSON.stringify(updatedStudentsArray))
  
    studentNameInput.value = ""
    studentClassInput.value = ""
    studentGenderInput.value = ""
    studentAgeInput.value = ""
})