fetch('http://localhost:3000/order', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(customerData)
})
.then(res => res.json())
.then(data => {
    alert(data.message);
    document.getElementById('bookingForm').reset();
})
.catch(err => {
    alert('Lỗi kết nối server');
});
