#! /usr/bin/env node
(function(){"use strict"})()

/*
(Note) Add decription...
*/

const clipboardy = require('clipboardy')
const lorem = require("./p.js") // Lorem ispum text
const version = "1.3.0"

var clpsm = function (plen, flags = []) {

	return new Promise((resolve, reject) => {

		// Create stupid success message
		var wot = {
			txt: ["sikk","yayy","boom","well played!", "EZ"],
			gen: function() { return Math.floor(Math.random() * this.txt.length) }
		}

		var out = {
			clip: "", // Hold clipboard output
			console: "", // Hold console out.console
			lorem: lorem.content.medium, // Hold source of clipboard output text. MEDIUM by default, initial loop will update to SHORT if -s is found
			len: "", // String to add to console output if short
			tagged: "", // String to add to console output if tagged
			pPre: "", // Text to go before each p. For <p> tags
			pPost: "", // Text to go after each p. For <p> tags
			lineEnd: "\n\n" // Carriage return for formatting. Store here in case I wanna remove
		}

		const flagOut = {
			s: () => {
				out.lorem = lorem.content.short
				out.len = "short "
			},
			l: () => {
				out.lorem = lorem.content.long
				out.len = "long "
			},
			p: () => {
				out.tagged = "tagged "
				out.pPre = "<p>"
				out.pPost = "</p>"				
			}
		}

		// Set source & console strings from flags
		for (let f of flags) flagOut[f]()

		// No args, just handle as 1
		if (plen === 1) {
			plen = 1
			out.clip = out.pPre + out.lorem[Math.floor(Math.random() * out.lorem.length)] + out.pPost
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
		// plen greater than 100
		else if (plen > 100) {
			// let msg = "[WARNING] that\'s a lot of lorem ipsum... just capping it at 100"
			plen = 100
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

		}

		// Create console msg from args
		let strP = plen==1 ? "paragraph" : "paragraphs"
		out.console = ">> clpsm\'d " + plen + " " + out.len + out.tagged + strP + ". " + wot.txt[wot.gen()]

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
	let plen = 1 // Number argument, for paragraph length
	let argv = process.argv
	let l = argv.length
	let i = 2 // Loop index number
	let err = [] // Hold erroneous commands. Return if found, skipping clpsm()
	let helpText = "CLPSM Commands:\n\n" +
		"$ clpsm              # Single paragraph" + "\n" +
		"$ clpsm 3            # 3 paragraphs" + "\n" +
		"$ clpsm 50 -s        # 50 short paragraphs" + "\n" +
		"$ clpsm 5 -pl       # 5 long, html tagged paragraphs" + "\n"
	
	// Check arguments
	for (i; i < l; i++) {
		let ar = argv[i]
		// Help
		if (ar === "--help" || ar === "-h") {
			return console.log(helpText)
		}
		// Version
		else if (ar === "--version" || ar === "-v") {
			return console.log("CLPSM " + version)
		}
		// Number for paragraph length
		else if (typeof ar === "number" || !isNaN(ar)) {
			if (ar > 0) {
				plen = Number(ar)
			}
		}
		else if (ar.indexOf("-") === 0 && ar.indexOf("--") < 0) {
			let spl = ar.substring(1).split("")
			flags = flags.concat(spl)
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
