import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_VerificarCarpetasGrado(server: McpServer) {
	server.tool(
		"Agente_VerificarCarpetasGrado",
		`
        Devuelve información sobre la verificación de carpetas para grado de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo explica cómo verificar carpetas para grado: requisitos, fechas y formulario de solicitud.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Explicar las condiciones necesarias para que un estudiante pueda solicitar la revisión de su carpeta para el proceso de grado (estar al día financiera y académicamente, y cumplir con los requisitos de grado). Describir cómo y dónde consultar las fechas y el enlace para enviar la solicitud, y detallar el formulario de "Revisión de Carpeta", especificando los datos que el estudiante debe diligenciar para una solicitud exitosa.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <proceso_revision_carpeta>
                            <condiciones>
                                <condicion>Estar al día financiera y académicamente.</condicion>
                                <condicion>Cumplir con los requisitos de grado.</condicion>
                            </condiciones>
                            <consulta_fechas_enlace>
                                <metodo>Consultar la circular publicada en el aula virtual (opción "grados").</metodo>
                            </consulta_fechas_enlace>
                            <gestion>
                                <metodo>Exclusivamente por correo electrónico.</metodo>
                                <enlace>https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</enlace>
                            </gestion>
                        </proceso_revision_carpeta>
                        <formulario_revision_carpeta>
                            <datos_requeridos>
                                <dato>Nombres (completo, como en la matrícula).</dato>
                                <dato>Apellidos (completo, como en la matrícula).</dato>
                                <dato>Correo (activo) y confirmación.</dato>
                                <dato>Tipo y Número de documento (reportado en la matrícula).</dato>
                                <dato>Teléfono (actual).</dato>
                                <dato>Tipo de programa (cursando actualmente).</dato>
                                <dato>Jornada (matriculado).</dato>
                                <dato>Periodo académico (cursando o cursado).</dato>
                                <dato>Mensaje (descripción de la solicitud o info adicional).</dato>
                            </datos_requeridos>
                            <confirmacion>
                                <metodo>El sistema enviará un email de confirmación al correo registrado.</metodo>
                            </confirmacion>
                        </formulario_revision_carpeta>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="requisitos_revision">
                            <condicion>Si el usuario pregunta por los requisitos para revisar la carpeta de grado.</condicion>
                            <accion>Explicar las condiciones necesarias.</accion>
                            <ejemplo_respuesta>"Para la revisión de tu carpeta de grado, necesitas estar al día financiera y académicamente, además de cumplir con todos los requisitos de grado. ¿Hay algo más en lo que pueda ayudarte sobre la revisión de carpetas para grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="fechas_solicitud">
                            <condicion>Si el usuario pregunta dónde consultar fechas o cómo enviar la solicitud.</condicion>
                            <accion>Indicar dónde consultar y el enlace para la solicitud.</accion>
                            <ejemplo_respuesta>"Las fechas y el enlace para enviar tu solicitud los encuentras en la circular publicada en el aula virtual, en la opción 'grados'. Puedes enviar tu solicitud directamente desde este enlace: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/. ¿Hay algo más en lo que pueda ayudarte sobre la revisión de carpetas para grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="datos_formulario">
                            <condicion>Si el usuario pregunta qué datos se necesitan para el formulario de revisión de carpeta.</condicion>
                            <accion>Detallar los campos requeridos en el formulario.</accion>
                            <ejemplo_respuesta>"En el formulario de Revisión de Carpeta debes diligenciar tus nombres y apellidos completos, correo electrónico y confirmación, tipo y número de documento, teléfono actual, tipo de programa que cursas, jornada y el periodo académico. También hay un campo para que describas tu solicitud. ¿Hay algo más en lo que pueda ayudarte sobre la revisión de carpetas para grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con la verificación de carpetas para grados.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la verificación de carpetas para el proceso de grado. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte los requisitos para la revisión de carpeta de grado, dónde encontrar las fechas para la solicitud y cómo diligenciar el formulario. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}