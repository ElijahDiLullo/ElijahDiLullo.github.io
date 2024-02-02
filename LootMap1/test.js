document.addEventListener("DOMContentLoaded", function () {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#interactive'),
            },
            decoder: {
                readers: ['ean_reader']
            }
        }, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected(function (result) {
            alert("Barcode detected: " + result.codeResult.code);
            // You can handle the barcode data as needed.
        });
    } else {
        alert("Your browser doesn't support barcode scanning.");
    }
});