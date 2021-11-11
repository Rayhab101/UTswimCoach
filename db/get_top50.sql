select * from records 
where race=$1 AND (time,swimmer) IN (select swimmer,min(time) from records group by swimmer,race) ORDER BY time;