CREATE TABLE schools(
school_id SERIAL PRIMARY KEY,
name VARCHAR, school_code VARCHAR
);

CREATE TABLE swimmers(
swimmer_id SERIAL PRIMARY KEY,
name VARCHAR,
gender VARCHAR,
status_grade VARCHAR,
year INT, 
school INT REFERENCES schools(school_id)
);

CREATE TABLE races(
race_id	SERIAL PRIMARY KEY,
title VARCHAR,
sr_location	VARCHAR,
sr_swimmer VARCHAR,
sr_time VARCHAR,
sr_year INT
);

CREATE TABLE meets(
meet_id SERIAL PRIMARY KEY,
location VARCHAR,
date VARCHAR,
note TEXT
);

CREATE TABLE coaches(
coach_id SERIAL PRIMARY KEY,
name VARCHAR,
email VARCHAR,
phone VARCHAR,
school VARCHAR
);

CREATE TABLE records(
swimmer	INT REFERENCES swimmers(swimmer_id),
race INT REFERENCES races(race_id),
time VARCHAR,
school INT REFERENCES schools(school_id),
meet INT REFERENCES meets(meet_id)
);

CREATE TABLE schools_coaches(
school_id INT REFERENCES schools(school_id),
coach_id INT REFERENCES coaches(coach_id)
);

CREATE TABLE meet_schools(
meet_id int references meets(meet_id),
school_id int references schools(school_id)
);

CREATE TABLE records_school(
school_id int references schools(school_id),
race_id int references races(race_id),
swimmer_id int references swimmers(swimmer_id),
time varchar,
year varchar
);

CREATE TABLE relay_record_school(
race INT REFERENCES races(race_id),
swimmers VARCHAR,
time VARCHAR,
school INT REFERENCES schools(school_id),
year VARCHAR
)

CREATE TABLE relay_times(
race int references races(race_id),
swimmers VARCHAR,
time VARCHAR,
school INT REFERENCES schools(school_id),
year INT,
meet int references meets(meet_id));

INSERT INTO schools(name,school_code)
VALUES('Alta', 'AHS'),
('American Fork', 'AFHS'),
('American Leadership Academy', 'ALA'),
('Altamont', 'AMHS'),
('Bear River', 'BRHS'),
('Ben Lomond', 'BLHS'),
('Bingham', 'BHS'),
('Bountiful', 'BNTF'),
('Box Elder', 'BEHS'),
('Bonneville', 'BONN'),
('Brighton', 'BRI'),
('Canyon View', 'CVHS'),
('Carbon', 'CARB'),
('Cedar', 'CCHS'),
('Cedar Valley', 'CDRV'),
('Clearfield', 'CLEAR'),
('Copper Hills', 'CHHS'),
('Corner Canyon', 'CCC'),
('Cottonwood', 'COLTS'),
('Crimson Cliffs', 'CRIM'),
('Cyprus', 'CYP'),
('Davis', 'DAVIS'),
('Delta', 'DELTA'),
('Desert Hills', 'DHHS'),
('Dixie', 'DIXIE'),
('East', 'EAST'),
('Emery', 'EMERY'),
('Farmington', 'FHS'),
('Fremont', 'FREMT'),
('Grand County', 'GRND'),
('Granger', 'GRAN'),
('Grantsville', 'GHS'),
('Green Canyon', 'GCHS'),
('Gunnison Valley', 'GVHS'),
('Herriman', 'HERR'),
('Highland', 'HIGH'),
('Hillcrest', 'HILL'),
('Hunter', 'HHS'),
('Hurricane', 'HURR'),
('Jordan', 'JOR'),
('Juab', 'JUAB'),
('Juan Diego Catholic', 'JDCHS'),
('Judge Memorial', 'JM'),
('Kearns', 'KHS'),
('Layton', 'LAYTN'),
('Lehi', 'LEHI'),
('Logan', 'LHS'),
('Lone Peak', 'LPHS'),
('Manti', 'MPHS'),
('Maple Mountain', 'MMHS'),
('Meridian', 'MS'),
('Millard', 'MILL'),
('Morgan', 'MOR'),
('Mountain Crest', 'MCHS'),
('Mountain Ridge', 'MRHS'),
('Mountain View', 'MVHS'),
('Murray', 'MHS'),
('North Sanpete', 'NSPHS'),
('North Sevier', 'NSVR'),
('North Summit', 'NSHS'),
('Northridge', 'NORTH'),
('Ogden', 'OGDEN'),
('Olympus', 'OLY'),
('Orem', 'OREM'),
('Park City', 'PCHS'),
('Parowan', 'PAR'),
('Payson', 'PHS'),
('Pine View', 'PVHS'),
('Pleasant Grove', 'PGHS'),
('Providence Hall', 'PHHS'),
('Provo', 'PROVO'),
('Richfield', 'RICH'),
('Ridgeline', 'RIDGE'),
('Riverton', 'RVHS'),
('Rowland Hall-St. Marks', 'RH'),
('Roy', 'RHS'),
('Salem Hills', 'SHHS'),
('San Juan', 'SJHS'),
('Sky View', 'SVHS'),
('Skyline', 'SKY'),
('Skyridge', 'SKYR'),
('Snow Canyon', 'SCHS'),
('South Sevier', 'SSVR'),
('South Summit', 'SSHS'),
('Spanish Fork', 'SFHS'),
('Springville', 'SPRV'),
('Stansbury', 'SHS'),
('Summit Academy', 'SAHS'),
('Syracuse', 'SYR'),
('Taylorsville', 'TAYL'),
('Telos', 'TA'),
('Timpanogos', 'THS'),
('Timpview', 'TIMP'),
('Tooele', 'TOOELE'),
('Uintah', 'UHS'),
('Union', 'UNIO'),
('Viewmont', 'VHS'),
('Wasatch', 'WASA'),
('Wasatch Academy', 'WA'),
('Weber', 'WEBER'),
('West', 'WEST'),
('West Jordan', 'WJHS'),
('Westlake', 'WL'),
('Woods Cross', 'WXHS');

