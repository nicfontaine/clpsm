#! /usr/bin/env node
(function(){"use strict"})()

/*
(Note) Add decription...
*/

const clipboardy = require('clipboardy')
const lorem = require("./p.js") // Lorem ispum text

var clpsm = function (plen, flags = []) {

	return new Promise((resolve, reject) => {

		// Create stupid success message
		var wot = {
			txt: ['sikk','yayy','yas queen','ah-fucking-mazing'],
			gen: function() { return Math.floor(Math.random() * this.txt.length) }
		}

		var out = {
			clip: "", // Hold clipboard output
			console: "", // Hold console out.console
			lorem: lorem.content.short, // Hold source of clipboard output text. REGULAR by default, initial loop will update to SHORT if -s is found
			short: "", // String to add to console output if short
			tagged: "", // String to add to console output if tagged
			pPre: "", // Text to go before each p. For <p> tags
			pPost: "", // Text to go after each p. For <p> tags
			lineEnd: "\n\n" // Carriage return for formatting. Store here in case I wanna remove
		}

		// Set source & console strings from flags
		if (flags.length) {
			if (flags.indexOf("s") > -1) {
				out.lorem = lorem.content.short
				out.short = "short "
			}
			if (flags.indexOf("p") > -1) {
				out.tagged = "tagged "
				out.pPre = "<p>"
				out.pPost = "</p>"
			}
		}

		// No args, just handle as 1
		if (plen === undefined && flags.length === 0) {
			plen = 1
			out.clip = out.lorem[Math.floor(Math.random() * out.lorem.length)] + out.lineEnd
			out.console = ">> clpsm\'d 1 paragraph. " + wot.txt[wot.gen()]
		}
		// plen not a number
		else if (typeof plen !== "number" || isNaN(plen)) {
			let msg = "[ERROR] oops, clpsm() takes a number as the first argument"
			reject(msg)
		}
		// plen 0 or less
		else if (plen < 1) {
			let msg = "[ERROR] oops, number argument must be >= 1"
			reject(msg)
		}
		// plen valid number
		else {
			// Loop & create lorem ipsum output
			for (let k=0; k < plen; k++) {
				// No line break on last paragraph
				if (k == (plen-1)) {
					// Reset to 0 index if greater than array length
					let pInd = k > out.lorem.length-1 ? k%5 : k
					out.clip += out.pPre + out.lorem[pInd] + out.pPost
				}
				// All other parapraphs
				else {
					let pInd = k > out.lorem.length-1 ? k%5 : k
					out.clip += out.pPre + out.lorem[pInd] + out.pPost + out.lineEnd
				}
			}

			// Create console msg from args
			let strP = plen==1 ? "paragraph" : "paragraphs"
			out.console = ">> clpsm\'d " + plen + " " + out.short + out.tagged + strP + ". " + wot.txt[wot.gen()]

		}

		// Direct call from Command line. Copy to clipboard & output success console message
		if (require.main === module) {
			clipboardy.write(out.clip)
				.then(res => {
					if (out.console.length > 1)
						resolve(out.console)
					resolve()
				})
				.catch( err => {
					reject("[CLIPBOARD ERR] " + err)
				})
		}
		// Clpsm used as module. resolve output
		else {
			resolve(out.clip)
		}

	})

}

// Called directly, parse args
if (require.main === module) {

	let flags = [] // Hold all flags as strings
	let plen = undefined // Number argument, for paragraph length
	let argv = process.argv
	let l = argv.length
	let i = 2 // Loop index number
	let err = [] // Hold erroneous commands. Return if found, skipping clpsm()
	
	for (i; i < l; i++) {
		let ar = argv[i]
		// Number for paragraph length
		if (typeof ar === "number" || !isNaN(ar)) {
			if (ar > 0) {
				plen = Number(ar)
			}
		}
		// Short flag. Source short paragraphs
		else if (ar == "-s") {
			flags.push("s")
		}
		// Parapraph tag flag. Surround paragraphs in html tags
		else if (ar == "-p") {
			flags.push("p")
		}
		// Unrecognized command
		else {
			err.push("unrecognized command: " + ar)
		}
	}

	// Error from initial parsing
	if (err.length) {
		for (let i=0; i < err.length; i++) {
			console.log("[ERROR] " + err[i])
		}
		return
	}

	// Send args to clpsm()
	clpsm(plen, flags)
		.then(res => {
			console.log(res)
		}, err => {
			console.log(err)
		})

}

module.exports = clpsm