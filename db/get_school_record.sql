SELECT * FROM (SELECT * FROM records_school ORDER BY race_id) T
WHERE race_id=$1 AND school_id=$2;
