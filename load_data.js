fetch("data.json").then(res => res.json()).then(data => {
    let List = document.getElementById('list');
    for(let a of data.game){
        let newli = document.createElement('li');
        newli.classList.add("item");
        newli.innerHTML=`
        <div class="box"> 
            <img src = "${a.src}">
            <div class="text">
            <h1>${a.name}</h1>
            <h2><i class="fa-solid fa-gamepad"></i>${a.count}</h2>
            <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            </div>
        </div>
        `
        List.appendChild(newli);
    }
})
fetch("data1.json").then(res => res.json()).then(data => {
    let List = document.getElementById('list1');
    for(let a of data.game){
        let newli = document.createElement('li');
        newli.classList.add("item");
        newli.innerHTML=`
        <div class="box"> 
            <img src = "${a.src}">
            <div class="text">
            <h1>${a.name}</h1>
            <h2><i class="fa-solid fa-gamepad"></i>${a.count}</h2>
            <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            </div>
        </div>
        `
        List.appendChild(newli);
    }
})
fetch("data3.json").then(res => res.json()).then(data => {
    let List = document.getElementById('list3');
    for(let a of data.game){
        let newli = document.createElement('li');
        newli.classList.add("item");
        newli.innerHTML=`
        <div class="box"> 
            <img src = "${a.src}">
            <div class="text">
            <h1>${a.name}</h1>
            <h2><i class="fa-solid fa-gamepad"></i>${a.count}</h2>
            <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </p>
            </div>
        </div>
        `
        List.appendChild(newli);
    }
})
