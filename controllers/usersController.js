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
    getTop100: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_coach_schools(id).then(top100 => {
            //console.log(school);
            return res.status(200).send(top100)
        }).catch(err => (res.sendStatus(500)))
    },
    getStateQualified: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        db.get_coach_schools(id).then(stateQualifed => {
            //console.log(school);
            return res.status(200).send(stateQualifed)
        }).catch(err => (res.sendStatus(500)))
    },
    getRelayTimes: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        console.log(id);
        db.get_relay_times(id).then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        })
    },
    getSwimmerName: (req,res) => {
        const {id}=req.params;
        const db = req.app.get("db");
        console.log(id);
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
        const db = req.app.get("db");
        // console.log(id,race);
        db.get_individual_records(id,race).then(school_relays => {
            //console.log(school_relays);
            return res.status(200).send(school_relays)
        }).catch(err => (res.sendStatus(500)))
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
            //console.log(school_relays);
            return res.status(200).send(times)
        }).catch(err => (res.sendStatus(500)))
    },
    setTimes: (req,res) => {
        var {id}=req.params;
        var idSplit = id.split("_");
        id=idSplit[0];
        var race=idSplit[1];
        const db = req.app.get("db");
        console.log(id,race);
        // db.set_swim_times(id,race).then(times => {
        //     console.log(times);
        //     // return res.status(200).send(times)
        // }).catch(err => (res.sendStatus(500)))
    }
}