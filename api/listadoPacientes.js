const pacientesTableBody = document.getElementById('pacientesTableBody');

fetch('/api/pacientes')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((paciente) => {
      const row = document.createElement('tr');

      const nombreCell = document.createElement('td');
      nombreCell.textContent = paciente.nombre;
      row.appendChild(nombreCell);

      const apellidoCell = document.createElement('td');
      apellidoCell.textContent = paciente.apellido;
      row.appendChild(apellidoCell);

      const edadCell = document.createElement('td');
      edadCell.textContent = paciente.edad;
      row.appendChild(edadCell);

      pacientesTableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error('Error al obtener los datos de los pacientes:', error);
  });
