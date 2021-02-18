// 拡張性のある ◯✗ゲーム

let x = 3
let y = 3

let z = []

for (let i = 1; i <= x; i++) {
    temp = []
    for (let j = 1; j <= y; j++) {
        temp.push({"x": i, "y": j})
    }
    z.push(temp)
}

for (let i = 1; i <= x; i++) {
    temp = []
    for (let j = 1; j <= y; j++) {
        temp.push({"x": j, "y": i})
    }
    z.push(temp)
}

temp = []
for (let i = 1; i <= x; i++) {
    temp.push({"x": i, "y": i})
}
z.push(temp)

temp = []
for (let i = 1; i <= x; i++) {
    temp.push({"x": i, "y": (x+1)-i})
}
z.push(temp)

console.log(z)