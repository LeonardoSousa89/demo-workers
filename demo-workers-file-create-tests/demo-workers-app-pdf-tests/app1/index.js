const doc = document
const download = doc.querySelector('#download')

download.addEventListener('click', function(e){

    e.preventDefault()

   downloadPdf()
})

function downloadPdf(){
    const pdfCreator = new jsPDF();

    pdfCreator.setFontSize(40)
    pdfCreator.setFont("Bebas Neue", "bold");
    pdfCreator.text('Jordan', 105, 25, null, null, "center")
    pdfCreator.save("jordan.pdf")

    console.log(pdfCreator)
}