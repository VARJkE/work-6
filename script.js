let faculties = ['IT', 'Business', 'LAW'];
let subjects = [
    ['HTML/CSS', 'C#', 'Python'],
    ['Accounting', 'Business Administration', 'Business Analysis'],
    ['Human Rights', 'Constitutional Law', 'International Law']
];
let students = [];
let labelId = 0;
let studentId = 1;

function selectedFaculty(value) {
    document.getElementById('subjects').innerHTML = '';
    for (let i = 0; i < subjects[value].length; i++) {
        let selectedSubj = document.createElement('input');
        let selectedSubjLabel = document.createElement('label');
        let selectedSubjDesc = document.createElement('span');
        selectedSubj.setAttribute('type', 'checkbox');
        selectedSubj.setAttribute('name', faculties[value]);
        selectedSubj.setAttribute('value', subjects[value][i]);
        selectedSubj.setAttribute('id', [i]);
        selectedSubj.classList.add('checkedSubject');
        selectedSubjLabel.setAttribute('for', [i]);
        selectedSubjLabel.setAttribute('id', 'label' + labelId);
        selectedSubjDesc.innerText = subjects[value][i];
        document.getElementById('subjects').appendChild(selectedSubjLabel);
        document.getElementById('label' + labelId).appendChild(selectedSubj);
        document.getElementById('label' + labelId).appendChild(selectedSubjDesc);
        labelId++;
    };
};


function addStudent() {
    if (validateFields() && validateCheckBox() > 0 ) {
    let studentsObj = {};
    let checkedSubjects = [];
    let inputElements = document.getElementsByClassName('checkedSubject');
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedSubjects.push(' ' + inputElements[i].value);
        };
    };
    studentsObj.id = studentId;
    studentsObj.firstName = document.getElementById('firstName').value;
    studentsObj.lastName = document.getElementById('lastName').value;
    studentsObj.faculty = faculties[document.getElementById('faculty').value];
    studentsObj.selectedSubjects = [checkedSubjects];
    students.push(studentsObj);

    let studentToAdd = document.createElement('div');
    studentToAdd.classList.add('new-student');
    
    for(let key in studentsObj) {
        // console.log(key)
        // console.log(studentsObj[key])
        let studentToAdd = document.createElement('div');
        studentToAdd.classList.add('new-student');
        studentToAdd.innerHTML = studentsObj[key];
        switch(key) {
            case 'id':
                document.getElementById('studentId').appendChild(studentToAdd);
                break;
            case 'firstName':
                document.getElementById('studentFirstName').appendChild(studentToAdd);
                break;
            case 'lastName':
                document.getElementById('studentLastName').appendChild(studentToAdd);
                break;
            case 'faculty':
                document.getElementById('studentFaculty').appendChild(studentToAdd);
                break;    
            case 'selectedSubjects':
                document.getElementById('studentSubjects').appendChild(studentToAdd);
                break;     
            default:
                console.log('შეცდომა');    

        };
    };

    studentId++;

    resetForm();

} else {
    alert('ველები არ არის შევსებული!');
};

};

function resetForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('faculty').value = 0;
    selectedFaculty(0);
};

function validateFields() {
    if (document.getElementById('firstName').value == '' || document.getElementById('lastName').value == '') {
        return false;
    } else {
        return true;
    };
};

function validateCheckBox() {
    let checkedBox = 0;
    let inputElements = document.getElementsByClassName('checkedSubject');
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedBox++;            
        };
};
    return checkedBox;
};