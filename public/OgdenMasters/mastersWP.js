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
    '1': '<nav style="background-color:grey"><div class="navbar"><div class="dropdown"><button class="dropbtn">View <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a onclick="updateContainer(event)">Games</a><a onclick="updateContainer(event)">Coaches</a><a onclick="updateContainer(event)">Teams</a><a onclick="updateContainer(event)">Players</a></div></div><div class="dropdown"><button class="dropbtn">Create <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a onclick="updateContainer(event)">Team</a><a onclick="updateContainer(event)">User</a><a onclick="updateContainer(event)">Tournament</a><a onclick="updateContainer(event)">Game</a></div></div><a id="Settings" onclick="updateContainer(event)">Settings</a></div></nav><div id="container"></div>',
    '2': '<nav style="background-color:grey"><div class="navbar"><div class="dropdown"><button class="dropbtn">View <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a onclick="updateContainer(event)">Games</a><a onclick="updateContainer(event)">Team</a><a onclick="updateContainer(event)">Stats</a></div></div><a id="Settings" onclick="updateContainer(event)">Settings</a></div></nav><div id="container"></div>',
    '3': '<h2>Welcome to the Players Home Page '+check[0].player_name+'</h2><p>This is the players page content.</p>',
    '4':'<h2>Welcome to the Game Entry Page</p>',
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
  $("#Settings").click()
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
    var body = document.getElementById("individualTable")
    players.forEach(player =>{
            if(player.access < 4){
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
            }
        })
}

async function updateContainer(event){
    event.preventDefault();
    const text = event.target.innerText;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var newUser = urlParams.get("token");
    var check = await fetch("/api/poloUsers").then((data) => data.json());
    var name;
    var username;
    var password;
    var email;
    var registered;
    var official;
    var team;
    var cap;
    //console.log(check)
    check.forEach((element) => {
        if (element.hex == newUser) {
            name=element.player_name;
            team=element.player_team;
            cap=element.player_cap_number;
            username=element.username;
            password=element.password;
            email=element.email;
            registered = element.usa_player==true?"Yes":"No";
            official = element.official==true?"Yes":"No";
        }
      });
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
            case "Game":
                document.getElementById("container").innerHTML = text

            break;
            case "Settings":
                document.getElementById("container").innerHTML = `<h1>Account Settings for `+name+`</h1>
                <div class="section">
                <table class="setting_table">
                <tr><td>Username:</td><td>-</td><td>`+username+`</td></tr>
                <tr><td>Password:</td><td>-</td><td>`+password+`</td></tr>
                <tr><td>Email:</td><td>-</td><td>`+email+`</td></tr>
                <tr><td>Team:</td><td>-</td><td>`+team+`</td></tr>
                <tr><td>Cap Number:</td><td>-</td><td>`+cap+`</td></tr>
                <tr><td>USA Registered:</td><td>-</td><td>`+registered+`</td></tr>
                <tr><td>USA Official:</td><td>-</td><td>`+official+`</td></tr>
                </table>
                <button id="save" onclick="save(this)">Save</button>
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

async function save(){
    var formData = [];
    $('table tr').each(function() {
      var cell = $(this).find('td:eq(2)'); // Select the third column (index 2)
      if (cell.length) {
        formData.push(cell.text());
      }
    });
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var newUser = urlParams.get("token");
    // console.log(formData);
    var submit = formData[0] + ","+ formData[1]+"," + formData[2] + ","+formData[3] +","+ formData[4]+","+ formData[5]+","+formData[6]+","+newUser;
    // console.log(submit);

    await fetch("/api/update_individual_settings/" + submit, {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        // body: JSON.stringify(submitRaces)
    }).then(response => response.json())
        .then(window.location.reload())
        .catch(err => console.log(err));
}

$('body').click(function(e) {
    var element = $(e.target);
    if (element.prop('tagName') === 'TD') {
      var currentText = element.text();
      var input = $('<input>', {
        type: 'text',
        value: currentText,
        blur: function() {
          var newText = $(this).val();
          element.text(newText);
        },
        keyup: function(e) {
          if (e.key === 'Enter' || e.key === 'Escape') {
            $(this).blur();
          }
        }
      });
      element.empty().append(input);
      input.focus().select();
    }
  });