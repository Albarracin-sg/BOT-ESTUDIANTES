import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_CambioJornada(server: McpServer) {
	server.tool(
		"Agente_CambioJornada",
		`
        Devuelve información sobre el cambio de jornada de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                        <contexto>
                          Este nodo explica cómo y cuándo solicitar un cambio de jornada: plazos, requisitos (carta y anexos) y proceso en línea.
                        </contexto>
                        <proposito>
                          <objetivo>
                            Explicar el plazo permitido para solicitar un cambio de jornada, los requisitos de la solicitud (incluyendo la carta y los anexos que certifiquen la necesidad), y el procedimiento detallado para realizar la solicitud a través del formulario en línea, especificando los datos y documentos que se deben diligenciar y adjuntar, así como el tiempo de respuesta esperado.
                          </objetivo>
                        </proposito>
                        <conocimiento_disponible>
                          <cambio_jornada>
                            <plazos_y_requisitos>
                              <plazo>Se puede cambiar de jornada solo en los cuatro (4) días antes de iniciar o los primeros cuatro (4) días de iniciar el módulo académico.</plazo>
                              <requisito_documental>El estudiante debe enviar una carta de solicitud con los motivos del cambio de jornada, con anexo que certifique la necesidad del cambio.</requisito_documental>
                            </plazos_y_requisitos>
                            <procedimiento_solicitud>
                              <paso>Para realizar este proceso debe ingresar al sitio web de la universidad y dar clic sobre el botón de Solicitudes y Requerimientos o ingresar al siguiente enlace: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</paso>
                            </procedimiento_solicitud>
                            <formulario_solicitud>
                              <datos_requeridos>
                                <campo>Tipo de solicitud: (Indique "solicitud Cambio de jornada".)</campo>
                                <campo>Nombres y Apellidos: (Nombre completo del estudiante, tal como aparece en la matrícula.)</campo>
                                <campo>Correo y Confirmación del Correo: (Correo electrónico activo del estudiante.)</campo>
                                <campo>Teléfono: (Número de teléfono actual.)</campo>
                                <campo>Tipo de documento – Número de documento: (Número de documento reportado en la matrícula.)</campo>
                                <campo>Tipo de programa actual: (Programa académico que está cursando actualmente.)</campo>
                                <campo>Jornada a cambiar: (Indique la jornada que desea cambiar.)</campo>
                                <campo>Fecha de matrícula: (Indique la fecha en que se matriculó.)</campo>
                                <campo>¿Homologado?: (Indique si tiene alguna homologación en su plan académico.)</campo>
                                <campo>Período actual: (Periodo académico en el que se encuentra.)</campo>
                                <campo>Carta de solicitud: (Adjunte la carta formal de solicitud de cambio de jornada firmada por el estudiante y documentos de respaldo máximo 4 archivos de 5MB en formato PDF o JPG.)</campo>
                                <campo>Mensaje: (Describe tu solicitud o agrega información adicional a la solicitud.)</campo>
                              </datos_requeridos>
                              <finalizacion_proceso>
                                <paso>Haga clic en el botón Enviar.</paso>
                                <confirmacion>Si el proceso se realizó correctamente, el sistema enviará un email de confirmación al correo registrado.</confirmacion>
                              </finalizacion_proceso>
                            </formulario_solicitud>
                            <tiempo_respuesta>3 días hábiles.</tiempo_respuesta>
                          </cambio_jornada>
                        </conocimiento_disponible>
                        <manejo_consultas>
                          <caso tipo="informacion_general_cambio_jornada">
                            <condicion>Si el usuario pregunta de forma general sobre el cambio de jornada.</condicion>
                            <accion>Explicar los plazos y la necesidad de la carta y anexos, y ofrecer el proceso detallado.</accion>
                            <ejemplo_respuesta>"Puedes solicitar un cambio de jornada en la Universitaria de Colombia solo los cuatro días antes o los primeros cuatro días de iniciado el módulo. Necesitarás una carta de solicitud con tus motivos y un anexo que certifique la necesidad del cambio. ¿Te gustaría saber cómo hacer la solicitud o qué datos se piden en el formulario?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="plazos_cambio_jornada">
                            <condicion>Si el usuario pregunta cuándo puede solicitar un cambio de jornada.</condicion>
                            <accion>Especificar el plazo permitido.</accion>
                            <ejemplo_respuesta>"Puedes solicitar un cambio de jornada solo en los cuatro días antes de iniciar o los primeros cuatro días de iniciado el módulo académico. ¿Hay algo más en lo que pueda ayudarte sobre el cambio de jornada?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="requisitos_cambio_jornada">
                            <condicion>Si el usuario pregunta qué requisitos o documentos necesita para el cambio de jornada.</condicion>
                            <accion>Detallar la necesidad de la carta y los anexos que certifiquen la necesidad.</accion>
                            <ejemplo_respuesta>"Para el cambio de jornada, necesitas enviar una carta de solicitud explicando tus motivos y adjuntar un anexo que certifique la necesidad de ese cambio. ¿Hay algo más en lo que pueda ayudarte sobre el cambio de jornada?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="procedimiento_solicitud_cambio_jornada">
                            <condicion>Si el usuario pregunta cómo se realiza la solicitud o el enlace.</condicion>
                            <accion>Explicar el procedimiento y proporcionar el enlace directo.</accion>
                            <ejemplo_respuesta>"Para solicitar el cambio de jornada, debes ingresar al enlace de Solicitudes y Requerimientos: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/. Allí diligencias un formulario con tus datos. ¿Necesitas saber qué datos exactos se piden en el formulario?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="datos_formulario_cambio_jornada">
                            <condicion>Si el usuario pregunta qué datos específicos se piden en el formulario.</condicion>
                            <accion>Listar todos los campos del formulario.</accion>
                            <ejemplo_respuesta>"En el formulario te pedirán: el tipo de solicitud (cambio de jornada), tus nombres y apellidos completos, correo y su confirmación, teléfono, tipo y número de documento, tu programa actual, la jornada a la que quieres cambiar, tu fecha de matrícula, si tienes homologación, tu período actual, y debes adjuntar la carta de solicitud firmada con los documentos de respaldo. También hay un campo para un mensaje adicional. ¿Hay algo más en lo que pueda ayudarte sobre el cambio de jornada?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con el cambio de jornada.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el proceso de cambio de jornada en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte los plazos para el cambio de jornada, los documentos que necesitas presentar (como la carta y los anexos que certifiquen tu necesidad) y cómo realizar la solicitud en línea, incluyendo todos los datos que debes llenar en el formulario. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                        </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}