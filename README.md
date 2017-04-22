# Clipboard + Lorem Ipsum

![clpsm logo](../master/_img/logo-256.png)   
<br>
The greatest tool you _always_ knew you never needed. 'Cause fuck those shitty monetized sites that take 3 clicks and 700 http requests to get to some text that you copied into a _Slack_ snippet back in the _Snow Leopard_ days but never starred.   

Now all of your _"rock star"_ design needs are just a mainline **npm** speedball away. Just make sure your terminal is running the latest version of [Bootstrap](https://giphy.com/gifs/tqKjGPAgbNVPq/html5) and supports [4k textures](http://media.kotaku.foxtrot.future.net.uk/wp-content/uploads/sites/52/2016/11/ac2.jpg).   
    
Nah, jk.. it just requires **xclip**. _sorry mac_ ;(
   
![screen recording](../master/_img/clpsm-rec.gif)
<br>

> Top notch stuff ...it's the next systemd!    

_- **Linus Torval** (Free Software Lobbyist)_   
<br>      

> Absolutely _not_ proprietary    

_- **Richard Stollnam** (Acronym Wizard)_   
<br>      
   

> Makes me rethink everything I thought I knew about the [Unix Philosophy](http://www.cinema52.com/2013/wp-content/uploads/2013/05/MalcolmExperiment2.png).    

_- **Dennis** (The Menace) **Ritchie**_   
<br>      
   

> Latin is the fundamental building block of our language.     

_- **Ms. Sullivan**, (6th Grade Literature)_
<br>   
   
# BASH   

### Use

- Run w/ no arguement
```bash
$ clpsm    # single paragraph is copied to clipboard, test w/ ctrl+v into text editor. nice.
```

- Run w/ number arguement. _(Go as high as you want, it'll loop through 5 paragraphs)_
```bash
$ clpsm -n 3   # get 3 paragraphs. sweet, look at those line breaks (oof).
```   

- That's it   

### Setup   

1. **xclip** dependency - install w/ whatever pkg manager. (**gnu/linux** only)   
```bash
$ pacman -S xclip
$ apt install xclip
etc...
```

2. Clone **clpsm** wherever you want & enter bash dir
```bash
$ git clone https://github.com/ngpfontaine/clpsm.git && cd clpsm/bash
```

3. Make it executable.
```bash
$ chmod +x clpsm
```

4. Run setup. a symlink will be created from the cloned location to **/bin/clpsm**
```bash
$ bash clpsm -setup
```

5. Now you're ready to [**petram**](https://giphy.com/gifs/3o7ZeHcgOVi36JZtzG/html5).   

# NODE JS

- to-do

---

### More
website: [nicfontaine.com](https://nicfontaine.com)  
twitter: [@ngpfontaine](https://twitter.com/ngpfontaine)

### License
Use it, break it, complain, wtvr.
