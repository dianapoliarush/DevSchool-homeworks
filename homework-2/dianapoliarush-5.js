function getRootProperty(object, num) {
    for (const key in object) {
        if (Array.isArray(object[key])) {
            if (object[key].includes(num)) {
                return key;
            }
        } else if (typeof object[key] === 'object' && object[key] !== null) { // checking if it's nested object
            const result = getRootProperty(object[key], num);
            if (result !== null) {
                return key;
            }
        }
    }
    return null;
}

const object1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

const object2 = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
};

console.log(getRootProperty(object1, 9));
console.log(getRootProperty(object1, 19));
console.log(getRootProperty(object1, 999));
console.log(getRootProperty(object2, 250));
console.log(getRootProperty(object2, 116));
console.log(getRootProperty(object2, 111));
console.log(getRootProperty(object2, 999));

