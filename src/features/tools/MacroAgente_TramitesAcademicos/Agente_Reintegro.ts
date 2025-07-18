import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Reintegro(server: McpServer) {
	server.tool(
		"InformacionReintegro",
		`
        Devuelve información sobre el reintegro de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                        <contexto>
                          Este nodo explica cuándo y cómo solicitar un reintegro en la Universitaria de Colombia, así como sus implicaciones financieras.
                        </contexto>
                        <proposito>
                          <objetivo>
                            Explicar de forma concisa cuándo y cómo solicitar un reintegro en la Universitaria de Colombia, así como sus implicaciones financieras, ofreciendo al usuario la opción de profundizar en los detalles del proceso.
                          </objetivo>
                        </proposito>
                        <conocimiento_disponible>
                          <reintegro>
                            <cuando_solicitar>
                              <motivo>Cuando se atrasan en cinco (5) cuotas de acuerdo a las fechas establecidas en el cronograma de pagos.</motivo>
                              <motivo>Al momento de realizar aplazamiento de semestre.</motivo>
                            </cuando_solicitar>
                            <formas_realizar_proceso>
                              <forma tipo="Presencial">
                                <paso>Solicitar una cita en la página de la universidad en Solicitud de Cita – Reintegro o mediante el enlace: https://citas.universitariadecolombia.edu.co/</paso>
                              </forma>
                              <forma tipo="En línea">
                                <paso>Enviar una carta de solicitud firmada a través del sitio web de la universidad, en Solicitudes y Requerimientos – Procesos o ingresando al enlace: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</paso>
                              </forma>
                            </formas_realizar_proceso>
                            <formulario_solicitud_online>
                              <informacion_requerida>
                                <campo>Tipo de solicitud: (Solicitud de reintegro.)</campo>
                                <campo>Nombres y Apellidos: (Nombre y apellido completo del estudiante, tal como aparece en la matrícula.)</campo>
                                <campo>Correo y Confirmación del Correo: (Correo electrónico activo del estudiante.)</campo>
                                <campo>Teléfono: (Número de teléfono actual.)</campo>
                                <campo>Tipo de documento – Número de documento: (Número de documento reportado en la matrícula.)</campo>
                                <campo>Tipo de programa actual: (Programa académico que está cursando actualmente.)</campo>
                                <campo>Fecha de matrícula: (Fecha en que se matriculó.)</campo>
                                <campo>¿Homologado?: (Indicar si tiene alguna homologación en su plan académico.)</campo>
                                <campo>Período actual: (Periodo académico en el que se encuentra.)</campo>
                                <campo>Carta de solicitud: (Adjuntar la carta de solicitud de reintegro firmada por el estudiante y documentos de respaldo máximo 4 archivos de 5mb en formato pdf o jpg.)</campo>
                                <campo>Mensaje: (Describe tu solicitud o agrega información adicional a la solicitud.)</campo>
                              </informacion_requerida>
                              <finalizacion_proceso>
                                <paso>Hacer clic en el botón Enviar.</paso>
                                <confirmacion>Si el proceso se realizó correctamente, el sistema enviará un email de confirmación al correo registrado.</confirmacion>
                              </finalizacion_proceso>
                            </formulario_solicitud_online>
                            <implicaciones_financieras>
                              <implicacion>Al realizar el reintegro el estudiante deberá pagar el valor correspondiente a la matrícula del año actual (según valores pecuniarios del año actual aprobado por el Ministerio de Educación MEN).</implicacion>
                            </implicaciones_financieras>
                            <tiempo_respuesta>3 a 5 días hábiles.</tiempo_respuesta>
                          </reintegro>
                        </conocimiento_disponible>
                        <manejo_consultas>
                          <caso tipo="informacion_general_reintegro">
                            <condicion>Si el usuario pregunta de forma general sobre el reintegro.</condicion>
                            <accion>Presentar una visión general de cuándo se solicita, las formas de hacerlo y la implicación financiera, y ofrecer profundizar.</accion>
                            <ejemplo_respuesta>
                              <static_sentence_id>initial_reintegro_info</static_sentence_id>
                            </ejemplo_respuesta>
                          </caso>
                          <caso tipo="proceso_reintegro_online">
                            <condicion>Si el usuario pregunta cómo realizar el reintegro en línea.</condicion>
                            <accion>Explicar el proceso de solicitud en línea, el enlace y el tiempo de respuesta.</accion>
                            <ejemplo_respuesta>
                              <static_sentence_id>online_reintegro_process</static_sentence_id>
                            </ejemplo_respuesta>
                          </caso>
                          <caso tipo="cuando_solicitar_reintegro">
                            <condicion>Si el usuario pregunta cuándo debe solicitar un reintegro.</condicion>
                            <accion>Indicar las dos situaciones en las que se debe solicitar.</accion>
                            <ejemplo_respuesta>"Debes solicitar un reintegro cuando te atrasas en cinco cuotas de tu cronograma de pagos o si realizas un aplazamiento de semestre. ¿Hay algo más en lo que pueda ayudarte sobre el reintegro?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="implicaciones_financieras_reintegro">
                            <condicion>Si el usuario pregunta por el costo o las implicaciones financieras del reintegro.</condicion>
                            <accion>Explicar que la matrícula se actualiza al valor del año actual.</accion>
                            <ejemplo_respuesta>"Al realizar el reintegro, ten en cuenta que deberás pagar el valor de la matrícula correspondiente al año actual, de acuerdo con los valores aprobados por el Ministerio de Educación. ¿Hay algo más en lo que pueda ayudarte sobre el reintegro?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="datos_formulario_reintegro_online">
                            <condicion>Si el usuario pregunta qué datos se piden en el formulario de reintegro en línea.</condicion>
                            <accion>Detallar los campos requeridos en el formulario en línea.</accion>
                            <ejemplo_respuesta>"En el formulario de reintegro en línea te pedirán: el tipo de solicitud (reintegro), tus nombres y apellidos, correo (y su confirmación), teléfono, tipo y número de documento, tu programa actual, fecha de matrícula, si tienes homologación, tu período actual, y debes adjuntar la carta de solicitud firmada. También hay un campo para un mensaje adicional. ¿Hay algo más en lo que pueda ayudarte sobre el reintegro?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con el reintegro.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el proceso de reintegro en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte en qué situaciones se solicita el reintegro, las formas en que puedes realizarlo (presencial o en línea) y los requisitos del formulario, incluyendo las implicaciones financieras. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                        </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}