INSERT INTO meets(location, date, note)
VALUES('Red & Blue', '10/23/2020','3:00pm'),
('Cedar Valley', '10/30/2020','3:30pm'),
('Morgan/North Summit', '11/05/2020','3:30pm'),
('@Cedar Valley', '11/19/2020','3:00pm'),
('Iron Sea Horse(@Ogden)', '12/1/2020','3:30pm'),
('Tooele', '12/3/2020','3:30pm'),
('@Taylorsville', '12/15/2020','3:30pm'),
('Bonneville', '1/7/2020','3:30pm'),
('@Uintah', '1/9/2020','9:00am'),
('@Granger', '1/12/2020','3:30pm'),
('Juan Diego/Summit Academy', '1/15/2020','3:30pm'),
('Stansbury', '1/21/2020','3:30pm'),
('St. Joes Region (Tooele)', '1/29/2020','9:00am'),
('Region 10 (Tooele)', '1/30/2020','10:00am'),
('State (BYU)', '2/12-13/2020', '4:00pm - 9:00am');

INSERT INTO races(title, sr_location, sr_swimmer, sr_time, sr_year)
VALUES('Womens 200 Medley Relay', 'Desert Hills','C. Romprey, M. Dunlavy, S. Hansen, T. Schimbeck','1:49.02','2019'),
('Womens 200 free', 'Mountain Crest','Hailey Pabst','1:51.33','2012'),
('Womens 200 IM', 'East','Sara Jayne Christiansen','2:04.68','2006'),
('Womens 50 free', 'Mountain Crest','Hailey Pabst','0:23.73','2013'),
('Womens 100 fly', 'Skyline','Lillian Moore','0:54.61','2014'),
('Womens 100 free', 'Timpview','Rachel Oyler','0:51.69','2017'),
('Womens 500 free', 'Maple Mountain','Makayla Cazier','5:02.94','2016'),
('Womens 200 Free Relay', 'Timpview','Bostock, Hansen, Jacob, Kyler','1:38.87','2017'),
('Womens 100 back', 'Maple Mountain','Makayla Cazier','0:55.78','2017'),
('Womens 100 breast', 'Kearns','Lilyy Plaudis','1:04.02','2017'),
('Womens 400 Free Relay', 'Skyline','Miller,Dibble,Brooks,Moore','3:33.63','2014'),
('Mens 200 Medley Relay', 'Desert Hills','Plumb, Wawryniak, Anderson, Rettie','1:35.66','2019'),
('Mens 200 free', 'Desert Hills','Payton Plumb','1:38.75','2020'),
('Mens 200 IM', 'Mountain Crest','Jake Taylor','1:51.74','2009'),
('Mens 50 free', 'Logan','Billy Betz','0:20.60','1997'),
('Mens 100 fly', 'Olympus','Matt Chamberlain','0:49.37','1994'),
('Mens 100 free', 'Desert Hills','Payton Plumb','0:45.39','2020'),
('Mens 500 free', 'Olympus','Shawn Western','4:33.95','2012'),
('Mens 200 Free Relay', 'Desert Hills','Plumb, Rettie, Anderson, Wawrzyniak','1:24.43','2019'),
('Mens 100 back', 'Sky View','Jake Walters','0:49.49','2019'),
('Mens 100 breast', 'Cyprus','Jason Hayes','0:57.57','1988'),
('Mens 400 Free Relay', 'Desert Hills','Plumb, Crawford, Anderson, Wawryniak','3:10.16','2019');

