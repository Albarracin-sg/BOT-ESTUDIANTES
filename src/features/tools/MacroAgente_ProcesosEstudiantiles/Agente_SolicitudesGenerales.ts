import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_SolicitudesGenerales(server: McpServer) {
	server.tool(
		"Agente_SolicitudesGenerales",
		`
        Devuelve información sobre órdenes de matrícula y citas presenciales en la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo explica la Orden de Matrícula (uso, quiénes la solicitan, proceso y requisitos) y el agendamiento de citas presenciales (cómo solicitarlas y consideraciones importantes).
                    </contexto>
                    <proposito>
                        <objetivo>
                            Explicar qué es la Orden de Matrícula, para qué se utiliza, quiénes pueden solicitarla y cómo se realiza el proceso de solicitud, incluyendo los datos requeridos y los tiempos de respuesta. Además, detallar el procedimiento para solicitar una cita presencial, las consideraciones importantes (como la antelación, el manejo de menores de edad, la especificación de múltiples servicios, y las restricciones de días y duplicidad de citas), y la importancia de la correcta tipificación del proceso para la atención.
                        </objetivo>
                    </proposito>
                    <conocimiento_disponible>
                        <orden_de_matricula>
                            <que_es>La orden de matrícula es el documento que se solicita para realizar pagos a través de cesantías o entidades financieras.</que_es>
                            <quienes_pueden_solicitarla>
                                <aspirante>Ser aspirante a alguno de los programas académicos (técnico laboral, pregrado, especialización) dentro de la institución.</aspirante>
                                <estudiante_activo>Es obligatorio estar al día en pagos y haber realizado la renovación de la matrícula para que se pueda emitir este documento. Únicamente se otorgará al estudiante que se encuentre en estado activo.</estudiante_activo>
                            </quienes_pueden_solicitarla>
                            <costo>Este documento no genera ningún cobro, es totalmente gratuito.</costo>
                            <tiempo_entrega>El plazo de entrega máximo es de tres (3) a cinco (5) días hábiles.</tiempo_entrega>
                            <envio>Se envía por correo electrónico suministrado por quien solicita.</envio>
                            <proceso_de_solicitud>
                                <instruccion>Cumpliendo estos requisitos el estudiante debe ingresar al sitio web de la universidad y dar clic sobre el botón de Solicitudes y Requerimientos – Orden de matrícula o ingresar al siguiente enlace:</instruccion>
                                <enlace>https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/</enlace>
                            </proceso_de_solicitud>
                            <formulario_solicitud>
                                <datos_requeridos>
                                    <campo>Nombres: (Nombre completo del estudiante, tal como aparece en la matrícula.)</campo>
                                    <campo>Apellidos: (Apellido completo del estudiante, tal como aparece en la matrícula.)</campo>
                                    <campo>Correo: (Correo electrónico activo del estudiante.)</campo>
                                    <campo>Confirmación del Correo: (Confirmación del correo electrónico activo del estudiante.)</campo>
                                    <campo>Teléfono: (Número de teléfono actual.)</campo>
                                    <campo>Tipo de programa: (Especifique el programa académico que está cursando actualmente.)</campo>
                                    <campo>Jornada: (Jornada en la cual se encuentra matriculado.)</campo>
                                    <campo>Mensaje: (Describe tu solicitud o agrega información adicional a la solicitud.)</campo>
                                    <campo>Valor de orden: (Valor por el cual se desea realizar la orden de matrícula.)</campo>
                                    <campo>Año en que se matriculó: (Mes y año en el que se matriculó.)</campo>
                                    <campo>Periodo a pagar: (Periodo académico que desea pagar.)</campo>
                                </datos_requeridos>
                                <finalizacion_proceso>
                                    <paso>Por último haga clic en el botón Enviar.</paso>
                                    <confirmacion>Si el proceso se realizó correctamente, el sistema enviará un email de confirmación al correo registrado.</confirmacion>
                                </finalizacion_proceso>
                                <tiempo_respuesta>3 días hábiles.</tiempo_respuesta>
                            </formulario_solicitud>
                        </orden_de_matricula>
                        <solicitud_de_citas_presenciales>
                            <recomendacion>Para cualquier trámite se recomienda que las citas presenciales sean de carácter completamente necesario.</recomendacion>
                            <enlace_para_agendar>Para un agendamiento de manera presencial, deberá ingresar al siguiente enlace: https://citas.universitariadecolombia.edu.co/.</enlace_para_agendar>
                            <consideraciones_importantes>
                                <item>No se aceptan citas solicitadas para el mismo día.</item>
                                <item>Si es menor de edad, debe llenar las casillas correspondientes en el formulario y especificar los datos de su acudiente.</item>
                                <item>Si realizará más de un proceso o servicio, lo puede especificar en la casilla de ‘Nota’.</item>
                                <item>Para retirar su certificado, previamente debe de radicar la solicitud en la pestaña de “Solicitudes” y esperar 3 días hábiles para obtener el documento.</item>
                            </consideraciones_importantes>
                            <anuncios_importantes>
                                <restriccion>Los días sábados, domingos y festivos no se labora, por tal motivo su cita debe de agendarla de lunes a viernes.</restriccion>
                                <restriccion>Si agenda más de una cita al día, su solicitud no se tomará en cuenta.</restriccion>
                                <restriccion>Solo serán admitidos los procesos que se han bien tipificado, si reserva una cita a un proceso diferente al cual realizará, no se le atenderá.</restriccion>
                                <restriccion>Para cada proceso debe agendar una cita diferente, buscando la tipificación correspondiente.</restriccion>
                            </anuncios_importantes>
                        </solicitud_de_citas_presenciales>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="orden_matricula_general">
                            <condicion>Si el usuario pregunta de forma general sobre la Orden de Matrícula.</condicion>
                            <accion>Explicar qué es, para qué sirve y quiénes la pueden solicitar.</accion>
                            <ejemplo_respuesta>"La **Orden de Matrícula** es un documento que te sirve para realizar pagos a través de cesantías o entidades financieras. Pueden solicitarla aspirantes a nuestros programas o estudiantes activos que estén al día con sus pagos y hayan renovado su matrícula. ¿Te gustaría saber cómo solicitarla o cuánto tiempo tarda la entrega?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_es_orden_matricula">
                            <condicion>Si el usuario pregunta qué es la Orden de Matrícula.</condicion>
                            <accion>Definir la Orden de Matrícula.</accion>
                            <ejemplo_respuesta>"La **Orden de Matrícula** es el documento que se solicita para realizar pagos a través de cesantías o entidades financieras. ¿Te gustaría saber quiénes pueden solicitarla?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="quien_solicita_orden_matricula">
                            <condicion>Si el usuario pregunta quiénes pueden solicitar la Orden de Matrícula.</condicion>
                            <accion>Especificar los requisitos para solicitarla.</accion>
                            <ejemplo_respuesta>"Pueden solicitar la **Orden de Matrícula** los aspirantes a cualquiera de nuestros programas académicos, o estudiantes activos que estén al día en sus pagos y hayan renovado su matrícula. Es importante que el estudiante se encuentre en estado activo. ¿Te gustaría saber cómo solicitarla?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="costo_orden_matricula">
                            <condicion>Si el usuario pregunta por el costo de la Orden de Matrícula.</condicion>
                            <accion>Indicar que no tiene costo.</accion>
                            <ejemplo_respuesta>"La **Orden de Matrícula** no tiene ningún costo, es totalmente gratuita. ¿Deseas saber cómo solicitarla?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="tiempo_entrega_orden_matricula">
                            <condicion>Si el usuario pregunta por el tiempo de entrega de la Orden de Matrícula.</condicion>
                            <accion>Indicar el plazo de entrega.</accion>
                            <ejemplo_respuesta>"El plazo de entrega máximo de la **Orden de Matrícula** es de tres (3) a cinco (5) días hábiles. Se envía a tu correo electrónico. ¿Hay algo más en lo que pueda ayudarte sobre la Orden de Matrícula o las citas?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="proceso_solicitud_orden_matricula">
                            <condicion>Si el usuario pregunta cómo solicitar la Orden de Matrícula o el enlace.</condicion>
                            <accion>Explicar el proceso de solicitud y proporcionar el enlace.</accion>
                            <ejemplo_respuesta>"Para solicitar la **Orden de Matrícula**, debes ingresar al sitio web de la universidad y hacer clic en **Solicitudes y Requerimientos – Orden de matrícula**, o puedes ir directamente a este enlace: https://solicitudes.universitariadecolombia.edu.co/solictud-y-requerimiento/. Allí deberás llenar un formulario. ¿Te gustaría que te detalle los datos que pide el formulario?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="datos_formulario_orden_matricula">
                            <condicion>Si el usuario pregunta qué datos se piden en el formulario de la Orden de Matrícula.</condicion>
                            <accion>Listar los datos requeridos en el formulario.</accion>
                            <ejemplo_respuesta>"En el formulario de solicitud de **Orden de Matrícula** te pedirán: tus nombres y apellidos, correo (y confirmación), teléfono, tipo de programa, jornada, un mensaje para tu solicitud, el valor de la orden, el año en que te matriculaste y el periodo a pagar. Luego, solo debes hacer clic en Enviar. ¿Hay algo más en lo que pueda ayudarte sobre la Orden de Matrícula o las citas?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="citas_presenciales_general">
                            <condicion>Si el usuario pregunta de forma general sobre las citas presenciales.</condicion>
                            <accion>Explicar la recomendación de necesidad, el enlace para agendar y las consideraciones importantes.</accion>
                            <ejemplo_respuesta>"Para cualquier trámite presencial, te recomendamos agendar tu cita solo si es estrictamente necesario. Puedes hacerlo en este enlace: https://citas.universitariadecolombia.edu.co/. Recuerda que no se aceptan citas para el mismo día, y si eres menor de edad, debes incluir los datos de tu acudiente. ¿Hay algo más en lo que pueda ayudarte sobre las citas presenciales?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="agendar_cita_presencial">
                            <condicion>Si el usuario pregunta cómo agendar una cita presencial o el enlace.</condicion>
                            <accion>Proporcionar el enlace y las consideraciones importantes al agendar.</accion>
                            <ejemplo_respuesta>"Para agendar una cita presencial, debes ingresar a este enlace: https://citas.universitariadecolombia.edu.co/. Ten en cuenta que no aceptamos citas para el mismo día. Si eres menor de edad, llena las casillas de tu acudiente y si vas a realizar varios trámites, puedes especificarlos en la casilla 'Nota'. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="restricciones_citas_presenciales">
                            <condicion>Si el usuario pregunta por las restricciones o anuncios importantes de las citas presenciales.</condicion>
                            <accion>Listar las restricciones y anuncios importantes para las citas presenciales.</accion>
                            <ejemplo_respuesta>"Es importante que sepas que no laboramos sábados, domingos ni festivos, así que agenda tu cita de lunes a viernes. Además, si agendas más de una cita al día, tu solicitud no será tenida en cuenta. Y recuerda que solo se atenderán los procesos bien tipificados; si tu cita no coincide con el proceso que vas a realizar, no se te atenderá. Para cada proceso diferente, debes agendar una cita distinta. ¿Hay algo más en lo que pueda ayudarte sobre las citas?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con la Orden de Matrícula o la Solicitud de Citas.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la Orden de Matrícula y la solicitud de citas presenciales en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte qué es la **Orden de Matrícula** y cómo solicitarla, o cómo agendar una **cita presencial** y cuáles son las reglas importantes para ello. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}