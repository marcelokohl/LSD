<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>LSD</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="apple-touch-icon" sizes="128x128" href="game/icons/icon-128.png">
	<link rel="apple-touch-icon" sizes="256x256" href="game/icons/icon-256.png">
	<link rel="apple-touch-icon" sizes="512x512" href="game/icons/icon-512.png">
	<link rel="icon" type="image/png" href="game/icons/icon-512.png">

	<style media="screen">
		html, body {
			/* margin: 0;
			height: 100%;
			width: 100px;
			overflow: hidden; */
		}
		#game {
			/* position: absolute;
	    top: 0;
	    right: 0;
	    bottom: 40px;
	    left: 0;
	    border: 0;
			overflow: hidden;
			-webkit-overflow-scrolling:touch; */
		}
		/* #game iframe {
			min-width: 100%;
			width: 100%;
			height: 100%;
			border: 0;
		} */
		.menu {
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.menu li {
			color: blue;
			text-decoration: underline;
			cursor: pointer;
			text-align: center;
			padding: 6px;
		}
	</style>

</head>

<body>
	<!-- GAME -->
	<!-- <div  id="game">
		<iframe scrolling="no" src="game/"></iframe>
	</div> -->
	<ul class="menu">
		<li onclick="sg('diplo','1')"> Diplo 1 </li>
		<li onclick="sg('diplo','2')"> Diplo 2 </li>
		<li onclick="sg('diplo','3')"> Diplo 3 </li>
		<li onclick="sg('diplo','boss')"> Diplo Boss </li>
		<li onclick="sg('diplo','arcade')"> Diplo Arcade </li>
		<li> <hr> </li>
		<li onclick="sg('sia','1')"> Sia 1 </li>
		<li onclick="sg('sia','2')"> Sia 2 </li>
		<li onclick="sg('sia','3')"> Sia 3 </li>
		<li onclick="sg('sia','boss')"> Sia Boss </li>
		<li onclick="sg('sia','arcade')"> Sia Arcade </li>
		<li> <hr> </li>
		<li onclick="sg('labrinth','1')"> Labrinth 1 </li>
		<li onclick="sg('labrinth','2')"> Labrinth 2 </li>
		<li onclick="sg('labrinth','3')"> Labrinth 3 </li>
		<li onclick="sg('labrinth','boss')"> Labrinth Boss </li>
		<li onclick="sg('labrinth','arcade')"> Labrinth Arcade </li>
	</ul>

	<!-- JAVASCRIPT -->
	<script src="game/jquery-3.3.1.min.js"></script>
	<script type="text/javascript">

		//
		function sg(g,l) {
			game_name = g;
			game_level = l;
			window.location.href = "./game?l="+l+"&g="+g;
			// $( '#game iframe' ).attr( 'src', function ( i, val ) { return val; });
		}
		//

		var is_mobile = ((typeof window.orientation !== 'undefined')).toString();
		var game_name = "sia";
		var game_level = "1"; // 1,2,3 or arcade
		function isMobile() {
			return is_mobile;
		}

		function gameName() {
			return game_name;
		}
		function gameLevel() {
			return game_level;
		}

		function saveGame(data) {
			// {"game":"diplo","level":"1", "score":"987000"}
			console.log(data)
		}

	</script>

</body>

</html>

<!--
	Bruno Moraes
	Fabio Marques
	James Campello
	Marcelo Kohl
	Vinicius Kleinsorgen
	Werter Meira
-->
