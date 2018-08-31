# Clipboard + Lorem Ipsum

![clpsm logo](https://nicfontaine.com/dev/clpsm-logo-horizontal.png)   
<br>
The greatest tool you _always_ knew you never needed. 'Cause fuck those shitty monetized sites that take 3 clicks and 700 http requests to get to some text that you copied into a _Slack_ snippet back in the _Snow Leopard_ days but never starred.   

Now all of your _"rock star"_ design needs are just a mainline **npm** speedball away. Just make sure your terminal is running the latest version of [Bootstrap](https://giphy.com/gifs/tqKjGPAgbNVPq/html5) and supports [4k textures](http://media.kotaku.foxtrot.future.net.uk/wp-content/uploads/sites/52/2016/11/ac2.jpg).   
    
Nah, jk.. it just uses **clipboardy**.   

# NPM

[npmjs.com/package/clpsm](https://www.npmjs.com/package/clpsm)    
   
# Use As Console > Clipboard

```bash
$ sudo npm i clpsm -g   # Install
$ clpsm                 # Single paragraph
$ clpsm 3               # 3 paragraphs
$ clpsm 50 -s           # 50 short paragraphs
$ clpsm 5 -s -p         # 5 short, html tagged paragraphs
```  

# Use As Module

```bash
$ npm i clpsm --save                # Install
```   

```javascript
const clpsm = require("clpsm")     // Require

clpsm(2,["p"]).then( text => {
    console.log(text)
  }, err => {
    console.log(err)
  })

// 2 html tagged paragraphs will be logged to console...
```

- Returns a promise with _Lorem Ipsum_ text
- Takes arguments: `(Number, ["s","p"])`   
	- `Number` is paragraph length
	- `[]` can contain flags for `s` short, or `p` html tagged paragraphs
	- Can also be called with no args, or just a Number

# Community Response

> Top notch stuff ...it's the next systemd!    

_- **Linus Torval** (Free Software Lobbyist)_   
<br>      

> Absolutely **not** proprietary    

_- **Richard Stollnam** (Acronym Wizard)_   
<br>      
   

> Makes me rethink everything I thought I knew about the [Unix Philosophy](http://www.cinema52.com/2013/wp-content/uploads/2013/05/MalcolmExperiment2.png).    

_- **Dennis** (The Menace) **Richie**_   
<br>      
   

> Latin is the fundamental building block of our language.     

_- **Mrs. Sullivan**, (6th Grade Literature)_
<br>   

---

### More
website: [nicfontaine.com](https://nicfontaine.com)  
twitter: [@ngpfontaine](https://twitter.com/ngpfontaine)

### License
Buy it, break it, trash it, trash it, change it, mail, upgrade it.
