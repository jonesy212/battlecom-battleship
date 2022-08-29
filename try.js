function toDataURL(src, callback, outputFormat) {
    let image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    image.src = src;
    if (image.complete || image.complete === undefined) {
      image.src = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      image.src = src;
    }
  }
  toDataURL('https://www.gravatar.com/avatar/0c6523b4d3f60hj548962bfrg2350',
    function (dataUrl) {
      console.log('RESULT:', dataUrl)
    }
  )