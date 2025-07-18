import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_ProyectosRechazo(server: McpServer) {
	server.tool(
		"Agente_ProyectosRechazo",
		`
        Devuelve información sobre la no aprobación de proyectos de grado de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo explica las razones de no aprobación de proyectos de grado (Semillero Ordinario, Especial, Proyecto de Grado, TIS) y los pasos a seguir.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Consolidar y explicar las razones por las cuales un proyecto final de grado podría no ser aprobado, diferenciando las implicaciones y los pasos a seguir según el tipo de proyecto (Semillero Ordinario, Semillero Especial, Proyecto de Grado o TIS).
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <motivos_no_aprobacion>
                            <tipo_rechazo nombre="No aprobación de la sustentación/socialización">
                                <proyecto tipo="Semillero Especial y Proyecto de Grado (genérico)">
                                    <razon>No aprobar la sustentación inicial.</razon>
                                    <consecuencia>Proceso de grado pospuesto seis meses.</consecuencia>
                                    <pasos_a_seguir>Participar nuevamente en tutorías y realizar correcciones para una nueva presentación.</pasos_a_seguir>
                                </proyecto>
                                <proyecto tipo="Semillero Ordinario">
                                    <razon>No aprobar la sustentación en la primera oportunidad.</razon>
                                    <consecuencia>Tiene una segunda oportunidad para hacer correcciones en 15 días y volver a presentar.</consequence>
                                    <razon_adicional>Si tampoco aprueba en esta segunda instancia.</razon_adicional>
                                    <consecuencia_adicional>El proceso se pospone por 6 meses y deberá reintegrarse al proceso y realizar las correcciones.</consecuencia_adicional>
                                </proyecto>
                                <proyecto tipo="Trabajo Integrador de Saberes (TIS)">
                                    <razon>No poder socializar en las fechas estipuladas.</razon>
                                    <consecuencia>Se le dará una segunda oportunidad en fechas posteriores.</consequence>
                                    <razon_adicional>Si no socializa en esta segunda oportunidad.</razon_adicional>
                                    <consecuencia_adicional>Deberá esperar al siguiente ciclo para iniciar nuevamente el proceso.</consecuencia_adicional>
                                </proyecto>
                            </tipo_rechazo>
                            <tipo_rechazo nombre="Rechazo de la propuesta de tema">
                                <proyecto tipo="Proyecto de Grado (genérico)">
                                    <razon>Si la propuesta de tema inicial es rechazada por el departamento.</razon>
                                    <consecuencia>El estudiante deberá enviar una nueva propuesta hasta que sea aprobada.</consecuencia>
                                    <implicacion>Si no se logra la aprobación del tema, el proceso no puede avanzar.</implicacion>
                                </proyecto>
                            </tipo_rechazo>
                            <tipo_rechazo nombre="No alcanzar el cuórum necesario">
                                <proyecto tipo="Semillero Especial">
                                    <razon>Si no se alcanza el cuórum de siete estudiantes.</razon>
                                    <consecuencia>Los estudiantes deben elegir entre ser transferidos al proceso de semillero ordinario o esperar al siguiente proceso especial.</consecuencia>
                                    <implicacion>El proyecto bajo la modalidad de Semillero Especial no podría avanzar si no se cumple este requisito.</implicacion>
                                </proyecto>
                            </tipo_rechazo>
                        </motivos_no_aprobacion>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="pregunta_general_rechazo_proyectos">
                            <condicion>Si el usuario pregunta de forma general por qué un proyecto de grado podría ser rechazado.</condicion>
                            <accion>Explicar los motivos principales de no aprobación, ofreciendo detalles por tipo de proyecto.</accion>
                            <ejemplo_respuesta>"Un proyecto de grado puede no ser aprobado por varias razones, como no aprobar la sustentación/socialización, el rechazo de la propuesta de tema (para Proyecto de Grado) o no alcanzar el cuórum (para Semillero Especial). ¿Te gustaría que te explique las implicaciones de alguno de estos casos para un tipo de proyecto específico? ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="rechazo_sustentacion_semillero_especial_o_proyecto_grado">
                            <condicion>Si el usuario pregunta qué pasa si no aprueba la sustentación de Semillero Especial o Proyecto de Grado.</condicion>
                            <accion>Explicar la consecuencia y los pasos a seguir.</accion>
                            <ejemplo_respuesta>"Si no apruebas la sustentación de tu Semillero Especial o Proyecto de Grado, el proceso se pospone seis meses. Durante ese tiempo, deberás retomar las tutorías y hacer las correcciones necesarias para volver a presentar. ¿Hay algo más en lo que pueda ayudarte sobre el rechazo de proyectos de grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="rechazo_sustentacion_semillero_ordinario">
                            <condicion>Si el usuario pregunta qué pasa si no aprueba la sustentación de Semillero Ordinario.</condicion>
                            <accion>Explicar las dos oportunidades y la consecuencia final.</accion>
                            <ejemplo_respuesta>"Si no apruebas la primera sustentación del Semillero Ordinario, tienes 15 días para corregir y volver a presentar. Si tampoco apruebas en esa segunda oportunidad, el proceso se pospone por seis meses y deberás reintegrarte para hacer las correcciones. ¿Hay algo más en lo que pueda ayudarte sobre el rechazo de proyectos de grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="no_socializacion_TIS">
                            <condicion>Si el usuario pregunta qué pasa si no puede socializar el TIS.</condicion>
                            <accion>Explicar las oportunidades y la consecuencia de no socializar.</accion>
                            <ejemplo_respuesta>"Si no puedes socializar tu TIS en la fecha inicial, se te dará una segunda oportunidad. Si tampoco lo logras en esa segunda fecha, deberás esperar al siguiente ciclo para iniciar todo el proceso de nuevo. ¿Hay algo más en lo que pueda ayudarte sobre el rechazo de proyectos de grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="rechazo_propuesta_tema">
                            <condicion>Si el usuario pregunta por el rechazo de la propuesta de tema (en Proyecto de Grado).</condicion>
                            <accion>Explicar el proceso de reenvío hasta la aprobación.</accion>
                            <ejemplo_respuesta>"En el caso del Proyecto de Grado, si tu propuesta de tema es rechazada, debes enviar una nueva hasta que sea aprobada. Si no se aprueba el tema, el proceso no puede avanzar. ¿Hay algo más en lo que pueda ayudarte sobre el rechazo de proyectos de grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="no_quorum_semillero_especial">
                            <condicion>Si el usuario pregunta por el cuórum en Semillero Especial.</condicion>
                            <accion>Explicar la implicación de no alcanzar el cuórum y las opciones.</accion>
                            <ejemplo_respuesta>"Si en el Semillero Especial no se alcanza el cuórum de siete estudiantes, puedes elegir ser transferido al Semillero Ordinario o esperar al siguiente proceso especial. Esto significa que el proyecto en esa modalidad no podría avanzar. ¿Hay algo más en lo que pueda ayudarte sobre el rechazo de proyectos de grado?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con los motivos de no aprobación de proyectos de grado.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre las razones por las que un proyecto de grado podría no ser aprobado y qué acciones tomar en cada caso para el Semillero Ordinario, Semillero Especial, Proyecto de Grado o TIS. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte las razones por las que un Proyecto de Grado, Semillero Ordinario, Semillero Especial o TIS podría no ser aprobado, y qué acciones debes tomar en cada caso. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}