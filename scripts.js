const elements = document.getElementsByTagName("*");

for (let i=0; i< elements.length; i++) {
    ScrollReveal().reveal('"' + i + '"');
    console.log(i)
}
