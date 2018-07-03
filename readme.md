# Clipboard + Lorem Ipsum

![clpsm logo](../master/_img/clpsm-logo-horizontal.png)   
<br>
The greatest tool you _always_ knew you never needed. 'Cause fuck those shitty monetized sites that take 3 clicks and 700 http requests to get to some text that you copied into a _Slack_ snippet back in the _Snow Leopard_ days but never starred.   

Now all of your _"rock star"_ design needs are just a mainline **npm** speedball away. Just make sure your terminal is running the latest version of [Bootstrap](https://giphy.com/gifs/tqKjGPAgbNVPq/html5) and supports [4k textures](http://media.kotaku.foxtrot.future.net.uk/wp-content/uploads/sites/52/2016/11/ac2.jpg).   
    
Nah, jk.. it just requires **xclip**. _sorry mac_ ;(
   
![screen recording](../master/_img/clpsm-rec.gif)
<br>

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

_- **Ms. Sullivan**, (6th Grade Literature)_
<br>   

### Repo

```
clpsm
├── _img               # logo & screen recordings for readme
├── bash           
│   └── clpsm          # bash script
└── node
    └── clpsm.js       # node script
    └── package.json
    └── readme.md  
```


### Node JS Setup

`sudo npm install clpsm -g`   

[npmjs.com/package/clpsm](https://www.npmjs.com/package/clpsm)    
   
# USE     

- Basic
```bash
$ clpsm    # single paragraph is copied to clipboard, test w/ ctrl+v into text editor. nice.
```

- Number arguement. _(Go as high as you want, it'll loop through 5 paragraphs)_
```bash
$ clpsm 3   # get 3 paragraphs. sweet, look at those line breaks (oof).
```   

- Short paragrahps
```bash
$ clpsm 5 -s   # get 5 short paragraphs. #features
```   

- That's it      

---

### More
website: [nicfontaine.com](https://nicfontaine.com)  
twitter: [@ngpfontaine](https://twitter.com/ngpfontaine)

### License
Use it, break it, complain, wtvr.
