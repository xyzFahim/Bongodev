    document.getElementById('generate').addEventListener('click', function() {
        const mainContainer = document.getElementById('table-container-1');
        mainContainer.innerHTML = ''; 
        mainContainer.classList.remove('hidden');

        mainContainer.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4'; 
    
    
        for (let num = 1; num <= 10; num++) {
            generateTable(mainContainer, num);
        }
    });
    
    document.getElementById('reset').addEventListener('click', function() {
        const mainContainer = document.getElementById('table-container-1');
        mainContainer.innerHTML = '';
        mainContainer.classList.add('hidden');
    });
    
    function generateTable(mainContainer, number) {
        let tableDiv = document.createElement('div');
        tableDiv.className = 'bg-white p-4 rounded-lg shadow-lg'; 
        let title = document.createElement('h2');
        title.className = 'text-lg font-bold mb-2';
        title.textContent = `Table of ${number}`;
        tableDiv.appendChild(title);
    
        let table = document.createElement('div');
        table.className = 'grid grid-rows-10 gap-1';

        for (let i = 1; i <= 10; i++) {
            let cell = document.createElement('div');
            cell.className = 'p-2 bg-gray-100 text-center border';
            cell.textContent = `${number} x ${i} = ${number * i}`;
            table.appendChild(cell);
        }

        tableDiv.appendChild(table);
        mainContainer.appendChild(tableDiv);
    }