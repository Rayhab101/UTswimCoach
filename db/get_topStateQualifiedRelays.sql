SELECT * FROM (SELECT * FROM relay_times ORDER BY race ASC, time ASC) 
T WHERE race=$1 AND time<$2 AND swim_year='1';