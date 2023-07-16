// Validación del Formulario de Cita Médica usando TypeScript

interface CitaFormData {
    numero_paciente: string;
    especialidad_cita: string;
  }
  
  const citaForm = document.getElementById('citaForm') as HTMLFormElement;
  citaForm.addEventListener('submit', handleCitaFormSubmit);
  
  function handleCitaFormSubmit(event: Event) {
    event.preventDefault();
    const formData = getCitaFormData();
    if (validateCitaForm(formData)) {
      // Enviar los datos o realizar alguna acción adicional
      console.log('Formulario de Cita Médica válido');
      console.log(formData);
      citaForm.reset();
    } else {
      console.log('Formulario de Cita Médica inválido');
    }
  }
  
  function getCitaFormData(): CitaFormData {
    const numero_paciente = (document.getElementById('numero_paciente') as HTMLInputElement).value;
    const especialidad_cita = (document.getElementById('especialidad_cita') as HTMLSelectElement).value;
  
    return { numero_paciente, especialidad_cita };
  }
  
  function validateCitaForm(formData: CitaFormData): boolean {
    // Validar los campos según tus requisitos
    // Por ejemplo, verificar que no estén vacíos
    if (formData.numero_paciente.trim() === '' || formData.especialidad_cita === '') {
      return false;
    }
    return true;
  }
  