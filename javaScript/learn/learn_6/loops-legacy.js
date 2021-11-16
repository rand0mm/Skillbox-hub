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

for (let key in computer) {
  if (!computer.hasOwnProperty(key)) {
      continue;
  }
  console.log(computer[key]);
}