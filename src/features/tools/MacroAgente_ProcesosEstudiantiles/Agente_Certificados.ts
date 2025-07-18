import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Certificados(server: McpServer) {
	server.tool(
		"Solicitud y Tipos de Certificados Universitaria de Colombia",
		`
        Devuelve información sobre cómo solicitar y tipos de certificados en la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo explica cómo pagar y solicitar certificados en línea, detallando los tipos de certificados (Notas, Estudio, Buena Conducta, Contenidos Programáticos) y sus tiempos de entrega.
                    </contexto>
                    <proposito>
                        <objetivo>
                            Explicar cómo pagar y solicitar un certificado a través de la plataforma en línea, detallando el formulario a diligenciar. Además, describir los tipos de certificados ofrecidos (Notas, Estudio, Buena Conducta, Contenidos Programáticos), sus particularidades y tiempos de entrega.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <certificados>
                            <informacion_general>
                                <definicion>Un certificado es un documento oficial donde la universidad confirma que un estudiante o egresado ha cursado un programa académico en la institución.</definicion>
                            </informacion_general>
                            <como_solicitarlos>
                                <paso_pago>
                                    <descripcion>Primero, debes cancelar el valor correspondiente en nuestra plataforma.</descripcion>
                                    <procedimiento>
                                        <item>Ingresa a tu portal de notas.</item>
                                        <item>Busca la opción PSE.</item>
                                        <item>Selecciona 'pagar crédito'.</item>
                                        <item>Elige tu programa académico.</item>
                                        <item>Finalmente, selecciona el concepto de acuerdo al pago que deseas realizar (Certificado).</item>
                                        <nota>El portal te indicará el valor exacto para que procedas con el pago.</nota>
                                    </procedimiento>
                                </paso_pago>
                                <paso_solicitud_online>
                                    <descripcion>Una vez tengas el comprobante de pago, debes ir a la página web de la universidad y hacer clic en el botón de 'Solicitudes y Requerimientos', o simplemente puedes ir directamente a este enlace:</descripcion>
                                    <enlace>https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</enlace>
                                    <formulario>
                                        <instruccion>Allí, tendrás que diligenciar el formulario completo con la siguiente información:</instruccion>
                                        <datos_requeridos>
                                            <campo>¿Qué tipo de solicitud deseas realizar?: ("Certificados")</campo>
                                            <campo>Tipo de certificado: (Estudio, Notas, Buena Conducta o Contenido Programático)</campo>
                                            <campo>Nombres: (Tu nombre completo, tal cual aparece en tu matrícula.)</campo>
                                            <campo>Apellidos: (Tu apellido completo, tal cual aparece en tu matrícula.)</campo>
                                            <campo>Tipo de documento – Número de documento: (El número de documento que reportaste al matricularte.)</campo>
                                            <campo>Lugar de expedición: (El lugar donde fue expedida tu cédula.)</campo>
                                            <campo>Email: (Un correo electrónico que uses activamente.)</campo>
                                            <campo>Teléfono: (Tu número de teléfono actual.)</campo>
                                            <campo>Programa: (El nombre del programa en el que estás matriculado.)</campo>
                                            <campo>Período académico cursando: (El periodo académico actual en el que te encuentras.)</campo>
                                            <campo>Jornada: (La jornada en la cual estás matriculado.)</campo>
                                            <campo>Mensaje: (Aquí puedes especificar cualquier detalle que necesites que se incluya en el certificado.)</campo>
                                            <campo>Adjuntar pago: (Sube tu recibo de pago, máximo 5 MB en formato PDF o JPG.)</campo>
                                        </datos_requeridos>
                                        <finalizacion_proceso>
                                            <paso>Después de marcar la casilla de aceptación de términos y condiciones, haz clic en el botón enviar.</paso>
                                            <confirmacion>Si todo salió bien, recibirás un correo electrónico de confirmación en la dirección que registraste.</confirmacion>
                                        </finalizacion_proceso>
                                    </formulario>
                                </paso_solicitud_online>
                            </como_solicitarlos>
                            <tipos_certificados>
                                <tipo id="Certificado de Notas">
                                    <nombre>Certificado de Notas</nombre>
                                    <descripcion>Este documento muestra tus notas de los períodos académicos que quieras consultar.</descripcion>
                                    <tiempo_entrega>De 4 a 5 días hábiles.</tiempo_entrega>
                                    <particularidad>El valor del certificado es por cada período académico que solicites.</particularidad>
                                </tipo>
                                <tipo id="Certificado de Estudio">
                                    <nombre>Certificado de Estudio</nombre>
                                    <descripcion>Con este documento, la universidad certifica que estás o estuviste realizando tus estudios con nosotros.</descripcion>
                                    <tiempo_entrega>De 4 a 5 días hábiles.</tiempo_entrega>
                                </tipo>
                                <tipo id="Certificado de Buena Conducta">
                                    <nombre>Certificado de Buena Conducta</nombre>
                                    <descripcion>Este certificado indica si tienes sanciones disciplinarias vigentes en la universidad.</descripcion>
                                    <tiempo_entrega>De 4 a 5 días hábiles.</tiempo_entrega>
                                </tipo>
                                <tipo id="Certificados de Contenidos Programáticos por Materia">
                                    <nombre>Certificados de Contenidos Programáticos por Materia</nombre>
                                    <descripcion>Aquí encontrarás la descripción de cada asignatura, incluyendo sus temas, intensidad horaria y la bibliografía que se usó.</descripcion>
                                    <tiempo_entrega>15 días hábiles.</tiempo_entrega>
                                </tipo>
                            </tipos_certificados>
                            <nota_general_certificados>
                                <item>Todos los certificados se enviarán a tu correo electrónico registrado en la solicitud.</item>
                                <item>Para poder obtener tu certificado, debes haber radicado la solicitud previamente en la pestaña de “Solicitudes” y esperar de 3 a 5 días hábiles para recibirlo.</item>
                            </nota_general_certificados>
                            <paz_y_salvo_para_certificados>
                                <informacion>La información disponible no especifica que sea necesario estar a paz y salvo financieramente para solicitar certificados.</informacion>
                                <indispensable>Lo indispensable es haber cancelado el valor del certificado en el portal de notas y completar la solicitud en el enlace de “Solicitudes y Requerimientos”.</indispensable>
                            </paz_y_salvo_para_certificados>
                        </certificados>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="informacion_general_certificados">
                            <condicion>Si el usuario pregunta de forma general sobre los certificados o cómo obtenerlos.</condicion>
                            <accion>Explicar el proceso general de pago y solicitud, y los tipos de certificados.</accion>
                            <ejemplo_respuesta>"Un certificado es un documento oficial que valida tus estudios en la universidad. Para solicitarlo, primero debes pagarlo en tu portal de notas y luego llenar un formulario en la sección de Solicitudes y Requerimientos de nuestra página web. Ofrecemos certificados de Notas, Estudio, Buena Conducta y Contenidos Programáticos. ¿Te gustaría conocer más detalles sobre el proceso de pago o sobre un tipo de certificado en particular?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="como_pagar_certificado">
                            <condicion>Si el usuario pregunta cómo pagar un certificado.</condicion>
                            <accion>Detallar el procedimiento de pago a través del portal de notas (PSE).</accion>
                            <ejemplo_respuesta>"Para pagar tu certificado, por favor ingresa a tu portal de notas. Allí, busca la opción **PSE**, selecciona 'pagar crédito', luego elige tu programa académico y, finalmente, selecciona el concepto 'Certificado'. El sistema te indicará el valor exacto para que puedas proceder con el pago."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="como_solicitar_certificado_online">
                            <condicion>Si el usuario pregunta cómo solicitar el certificado una vez pagado o el enlace directo.</condicion>
                            <accion>Explicar el proceso de solicitud en línea y proporcionar el enlace.</accion>
                            <ejemplo_respuesta>"Una vez que tengas el comprobante de pago, puedes solicitar tu certificado en la sección de **Solicitudes y Requerimientos** de nuestra página web, o directamente a través de este enlace: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/. Allí deberás diligenciar un formulario con tus datos y adjuntar el recibo de pago. ¿Necesitas saber qué información específica se pide en el formulario?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="datos_formulario_certificados">
                            <condicion>Si el usuario pregunta qué datos se piden en el formulario de solicitud de certificados.</condicion>
                            <accion>Listar todos los campos requeridos en el formulario.</accion>
                            <ejemplo_respuesta>"En el formulario de solicitud de certificados te solicitarán la siguiente información:
                                * Tipo de solicitud: 'Certificados'.
                                * Tipo de certificado: Selecciona entre Estudio, Notas, Buena Conducta o Contenido Programático.
                                * Nombres y Apellidos: Deben ser tu nombre y apellido completo, tal como aparecen en tu matrícula.
                                * Tipo y Número de documento: El que reportaste al matricularte.
                                * Lugar de expedición: El lugar donde fue expedida tu cédula.
                                * Email: Un correo electrónico que uses activamente.
                                * Teléfono: Tu número de teléfono actual.
                                * Programa: El nombre del programa en el que estás matriculado.
                                * Período académico cursando: El periodo académico actual en el que te encuentras.
                                * Jornada: La jornada en la cual estás matriculado.
                                * Mensaje: Aquí puedes especificar cualquier detalle que necesites que se incluya en el certificado.
                                * Adjuntar pago: Sube tu recibo de pago, con un tamaño máximo de 5 MB en formato PDF o JPG.
                                Después de diligenciar todo, marca la casilla de aceptación de términos y condiciones y haz clic en 'enviar'. Recibirás un correo de confirmación."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="tipos_de_certificados_disponibles">
                            <condicion>Si el usuario pregunta de forma general qué tipos de certificados se ofrecen.</condicion>
                            <accion>Listar los tipos disponibles y preguntar cuál le interesa.</accion>
                            <ejemplo_respuesta>"Disponemos de varios tipos de certificados: **Certificado de Notas**, **Certificado de Estudio**, **Certificado de Buena Conducta** y **Certificados de Contenidos Programáticos por Materia**. ¿Cuál de estos te gustaría conocer más a fondo?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalles_certificado_notas">
                            <condicion>Si el usuario pregunta por el certificado de notas.</condicion>
                            <accion>Describir el certificado de notas, su tiempo de entrega y particularidades.</accion>
                            <ejemplo_respuesta>"El **Certificado de Notas** es un documento que muestra tus calificaciones de los períodos académicos que solicites. Se entrega en un plazo de **4 a 5 días hábiles**. Es importante que sepas que el valor del certificado es por cada período académico que pidas."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalles_certificado_estudio">
                            <condicion>Si el usuario pregunta por el certificado de estudio.</condicion>
                            <accion>Describir el certificado de estudio y su tiempo de entrega.</accion>
                            <ejemplo_respuesta>"El **Certificado de Estudio** es un documento oficial mediante el cual la universidad certifica que estás o estuviste realizando tus estudios con nosotros. El tiempo de entrega es de **4 a 5 días hábiles**."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalles_certificado_buena_conducta">
                            <condicion>Si el usuario pregunta por el certificado de buena conducta.</condicion>
                            <accion>Describir el certificado de buena conducta y su tiempo de entrega.</accion>
                            <ejemplo_respuesta>"El **Certificado de Buena Conducta** indica si tienes sanciones disciplinarias vigentes en la universidad. Su tiempo de entrega es de **4 a 5 días hábiles**."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="detalles_certificado_contenidos_programaticos">
                            <condicion>Si el usuario pregunta por el certificado de contenidos programáticos.</condicion>
                            <accion>Describir el certificado de contenidos programáticos y su tiempo de entrega.</accion>
                            <ejemplo_respuesta>"Los **Certificados de Contenidos Programáticos por Materia** te proporcionan la descripción detallada de cada asignatura, incluyendo sus temas, intensidad horaria y la bibliografía utilizada. El tiempo de entrega de este certificado es de **15 días hábiles**."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="paz_y_salvo_certificados">
                            <condicion>Si el usuario pregunta si necesita estar a paz y salvo financieramente para solicitar certificados.</condicion>
                            <accion>Aclarar que no es un requisito financiero sino de pago del certificado y radicación.</accion>
                            <ejemplo_respuesta>"La información disponible no especifica que sea necesario estar a paz y salvo financieramente para solicitar certificados. Lo indispensable es que hayas cancelado el valor del certificado en el portal de notas y que completes la solicitud en el enlace de “Solicitudes y Requerimientos”."</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como asistente, no tengo acceso a tus datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para obtener esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con los certificados académicos.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la solicitud y los tipos de certificados académicos en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte cómo solicitar un certificado, los tipos de certificados que ofrecemos (como el de Notas, Estudio, Buena Conducta o Contenidos Programáticos) y sus tiempos de entrega. ¿Necesitas ayuda con algún otro tipo de certificado o tienes alguna otra consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}