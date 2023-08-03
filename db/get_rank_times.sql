Select Min(time),race,swimmer FROM records WHERE swimmer=$1 group by race,swimmer ORDER BY swimmer, race;
