import { saveAs } from 'file-saver';

const downloadImage = () => {
  var canvas = document.getElementById('canvas-chart');

  canvas.toBlob(function (blob) {
    saveAs(blob, 'chart-image.png');
  });

  console.log(canvas);
};

export default downloadImage;
