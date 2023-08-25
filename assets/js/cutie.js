function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let loadingTexts = [
	"Measuring softness",
	"Inspecting tail",
	"Ruffling your hair",
	"Booping that snoot",
	"Checking blush intensity",
	"Patting ur head",
	"Calling you cute",
];

let cutieTexts = [
	"You are big cute",
	"You are mega cute",
	"You are super coot",
	"You are big cootie uwu",
	"You are absurdly cute",
	"You are very cute",
	"You are abso-cute-ie",
];
let oldLoadingText;

function setLoadingText() {
	let loadingText = Math.floor(Math.random() * loadingTexts.length);
	if(oldLoadingText != loadingText) {
		$('#loadingText').text(loadingTexts[loadingText]);
		oldLoadingText = loadingText;
	} else {
		setLoadingText();
	}
}

$(document).ready(function() {
	$('#checkCuteness').click(function() {
		$('#checkCuteness')[0].disabled = true;
		$('#poggersBarDiv').collapse('show');
		$('#loadingText').collapse('show');
		sleep(1000).then(() => {
			$('#poggersBar')[0].style.width = "10%";
			setLoadingText();
			sleep(2000).then(() => {
				$('#poggersBar')[0].style.width = "20%";
				setLoadingText();
				sleep(2000).then(() => {
					$('#poggersBar')[0].style.width = "50%";
					setLoadingText();
					sleep(2000).then(() => {
						$('#poggersBar')[0].style.width = "70%";
						setLoadingText();
						sleep(2000).then(() => {
							$('#poggersBar')[0].style.width = "100%";
							setLoadingText();
							sleep(3000).then(() => {
								$('#poggersBarDiv').collapse('hide');
								$('#loadingText').collapse('hide');
								$('#cutieText').collapse('show');
								sleep(1000).then(() => {
									$('#cutieText').text(cutieTexts[Math.floor(Math.random() * cutieTexts.length)]);
									setInterval(() => {
										if(!cutieTexts.includes($('#cutieText').text())) {
											$('#cutieText').text("You are cute, accept it >:(");
										}
									}, 100);
								});
							});
						});
					});
				});
			});
		});
	});
});
