/*
Task:
This kata requires you to write an object that receives a file path and does operations on it.
The purpose of this kata is to use string parsing, so you're not supposed to import external libraries. I could only enforce this in python.

Testing:
JavaScript:

const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'

*/


//Answer

class FileMaster {
    constructor(filepath) {
        this.filepath = filepath;
    }
    extension() {
        let extension = this.filepath.split('.').pop();
        return extension;
    }

    filename() {
        let filename = this.filepath.split('.').shift().split('/').pop();
        return filename;
    }

    dirpath() {
        let dirpath = this.filepath.split('.').shift().split('/');
        dirpath.pop();
        dirpath.push('');
        return dirpath.join('/');
    }
}