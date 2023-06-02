let db = [
    {
        id: 1,
        name: 'Alex',
        sex: 'man',
        weight: 70+' кг',
        height: 1.75+' м',
        age: 30, 
        money: 4555,
        pic: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-on-chest_176420-18743.jpg?w=2000'
    },
    {
        id: 2,
        name: 'Peter',
        sex: 'man',
        weight: 80+' кг',
        height: 1.80+' м',
        age: 20, 
        money: 123213,
        pic: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-on-chest_176420-18743.jpg?w=2000'
    },
    {
        id: 3,
        name: 'Julia',
        sex: 'woman',
        weight: 85+' кг',
        height: 1.82+' м',
        age: 24, 
        money: 55444,
        pic: 'https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg'
    },
    {
        id: 4,
        name: 'Anastasia',
        sex: 'woman',
        weight: 67+' кг',
        height: 1.73+' м',
        age: 19, 
        money: 7777,
        pic: 'https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg'
    },
    {
        id: 5,
        name: 'Nazar',
        sex: 'man',
        weight: 92+' кг',
        height: 1.92+' м',
        age: 40, 
        money: 9999913,
        pic: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-on-chest_176420-18743.jpg?w=2000'
    },

];

for(let el of db){
    $('.wrap').append(`<div class='userCard'>
    <img src='${el.pic}' alt='pic'>
    <h2>${el.name}</h2>
    <p>${el.age}</p>
    <p>${el.sex}</p>
    <p>${el.weight}</p>
    <p>${el.height}</p>
    <button class='cardBtn' id=${el.id}>View</button>
    </div>`);
}

$('.cardBtn').click(function(e){
    for(let el of db){
        if(e.target.id == el.id){
            alert(el.money);
        }
    }
})

for(let el of db){
    if(el.money>=10000){
        console.log(el.name);
    }
}

let c = 0;
for(let el of db){
    if(el.name[0] == 'A'){
        c++;
    }
}

console.log(c);

$('#checkBtn').click(function(){
    let min = $('#minValue').val();
    let max = $('#maxValue').val();
    let sortDb = [];
    for(let el of db){
        if(el.age>=min&&el.age<=max){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})

$('#sex1').click(function(){
    let sortDb = [];
    for(let el of db){
        if(el.sex==='man'){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})
$('#sex2').click(function(){
    let sortDb = [];
    for(let el of db){
        if(el.sex==='woman'){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})
$('#bot').click(function(){
    let sortDb = [];
    for(let el of db){
        if(el.height<='1.80'){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})
$('#top').click(function(){
    let sortDb = [];
    for(let el of db){
        if(el.height>='1.80'){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})

$('#weightBot').click(function(){
    let sortDb = [];
    for(let el of db){
        if(el.weight<='82'){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})
$('#weightTop').click(function(){
    let sortDb = [];
    for(let el of db){
        if(el.weight>='82'){
            sortDb.push(el);
        }
    }

    $('.wrap').empty();
    for(let el of sortDb){
        $('.wrap').append(`<div class='userCard'>
        <img src='${el.pic}' alt='pic'>
        <h2>${el.name}</h2>
        <p>${el.age}</p>
        <p>${el.sex}</p>
        <p>${el.weight}</p>
        <p>${el.height}</p>
        <button class='cardBtn' id=${el.id}>View</button>
        </div>`);
    }
})
