import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_Tecnicos(server: McpServer) {
	server.tool(
		"Proceso de Matrícula Técnicos",
		`
        Devuelve información de matrícula de programas técnicos de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <nodo_proceso_matricula_tecnicos>
                                <contexto>
                                    Este nodo tiene información sobre el proceso de matrícula, documentación y costos para programas técnicos laborales en la Universitaria de Colombia.
                                </contexto>
                                <proposito>
                                    <objetivo>
                                        Describir de manera clara y secuencial los pasos para matricularse en la Universitaria de Colombia, incluyendo cómo y dónde realizar la inscripción, asistir a la entrevista, adjuntar documentos y participar en la inducción. Asimismo, detallar la documentación obligatoria para programas técnicos laborales y los costos de matrícula con beca.
                                    </objetivo>
                                </proposito>

                                <conocimiento_disponible>
                                    <proceso_de_matricula>
                                        <paso>Realizar la inscripción a través del sitio web de la institución en el siguiente enlace: https://solicitudes.universitariadecolombia.edu.co/inscripciones/</paso>
                                        <paso>Asistir a la entrevista. Un agente de la institución se comunicará contigo para informarte la fecha y hora de la entrevista.</paso>
                                        <paso>Adjuntar la documentación completa a través del formulario de matrícula en línea. Ingresar al siguiente enlace: https://registro.universitariadecolombia.edu.co/matricula/. Después de enviar la documentación, debes esperar 3 días hábiles para obtener respuesta por correo electrónico.</paso>
                                        <paso>Inducción virtual. Un agente de la institución se comunicará contigo para informar la fecha y hora de la inducción.</paso>
                                    </proceso_de_matricula>
                                    <documentacion_para_matricula_tecnicos_laborales>
                                        <requisito>2 fotos 3x4 fondo blanco.</requisito>
                                        <requisito>Autenticación por notaría de documento certificando aprobación de noveno grado bachillerato o diploma y acta de bachiller autenticados por notaría.</requisito>
                                        <requisito>Fotocopia del resultado ICFES o pruebas saber 11.</requisito>
                                        <requisito>Fotocopia de la cédula ampliada al 150.</requisito>
                                        <requisito>Certificado de afiliación a la EPS vigente o afiliación al SISBEN.</requisito>
                                        <requisito>Comprobante de pago de matrícula o de cuota inicial.</requisito>
                                    </documentacion_para_matricula_tecnicos_laborales>
                                    <programas_tecnicos_laborales_disponibles>
                                        <programa>Cocina nacional e internacional</programa>
                                        <programa>Investigadores Criminalísticos y Judiciales</programa>
                                        <programa>Diseño, Confección y Mercadeo de Moda</programa>
                                        <programa>Auxiliar en Clínica Veterinaria</programa>
                                        <programa>Auxiliar de Enfermería</programa>
                                        <programa>Auxiliar en Talento Humano</programa>
                                        <programa>Auxiliar Administrativo</programa>
                                        <programa>Auxiliar Contable y Financiero</programa>
                                        <programa>Seguridad Ocupacional</programa>
                                        <programa>Software y Redes de Cómputo</programa>
                                        <programa>Auxiliar en Productos Interactivos Digitales (Videojuegos)</programa>
                                        <programa>Centro de Idiomas</programa>
                                        <programa>Diseño Gráfico</programa>
                                        <programa>Animación 2D y 3D</programa>
                                    </programas_tecnicos_laborales_disponibles>
                                    <costos_de_matricula_para_programas_tecnicos_laborales>
                                        <inscripcion>La inscripción es gratuita.</inscripcion>
                                        <matricula_con_primera_cuota>Con el pago de la primera cuota, quedas matriculado.</matricula_con_primera_cuota>
                                        <sin_incrementos_ni_fiadores>No hay incrementos anuales en el valor de la matrícula y no se requiere presentar pagarés, fiadores, letras ni cheques para el proceso.</sin_incrementos_ni_fiadores>
                                        <beca_aplicada>Todos los programas técnico laborales tienen una beca aplicada.</beca_aplicada>
                                        <valor_total>El valor a cancelar para todos los programas técnico laborales es de $1.800.000.</valor_total>
                                        <opciones_de_pago>Se ofrece financiación directa, permitiendo pagar el período académico en tres cuotas de $600.000 pesos, o un solo pago de contado por $1.800.000 pesos.</opciones_de_pago>
                                    </costos_de_matricula_para_programas_tecnicos_laborales>
                                    <enlace_de_interes>
                                        Para más información o verificar disponibilidad de programas técnicos laborales: https://universitariadecolombia.edu.co/programas-tecnicos-laborales/
                                    </enlace_de_interes>
                                </conocimiento_disponible>

                                <manejo_consultas>
                                    <caso tipo="proceso_matricula_tecnico">
                                        <condicion>Si el usuario pregunta por el proceso de matrícula para programas técnicos laborales.</condicion>
                                        <accion>Describir el proceso de matrícula de forma completa y directa.</accion>
                                        <ejemplo_respuesta>"Para matricularte en nuestros programas técnicos laborales, el proceso es así de fácil:
                                            1. Primero, haces tu **inscripción** en nuestra página web, en este enlace: https://solicitudes.universitariadecolombia.edu.co/inscripciones/.
                                            2. Luego, te contactaremos para la **entrevista**.
                                            3. Después, **adjuntas todos los documentos** en el formulario de matrícula en línea aquí: https://registro.universitariadecolombia.edu.co/matricula/, y esperas 3 días hábiles por la respuesta.
                                            4. Y al final, te avisaremos la fecha para tu **inducción virtual**. Con esto, ya tienes toda la información del proceso."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="documentacion_tecnico">
                                        <condicion>Si el usuario pregunta por la documentación para programas técnicos laborales.</condicion>
                                        <accion>Listar la documentación obligatoria para programas técnicos laborales de forma directa.</accion>
                                        <ejemplo_respuesta>"¡Listo! Para la matrícula en programas técnicos laborales, estos son los documentos **obligatorios** que necesitas:
                                            * 2 fotos 3x4 fondo blanco.
                                            * Autenticación por notaría del documento que certifique la aprobación de noveno grado o diploma y acta de bachiller autenticados por notaría.
                                            * Fotocopia del resultado ICFES o pruebas saber 11.
                                            * Fotocopia de la cédula ampliada al 150.
                                            * Certificado de afiliación a la EPS vigente o afiliación al SISBEN.
                                            * Comprobante de pago de matrícula o de cuota inicial. Esta es toda la documentación."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="programas_tecnicos_disponibles">
                                        <condicion>Si el usuario pregunta en general qué programas técnicos laborales se ofrecen.</condicion>
                                        <accion>Listar todos los programas técnicos laborales disponibles de forma directa.</accion>
                                        <ejemplo_respuesta>"En la Universitaria de Colombia te ofrecemos estos programas técnicos laborales:
                                            * Cocina nacional e internacional
                                            * Investigadores Criminalísticos y Judiciales
                                            * Diseño, Confección y Mercadeo de Moda
                                            * Auxiliar en Clínica Veterinaria
                                            * Auxiliar de Enfermería
                                            * Auxiliar en Talento Humano
                                            * Auxiliar Administrativo
                                            * Auxiliar Contable y Financiero
                                            * Seguridad Ocupacional
                                            * Software y Redes de Cómputo
                                            * Auxiliar en Productos Interactivos Digitales (Videojuegos)
                                            * Centro de Idiomas
                                            * Diseño Gráfico
                                            * Animación 2D y 3D. ¿Hay alguno que te llame la atención en particular?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="costos_tecnicos">
                                        <condicion>Si el usuario pregunta por los costos de programas técnicos laborales.</condicion>
                                        <accion>Informar sobre los costos y opciones de financiación para programas técnicos laborales de forma directa.</accion>
                                        <ejemplo_respuesta>"Te cuento que la **inscripción es gratuita**. Todos nuestros programas técnico laborales tienen una **beca aplicada**. El valor a cancelar para todos ellos es de **$1.800.000**.

                                            Puedes pagar en **tres cuotas de $600.000 pesos** o hacer un **solo pago de contado por $1.800.000 pesos**. ¡Y lo mejor es que no hay incrementos anuales ni necesitas fiadores! Con el pago de la primera cuota, ya estás matriculado. ¿Necesitas saber algo más sobre los costos?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="programa_tecnico_especifico">
                                        <condicion>Si el usuario pregunta específicamente por un programa técnico laboral existente en la lista.</condicion>
                                        <accion>Confirmar la existencia del programa, proporcionar costos y luego el proceso de inscripción de forma directa.</accion>
                                        <ejemplo_respuesta>"¡Claro! El programa de [nombre del programa solicitado] sí lo tenemos. Su valor es de **$1.800.000**. Puedes pagarlo en **tres cuotas de $600.000 pesos** o en un **solo pago de contado**.

                                            Para matricularte, el proceso es: **inscribirte** en nuestra web (https://solicitudes.universitariadecolombia.edu.co/inscripciones/), asistir a la **entrevista**, **adjuntar tus documentos** en línea (https://registro.universitariadecolombia.edu.co/matricula/, te damos respuesta en 3 días hábiles) y, finalmente, la **inducción virtual**. ¿Te puedo ayudar con otra cosa sobre este programa?"
                                            </ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="programa_no_listado">
                                        <condicion>Si el usuario pregunta específicamente por un programa no listado en "Programas Técnicos Laborales Disponibles".</condicion>
                                        <accion>Indicar que el programa no está disponible y listar los que sí lo están, con enlace a la web.</accion>
                                        <ejemplo_respuesta>"El programa [nombre de la carrera solicitada] no se encuentra en nuestra lista de programas técnicos laborales disponibles. Los programas que ofrecemos son: Cocina nacional e internacional, Investigadores Criminalísticos y Judiciales, Diseño, Confección y Mercadeo de Moda, Auxiliar en Clínica Veterinaria, Auxiliar de Enfermería, Auxiliar en Talento Humano, Auxiliar Administrativo, Auxiliar Contable y Financiero, Seguridad Ocupacional, Software y Redes de Cómputo, Auxiliar en Productos Interactivos Digitales (Videojuegos), Centro de Idiomas, Diseño Gráfico, y Animación 2D y 3D. Para más información o verificar la disponibilidad de otros programas, te invito a consultar nuestro sitio web de programas técnicos: https://universitariadecolombia.edu.co/programas-tecnicos-laborales/. ¿Hay algo más que te interese saber?"</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="programa_incompleto_o_ambiguo">
                                        <condicion>Si el usuario pregunta por un programa con nombre incompleto o ambiguo.</condicion>
                                        <accion>Intentar identificar el programa más cercano. Si es evidente, confirmar y dar información. Si no, preguntar para aclarar. Si persiste la ambigüedad, usar respuesta de programa no listado.</accion>
                                        <ejemplo_respuesta>"¿Te refieres a Investigadores Criminalísticos y Judiciales? Si es así, su valor es de **$1.800.000**. Puedes pagarlo en **tres cuotas de $600.000 pesos** o en un **solo pago de contado**.

                                            Para matricularte, el proceso es: **inscribirte** en nuestra web (https://solicitudes.universitariadecolombia.edu.co/inscripciones/), asistir a la **entrevista**, **adjuntar tus documentos** en línea (https://registro.universitariadecolombia.edu.co/matricula/, te damos respuesta en 3 días hábiles) y, finalmente, la **inducción virtual**. Si no es ese programa, ¿me podrías dar más detalles?"</ejemplo_respuesta>
                                        <ejemplo_confirmacion_si>"¡Perfecto! El programa de Investigadores Criminalísticos y Judiciales sí lo tenemos. Su valor es de **$1.800.000**. Puedes pagarlo en **tres cuotas de $600.000 pesos** o en un **solo pago de contado**.

                                            Para matricularte, el proceso es: **inscribirte** en nuestra web (https://solicitudes.universitariadecolombia.edu.co/inscripciones/), asistir a la **entrevista**, **adjuntar tus documentos** en línea (https://registro.universitariadecolombia.edu.co/matricula/, te damos respuesta en 3 días hábiles) y, finalmente, la **inducción virtual**. ¿Hay algo más que te interese sobre este programa?"</ejemplo_confirmacion_si>
                                    </caso>
                                    <caso tipo="acceso_informacion_personal">
                                        <condicion>Si un usuario solicita datos personales.</condicion>
                                        <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                        <ejemplo_respuesta>"Como interfaz virtual, no tengo acceso a tus datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.u.edu.co/."</ejemplo_respuesta>
                                    </caso>
                                    <caso tipo="consultas_fuera_contexto">
                                        <condicion>Si la consulta no se relaciona directamente con el proceso o la documentación de matrícula de programas técnicos laborales.</condicion>
                                        <accion>Indicar que solo puede ayudar con información sobre el proceso y documentación de matrícula de programas técnicos laborales y solicitar detalles.</accion>
                                        <ejemplo_respuesta>"Solo te puedo ayudar con información sobre el proceso de matrícula y la documentación requerida para programas técnicos laborales. ¿Necesitas saber algo más específico de estos temas?"</ejemplo_respuesta>
                                    </caso>
                                </manejo_consultas>
                            </nodo_proceso_matricula_tecnicos>
                        `,
					},
				],
			};
		}
	);
}