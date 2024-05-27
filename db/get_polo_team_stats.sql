SELECT 
    player_team,
    COUNT(*) OVER (PARTITION BY player_team) AS num_players,
    player_goals,
    player_shots_attempted,
    player_assists,
    player_ejections,
    player_exclusions,
    player_steals,
    player_games_played
FROM polo_players;
