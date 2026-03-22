const message = `Happy Monthsary, my love! 💙 Thank you for being so understanding and patient with me, and thank you din sa effort mo. Kahit malayo tayo, gumagawa ka parin ng paraan para iparamdam sakin yung love at appreciation mo. Sobrang thank you talaga… sobrang swerte ko na may maldita akong gf hahaha. Kahit ginapa-bulag na ta ni tita, you still choose to stay. Hayss grabe naman yan uy hahaha. I love you sooooooo much!
\nSincerely, \nYour raigbeiter gf.`;

function showLetter() {
  // Hide intro text and button
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  // Play background music
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    console.log("Autoplay blocked. Click to play music manually.");
  });

  // Show letter with typewriter effect
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
