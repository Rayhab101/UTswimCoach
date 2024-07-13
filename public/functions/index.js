async function blog() {
    var blog = document.getElementById("blog");
    var hello = await fetch('/api/blog').then(data => data.json())
    blog.innerHTML = hello[0].blog;
}

async function against() {
    var today = new Date();
    var body = document.getElementById("nextmeet");
    var text = document.getElementById("meetname")
    var img = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    fetch("/api/meets").then(function (resMeets) {
        return resMeets.json();
    })
        .then(async function (meets) {

            for (var j = 0; j < meets.length; j++) {
                var date = meets[j].date;
                var splice = date.split("/");
                var year = Number(splice[2]);
                var month = Number(splice[0]) - 1;
                var day = Number(splice[1])+1;
                var nextMeet = new Date(year, month, day);
                var who;

                if (nextMeet - today > 0) {
                    console.log(meets[j].school1)

                    if (meets[j].school1 != -1) {
                        //console.log("HI")
                        var school1 = await fetch('/api/schools/' + meets[j].school1).then(function (responseRelay) {
                            return responseRelay.json();
                        }).catch(function (error) {
                            console.log("Error: " + error)
                        });
                        var school2;
                        if (meets[j].school2 != null) {
                            //console.log("THERE")
                            school2 = await fetch('/api/schools/' + meets[j].school2).then(function (responseRelay) {
                                return responseRelay.json();
                            }).catch(function (error) {
                                console.log("Error: " + error)
                            });
                        }
                        break;
                    }
                    else {
                    console.log("Hello2")
                        var school1 = [{ school_id: '-1', name: meets[j].location, photo: './swimCoach.png' }];
                        //console.log(school1)
                        break;
                    }
                }
            }
            if(!school1){
                
                img.setAttribute("src", "../../images/BLHS.png");
                img.setAttribute("alt", "Ben Lomond Logo");
                body.appendChild(img);
                img2.setAttribute("src", "../../images/SJCHS.png");
                img2.setAttribute("alt", "Jayhawks Logo");
                body.appendChild(img2);
                text.innerHTML = "Red and Blue Meet"
                return;
            }
            if (school1[0].school_id == 6) {
                img.setAttribute("src", "../../images/BLHS.png");
                img.setAttribute("alt", "Ben Lomond Logo");
                body.appendChild(img);
                img2.setAttribute("src", "../../images/SJCHS.png");
                img2.setAttribute("alt", "Jayhawks Logo");
                body.appendChild(img2);
                text.innerHTML = meets[j].location +"<br>"+ school1[0].address;
                // break;

            }
            else {
                console.log("hi")
                img.setAttribute("src", "../../images/BLHS.png");
                img.setAttribute("alt", "Ben Lomond Logo");
                body.appendChild(img);
                console.log(school1[0].name)
                if(school1[0].name ===  "Region 13 Meet" || school1[0].name === "State Meet"){
                    school1[0].name = "swimCoach"
                }
                console.log(school1[0].name)
                if(school1[0].name !="Saint Joseph"){
                    img2.setAttribute("src", "../../images/" + school1[0].name+".png");
                    img2.setAttribute("alt", school1[0].name + " Logo");
                    body.appendChild(img2);
                }

                who = "VS " + school1[0].name;
                img3.setAttribute("src", "../../images/SJCHS.png");
                img3.setAttribute("alt", "Jayhawks Logo");
                // img3.setAttribute("style","transform: scaleX(-1)")
                body.appendChild(img3);
                if (school2 != undefined) {
                    //console.log("hello")
                    img4.setAttribute("src", "../images/" + school2[0].name+".png");
                    img4.setAttribute("alt", school2[0].name);
                    body.appendChild(img4);
                    who = who + " & " + school2[0].name;
                    text.innerHTML = who;
                }
                else{
                    text.innerHTML = who;
                }
                
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
            console.log(error)
        });
    meets();
}

function meets() {
    var today = new Date();
    fetch("/api/meets").then(function (resMeets) {
        return resMeets.json();
    })
        .then(function (meets) {
            //console.log(meets[0].year)
            if (meets[0].year == 5) {
                var body = document.getElementById("schedule");
                for (var j = 0; j < meets.length; j++) {
                    var date = meets[j].date;
                var splice = date.split("/");
                var year = Number(splice[2]);
                var month = Number(splice[0]) - 1;
                var day = Number(splice[1])+1;
                var nextMeet = new Date(year, month, day);
                    var row = document.createElement("tr");
                    var column = document.createElement("td");
                    var cell = row.insertCell();
                    var text = document.createTextNode(column.innerHTML = meets[j].date);
                    cell.appendChild(text);
                    var cell = row.insertCell();
                    if(nextMeet - today > 0){
                        var text = document.createTextNode(column.innerHTML = meets[j].location);
                    cell.appendChild(text);
                    }
                    else{
                        var text = document.createTextNode(column.innerHTML = meets[j].location);
                    cell.appendChild(text);
                    cell.setAttribute("style","text-decoration: line-through")
                    }
                    var cell = row.insertCell();
                    var text = document.createTextNode(column.innerHTML = meets[j].time);
                    cell.appendChild(text);
                    var cell = row.insertCell();

                    // console.log(meets[j].out == null)
                    if (meets[j].out == null || meets[j].out == "null") {
                        var text = document.createTextNode(column.innerHTML = "");
                    }
                    else {
                        var text = document.createTextNode(column.innerHTML = meets[j].out);
                    }

                    cell.appendChild(text);
                    var cell = row.insertCell();
                    if (meets[j].bus == null || meets[j].bus == "null") {
                        var text = document.createTextNode(column.innerHTML = "");
                    }
                    else {
                        var text = document.createTextNode(column.innerHTML = meets[j].bus);
                    }

                    cell.appendChild(text);
                    var cell = row.insertCell();
                    if (meets[j].home == null || meets[j].home == "null") {
                        var text = document.createTextNode(column.innerHTML = "");
                    }
                    else {
                        var text = document.createTextNode(column.innerHTML = meets[j].home);
                    }
                    cell.appendChild(text);
                    body.appendChild(row);
                }
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
    blog();
}