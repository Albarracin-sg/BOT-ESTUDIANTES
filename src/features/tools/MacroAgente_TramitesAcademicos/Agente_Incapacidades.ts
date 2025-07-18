import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_Incapacidades(server: McpServer) {
	server.tool(
		"Agente_Incapacidades",
		`
        Devuelve información sobre cómo radicar incapacidades y permisos en la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                        <contexto>
                          Este nodo explica cómo radicar incapacidades, certificaciones laborales y permisos por calamidad/fallecimiento, y qué hacer si la inasistencia excede el límite.
                        </contexto>
                        <proposito>
                          <objetivo>
                            Explicar el procedimiento para presentar excusas médicas (incapacidades), certificaciones laborales, permisos por calamidades domésticas o por fallecimiento de un pariente. Detallar el límite de días de inasistencia permitido y las acciones que el estudiante debe tomar si la inasistencia supera dicho límite, incluyendo la necesidad de un aplazamiento.
                          </objetivo>
                        </proposito>
                        <conocimiento_disponible>
                          <incapacidades_y_permisos_especiales>
                            <presentacion>
                              <documento>Excusa médica original y copia emitida por la EPS.</documento>
                              <destino>Directamente al docente.</destino>
                              <nota>El docente es autónomo de recibirla.</nota>
                            </presentacion>
                            <limite_inasistencia>
                              <dias>No debe superar más de cuatro días de inasistencia.</dias>
                              <consecuencia_si_supera>Si supera este número de días, se considera pérdida por fallas.</consecuencia_si_supera>
                            </limite_inasistencia>
                            <inasistencia_mayor_a_cuatro_dias>
                              <accion_requerida>El estudiante deberá realizar un aplazamiento de módulo o semestre.</accion_requerida>
                              <accion_futura>Cuando desee reintegrarse, deberá hacer la solicitud.</accion_futura>
                              <recordatorio>Este aplazamiento debe estar bajo el rango de las fechas de módulo vigente.</recordatorio>
                            </inasistencia_mayor_a_cuatro_dias>
                            <aplicacion_otros_permisos>
                              <tipo_permiso>Certificaciones laborales.</tipo_permiso>
                              <tipo_permiso>Calamidades domésticas.</tipo_permiso>
                              <tipo_permiso>Muerte de un pariente en primer grado de consanguinidad.</tipo_permiso>
                              <nota>Este mismo procedimiento se repite para estos permisos.</nota>
                            </aplicacion_otros_permisos>
                          </incapacidades_y_permisos_especiales>
                        </conocimiento_disponible>
                        <manejo_consultas>
                          <caso tipo="presentar_incapacidad">
                            <condicion>Si el usuario pregunta cómo presentar una excusa médica o incapacidad.</condicion>
                            <accion>Explicar el procedimiento de presentación al docente y el límite de días.</accion>
                            <ejemplo_respuesta>"Para presentar una excusa médica, debes entregar la original y una copia emitida por tu EPS directamente a tu docente. Ten en cuenta que esta incapacidad no debe superar los cuatro días de inasistencia; si lo hace, se considera pérdida por fallas. ¿Hay algo más en lo que pueda ayudarte sobre las incapacidades?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="limite_dias_inasistencia">
                            <condicion>Si el usuario pregunta por el límite de días de inasistencia por incapacidad o permiso.</condicion>
                            <accion>Indicar el límite de cuatro días y la consecuencia de superarlo.</accion>
                            <ejemplo_respuesta>"La incapacidad o permiso no debe superar más de cuatro días de inasistencia. Si excede este número de días, se considera una pérdida por fallas. ¿Hay algo más en lo que pueda ayudarte sobre las incapacidades?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="inasistencia_mayor_a_cuatro_dias">
                            <condicion>Si el usuario pregunta qué hacer si su inasistencia es mayor a cuatro días.</condicion>
                            <accion>Explicar la necesidad de un aplazamiento y el reintegro posterior.</accion>
                            <ejemplo_respuesta>"Si tu inasistencia es mayor a cuatro días, deberás realizar un aplazamiento de módulo o semestre. Cuando desees reintegrarte, tendrás que hacer la solicitud correspondiente. Recuerda que este aplazamiento debe estar dentro de las fechas vigentes del módulo. ¿Hay algo más en lo que pueda ayudarte sobre las incapacidades?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="otros_permisos">
                            <condicion>Si el usuario pregunta si este procedimiento aplica para otros tipos de permisos (laborales, calamidad, fallecimiento).</condicion>
                            <accion>Confirmar que el procedimiento es el mismo para certificaciones laborales, calamidades domésticas y muerte de un pariente en primer grado de consanguinidad.</accion>
                            <ejemplo_respuesta>"Sí, este mismo procedimiento de presentar el documento directamente al docente y el límite de cuatro días aplica también para certificaciones laborales, calamidades domésticas y permisos por fallecimiento de un pariente en primer grado de consanguinidad. ¿Hay algo más en lo que pueda ayudarte sobre las incapacidades?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como tu interfaz virtual, no tengo acceso a datos personales. Te recomiendo comunicarte directamente con Registro y Control o visitar https://universitariadecolombia.edu.co/ para esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con la radicación de incapacidades o permisos.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre la radicación de excusas médicas e incapacidades y otros permisos especiales en la Universitaria de Colombia. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                          <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo explicarte el proceso para radicar excusas médicas, certificaciones laborales o permisos por situaciones especiales, y qué sucede si tu inasistencia supera los cuatro días permitidos, incluyendo la necesidad de un aplazamiento. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                          </caso>
                        </manejo_consultas>
                        `,
					},
				],
			};
		}
	);
}