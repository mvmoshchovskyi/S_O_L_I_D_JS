// Open Close Principle

class Shape {
    area() {
        throw new Error('Area method shoud be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
        // this.type = 'shape'
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        // this.type = 'circle'
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(height, width) {
        super()
        // this.type = 'rect'
        this.height = height
        this.width = width
    }

    area() {
        return this.width * this.height
    }

}

class CalcArea {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            // if (shape.type === 'circle') {
            //     acc += (shape.radius ** 2) * Math.PI
            // } else if (shape.type === 'square') {
            //     acc += (shape.size ** 2)
            // } else if (shape.type === 'rect') {
            //     acc += (shape.width * shape.height)
            // }
            acc += shape.area()
            return acc
        }, 0)

    }
}

const calc = new CalcArea([
    new Square(10),
    new Circle(2),
    new Rect(5, 10)
])
console.log(calc.sum())