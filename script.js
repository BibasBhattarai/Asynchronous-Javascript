// # SETTIMEOUT

// console.log("Messi");
// console.log("Lamine"),
// setTimeout(function(){
//         console.log("bibas");

// }, 2000)

// console.log("Pedri");





// SET INTERVAL

// setInterval(function(){
//     console.log("Bibas")
// },1000)

// var si;
// var count=1;
// si=setInterval(function(){
//     ++count;
//     console.log(count);

//     if(count===5){
//         clearInterval(si);
//     }

    
// },1000)




//#FETCH API

// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(readable =>console.log(readable.results[0].gender))



//another

// fetch(`//jsonplaceholder.typicode.com/posts`)
// .then(raw => raw.json())
// .then(readable => console.log(readable[0].title));




// #AXIOS

// axios.get(`https://opentdb.com/api.php?amount=1&type=multiple`)
// .then(result => console.log(result.data.results[0].type))






// #PROMISES

// const parchi =new Promise(function(resolve,reject){
//         fetch( `https://randomuser.me/api/`)
//         .then(raw=>raw.json())
//         .then(result=>{
//             // console.log(result.results[0].gender)
//             if(result.results[0].gender==="male") resolve();
//             else reject ();
//         });
// });

// // console.log(parchi);

// parchi
// .then(function(){
//     console.log("Right answer");
// })

// .catch(function(){
//     console.log("wrong answer");
// });




// #CALLBACKS FUNCTION

// function getdata(url,callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback(result);
//     });
// };

// getdata("https://randomuser.me/api/",function(result){
//     console.log(result.results[0].gender,result.results[0].name.first,result.results[0].email);
// });




//#ASYNC/AWAT

// async function abcd(){
//     let a= await fetch("https://randomuser.me/api/")
//     a = await a.json();
//     console.log(a);
// }

// abcd();



// #  CALLBACK VS PROMISES VS ASYNC/AWAIT


// by callback 
// function datafetcher(url,callback){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback(result);
//     })
// }

// datafetcher("https://randomuser.me/api/",function(result){
//     console.log(result);
// })




// by promise

// function datafetcher(url){
//     const parchi =new Promise(function(resolve,reject){
//         fetch(url)
//         .then(raw=>raw.json())
//         .then(result=>{
//             resolve(result);
//         })
//     })
//     return parchi;
// }


// datafetcher("https://randomuser.me/api/")
// .then(function(result){
//     console.log(result);
// })




//async await


// async function datafetcher(url){
//     let data= await fetch(url);
//     let result =await data.json();

// }

// async function hh(){
//     let data = await datafetcher("https://randomuser.me/api/");
//     console.log(data);
// }
// hh();




// #GENERATORS

// function* printnum(){
//     console.log("Started");
//     yield 1;
//     console.log("Progressing");
//     yield 2;
//     console.log("finishing");
//     yield 3;
// }
// const ans= printnum();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);


// Example 

function* allnums(){
    for(var i=0; i<11; i++){
        yield i;
    }
}

const gen=allnums();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
