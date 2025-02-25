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

async function abcd(){
    let a= await fetch("https://randomuser.me/api/")
    a = await a.json();
    console.log(a);
}

abcd();