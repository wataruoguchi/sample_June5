<?php
if($_SERVER['REQUEST_METHOD'] === "GET") {
  $mode = $_GET['m'];
  $nthPage = $_GET['p'];  // N th Page
  $numberOfItemsPerPage = $_GET['i']; // Get data between N * i AND (N+1) * i
  // TODO: Do something
  // TODO: Get the number of data
  // TODO: Get total number of the column
  if($mode === "day") {
    $string = file_get_contents("./day.json");
  } elseif ($mode === "week") {
    $string = file_get_contents("./week.json");
  }
  // TODO: Get N lines depends on i and p
  echo $string;
}
