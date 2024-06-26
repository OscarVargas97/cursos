DROP DATABASE IF EXISTS twitter_db;
CREATE DATABASE twitter_db;
show databases;
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_handle VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number CHAR(10) UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()) --
);
    DROP TABLE IF EXISTS followers;
CREATE TABLE IF NOT EXISTS followers(
    follower_id INT NOT NULL,
    following_id INT NOT NULL,
    FOREIGN KEY (following_id) REFERENCES users(user_id),
    FOREIGN KEY (follower_id) REFERENCES users(user_id),
    PRIMARY KEY (follower_id, following_id)
);
ALTER TABLE followers
ADD CONSTRAINT check_follower_id CHECK (follower_id <> following_id);
CREATE TABLE tweets (
    tweet_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    tweet_text VARCHAR(280) NOT NULL,
    num_likes INT UNSIGNED DEFAULT 0,
    num_retweets INT UNSIGNED DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE tweet_likes(
    user_id INT NOT NULL,
    tweet_id INT NOT Null,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (tweet_id) REFERENCES tweets(tweet_id),
    PRIMARY KEY (user_id, tweet_id)
);