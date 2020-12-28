SELECT * FROM (SELECT * FROM records ORDER BY race ASC, time ASC) 
T WHERE race=$1 AND time<$2;
