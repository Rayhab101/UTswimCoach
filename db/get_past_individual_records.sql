SELECT min(time) FROM records
WHERE swimmer=$1 and race=$2 and swim_year=$3;