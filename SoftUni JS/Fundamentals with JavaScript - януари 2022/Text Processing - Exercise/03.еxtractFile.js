function extractFile(str) {

    let arr = str.split("\\");

    let file = arr[arr.length - 1].split('.');

    if (file.length > 2) {
        console.log(`File name: ${file[0]}.${file[1]}`);

    } else {
        console.log(`File name: ${file[0]}`);
    }

    console.log(`File extension: ${file[file.length-1]}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');