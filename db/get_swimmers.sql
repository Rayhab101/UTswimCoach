SELECT * FROM (SELECT * FROM swimmers ORDER BY name) T
WHERE school=$1 AND is_active=TRUE;