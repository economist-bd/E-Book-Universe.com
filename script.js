// লোকাল স্টোরেজ থেকে কার্টের ডেটা লোড করা
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsDiv = document.getElementById('cart-items');
const totalPriceSpan = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-button');

// কার্ট আইটেম দেখানো এবং মোট দাম হিসাব করা
function displayCart() {
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.title} - ${item.price} টাকা - পরিমাণ: ${item.quantity}</p>
            <button class="remove-button" data-index="${index}">সরান</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    totalPriceSpan.textContent = totalPrice;
}

// কার্ট থেকে আইটেম সরানোর ফাংশন
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// রিমুভ বাটনে ক্লিক করার ইভেন্ট লিসেনার
cartItemsDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        const index = event.target.dataset.index;
        removeItem(index);
    }
});

// চেকআউট বাটনের জন্য (এখানে আপনি আপনার চেকআউট প্রসেস যোগ করতে পারেন)
checkoutButton.addEventListener('click', function() {
    alert('চেকআউট প্রক্রিয়া শুরু হচ্ছে!');
    // এখানে চেকআউটের জন্য আপনার কোড যোগ করুন
});


// পেজ লোড হওয়ার পরে কার্ট দেখানো
displayCart();

//উদাহরণস্বরূপ Add to cart করার জন্য:
// function addToCart(book) {
//     let existingItem = cart.find(item => item.id === book.id);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         book.quantity = 1;
//         cart.push(book);
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCart();
// }
