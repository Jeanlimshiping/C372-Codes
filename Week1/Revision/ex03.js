const payments = [
    { petName: "Chester", amount: 50, status: "Approved" },
    { petName: "Mochi", amount: 80, status: "Pending" },
    { petName: "Mira", amount: 40, status: "Declined" }
];

console.log("Mochi's payment status is: " + payments[1].status)

payments.forEach(payment => {
    if (payment.status === "Approved") {
        console.log('Pet-care service for ${payment.petName} confirmed');
    } else if (payment.status === "Pending") {
        console.log('Payment for ${payment.petName} is still processed');
    } else{
        console.log('Payment for ${payment.petName} unsuccessful'); 
    }   
})