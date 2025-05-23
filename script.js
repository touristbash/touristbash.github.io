
const busContainer = document.querySelector('.bus');
const selectedSeatInput = document.getElementById('selectedSeat');
const form = document.getElementById('reserveForm');

const takenSeats = [5, 13]; // صندلی‌هایی که قبلاً رزرو شده‌اند

for (let i = 1; i <= 43; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;
    if (takenSeats.includes(i)) {
        seat.classList.add('taken');
    } else {
        seat.addEventListener('click', () => {
            document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
            seat.classList.add('selected');
            selectedSeatInput.value = i;
        });
    }
    busContainer.appendChild(seat);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const seat = selectedSeatInput.value;
    if (!seat) return alert("لطفاً ابتدا یک صندلی انتخاب کنید.");
    alert(`صندلی ${seat} برای ${name} رزرو شد! (پرداخت شبیه‌سازی‌شده)`);
});
