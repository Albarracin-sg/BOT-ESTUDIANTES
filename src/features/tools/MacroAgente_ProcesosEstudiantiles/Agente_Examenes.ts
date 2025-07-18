import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Examenes(server: McpServer) {
	server.tool(
		"Información de Exámenes Universitaria de Colombia",
		`
        Devuelve información sobre los tipos de exámenes de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo informa sobre los tipos de exámenes (Habilitación, Suficiencia, Supletorio), sus condiciones y proceso general, con opción a profundizar detalles.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Informar de forma concisa sobre los tipos de exámenes (Habilitación, Suficiencia, Supletorio) de la Universitaria de Colombia, describiendo brevemente sus condiciones y el proceso general, y ofreciendo profundizar en los detalles si el usuario lo desea.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <examenes>
                            <examen id="Habilitación">
                                <nombre>Examen de Habilitación</nombre>
                                <cuando_se_realiza>Luego de 4 semanas de terminado el Periodo Académico (los 3 módulos) de acuerdo al cronograma que se encuentra en el Aula Virtual.</cuando_se_realiza>
                                <verificacion_informacion>Para verificar esta información debe ingresar al Aula Virtual, dar clic en el botón Información General - dar clic sobre el enlace de Habilitaciones en este espacio podrá encontrar las materias que se pueden habilitar en cada programa.</verificacion_informacion>
                                <condiciones>
                                    <item>Se realiza solo cuando la asignatura se haya perdido con notas en un rango de **2.0 a 2.9**.</item>
                                    <item>Solo se pueden habilitar hasta **dos materias** perdidas en el periodo académico, de lo contrario reprueba el periodo académico.</item>
                                    <item>La materia a habilitar deberá ser **teórica**, no práctica ni teórico/práctica.</item>
                                </condiciones>
                                <verificacion_materias_habilitables>Para verificar esta información debe ingresar al Aula Virtual, Información General – Habilitaciones. En este espacio podrá encontrar una carpeta con las materias habilitables por programa o ingresando al siguiente enlace https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php.</verificacion_materias_habilitables>
                                <programacion_solicitud>
                                    <paso>Si el estudiante va a realizar la programación de los exámenes de habilitación debe llevar a cabo la solicitud por medio de la página de la universidad; Solicitud de Cita – Habilitaciones o ingresando al siguiente enlace https://citas.universitariadecolombia.edu.co/.</paso>
                                    <requisito_cita>El día de la cita debe traer el recibo de caja del pago correspondiente de la habilitación.</requisito_cita>
                                </programacion_solicitud>
                                <caracteristicas_evaluacion>
                                    <duracion>Máxima de 40 minutos.</duracion>
                                    <formato>Preguntas de selección múltiple.</formato>
                                    <nota_maxima>3.0.</nota_maxima>
                                </caracteristicas_evaluacion>
                                <entrega_resultado>El resultado de la evaluación será entregado de forma inmediata por el funcionario de Registro y Control Académico.</entrega_resultado>
                            </examen>
                            <examen id="Suficiencia">
                                <nombre>Examen de Suficiencia</nombre>
                                <aplicacion>Aplica solo para materias que no hayan sido cursadas ni aplazadas.</aplicacion>
                                <requisitos>
                                    <item>El estudiante debe tener conocimientos en la materia para llevar a cabo la suficiencia.</item>
                                    <item>Debe contar con certificados donde se evidencie que curso la materia o constancias laborales donde maneje procesos correspondientes a los temas abordados en la materia.</item>
                                </requisitos>
                                <solicitud>Si el estudiante cumple con el requisito, debe solicitar la suficiencia por correo a registroycontrolacademico.iuc@gmail.com.</solicitud>
                                <respuesta_solicitud>La respuesta indicará si fue aprobada (y bajo qué concepto) junto con los pasos a seguir para su presentación.</respuesta_solicitud>
                                <caracteristicas_evaluacion>
                                    <duracion>Máxima de 1:30 (una hora y media).</duracion>
                                    <formato>Preguntas de conocimiento.</formato>
                                </caracteristicas_evaluacion>
                                <proceso_y_tiempo_entrega>
                                    <paso>Finalizado el examen, el original es entregado al docente quien lo firmará y evaluará.</paso>
                                    <tiempo_maximo_entrega>15 a 20 días hábiles.</tiempo_maximo_entrega>
                                </proceso_y_tiempo_entrega>
                                <limite_solicitudes>Solo podrán solicitar **tres (3) pruebas de suficiencia** durante la totalidad de todo el programa académico.</limite_solicitudes>
                            </examen>
                            <examen id="Supletorio">
                                <nombre>Examen Supletorio</nombre>
                                <aplicacion>Los parciales no realizados podrán presentarse nuevamente con el mismo docente, previa autorización.</aplicacion>
                                <procedimiento>
                                    <paso>El docente debe enviar una carta de autorización al correo registroycontrolacademico.iuc@gmail.com con el asunto: Examen Supletorio.</paso>
                                    <paso>El estudiante, con la autorización, debe pagar el examen según el valor establecido en los derechos pecuniarios y llevar a cabo su respectiva radicación.</paso>
                                    <paso>Posteriormente, debe coordinar con el docente la presentación del examen.</paso>
                                    <paso>Finalmente, el docente enviará el formato de corrección de nota diligenciado con la calificación obtenida al correo de Registro y Control Académico registroycontrolacademico.iuc@gmail.com.</paso>
                                </procedimiento>
                                <validaciones>Posterior a este proceso se validará la veracidad del documento y se llevará a cabo la modificación de la nota.</validaciones>
                                <tiempo_actualizacion>15 a 20 días hábiles.</tiempo_actualizacion>
                            </examen>
                        </examenes>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="informacion_general_examenes">
                            <condicion>Si el usuario pregunta de forma general sobre los exámenes.</condicion>
                            <accion>Proveer la información inicial concisa sobre los tres tipos de exámenes y ofrecer profundizar.</accion>
                            <ejemplo_respuesta><static_sentences.initial_examenes_info/></ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalle_examen_habilitacion">
                            <condicion>Si el usuario pregunta específicamente por el examen de habilitación.</condicion>
                            <accion>Proveer toda la información relevante de la habilitación.</accion>
                            <ejemplo_respuesta><static_sentences.habilitacion_details/></ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalle_examen_suficiencia">
                            <condicion>Si el usuario pregunta específicamente por el examen de suficiencia.</condicion>
                            <accion>Proveer toda la información relevante de la suficiencia.</accion>
                            <ejemplo_respuesta><static_sentences.suficiencia_details/></ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalle_examen_supletorio">
                            <condicion>Si el usuario pregunta específicamente por el examen supletorio.</condicion>
                            <accion>Proveer toda la información relevante del supletorio.</accion>
                            <ejemplo_respuesta><static_sentences.supletorio_details/></ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con los exámenes (Habilitación, Suficiencia, Supletorio).</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre los exámenes de habilitación, suficiencia y supletorios en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte las condiciones, requisitos y procesos para los exámenes de **habilitación**, **suficiencia** y **supletorio**. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}