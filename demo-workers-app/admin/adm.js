const doc = document

function load_section_choices(){
    const url         = './data.json'
    let  workersector = document.getElementById('sector')

    fetch(url)
            .then(data => data.json())
            .then(data =>{
                data.map(e=>{
                    e.en.map(e=>{
                        let digite = 1
                        let cat = e.category
                        create_data(workersector,cat,'option',digite)
                    })
                })
            })
            .catch()
}


function create_data(positioned, el, createdObject,digite){
    if(digite == 1){
        let object = document.createElement(`${createdObject}`)
        object.append(el)
        positioned.append(object)
    }else if(digite == 2){
        positioned.value = el
    }
}


function clear(){
    let id            = document.querySelector('#id')
    let workername    = document.querySelector('#name')
    let workerjob     = document.querySelector('#job')
    let workersalary  = document.querySelector('#salary')
    let workersector  = document.querySelector('#sector')

    id.value           = ''
    workername.value   = ''
    workerjob.value    = ''
    workersalary.value = ''
    workersector.value = ''
}   


function save(clientData){
    let data = localStorage.getItem('data')

    if(!data){
        data = []
    }else{
        data = JSON.parse(data)
    }

    data.push(clientData)

    localStorage.setItem('data', JSON.stringify(data))
}


function removeAll(){
    localStorage.removeItem('data')
}


function storage(){

}
storage()


// a biblioteca é carregada, reconhecida, 
// mas não está funcionando aqui, porém em
// um espaço de teste online este mesmo código funciona.
const downloadXLSX = () => {
    const workbook = XLSX.utils.book_new();
    
    workbook.Props = {
      Title: 'Jordan',
      Subject: 'jordan file test',
      Author: 'Mendes Sousa',
      CreatedDate: new Date()
    };
    
    workbook.SheetNames.push('Jordan');
    
    const data = [
      ['id', 'workername', 'workerjob', 'workersalary', 'workersector'],
      ['1', 'teste 1', 'developer', '4568.65', 'COMPUTING'],
      ['2', 'teste 2', 'supply chain manager', '15689.65', 'LOGISTICS']
    ];
    
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    
    workbook.Sheets['Jordan'] = worksheet;
    
    XLSX.writeFile(workbook , 'Jordan.xlsx', { bookType: 'xlsx', type: 'bynary'});
};


doc.getElementById('xsl').addEventListener('click', () => {
    downloadXLSX();
    console.log(XLSX)
})


doc.onload = addEventListener('click',(e)=>e.preventDefault())


doc.onload = addEventListener('load',()=>{
    load_section_choices()
    $('.successsend-data').hide()
    $('.successupdate-data').hide()
    $('.successdelete-data').hide()
    $('.invalid-fields').hide()
    $('.invalid-server').hide()
    $('.config_mode').hide()
    $('.adm').hide()
})


$('#home').click(function(){
    doc.location.href = '../home/index.html'
})


$('#clear').click(function(){
        let id            = document.querySelector('#id')
        let workername    = document.querySelector('#name')
        let workerjob     = document.querySelector('#job')
        let workersalary  = document.querySelector('#salary')
        let workersector  = document.querySelector('#sector')
    
        id.value           = ''
        workername.value   = ''
        workerjob.value    = ''
        workersalary.value = ''
        workersector.value = ''
})


$('#edition').click(function(){
    let id_btn = document.querySelector('#id')
    let normal = document.querySelector('.normal_mode')
    let config = document.querySelector('.config_mode')

    id_btn.style.display = 'flex'
    normal.style.display = 'none'
    config.style.display = 'flex'
})


$('#nmode').click(function(){
    let id_btn = document.querySelector('#id')
    let normal = document.querySelector('.normal_mode')
    let config = document.querySelector('.config_mode')

    id_btn.style.display = 'none'
    normal.style.display = 'flex'
    config.style.display = 'none'
})


$('#send').click(function(){
    let workername    = document.querySelector('#name').value
    let workerjob     = document.querySelector('#job').value
    let workersalary  = document.querySelector('#salary').value
    let workersector  = document.querySelector('#sector').value

    if( workername    == ''||
        workerjob     == ''||
        workersalary  == ''||
        workersector  == ''  ){

            $('.invalid-fields').show(100).slideUp(6000)

    }else{  

            function createId(){
                let id = Math.random(9)
                return String(id).substring(3,11)
            }

            let clientData = {
                id: createId(),
                workername,
                workerjob,
                workersalary: Number(workersalary),
                workersector
            }

            save(clientData)

            clear()

            $('.successsend-data').show(100).slideUp(6000)
    }
    
})


