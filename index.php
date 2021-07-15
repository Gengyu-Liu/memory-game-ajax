<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>ein memory Spiel mit Icons</title>
		<link href="css/memoryspiel.css" rel="stylesheet">
		<script src="https://kit.fontawesome.com/029b79cb8b.js" crossorigin="anonymous"></script> <!--font awesome 5-->
	</head>
	<body>
		<div id="startSeite">
			<h2>MEMORY SPIEL</h2>
			<div id="gallerie"></div>
			<div id="buttons">
				<button id="play">play</button>
			</div>
		</div>
		
		<div id="game"></div>
		
		<div id="time">
			<b id="minute">00</b>:<b id="sekunde">00</b>
			<button id="start"><i class="fas fa-play"></i></button>
			<button id="pause"><i class="fas fa-pause"></i></button>
                        <button id="close"><i class="fas fa-times"></i></button>
		</div>
		
		<div id="menu">
			<div id="win"></div>
			<div id="zeitlevel"></div>
			<div id="allelevel"></div>
			<button id="nextlevel"></button>
			<button id="zuStart"><i class="fas fa-home"></i></button>
		</div>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>		
		<script src="js/memory.js"></script>
		<script src="js/startSeite.js"></script>
		
	</body>
</html> 
