let computer = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
    videoCardModel: 'NVidia GeForce GTX 1000',
    videoMemory: 4096,
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
    price: 100000,
};

let values = Object.values(computer);
let keys = Object.keys(computer);
let entries = Object.entries(computer);

// for (let value of values) {
//     console.log(value);
// }

// for (let key of keys) {
//     console.log(key);
// }

// for (let entry of entries) {
//     console.log(`${entry[0]}: ${entry[1]}`);
// }

// так же, но более читаемо
for (let [key, value] of entries) {
    console.log(key + value === 'price100000');
}  



