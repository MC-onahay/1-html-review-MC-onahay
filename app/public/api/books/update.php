<?php

try {
    $_POST = json_decode(
                file_get_contents('php://input'), 
                true,
                2,
                JSON_THROW_ON_ERROR
            );
} catch (Exception $e) {
    header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request");
    // print_r($_POST);
    exit;
}

require("class/DbConnection.php");


// Step 1: Get a datase connection
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'UPDATE books SET
    title = ?,
    author = ?,
    publishyr = ?,
    pgcount= ?,
    msrp =?
  WHERE id = ?'
);

$stmt->execute([
    $_POST['title'],
    $_POST['author'],
    $_POST['publishyr'],
    $_POST['pgcount'],
    $_POST['msrp'],
    $_POST['id']
  ]);
 

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../books/');