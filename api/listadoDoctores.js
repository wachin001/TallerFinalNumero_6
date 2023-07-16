const doctoresTableBody = document.getElementById('doctoresTableBody');

fetch('api/doctores')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((doctor) => {
      const row = document.createElement('tr');

      const nombreCell = document.createElement('td');
      nombreCell.textContent = doctor.nombre;
      row.appendChild(nombreCell);

      const apellidoCell = document.createElement('td');
      apellidoCell.textContent = doctor.apellido;
      row.appendChild(apellidoCell);

      const especialidadCell = document.createElement('td');
      especialidadCell.textContent = doctor.especialidad;
      row.appendChild(especialidadCell);

      doctoresTableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error('Error al obtener los datos de los doctores:', error);
  });
