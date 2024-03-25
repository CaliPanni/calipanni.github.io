window.onload = function() {
    const uploadInput = document.getElementById('uploadInput');
    const widthRange = document.getElementById('widthRange');
    const heightRange = document.getElementById('heightRange');
    const widthText = document.getElementById('widthText');
    const heightText = document.getElementById('heightText');
    const imagePreview = document.getElementById('imagePreview');
    const downloadButton = document.getElementById('downloadButton');

    uploadInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function() {
            imagePreview.src = reader.result;
            downloadButton.style.display = 'inline'; 
            imagePreview.style.display = 'inline'; 
        };

        reader.readAsDataURL(file);
    });

    widthRange.addEventListener('input', function() {
        const width = widthRange.value;
        imagePreview.style.width = width + 'px';
        widthText.textContent = width;
    });

    heightRange.addEventListener('input', function() {
        const height = heightRange.value;
        imagePreview.style.height = height + 'px';
        heightText.textContent = height;
    });

    downloadButton.addEventListener('click', function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const width = parseInt(widthRange.value);
        const height = parseInt(heightRange.value);
        canvas.width = width;
        canvas.height = height;
        context.drawImage(imagePreview, 0, 0, width, height);

        const link = document.createElement('a');
        link.download = 'resized_image.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
};
// Built on 25/03/2024 at 20:45