const doc = document
const pdf = doc.querySelector('#pdf')
const xsl = doc.querySelector('#xsl')

//gerador de arquivo básico pdf
pdf.addEventListener('click', function(e){

    e.preventDefault()
    downloadPdf()
})

//gerador de arquivo básico xslx
xsl.addEventListener('click', () => {
    downloadXLSX()
})

function downloadPdf(){
    const pdfCreator = new jsPDF();

    pdfCreator.setFontSize(40)
    pdfCreator.setFont("Bebas Neue", "bold");
    pdfCreator.text('Jordan', 105, 25, null, null, "center")
    pdfCreator.save("jordan.pdf")

    console.log(pdfCreator)
}

function downloadXLSX() {
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
    
    console.log(XLSX)
};
  