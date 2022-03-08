<?php

require('./avenger.php');

$spiderman =  new Superhero('Spider-man', 'Male', 'Spiderfriends', 'With great power comes great responsibility');
$thor = new Avenger('Thor', 'Male', 'For asgard');

print_r('<pre>'.$spiderman.'</pre>');

$spiderman->sayOneliner();

print_r('<pre>'.$thor.'</pre>');

$thor->sayOneliner();
