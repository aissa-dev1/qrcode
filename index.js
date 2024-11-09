const QRCode = require("qrcode");
const fs = require("fs");

const url = "your url here";

QRCode.toFile("qrcode.png", url, (err) => {
  if (err) throw err;
  console.log("QR code generated and saved to qrcode.png");
});
