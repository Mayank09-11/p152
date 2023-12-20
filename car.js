AFRAME.registerComponent('car-model', {
    init: function () {
        // Your initialization code here
        this.clickCounter = 0;
        this.rotateCar();
        this.el.addEventListener('click', this.onClick.bind(this));
    },
    onClick: function () {
        // Increment the click counter
        this.clickCounter++;

        // Rotate the car based on the click counter
        this.rotateCar();

        // Check if the car has been rotated from all sides
        if (this.clickCounter === 4) {
            // Reset the counter and position the car
            this.clickCounter = 0;
            this.resetCarPosition();
        }
    },
    rotateCar: function () {
        // Rotate the car based on the click counter
        const rotationValue = this.clickCounter * 90;
        this.el.setAttribute('rotation', `0 ${rotationValue} 0`);
    },
    resetCarPosition: function () {
        // Reset the position of the car
        this.el.setAttribute('position', '0 1.5 -5');
    }
});