INSERT INTO schools_coaches(school_id,coach_id)
VALUES($1,$2);

INSERT INTO swimmers(name,gender,status_grade,year,school,is_active)
VALUES('Ryan Lund', 'Male', 'Morning Coach', 6,6, FALSE),
('Aiden Wilson', 'M', 'Freshman', 1,78, TRUE),
('AJ Pippin', 'M', 'Senior', 3,6, TRUE),
('Andrew Richey', 'M', 'Senior', 4,6, TRUE),
('Anna Nuttall', 'F', 'Senior', 3,6, TRUE),
('Artie Johnson', 'M', 'Freshman', 1,6, TRUE),
('Blake Hanson', 'Male', 'Junior', 4,78, TRUE),
('Brennen Jacobsen', 'M', 'Freshman', 1,6, TRUE),
('Brigtta Benroth', 'F', 'Sophomore', 1,6, TRUE),
('Crystal Higgs', 'F', 'Junior', 2,6, TRUE),
('Daniel Canales', 'M', 'Sophomore', 1,6, TRUE),
('Diana Gonzalez', 'F', 'Junior', 2,6, TRUE),
('Garren Gooda', 'M', 'Senior', 3,6, TRUE),
('Gavin Cox', 'M', 'Sophomore', 1,6, TRUE),
('Giovana Ferreira', 'F', 'Sophomore', 1,6, TRUE),
('Gunder Allen', 'M', 'Sophomore', 1,6, TRUE),
('Hope Abel', 'F', 'Junior', 2,6, TRUE),
('Ivy Buenrestro', 'F', 'Sophomore', 2,6, TRUE),
('Jacquelyn Arlofski', 'F', 'Sophomore', 1,78, TRUE),
('Jaxon Spinozza', 'Male', 'Senior', 2,6, TRUE),
('John Rebeck', 'Male', 'Senior', 2,6, TRUE),
('Joseph Erickson', 'M', 'Sophomore', 1,6, TRUE),
('Kaden Miller', 'M', 'Freshman', 1,6, TRUE),
('Kaylee Falkner', 'F', 'Sophomore', 2,6, TRUE),
('Kendra Sandberg', 'F', 'Junior', 3,6, TRUE),
('Kenzkei Lee', 'M', 'Sophomore', 1,6, TRUE),
('Kiara Olson', 'F', 'Sophomore', 1,6, TRUE),
('Kovu Stefani', 'M', 'Sophomore', 1,6, TRUE),
('Leighla (Lu) Steed', 'F', 'Sophomore', 1,6, TRUE),
('Lilith Nowak', 'F', 'Sophomore', 1,6, TRUE),
('Lindsey Cummens', 'Female', 'Senior', 3,6, TRUE),
('Lucas Buttschardt', 'M', 'Sophomore', 1,78, TRUE),
('Macie Lane', 'F', 'Sophomore', 1,6, TRUE),
('MacKeon Tuck', 'M', 'Junior', 3,6, TRUE),
('Max Hall', 'M', 'Junior', 3,78, TRUE),
('Megan Graham', 'F', 'Sophomore', 2,6, TRUE),
('Melany Farley', 'F', 'Sophomore', 1,6, TRUE),
('Michael Lopez', 'Male', 'Freshman', 1,6, TRUE),
('Naomi Ortegon', 'F', 'Sophomore', 2,6, TRUE),
('Parker Winterbottom', 'M', 'Sophomore', 1,6, TRUE),
('Payton Holt', 'F', 'Sophomore', 1,6, TRUE),
('Ruben Yaina', 'M', 'Sophomore', 1,78, TRUE),
('Sean Gorritti', 'M', 'Freshman', 1,78, TRUE),
('Shannon Boothe', 'F', 'Sophomore', 2,6, TRUE),
('Shaylynn Bodily', 'Female', 'Senior', 3,6, TRUE),
('Thomas Sorley', 'M', 'Senior', 2,78, TRUE),
('Treyson Adger', 'M', 'Freshman', 1,6, TRUE),
('Zander Owens', 'Male', 'Freshman', 1,6, TRUE),
('Aiden Lopez', 'M', 'Senior', 3,6, TRUE),
('Easton Jacobsen', 'M', 'Sophomore', 3,6, TRUE);

