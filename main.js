// 1. Array to store items
let shoppingList = JSON.parse(localStorage.getItem('myList')) || [];

const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const shoppingListUI = document.getElementById('shoppingList');
const clearBtn = document.getElementById('clearBtn');

// 2. Function to render (show) the list
function renderList() {
    shoppingListUI.innerHTML = '';
    
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        if (item.purchased) li.classList.add('purchased');
        
        // Event Listener: Mark as purchased
        li.addEventListener('click', () => {
            shoppingList[index].purchased = !shoppingList[index].purchased;
            saveAndRender();
        });

        shoppingListUI.appendChild(li);
    });
}

// 3. Add Item
addBtn.addEventListener('click', () => {
    const text = itemInput.value.trim();
    if (text) {
        shoppingList.push({ text: text, purchased: false });
        itemInput.value = '';
        saveAndRender();
    }
});

// 4. Clear List
clearBtn.addEventListener('click', () => {
    shoppingList = [];
    saveAndRender();
});

// 5. Save to Local Storage and Refresh UI
function saveAndRender() {
    localStorage.setItem('myList', JSON.stringify(shoppingList));
    renderList();
}

// Initial load
renderList();