const downloadXLSX = () => {
  console.log(XLSX)
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

document.getElementById('download').addEventListener('click', () => {
  downloadXLSX()
})