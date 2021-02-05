select * from records 
where race=$1 AND swim_year='1' AND (swimmer,time) IN (select swimmer,min(time) from records group by swimmer,race) ORDER BY time;