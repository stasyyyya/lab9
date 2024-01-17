function saveData() {
    var data = {};

    data.fio = document.querySelector('.fio input').value;
    data.gender = document.querySelector('#gender').value;
    data.education = document.querySelector('.education').innerText;
    data.opit = document.querySelector('.opit').innerText;
    data.skills = document.querySelector('.skills').innerText;
    data.hobby = document.querySelector('.hobby').innerText;
    data.languages = document.querySelector('.languages').innerText;
    data.phone = document.querySelector('#phone').value;
    data.pochta = document.querySelector('#pochta').value;
    data.address = document.querySelector('#address').value;

    localStorage.setItem('resumeData', JSON.stringify(data));

    alert('Данные успешно сохранены!');
}

function loadData() {
    var storedData = localStorage.getItem('resumeData');

    if (storedData) {
        var data = JSON.parse(storedData);

        document.querySelector('.fio input').value = data.fio;
        document.querySelector('#gender').value = data.gender;
        document.querySelector('.education').innerText = data.education;
        document.querySelector('.opit').innerText = data.opit;
        document.querySelector('.skills').innerText = data.skills;
        document.querySelector('.hobby').innerText = data.hobby;
        document.querySelector('.languages').innerText = data.languages;
        document.querySelector('#phone').value = data.phone;
        document.querySelector('#pochta').value = data.pochta;
        document.querySelector('#address').value = data.address;
    }
}

loadData();

function clearData() {
    localStorage.removeItem('resumeData');

    var inputFields = document.querySelectorAll('input, .education, .opit, .skills, .hobby, .languages');
    
    inputFields.forEach(function (field) {
        if (field.tagName === 'INPUT') {
            field.value = '';
        } else {
            field.innerText = '';
        }
    });

    document.querySelector('#gender').value = 'male';
    document.querySelector('.picture img').src = 'man.png';

    alert('Данные успешно очищены!');
}

loadData();

document.addEventListener('DOMContentLoaded', function () {
    var editableBlocks = document.querySelectorAll('[contenteditable="true"]');

    editableBlocks.forEach(function (block) {
        block.addEventListener('input', function () {
            if (block.textContent.trim() !== '') {
                block.classList.remove('not-empty');
            } else {
                block.classList.add('not-empty');
            }
        });

        block.addEventListener('focus', function () {
            block.classList.remove('not-empty');
        });

        block.addEventListener('blur', function () {
            if (block.textContent.trim() === '') {
                block.classList.add('not-empty');
            }
        });
    });
});