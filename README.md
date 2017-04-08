# CLPSM

**Clipboard + Lorem Ipsum**. The greatest tool you _always_ knew you never needed. Cause fuck those shitty monetized sites that take 3 clicks and 700 http requests to get to some text that you copied into a _Slack_ snippet back in the _Snow Leopard_ days but never starred.   

Now all of your _"rock star"_ design needs are just a mainline **npm** speedball away. Just make sure your terminal has the latest version of [Bootstrap](https://giphy.com/gifs/tqKjGPAgbNVPq/html5) installed and supports _4k textures_. Quick, now [`rm -rf`](https://giphy.com/gifs/3o8doR2qGIXQDGCVoY/html5) all that shit and install **xclip**; that's all it requires.
   
<br>

> Top notch stuff ...it's the next systemd!    

_- **Linus Stallman** (Free Software Lobbyist)_   
<br>      
   

> Makes me rethink everything I thought I knew about the [Unix Philosophy](http://www.cinema52.com/2013/wp-content/uploads/2013/05/MalcolmExperiment2.png).    

_- **Dennis** (The Menace) **Ritchie**_   
<br>      
   

> Latin is the fundamental building block of our language.     

_- **Ms. Sullivan**, (6th Grade Literature)_
<br>     
   
# Use   

- Run w/ no arguement.
```bash
$ clpsm    # single paragraph is copied to clipboard, test w/ ctrl+v into text editor. nice.
```

- Run w/ number arguement. _(Go as high as you want, it'll loop through 5 paragraphs)_
```bash
$ clpsm -n 3   # get 3 paragraphs. sweet, look at those line breaks (oof).
```   

# Setup   

1. **xclip** dependency - install w/ whatever pkg manager.    
```bash
$ pacman -S xclip
$ apt install xclip
etc...
```

2. Clone **clpsm** wherever you want & enter dir.
```bash
$ git clone https://github.com/ngpfontaine/clpsm.git && cd clpsm
```

3. Make it executable.
```bash
$ chmod +x clpsm
```

4. Run setup. a symlink will be created from the cloned location to **/bin/clpsm**.
```bash
$ bash clpsm -setup
```

---

### More
Check out my website at [nicfontaine.com](https://nicfontaine.com)  
Twitter: [@ngpfontaine](https://twitter.com/ngpfontaine)

### License
Use it, break it, complain, wtvr.
