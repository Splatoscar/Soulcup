// data.js
const armesSp1 = [
    { name: "Image1_1", url: "image/discord.png" },
    { name: "Image1_2", url: "image/Determination.png" },
    // Ajoute d'autres données d'images au besoin
];

const imagesData2 = [
    { name: "Image2_1", url: "image/discord.png" },
    { name: "Image2_2", url: "image/Determination.png" },
    // Ajoute d'autres données d'images au besoin
];

const imagesData3 = [
    { name: "Image3_1", url: "image/discord.png" },
    { name: "Image3_2", url: "image/Determination.png" },
    // Ajoute d'autres données d'images au besoin
];

function getRandomImage(imagesData) {
    return imagesData[Math.floor(Math.random() * imagesData.length)];
}

export { armesSp1, getRandomImage };
