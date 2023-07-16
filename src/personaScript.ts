// Validación del Formulario de Personas usando TypeScript

interface PersonaFormData {
    nombre: string;
    cedula: string;
    apellido: string;
    edad: number;
    telefono: string;
  }
  
  const personaForm = document.getElementById('personaForm') as HTMLFormElement;
  personaForm.addEventListener('submit', handlePersonaFormSubmit);
  
  function handlePersonaFormSubmit(event: Event) {
    event.preventDefault();
    const formData = getPersonaFormData();
    if (validatePersonaForm(formData)) {
      // Enviar los datos o realizar alguna acción adicional
      console.log('Formulario de Personas válido');
      console.log(formData);
      personaForm.reset();
    } else {
      console.log('Formulario de Personas inválido');
    }
  }
  
  function getPersonaFormData(): PersonaFormData {
    const nombre = (document.getElementById('nombre_persona') as HTMLInputElement).value;
    const cedula = (document.getElementById('cedula') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido_persona') as HTMLInputElement).value;
    const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value);
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
  
    return { nombre, cedula, apellido, edad, telefono };
  }
  
  function validatePersonaForm(formData: PersonaFormData): boolean {
    // Validar los campos según tus requisitos
    // Por ejemplo, verificar que no estén vacíos
    if (
      formData.nombre.trim() === '' ||
      formData.cedula.trim() === '' ||
      formData.apellido.trim() === '' ||
      isNaN(formData.edad) ||
      formData.telefono.trim() === ''
    ) {
      return false;
    }
    return true;
  }
  