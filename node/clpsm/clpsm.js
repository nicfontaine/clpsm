#! /usr/bin/env node

const clip = require('clipboardy')

const helpText = '$ clpsm -n 1        1 paragraphs\n$ clpsm -n 5        5 paragraphs'
const wot = ['sikk','yayy','yas queen','ah-fucking-mazing']
const p = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas finibus mauris eu gravida. Nunc convallis eget tellus a auctor. Nam ultricies ex ut nunc ultricies, eget porttitor est malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nibh nunc, maximus eu sapien ac, convallis ultricies quam. Sed dictum lorem ut libero ornare, quis porta tellus pellentesque. Vivamus vitae feugiat metus. Proin eleifend congue sapien, at convallis neque. Sed dignissim euismod porttitor. Pellentesque molestie dictum tellus, vel pretium risus tincidunt sit amet.',
	'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer cursus porttitor eros facilisis pretium. Curabitur tempor mi ac congue efficitur. Donec interdum justo vel turpis molestie, a finibus enim consequat. Proin pellentesque nisi vitae lectus iaculis condimentum. Nullam et lacus hendrerit, molestie turpis et, gravida ex. Fusce gravida, ipsum in pretium vulputate, velit lorem lacinia metus, ut vulputate erat nisl vitae justo. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra est et nibh hendrerit, sit amet mollis arcu rhoncus. Cras porttitor pharetra mauris, consectetur fermentum augue pellentesque in. Suspendisse in viverra dolor. Proin nec felis enim. Mauris ut quam eu elit rutrum fermentum eu ut mauris. Suspendisse in cursus felis, ac tempor neque. Curabitur id molestie justo.',
	'Sed interdum id turpis at placerat. Quisque a enim et odio luctus tincidunt. Maecenas vel massa ligula. Quisque diam libero, dictum vel consequat vitae, pretium nec urna. Proin fermentum, orci vitae porta rutrum, massa sem facilisis sapien, vel suscipit est nunc quis odio. Duis egestas, orci ac tristique egestas, lectus ex finibus nibh, quis fermentum magna diam fermentum diam. Curabitur porttitor lorem quam, eget mollis purus varius pulvinar. Nunc euismod dictum nisl eget ultricies. Vestibulum aliquet eget odio sit amet iaculis. Curabitur blandit, dui sed vestibulum gravida, diam velit mattis massa, vel interdum metus ipsum ac odio. Donec egestas faucibus purus eu finibus. Vivamus pharetra congue neque, ut cursus arcu vestibulum a. Etiam blandit urna nec semper convallis.',
	'Ut pretium elit posuere ex laoreet, in fermentum quam ornare. Aliquam in volutpat massa, eget ultrices risus. Duis cursus erat facilisis aliquet consequat. Fusce at elit egestas, lacinia enim consectetur, vehicula velit. Pellentesque mollis nisi et velit placerat egestas. Nunc in auctor orci. Mauris id rutrum nibh, vel mattis velit. Integer sed tortor massa. Nullam et turpis urna. Aliquam eleifend diam vitae sem placerat faucibus. Nullam et tortor eu mi ullamcorper fermentum at nec velit. Maecenas porttitor, felis vel aliquet aliquet, mi neque fermentum erat, nec pretium risus magna quis est. Morbi scelerisque, magna id tincidunt efficitur, leo elit gravida magna, at eleifend arcu nisi a nulla. Vivamus venenatis dolor turpis.',
	'Etiam interdum vulputate facilisis. Pellentesque vel lobortis magna, eu dictum magna. Curabitur erat justo, rutrum vel feugiat eu, semper eget erat. Cras eget ornare velit. Phasellus vitae diam eget justo dignissim dignissim. Praesent sed rutrum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tempus magna vitae pulvinar malesuada. Proin sit amet euismod ipsum, a pharetra massa. Ut massa enim, laoreet facilisis ipsum id, luctus porta justo.'
]

var ar01 = process.argv[2]
var ar02 = process.argv[3]

if (ar01 === undefined) {
	clip.write(p[0])
	console.log('>> clpsm\'d 1 paragraph. ' + wot[genWot()])
}
else if (ar01 === '--help') {
	console.log(helpText)
}
else if (ar01 === '-n') {
	let num = ar02
	let pCont = ''

	if (ar02 < 0) {
		console.log('soo.. you want me to, remove items, from your clipboard..  what?')
	}
	else if (ar02 == 0) {
		console.log('great! nothing happened, sooo glad i could help..')
	}
	// regular numbers
	else if (!isNaN(num)) {
		
		for (var i=0; i<num; i++) {
			// no line break on last
			if (i == (num-1)) {
				if (i > p.length-1) {
					pCont += p[i%5]
				}
				else {
					pCont += p[i]
				}
			}
			// all others
			else {
				if (i > p.length-1) {
					let adj = i%5
					pCont += p[adj] + '\n'
				}
				else {
					pCont += p[i] + '\n'
				}
			}
		}
		// copy to clipboard
		clip.write(pCont)
		if (num == 1) {
			console.log('>> clpsm\'d 1 paragraph. ' + wot[genWot()])
		}
		else {
			console.log('>> clpsm\'d ' + num + ' paragraphs. ' + wot[genWot()])
		}
	}
	else {
		console.log('ye got yer number mixed up ya dingus')
	}

}
else {
	console.log('hmmm, wtf is that...?')
	console.log('maybe try:\n$ clpsm: --help')
}

function genWot() {
	return Math.floor(Math.random() * wot.length)
}
