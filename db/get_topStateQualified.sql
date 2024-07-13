-- SELECT * FROM (SELECT * FROM records ORDER BY race ASC, time ASC) 
-- T WHERE race=$1 AND time<$2 AND swim_year='5';

SELECT * FROM state WHERE race_id=$1;