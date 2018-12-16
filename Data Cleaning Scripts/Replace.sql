SET SQL_SAFE_UPDATES = 0;

UPDATE Kaggle
SET    overview = replace(overview, '\\', '');
