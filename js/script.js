const nama = document.getElementById("nama");
const subtmitForm = document.getElementById("submitForm");
const targetForm = document.getElementById("targetForm");

nama.innerText = "Yunita Faujiyah";

subtmitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    nama.innerText = e.target.elements["nama"].value;
    targetForm.elements["currentTime"].value = new Date();
    targetForm.elements["nama"].value = e.target.elements["nama"].value;
    targetForm.elements["tanggalLahir"].value = e.target.elements["tanggalLahir"].value;
    targetForm.elements["pesan"].value = e.target.elements["pesan"].value;

    for (const radioButton of e.target.elements["jenisKelamin"]) {
        if (radioButton.checked) {
            targetForm.elements["jenisKelamin"].value = radioButton.value;
        }
    }
})
