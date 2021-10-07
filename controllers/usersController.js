module.exports = {
    getCoaches: (req,res) => {
        const db = req.app.get("db");
        db.get_coaches().then(coaches => {
            //console.log(coaches);
            return res.status(200).send(coaches)
        })
    },
    getCoach: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_coach(id).then(coach => {
            //console.log(coach);
            return res.status(200).send(coach)
        }).catch(err => (res.sendStatus(500)))
    },
    getCoachLogIn: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_coach_log_in(id).then(coachLogIn => {
            //console.log(coachLogIn);
            return res.status(200).send(coachLogIn);
        })
    },
    getSchools: (req,res) => {
        const db = req.app.get("db");
        db.get_schools().then(schools => {
            //console.log(schools);
            return res.status(200).send(schools)
        })
    },
    getSchool: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_school(id).then(school => {
            //console.log(school);
            return res.status(200).send(school)
        }).catch(err => (res.sendStatus(500)))
    },
    getSchoolCounty: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_school_county(id).then(county => {
            //console.log(county);
            return res.status(200).send(county)
        }).catch(err => (res.sendStatus(500)))
    },
    getMeets: (req, res) => {
        const db = req.app.get("db");
        db.get_meets().then(meets => {
            // console.log(meets)
            return res.status(200).send(meets)
        })
    },
    getMeet: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_meet(id).then(meet => {
            // console.log(meet);
            return res.status(200).send(meet)
        }).catch(err => (res.sendStatus(500)))
    },
    getRecords: (req,res) => {
        const db = req.app.get("db");
        db.get_records().then(records => {
            //console.log(records);
            return res.status(200).send(records)
        })
    },
    getRecord: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_record(id).then(record => {
            //console.log(record);
            return res.status(200).send(record)
        }).catch(err => (res.sendStatus(500)))
    },
    getRecordsSchool: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_school_records(id).then(records => {
            //console.log(records);
            return res.status(200).send(records)
        })
    },
    getRecordSchool: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("&");
        id=idSplit[0];
        var school=idSplit[1];
        const db = req.app.get("db");
        db.get_school_record(id,school).then(record => {
            //console.log(record);
            return res.status(200).send(record)
        }).catch(err => (res.sendStatus(500)))
    },
    getRaces: (req,res) => {
        const db = req.app.get("db");
        db.get_races().then(races => {
            //console.log(races);
            return res.status(200).send(races)
        })
    },
    getRace: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_race(id).then(race => {
            //console.log(race);
            return res.status(200).send(race)
        }).catch(err => (res.sendStatus(500)))
    },
    getAllSwimmers: (req,res) => {
        const db = req.app.get("db");
        db.get_all_swimmers().then(swimmers => {
            return res.status(200).send(swimmers)
        })
    },
    getSwimmers: (req,res) => {
        //console.log(req.params)
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_swimmers(id).then(swimmers => {
            // console.log(swimmers);
            return res.status(200).send(swimmers)
        })
    },
    getActiveSwimmers: (req,res) => {
        //console.log(req.params)
        const db = req.app.get("db");
        db.get_active_swimmers().then(swimmers => {
            // console.log(swimmers);
            return res.status(200).send(swimmers)
        })
    },
    getSwimmer: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_swimmer(id).then(swimmer => {
            //console.log(swimmer);
            return res.status(200).send(swimmer)
        }).catch(err => (res.sendStatus(500)))
    },
    getRelayRecords: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_relay_records(id).then(relay_records => {
            //console.log(relay_records);
            return res.status(200).send(relay_records)
        })
    },
    getRelayRecord: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("&");
        id=idSplit[0];
        var school=idSplit[1];
        const db = req.app.get("db");
        db.get_relay_record(id,school).then(relay_record => {
            //console.log(relay_record);
            return res.status(200).send(relay_record)
        }).catch(err => (res.sendStatus(500)))
    },
    getSchoolMeets: (req,res) => {
        const db = req.app.get("db");
        db.get_school_meets().then(school_meets => {
            //console.log(school_meets);
            return res.status(200).send(school_meets)
        })
    },
    getSchoolMeet: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_school_meet(id).then(school_meet => {
            //console.log(school_meet);
            return res.status(200).send(school_meet)
        }).catch(err => (res.sendStatus(500)))
    },
    getSchoolCoaches: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_coaches_school(id).then(coaches => {
            //console.log(coaches);
            return res.status(200).send(coaches)
        }).catch(err => (res.sendStatus(500)))
    },
    getSchoolsCoaches: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_coach_schools(id).then(school => {
            //console.log(school);
            return res.status(200).send(school)
        }).catch(err => (res.sendStatus(500)))
    },
    getTop50: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_top50(id).then(top50 => {
            // console.log(top50);
            return res.status(200).send(top50)
        }).catch(err => (res.sendStatus(500)))
    },
    getState5: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_state5(id).then(top100 => {
            //console.log(school);
            return res.status(200).send(top100)
        }).catch(err => (res.sendStatus(500)))
    },
    getStateQualified: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        var newId = id.split("_");
        // console.log(newId);
        db.get_topStateQualified(Number(newId[0]),newId[1]).then(stateQualifed => {
            //console.log(stateQualified);
            return res.status(200).send(stateQualifed)
        }).catch(err => (res.sendStatus(500)))
    },
    getStateQualifiedRelays: (req,res) => {
        // const {id}=req.params;
        const db = req.app.get("db");
        // var newId = id.split("_");
        // console.log(id);
        db.get_topStateQualifiedRelays().then(stateQualifed => {
            //console.log(school);
            return res.status(200).send(stateQualifed)
        }).catch(err => (res.sendStatus(500)))
    },
    getRelayTimes: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        // console.log(id);
        db.get_relay_times(id).then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        })
    },
    getRelayTimes5: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        // console.log(id);
        db.get_relay_times5(id).then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        })
    },
    getRelaysTimes: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        // console.log(id);
        db.get_relays_times().then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        })
    },
    getSwimmerName: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        // console.log(id);
        db.get_swimmer_name(id).then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        })
    },
    getIndividualRecord: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("&");
        id=idSplit[0];
        var race=idSplit[1];
        // console.log(id)
        const db = req.app.get("db");
        // console.log(id,race);
        db.get_individual_records(id,race).then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        }).catch(err => (res.sendStatus(500)))
    },
    getBlog: (req,res) => {
        const db = req.app.get("db");
        db.get_blog().then(blog => {
            //console.log(school_meets);
            return res.status(200).send(blog)
        })
    },



    timeFill: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("&");
        id=idSplit[0];
        var race=idSplit[1];
        var meet=idSplit[2];
        const db = req.app.get("db");
        // console.log(id,race,meet);
        db.get_individual_records_by_meet(id,race,meet).then(times => {
            //console.log(school_relays);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    chartFill: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("&");
        id=idSplit[0];
        var race=idSplit[1];
        const db = req.app.get("db");
        // console.log(id,race);
        db.get_individual_races(id,race).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    setTimes: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split(",");
        var swimmer = idSplit[0];
        var race = idSplit[1];
        var time = idSplit[2];
        var school = idSplit[3];
        var meet = idSplit[4];
        var year = idSplit[5];
        var swim_year = idSplit[6];
        // console.log(meet);
        const db = req.app.get("db");
        // console.log(swimmer,race,time,school,meet,year,swim_year);
        db.set_swim_times(swimmer,race,time,school,meet,year,swim_year).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    setRelayTimes: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("-");
        var relay = idSplit[0];
        var names = idSplit[1].split('&');
        var name1 = names[0].split('_');
        name1 = name1[0][0]+". "+name1[1];
        var name2 = names[1].split('_');
        name2 = name2[0][0]+". "+name2[1];
        var name3 = names[2].split('_');
        name3 = name3[0][0]+". "+name3[1];
        var name4 = names[3].split('_');
        name4 = name4[0][0]+". "+name4[1];
        names = name1 +" "+name2 +" "+name3+" "+name4;
        var time = idSplit[2];
        var school = idSplit[3];
        var year = idSplit[4];
        var meet = idSplit[5];
        var swim_year = idSplit[6];
        const db = req.app.get("db");
        db.set_relay_times(relay,names,time,school,year,meet,swim_year).then(times => {
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    setSwimmer: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("_");
        var swimmer = idSplit[0].replace('-',' ');
        var gender = idSplit[1];
        var grade = idSplit[2];
        var year = idSplit[3];
        var school = idSplit[4];
        var is_active = idSplit[5];
        const db = req.app.get("db");
        // console.log(swimmer,gender,grade,year,school,is_active);
        db.set_swimmer(swimmer,gender,grade,year,school,is_active).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    setCoach: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("_");
        var coach = idSplit[0].replace('+',' ');
        var email = idSplit[1].replace('*','.');
        var phone = idSplit[2];
        var is_active = idSplit[3];
        var title = idSplit[4];
        var password = idSplit[5];
        var about = idSplit[6].replace('&'," ");
        const db = req.app.get("db");
        // console.log(coach,email,phone,is_active,title,password,about);
        db.set_coach(coach,email,phone,is_active,title,password,about).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    setMeet: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("_");
        var location = idSplit[0].replace(/-/g," ");
        
        var date = idSplit[1].replace(/&/g,"/");
        var time = idSplit[2];
        var year = idSplit[3];
        var out = idSplit[4];
        var bus = idSplit[5];
        var home = idSplit[6];
        var school1 = Number(idSplit[7]);
        var school2 = Number(idSplit[8]);
        // console.log(typeof school2)
        if(Number.isNaN(school2)){
            school2=null;
        }
        // console.log(location,date,time,year,out,bus,home,school1,school2);
        const db = req.app.get("db");
        db.set_meet(location,date,time,year,out,bus,home,school1,school2).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateSchools:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        // console.log(idSplit);
        var about=idSplit[0];
        var short=idSplit[1];
        var newId=idSplit[2];
        const db = req.app.get("db");
        // console.log(about,short,newId);
        db.update_school_descriptions(about,short,newId).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateSwimmer:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        // console.log(idSplit);
        var name=idSplit[0];
        var gender=idSplit[1];
        gender=gender[0];
        var status_grade=idSplit[2];
        var school=idSplit[3];
        var is_active=idSplit[4].toUpperCase();
        var swimmerId=Number(idSplit[5]);
        const db = req.app.get("db");
        // console.log(name,gender,status_grade,school,is_active,swimmerId);
        db.update_swimmer(name,gender,status_grade,school,is_active,swimmerId).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateCoach:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        // console.log(idSplit);
        var name=idSplit[0];
        var email=idSplit[1];
        var phone=idSplit[2];
        var is_active=idSplit[3].toUpperCase();
        var position=idSplit[4];
        var about = idSplit[5];
        var coachId=Number(idSplit[6]);
        const db = req.app.get("db");
        // console.log(name,email,phone,is_active,position,about,coachId);
        db.update_coach(name,email,phone,is_active,position,about,coachId).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateRecords:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        // console.log(idSplit);
        var time=idSplit[3];
        var numberName=Number(idSplit[4]);
        var numberMeet = Number(idSplit[5]);
        var numberRace=Number(idSplit[6]);
        const db = req.app.get("db");
        // console.log(time,numberName,numberRace,numberMeet);
        db.update_records(time,numberName,numberRace,numberMeet).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateRelays:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        var relay = idSplit[0];//currently is text not number
        var names = idSplit[1];
        var newTime = idSplit[2];
        var school = idSplit[3];//currently is text not number
        var meet = idSplit[4];//currently is text not number
        var relayNumber = Number(idSplit[5]);
        var schoolNumber = Number(idSplit[6]);
        var meetNumber = Number(idSplit[7]);
        var oldTime = idSplit[8];
        // console.log(relay,names,newTime,school,meet,relayNumber,schoolNumber,meetNumber,oldTime);
        const db = req.app.get("db");
        db.update_relay_records(relay,names,newTime,school,meet,relayNumber,schoolNumber,meetNumber,oldTime).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateMeet:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        // console.log(idSplit);
        var location=idSplit[0];
        var date=idSplit[1];
        date = date.split('-');
        var month = date[0];
        var day = date[1];
        var year = date[2];
        date = month+'/'+day+'/'+year;
        var time=idSplit[2];
        var out=idSplit[3];
        var bus=idSplit[4];
        var home=idSplit[5];
        var school1=Number(idSplit[6]);
        var school2=Number(idSplit[7]);
        var meetId=Number(idSplit[8]);
        const db = req.app.get("db");
        // console.log(location,date,time,out,bus,home,school1,school2,meetId);
        db.update_meet(location,date,time,out,bus,home,school1,school2,meetId).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateBlog:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_").join(" ");
        idSplit = idSplit.replace(/~/g,",")
        // console.log(idSplit);

        const db = req.app.get("db");
        // console.log(location,date,time,out,bus,home,school1,school2,meetId);
        db.update_blog(idSplit).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    getState:(req,res) => {
        // console.log(req)
        // var {id}=req.params;
        // var idSplit = id.split("_").join(" ");
        // idSplit = idSplit.replace(/~/g,",")
        // console.log(idSplit);

        const db = req.app.get("db");
        // console.log(location,date,time,out,bus,home,school1,school2,meetId);
        db.get_state().then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    updateState:(req,res) => {
        var {id}=req.params;
        var idSplit = id.split("_");
        var id = Number(idSplit[0]);
        var time = idSplit[1];
console.log(id,time)
        const db = req.app.get("db");
        // console.log(location,date,time,out,bus,home,school1,school2,meetId);
        db.update_state_times(time,id).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    logChanges:(req,res) => {
        // console.log(req)
        var {id}=req.params;
        var idSplit = id.split("_");
        // console.log(idSplit);
        if(idSplit[3]== undefined){
            changed_id = null;
            change_to = null;
        }
        else{
            changed_id = idSplit[3];
            change_to = idSplit[4];
        }
        const db = req.app.get("db");
        db.set_change_log(idSplit[0],idSplit[1],idSplit[2],changed_id,change_to).then(times => {
            // console.log(times);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    //REMOVE SECTION
    removeSwimmer:(req,res) => {
        var {id}=req.params;
        const db = req.app.get("db");
        db.remove_swimmer(id).then(times => {
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    removeMeet:(req,res) => {
        var {id}=req.params;
        const db = req.app.get("db");
        console.log(id);
        db.remove_meet(id).then(times => {
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    removeCoach:(req,res) => {
        var {id}=req.params;
        const db = req.app.get("db");
        db.remove_coach(id).then(times => {
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    }
}