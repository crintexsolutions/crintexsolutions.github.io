function showServiceDetails(serviceId) {
    document.getElementById('services').classList.add('hidden');
    document.getElementById('service-details').classList.remove('hidden');
    document.querySelectorAll('.service-info').forEach(info => info.classList.add('hidden'));
    document.getElementById(serviceId).classList.remove('hidden');
}

function goBackToServices() {
    document.getElementById('service-details').classList.add('hidden');
    document.getElementById('services').classList.remove('hidden');
}
