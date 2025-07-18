import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_TIS(server: McpServer) {
	server.tool(
		"Agente_TIS",
		`
        Devuelve información del Trabajo Integrador de Saberes (TIS) de posgrado de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo explica el Trabajo Integrador de Saberes (TIS) para posgrado: requisitos, inscripción, tutorías, socialización y culminación.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Describir los prerrequisitos académicos para iniciar el TIS. Detallar el proceso de inscripción, incluyendo los plazos. Explicar cómo se elige la línea de investigación y el tema, la aprobación y asignación de tutor, el periodo y horas de tutorías, la carga del trabajo final, el proceso y formato de socialización, las implicaciones de no socializar en las fechas estipuladas, y la finalización del proceso.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <trabajo_integrador_saberes>
                            <fase nombre="Prerrequisitos">
                                <requisito>Estudiantes de posgrado en su segundo semestre académico.</requisito>
                                <requisito>Haber iniciado el primer módulo.</requisito>
                            </fase>
                            <fase nombre="Proceso de Inscripción">
                                <metodo>Exclusivamente a través de la plataforma designada.</metodo>
                                <plazos>
                                    <mes>Marzo.</mes>
                                    <mes>Octubre.</mes>
                                </plazos>
                            </fase>
                            <fase nombre="Elección de Línea de Investigación y Tema">
                                <paso>Elegir una línea de investigación según la especialización.</paso>
                                <paso>Entregar el tema a desarrollar en el TIS.</paso>
                            </fase>
                            <fase nombre="Aprobación del Tema y Asignación de Tutor">
                                <paso>Publicación de la aprobación del tema con comentarios.</paso>
                                <paso>Asignación del tutor.</paso>
                            </fase>
                            <fase nombre="Tutorías">
                                <duracion>Dos meses.</duracion>
                                <horas>10 horas de tutorías programadas.</horas>
                                <objetivo>Orientación y apoyo en la elaboración del trabajo.</objetivo>
                            </fase>
                            <fase nombre="Carga del Trabajo Final">
                                <condicion>Al finalizar las tutorías.</condicion>
                                <accion>Cargar el trabajo final para la posterior socialización.</accion>
                            </fase>
                            <fase nombre="Socialización del Trabajo">
                                <fecha>20 días después de la entrega del trabajo final.</fecha>
                                <formato>Virtual (Zoom).</formato>
                                <duracion_grupo>10 minutos por grupo.</duracion_grupo>
                            </fase>
                            <fase nombre="Posición ante No Socialización">
                                <opcion_1>
                                    <accion>Segunda oportunidad en fechas posteriores.</accion>
                                </opcion_1>
                                <opcion_2>
                                    <condicion>No socializar en la segunda oportunidad.</condicion>
                                    <accion>Esperar al siguiente ciclo para iniciar nuevamente el proceso.</accion>
                                </opcion_2>
                            </fase>
                            <fase nombre="Finalización del Proceso">
                                <resultado>Recepción de correo electrónico con los documentos de culminación del TIS.</resultado>
                            </fase>
                        </trabajo_integrador_saberes>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="prerrequisitos_TIS">
                            <condicion>Si el usuario pregunta por los requisitos para iniciar el TIS.</condicion>
                            <accion>Describir los prerrequisitos académicos.</accion>
                            <ejemplo_respuesta>"Para iniciar el Trabajo Integrador de Saberes (TIS), si eres estudiante de posgrado, necesitas estar en tu segundo semestre académico y haber iniciado el primer módulo. ¿Hay algo más en lo que pueda ayudarte sobre el TIS?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="inscripcion_TIS">
                            <condicion>Si el usuario pregunta cómo o cuándo inscribirse al TIS.</condicion>
                            <accion>Detallar el proceso y los plazos de inscripción.</accion>
                            <ejemplo_respuesta>"La inscripción para el TIS se realiza a través de nuestra plataforma en los meses de marzo y octubre. ¿Hay algo más en lo que pueda ayudarte sobre el TIS?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="proceso_socializacion">
                            <condicion>Si el usuario pregunta sobre la socialización del TIS o qué pasa si no puede socializar.</condicion>
                            <accion>Explicar el proceso y las implicaciones de no socializar.</accion>
                            <ejemplo_respuesta>"La socialización del TIS se hace 20 días después de entregar el trabajo final, de forma virtual por Zoom, y dura 10 minutos por grupo. Si no puedes socializar en la fecha, tendrás una segunda oportunidad. Si tampoco puedes en esa, deberás esperar al siguiente ciclo para empezar de nuevo. ¿Hay algo más en lo que pueda ayudarte sobre el TIS?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con el TIS.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el Trabajo Integrador de Saberes (TIS) en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte los prerrequisitos, el proceso de inscripción, cómo se elige el tema, las tutorías, la socialización y qué sucede si no puedes socializar en las fechas establecidas para tu TIS. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}