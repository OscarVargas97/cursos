DROP DATABASE IF EXISTS moviesdb;
CREATE DATABASE moviesdb;
use moviesdb;
CREATE TABLE movie (
    id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(2, 1) UNSIGNED
);
CREATE TABLE genre(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE movie_genre(
    movie_id BINARY(16) REFERENCES movie(id),
    genre_id INT,
    PRIMARY KEY(movie_id, genre_id)
);
SELECT *
FROM movie;