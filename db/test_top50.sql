SELECT best_results.*
FROM best_results
JOIN (
    SELECT swimmer, min(time) as min_time
    FROM records
    WHERE race = $1
    GROUP BY swimmer
) AS min_times ON best_results.swimmer = min_times.swimmer AND best_results.time = min_times.min_time::time
WHERE best_results.race = $1
ORDER BY best_results.time
LIMIT 50;