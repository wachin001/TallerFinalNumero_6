// Validación del Formulario de Doctores usando TypeScript

interface DoctorFormData {
    nombre: string;
    apellido: string;
    especialidad: string;
    consultorio: string;
    correo: string;
  }
  
  const doctorForm = document.getElementById('doctorForm') as HTMLFormElement;
  doctorForm.addEventListener('submit', handleDoctorFormSubmit);
  
  function handleDoctorFormSubmit(event: Event) {
    event.preventDefault();
    const formData = getDoctorFormData();
    if (validateDoctorForm(formData)) {
      // Enviar los datos o realizar alguna acción adicional
      console.log('Formulario de Doctores válido');
      console.log(formData);
      doctorForm.reset();
    } else {
      console.log('Formulario de Doctores inválido');
    }
  }
  
  function getDoctorFormData(): DoctorFormData {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const especialidad = (document.getElementById('especialidad') as HTMLSelectElement).value;
    const consultorio = (document.getElementById('consultorio') as HTMLInputElement).value;
    const correo = (document.getElementById('correo') as HTMLInputElement).value;
  
    return { nombre, apellido, especialidad, consultorio, correo };
  }
  
  function validateDoctorForm(formData: DoctorFormData): boolean {
    // Validar los campos según tus requisitos
    // Por ejemplo, verificar que no estén vacíos
    if (
      formData.nombre.trim() === '' ||
      formData.apellido.trim() === '' ||
      formData.especialidad === '' ||
      formData.consultorio.trim() === '' ||
      formData.correo.trim() === ''
    ) {
      return false;
    }
    return true;
  }
  