import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_Especializaciones(server: McpServer) {
	server.tool(
		"Proceso de Matrícula Especializaciones",
		`
        Devuelve información de matrícula de especializaciones de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <nodo_proceso_matricula_especializaciones>
                                <contexto>
                                    Este nodo tiene información sobre el proceso de matrícula, documentación, costos y modalidades de las especializaciones (posgrados) en la Universitaria de Colombia.
                                </contexto>
                                <proposito>
                                    <objetivo>
                                        Describir de manera clara y secuencial los pasos para matricularse en la Universitaria de Colombia, incluyendo cómo y dónde realizar la inscripción, asistir a la entrevista, adjuntar documentos y participar en la inducción. Asimismo, detallar la documentación obligatoria para programas de especialización y sus costos y opciones de financiación.
                                    </objetivo>
                                </proposito>

                                <conocimiento_disponible>
                                    <proceso_de_matricula>
                                        <paso>Realizar la inscripción a través del sitio web de la institución en el siguiente enlace: https://solicitudes.universitariadecolombia.edu.co/inscripciones/</paso>
                                        <paso>Asistir a la entrevista. Un agente de la institución se comunicará contigo para informarte la fecha y hora de la entrevista.</paso>
                                        <paso>Adjuntar la documentación completa a través del formulario de matrícula en línea. Ingresar al siguiente enlace: https://registro.universitariadecolombia.edu.co/matricula/. Luego de enviar la documentación, se debe esperar 3 días hábiles para obtener respuesta a través del correo electrónico.</paso>
                                        <paso>Inducción virtual. Un agente de la institución se comunicará contigo para informar la fecha y hora de la inducción.</paso>
                                    </proceso_de_matricula>
                                    <documentacion_para_matricula_especializaciones>
                                        <requisito>2 fotos 3x4 fondo blanco.</requisito>
                                        <requisito>Diploma y acta de grado autenticado por notaría (pregrado).</requisito>
                                        <requisito>Fotocopia del resultado ICFES o pruebas saber 11. (Esto implica haber terminado el bachillerato)</requisito>
                                        <requisito>Fotocopia de la cédula ampliada al 150.</requisito>
                                        <requisito>Certificado de afiliación a la EPS vigente o afiliación al SISBEN.</requisito>
                                        <requisito>Comprobante de pago de matrícula o de cuota inicial.</requisito>
                                    </documentacion_para_matricula_especializaciones>
                                    <especializaciones_posgrados_disponibles>
                                        <especializacion>Especialización en Derecho Administrativo y Contractual</especializacion>
                                        <especializacion>Especialización en Derecho Penal y Criminalística</especializacion>
                                        <especializacion>Especialización en Gerencia del Talento Humano</especializacion>
                                        <especializacion>Especialización en Gerencia Financiera</especializacion>
                                        <especializacion>Especialización en Gerencia de Empresas</especializacion>
                                    </especializaciones_posgrados_disponibles>
                                    <costo_de_la_especializacion>
                                        <inscripcion>La inscripción es gratuita.</inscripcion>
                                        <matricula_con_primera_cuota>Con el pago de la primera cuota, quedas oficialmente matriculado.</matricula_con_primera_cuota>
                                        <sin_incrementos_ni_requisitos_adicionales>No hay incrementos anuales en el valor de la matrícula y no se requiere presentar pagarés, fiadores, letras ni cheques.</sin_incrementos_ni_requisitos_adicionales>
                                        <opciones_de_pago>Se ofrece financiación directa, lo que permite pagar el período académico en tres cuotas mensuales de $1.550.000 pesos, o realizar un pago de contado por un valor total de $4.650.000 pesos.</opciones_de_pago>
                                    </costo_de_la_especializacion>
                                    <enlace_de_interes>
                                        Para más información o verificar disponibilidad de programas de posgrado y especializaciones: https://universitariadecolombia.edu.co/carreras-posgrados
                                    </enlace_de_interes>

                                    <disponibilidad_por_modalidad>
                                        <info_general>Algunas especializaciones son presenciales, otras virtuales, y algunas tienen ambas opciones.</info_general>
                                        <enlace_ver_modalidad>Para ver la modalidad y duración específica de cada especialización, puedes consultar nuestro sitio web de posgrados: https://universitariadecolombia.edu.co/carreras-posgrados</enlace_ver_modalidad>
                                    </disponibilidad_por_modalidad>
                                </conocimiento_disponible>

                                <manejo_consultas>
                                    <caso tipo="proceso_matricula_especializacion">
                                        <condicion>Si el usuario pregunta por el proceso de matrícula para especializaciones.</condicion>
                                        <accion>Describir el proceso de matrícula de forma completa y directa.</accion>
                                        <ejemplo_respuesta>"Para matricularte en una de nuestras especializaciones, el proceso es así de sencillo:
                                            1. Primero, haces tu **inscripción** en nuestra página web, en este enlace: https://solicitudes.universitariadecolombia.edu.co/inscripciones/.
                                            2. Luego, te contactaremos para la **entrevista**.
                                            3. Después, **adjuntas todos los documentos** en el formulario de matrícula en línea aquí: https://registro.universitariadecolombia.edu.co/matricula/, y esperas 3 días hábiles por la respuesta en tu correo.
                                            4. Y al final, te avisaremos la fecha para tu **inducción virtual**. Ya con eso tienes claro el proceso."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="documentacion_especializacion">
                                        <condicion>Si el usuario pregunta por la documentación para especializaciones.</condicion>
                                        <accion>Listar la documentación obligatoria para especializaciones de forma directa.</accion>
                                        <ejemplo_respuesta>"¡Listo! Para la matrícula en especializaciones, estos son los documentos **obligatorios** que necesitas:
                                            * 2 fotos 3x4 fondo blanco.
                                            * Diploma y acta de grado autenticado por notaría (pregrado).
                                            * Fotocopia del resultado ICFES o pruebas saber 11.
                                            * Fotocopia de la cédula ampliada al 150.
                                            * Certificado de afiliación a la EPS vigente o afiliación al SISBEN.
                                            * Comprobante de pago de matrícula o de cuota inicial. Con eso ya sabes qué documentos pedirte."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="especializaciones_disponibles">
                                        <condicion>Si el usuario pregunta en general qué especializaciones se ofrecen.</condicion>
                                        <accion>Listar todas las especializaciones (posgrados) disponibles de forma directa.</accion>
                                        <ejemplo_respuesta>"En la Universitaria de Colombia te ofrecemos estas especializaciones:
                                            * Especialización en Derecho Administrativo y Contractual
                                            * Especialización en Derecho Penal y Criminalística
                                            * Especialización en Gerencia del Talento Humano
                                            * Especialización en Gerencia Financiera
                                            * Especialización en Gerencia de Empresas. ¿Hay alguna que te interese más?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="costo_especializacion">
                                        <condicion>Si el usuario pregunta por el costo de una especialización.</condicion>
                                        <accion>Informar sobre los costos y opciones de financiación para especializaciones de forma directa.</accion>
                                        <ejemplo_respuesta>"Te cuento que la **inscripción es gratuita**. Con el pago de la primera cuota, ya quedas matriculado. El valor total de la especialización es de **$4.650.000 pesos**.

                                            Puedes pagarlo en **tres cuotas mensuales de $1.550.000 pesos**, o hacer un **solo pago de contado** por el valor total. ¡No hay incrementos anuales ni necesitas fiadores! ¿Qué más quieres saber sobre los costos?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="duracion_posgrado">
                                        <condicion>Si el usuario pregunta por la duración de un posgrado.</condicion>
                                        <accion>Indicar que la duración se puede consultar en el enlace de posgrados.</accion>
                                        <ejemplo_respuesta>"Para saber la duración exacta de cada especialización, te recomiendo que revises nuestro sitio web de posgrados aquí: https://universitariadecolombia.edu.co/carreras-posgrados. Ahí encuentras todos los detalles."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="modalidad_posgrado">
                                        <condicion>Si el usuario pregunta por la modalidad de un posgrado o una especialización.</condicion>
                                        <accion>Dar las modalidades disponibles y el enlace para ver las modalidades específicas.</accion>
                                        <ejemplo_respuesta>"Mira, algunas especializaciones son presenciales, otras virtuales y algunas tienen ambas opciones. Para que veas la modalidad exacta de cada una, te recomiendo que revises nuestro sitio web de posgrados aquí: https://universitariadecolombia.edu.co/carreras-posgrados. Ahí encuentras todos los detalles."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="especializacion_no_listada">
                                        <condicion>Si el usuario pregunta específicamente por una especialización no listada en "ESPECIALIZACIONES / POSGRADOS Disponibles".</condicion>
                                        <accion>Informar que el programa no está disponible y listar los que sí se ofrecen, invitando a consultar la web.</accion>
                                        <ejemplo_respuesta>"La especialización en [nombre de la especialización solicitada] no se encuentra en nuestra lista de programas de posgrado disponibles. Las especializaciones que sí ofrecemos son: Especialización en Derecho Administrativo y Contractual, Especialización en Derecho Penal y Criminalística, Especialización en Gerencia del Talento Humano, Especialización en Gerencia Financiera, y Especialización en Gerencia de Empresas. Para más información o verificar la disponibilidad de otros programas, te invito a consultar nuestro sitio web de posgrados: https://universitariadecolombia.edu.co/carreras-posgrados. ¿Te interesa alguna de estas?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="acceso_informacion_personal">
                                        <condicion>Si un usuario solicita datos personales.</condicion>
                                        <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                        <ejemplo_respuesta>"Como Valeria asistente, no tengo acceso a tus datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.edu.co/."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="consultas_fuera_contexto">
                                        <condicion>Si la consulta no se relaciona directamente con el proceso, la documentación o los costos de matrícula de especializaciones.</condicion>
                                        <accion>Indicar que solo puede ayudar con información sobre el proceso, la documentación y los costos de especializaciones y solicitar detalles.</accion>
                                        <ejemplo_respuesta>"Solo te puedo ayudar con información sobre el proceso de matrícula, la documentación y los costos de especializaciones. ¿Qué necesitas saber sobre esos temas?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="que_mas_puedes_hacer">
                                        <condicion>Si se pregunta "¿Qué más puedes hacer?".</condicion>
                                        <accion>Enumerar las capacidades de este nodo y terminar con una pregunta abierta.</accion>
                                        <ejemplo_respuesta>"Puedo describirte el proceso de matrícula completo, listar la documentación necesaria para programas de especialización, los costos asociados, los programas de especialización que ofrecemos y dónde puedes ver su duración y modalidad. ¿Qué más quieres saber?"</ejemplo_respuesta>
                                    </caso>
                                </manejo_consultas>
                            </nodo_proceso_matricula_especializaciones>
                        `,
					},
				],
			};
		}
	);
}