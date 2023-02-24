
let h1 = document.querySelector('.clock')
let btn = document.querySelector('.button')
let refresh = document.querySelector('.refresh')
let header = document.querySelector('.header')
let button__wrap = document.querySelector('.button__wrap')
let button__wrap2 = document.querySelector('.button__wrap2')
let text = document.querySelector('.text')
let text2 = document.querySelector('.text2')
let day1 = document.querySelector('.day1')
let btn__img = document.querySelector('.btn__img')
let bar__title1 = document.querySelector('.bar__title1')
let light = document.querySelector('.light')
let moon = document.querySelector('.moon')
let weekday = document.querySelector('.weekday')
let weeknumber = document.querySelector('.weeknumber')
let wrapper = document.querySelector('.wrapper')
let name1 = document.querySelector('.name1')
let header__wrap__text = document.querySelector('.header__wrap__text')

let vaqt = 0;
let img = 'noch'

function TimeFunc() {
    let dax = new Date();
    let soat = dax.getHours() + 5
    let min = dax.getMinutes()
    let weekday1 = dax.getDay() 
    let start = new Date(dax.getFullYear(), 0, 0);
    let diff = dax - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    bar__title1.textContent = day

    
    weekday.textContent = weekday1

    weeknumber.textContent = Math.trunc(day / 7)

    if (soat >= 7 && soat < 18) {
        moon.classList.remove('none')
        light.classList.remove('moon')
        if (soat >=7 && soat < 12) {
            day1.textContent = "GOOD MORNING, IT’S CURRENTLY"
        }else if (soat > 12 && soat < 18) {
            day1.textContent = "GOOD AFTERNOON, IT’S CURRENTLY"
        }
    } else if (soat >= 0 && soat >= 18 && soat < 23) {
        moon.classList.add('none')
        light.classList.add('moon')
        day1.textContent = "GOOD EVENING, IT’S CURRENTLY"
        if (soat >=22 || soat < 6 ) {
            day1.textContent = "GOOD NIGHT, IT’S CURRENTLY"
        }
        wrapper.style.backgroundImage = `url('../imgs/jpg/noch.jpg')`
    }
    min < 10 ? h1.textContent = `${soat}:0${min}` : h1.textContent = `${soat}:${min}`

}


setInterval(() => {
    TimeFunc()
}, 1000)

btn.addEventListener('click', () => {
    button__wrap2.classList.toggle('bar_togle')
    header.classList.toggle('hidden')
    text.classList.toggle('text2')
    text2.classList.toggle('text2')
    btn__img.classList.toggle('btn__rotate')
    button__wrap.classList.toggle('padding')
})






const students = [
  { name: 'Alisher Navoiy',   words: `Educate your heart before your tongue. Because words come from the heart and come out of the tongue.` },
  { name: 'Jaloliddin Rumiy',  words: 'Patience is the guide that takes a person to his goal the fastest.' },
  { name: 'Gandi',   words: 'A person who wants to change the world must first change himself.' },
  { name: 'Yuri Gagarin',  words: 'The main thing is not higher education, but higher thinking.' },
  { name: 'Jeki Chan',  words: 'Guys, never dream of becoming a kung fu fighter, you need to do well in school and master computer skills.' },
  { name: 'Deyl Karnegi',  words: 'Everyone is stupid for five minutes. The real wisdom is not to exceed this time limit.' },
  { name: 'Veber',  words: 'At one time, the lack of books harmed the growth of science. And now, its abundance is overwhelming and hinders your personal reflection.' },
  { name: 'Luqmoni Hakim',  words: 'GDo not indulge in the world to the detriment of your end. But do not forget the world to the extent that it becomes a burden to people.' },
  { name: 'Bill Gates',  words: "If you were born poor, it's not your fault. But if you die poor, it's your fault."}
];




refresh.addEventListener('click' , ()=>{
    const {name, words} = students[Math.floor(Math.random() * students.length)];
    header__wrap__text.textContent = words
    name1.textContent = name
    console.log(name);
})
