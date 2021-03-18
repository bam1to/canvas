window.addEventListener('DOMContentLoaded', () => {
    const [canvas1, canvas2] = document.querySelectorAll(".cnv"),
        ctx_1 = canvas1.getContext('2d'),
        ctx_2 = canvas2.getContext('2d');

    const value = 2;

    const img = new Image();
    img.src = 'UzyLqFp2waI.jpg';

    img.onload = () => {
        ctx_1.drawImage(img, 0, 0, 300, 150);
        drawNewPic();
    };

    function drawNewPic() {
        const imgData = ctx_1.getImageData(0, 0, 300, 150);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = imgData.data[i] + value;
            imgData.data[i + 1] = imgData.data[i] + value;
            imgData.data[i + 2] = imgData.data[i] + value;
        }
        ctx_2.putImageData(imgData, 0, 0);
    };
});

