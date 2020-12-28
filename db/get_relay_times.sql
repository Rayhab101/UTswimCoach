SELECT * FROM (
  SELECT DISTINCT ON (swimmers) *
  FROM relay_times
  WHERE race = $1 AND time<>''
  ORDER BY swimmers
) t
ORDER BY time;
