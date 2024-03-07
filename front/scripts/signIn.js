function signIn() {

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   function isValidEmail(email) {
      return emailRegex.test(email);
   }

    // Use the prompt function to get user input
    var email = prompt('Please enter your email address:');

    // Check if the user provided an email
    if (isValidEmail(email)) {
      // Display an alert with a message
      alert('Thank you for signing in. You will receive news via email at ' + email);
    } else {
      // Display an alert if the user canceled or did not provide an email
      alert('Sign in canceled or email address not provided.');
    }
  }