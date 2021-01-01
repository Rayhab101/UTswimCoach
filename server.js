require('dotenv').config()
const express = require('express');
const swimmers = require('./public/swimmers.json');
const fs = require('fs');
const app = express();
const cors = require('cors');
const fse = require('fs-extra');
const massive = require('massive');
const { CONNECTION_STRING } = process.env
const userctrl = require('./controllers/usersController')
var schedule = require('node-schedule');
const { getSwimmerhs } = require('./controllers/usersController');
const { query } = require('express');
var port = process.env.PORT || 8080;
console.log(port);
// const pdfparse=require('pdf-parse');
// const { timeStamp } = require('console');
// const pdffile=fs.readFileSync('meetResults.pdf')
// pdfparse(pdffile).then(function(data){
//     var meet = data.text.split("\n")
//     for(var i=0;i<meet.length;i++){
//         if(meet[i]===''||meet[i]==='\n'||meet[i]===' '){continue}
//         if(meet[i].includes('Ben Lomond')){continue}
//         if(meet[i].includes('Team')){continue}
//         if(meet[i].includes('Results')){continue}
//         if(meet[i].includes('#')){
//             var races = meet[i].split('  '); 
//             var race = races[1]
//             var raceId = races[0].split("#");
//             var toDB = raceId[1]
//             console.log(race)
//         }

//         console.log(meet[i].split(/^\d{2}/))

//     }
// })

function updateGrade() {
    const db = app.get("db");
    db.update_grade().then(swimmers => {
        for (var i = 0; i < swimmers.length; i++) {
            var year = swimmers[i].year;
            console.log("Update Grade changed on " + new Date());
            switch (swimmers[i].status_grade) {
                case "Graduated":
                    db.update_school_grade('Graduated', swimmers[i].swimmer_id, 0, false)
                    break;
                case "Senior":
                    db.update_school_grade('Graduated', swimmers[i].swimmer_id, 0, false)
                    break;
                case "Junior":
                    db.update_school_grade('Senior', swimmers[i].swimmer_id, swimmers[i].year + 1, true)
                    break;
                case "Sophomore":
                    db.update_school_grade('Junior', swimmers[i].swimmer_id, swimmers[i].year + 1, true)
                    break;
                case "Freshman":
                    db.update_school_grade('Sophomore', swimmers[i].swimmer_id, swimmers[i].year + 1, true)
                    break;
                default:
                    break
            }
        }
    })
}

var j = schedule.scheduleJob('0 0 15 8 *', function () {
    updateGrade();
});

// app.set('view-engine','ejs')

app.use(cors())
app.use(express.static(__dirname + "/public"));
//console.log(swimmers)

app.get('/',(req,res) => 
    //res.render("index")
    res.status(200).send(swimmers)
)

app.get('/api/swimmers', (req, res) => {
    //console.log("HIT HERE")
    res.status(200).send(swimmers)
})
app.post('/api/swimmers', (req, res) => {
    console.log("HIT HERE TOO")
    //console.log(req.body)
    res.status(200).send(swimmers)
    fse.outputJsonSync('./public/swimmers.json', req.body)
})

app.get('/api/swims/:id', userctrl.getSwimmers)
app.get('/api/swim/:id', userctrl.getSwimmer)

// Gets Coaches
app.get('/api/coaches', userctrl.getCoaches)
app.get('/api/coaches/:id', userctrl.getCoach)
app.get('/api/coachLogIn/:id', userctrl.getCoachLogIn)
// Gets Meets 
app.get('/api/meets', userctrl.getMeets)
app.get('/api/meets/:id', userctrl.getMeet)
// Gets Races & State Records
app.get('/api/races', userctrl.getRaces)
app.get('/api/races/:id', userctrl.getRace)
// Gets Individual Records
app.get('/api/records', userctrl.getRecords)
app.get('/api/records/:id', userctrl.getRecord)
// Gets All Utah School
app.get('/api/schools', userctrl.getSchools)
app.get('/api/schools/:id', userctrl.getSchool)
app.get('/api/county/:id', userctrl.getSchoolCounty)
// Gets all Swimmers
app.get('/api/swimmers', userctrl.getSwimmers)
app.get('/api/swimmers/:id', userctrl.getSwimmer)
// Gets Relay Records by School
app.get('/api/relayRecords/:id', userctrl.getRelayRecords)
app.get('/api/relayRecord/:id', userctrl.getRelayRecord)
// Gets coaches that coach multiple schools
app.get('/api/schoolsCoach/:id', userctrl.getSchoolsCoaches)
app.get('/api/schoolCoaches/:id', userctrl.getSchoolCoaches)
// Gets Meets by School
app.get('/api/schoolMeets', userctrl.getSchoolMeets)
app.get('/api/schoolMeets/:id', userctrl.getSchoolMeet)
// Gets Records by School
app.get('/api/schoolRecords/:id', userctrl.getRecordsSchool)
app.get('/api/schoolRecord/:id', userctrl.getRecordSchool)
// Gets Top 50 of Utah
app.get('/api/top50/:id', userctrl.getTop50)
// Gets Top 100 of Utah
app.get('/api/top100/:id', userctrl.getTop100)
// Gets State Qualified of Utah
app.get('/api/stateQualified/:id', userctrl.getStateQualified)
// Gets relay times
app.get('/api/relayTimes/:id', userctrl.getRelayTimes)
app.set('port', process.env.PORT || 8080)
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('DB CONNECTED')
    app.listen(port, () => console.log(`We're running!`))
}).catch(err => console.log(err))

