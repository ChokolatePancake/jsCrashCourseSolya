let car = {
    manufacturer: 'Toyota',
    model: 'Corolla',
    year: 2020,
    averageSpeed: 60,

    show: function() {
        console.log(`Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year}\nAverage speed: ${this.averageSpeed} mph`);
    },

    TimeDrive: function(distance) {
        const hours = distance / this.averageSpeed;
        const breaks = Math.floor(hours / 4);
        const totalHours = hours + breaks;
        console.log(`To cover ${distance} miles with speed ${this.averageSpeed} and breaks, need ${totalHours} hours`);
    }
};

car.show();
car.TimeDrive(300);