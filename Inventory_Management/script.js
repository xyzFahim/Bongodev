// Initial products array
const initialProducts = [
  {
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];

let InventoryList = [...initialProducts];

function addProductToTable(product) {
  const productTableBody = document.getElementById('productTableBody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td class="py-2 px-4 border-b text-center bg-red-300">${product.name}</td>
    <td class="py-2 px-4 border-b text-center bg-blue-300">${product.quantity}</td>
    <td class="py-2 px-4 border-b text-center bg-red-300">${product.price}</td>
    <td class="py-2 px-4 border-b text-center bg-green-300">${product.vendor}</td>
    <td class="py-2 px-4 border-b text-center bg-yellow-300">${product.category}</td>
    <td class="py-2 px-4 border-b text-center">
      <button onclick="editProduct(${InventoryList.indexOf(product)})" class="bg-green-500 text-white p-1 px-4 rounded">Edit</button>
      <button onclick="deleteProduct(${InventoryList.indexOf(product)})" class="bg-red-500 text-white p-1 px-3 rounded">Delete</button>
    </td>
  `;

  productTableBody.appendChild(newRow);
}

function handleAddProduct(event) {
  event.preventDefault();

  const name = document.getElementById('productName').value;
  const quantity = document.getElementById('productQuantity').value;
  const price = document.getElementById('productPrice').value;
  const vendor = document.getElementById('productVendor').value;
  const category = document.getElementById('productCategory').value;

  if (!name || !quantity || !price || !vendor || !category) {
    alert('Please fill in all fields.');
    return;
  }

  const newProduct = {
    name,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    vendor,
    category,
  };

  InventoryList.push(newProduct);
  addProductToTable(newProduct);

  // Reset form
  document.getElementById('productForm').reset();
}

function renderProducts(products) {
  const productTableBody = document.getElementById('productTableBody');
  productTableBody.innerHTML = ''; 

  products.forEach(product => {
    addProductToTable(product);
  });
}

function editProduct(index) {
  const product = InventoryList[index];
  document.getElementById('productName').value = product.name;
  document.getElementById('productQuantity').value = product.quantity;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productVendor').value = product.vendor;
  document.getElementById('productCategory').value = product.category;

  InventoryList.splice(index, 0);
}

function deleteProduct(index) {
  InventoryList.splice(index, 1);
  renderProducts(InventoryList);
}

document.getElementById('productForm').addEventListener('submit', handleAddProduct);


renderProducts(initialProducts);
