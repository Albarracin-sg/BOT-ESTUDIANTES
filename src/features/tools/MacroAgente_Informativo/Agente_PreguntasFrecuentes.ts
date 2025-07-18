import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Agente_PreguntasFrecuentes(server: McpServer) {
	server.tool(
		"Agente_PreguntasFrecuentes",
		`
        Devuelve información de preguntas frecuentes de la Universitaria de Colombia.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Este nodo tiene información sobre preguntas frecuentes de la Universitaria de Colombia, como directivos, sedes, becas, sistema modular y modalidad de estudio. (La información detallada sobre los valores de matrícula y becas que corresponderían a "Derechos Pecuniarios 2024" se encuentra dentro de la sección "27. Preguntas Frecuentes de la Institución", específicamente en la pregunta "¿Puedo obtener una beca para estudiar?". Por favor, consulta esa sección para los detalles financieros.)

                    Objetivo: Responder a preguntas generales sobre la universidad, como quiénes son sus directivos, si tiene sedes en otras ciudades, la disponibilidad y el funcionamiento de becas, el sistema modular, y la modalidad de las carreras.

                    Conocimiento Disponible:
                    - ¿Quién es el rector de la Institución? El doctor Guillermo Hoyos Gómez.
                    - ¿Qué hace el señor Carlos Moreno De Caro en la Institución? Él es el fundador de la Institución.
                    - ¿Hay sedes en otras ciudades? No, solo en la ciudad de Bogotá.
                    - ¿Puedes obtener una beca para estudiar? Todos los estudiantes tienen aprobada una beca por el 52% del valor de la matrícula.
                        - Para programas profesionales, el valor con beca es de **$3.600.000**. La excepción es Medicina Veterinaria y Zootecnia, que con beca es **$5.700.000**.
                        - Para especializaciones, el valor con beca es de **$4.650.000**.
                        - Para programas técnico laborales, el valor con beca es de **$1.800.000**.
                        - Para programas técnico laborales de Enfermería y Veterinaria, el valor con beca es de **$1.800.000**.
                    - ¿Cómo funciona el sistema modular? El sistema modular consiste en que el periodo académico se divide en tres módulos. Cada módulo tiene dos asignaturas, con 20 sesiones de dos horas cada una. Al terminar un módulo, hay unos días de descanso que se pueden usar para recuperar alguna clase si la perdiste, pero eso ya depende de tu profesor. Luego, se empiezan las siguientes asignaturas hasta que terminas el periodo académico.
                    - ¿Hay carreras virtuales? Todos los programas de la institución están avalados por el Ministerio de Educación Nacional y están acreditados bajo la modalidad presencial.

                    Manejo de Consultas:
                    - Si preguntan sobre el rector de la institución: El rector de la Institución es el doctor **Guillermo Hoyos Gómez**. ¿Necesitas algo más o tienes otra pregunta?
                    - Si preguntan sobre el rol de Carlos Moreno De Caro: El señor Carlos Moreno De Caro es el **fundador de la Institución**. ¿Necesitas algo más o tienes otra pregunta?
                    - Si preguntan sobre sedes en otras ciudades: No, la verdad es que solo tenemos sede aquí en **Bogotá**. ¿Necesitas algo más o tienes otra pregunta?
                    - Si preguntan sobre becas o costos de matrícula: Todos nuestros estudiantes tienen una beca aprobada del **52% del valor de la matrícula**.
                        * Para los programas **profesionales**, con la beca, estás pagando **$3.600.000**.
                        * La excepción es **Medicina Veterinaria y Zootecnia**, que con la beca queda en **$5.700.000**.
                        * Para las **especializaciones**, el valor con beca es de **$4.650.000**.
                        * Y para los programas **técnico laborales**, incluyendo **Enfermería** y **Veterinaria**, el valor con beca es de **$1.800.000**.
                        ¿Necesitas algo más o tienes otra pregunta?
                    - Si preguntan sobre el funcionamiento del sistema modular: El **sistema modular** funciona así: el periodo académico se divide en **tres módulos**. Cada módulo tiene **dos asignaturas**, y cada una dura **20 sesiones de dos horas**. Cuando terminas un módulo, descansas unos días que también puedes usar para recuperar alguna clase si la perdiste, pero eso ya depende de tu profesor. Después, empiezas con las siguientes asignaturas hasta que acabas el periodo académico. ¿Necesitas algo más o tienes otra pregunta?
                    - Si preguntan sobre la disponibilidad de carreras virtuales: Todos nuestros programas están avalados por el Ministerio de Educación Nacional y son de **modalidad presencial**. ¿Necesitas algo más o tienes otra pregunta?
                    - Si solicitan datos personales del usuario: Como asistente virtual, no tengo acceso a datos personales. Te recomiendo escribir a Registro y Control o visitar https://universitariadecolombia.edu.co/. ¿Necesitas algo más o tienes otra pregunta?
                    - Si la consulta no se relaciona directamente con la información disponible en el nodo: Solo puedo ayudarte con información general de la universidad, como sus directivos, sedes, becas, sistema modular y modalidad de estudio. Si necesitas información sobre otros temas, te recomiendo buscarla por tu cuenta, ya que no tengo acceso a ella. ¿Necesitas algo más o tienes otra pregunta?
                    - Si el usuario pregunta "¿Qué más puedes hacer?": Puedo informarte sobre el rector, el fundador, si hay sedes fuera de Bogotá, los valores de matrícula con beca, cómo funciona el sistema modular y si hay carreras virtuales. ¿Qué te gustaría saber? ¿Necesitas algo más o tienes otra pregunta?
                    `,
					},
				],
			};
		}
	);
}