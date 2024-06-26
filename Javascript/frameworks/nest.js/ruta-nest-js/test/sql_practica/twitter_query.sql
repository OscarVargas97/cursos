-- Todos los tweets
SELECT *
FROM tweets;
-- Usuarios que siguen a otros usuarios
SELECT follower_id,
    following_id
FROM followers;
-- Usuarios que siguen al usuario 1
SELECT follower_id
FROM followers
WHERE following_id = 1;
--  Numero de Usuarios que siguen al usuario 1
SELECT COUNT(follower_id) AS num_followers
FROM followers
WHERE following_id = 1;
-- Top 3 usuarios con mayor número de seguidores
SELECT following_id,
    COUNT(follower_id) AS num_followers
FROM followers
GROUP BY following_id
ORDER BY num_followers DESC
LIMIT 3;
-- Top 3 usuarios pero haciendo Joins
SELECT users.user_id,
    users.user_handle,
    users.first_name,
    following_id,
    COUNT(follower_id) AS num_followers
FROM followers
    JOIN users ON users.user_id = followers.following_id
GROUP BY following_id
ORDER BY num_followers DESC
LIMIT 3;
-- ¿Cuántos tweets ha cada usuario?
SELECT user_id,
    COUNT(*) AS tweet_count
from tweets
GROUP BY user_id;
-- sub consulta
-- obtener los tweets de los usuarios que tienen mas de 2 seguidores
SELECT user_id,
    tweet_id,
    tweet_text
FROM tweets
WHERE user_id IN(
        SELECT following_id
        FROM followers
        GROUP BY following_id
        HAVING COUNT(*) >= 2
    )
ORDER BY user_id;
-- Quiero Obtener todos los likes que ha recibido un usuario
SELECT tweets.user_id,
    count(*) AS like_count
FROM tweet_likes
    JOIN tweets on tweets.tweet_id = tweet_likes.tweet_id
GROUP BY tweets.user_id;
--
DROP TRIGGER IS EXIST increase_follower_count
DELIMITER $$;
CREATE TRIGGER increase_follower_count
AFTER
INSERT ON followers FOR EACH ROW BEGIN
UPDATE users
SET follower_count = follower_count + 1
WHERE user_id = NEW.following_id;
END $$
DELIMITER ;