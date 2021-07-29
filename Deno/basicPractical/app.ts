// Basic msg

let message: String;
message="Hi Kamakshi! Are you happy today?";
console.log(message)

// Write in file

const text = "This is a test it shoul be stored in a file";

const encoder = new TextEncoder();
const data= encoder.encode(text);

Deno.writeFile('message.txt',data).then(()=>{
    console.log('Wrote to File!')
})
// Run---- deno run --allow-write="message.txt","etc" app.ts