$('#pdf').click(function(){
    const pdfCreator = new jsPDF();

    let data=localStorage.getItem('data')
    let dataParsed=JSON.parse(data)

    //data parsed
    dataParsed.map(e=>console.table(e))

    //logo img file
    let loadImage = "../assets/jordan.png"

    //logo htmlElement (your typeof is object)
    let logo = doc.createElement('img')
    logo.setAttribute('src', loadImage)


    // pdfCreator.addImage(logo, "PNG", 15, 40, 180, 180);
    pdfCreator.setFontSize(40)
    pdfCreator.setFont("Bebas Neue", "bold");
    pdfCreator.text('Jordan', 105, 25, null, null, "center")
    pdfCreator.save("jordan.pdf")

})


$('.invalid-fields').click(function(){
    $(this).hide(100)
})


$('.successsend-data').click(function(){
    $(this).hide(100)
})


$('.invalid-server').click(function(){
    $(this).hide(100)
})


$('.successupdate-data').click(function(){
    $(this).hide(100)
})


$('.successdelete-data').click(function(){
    $(this).hide(100)
})  


$('#getId').click(function(){
    let id            = document.querySelector('#id').value
    let workername    = document.querySelector('#name')
    let workerjob     = document.querySelector('#job')
    let workersalary  = document.querySelector('#salary')
    let workersector  = document.querySelector('#sector')

    if( workername     == ''||
        workerjob      == ''||
        workersalary   == ''||
        workersector   == ''  ){

            $('.invalid-fields').show(100).slideUp(6000)

    }else{

        const url    = `https://app-workers.herokuapp.com/${id}`
        const config = {
            method: 'GET'
        }

        // fetch(url, config)
        //                 .then(datas => datas.json())
        //                 .then(datas => {
        //                     datas.map(e =>{
        //                        if(id){
        //                             let digite = 2
                                  
        //                             let nameBk      = e.workername
        //                             let jobBk       = e.workerjob
        //                             let salaryBk    = e.workersalary
        //                             let sectorBk    = e.workersector
                                
        //                             create_data(workername,nameBk,'ul',digite)
        //                             create_data(workerjob,jobBk,'ul',digite)
        //                             create_data(workersalary,salaryBk,'ul',digite)
        //                             create_data(workersector,sectorBk,'ul',digite)
        //                        }
        //                     })
        //                 })
        //                 .catch(_ => $('.invalid-server').show(100).slideUp(6000))
    }
    
})


$('#update').click(function(){
    let id            = document.querySelector('#id').value
    let workername    = document.querySelector('#name').value
    let workerjob     = document.querySelector('#job').value
    let workersalary  = document.querySelector('#salary').value
    let workersector  = document.querySelector('#sector').value

    if( workername    == ''||
        workerjob     == ''||
        workersalary  == ''||
        workersector  == ''  ){

            $('.invalid-fields').show(100).slideUp(6000)

    }else{

        const url  = `https://app-workers.herokuapp.com/?id=${id}`
        const data = {
            workername, workerjob, workersalary, workersector
        }
        const config = {
            method: 'PUT',
            body :JSON.stringify(data),
            headers :{
                'Content-Type': 'application/json'
            }
        }

        // fetch(url, config)
        //                 .then(datas => {
        //                         clear()
        //                         datas.json()
        //                         $('.successupdate-data').show(100).slideUp(6000)
        //                 })
        //                 .catch(_ => $('.invalid-server').show(100).slideUp(6000))
    }
})


$('#delete').click(function(){
        let id            = document.querySelector('#id').value
        let workername    = document.querySelector('#name').value
        let workerjob     = document.querySelector('#job').value
        let workersalary  = document.querySelector('#salary').value
        let workersector  = document.querySelector('#sector').value

    if( workername    == ''||
        workerjob     == ''||
        workersalary  == ''||
        workersector  == ''  ){

            $('.invalid-fields').show(100).slideUp(6000)

    }else{

        
        const url    = `https://app-workers.herokuapp.com/?id=${id}`
        const config = {
            method: 'DELETE',
        }

        // fetch(url, config)
        //                 .then(data => {
        //                         clear()
        //                         data.json()
        //                         $('.successdelete-data').show(100).slideUp(6000)
        //                 })
        //                 .catch(_ => $('.invalid-server').show(100).slideUp(6000))

    }

})


$('#tog').click(function(){
    $('.adm').toggle(100)
})


$('.adm').click(function(){
    doc.location.href = '../home/index.html'
})


