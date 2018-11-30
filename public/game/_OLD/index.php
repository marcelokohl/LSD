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
		/* #loader {
		width: 100vw;
		height: calc(100vh - 120px);
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('loader/1.png');
		position: absolute;
		z-index: 0;
		} */
		/* .logo {
			width: 100vw;
			height: calc(100vh - 274px);
			background-image: url('loading.png');
			background-repeat: no-repeat;
			background-position: center;
			position: absolute;
			z-index: 0;
		} */
	</style>

</head>
<body>
	<!-- <div class="logo">

	</div>
	<div id="loader">

	</div> -->
	<div class="loader">
		<span>
			Loading
		</span>
	</div>
	<script type="text/javascript">
		var loading = true
		// var i = 1;
		// setInterval(function(){
		// 	document.getElementById("loader").style.backgroundImage = "url('loader/"+i+".png')";
		// 	i = i==3?1:++i;
		// }, 300);

		// setTimeout(function() {
		//
		// },200)

		function gameStart() {
			loading = false
		}

		var is_mobile = ((typeof window.orientation !== 'undefined')).toString();
		function isMobile() {
			return is_mobile;
		}
		function goToFront() {
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

		function saveGame(data) {
			parent.saveGame(data)
		}
		function loadGame() {
			return parent.loadGame()
		}

	</script>
	<script src="c2runtime.js"></script>
	<script src="start.js"></script>
	<!-- <script src="register-sw.js"></script> -->
</body>
</html>
