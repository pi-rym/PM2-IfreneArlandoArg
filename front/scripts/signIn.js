let emailRepository = [];

function signIn() {

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   function isValidEmail(email) {
      return emailRegex.test(email);
   }

    // Use the prompt function to get user input
    let email = prompt('Please enter your email address:');

    // Check if the user provided an email
    if (isValidEmail(email)) {
      // Display an alert with a message
      alert('Thank you for signing up. \nYou will receive news via email at ' + email);
      emailRepository.push(email);

    } else {
      // Display an alert if the user canceled or did not provide an email
      alert('Incorrect email address format! ');
    }

    console.log(emailRepository);
  }