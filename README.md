# CLPSM

> clipboard + lorem ipsum
   
   
### Use   

- Run w/ no arguement.
```bash
$ clpsm    # 1 paragraph is copied to clipboard, test w/ ctrl+v into text editor. nice.
```

- Run w/ number arguement. (Go as high as you want, it'll loop through 5 paragraphs)
```bash
$ clpsm -n 3   # get 3 paragraphs. sweet.
```    

---


### Setup   

1. **xclip** dependency - install w/ whatever pkg manager.    

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


### More
Check out my website at [nicfontaine.com](https://nicfontaine.com)  
Twitter: [@ngpfontaine](https://twitter.com/ngpfontaine)

### License
Use it, break it, complain, wtvr.
