async function redirectPages() {
  // Add your logic here to handle form submission
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  var flag = false;
  var check = await fetch("/api/poloUsers").then((data) => data.json());
  for (var i = 0; i < check.length; i++) {
    // console.log(check[i].password == password && check[i].username == username)
    if (
      check[i].password == password &&
      (check[i].username == username || check[i].email == username)
    ) {
      flag = true;
      // Create a TextEncoder instance
      const encoder = new TextEncoder();

      // Encode the string "Hello" into a Uint8Array
      const byteArray = encoder.encode(username);

      // Convert each byte to a two-character hexadecimal string
      const hexArray = Array.from(byteArray, (byte) =>
        byte.toString(16).padStart(2, "0")
      );

      // Join the hex values into a single string
      const hexString = hexArray.join("");

      var url = "User.html";
      url = url + "?token=" + hexString;
      window.location.href = url; // Replace "redirect-page.html" with the desired URL
    }
  }
  if (!flag) {
    alert("Your Username or Password is not correct.");
  }
}
