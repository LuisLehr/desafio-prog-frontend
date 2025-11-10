const HORARIOS_VALIDOS = ['21','22','23','31','32','33','41','42','43','51','52','53','61','62','63'];

const formatarHorario = (codigo) => {
  if (!codigo || !HORARIOS_VALIDOS.includes(codigo)) return "Horário inválido";
  const dias = { '2': 'Segunda', '3': 'Terça', '4': 'Quarta', '5': 'Quinta', '6': 'Sexta' };
  const turnos = { '1': 'Manhã', '2': 'Tarde', '3': 'Noite' };
  return `${dias[codigo[0]]} - ${turnos[codigo[1]]}`;
};