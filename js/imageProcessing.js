import fs from 'fs'
import shuffleArray from './shuffleArray'

// Set the sizeRandom variable within the function
const sizeRandom = 10;
const answerOption = ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash']
function imageProcessing() {
  const imageLabelMap = {};

  // Read the CSV file and process image labels
  const csvFilePath = './trashCollection.csv';
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      const image_path = row[0];
      const label = parseInt(row[1]);
      imageLabelMap[image_path] = label;
    })
    .on('end', () => {
      // Shuffle and select random keys from the imageLabelMap
      const randomKeys = shuffleArray(Object.keys(imageLabelMap)).slice(0, sizeRandom);

      // Create objects with image path, label, and additional properties
      const randomImageLabelList = randomKeys.map((key) => {
        return {
        //   question: key,
          question: "hi",
          options: answerOption,
          answer: answerOption[imageLabelMap[key]],
        };
      });

      // Do something with randomImageLabelList if needed
      console.log('Processed Object:', randomImageLabelList);
    });
}

module.exports = imageProcessing;
