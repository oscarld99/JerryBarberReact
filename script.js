document.addEventListener('DOMContentLoaded', function() {
    const appointmentsTable = document.getElementById('appointments');
    const openFormBtn = document.getElementById('openFormBtn');
    const appointmentForm = document.getElementById('appointmentForm');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeFormBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('newAppointmentForm');

    // Función para abrir el formulario de nueva cita
    openFormBtn.addEventListener('click', function() {
        appointmentForm.style.display = 'block';
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });

    // Función para cerrar el formulario de nueva cita
    function closeModal() {
        appointmentForm.style.display = 'none';
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
        form.reset();
    }

    // Cerrar con el botón X
    closeFormBtn.addEventListener('click', closeModal);

    // Cerrar con el botón Cancel
    cancelBtn.addEventListener('click', closeModal);

    // Cerrar haciendo clic en el overlay
    modalOverlay.addEventListener('click', closeModal);

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && appointmentForm.style.display === 'block') {
            closeModal();
        }
    });

    // Función para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const time = form.time.value;
        const barber = form.barber.value;
        const client = form.client.value;
        const service = form.service.value;

        // Crear nueva fila de cita
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${time}</td>
            <td>${barber}</td>
            <td>${client}</td>
            <td>${service}</td>
        `;

        // Agregar la fila a la tabla
        appointmentsTable.querySelector('tbody').appendChild(newRow);

        // Cerrar el formulario
        closeModal();
    });
});