import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Semilleros(server: McpServer) {
	server.tool(
		"Agente_Semilleros",
		`
        Devuelve información de los semilleros de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo informa sobre los semilleros (Especial y Ordinario) de la Universitaria de Colombia, sus diferencias y procesos clave.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Informar de forma concisa sobre los dos tipos de semilleros (Especial y Ordinario) de la Universitaria de Colombia, destacando sus diferencias y ofreciendo profundizar en los detalles si el usuario lo desea.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <semillero tipo="Especial">
                            <prerrequisitos>
                                <item>Avance académico correspondiente a décimo semestre (Derecho) o noveno semestre (demás programas).</item>
                                <item>Todos los programas deben haber culminado el diplomado.</item>
                            </prerrequisitos>
                            <proceso_inscripcion>
                                <metodo>Exclusivamente a través de la plataforma designada.</metodo>
                                <plazos>
                                    <programa_especifico nombre="Derecho">Última semana de marzo y última semana de septiembre.</programa_especifico>
                                    <otros_programas>Última semana de junio y última semana de noviembre.</otros_programas>
                                </plazos>
                                <requisitos_adicionales>
                                    <item>Estar al corriente en pagos.</item>
                                    <item>Tener Paz & Salvo académico (todas las materias aprobadas).</item>
                                </requisitos_adicionales>
                            </proceso_inscripcion>
                            <induccion_tutorias>
                                <item>Recibirán link de inducción (explica procesos de investigación, fecha pago semillero especial).</item>
                                <item>20 horas mensuales de tutorías durante tres meses y medio.</item>
                            </induccion_tutorias>
                            <quorum_y_opciones>
                                <item>Si no se alcanza el cuórum (siete estudiantes), deben elegir entre ser transferidos al proceso de semillero ordinario o esperar al siguiente proceso especial.</item>
                            </quorum_y_opciones>
                            <sustentacion_resultados>
                                <item>Dos semanas antes, foro de entrega final.</item>
                                <item>Sustentaciones los sábados.</item>
                                <item>Resultados el mismo día.</item>
                            </sustentacion_resultados>
                            <posicion_no_aprobacion>
                                <item>Proceso de grado pospuesto seis meses.</item>
                                <item>Deben participar nuevamente en tutorías y realizar correcciones.</item>
                            </posicion_no_aprobacion>
                            <revision_final_normas_apa>
                                <item>Una vez aprobado el proyecto, enviar a revisiondenormasapa@gmail.com.</item>
                                <item>Duración: un mes en promedio.</item>
                            </revision_final_normas_apa>
                            <finalizacion_proceso>
                                <item>Correo con "Carta de Culminación de Proceso de Grado" y "Guía para Entrega de CD".</item>
                            </finalizacion_proceso>
                        </semillero>
                        <semillero tipo="Ordinario">
                            <prerrequisitos>
                                <item>Estar al menos en séptimo semestre.</item>
                                <item>Haber completado el tercer módulo del programa respectivo.</item>
                            </prerrequisitos>
                            <proceso_inscripcion>
                                <metodo>Exclusivamente a través de la plataforma designada.</metodo>
                                <plazos>
                                    <programa_especifico nombre="Derecho">Última semana de marzo y última semana de septiembre.</programa_especifico>
                                    <otros_programas>Última semana de junio y última semana de noviembre.</otros_programas>
                                </plazos>
                                <requisitos_inscripcion>
                                    <item>Estar al día con los pagos.</item>
                                    <item>No tener más de una materia pendiente (Paz & Salvo).</item>
                                </requisitos_inscripcion>
                            </proceso_inscripcion>
                            <induccion_tutorias>
                                <item>Proporcionarán link de inducción.</item>
                                <item>Asignarán tutorías de aproximadamente 10 horas mensuales durante 5 a 6 meses.</item>
                            </induccion_tutorias>
                            <sustentacion_resultados>
                                <item>Sustentaciones los sábados.</item>
                                <item>Si no se aprueba, oportunidad de correcciones en 15 días para segunda sustentación.</item>
                            </sustentacion_resultados>
                            <posicion_no_aprobacion>
                                <item>Si no aprueba después de la segunda oportunidad, proceso pospuesto por 6 meses.</item>
                                <item>Deben reintegrarse al proceso y hacer las correcciones necesarias.</item>
                            </posicion_no_aprobacion>
                            <revision_normas_apa>
                                <item>Una vez aprobado el proyecto, enviar a revisiondenormasapa@gmail.com.</item>
                            </revision_normas_apa>
                            <finalizacion_proceso>
                                <item>Recibirán un correo con "Carta de Culminación de Proceso de Grado" y "Guía para Entrega de CD".</item>
                            </finalizacion_proceso>
                        </semillero>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="informacion_general_semilleros">
                            <condicion>Si el usuario pregunta de forma general sobre los semilleros.</condicion>
                            <accion>Presentar una visión general de ambos tipos de semilleros, destacando sus diferencias clave, y ofrecer profundizar.</accion>
                            <ejemplo_respuesta>
                                Los semilleros de la Universitaria de Colombia son de dos tipos: Especial y Ordinario. Ambos buscan apoyar tu proyecto de grado, pero tienen requisitos y procesos diferentes. ¿Te gustaría conocer más sobre uno en específico o sus diferencias? ¿Deseas ayuda con otro trámite o consulta?
                            </ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalle_semillero_especial">
                            <condicion>Si el usuario pide detalles específicos sobre el Semillero Especial (prerrequisitos, inscripción, etc.).</condicion>
                            <accion>Proporcionar información detallada del Semillero Especial.</accion>
                            <ejemplo_respuesta>"El Semillero Especial es para estudiantes de décimo (Derecho) o noveno (otros programas) semestre que ya culminaron el diplomado. La inscripción se hace por la plataforma y los plazos varían según tu programa (marzo/septiembre para Derecho; junio/noviembre para los demás). Debes estar al día en pagos y sin materias pendientes. ¿Hay algo más en lo que pueda ayudarte sobre el Semillero Especial?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalle_semillero_ordinario">
                            <condicion>Si el usuario pide detalles específicos sobre el Semillero Ordinario (prerrequisitos, inscripción, etc.).</condicion>
                            <accion>Proporcionar información detallada del Semillero Ordinario.</accion>
                            <ejemplo_respuesta>"El Semillero Ordinario es para estudiantes desde séptimo semestre que ya completaron el tercer módulo. La inscripción también es por la plataforma con plazos similares a los del Semillero Especial. Debes estar al día en pagos y con máximo una materia pendiente. ¿Hay algo más en lo que pueda ayudarte sobre el Semillero Ordinario?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con los semilleros.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el Semillero Especial y el Semillero Ordinario de la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo, enfocándose en los semilleros.</accion>
                            <ejemplo_respuesta>"Puedo explicarte los prerrequisitos, el proceso de inscripción, las tutorías, la sustentación y qué sucede si no apruebas para el Semillero Ordinario y el Semillero Especial, además de señalar sus diferencias. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}