INSERT INTO records_school(school_id,race_id,swimmer_id,time,year)
VALUES
-- BEN LOMOND
(6,2,56,'2:10.79',2013),--200 FREE
(6,3,57,'2:30.27',2020),--200 IM
(6,4,58,'0:26.82',2019),--50 FREE
(6,5,59,'1:12.17',2014),--100 FLY
(6,6,58,'0:59.98',2019),--100 FREE
(6,7,56,'5:57.35',2013),--500 FREE
(6,9,60,'1:09.82',2000),--100 BACK
(6,10,61,'1:16.54',2020),--100 BREAST
(6,13,51,'1:56.66',2019),--200 FREE
(6,14,52,'2:12.47',2011),--200 IM
(6,15,53,'0:22:88',2015),--50 FREE
(6,16,53,'0:58.99',2015),--100 FLY
(6,17,53,'0:49.71',2015),--100 FREE
(6,18,51,'5:36.41',2019),--500 FREE
(6,20,54,'0:55.92',2017),--100 BACK
(6,21,55,'1:04.94',2013),--100 BREAST
-- ST. JOES
(78,2,62,'2:31.68',2013),--200 FREE
(78,3,62,'2:38.18',2020),--200 IM
(78,4,62,'0:28.74',2019),--50 FREE
(78,5,62,'1:16.70',2014),--100 FLY
(78,6,62,'1:07.18',2019),--100 FREE
(78,7,63,'7:12.75',2013),--500 FREE
(78,9,62,'1:10.64',2000),--100 BACK
(78,10,62,'1:27.26',2020),--100 BREAST
(78,13,7,'2:32.39',2018),--200 FREE
(78,14,7,'2:39.42',2020),--200 IM
(78,15,7,'0:24:28',2020),--50 FREE
(78,16,64,'1:07.35',2020),--100 FLY
(78,17,7,'0:55.50',2020),--100 FREE
(78,18,7,'7:08.14',2018),--500 FREE
(78,20,7,'1:18.63',2020),--100 BACK
(78,21,7,'1:23.72',2019);--100 BREAST

INSERT INTO meet_schools(meet_id,school_id)
VALUES(1,6),
(2,6),
(3,6),
(4,6),
(5,6),
(6,6),
(7,6),
(8,6),
(9,6),
(10,6),
(11,6),
(12,6),
(14,6),
(15,6),
(1,78),
(2,78),
(3,78),
(4,78),
(5,78),
(6,78),
(7,78),
(8,78),
(9,78),
(10,78),
(11,78),
(12,78),
(13,78),
(15,78),
(2,15),
(3,53),
(3,60),
(4,15),
(5,62),
(6,94),
(7,90),
(8,10),
(9,95),
(10,31),
(11,42),
(11,88),
(12,87);

