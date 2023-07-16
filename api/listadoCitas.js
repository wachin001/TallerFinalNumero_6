const citasTableBody = document.getElementById('citasTableBody');

fetch('/api/citas')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cita) => {
      const row = document.createElement('tr');

      const numeroDocumentoPacienteCell = document.createElement('td');
      numeroDocumentoPacienteCell.textContent = cita.numeroDocumentoPaciente;
      row.appendChild(numeroDocumentoPacienteCell);

      const especialidadCell = document.createElement('td');
      especialidadCell.textContent = cita.especialidad;
      row.appendChild(especialidadCell);

      citasTableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error('Error al obtener los datos de las citas:', error);
  });
