import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Aplazamiento(server: McpServer) {
	server.tool(
		"Aplazamientos Módulo o Semestre Universitaria de Colombia",
		`
        Devuelve información sobre aplazamientos de módulo o semestre en la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo brinda información sobre aplazamientos de módulo o semestre: tipos, implicaciones, fechas y proceso de solicitud.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Ofrecer información concisa y clara sobre los tipos de aplazamiento (módulo y semestre), sus implicaciones, fechas y el proceso general de solicitud en la Universitaria de Colombia, invitando al usuario a pedir más detalles específicos.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <aplazamiento>
                            <condicion_general>El estudiante debe estar activo financieramente (al día en pagos).</condicion_general>
                            <tipos>
                                <tipo nombre="Aplazamiento de Módulo">
                                    <implicacion>No hay cambio en valores pecuniarios.</implicacion>
                                    <implicacion>El estudiante continúa en su misma base.</implicacion>
                                    <implicacion>Deja pendientes las dos materias aplazadas.</implicacion>
                                </tipo>
                                <tipo nombre="Aplazamiento de Semestre">
                                    <implicacion>Genera aumento de matrícula a valores pecuniarios del año actual.</implicacion>
                                    <implicacion>El estudiante debe reintegrarse a la base más cercana según el periodo a cursar.</implicacion>
                                    <implicacion>Debe solicitar proceso de reintegro.</implicacion>
                                </tipo>
                            </tipos>
                            <fechas>
                                <rango>Solo 04 días antes de iniciar o los primeros 04 días de iniciar el módulo.</rango>
                            </fechas>
                            <casos_aprobacion_fuera_fechas>
                                <caso nombre="Calamidad familiar">
                                    <documento_respaldo>Acta de defunción.</documento_respaldo>
                                </caso>
                                <caso nombre="Empleo">
                                    <documento_respaldo>Certificación laboral.</documento_respaldo>
                                </caso>
                                <caso nombre="Salud">
                                    <documento_respaldo>Incapacidad médica.</documento_respaldo>
                                </caso>
                                <requisito_adicional>Enviar una carta firmada con los motivos del aplazamiento.</requisito_adicional>
                            </casos_aprobacion_fuera_fechas>
                            <proceso_solicitud>
                                <paso>Ingresar al enlace de Solicitudes y Requerimientos: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</paso>
                                <paso>Diligenciar el formulario completo.</paso>
                                <datos_requeridos>
                                    <campo>¿Qué tipo de solicitud deseas realizar?: (Aplazamiento Módulo – Aplazamiento Semestre)</campo>
                                    <campo>Nombres y Apellidos (completos, como en la matrícula).</campo>
                                    <campo>Tipo y Número de documento (reportado en la matrícula).</campo>
                                    <campo>Email (activo).</campo>
                                    <campo>Teléfono (actual).</campo>
                                    <campo>Programa (en el que está matriculado).</campo>
                                    <campo>Período académico actual.</campo>
                                    <campo>Jornada (en la cual está matriculado).</campo>
                                    <campo>Mensaje (especificaciones del aplazamiento).</campo>
                                    <campo>Adjuntar carta de solicitud de aplazamiento firmada y documentos de respaldo (máximo 4 archivos de 5mb en PDF o JPG).</campo>
                                </datos_requeridos>
                                <paso>Marcar "aceptar términos y condiciones".</paso>
                                <paso>Clic en "enviar".</pasos>
                                <confirmacion>Recibirá un email de confirmación al correo registrado.</confirmacion>
                                <tiempo_respuesta>3 días hábiles.</tiempo_respuesta>
                            </proceso_solicitud>
                        </aplazamiento>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="informacion_general_aplazamiento">
                            <condicion>Si el usuario pregunta de forma general sobre los aplazamientos.</condicion>
                            <accion>Presentar una visión general de los tipos de aplazamiento y las fechas, y ofrecer profundizar.</accion>
                            <ejemplo_respuesta>
                                <static_sentence_id>initial_aplazamiento_info</static_sentence_id>
                            </ejemplo_respuesta>
                        </caso>
                        <caso tipo="como_solicitar_aplazamiento">
                            <condicion>Si el usuario pregunta cómo se solicita el aplazamiento.</condicion>
                            <accion>Explicar el proceso general de solicitud y la necesidad de documentos para casos especiales.</accion>
                            <ejemplo_respuesta>
                                <static_sentence_id>how_to_apply</static_sentence_id>
                            </ejemplo_respuesta>
                        </caso>
                        <caso tipo="aplazamiento_modulo_detalles">
                            <condicion>Si el usuario pregunta por los detalles del aplazamiento de módulo.</condicion>
                            <accion>Explicar las implicaciones del aplazamiento de módulo.</accion>
                            <ejemplo_respuesta>"Si aplazas un módulo, los valores de tu matrícula no cambian y sigues en tu misma base académica, solo quedan pendientes esas dos materias aplazadas. ¿Hay algo más en lo que pueda ayudarte sobre los aplazamientos?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="aplazamiento_semestre_detalles">
                            <condicion>Si el usuario pregunta por los detalles del aplazamiento de semestre.</condicion>
                            <accion>Explicar las implicaciones del aplazamiento de semestre.</accion>
                            <ejemplo_respuesta>"Si aplazas el semestre, el valor de tu matrícula se actualizará a los costos del año en curso. Además, al reintegrarte, deberás hacerlo en la base más cercana al periodo que ibas a cursar y solicitar un proceso de reintegro. ¿Hay algo más en lo que pueda ayudarte sobre los aplazamientos?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="aplazamiento_fechas_excepcionales">
                            <condicion>Si el usuario pregunta por aplazamientos fuera de fecha o casos especiales.</condicion>
                            <accion>Enumerar los tres casos excepcionales y los documentos de respaldo requeridos.</accion>
                            <ejemplo_respuesta>"Los aplazamientos solo se permiten fuera de las fechas establecidas en tres casos: por **calamidad familiar** (necesitas acta de defunción), por **empleo** (con certificación laboral) o por **salud** (con incapacidad médica). En cualquiera de estos casos, siempre debes adjuntar una carta firmada explicando los motivos al formulario. ¿Hay algo más en lo que pueda ayudarte sobre los aplazamientos?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con los aplazamientos.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre el aplazamiento de módulo o de semestre en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte los tipos de aplazamiento (módulo o semestre), sus condiciones, los plazos para solicitarlos y cómo realizar la solicitud, incluyendo los documentos para casos especiales. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}