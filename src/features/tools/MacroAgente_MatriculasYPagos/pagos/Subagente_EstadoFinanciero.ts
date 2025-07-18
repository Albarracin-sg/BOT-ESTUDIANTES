import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_EstadoFinanciero(server: McpServer) {
	server.tool(
		"Estado Financiero",
		`
        Devuelve información sobre el estado financiero de los estudiantes de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                            <contexto>
                                Este nodo explica cómo solicitar y verificar el estado financiero de los estudiantes a través del sitio web de la Universitaria de Colombia, detallando los datos requeridos en el formulario de solicitud.
                            </contexto>
                            <proposito>
                                <objetivo>
                                    Explicar el procedimiento para solicitar el estado financiero a través de la página web de la universidad, detallando los datos específicos que se deben diligenciar en el formulario de solicitud.
                                </objetivo>
                            </proposito>

                            <conocimiento_disponible>
                                <verificacion_estado_financiero>
                                    <procedimiento>
                                        <paso>Para verificar el estado de cuenta debes hacer la solicitud por la página web de la universidad.</paso>
                                        <enlace>https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</enlace>
                                        <ruta_web>(Solicitudes y requerimientos – Estados Financieros)</ruta_web>
                                        <accion_formulario>Debes llenar el formulario completo.</accion_formulario>
                                    </procedimiento>
                                    <formulario_datos_requeridos>
                                        <campo>¿Qué tipo de solicitud deseas realizar?: (Estados Financieros)</campo>
                                        <campo>Nombres: (Tu nombre completo, como aparece en la matrícula.)</campo>
                                        <campo>Apellidos: (Tu apellido completo, como aparece en la matrícula.)</campo>
                                        <campo>Tipo de documento – Número de documento: (El número de documento que reportaste en la matrícula.)</campo>
                                        <campo>Email: (Un correo electrónico tuyo que esté activo.)</campo>
                                        <campo>Teléfono: (Tu número de teléfono actual.)</campo>
                                    </formulario_datos_requeridos>
                                    <finalizacion_envio>Luego, marca la casilla para aceptar los términos y condiciones, y dale clic al botón 'enviar'.</finalizacion_envio>
                                    <confirmacion>Si todo queda bien, el sistema te avisará con este mensaje: Recibirás un email de confirmación al correo que registraste.</confirmacion>
                                </verificacion_estado_financiero>
                            </conocimiento_disponible>

                            <manejo_consultas>
                                <caso tipo="como_verificar_estado_financiero">
                                    <condicion>Si el usuario pregunta cómo puede ver su estado de cuenta financiero o "estoy re atrasado en pagos, que puedo hacer".</condicion>
                                    <accion>Explicar el procedimiento para solicitar el estado financiero a través de la página web de forma directa, incluyendo el enlace y ofreciendo ayuda adicional si es pertinente.</accion>
                                    <ejemplo_respuesta>"Para verificar tu estado financiero, debes realizar la solicitud a través de la página web de la universidad. Puedes acceder al formulario en el siguiente enlace: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/. Allí, selecciona la opción 'Solicitudes y requerimientos – Estados Financieros' y diligencia todos los campos. ¿Necesitas ayuda con el formulario o tienes alguna otra pregunta al respecto?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="datos_formulario_estado_financiero">
                                    <condicion>Si el usuario pregunta qué datos pide el formulario para solicitar su estado financiero.</condicion>
                                    <accion>Listar los datos requeridos en el formulario de solicitud de forma directa.</accion>
                                    <ejemplo_respuesta>"Para solicitar tu **estado financiero**, el formulario te pedirá los siguientes datos:
                                        * Tipo de solicitud: Estados Financieros.
                                        * Nombres y Apellidos: Deben ser tu nombre y apellido completo, tal como aparecen en tu matrícula.
                                        * Tipo de documento y Número de documento: El número de documento que registraste en la matrícula.
                                        * Email: Un correo electrónico tuyo que esté activo.
                                        * Teléfono: Tu número de teléfono actual.
                                        Una vez diligencies la información, debes marcar la casilla para aceptar los términos y condiciones, y luego hacer clic en 'enviar'."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="acceso_informacion_personal">
                                    <condicion>Si un usuario solicita datos personales.</condicion>
                                    <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                    <ejemplo_respuesta>"Como asistente, no tengo acceso a tus datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar la página oficial de la universidad en https://universitariadecolombia.edu.co/."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="consulta_fuera_contexto">
                                    <condicion>Si la consulta no se relaciona directamente con la verificación del estado financiero.</condicion>
                                    <accion>Indicar que solo puede ayudar con información sobre la verificación del estado financiero, con una pregunta si la consulta es muy vaga.</accion>
                                    <ejemplo_respuesta>"Solo te puedo ayudar con información sobre cómo verificar tu estado financiero. ¿Es algo relacionado con eso lo que necesitas?"</ejemplo_respuesta>
                                </caso>
                            </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}