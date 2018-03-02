#! /usr/bin/env node
'use strict'
const clip = require('clipboardy')
// Lorem ispum files
const sourceP = require("./p.js")
const sourcePS = require("./ps.js")

var text = {
	help: "EXAMPLES:\n" +
		"$ clpsm             1 paragraph\n" +
		"$ clpsm 5           5 paragraphs\n" +
		"$ clpsm 3 -s        3 short paragraphs",
	wot: ['sikk','yayy','yas queen','ah-fucking-mazing'],
	p: sourceP.content,
	ps: sourcePS.content
}

var out = {
	clip: "", // Hold clipboard output
	console: "", // Hold console out.console
	pSource: text.p, // Hold source of clipboard output text. text.p by default, initial loop will update to text.ps if -s is found
	short: "", // String to add to console output if short or not
	error: [] // Will hold an erroneous argument
}

// Save argument info
var ar = {
	l: process.argv.length,
	all: []
};

//
// Logic
//

(function() {

	// Loop through all arguments to log
	for (var i=0; i<ar.l; i++) {
		ar.all.push(process.argv[i])
		if (process.argv[i] == "-s") {
			out.pSource = text.ps
			out.short = "short "
		}
	}

	// No arguments, just simple call
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
				// Not recognized command or number
				else {
					// Add erroroneous arg to holder
					out.error.push(x)
				}

			}
			
		}
	}

	// Console Output
	if (out.console.length > 1) {
		console.log(out.console)
	}
	else if (out.error.length) {
		let e = ""
		for (var i=0; i<out.error.length; i++) {
			e += out.error[i] + " "
		}
		out.console = ">> clpsm command(s) not recognized: " + e + "\n\n" +
			"maybe try:\n$ clpsm --help"
		console.log(out.console)
	}

	// Clip Output
	if (out.clip.length > 1) {
		clip.write(out.clip)
	}
})()

function genWot() {
	return Math.floor(Math.random() * text.wot.length)
}
