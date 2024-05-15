export function generateOrderId() {
    var orderId = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    var hasNumber = false;

    orderId += '0123456789'.charAt(Math.floor(Math.random() * 10));
    hasNumber = true;

    for (var i = 1; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * charactersLength);
        orderId += characters.charAt(randomIndex);
    }

    if (!hasNumber) {
        var randomIndex = Math.floor(Math.random() * 6); // Random index between 0 and 5
        orderId = orderId.substr(0, randomIndex) + '0123456789'.charAt(Math.floor(Math.random() * 10)) + orderId.substr(randomIndex + 1);
    }

    return orderId;
}