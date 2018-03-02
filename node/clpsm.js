#! /usr/bin/env node

const clip = require('clipboardy')

const text = {
	help: "EXAMPLES:\n" +
		"$ clpsm             1 paragraph\n" +
		"$ clpsm 5           5 paragraphs\n" +
		"$ clpsm 3 -s        3 short paragraphs",
	wot: ['sikk','yayy','yas queen','ah-fucking-mazing'],
	p: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas finibus mauris eu gravida. Nunc convallis eget tellus a auctor. Nam ultricies ex ut nunc ultricies, eget porttitor est malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nibh nunc, maximus eu sapien ac, convallis ultricies quam. Sed dictum lorem ut libero ornare, quis porta tellus pellentesque. Vivamus vitae feugiat metus. Proin eleifend congue sapien, at convallis neque. Sed dignissim euismod porttitor. Pellentesque molestie dictum tellus, vel pretium risus tincidunt sit amet.',
		'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer cursus porttitor eros facilisis pretium. Curabitur tempor mi ac congue efficitur. Donec interdum justo vel turpis molestie, a finibus enim consequat. Proin pellentesque nisi vitae lectus iaculis condimentum. Nullam et lacus hendrerit, molestie turpis et, gravida ex. Fusce gravida, ipsum in pretium vulputate, velit lorem lacinia metus, ut vulputate erat nisl vitae justo. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est et nibh hendrerit, sit amet mollis arcu rhoncus. Cras porttitor pharetra mauris, consectetur fermentum augue pellentesque in. Suspendisse in viverra dolor. Proin nec felis enim. Mauris ut quam eu elit rutrum fermentum eu ut mauris. Suspendisse in cursus felis, ac tempor neque. Curabitur id molestie justo.',
		'Sed interdum id turpis at placerat. Quisque a enim et odio luctus tincidunt. Maecenas vel massa ligula. Quisque diam libero, dictum vel consequat vitae, pretium nec urna. Proin fermentum, orci vitae porta rutrum, massa sem facilisis sapien, vel suscipit est nunc quis odio. Duis egestas, orci ac tristique egestas, lectus ex finibus nibh, quis fermentum magna diam fermentum diam. Curabitur porttitor lorem quam, eget mollis purus varius pulvinar. Nunc euismod dictum nisl eget ultricies. Vestibulum aliquet eget odio sit amet iaculis. Curabitur blandit, dui sed vestibulum gravida, diam velit mattis massa, vel interdum metus ipsum ac odio. Donec egestas faucibus purus eu finibus. Vivamus pharetra congue neque, ut cursus arcu vestibulum a. Etiam blandit urna nec semper convallis.',
		'Ut pretium elit posuere ex laoreet, in fermentum quam ornare. Aliquam in volutpat massa, eget ultrices risus. Duis cursus erat facilisis aliquet consequat. Fusce at elit egestas, lacinia enim consectetur, vehicula velit. Pellentesque mollis nisi et velit placerat egestas. Nunc in auctor orci. Mauris id rutrum nibh, vel mattis velit. Integer sed tortor massa. Nullam et turpis urna. Aliquam eleifend diam vitae sem placerat faucibus. Nullam et tortor eu mi ullamcorper fermentum at nec velit. Maecenas porttitor, felis vel aliquet aliquet, mi neque fermentum erat, nec pretium risus magna quis est. Morbi scelerisque, magna id tincidunt efficitur, leo elit gravida magna, at eleifend arcu nisi a nulla. Vivamus venenatis dolor turpis.',
		'Etiam interdum vulputate facilisis. Pellentesque vel lobortis magna, eu dictum magna. Curabitur erat justo, rutrum vel feugiat eu, semper eget erat. Cras eget ornare velit. Phasellus vitae diam eget justo dignissim dignissim. Praesent sed rutrum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tempus magna vitae pulvinar malesuada. Proin sit amet euismod ipsum, a pharetra massa. Ut massa enim, laoreet facilisis ipsum id, luctus porta justo.'
	],
	ps: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas finibus mauris eu gravida. Nunc convallis eget tellus a auctor. Nam ultricies ex ut nunc ultricies, eget porttitor est malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nibh nunc, maximus eu sapien ac, convallis ultricies quam.',
		'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer cursus porttitor eros facilisis pretium. Curabitur tempor mi ac congue efficitur. Donec interdum justo vel turpis molestie, a finibus enim consequat. Proin pellentesque nisi vitae lectus iaculis condimentum.',
		'Sed interdum id turpis at placerat. Quisque a enim et odio luctus tincidunt. Maecenas vel massa ligula. Quisque diam libero, dictum vel consequat vitae, pretium nec urna. Proin fermentum, orci vitae porta rutrum, massa sem facilisis sapien, vel suscipit est nunc quis odio. Duis egestas, orci ac tristique egestas, lectus ex finibus nibh, quis fermentum magna diam fermentum diam.',
		'Ut pretium elit posuere ex laoreet, in fermentum quam ornare. Aliquam in volutpat massa, eget ultrices risus. Duis cursus erat facilisis aliquet consequat. Fusce at elit egestas, lacinia enim consectetur, vehicula velit. Pellentesque mollis nisi et velit placerat egestas. Nunc in auctor orci. Mauris id rutrum nibh, vel mattis velit.',
		'Etiam interdum vulputate facilisis. Pellentesque vel lobortis magna, eu dictum magna. Curabitur erat justo, rutrum vel feugiat eu, semper eget erat. Cras eget ornare velit. Phasellus vitae diam eget justo dignissim dignissim. Praesent sed rutrum justo.'
	]
}

