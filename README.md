# CLPSM

Clipboard + lorem ipsum. The greatest tool you always knew you never needed. Cause fuck those shitty monetized sites that take 3 clicks and 700 http requests to get to some text that you copied into a slack snippet back in the Snow Leopard days but never starred.   

Now all of your "rock star" design needs are just a mainline npm speedball away. Just make sure your terminal has the latest version of Bootstrap installed and supports 4k textures. Quick, now `rm -rf` all that shit and install **xclip**; that's all it requires.
   
<br>

> Top notch stuff; it's the next systemd!    

_- **Linus Stallman** (Free Software Lobbyist)_   
<br>      
   

> Makes me rethink everything I thought I knew about the [Unix Philosophy](https://en.wikipedia.org/wiki/Chaos_theory).    

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
