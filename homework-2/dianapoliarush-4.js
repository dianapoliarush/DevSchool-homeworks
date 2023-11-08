function unpackSausages(truck) {
    const res = [];
    let count = 0;

    for (const box of truck) {
        for (const pack of box) {
            if (pack.length !== 6 || pack[0] !== "[" || pack[5] !== "]") {
                continue;
            }

            if (new Set(pack.substring(1, 5)).size === 1) {
                count++;
                if (count % 5 !== 0) {
                    res.push(...pack.substring(1, 5).split(''));
                }
            }
        }
    }

    return res.join(" ");
}

const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
];


console.log(unpackSausages(truck));