var out = {
	clip: "", // Hold clipboard output
	console: "", // Hold console out.console
	pSource: text.p, // Hold source of clipboard output text. text.p by default, initial loop will update to text.ps if -s is found
	short: "" // string to add to console output if short or not
}

// Save argument info
var ar = {
	l: process.argv.length,
	all: []
}

//
// Logic
//

// Loop through all arguments to log
for (var i=0; i<ar.l; i++) {
	ar.all.push(process.argv[i])
	if (process.argv[i] == "-s") {
		out.pSource = text.ps
		out.short = "short "
	}
}

// No arguments
if (ar.l < 3) {
	out.clip = text.p[0]
	out.console = '>> clpsm\'d 1 paragraph. ' + text.wot[genWot()]
}
else {
	// Loop again to execute, skip first 2
	for (var j=2; j<ar.all.length; j++) {

		var x = ar.all[j]

		// Help
		if (x === '--help') {
			out.console = text.help
		}
		// Short
		else if (x == "-s") {
			// No other args
			if (ar.l < 4) {
				out.console = ">> clpsm\'d 1 short paragraph"
				out.clip = out.pSource[0]
			}
		}
		else {

			if (typeof x === 'number' || !isNaN(x)) {
				
				if (x < 0) {
					out.console = 'soo.. you want me to, remove items, from your clipboard..  what?'
				}
				else if (x == 0) {
					out.console = 'great! nothing happened, sooo glad i could help..'
				}
				// regular numbers
				else {
					for (var k=0; k<x; k++) {
						// no line break on last
						if (k == (x-1)) {
							if (k > out.pSource.length-1) {
								out.clip += out.pSource[k%5]
							}
							else {
								out.clip += out.pSource[k]
							}
						}
						// all others
						else {
							if (k > out.pSource.length-1) {
								let adj = k%5
								out.clip += out.pSource[adj] + '\n\n'
							}
							else {
								out.clip += out.pSource[k] + '\n\n'
							}
						}
					}

					// copy to clipboard
					let strP = x==1 ? "paragraph" : "paragraphs"

					out.console = ">> clpsm\'d " + x + " " + out.short + strP + ". " + text.wot[genWot()]
				}
			}
			else {
				out.console = 'hmmm, wtf is that...?'
				out.console = 'maybe try:\n$ clpsm: --help'
			}

		}
		
	}
}

// Console Output
if (out.console.length > 1) {
	console.log(out.console)	
}

// Clip Output
if (out.clip.length > 1) {
	clip.write(out.clip)
}

function genWot() {
	return Math.floor(Math.random() * text.wot.length)
}
