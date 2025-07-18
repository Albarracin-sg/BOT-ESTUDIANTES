import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_RadicacionPagos(server: McpServer) {
	server.tool(
		"Radicación de Pagos",
		`
        Devuelve información de la radicación de pagos de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                        <nodo_radicacion_pagos>
                            <contexto>
                                Este nodo explica cómo radicar pagos en la Universitaria de Colombia, ya sea por la página web o presencialmente, detallando los requisitos y procesos para cada opción, y enfatizando que la radicación es obligatoria.
                            </contexto>
                            <proposito>
                                <objetivo>
                                    Explicar el procedimiento para la radicación de pagos, tanto por la página web como de forma presencial, detallando los datos específicos o requisitos para cada método.
                                </objetivo>
                            </proposito>

                            <conocimiento_disponible>
                                <radicacion_de_pagos>
                                    <importancia>Todos los pagos que el aspirante, estudiante o egresado realice deben ser radicados; de lo contrario, no serán tenidos en cuenta.</importancia>
                                    <metodos_de_radicacion>
                                        <radicacion_web>
                                            <nombre>Radicación de Pagos por Página Web</nombre>
                                            <enlace>https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</enlace>
                                            <ruta_web>(Solicitudes y requerimientos – Pagos)</ruta_web>
                                            <proceso>Debe diligenciar el formulario completo y adjuntar el comprobante de pago.</proceso>
                                            <tiempo_respuesta>De 4 a 5 días hábiles se enviará por medio del correo electrónico el recibo de caja.</tiempo_respuesta>
                                            <formulario_datos_requeridos>
                                                <campo>¿Qué tipo de solicitud deseas realizar?: (Pagos)</campo>
                                                <campo>Nombres: (Nombre completo del estudiante; tal y como aparece en la matrícula.)</campo>
                                                <campo>Apellidos: (Apellido completo del estudiante; tal y como aparece en la matrícula.)</campo>
                                                <campo>Tipo de documento – Número de documento: (Número de documento reportado en la matrícula.)</campo>
                                                <campo>Email: (Correo electrónico activo del estudiante.)</campo>
                                                <campo>Teléfono: (Número de teléfono actual.)</campo>
                                                <campo>Programa: (Nombre del programa en el que se encuentra matriculado.)</campo>
                                                <campo>Período académico cursando: (Periodo académico en el que se encuentra.)</campo>
                                                <campo>Jornada: (Jornada en la cual se encuentra matriculado.)</campo>
                                                <campo>¿Te estás reintegrando?: (seleccionar la opción sí, para reintegro)</campo>
                                                <campo>Concepto: (Específica el concepto de pago: matrícula, certificados, etc.)</campo>
                                                <campo>Adjuntar pago: (Arrastra en este campo el recibo de pago máximo 5 MB en formato PDF o JPG.)</campo>
                                            </formulario_datos_requeridos>
                                            <finalizacion_envio>Luego, marque en la casilla aceptar términos y condiciones y luego dé clic sobre el botón enviar. Si el registro fue realizado de manera adecuada, el sistema le notificará el siguiente mensaje: Recibirá un email de confirmación al correo registrado.</finalizacion_envio>
                                        </radicacion_web>
                                        <radicacion_presencial>
                                            <nombre>Radicación de Pagos Presencial</nombre>
                                            <solicitud_cita>El estudiante debe solicitar cita por medio de la página de la universidad</solicitud_cita>
                                            <enlace_cita>https://citas.universitariadecolombia.edu.co/</enlace_cita>
                                            <ruta_cita>(Solicitudes de Cita – Pagos)</ruta_cita>
                                            <requisito_fisico>Debe contar con el comprobante de pago en físico.</requisito_fisico>
                                        </radicacion_presencial>
                                    </metodos_de_radicacion>
                                </radicacion_de_pagos>
                            </conocimiento_disponible>

                            <manejo_consultas>
                                <caso tipo="informacion_general_radicacion">
                                    <condicion>Si el usuario pregunta de forma general sobre la radicación de pagos.</condicion>
                                    <accion>Proveer la información inicial concisa sobre las dos formas de radicar y preguntar por detalles.</accion>
                                    <ejemplo_respuesta>"Todos los pagos que realices deben ser radicados; de lo contrario, no serán tenidos en cuenta. Puedes hacerlo de dos formas: por nuestra **página web** o de forma **presencial**. ¿Deseas que te brinde los detalles de alguna de estas opciones?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="como_radicar_pago">
                                    <condicion>Si el usuario pregunta cómo radicar un pago.</condicion>
                                    <accion>Proveer la información de cómo radicar el pago.</accion>
                                    <ejemplo_respuesta>"Para radicar tu pago, puedes hacerlo por la página web diligenciando un formulario y adjuntando el comprobante, o presencialmente solicitando una cita y presentando el comprobante físico. ¿Deseas conocer el procedimiento detallado para alguna de estas opciones?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="radicacion_web_detalles">
                                    <condicion>Si el usuario pregunta por la radicación por página web o los datos del formulario.</condicion>
                                    <accion>Proveer la información de radicación web.</accion>
                                    <ejemplo_respuesta>"Para radicar tu pago por la página web, debes ingresar a https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/ (en Solicitudes y requerimientos – Pagos). Debes diligenciar el formulario completo y adjuntar el comprobante de pago. Los datos requeridos son:
                                        * Tipo de solicitud: Pagos
                                        * Nombres y Apellidos: Tal y como aparecen en tu matrícula.
                                        * Tipo y Número de documento: El reportado en tu matrícula.
                                        * Email: Tu correo electrónico activo.
                                        * Teléfono: Tu número de teléfono actual.
                                        * Programa: Nombre de tu programa matriculado.
                                        * Período académico: El que estás cursando.
                                        * Jornada: En la cual estás matriculado.
                                        * ¿Te estás reintegrando?: Selecciona 'sí' si aplica.
                                        * Concepto: Específica el concepto de pago (matrícula, certificados, etc.).
                                        * Adjuntar pago: Arrastra el recibo (máximo 5 MB en PDF o JPG).
                                        Al finalizar, marca la casilla de aceptar términos y condiciones y haz clic en enviar. Recibirás un email de confirmación en el correo registrado en un plazo de 4 a 5 días hábiles, donde se incluirá el recibo de caja."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="radicacion_presencial_detalles">
                                    <condicion>Si el usuario pregunta por la radicación presencial.</condicion>
                                    <accion>Proveer la información de radicación presencial.</accion>
                                    <ejemplo_respuesta>"Para la radicación presencial de tu pago, necesitas solicitar una cita a través de la página de la universidad en https://citas.universitariadecolombia.edu.co/ (en Solicitudes de Cita – Pagos). Es fundamental que lleves el comprobante de pago en físico."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="acceso_informacion_personal">
                                    <condicion>Si un usuario solicita datos personales.</condicion>
                                    <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                    <ejemplo_respuesta>"Como Valeria asistente, no tengo acceso a tus datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.edu.co/."</ejemplo_respuesta>
                                </caso>
                                <caso tipo="consulta_fuera_contexto">
                                    <condicion>Si la consulta no se relaciona con pagos.</condicion>
                                    <accion>Indicar que solo puede ayudar con información sobre la radicación de pagos.</accion>
                                    <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la radicación de tus pagos. ¿Cuál es tu pregunta específica sobre este proceso? ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                                </caso>
                                <caso tipo="que_mas_puedes_hacer">
                                    <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                                    <accion>Enumerar las capacidades de este nodo.</accion>
                                    <ejemplo_respuesta>"Puedo explicarte cómo radicar tus pagos y qué datos necesitas para la solicitud. ¿Qué necesitas saber? ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                                </caso>
                            </manejo_consultas>
                        </nodo_radicacion_pagos>
                        `,
					},
				],
			};
		}
	);
}