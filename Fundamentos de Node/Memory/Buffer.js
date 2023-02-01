//let buffer = Buffer.alloc(4);
//let buffer = Buffer.from([1,2,3]);
let buffer = Buffer.from('Hi DarkCainDs')
console.log(buffer.toString());
console.log(buffer);

let a_To_z = Buffer.alloc(26);
console.log(a_To_z);

for(let z = 0; z < 26; z++){
    a_To_z[z] = z + 97;
}
console.log(a_To_z.toString());