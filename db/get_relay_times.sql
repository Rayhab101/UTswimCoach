SELECT * FROM relay_times WHERE race=$1 AND time <> ''  AND swim_year='1' AND (swimmers,time) IN (select swimmers, min(time) from relay_times group by swimmers, race) ORDER BY time;
