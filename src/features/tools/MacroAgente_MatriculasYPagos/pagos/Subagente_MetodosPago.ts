import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_MetodosPago(server: McpServer) {
	server.tool(
		"Métodos de Pago",
		`
        Devuelve información de los métodos de pago de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                        <contexto>
                            Este nodo describe los métodos de pago para estudiantes, aspirantes y egresados en la Universitaria de Colombia: Pago en Línea (PSE), Recibo con Código de Barras, Pago por Cesantías, Tarjeta Débito o Crédito (Visa/MasterCard) y Consignación Directa en Banco Davivienda, incluyendo pasos y particularidades. También menciona la opción de financiación por cuotas directas con la institución y la importancia de radicar el pago.
                        </contexto>
                        <proposito>
                            <objetivo>
                                Describir los métodos de pago disponibles para estudiantes, aspirantes y egresados, incluyendo Pago en Línea (PSE), Recibo con Código de Barras, Pago por Cesantías, Tarjeta Débito o Crédito (Visa/MasterCard) y Consignación Directa en Banco Davivienda. Cada opción debe incluir los pasos a seguir y cualquier particularidad relevante para facilitar el proceso de pago, incluyendo la necesidad de radicar el pago cuando sea aplicable.
                            </objetivo>
                        </proposito>

                        <conocimiento_disponible>
                            <metodos_de_pago>
                                <plataforma_de_pagos>La Universitaria de Colombia usa una plataforma en el Portal de Notas para que los estudiantes hagan sus pagos de forma ordenada y eficaz.</plataforma_de_pagos>
                                <financiacion_por_cuotas>Además de los métodos de pago específicos, la Universitaria de Colombia ofrece la posibilidad de financiar los programas por cuotas directas con la institución. Para conocer los detalles de financiación de un programa, se recomienda preguntar por dicho programa.</financiacion_por_cuotas>
                                <opciones_de_pago>
                                    <pago_en_linea_pse>
                                        <nombre>Pago en Línea (PSE)</nombre>
                                        <pasos>
                                            <paso>El estudiante debe ingresar a su portal de notas, dirigirse a la opción PSE, seleccionar "pagar crédito", ingresar al programa correspondiente y elegir el concepto de acuerdo al pago que desea realizar.</paso>
                                            <paso>El portal de notas indicará el valor correspondiente para que el estudiante proceda con el pago (dicha plataforma no admite abonos, por lo cual el estudiante debe cancelar la cuota completa).</paso>
                                        </pasos>
                                        <video_explicativo>https://www.youtube.com/watch?v=zEpvGM8HX1A</video_explicativo>
                                    </pago_en_linea_pse>
                                    <recibo_con_codigo_de_barras>
                                        <nombre>Recibo con Código de Barras</nombre>
                                        <pasos>
                                            <paso>El estudiante debe ingresar a su portal de notas, dirigirse a la opción Cartera, seleccionar "orden de pago (generar)".</paso>
                                            <paso>Escoger el programa correspondiente, seleccionar el concepto de acuerdo al pago que desea realizar y generar el comprobante.</paso>
                                            <paso>Posterior a imprimir el comprobante a láser podrá llevar a cabo el pago en corresponsales bancarios, SuperGIROS o Efecty.</paso>
                                        </pasos>
                                        <video_explicativo>https://www.youtube.com/watch?v=GWWPPRW_VfE</video_explicativo>
                                    </recibo_con_codigo_de_barras>
                                    <pago_por_cesantias>
                                        <nombre>Pago por Cesantías</nombre>
                                        <pasos>
                                            <paso>El estudiante debe solicitar la Orden de matrícula por medio de la página de la universidad (Solicitudes y requerimientos - Orden de matrícula).</paso>
                                            <paso>El estudiante debe enviar dicho documento al fondo de cesantías correspondiente con el fin de que la entidad inicie el proceso de desembolso.</paso>
                                        </pasos>
                                        <tiempo_respuesta>Posterior a enviar la solicitud por medio de la página de la universidad se maneja un tiempo de respuesta de 4 a 5 días hábiles.</tiempo_respuesta>
                                    </pago_por_cesantias>
                                    <tarjeta_debito_o_credito_visa_mastercard>
                                        <nombre>Tarjeta Débito o Crédito Visa o MasterCard (Aspirantes y Egresados)</nombre>
                                        <pasos>
                                            <paso>El Aspirante o Egresado debe acercarse a la sede Administrativa para generar el pago por medio de tarjeta crédito o débito.</paso>
                                        </pasos>
                                        <condicion>Este medio solo se habilitará para el primer pago que realice el aspirante o para los pagos que deban llevarse a cabo por parte de egresados.</condicion>
                                    </tarjeta_debito_o_credito_visa_mastercard>
                                    <consignacion_directa_en_banco_davivienda>
                                        <nombre>Consignación Directa en Banco Davivienda</nombre>
                                        <pasos>
                                            <paso>Realizar una consignación en cualquier oficina de Banco Davivienda.</paso>
                                        </pasos>
                                        <datos_de_la_cuenta>
                                            <titular>Universitaria de Colombia</titular>
                                            <nit>900.350.945-0</nit>
                                            <tipo_de_cuenta>Ahorros</tipo_de_cuenta>
                                            <numero_de_cuenta>008900814248</numero_de_cuenta>
                                        </datos_de_la_cuenta>
                                        <soporte>Guardar el comprobante como soporte del pago.</soporte>
                                        <radicacion>Después de consignar, es clave que radiques el comprobante de pago para que quede registrado.</radicacion>
                                    </consignacion_directa_en_banco_davivienda>
                                </opciones_de_pago>
                                <radicacion_del_pago_general>Después de realizar tu pago, es importante que radiques tu comprobante para que sea aplicado correctamente.</radicacion_del_pago_general>
                            </metodos_de_pago>
                        </conocimiento_disponible>

                        <manejo_consultas>
                            <caso tipo="primer_contacto">
                                <condicion>Si es el primer contacto con el usuario.</condicion>
                                <accion>Saludar.</accion>
                                <ejemplo_respuesta>"¡Hola! ¿En qué puedo ayudarte hoy?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="consulta_general_metodos_pago">
                                <condicion>Si la pregunta del usuario es amplia sobre los métodos de pago.</condicion>
                                <accion>Listar los nombres de las opciones disponibles y luego preguntar si desea más detalles de alguna en particular, sin incluir descripciones o pasos.</accion>
                                <ejemplo_respuesta>"¡Claro! Contamos con varias opciones de pago: Pago en Línea (PSE), Recibo con Código de Barras, Pago por Cesantías, Tarjeta Débito o Crédito (Visa/MasterCard) y Consignación Directa en Banco Davivienda. ¿Te gustaría conocer más detalles sobre alguno de estos métodos?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="pago_en_linea_pse_detalle">
                                <condicion>Si el usuario pregunta específicamente por el Pago en Línea (PSE).</condicion>
                                <accion>Detallar el proceso y particularidades del Pago en Línea (PSE).</accion>
                                <ejemplo_respuesta>"Para el **Pago en Línea (PSE)**, debes ingresar a tu portal de notas, ir a la opción PSE, seleccionar 'pagar crédito', elegir tu programa y el concepto de pago. La plataforma te indicará el valor total a cancelar, ya que no admite abonos parciales. También puedes ver un video explicativo en: https://www.youtube.com/watch?v=zEpvGM8HX1A. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="recibo_codigo_barras_detalle">
                                <condicion>Si el usuario pregunta específicamente por el Recibo con Código de Barras.</condicion>
                                <accion>Explicar cómo generar y usar el Recibo con Código de Barras.</accion>
                                <ejemplo_respuesta>"Para el **Recibo con Código de Barras**, ingresa a tu portal de notas, ve a 'Cartera' y selecciona 'orden de pago (generar)'. Elige tu programa, el concepto de pago y genera el comprobante. Una vez impreso a láser, puedes pagar en corresponsales bancarios, SuperGIROS o Efecty. Hay un video explicativo aquí: https://www.youtube.com/watch?v=GWWPPRW_VfE. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="pago_cesantias_detalle">
                                <condicion>Si el usuario pregunta específicamente por el Pago por Cesantías.</condicion>
                                <accion>Describir el proceso de Pago por Cesantías.</accion>
                                <ejemplo_respuesta>"Para el **Pago por Cesantías**, primero debes solicitar la Orden de Matrícula en la página de la universidad (en 'Solicitudes y requerimientos'). Luego, envías ese documento a tu fondo de cesantías para que ellos inicien el desembolso. El tiempo de respuesta después de enviar la solicitud es de 4 a 5 días hábiles. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="tarjeta_debito_credito_detalle">
                                <condicion>Si el usuario pregunta específicamente por el pago con Tarjeta Débito o Crédito (Visa/MasterCard).</condicion>
                                <accion>Indicar cómo realizar pagos con Tarjeta Débito o Crédito (Visa/MasterCard) para aspirantes y egresados.</accion>
                                <ejemplo_respuesta>"Si eres aspirante o egresado y deseas pagar con **Tarjeta Débito o Crédito (Visa o MasterCard)**, debes acercarte a la sede Administrativa para realizar el pago. Ten en cuenta que este medio solo está habilitado para tu primer pago como aspirante o para los pagos de egresados. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="consignacion_davivienda_detalle">
                                <condicion>Si el usuario pregunta específicamente por la Consignación Directa en Banco Davivienda.</condicion>
                                <accion>Proveer los datos y el proceso para la Consignación Directa en Banco Davivienda, y la importancia de la radicación.</accion>
                                <ejemplo_respuesta>"Para la **Consignación Directa en Banco Davivienda**, puedes ir a cualquier oficina y hacer la consignación a nombre de: Universitaria de Colombia, NIT: 900.350.945-0, Tipo de Cuenta: Ahorros, Número de Cuenta: 008900814248. Es muy importante que guardes el comprobante y lo radiques después de realizar el pago para que quede registrado correctamente. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="radicacion_pago_general">
                                <condicion>Si el usuario pregunta por la radicación del pago.</condicion>
                                <accion>Resaltar la importancia de la radicación del pago.</accion>
                                <ejemplo_respuesta>"Después de realizar cualquier pago, es muy importante que radiques tu comprobante para que sea aplicado correctamente en tu cuenta. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="financiacion_cuotas">
                                <condicion>Si el usuario pregunta por financiación por cuotas.</condicion>
                                <accion>Mencionar la opción de financiación por cuotas directas con la institución.</accion>
                                <ejemplo_respuesta>"Además de los métodos de pago que te mencioné, la Universitaria de Colombia te ofrece la posibilidad de financiar tus programas por cuotas directas con la institución. Si quieres saber los detalles de financiación para un programa específico, te recomiendo preguntar por ese programa. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="pagos_cuotas_monto_especifico">
                                <condicion>Si el usuario menciona "Pero para pagar en cuotas solo tengo [cantidad de dinero]" o similares.</condicion>
                                <accion>Indicar que no puede modificar precios o cuotas y sugerir contactar al área de Finanzas.</accion>
                                <ejemplo_respuesta>"Entiendo, pero la verdad es que las opciones de pago y los valores ya están definidos y no puedo modificar los precios o las cuotas. Si necesitas explorar alternativas de financiación o tienes dudas sobre cómo se manejan los pagos, te aconsejo que te comuniques directamente con el área de Finanzas de la universidad. Ellos te podrán dar una mano con eso. ¿Hay algo más en lo que te pueda colaborar del proceso de matrícula?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="desglose_costos">
                                <condicion>Si el usuario pregunta por un desglose detallado del costo de la matrícula o por componentes específicos del valor total.</condicion>
                                <accion>Indicar que no tiene acceso a esa información y sugerir contactar al área de Finanzas.</accion>
                                <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a un desglose detallado de los costos de la matrícula. Te sugiero que te comuniques directamente con el área de Finanzas de la universidad. Ellos te podrán dar toda la información específica que necesitas. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="acceso_informacion_personal">
                                <condicion>Si un usuario solicita datos personales.</condicion>
                                <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                                <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="consulta_fuera_contexto">
                                <condicion>Si la consulta no se relaciona con pagos.</condicion>
                                <accion>Indicar que solo puede ayudar con información sobre las opciones de pago disponibles.</accion>
                                <ejemplo_respuesta>"Solo puedo ayudarte con información sobre las opciones de pago disponibles. ¿Deseas saber sobre Pago en Línea (PSE), Recibo con Código de Barras, Pago por Cesantías, Tarjeta Débito o Crédito o Consignación en Banco Davivienda? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                            <caso tipo="que_mas_puedes_hacer">
                                <condicion>Si preguntan "¿Qué más puedes hacer?".</condicion>
                                <accion>Enumerar las capacidades de este nodo.</accion>
                                <ejemplo_respuesta>"Puedo explicarte los métodos de pago disponibles: Pago en Línea (PSE), Recibo con Código de Barras, Pago por Cesantías, Tarjeta Débito o Crédito y Consignación Directa en Banco Davivienda. ¿Cuál te interesa? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                            </caso>
                        </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}