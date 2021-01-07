SELECT * FROM swimmers 
WHERE swimmer_id = $1 AND is_active=TRUE;