let motherBoard = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
};

let cpu = {
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
};

let videoCard = {
    videoCardModel: 'NVidia GeForce GTX 1000',
    videoMemory: 4096,
};

let ram = {
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
};

let computer = {
    price: 100000,
    ...motherBoard,
     // св-во socket из объекта motherBoard будет заменено на такое же св-во из cpu
    ...cpu,
    ...videoCard,
    ...ram,
}

let computerWithAssign = Object.assign(
    // целевой объект, в который буду "замешаны" следующие
    {
        price: 100000
    },
    // объекты, "подмешиваемые в первый"
    motherBoard, cpu, videoCard, ram
);

console.log(computer);
console.log(computerWithAssign);

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));

