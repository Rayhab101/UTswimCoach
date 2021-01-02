SELECT min(time) FROM records
WHERE swimmer=$1 and race=$2;