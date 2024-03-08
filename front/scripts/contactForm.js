


let contactFormRepository = [];

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Create an object with the form data
    let formData = {
        name: name,
        email: email,
        message: message
    };

    // Push the form data to the repository array
    contactFormRepository.push(formData);

    // Log the form data to the console
    console.log("Form Data Submitted: ", formData);
    console.log("All Form Submissions: ",contactFormRepository);
  
    alert("Information submitted properly!\nThank you, " + formData.name + " for contacting us!");

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}

// Attach the submitForm function to the form submit event
document.querySelector('form').addEventListener('submit', submitForm);
