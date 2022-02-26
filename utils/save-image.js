import { saveAs } from 'file-saver';

const downloadImage = (filename) => {
  var canvas = document.getElementById(filename);

  canvas.toBlob(function (blob) {
    saveAs(blob, `${filename}.png`);
  });
};

export default downloadImage;
