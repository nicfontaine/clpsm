#! /usr/bin/env node
(function(){"use strict"})()
/*
Loop
	save flags
	set source
Create output
*/
const clip = require('clipboardy')
// Lorem ispum files
const sourceP = require("./p.js")

var text = {
	help: "TRY:\n" +
		"$ clpsm             # 1 paragraph\n" +
		"$ clpsm 5           # 5 paragraphs\n" +
		"$ clpsm 3 -s        # 3 short paragraphs\n" +
		"$ clpsm 2 -s -p     # 2 short html tagged paragraphs",
	wot: ['sikk','yayy','yas queen','ah-fucking-mazing'],
	genWot: function() {  // Create stupid success message
		return Math.floor(Math.random() * this.wot.length)
	},
	p: sourceP.content.regular,
	ps: sourceP.content.short
}

var out = {
	clip: "", // Hold clipboard output
	console: "", // Hold console out.console
	pSource: text.p, // Hold source of clipboard output text. text.p by default, initial loop will update to text.ps if -s is found
	short: "", // String to add to console output if short
	error: [], // Will hold an erroneous argument
	tagged: "", // Srting to add to console output if tagged
	pPre: "", // Text to go before each p. For <p> tags
	pPost: "" // Text to go after each p. For <p> tags
}

// Save argument info
var ar = {
	l: process.argv.length,
	all: [],
	flags: {} // Will hold flags for -s -p
};

//
// Logic
//

(function() {

	ar.flags = {} // Reset
	
	for (let i=0; i<ar.l; i++) {
		ar.all.push(process.argv[i])
		// Short flag. Source short paragraphs
		if (process.argv[i] == "-s") {
			ar.flags.short = true
			out.pSource = text.ps
			out.short = "short "
		}
		// Parapraph tag flag. Surround paragraphs in html tags
		if (process.argv[i] == "-p") {
			ar.flags.tag = true
			out.tagged = "tagged "
			out.pPre = "<p>"
			out.pPost = "</p>"
		}
		if (process.argv[i] == "--help") {
			ar.flags.help = true
		}
	}

	// No arguments, just basic clpsm call
	if (ar.l < 3) {
		out.clip = text.p[0]
		out.console = '>> clpsm\'d 1 paragraph. ' + text.wot[text.genWot()]
	}
	else if (ar.flags.help) {
		out.console = text.help
		console.log(out.console)
	}
	// Arguments
	else {

		if (ar.l < 4) {
			if (ar.flags.short) {
				out.console = ">> clpsm\'d 1 short paragraph"
				out.clip = out.pSource[0]
			}
			if (ar.flags.tag) {
				out.console = ">> clpsm\'d 1 tagged paragraph"
				out.clip += out.pPre + out.pSource[0] + out.pPost
			}
		}

		// Loop again to execute, skip first 2
		for (let j=2; j<ar.all.length; j++) {
			// Hold arg we're interested in
			var x = ar.all[j]

			if (typeof x === 'number' || !isNaN(x)) {
				if (x < 0) {
					out.console = 'soo.. you want to, remove items, from your clipboard..  what?'
				}
				else if (x == 0) {
					out.console = 'great! nothing happened, sooo glad clpsm could help..'
				}
				// Regular numbers
				else {
					// Loop for paragraph arrays
					for (let k=0; k<x; k++) {
						// No line break on last paragraph
						if (k == (x-1)) {
							// Reset to 0 index if greater than array length
							let pInd = k > out.pSource.length-1 ? k%5 : k
							out.clip += out.pPre + out.pSource[pInd] + out.pPost
						}
						// All other parapraphs
						else {
							let pInd = k > out.pSource.length-1 ? k%5 : k
							out.clip += out.pPre + out.pSource[pInd] + out.pPost + "\n\n"
						}
					}

					// Copy to clipboard
					let strP = x==1 ? "paragraph" : "paragraphs"

					out.console = ">> clpsm\'d " + x + " " + out.short + out.tagged + strP + ". " + text.wot[text.genWot()]
				}
			}
				// Not recognized command or number
				else {
					// Add erroroneous arg to holder
					out.error.push(x)
				}
		
		}
	}

	// Clpsm success output
	if (out.clip.length) {
		clip.write(out.clip)
		// Console output
		if (out.console.length > 1) {
			console.log(out.console)
		}
	}
	// Error output
	else if (out.error.length) {
		let e = ""
		for (var i=0; i<out.error.length; i++) {
			e += out.error[i] + " "
		}
		out.console = ">> clpsm command(s) not recognized: " + e + "\n\n" +
			"maybe try:\n$ clpsm --help"
		console.log(out.console)
	}

})()
