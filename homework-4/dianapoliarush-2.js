class Vector{
    constructor(components){
        this.components = components
    }
    checkingVectorsLength(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error('Vectors should have the same length')
        }
    }
    // generalized function for adding and subtraction
    performOperation(vector, operation) {
        this.checkingVectorsLength(vector);
        const resultComponents = this.components.map((numb, index) => operation(numb, vector.components[index]));
        return new Vector(resultComponents);
    }
    add(vector) {
        return this.performOperation(vector, (a, b) => a + b);
    }
    subtract(vector) {
        return this.performOperation(vector, (a, b) => a - b);
    }
    dot(vector){
        this.checkingVectorsLength(vector)
        const result = this.components.reduce((acc, numb, index) => acc + numb * vector.components[index] , 0)
        return result

    }
    norm() {
        const result = this.components.reduce((acc, numb) => acc + numb ** 2, 0)
        return Math.sqrt(result)
    }
    equals(vector) {
        return this.components.every((value, index) => value === vector.components[index]);
    }
    toString() {
        return `(${this.components.join(',')})`;
    }
}


const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);


console.log(a.add(b))
// console.log(a.add(c))
console.log(a.subtract(b))
console.log(a.dot(b))
console.log(a.norm())