INSERT INTO records(swimmer,race,time,school,meet,year)
VALUES
(3,13,'2:14.12',6,2,2020),
(3,21,'1:15.44',6,2,2020),
(49,15,'0:40.11',6,2,2020),
(49,17,'1:27.09',6,2,2020), 
(4,14,'2:43.39',6,2,2020),
(4,18,'6:33.47',6,2,2020), 
(5,2,'3:58.85',6,2,2020),
(5,4,'0:50.80',6,2,2020), 
(5,7,'10:23.81',6,2,2020),
(7,15,'0:24.29',78,2,2020),
(7,17,'0:56.26',78,2,2020), 
(8,15,'0:37.25',6,2,2020),
(9,4,'0:51.66',6,2,2020),
(9,6,'1:51.93',6,2,2020), 
(50,13,'2:49.21',6,2,2020),
(50,20,'1:25.37',6,2,2020),
(13,16,'1:18.59',6,2,2020),
(14,15,'1:01.48',6,2,2020),
(14,17,'1:48.12',6,2,2020),
(15,4,'1:17.00',6,2,2020),
(16,15,'0:37.31',6,2,2020),
(16,20,'1:43.55',6,2,2020),
(18,2,'4:54.87',6,2,2020),
(18,6,'2:15.65',6,2,2020),
(19,4,'0:38.06',78,2,2020),
(21,17,'1:08.09',6,2,2020),
(21,18,'7:51.12',6,2,2020),
(22,13,'4:15.24',6,2,2020),
(22,16,'2:09.00',6,2,2020),
(23,15,'0:44.12',6,2,2020),
(23,20,'2:01.39',6,2,2020),
(24,5,'2:42.55',6,2,2020),
(24,9,'2:02.70',6,2,2020),
(29,4,'0:55.12',6,2,2020),
(29,10,'2:32.47',6,2,2020),
(31,3,'3:15.45',6,2,2020),
(31,9,'1:33.04',6,2,2020),
(32,15,'0:36.28',78,2,2020),
(33,4,'0:38.31',78,2,2020),
(33,6,'1:42.38',78,2,2020),
(36,2,'2:40.29',6,2,2020),
(36,10,'1:27.09',6,2,2020),
(38,14,'5:38.72',6,2,2020),
(44,4,'0:39.66',6,2,2020),
(44,6,'1:37.92',6,2,2020),
(44,7,'9:28.48',6,2,2020),
(46,15,'0:40.62',78,2,2020),
(46,17,'1:33.95',78,2,2020),
(47,17,'1:54.43',6,2,2020),
(48,15,'0:47.19',6,2,2020),
(48,17,'1:52.59',6,2,2020);

INSERT INTO relay_record_school(race,swimmers,time,school,year)
VALUES(1,'M. Miller, R. Hester, T. Ashment, K. Shaffer','2:14.84',6,2018),
(8,'K. Shaffer, G. Olsen, R. Hester, M. Miller','1:53.70',6,2018),
(11,'M. Graham, M. Miller, K. Cummens, R. Hester','4:16.80',6,2020),
(12,'B. Higgs, C. Purdy, S. Felix, A. Bordato','1:47.84',6,2017),
(19,'A. Bordato, S. Felix, C. Purdy, B. Higgs','1:37.28',6,2017),
(22,'S. Dabb, S. Felix, B. Higgs, A. Heiner','3:39.46',6,2015),
(1,'A. Davis, E. Bailey, C. Young, V. Tomon','2:32.10',78,2018),
(8,'V. Tomon, E. Bailey, C. Young, A. Davis','2:07.78',78,2018),
(11,'','',78,''),
(12,'P. Wade, G. Leland, X. Tang, B. Hanson','2:08.85',78,2020),
(19,'X. Tang, M. Holl, P. Wade, B. Hanson','1:47.15',78,2020),
(22,'X. Tang, M. Holl, P. Wade, B. Hanson','4:28.11',78,2020);

CREATE TABLE state(race_id SERIAL PRIMARY KEY, race_name VARCHAR, race_time VARCHAR)
INSERT INTO state(race_name,race_time) VALUES('Womens 200 Medley Relay','2:45.50'),
('Womens 200 free','2:25.50'),
('Womens 200 IM','2:45.50'),
('Womens 50 free','28.50'),
('Womens 100 fly','1:20.50'),
('Womens 100 free','1:03.50'),
('Womens 500 free','6:50.50'),
('Womens 200 Free Relay','2:20.50'),
('Womens 100 back','1:15.50'),
('Womens 100 breast','1:25.50'),
('Womens 400 Free Relay','5:40.50'),
('Mens 200 Medley Relay','2:15.50'),
('Mens 200 free','2:10.50'),
('Mens 200 IM','2:30.50'),
('Mens 50 free','0:25.50'),
('Mens 100 fly','1:06.50'),
('Mens 100 free','0:57.50'),
('Mens 500 free','6:15.50'),
('Mens 200 Free Relay','2:05.50'),
('Mens 100 back','1:09.50'),
('Mens 100 breast','1:15.50'),
('Mens 400 Free Relay','4:30.50');