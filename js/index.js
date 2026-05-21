let records = [
    { id: 1, name: "Amina Bello", currentClass: "SS1", gender: "Female", age: 14 },
    { id: 2, name: "Chinedu Okafor", currentClass: "SS2", gender: "Male", age: 15 },
    { id: 3, name: "Fatima Musa", currentClass: "SS1", gender: "Female", age: 13 },
    { id: 4, name: "Ibrahim Sadiq", currentClass: "SS3", gender: "Male", age: 16 }
]

// < tr >
//                 <td>John Doe</td>
//                 <td>10A</td>
//                 <td>Male</td>
//                 <td>15</td>
//                 <td>
//                     <a href="edit-student.html?name=John%20Doe&class=10A&gender=Male&age=15"><button type="button">
//                             <span class="material-symbols-outlined">
//                                 edit
//                             </span>
//                         </button></a>
//                     <button type="button">
//                         <span class="material-symbols-outlined">
//                             delete
//                         </span>
//                     </button>
//                 </td>
//             </tr >

// Updating table using innerhtml
const container = document.querySelector("tbody")
// Convert array into stringed html elements
let stringedArr = records.map((s) => {
    return `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.currentClass}</td>
                    <td>${s.gender}</td>
                    <td>${s.age}</td>
                    <td>
                        <a href="edit-student.html?"><button type="button">
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button></a>
                        <button type="button">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </td>
                </tr>
`
})

stringedArr = stringedArr.join("")

container.innerHTML = stringedArr
