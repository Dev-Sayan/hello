document.addEventListener("DOMContentLoaded", function() {
    const cityList = document.querySelectorAll(".city-list li");
    const departmentList = document.querySelectorAll(".department-list li");
    const doctorList = document.querySelectorAll(".doctor-card");
    const selectedCityElement = document.getElementById("selected-city");
    const selectedDepartmentElement = document.getElementById("selected-department");

    cityList.forEach(city => {
        city.addEventListener("click", function() {
            const selectedCity = this.getAttribute("data-city");

            // Update the selected city text
            selectedCityElement.textContent = this.textContent;

            // Show relevant departments and hide others
            departmentList.forEach(department => {
                if (department.classList.contains(selectedCity)) {
                    department.style.display = "inline-block";
                } else {
                    department.style.display = "none";
                }
            });

            // Clear doctor list
            doctorList.forEach(doctor => {
                doctor.classList.remove("show");
            });

            // Reset selected department text
            selectedDepartmentElement.textContent = "Select a department";
        });
    });

    departmentList.forEach(department => {
        department.addEventListener("click", function() {
            const selectedDepartment = this.textContent.toLowerCase().replace(/ /g, '-');
            const selectedCity = selectedCityElement.textContent.toLowerCase().replace(/ /g, '-');

            // Update the selected department text
            selectedDepartmentElement.textContent = this.textContent;

            // Show relevant doctors and hide others
            doctorList.forEach(doctor => {
                if (doctor.classList.contains(selectedCity) && doctor.classList.contains(selectedDepartment)) {
                    doctor.classList.add("show");
                } else {
                    doctor.classList.remove("show");
                }
            });
        });
    });
});













document.addEventListener("DOMContentLoaded", function() {
    const cityListItems = document.querySelectorAll('.city-list li');
    const departmentListItems = document.querySelectorAll('.department-list li');
    const doctorCards = document.querySelectorAll('.doctor-card');

    cityListItems.forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('selected-city').textContent = item.textContent;
            departmentListItems.forEach(department => {
                if (department.classList.contains(item.dataset.city)) {
                    department.style.display = 'inline-block';
                } else {
                    department.style.display = 'none';
                }
            });
            doctorCards.forEach(card => {
                card.style.display = 'none';
            });
            document.getElementById('selected-department').textContent = 'Select a department';
        });
    });

    departmentListItems.forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('selected-department').textContent = item.textContent;
            doctorCards.forEach(card => {
                if (card.classList.contains(item.textContent.toLowerCase().replace(' ', '-'))) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});














document.addEventListener("DOMContentLoaded", function() {
    const bookButtons = document.querySelectorAll(".book-button");

    bookButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const doctorName = this.getAttribute("href").split("=")[1]; // Extract the doctor's name from the URL
            window.location.href = `../login/login.html?doctor=${doctorName}`; // Redirect to the login page with the doctor's name as a query parameter
        });
    });
});
