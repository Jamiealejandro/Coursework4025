<?php
	header('Access-Control-Allow-Origin: *', false);

	function getParameter ($var) {
    if (isset ($_GET [$var])) {
	  	return $_GET[$var];
	  }

    if (isset ($_POST [$var])) {
	  	return $_POST [$var];

	  }
	}

	$question = getParameter ("question");
	$action= getParameter ("action");


	  if (!$question) {
	  	echo "<h1>You didn't ask a question.</h1>";
	  	return;
	  }

	  if (!$action) {
	  	$action = "standard";
	  }



		$standard_responses = array (
			"It is certain.",
			"As I see it, yes",
			"Reply hazy, try again.",
			"Don't count on it.",
			"It is decidedly so.",
			"Most likely.",
			"Ask again later.",
			"My reply is no.",
			"Without a doubt.",
			"Outlook good.",
			"Better not tell you now.",
			"My sources say no.",
			"Yes - definitely.",
			"Yes.",
			"Cannot predict now.",
			"Outlook not so good.",
			"You may rely on it.",
			"Signs point to yes.",
			"Concentrate and ask again.",
			"Very doubtful.",
	);

		$hate_responses = array (
			"Not a chance, bucko.",
			"Why would anything good ever happen to you?",
			"Nobody cares.",
			"Never in a million years.",
			"You've got something in your teeth.",
			"Drop dead.",
			"A plague on both your houses.",
			"You're a waste of everyone's time.",
			"Nobody likes you.",
			"You smell terrible.",
		);


	if ($action == "standard") {
		$responses = $standard_responses;
	}
	else if ($action == "hate") {
		$responses = $hate_responses;
	}

	$selected = array_rand ($responses, 1);
	$text = $responses[$selected];

	echo "<h1>You asked the Magic Hate Ball the following question: $question</h1>";
	echo "<h1>The hate ball answers: $text</h1>";



?>
