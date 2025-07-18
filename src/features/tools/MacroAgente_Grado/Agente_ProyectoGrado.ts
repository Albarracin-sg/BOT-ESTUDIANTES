import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";


export function Agente_ProyectoGrado(server: McpServer) {
	server.tool(
		"Agente_ProyectoGrado",
		`
        Devuelve información del proceso de Proyecto de Grado de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo describe el proceso de Proyecto de Grado: prerrequisitos, inscripción, sustentación y finalización.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Describir los prerrequisitos académicos para iniciar el Proyecto de Grado. Detallar el proceso de inscripción, incluyendo los plazos específicos por programa. Explicar los requisitos de inscripción, el proceso de propuesta de tema y su aprobación, el foro de anteproyectos, la asignación de tutores y las tutorías. Finalmente, informar sobre la sustentación (fechas, formato, resultados), las opciones en caso de no aprobación (correcciones, segunda sustentación, posposición del proceso), la revisión de Normas APA, y la finalización del proceso.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <proceso_proyecto_grado>
                            <fase nombre="Prerrequisitos">
                                <requisito>Avance académico de al menos séptimo semestre.</requisito>
                                <requisito>Haber completado satisfactoriamente el tercer módulo del programa.</requisito>
                            </fase>
                            <fase nombre="Inscripción">
                                <metodo>Exclusivamente a través de la plataforma designada.</metodo>
                                <plazos>
                                    <programa_especifico nombre="Derecho">Última semana de marzo y última semana de septiembre.</programa_especifico>
                                    <otros_programas>Última semana de junio y última semana de noviembre.</otros_programas>
                                </plazos>
                                <requisitos>
                                    <requisito>Estar al día con los pagos.</requisito>
                                    <requisito>No tener más de una materia pendiente.</requisito>
                                    <requisito>Presentar Paz & Salvo.</requisito>
                                </requisitos>
                            </fase>
                            <fase nombre="Propuesta de Tema y Aprobación">
                                <paso>Presentar propuesta al departamento de proyectos de grado.</paso>
                                <paso>Reenvío de propuesta hasta su aprobación.</paso>
                            </fase>
                            <fase nombre="Foro de Anteproyectos">
                                <condicion>Un mes después de la aprobación de la propuesta.</condicion>
                                <accion>Cargar anteproyectos en la plataforma.</accion>
                            </fase>
                            <fase nombre="Asignación de Tutor">
                                <resultado>Publicación de listado con estudiantes, título de proyecto y tutor asignado.</resultado>
                            </fase>
                            <fase nombre="Tutorías">
                                <duracion>2 meses.</duracion>
                                <horas>20 horas de tutorías programadas.</horas>
                                <objetivo>Orientación y respaldo en la elaboración del proyecto.</objetivo>
                            </fase>
                            <fase nombre="Sustentación y Resultados">
                                <preparacion>Apertura de foro de entrega final dos semanas antes de la sustentación.</preparacion>
                                <fechas>Exclusivamente los sábados.</fechas>
                                <resultados>Recibidos el mismo día de la sustentación.</resultados>
                            </fase>
                            <fase nombre="Posición ante No Aprobación">
                                <opcion_1>
                                    <paso>Realizar correcciones en 15 días.</paso>
                                    <paso>Cargar documento para segunda sustentación.</paso>
                                </opcion_1>
                                <opcion_2>
                                    <condicion>No aprobar después de la segunda oportunidad.</condicion>
                                    <resultado>Proceso de grado pospuesto por seis meses.</resultado>
                                    <requisito_reingreso>Reintegrarse al proceso, implicando nuevas tutorías y correcciones.</requisito_reingreso>
                                </opcion_2>
                            </fase>
                            <fase nombre="Revisión de Normas APA">
                                <paso>Enviar trabajo a revisiondenormasapa@gmail.com.</paso>
                                <duracion>Promedio de un mes.</duracion>
                            </fase>
                            <fase nombre="Finalización del Proceso">
                                <resultado>Recepción de correo con "Carta de Culminación de Proceso de Grado" y "Guía para Entrega de CD".</resultado>
                            </fase>
                        </proceso_proyecto_grado>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="prerrequisitos_proyecto_grado">
                            <condicion>Si el usuario pregunta por los requisitos para iniciar el proyecto de grado.</condicion>
                            <accion>Describir los prerrequisitos académicos.</accion>
                            <ejemplo_respuesta>"Para iniciar tu Proyecto de Grado, necesitas haber completado al menos el séptimo semestre y haber aprobado el tercer módulo de tu programa. ¿Hay algo más en lo que pueda ayudarte sobre el Proyecto de Grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="inscripcion_proyecto_grado">
                            <condicion>Si el usuario pregunta sobre cómo o cuándo inscribirse al proyecto de grado.</condicion>
                            <accion>Detallar el proceso y los plazos de inscripción por programa.</accion>
                            <ejemplo_respuesta>"La inscripción al Proyecto de Grado se hace por nuestra plataforma. Para Derecho, las inscripciones son la última semana de marzo y septiembre. Para los demás programas, es la última semana de junio y noviembre. Debes estar al día con los pagos y no tener más de una materia pendiente. ¿Hay algo más en lo que pueda ayudarte sobre el Proyecto de Grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="proceso_sustentacion">
                            <condicion>Si el usuario pregunta sobre la sustentación o qué pasa si no aprueba.</condicion>
                            <accion>Explicar el proceso de sustentación y las opciones en caso de no aprobación.</accion>
                            <ejemplo_respuesta>"Dos semanas antes de sustentar se abre un foro para la entrega final. Las sustentaciones son los sábados y los resultados los tienes ese mismo día. Si no apruebas, tienes 15 días para corregir y presentar una segunda vez. Si aun así no apruebas, tu proceso se pospone por seis meses, y deberás retomar las tutorías. ¿Hay algo más en lo que pueda ayudarte sobre el Proyecto de Grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="revision_normas_apa">
                            <condicion>Si el usuario pregunta por la revisión de Normas APA para el proyecto.</condicion>
                            <accion>Indicar el correo y la duración del proceso.</accion>
                            <ejemplo_respuesta>"Una vez aprobado tu proyecto, lo envías a revisiondenormasapa@gmail.com para la revisión de Normas APA. Este proceso dura alrededor de un mes. ¿Hay algo más en lo que pueda ayudarte sobre el Proyecto de Grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con el Proyecto de Grado.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el proceso del Proyecto de Grado en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte los prerrequisitos, el proceso de inscripción, la propuesta de tema, las tutorías, la sustentación y qué sucede si no apruebas tu Proyecto de Grado. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}