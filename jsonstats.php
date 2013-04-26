<?php

// Database login details
$username = '';
$password = '';
$dbname   = '';
$table    = '';

// Connect to the DB and prepare the statement
try {
    $db = new PDO('mysql:host=localhost;dbname=' . $dbname . ';', $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $s = $db->prepare('insert into ' . $table . '(pokemonId,correct,difficulty,generation,guessTime,userId) values(:pokemonId,:correct,:difficulty,:generation,:guessTime,:userId)');
} catch (Exception $e) {
    die('Could not connect to database');
}

/*
 * Generate a unique user ID based on their IP address. We don't want to save the actual IP.
 * This isn't about tracking, but to get an idea of how many answers per session a user
 * does.
 */
$userId = md5($_SERVER['REMOTE_ADDR'] . $_SERVER['HTTP_USER_AGENT'] . 'uibqu9q0- 7n4vnw5evb4w68aw ae (w');

// JSON stuff adapted from http://stackoverflow.com/questions/8599595/send-json-data-from-javascript-to-php

$statsJson = file_get_contents('php://input');
$stats     = json_decode($statsJson);

/*
 * Loop through each of the stats we've received, and insert it into the database if the data
 * provided is valid (i.e. falls within sensible ranges).
 */
foreach ($stats as $entry) {

    $error = '';

    // Some basic sanity checking to keep invalid entries out

    if (filter_var($entry->pokemonId, FILTER_VALIDATE_INT, array('options' => array('min_range' => 1, 'max_range' => 649))) === false) {
        $error .= 'Invalid Pokemon ID\n';
    } else {
        $pokemonId = $entry->pokemonId;
    }

    if (filter_var($entry->correct, FILTER_VALIDATE_INT, array('options' => array('min_range' => 0, 'max_range' => 1))) === false) {
        $error .= 'Invalid value for correct\n';
    } else {
        $correct = $entry->correct;
    }

    if (filter_var($entry->difficulty, FILTER_VALIDATE_INT, array('options' => array('min_range' => 0, 'max_range' => 2))) === false) {
        $error .= 'Invalid difficulty level\n';
    } else {
        $difficulty = $entry->difficulty;
    }

    if (filter_var($entry->generation, FILTER_VALIDATE_INT, array('options' => array('min_range' => 0, 'max_range' => 5))) === false) {
        $error .= 'Invalid generation\n';
    } else {
        $generation = $entry->generation;
    }

    // Ignore times more than 10 minutes (600s -> 600,000ms)
    if (filter_var($entry->timeTaken, FILTER_VALIDATE_INT, array('options' => array('min_range' => 0, 'max_range' => 600000))) === false) {
        $error .= 'Invalid time\n';
    } else {
        $time = $entry->timeTaken/1000;
    }

    if ($error == '') {
        try {
            $s->bindValue(':pokemonId', $pokemonId, PDO::PARAM_INT);
            $s->bindValue(':correct', $correct, PDO::PARAM_INT);
            $s->bindValue(':difficulty', $difficulty, PDO::PARAM_INT);
            $s->bindValue(':generation', $generation, PDO::PARAM_INT);
            $s->bindValue(':guessTime', $time); // nothing specific for a decimal, so let it be a string
            $s->bindValue(':userId', $userId);
            $s->execute();
        } catch (Exception $e) {
            die('Could not connect to database');
        }
    }

}

// http_response_code(204); // only PHP 5.4

/*

SQL for creating the table:

create table stats (
    id int auto_increment primary key,
    pokemonId smallint unsigned,
    correct tinyint unsigned,
    difficulty tinyint unsigned,
    generation tinyint unsigned,
    guessTime decimal(7,3),
    hintsused tinyint unsigned,
    time timestamp,
    userId varchar(16),
    otherData varchar(256)
);

*/

?>
