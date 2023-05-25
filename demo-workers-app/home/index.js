const doc  = document
doc.onload = addEventListener('click',(e)=>e.preventDefault())
doc.onload = addEventListener('load',()=>{
    $('.lgt').hide()
    $('.adm').hide()
    $('.tb_search').hide()
    load_table()
})


$('#tog').click(function(){
    $('.lgt').toggle(100)
    $('.adm').toggle(100)
})


$('.adm').click(function(){
    doc.location.href = '../admin/index.html'
})


$('#adm').click(function(){
    doc.location.href = '../admin/index.html'
})


$('#git').click(function(){
    window.open('https://github.com/LeonardoSousa89')
})


$('#linkedin').click(function(){
    window.open('https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173')
})


$('#site').click(function(){
    window.open('https://leonardo-sousa.netlify.app/')
})


function load_table(){
    const id_area       = doc.getElementById('id')
    const name_area     = doc.getElementById('name')
    const job_area      = doc.getElementById('job')
    const sector_area   = doc.getElementById('sector')
    const salary_area   = doc.getElementById('salary')


   const url = 'https://app-workers.herokuapp.com/'

   const config = {
       method:'GET'
   }

   fetch(url, config)
                .then(people => people.json())
                .then(people => {
                    people.map(e=>{
                        let id = e.id
                        create_data(id_area,id,'ul')

                        let name = e.workername.substring(0,15)
                        create_data(name_area,name,'ul')

                        let job = e.workerjob.substring(0,15)
                        create_data(job_area,job,'ul')

                        let sector = e.workersector.substring(0,15)
                        create_data(sector_area,sector,'ul')

                        let salary = e.workersalary + '$'
                        create_data(salary_area,salary,'ul')
                    })
                })  
                .catch()
}


function search_table(){
    let search = document.getElementById('search')
   
    search.onkeyup  = addEventListener('keyup',()=>{
       
        if(search.value == ''){
            $('.tb_search').hide()
            $('.tb').show()
        }else{
            $('.tb_search').show()
            $('.tb').hide()

           const url = `https://app-workers.herokuapp.com/search/${search.value}`
        
           const config = {
               method:'GET'
           }
        
           fetch(url, config)
                    .then(search => search.json())
                    .then(search =>{
                        search.filter(e=>{
                                let id   = e.id
                                let name = e.workername.substring(0,15) 
                                let job = e.workerjob.substring(0,15) 
                                let sector = e.workersector.substring(0,15) 
                                let salary = e.workersalary + '$' 

                                searchPeople(id,name,job,sector,salary)
                        })
                    })
                    .catch(err => console.log(err))
        }
    })
}
search_table()


function create_data(positioned,element,createObject){
    let object = doc.createElement(`${createObject}`)
    object.innerHTML = element
    positioned.insertAdjacentElement('afterbegin',object)
}


function storage(){
       
}
storage()


function searchPeople(id,name, job, sector, salary){
    let search           = document.getElementById('search')

    const id_area        = doc.getElementById('idsc')
    const name_area      = doc.getElementById('namesc')
    const job_area       = doc.getElementById('jobsc')
    const sector_area    = doc.getElementById('sectorsc')
    const salary_area    = doc.getElementById('salarysc')

    search.onkeyup = function(){
        if(search.value != ''){
           id_area.innerHTML     = '<ul>' + id     + '</ul>'
           name_area.innerHTML   = '<ul>' + name   + '</ul>'
           job_area.innerHTML    = '<ul>' + job    + '</ul>'
           sector_area.innerHTML = '<ul>' + sector + '</ul>'
           salary_area.innerHTML = '<ul>' + salary + '</ul>'
        }
    }
}



