# lazytube - Lazy loading for Youtube Videos

With this script it is possible to load YouTube videos at the click of a button.

**Still work in progress. Feedback and pull requests are welcome.**

## Usage

#### HTML

And embed the YouTube video with a `data-src` instead of a `src` attribute and an extra `data-poster`-Attrbute:
```
<iframe
    class="lazytube"
    data-poster="./previewImageProxy.php?youtubeid=otCp0CjTX3s"
    data-src="https://www.youtube-nocookie.com/embed/otCp0CjTX3s?autoplay=1"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
></iframe>
```

#### JavaScript

Insert the `lazytube.js` in before your closing body tag:

```
<script type="application/javascript" src="lazytube.js"></script>
```

Then you can create an instance of it:
```
var myLazytube = new Lazytube();
```

Optionally, you can pass options:
```
var myLazytube = new Lazytube({
    selector: '.lazytube',
    hintText: 'My own hint',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textColor: '#fff',
    ownStyles: false
});
```

### Options

For every instance of _Lazytube_ you can pass in some options, to alter its default behaviour.
Here's the list of the options.

| Name | Meaning | Default value |
| ---- | ----| ---- |
| `selector` | The selector to find the iFrame(s). | `.lazytube` |
| `hintText` | Der Hinweistext, dass das YouTube-iFrame geladen wird und damit Cookies gesetzt werden | `'To activate the video, click here'` |
| `backgroundColor` | The background color of the overlay | `rgba(0, 0, 0, 0.6)` |
| `textColor` | The text color of the note text. | `#ffffff` |
| `ownStyles` | Set to `true` if you want to use your own CSS styles. | `false` |

### Preview image proxy

To not load the preview image directly from YouTube and thus reveal the IP address of the user, you can simply use a small proxy script.
Just put the [previewImageProxy.php](previewImageProxy.php) script on your own server and put `www.my-domain.com/previewImageProxy.php?youtubeid=MyYYouTubeId` as poster path.

Alternatively, you can configure your own web server (e.g. NGINX or Apache) as a proxy for the preview images.


## Demo / Example

See `example.html` or this [CodePen](https://codepen.io/anon/pen/xjmLNa/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
