# NovaBank CR - Maqueta educativa de phishing

Proyecto simple tipo Ionic para Visual Studio Code. La app simula un caso de phishing bancario en un entorno controlado y educativo. No usa base de datos, no envia datos y no almacena credenciales.


## Objetivo

Mostrar como un atacante podria generar confianza mediante un correo falso, una pantalla de ingreso y una solicitud de codigo OTP. Al final, la app explica que fue una simulacion y presenta senales de alerta y controles de seguridad.

## Pantallas incluidas

- Correo simulado: presenta un mensaje urgente de actividad sospechosa y motiva al usuario a hacer clic.
- Inicio de sesion ficticio: muestra un formulario de usuario y contrasena. Los datos se borran al continuar.
- Verificacion OTP ficticia: simula la solicitud de un codigo de doble factor. El codigo no se guarda.
- Resultado educativo: informa que la experiencia fue una simulacion.
- Senales y controles: resume red flags, medidas preventivas y relacion con OWASP.

## Senales de alerta incluidas

- Dominio sospechoso: `alerta@novabank-verifica-cr.com`.
- Mensaje de urgencia con limite de tiempo.
- Amenaza de bloqueo de cuenta.
- Solicitud de usuario y contrasena completa.
- Solicitud de codigo OTP.
- Candado visual usado solo como elemento decorativo de confianza.

## Controles recomendados

- Revisar cuidadosamente la URL antes de iniciar sesion.
- No acceder a servicios bancarios desde enlaces recibidos por correo o SMS.
- Escribir manualmente la direccion oficial.
- No compartir codigos OTP.
- Usar autenticacion multifactor.
- Reportar correos sospechosos a la institucion.
- Mantener navegador y antivirus actualizados.

## Relacion con OWASP

- Fallas de identificacion y autenticacion: la simulacion intenta obtener credenciales.
- Diseno inseguro: la interfaz aparenta ser confiable para confundir al usuario.
- Exposicion de datos sensibles: se explica el riesgo de entregar datos privados.
- Falta de educacion al usuario: la pantalla final enseña como detectar phishing.

## Conceptos de seguridad

- Activo: credenciales, datos personales, cuentas bancarias y codigos OTP.
- Amenaza: campaña de phishing.
- Vulnerabilidad: falta de capacitacion para detectar sitios falsos.
- Riesgo: robo de identidad, fraude financiero y perdida de informacion.
- Control: capacitacion, MFA, verificacion de dominio y reporte de correos sospechosos.

## Nota etica

Esta maqueta usa una entidad ficticia llamada NovaBank CR. No utiliza nombre oficial, logotipo, dominio real ni identidad exacta de ningun banco real.
