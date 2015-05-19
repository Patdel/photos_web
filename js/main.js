
var paragraphOne = document.getElementsByClassName('intro');

var elText = paragraphOne[0].innerHTML;

elText = elText.replace('This is a web page devoted to showing pictures of New York and other places that catch my attention as I learn to develop an eye for corners, spaces, people, and environments that seem to go away as soon as I pass them by with me body, my thoughts, and my intentions. Many of these places hold moments that are fleeting, but that live within a specific light, a specific mood, and a specific sensation. I invite you to explore these images so you can better appreciate the art of looking and  living', 'This is an experiment in the use of JavaScript selectors and I do hope it works!');

paragraphOne[0].innerHTML = elText;
