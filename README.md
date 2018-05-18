# lazytube - Lazy loading for Youtube Videos

With this script it is possible to load YouTube videos at the click of a button.

**Still work in progress. Feedback and pull requests are welcome.**

## Usage

Insert the `lazytube.js` in before your closing body tag:

```
<script type="application/javascript" src="lazytube.js"></script>
```

And embed the YouTube video with a `data-src` instead of a `src` attribute and an extra `data-poster`-Attrbute:
```
<iframe
    class="lazytube"
    data-poster="https://img.youtube.com/vi/otCp0CjTX3s/maxresdefault.jpg"
    data-src="https://www.youtube-nocookie.com/embed/otCp0CjTX3s?autoplay=1"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
></iframe>
```

Then you can create an instance of it:
```
var myLazytube = new Lazytube();
```

Optionally, you can pass options:
```
var myLazytube = new Lazytube({
    hintText: 'My own hint',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textColor: '#fff'
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details