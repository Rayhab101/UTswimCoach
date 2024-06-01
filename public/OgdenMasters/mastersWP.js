async function redirectPages() {
  // Add your logic here to handle form submission
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  var flag = false;
  var check = await fetch("/api/poloUsers").then((data) => data.json());
  for (var i = 0; i < check.length; i++) {
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

async function pageSetup() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var newUser = urlParams.get("token");
  var check = await fetch("/api/poloUsers").then((data) => data.json());
  const contentDict = {
    '1': '<nav style="background-color:grey"><div class="navbar"><div class="dropdown"><button class="dropbtn">View <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a onclick="updateContainer(event)">Games</a><a onclick="updateContainer(event)">Coaches</a><a onclick="updateContainer(event)">Teams</a><a onclick="updateContainer(event)">Players</a></div></div><div class="dropdown"><button class="dropbtn">Create <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a onclick="updateContainer(event)">Team</a><a onclick="updateContainer(event)">User</a><a onclick="updateContainer(event)">Tournament</a><a onclick="updateContainer(event)">Matchup</a></div></div><a onclick="updateContainer(event)">Settings</a></div></nav><div id="container"></div>',
    '2': '<h2>Welcome to the Coaches Home Page '+check[0].player_name+'</h2><p>This is the coaches page content.</p>',
    '3': '<h2>Welcome to the Players Home Page '+check[0].player_name+'</h2><p>This is the players page content.</p>',
    'default': '<h2>Page Not Found</h2><p>Sorry, the page you are looking for does not exist.</p>'
};
  check.forEach((element) => {
    if (element.hex == newUser) {
      var access = element.access;
      const content = contentDict[access];

      switch (access) {
        case 1:
            document.getElementById('content').innerHTML = content
            break;
        case 2:
            document.getElementById('content').innerHTML = content

            break;
        case 3:
            document.getElementById('content').innerHTML = content

             break;
        default:
            document.getElementById('content').innerHTML = contentDict['default']

            break;
      }
    }
  });
}

async function alreadyRegistered(email,username){
    var check = await fetch("/api/poloUsers").then((data) => data.json());
    var flag = false;
    check.forEach(array =>{
        var dbEmail = array.email;
        var dbUsername = array.username;
        if(dbEmail == email || dbUsername == username){
            flag = true;
        }
        else{
            flag = false;
        }
    })
    return flag;
}
async function canReset(email,username){
    var check = await fetch("/api/poloUsers").then((data) => data.json());
    var flag = false;
    check.forEach(array =>{
        var dbEmail = array.email;
        var dbUsername = array.username;
        if(dbEmail == email && dbUsername == username){
            flag = true;
        }
        else{
            flag = false;
        }
    })
    return flag;
}
async function passwordReset(password1){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var newUser = urlParams.get("username");
    var check = await fetch("/api/poloUsers").then((data) => data.json());
    var flag = false;
    check.forEach(array =>{
        if(newUser == array.username){
            var submit = newUser+"_"+password1;
            fetch("/api/updatePassword/" + submit, {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                // body: JSON.stringify(submitRaces)
            }).then(response => response.json())
                .then(flag = true)
                .catch(err => console.log(err));
            
        }
        else{
            flag = false;
        }
    })
    return flag;
}
async function pullPlayers(){
    var players = await fetch('/api/poloPlayers').then(data => data.json())
    console.log(players)
    var body = document.getElementById("individualTable")
    players.forEach(player =>{
            var row = document.createElement("tr")
            var cell = row.insertCell();
            cell.innerHTML = player.player_name;
            var cell = row.insertCell();
            cell.innerHTML = player.player_team;
            var cell = row.insertCell();
            cell.innerHTML = (player.player_alternate_goalie=true) ? player.player_cap_number + " & A1": player_cap_number;
            var cell = row.insertCell();
            cell.innerHTML = player.player_games_played;
            var cell = row.insertCell();
            cell.innerHTML = player.player_goals;
            var cell = row.insertCell();
            cell.innerHTML = player.player_shots_attempted;
            var cell = row.insertCell();
            cell.innerHTML = player.player_assists;
            var cell = row.insertCell();
            cell.innerHTML = player.player_ejections;
            var cell = row.insertCell();
            cell.innerHTML = player.player_exclusions;
            var cell = row.insertCell();
            cell.innerHTML = player.player_steals;

            body.appendChild(row);
        })
}

function updateContainer(event){
    event.preventDefault();
    const text = event.target.innerText;
    
    switch (text) {
            case "Games":
                document.getElementById("container").innerHTML = text

            break;
            case "Coaches":
                document.getElementById("container").innerHTML = text

            break;
            case "Teams":
                document.getElementById("container").innerHTML = text

            break;
            case "Players":
                document.getElementById("container").innerHTML = text

            break;
            case "Team":
                document.getElementById("container").innerHTML = text

            break;
            case "User":
                document.getElementById("container").innerHTML = text

            break;
            case "Tournament":
                document.getElementById("container").innerHTML = text

            break;
            case "Matchup":
                document.getElementById("container").innerHTML = text

            break;
            case "Settings":
                document.getElementById("container").innerHTML = `<h1>Account Settings for Ryan Lund</h1>
                <h2>(<a onclick="Edit();"><u>Edit</u></a>)</h2>
                <div class="section">
                    
                    <label>Username: rlund1 </label>
                    <label>Email: lund64311@gmail.com</label>
                    <label>Password: Password1!</label>
                    <label>USA Registered: Yes</label>
                    <label>USA Official: Yes</label>
                </div>
        
                <div class="section">
                    <h3>Support</h3>
                    <label><button onclick="javascript:alert('clicked')">Contact Support</button></label>
                </div>`;

            break;
        default:
            break;
    }
}

function Edit(){
    console.log("HI")
}