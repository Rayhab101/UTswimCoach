select * from records 
where race=$1 AND (swimmer,time) IN (select swimmer,min(time) from records WHERE swim_year='5' group by swimmer,race) ORDER BY time;