import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_RepetirAsignatura(server: McpServer) {
	server.tool(
		"InformacionRepeticionAsignaturasExamenes",
		`
        Devuelve información sobre la repetición de asignaturas y exámenes de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                        <contexto>
                          Este nodo explica cuándo y cómo repetir asignaturas, el proceso de inscripción y la validez de notas. También cubre información sobre exámenes de habilitación, suficiencia y supletorios.
                        </contexto>
                        <proposito>
                          <objetivo>
                            Explicar bajo qué circunstancias un estudiante debe repetir una materia (tipo de materia, rango de nota de pérdida, o pérdida de habilitación). Detallar el procedimiento para solicitar la inscripción de materias a repetir a través del formulario en línea, incluyendo los datos requeridos. También, destacar la importancia de la autorización, pago y radicación de la materia antes de la primera clase para que sea reconocida.
                          </objetivo>
                        </proposito>
                        <conocimiento_disponible>
                          <repetir_asignatura>
                            <cuando_repetir>
                              <criterio>Si la materia es **Práctica o Teórico-práctica**.</criterio>
                              <criterio>Si se pierde con una nota entre **0 y 1.9**.</criterio>
                              <criterio>Si presenta examen de habilitación y lo **pierde**.</criterio>
                            </cuando_repetir>
                            <procedimiento_inscripcion>
                              <paso>Ingresar a la página principal de la universidad y dirigirse a **Solicitudes y Requerimientos – Inscripción de materias**.</paso>
                              <enlace>https://solicitudes.universitariadecolombia.co/solictud-y-requerimiento/</enlace>
                            </procedimiento_inscripcion>
                            <formulario_inscripcion>
                              <datos_requeridos>
                                <campo>Tipo de solicitud: (Inscripción de materias.)</campo>
                                <campo>Nombres y Apellidos: (Nombre completo del estudiante, tal como aparece en la matrícula.)</campo>
                                <campo>Correo y Confirmación del Correo: (Correo electrónico activo del estudiante.)</campo>
                                <campo>Teléfono: (Número de teléfono actual.)</campo>
                                <campo>Tipo de documento – Número de documento: (Número de documento reportado en la matrícula.)</campo>
                                <campo>Tipo de programa actual: (Programa académico que está cursando actualmente.)</campo>
                                <campo>Nombre asignatura: (Nombre completo de la asignatura tal como aparece en el pensum.)</campo>
                                <campo>Fecha de matrícula: (Fecha en que se matriculó.)</campo>
                                <campo>¿Homologado?: (Indicar si tiene alguna homologación en su plan académico.)</campo>
                                <campo>Período actual: (Periodo académico en el que se encuentra.)</campo>
                                <campo>Mensaje: (Describe tu solicitud o agrega información adicional.)</campo>
                              </datos_requeridos>
                              <finalizacion_proceso>
                                <paso>Hacer clic en el botón Enviar.</paso>
                                <confirmacion>Si el proceso se realizó correctamente, el sistema enviará un email de confirmación al correo registrado.</confirmacion>
                              </finalizacion_proceso>
                            </formulario_inscripcion>
                            <tiempo_respuesta>4 días hábiles.</tiempo_respuesta>
                            <validez_notas>
                              <condicion_reconocimiento>Sólo serán consideradas oficiales y válidas las notas de las materias cursadas con **autorización mediante el desarrollo del formulario de inscripción virtual y cuyo pago y radicación se haya realizado antes de la primera sesión de clase**.</condicion_reconocimiento>
                              <advertencia>Las materias que sean cursadas sin este requerimiento no serán reconocidas.</advertencia>
                            </validez_notas>
                          </repetir_asignatura>
                          <informacion_examenes>
                            <examen tipo="Habilitación">
                              <cuando_se_realiza>Luego de 4 semanas de terminado el Periodo Académico (los 3 módulos) de acuerdo al cronograma en el Aula Virtual.</cuando_se_realiza>
                              <verificar_materias>Aula Virtual (Información General - Habilitaciones) o https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php.</verificar_materias>
                              <aplica_para>Asignaturas teóricas (no práctica ni teórico/práctica) perdidas con notas en un rango de **2.0 a 2.9**.</aplica_para>
                              <limite>Solo se pueden habilitar hasta **dos materias** perdidas en el periodo académico; de lo contrario, se reprueba el periodo.</limite>
                              <como_programar>Solicitar cita en https://citas.universitariadecolombia.edu.co/.</como_programar>
                              <dia_cita>Traer recibo de pago.</dia_cita>
                              <caracteristicas>Duración máxima: 40 minutos. Preguntas: selección múltiple. Nota máxima: 3.0.</caracteristicas>
                              <resultado>Entregado de forma inmediata por Registro y Control Académico.</resultado>
                            </examen>
                            <examen tipo="Suficiencia">
                              <aplica_para>Materias que no hayan sido cursadas ni aplazadas.</aplica_para>
                              <requisito>El estudiante debe tener conocimientos demostrables (certificados de cursos o constancias laborales).</requisito>
                              <como_solicitar>Solicitar por correo a registroycontrolacademico.iuc@gmail.com. La respuesta indicará aprobación y pasos a seguir.</como_solicitar>
                              <caracteristicas>Duración máxima: 1:30 (una hora y media). Preguntas: de conocimiento.</caracteristicas>
                              <tiempo_resultado>15 a 20 días hábiles (el original se entrega al docente para evaluación).</tiempo_resultado>
                              <limite>Solo se pueden solicitar **tres (3) pruebas de suficiencia** durante todo el programa académico.</limite>
                            </examen>
                            <examen tipo="Supletorio">
                              <aplica_para>Parciales no realizados.</aplica_para>
                              <procedimiento>
                                <paso>Pueden presentarse nuevamente con el mismo docente, previa autorización.</paso>
                                <paso>El docente debe enviar carta de autorización a registroycontrolacademico.iuc@gmail.com con el asunto: Examen Supletorio.</paso>
                                <paso>Con la autorización, el estudiante debe pagar el examen (según derechos pecuniarios) y radicarlo.</paso>
                                <paso>Posteriormente, coordinar con el docente la presentación.</paso>
                                <paso>El docente enviará el formato de corrección de nota diligenciado a registroycontrolacademico.iuc@gmail.com.</paso>
                              </procedimiento>
                              <tiempo_actualizacion_nota>15 a 20 días hábiles.</tiempo_actualizacion_nota>
                            </examen>
                          </informacion_examenes>
                        </conocimiento_disponible>
                        <manejo_consultas>
                          <caso tipo="cuando_repetir_asignatura">
                            <condicion>Si el usuario pregunta cuándo debe repetir una asignatura.</condicion>
                            <accion>Explicar los criterios para repetir una materia (tipo de materia, nota de pérdida, o pérdida de habilitación).</accion>
                            <ejemplo_respuesta>"Debes repetir una asignatura en la Universitaria de Colombia si es **práctica o teórico-práctica**, si la pierdes con una nota entre **0 y 1.9**, o si presentas y **pierdes el examen de habilitación**. ¿Te gustaría saber cómo solicitar la inscripción de una materia para repetir?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="procedimiento_inscripcion_repetir_materia">
                            <condicion>Si el usuario pregunta cómo se inscribe una materia a repetir o el enlace.</condicion>
                            <accion>Explicar el procedimiento para solicitar la inscripción de materias a repetir y el enlace.</accion>
                            <ejemplo_respuesta>"Para solicitar la inscripción de una materia a repetir, debes ingresar a Solicitudes y Requerimientos – Inscripción de materias en nuestra página principal, o directamente en este enlace: https://solicitudes.universitariadecolombia.co/solictud-y-requerimiento/. Allí deberás llenar un formulario. ¿Necesitas que te detalle los datos que pide el formulario?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="validez_notas_materias_repetidas">
                            <condicion>Si el usuario pregunta sobre la validez de las notas de las materias repetidas.</condicion>
                            <accion>Destacar la importancia de la autorización, pago y radicación antes de la primera clase.</accion>
                            <ejemplo_respuesta>"Es muy importante que sepas que solo serán reconocidas las notas de las materias a repetir si has hecho la solicitud formal con el formulario virtual, y si el pago y la radicación de la materia se realizaron **antes de tu primera clase**. Si no cumples con esto, la materia no será reconocida. ¿Hay algo más en lo que pueda ayudarte sobre la repetición de asignaturas o los exámenes?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="datos_formulario_repetir_materia">
                            <condicion>Si el usuario pregunta qué datos se piden en el formulario de inscripción de materias a repetir.</condicion>
                            <accion>Listar los campos requeridos en el formulario.</accion>
                            <ejemplo_respuesta>"En el formulario de inscripción de materias para repetir te pedirán: el tipo de solicitud (Inscripción de materias), tus nombres y apellidos, correo (y su confirmación), teléfono, tipo y número de documento, tu programa actual, el nombre completo de la asignatura a repetir, tu fecha de matrícula, si tienes homologación, tu período actual, y un mensaje con tu solicitud. ¿Hay algo más en lo que pueda ayudarte sobre la repetición de asignaturas o los exámenes?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="pregunta_examen_habilitacion">
                            <condicion>Si el usuario pregunta específicamente por el examen de habilitación.</condicion>
                            <accion>Proveer toda la información disponible sobre este tipo de examen.</accion>
                            <ejemplo_respuesta>"Sobre el examen de habilitación, te puedo decir que se realiza unas 4 semanas después de terminado el periodo académico. Aplica solo para asignaturas teóricas perdidas con notas entre 2.0 y 2.9. Solo puedes habilitar hasta dos materias por periodo. Para programarlo, debes solicitar una cita y llevar el recibo de pago. Dura 40 minutos, son preguntas de selección múltiple y la nota máxima es 3.0. ¿Hay algo más en lo que pueda ayudarte sobre la repetición de asignaturas o los exámenes?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="pregunta_examen_suficiencia">
                            <condicion>Si el usuario pregunta específicamente por el examen de suficiencia.</condicion>
                            <accion>Proveer toda la información disponible sobre este tipo de examen.</accion>
                            <ejemplo_respuesta>"El examen de suficiencia aplica solo para materias que no hayas cursado ni aplazado, y debes tener conocimientos demostrables. Lo solicitas por correo a registroycontrolacademico.iuc@gmail.com. Dura 1 hora y media y son preguntas de conocimiento. La respuesta puede tardar entre 15 y 20 días hábiles. Solo puedes solicitar hasta tres pruebas de suficiencia en todo tu programa académico. ¿Hay algo más en lo que pueda ayudarte sobre la repetición de asignaturas o los exámenes?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="pregunta_examen_supletorio">
                            <condicion>Si el usuario pregunta específicamente por el examen supletorio.</condicion>
                            <accion>Proveer toda la información disponible sobre este tipo de examen.</accion>
                            <ejemplo_respuesta>"Los exámenes supletorios son para parciales que no realizaste. Puedes presentarlos nuevamente con el mismo docente, previa autorización. El docente debe enviar una carta de autorización a registroycontrolacademico.iuc@gmail.com. Una vez autorizado, debes pagar el examen y radicarlo, y luego coordinas con el docente la presentación. La nota se actualiza en 15 a 20 días hábiles. ¿Hay algo más en lo que pueda ayudarte sobre la repetición de asignaturas o los exámenes?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con la repetición de asignaturas o los exámenes (habilitación, suficiencia, supletorio).</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la repetición de asignaturas y los exámenes de habilitación, suficiencia o supletorios en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte cuándo debes repetir una asignatura y cómo realizar el proceso de inscripción para ello, incluyendo los requisitos y la importancia de los plazos. También puedo darte información sobre exámenes de habilitación, suficiencia y supletorios. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                        </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}