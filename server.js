require('dotenv').config()
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const fse = require('fs-extra');
const massive = require('massive');
const { DATABASE_URL } = process.env;
const userctrl = require('./controllers/usersController');
var schedule = require('node-schedule');
const { getSwimmerhs } = require('./controllers/usersController');
const { query } = require('express');
var port = process.env.PORT || 8080;

console.log(port);

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
                case "Freshmen":
                    db.update_school_grade('Sophomore', swimmers[i].swimmer_id, swimmers[i].year + 1, true)
                    break;
                default:
                    break
            }
        }
    })
}
//Year, Month(0-11, Day, 8pm=20,minutes,seconds)
const date = new Date(2025, 6, 7, 0, 0, 0);
// console.log(date)
// console.log(new Date())
var j = schedule.scheduleJob(date, function () {
    updateGrade();
});
//console.log(j.schedule)
// app.set('view-engine','ejs')

app.use(cors())
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res) => 
    res.render("index")
    //res.status(200).send(swimmers)
)
app.get('/coachesDashboard.html',(req,res)=>
    res.render("coachesDashboard")
)
app.get('/potentialRecords.html',(req,res)=>
    res.render("potentialRecords")
)
app.get('/swimmers.html',(req,res)=>
    res.render("swimmers")
)
app.get('/topTimes.html',(req,res)=>
    res.render("topTimes")
)

app.get('/updateIndividualResults.html',(req,res)=>
    res.render("updateIndividualResults")
)

app.get('/api/swims/:id', userctrl.getSwimmers)
app.get('/api/swim/:id', userctrl.getSwimmer)
app.get('/api/getAllSwimmers',userctrl.getAllSwimmers)
app.get('/api/swimmersArchive', userctrl.getSwimmersArchive)
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
app.get('/api/state', userctrl.getState)
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
// Gets State 5 of schools
app.get('/api/state5/:id', userctrl.getState5)
app.get('/api/relayTimes5/:id', userctrl.getRelayTimes5)
// Gets State Qualified of Utah
app.get('/api/stateQualified/:id', userctrl.getStateQualified)
app.get('/api/stateQualifiedRelays', userctrl.getStateQualifiedRelays)
// Gets relay times
app.get('/api/relayTimes/:id', userctrl.getRelayTimes)
app.get('/api/relaysTimes', userctrl.getRelaysTimes)
//Get Individual Name
app.get('/api/swimmerName/:id', userctrl.getSwimmerName)
//Get Individual Times
app.get('/api/individualRecords/:id', userctrl.getIndividualRecord)
app.get('/api/pastIndividualRecords/:id', userctrl.getPastIndividualRecord)

app.get('/api/timeFill/:id', userctrl.timeFill)
app.get('/api/chartFill/:id', userctrl.chartFill)
//Get active swimmers
app.get('/api/activeSwimmers', userctrl.getActiveSwimmers)

app.get('/api/blog',userctrl.getBlog)

app.get('/api/previousYear/:id', userctrl.previousYear)
app.get('/api/countYears/:id', userctrl.countYears)

app.get('/api/ano', userctrl.getYear)
app.get('/api/getTotal/:id', userctrl.getTotal)
app.get('/api/getTotalinRaces/:id', userctrl.getTotalinRaces)

app.post('/api/setMeet/:id',userctrl.setMeet)
app.post('/api/setSwimmer/:id',userctrl.setSwimmer)
app.post('/api/setCoach/:id', userctrl.setCoach)

app.post('/api/setTimes/:id', userctrl.setTimes)
app.post('/api/setRelayTimes/:id', userctrl.setRelayTimes)

app.post('/api/updateSchools/:id', userctrl.updateSchools)

app.post('/api/removeSwimmer/:id', userctrl.removeSwimmer)
app.post('/api/updateSwimmer/:id', userctrl.updateSwimmer)

app.post('/api/updateMeet/:id', userctrl.updateMeet)
app.post('/api/removeMeet/:id', userctrl.removeMeet)

app.post('/api/updateCoach/:id', userctrl.updateCoach)
app.post('/api/removeCoach/:id', userctrl.removeCoach)

app.post('/api/updateRecords/:id', userctrl.updateRecords)
app.post('/api/updateRelays/:id', userctrl.updateRelays)

app.post('/api/updateBlog/:id', userctrl.updateBlog)

app.post('/api/logChanges/:id', userctrl.logChanges)
app.post('/api/updateState/:id', userctrl.updateState)

app.post('/api/updateStateRecords/:id', userctrl.updateStateRecords)
app.post('/api/updateSchoolRecord/:id', userctrl.updateSchoolRecord)
app.post('/api/updateSchoolRelayRecord/:id', userctrl.updateSchoolRelayRecord)

app.get('/api/testpull/:id',userctrl.testPull)

app.get('/api/getMin50/:id',userctrl.getMin50)
app.get('/api/getMax50/:id',userctrl.getMax50)


app.get('/api/get50times',userctrl.get50times)
app.post('/api/set50times/:id',userctrl.set50times)
app.post('/api/update50Times/:id',userctrl.update50Times)

app.get('/api/getBests',userctrl.getBests)
app.get('/api/getRankBests/:id',userctrl.getRankBests)

app.get('/api/goals/:id',userctrl.getGoals)
app.post('/api/setGoals/:id',userctrl.setGoals)
app.post('/api/updateGoals/:id',userctrl.updateGoals)

app.get('/api/test/:id',userctrl.test)
app.get('/api/testRelays/:id',userctrl.testRelays)
app.get('/api/testTop50/:id',userctrl.testTop50)

app.get('/api/getMeetResults/:id',userctrl.pullMeetResults)

app.get('/api/poloUsers',userctrl.poloUsers)
app.get('/api/poloPlayers',userctrl.poloPlayers)
app.get('/api/poloTeams',userctrl.poloTeams)
app.post('/api/setPlayers/:id',userctrl.setPlayers)
app.post('/api/updatePassword/:id',userctrl.updatePassword)
app.post('/api/update_individual_settings/:id',userctrl.updatePlayerIndividual)


app.set('port', process.env.PORT || 8080)
massive({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('DB CONNECTED')
    app.listen(port, () => console.log(`We're running!`))
}).catch(err => console.log(err))

