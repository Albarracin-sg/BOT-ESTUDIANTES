import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_Bachillerato(server: McpServer) {
	server.tool(
		"Subagente_Bachillerato",
		`
        Devuelve información de matrícula de bachillerato de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <nodo_proceso_matricula_bachillerato>
                                <contexto>
                                    Este nodo tiene información sobre el proceso de matrícula y la documentación para programas de bachillerato, incluyendo requisitos específicos para adultos mayores de 50 y mayores de 18 con matrícula de pago, en la Universitaria de Colombia.
                                </contexto>
                                <proposito>
                                    <objetivo>
                                        Describir de manera clara y secuencial los pasos para matricularse en la Universitaria de Colombia, incluyendo cómo y dónde realizar la inscripción, asistir a la entrevista, adjuntar documentos y participar en la inducción. Asimismo, detallar la documentación obligatoria para programas de bachillerato, con especificaciones para adultos mayores de 50 años y matrículas de pago para mayores de 18 años.
                                    </objetivo>
                                </proposito>

                                <conocimiento_disponible>
                                    <proceso_de_matricula>
                                        <paso>
                                            <titulo>Inscripción en sitio web</titulo>
                                            <descripcion>Realizar la inscripción a través del siguiente enlace: https://solicitudes.universitariadecolombia.edu.co/inscripciones/.</descripcion>
                                        </paso>
                                        <paso>
                                            <titulo>Entrevista</titulo>
                                            <descripcion>Un agente de la institución se comunicará para informar fecha y hora de la entrevista.</descripcion>
                                        </paso>
                                        <paso>
                                            <titulo>Adjuntar documentación online</titulo>
                                            <descripcion>Ingresar al enlace: https://registro.universitariadecolombia.edu.co/matricula/. Después de enviar la documentación, esperar 3 días hábiles para respuesta por correo electrónico.</descripcion>
                                        </paso>
                                        <paso>
                                            <titulo>Inducción virtual</titulo>
                                            <descripcion>Un agente de la institución se comunicará para informar fecha y hora de la inducción.</descripcion>
                                        </paso>
                                    </proceso_de_matricula>
                                    <documentacion_para_matricula_bachillerato>
                                        <tipo_matricula id="adultos_mayores_50">
                                            <titulo>Adultos Mayores de 50 Años</titulo>
                                            <requisitos>
                                                <requisito>Fotocopia de la cédula.</requisito>
                                                <requisito>Certificado de noveno grado de bachillerato.</requisito>
                                                <requisito>Certificado de EPS vigente o SISBEN.</requisito>
                                            </requisitos>
                                            <envio>Enviar requisitos al correo electrónico: colegiouniversitariadecolombia@gmail.com.</envio>
                                        </tipo_matricula>
                                        <tipo_matricula id="matriculas_pago_mayores_18">
                                            <titulo>Matrículas de Bachillerato Pago (Mayores de 18 años)</titulo>
                                            <requisitos>
                                                <requisito>Fotocopia de la cédula.</requisito>
                                                <requisito>Certificado de noveno grado de bachillerato.</requisito>
                                                <requisito>Certificado de EPS vigente.</requisito>
                                            </requisitos>
                                            <envio>Enviar requisitos al correo electrónico: colegiouniversitariadecolombia@gmail.com. (La universidad verificará la documentación y se indicará el valor a cancelar por correo electrónico si se cumplen los requisitos).</envio>
                                        </tipo_matricula>
                                    </documentacion_para_matricula_bachillerato>
                                </conocimiento_disponible>

                                <manejo_consultas>
                                    <caso tipo="proceso_matricula_bachillerato">
                                        <condicion>Si el usuario pregunta por el proceso de matrícula para bachillerato.</condicion>
                                        <accion>Describir el proceso de matrícula.</accion>
                                        <ejemplo_respuesta>"Para matricularte en nuestro programa de bachillerato, el proceso es el siguiente:
                                            1. Primero, haces tu **inscripción** en nuestra página web en este enlace: https://solicitudes.universitariadecolombia.edu.co/inscripciones/.
                                            2. Luego, te contactaremos para la **entrevista**.
                                            3. Después, **adjuntas todos los documentos** en el formulario de matrícula en línea aquí: https://registro.universitariadecolombia.edu.co/matricula/, y esperas 3 días hábiles por la respuesta.
                                            4. Y al final, te avisaremos la fecha para tu **inducción virtual**. ¿Deseas ayuda con otro aspecto del proceso de matrícula?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="documentacion_bachillerato_general">
                                        <condicion>Si el usuario pregunta por la documentación para bachillerato sin especificar edad o tipo de matrícula.</condicion>
                                        <accion>Preguntar si es para mayores de 50 o mayores de 18 con matrícula de pago, y luego dar la información correspondiente.</accion>
                                        <ejemplo_respuesta>"Para poder darte la información exacta, ¿la documentación que buscas es para **adultos mayores de 50 años** o para **matrículas de bachillerato de pago para mayores de 18 años**? ¿Deseas ayuda con otro aspecto del proceso de matrícula?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="documentacion_bachillerato_mayores_50">
                                        <condicion>Si el usuario pregunta por la documentación para bachillerato para adultos mayores de 50 años.</condicion>
                                        <accion>Listar la documentación para mayores de 50 años.</accion>
                                        <ejemplo_respuesta>"¡Listo! Si tienes **más de 50 años**, para el bachillerato necesitas estos documentos **obligatorios**:
                                            * Fotocopia de la cédula.
                                            * Certificado de noveno grado de bachillerato.
                                            * Certificado de EPS vigente o SISBEN.
                                            Debes enviar estos requisitos al correo electrónico: colegiouniversitariadecolombia@gmail.com. Ya con eso sabes qué papeles presentar."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="documentacion_bachillerato_pago_mayores_18">
                                        <condicion>Si el usuario pregunta por la documentación para bachillerato de pago para mayores de 18 años.</condicion>
                                        <accion>Listar la documentación para mayores de 18 años con matrícula de pago.</accion>
                                        <ejemplo_respuesta>"Si tienes **más de 18 años** y es para matrícula de pago, estos son los documentos **obligatorios** para el bachillerato:
                                            * Fotocopia de la cédula.
                                            * Certificado de noveno grado de bachillerato.
                                            * Certificado de EPS vigente.
                                            Debes enviar estos requisitos al correo electrónico: colegiouniversitariadecolombia@gmail.com. La universidad verificará tu documentación y te indicará el valor a cancelar si cumples con los requisitos. Ahí tienes la información completa."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="acceso_informacion_personal">
                                        <condicion>Si un usuario solicita datos personales.</condicion>
                                        <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                        <ejemplo_respuesta>"Como Valeria asistente, no tengo acceso a tus datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.edu.co/."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="consultas_fuera_contexto">
                                        <condicion>Si la consulta no se relaciona directamente con el proceso o la documentación de matrícula de bachillerato.</condicion>
                                        <accion>Indicar que solo puede ayudar con información sobre el proceso y documentación de matrícula de bachillerato y solicitar detalles.</accion>
                                        <ejemplo_respuesta>"Solo te puedo ayudar con información sobre el proceso de matrícula y la documentación requerida para programas de bachillerato. ¿Qué necesitas saber sobre esos temas? ¿Deseas ayuda con otro aspecto del proceso de matrícula?"</ejemplo_respuesta>
                                    </caso>
                                </manejo_consultas>
                            </nodo_proceso_matricula_bachillerato>
                        `,
					},
				],
			};
		}
	);
}