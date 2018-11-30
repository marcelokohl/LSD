<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>LSD</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
	<link rel="manifest" href="appmanifest.json">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="apple-touch-icon" sizes="128x128" href="icons/icon-128.png">
	<link rel="apple-touch-icon" sizes="256x256" href="icons/icon-256.png">
	<link rel="apple-touch-icon" sizes="512x512" href="icons/icon-512.png">
	<link rel="icon" type="image/png" href="icons/icon-512.png">

	<style media="screen">
		@import url('https://fonts.googleapis.com/css?family=Fredoka+One');

		html, body, canvas {
			touch-action: none;
			touch-action-delay: none;
		}
		html, body {
			padding: 0;
			margin: 0;
			overflow: hidden;

			background: #fff;
			color: white;
		}
		body {
			width: 100vw;
			height: 100vh;
			background-color: #000;
		}
		canvas {
			position: relative;
			z-index: 1;
		}
		.loader {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 0;
			font-family: 'Fredoka One';
	    font-size: 34px;
		}
		.loader span {
			position: relative;
		}
		.loader span:after {
			animation: loader 3s infinite;
	    content: "";
	    position: absolute;
	    top: 0;
	    left: 100%;
		}
		@keyframes loader {
			0% {
				content: ""
			}
			25% {
				content: "."
			}
			50% {
				content: ".."
			}
			75% {
				content: "..."
			}
		}
	</style>

</head>
<body>
	<div class="loader">
		<span>
			Loading
		</span>
	</div>
	<script type="text/javascript">

	setTimeout(function() {
		console.log('vai chamar o parent');
		parent.endArcade(1234356)
	}, 4000)

		var loading = true

		function gameStart() {
			loading = false
		}

		var is_mobile = ((typeof window.orientation !== 'undefined')).toString();
		function isMobile() {
			return is_mobile;
		}
		function goToFront() {
			// parent.goToFront()
			setTimeout(function(){ window.location.href = 'http://lsd-game.herokuapp.com'; }, 6000);
		}
		function gameName() {
			// return parent.gameName()
			return "<?php echo $_GET['g'] ?>"
		}
		function gameLevel() {
			// return parent.gameLevel()
			return "<?php echo $_GET['l'] ?>"
		}
		function endArcade(score) {
			parent.endArcade(score)
		}

		// function saveGame(data) {
		// 	parent.saveGame(data)
		// }
		// function loadGame() {
		// 	return parent.loadGame()
		// }

	</script>
	<script src="c2runtime.js"></script>
	<script src="start.js"></script>
</body>
</html>
