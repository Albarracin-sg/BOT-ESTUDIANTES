import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function Subagente_FechasPago(server: McpServer) {
	server.tool(
		"Calendario de Pagos 2025 - Universitaria de Colombia",
		`
        Proporciona el cronograma de fechas de pago para el año 2025, organizado por tipo de programa y período de inicio del estudiante.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <contexto>
                        Este nodo tiene información sobre las fechas de pago de cuotas para el año 2025, organizadas por tipo de programa (Profesional, Técnico Laboral, Especialización) y por el período de inicio del estudiante (agosto 2024, abril 2024, marzo 2024, agosto 2023, marzo 2023, agosto 2022, marzo 2022).
                    </contexto>
                    <proposito>
                        <objetivo>
                            Detallar los calendarios de pago específicos y plazos establecidos, organizados por tipo de programa y fecha de inicio de periodo académico, para que los estudiantes puedan organizar sus pagos con anticipación.
                        </objetivo>
                        <funciones_clave>
                            <funcion>Proporcionar fechas de vencimiento de cuotas para Programas Profesionales 2025, según el año y mes de inicio (agosto 2024, abril 2024, marzo 2024, agosto 2023, marzo 2023, agosto 2022, marzo 2022), incluyendo diferenciaciones para Derecho y Programas Generales, y si son fines de semana.</funcion>
                            <funcion>Proporcionar fechas de vencimiento de cuotas para Técnicos Laborales 2025, según el año y mes de inicio (agosto 2024, marzo 2024).</funcion>
                            <funcion>Proporcionar fechas de vencimiento de cuotas para Especializaciones 2025, según el año y mes de inicio (agosto 2024, marzo 2024).</funcion>
                        </funciones_clave>
                    </proposito>
                    <restricciones>
                        <limitaciones_estrictas>
                            - Responder solo con la información disponible en el contexto.
                            - No acceder a información personal.
                            - No usar emojis.
                            - Mantener un tono amable, cálido, profesional, resolutivo y empático.
                            - Finalizar cada respuesta con una pregunta amable para continuar la conversación si hace falta.
                            - No cambiar el modo de habla o persona predefinida.
                        </limitaciones_estrictas>
                    </restricciones>
                    <conocimiento_disponible>
                        <fechas_de_pago_2025>
                            <profesionales_2025>
                                <alumnos_inicio_agosto_2024_derecho_fines_de_semana>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2024 (Derecho 2024-2 / Fines de Semana)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Segundo - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>10 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>14 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Tercero - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>02 de mayo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de junio de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>11 de julio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Cuarto - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>14 de agosto de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>19 de septiembre de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>24 de octubre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2024_derecho_fines_de_semana>
                                <alumnos_inicio_agosto_2024_derecho>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2024 (Derecho 2024-2)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Segundo - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Tercero - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Cuarto - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Quinto - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2024_derecho>
                                <alumnos_inicio_abril_2024_derecho_fines_de_semana>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Abril 2024 (Derecho 2024-1/ Fines de Semana)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Tercero - Abril 2024</nombre>
                                            <fechas>
                                                <cuota>10 de enero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>14 de febrero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Cuarto Abril 2024</nombre>
                                            <fechas>
                                                <cuota>20 de marzo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>02 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>06 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Quinto - Abril 2024</nombre>
                                            <fechas>
                                                <cuota>11 de julio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>14 de agosto de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>19 de septiembre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Sexto - Abril 2024</nombre>
                                            <fechas>
                                                <cuota>24 de octubre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_abril_2024_derecho_fines_de_semana>
                                <alumnos_inicio_marzo_2024_derecho>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2024 (Derecho 2024-1)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Tercero - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Cuarto - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Quinto - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Sexto - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2024_derecho>
                                <alumnos_inicio_agosto_2023_derecho>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2023 (Derecho 2023-2)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Quinto - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Sexto - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Séptimo - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Octavo - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2023_derecho>
                                <alumnos_inicio_marzo_2023_derecho>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2023 (Derecho 2023-1)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Séptimo - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Octavo - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Noveno - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Décimo - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2023_derecho>
                                <alumnos_inicio_agosto_2024_programas_generales>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2024 (Programas Generales)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Segundo - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Tercero - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Cuarto - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Quinto - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2024_programas_generales>
                                <alumnos_inicio_marzo_2024_programas_generales>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2024 (Programas Generales)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Tercero - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Cuarto - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Quinto - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Sexto - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2024_programas_generales>
                                <alumnos_inicio_agosto_2023_programas_generales>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2023 (Programas Generales)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Quinto - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Sexto - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Séptimo - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Octavo - Agosto 2023</nombre>
                                            <fechas>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2023_programas_generales>
                                <alumnos_inicio_marzo_2023_programas_generales>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2023 (Programas Generales)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Sexto - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Séptimo - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Octavo - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Noveno - Marzo 2023</nombre>
                                            <fechas>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>31 de octubre de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>Por definir año 2026: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2023_programas_generales>
                                <alumnos_inicio_agosto_2022_programas_generales>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2022 (Programas Generales)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Octavo - Agosto 2022</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Noveno - Agosto 2022</nombre>
                                            <fechas>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Décimo - Agosto 2022</nombre>
                                            <fechas>
                                                <cuota>24 de julio de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>27 de agosto de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>29 de septiembre de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2022_programas_generales>
                                <alumnos_inicio_marzo_2022_programas_generales>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2022 (Programas Generales)</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Noveno - Marzo 2022</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Décimo - Marzo 2022</nombre>
                                            <fechas>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2022_programas_generales>
                            </profesionales_2025>
                            <tecnicos_laborales_2025>
                                <alumnos_inicio_agosto_2024>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2024</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Segundo - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>10 de marzo de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Tercero - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>14 de abril de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>20 de mayo de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>20 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2024>
                                <alumnos_inicio_marzo_2024>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2024</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Tercero - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>07 de enero de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>06 de febrero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2024>
                            </tecnicos_laborales_2025>
                            <especializaciones_2025>
                                <alumnos_inicio_agosto_2024>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Agosto 2024</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Primero - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>08 de enero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                        <periodo>
                                            <nombre>Segundo - Agosto 2024</nombre>
                                            <fechas>
                                                <cuota>26 de febrero de 2025: Vencimiento Cuota Uno</cuota>
                                                <cuota>29 de abril de 2025: Vencimiento Cuota Dos</cuota>
                                                <cuota>24 de junio de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_agosto_2024>
                                <alumnos_inicio_marzo_2024>
                                    <descripcion>Alumnos de Primer Periodo que Iniciaron en Marzo 2024</descripcion>
                                    <periodos>
                                        <periodo>
                                            <nombre>Segundo - Marzo 2024</nombre>
                                            <fechas>
                                                <cuota>08 de enero de 2025: Vencimiento Cuota Tres</cuota>
                                            </fechas>
                                        </periodo>
                                    </periodos>
                                </alumnos_inicio_marzo_2024>
                            </especializaciones_2025>
                        </fechas_de_pago_2025>
                    </conocimiento_disponible>
                    <manejo_consultas>
                        <caso tipo="cronograma_general_2025">
                            <condicion>Si la pregunta es "¿Podrían proporcionarme el cronograma de fechas de pago para los programas en el año 2025?" o similar.</condicion>
                            <accion>Indicar que solo se tiene información para 2025 y solicitar detalles sobre el tipo de programa y período de inicio.</accion>
                            <ejemplo_respuesta>"Mi información abarca el año 2025. Para proporcionarte el cronograma exacto, necesito que me indiques el **tipo de programa** (profesional, técnico laboral o especialización) y el **período de inicio** para el que requieres las fechas. ¿Podrías proporcionarme esta información?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="calendario_anterior_2025">
                            <condicion>Si el usuario pregunta por un calendario de pagos de un año diferente a 2025 (ej. "Necesito el calendario de pagos 2024.").</condicion>
                            <accion>Indicar que solo se tiene información para 2025 y no para años anteriores.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con las fechas de pago de matrícula para 2025. No tengo información sobre calendarios de pagos de años anteriores. ¿Qué fechas del 2025 te gustaría consultar? ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_agosto_2024_derecho_fines_semana">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en agosto 2024 (Derecho, fines de semana).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Derecho (fines de semana) que iniciaron en Agosto 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Segundo Periodo (Agosto 2024):**
                                * Cuota Uno: 10 de enero de 2025
                                * Cuota Dos: 14 de febrero de 2025
                                * Cuota Tres: 20 de marzo de 2025
                                * **Tercero Periodo (Agosto 2024):**
                                * Cuota Uno: 02 de mayo de 2025
                                * Cuota Dos: 06 de junio de 2025
                                * Cuota Tres: 11 de julio de 2025
                                * **Cuarto Periodo (Agosto 2024):**
                                * Cuota Uno: 14 de agosto de 2025
                                * Cuota Dos: 19 de septiembre de 2025
                                * Cuota Tres: 24 de octubre de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_agosto_2024_derecho">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en agosto 2024 (Derecho general).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Derecho (regular) que iniciaron en Agosto 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Segundo Periodo (Agosto 2024):**
                                * Cuota Uno: 07 de enero de 2025
                                * Cuota Dos: 06 de febrero de 2025
                                * Cuota Tres: 10 de marzo de 2025
                                * **Tercero Periodo (Agosto 2024):**
                                * Cuota Uno: 14 de abril de 2025
                                * Cuota Dos: 20 de mayo de 2025
                                * Cuota Tres: 20 de junio de 2025
                                * **Cuarto Periodo (Agosto 2024):**
                                * Cuota Uno: 24 de julio de 2025
                                * Cuota Dos: 27 de agosto de 2025
                                * Cuota Tres: 29 de septiembre de 2025
                                * **Quinto Periodo (Agosto 2024):**
                                * Cuota Uno: 31 de octubre de 2025
                                * Cuota Dos: Por definir año 2026
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_abril_2024_derecho_fines_semana">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en abril 2024 (Derecho, fines de semana).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Derecho (fines de semana) que iniciaron en Abril 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Tercero Periodo (Abril 2024):**
                                * Cuota Dos: 10 de enero de 2025
                                * Cuota Tres: 14 de febrero de 2025
                                * **Cuarto Periodo (Abril 2024):**
                                * Cuota Uno: 20 de marzo de 2025
                                * Cuota Dos: 02 de mayo de 2025
                                * Cuota Tres: 06 de junio de 2025
                                * **Quinto Periodo (Abril 2024):**
                                * Cuota Uno: 11 de julio de 2025
                                * Cuota Dos: 14 de agosto de 2025
                                * Cuota Tres: 19 de septiembre de 2025
                                * **Sexto Periodo (Abril 2024):**
                                * Cuota Uno: 24 de octubre de 2025
                                * Cuota Dos: Por definir año 2026
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_marzo_2024_derecho">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en marzo 2024 (Derecho general).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Derecho (regular) que iniciaron en Marzo 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Tercero Periodo (Marzo 2024):**
                                * Cuota Tres: 07 de enero de 2025
                                * **Cuarto Periodo (Marzo 2024):**
                                * Cuota Uno: 06 de febrero de 2025
                                * Cuota Dos: 10 de marzo de 2025
                                * Cuota Tres: 14 de abril de 2025
                                * **Quinto Periodo (Marzo 2024):**
                                * Cuota Uno: 20 de mayo de 2025
                                * Cuota Dos: 20 de junio de 2025
                                * Cuota Tres: 24 de julio de 2025
                                * **Sexto Periodo (Marzo 2024):**
                                * Cuota Uno: 27 de agosto de 2025
                                * Cuota Dos: 29 de septiembre de 2025
                                * Cuota Tres: 31 de octubre de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_agosto_2023_derecho">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en agosto 2023 (Derecho general).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Derecho (regular) que iniciaron en Agosto 2023**, estas son las fechas de vencimiento para el 2025:
                                * **Quinto Periodo (Agosto 2023):**
                                * Cuota Dos: 07 de enero de 2025
                                * Cuota Tres: 06 de febrero de 2025
                                * **Sexto Periodo (Agosto 2023):**
                                * Cuota Uno: 10 de marzo de 2025
                                * Cuota Dos: 14 de abril de 2025
                                * Cuota Tres: 20 de mayo de 2025
                                * **Séptimo Periodo (Agosto 2023):**
                                * Cuota Uno: 20 de junio de 2025
                                * Cuota Dos: 24 de julio de 2025
                                * Cuota Tres: 27 de agosto de 2025
                                * **Octavo Periodo (Agosto 2023):**
                                * Cuota Uno: 29 de septiembre de 2025
                                * Cuota Dos: 31 de octubre de 2025
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_marzo_2023_derecho">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en marzo 2023 (Derecho general).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Derecho (regular) que iniciaron en Marzo 2023**, estas son las fechas de vencimiento para el 2025:
                                * **Séptimo Periodo (Marzo 2023):**
                                * Cuota Uno: 07 de enero de 2025
                                * Cuota Dos: 06 de febrero de 2025
                                * Cuota Tres: 10 de marzo de 2025
                                * **Octavo Periodo (Marzo 2023):**
                                * Cuota Uno: 14 de abril de 2025
                                * Cuota Dos: 20 de mayo de 2025
                                * Cuota Tres: 20 de junio de 2025
                                * **Noveno Periodo (Marzo 2023):**
                                * Cuota Uno: 24 de julio de 2025
                                * Cuota Dos: 27 de agosto de 2025
                                * Cuota Tres: 29 de septiembre de 2025
                                * **Décimo Periodo (Marzo 2023):**
                                * Cuota Uno: 31 de octubre de 2025
                                * Cuota Dos: Por definir año 2026
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_agosto_2024_programas_generales">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en agosto 2024 (Programas Generales).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Programas Generales que iniciaron en Agosto 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Segundo Periodo (Agosto 2024):**
                                * Cuota Uno: 07 de enero de 2025
                                * Cuota Dos: 06 de febrero de 2025
                                * Cuota Tres: 10 de marzo de 2025
                                * **Tercero Periodo (Agosto 2024):**
                                * Cuota Uno: 14 de abril de 2025
                                * Cuota Dos: 20 de mayo de 2025
                                * Cuota Tres: 20 de junio de 2025
                                * **Cuarto Periodo (Agosto 2024):**
                                * Cuota Uno: 24 de julio de 2025
                                * Cuota Dos: 27 de agosto de 2025
                                * Cuota Tres: 29 de septiembre de 2025
                                * **Quinto Periodo (Agosto 2024):**
                                * Cuota Uno: 31 de octubre de 2025
                                * Cuota Dos: Por definir año 2026
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_marzo_2024_programas_generales">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en marzo 2024 (Programas Generales).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Programas Generales que iniciaron en Marzo 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Tercero Periodo (Marzo 2024):**
                                * Cuota Dos: 07 de enero de 2025
                                * Cuota Tres: 06 de febrero de 2025
                                * **Cuarto Periodo (Marzo 2024):**
                                * Cuota Uno: 10 de marzo de 2025
                                * Cuota Dos: 14 de abril de 2025
                                * Cuota Tres: 20 de mayo de 2025
                                * **Quinto Periodo (Marzo 2024):**
                                * Cuota Uno: 20 de junio de 2025
                                * Cuota Dos: 24 de julio de 2025
                                * Cuota Tres: 27 de agosto de 2025
                                * **Sexto Periodo (Marzo 2024):**
                                * Cuota Uno: 29 de septiembre de 2025
                                * Cuota Dos: 31 de octubre de 2025
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_agosto_2023_programas_generales">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en agosto 2023 (Programas Generales).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Programas Generales que iniciaron en Agosto 2023**, estas son las fechas de vencimiento para el 2025:
                                * **Quinto Periodo (Agosto 2023):**
                                * Cuota Uno: 07 de enero de 2025
                                * Cuota Dos: 06 de febrero de 2025
                                * Cuota Tres: 10 de marzo de 2025
                                * **Sexto Periodo (Agosto 2023):**
                                * Cuota Uno: 14 de abril de 2025
                                * Cuota Dos: 20 de mayo de 2025
                                * Cuota Tres: 20 de junio de 2025
                                * **Séptimo Periodo (Agosto 2023):**
                                * Cuota Uno: 24 de julio de 2025
                                * Cuota Dos: 27 de agosto de 2025
                                * Cuota Tres: 29 de septiembre de 2025
                                * **Octavo Periodo (Agosto 2023):**
                                * Cuota Uno: 31 de octubre de 2025
                                * Cuota Dos: Por definir año 2026
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_marzo_2023_programas_generales">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en marzo 2023 (Programas Generales).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Programas Generales que iniciaron en Marzo 2023**, estas son las fechas de vencimiento para el 2025:
                                * **Sexto Periodo (Marzo 2023):**
                                * Cuota Dos: 07 de enero de 2025
                                * Cuota Tres: 06 de febrero de 2025
                                * **Séptimo Periodo (Marzo 2023):**
                                * Cuota Uno: 10 de marzo de 2025
                                * Cuota Dos: 14 de abril de 2025
                                * Cuota Tres: 20 de mayo de 2025
                                * **Octavo Periodo (Marzo 2023):**
                                * Cuota Uno: 20 de junio de 2025
                                * Cuota Dos: 24 de julio de 2025
                                * Cuota Tres: 27 de agosto de 2025
                                * **Noveno Periodo (Marzo 2023):**
                                * Cuota Uno: 29 de septiembre de 2025
                                * Cuota Dos: 31 de octubre de 2025
                                * Cuota Tres: Por definir año 2026
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_agosto_2022_programas_generales">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en agosto 2022 (Programas Generales).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Programas Generales que iniciaron en Agosto 2022**, estas son las fechas de vencimiento para el 2025:
                                * **Octavo Periodo (Agosto 2022):**
                                * Cuota Uno: 07 de enero de 2025
                                * Cuota Dos: 06 de febrero de 2025
                                * Cuota Tres: 10 de marzo de 2025
                                * **Noveno Periodo (Agosto 2022):**
                                * Cuota Uno: 14 de abril de 2025
                                * Cuota Dos: 20 de mayo de 2025
                                * Cuota Tres: 20 de junio de 2025
                                * **Décimo Periodo (Agosto 2022):**
                                * Cuota Uno: 24 de julio de 2025
                                * Cuota Dos: 27 de agosto de 2025
                                * Cuota Tres: 29 de septiembre de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_profesional_marzo_2022_programas_generales">
                            <condicion>Si el usuario pregunta por las fechas de pago para profesionales que iniciaron en marzo 2022 (Programas Generales).</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Programas Generales que iniciaron en Marzo 2022**, estas son las fechas de vencimiento para el 2025:
                                * **Noveno Periodo (Marzo 2022):**
                                * Cuota Dos: 07 de enero de 2025
                                * Cuota Tres: 06 de febrero de 2025
                                * **Décimo Periodo (Marzo 2022):**
                                * Cuota Uno: 10 de marzo de 2025
                                * Cuota Dos: 14 de abril de 2025
                                * Cuota Tres: 20 de mayo de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_tecnico_laboral_agosto_2024">
                            <condicion>Si el usuario pregunta por las fechas de pago para técnicos laborales que iniciaron en agosto 2024.</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Técnico Laboral que iniciaron en Agosto 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Segundo Periodo (Agosto 2024):**
                                * Cuota Uno: 07 de enero de 2025
                                * Cuota Dos: 06 de febrero de 2025
                                * Cuota Tres: 10 de marzo de 2025
                                * **Tercero Periodo (Agosto 2024):**
                                * Cuota Uno: 14 de abril de 2025
                                * Cuota Dos: 20 de mayo de 2025
                                * Cuota Tres: 20 de junio de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_tecnico_laboral_marzo_2024">
                            <condicion>Si el usuario pregunta por las fechas de pago para técnicos laborales que iniciaron en marzo 2024.</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Técnico Laboral que iniciaron en Marzo 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Tercero Periodo (Marzo 2024):**
                                * Cuota Dos: 07 de enero de 2025
                                * Cuota Tres: 06 de febrero de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_especializacion_agosto_2024">
                            <condicion>Si el usuario pregunta por las fechas de pago para especializaciones que iniciaron en agosto 2024.</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Especialización que iniciaron en Agosto 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Primero Periodo (Agosto 2024):**
                                * Cuota Tres: 08 de enero de 2025
                                * **Segundo Periodo (Agosto 2024):**
                                * Cuota Uno: 26 de febrero de 2025
                                * Cuota Dos: 29 de abril de 2025
                                * Cuota Tres: 24 de junio de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_especializacion_marzo_2024">
                            <condicion>Si el usuario pregunta por las fechas de pago para especializaciones que iniciaron en marzo 2024.</condicion>
                            <accion>Listar las fechas de vencimiento de cuotas para ese grupo.</accion>
                            <ejemplo_respuesta>"Para los **alumnos de Especialización que iniciaron en Marzo 2024**, estas son las fechas de vencimiento para el 2025:
                                * **Segundo Periodo (Marzo 2024):**
                                * Cuota Tres: 08 de enero de 2025
                            ¿Necesitas algo más o tienes otra pregunta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="solicitud_informacion_personal">
                            <condicion>Si el usuario solicita acceso a datos personales.</condicion>
                            <accion>Indicar que no se tiene acceso y redirigir a un contacto humano o sitio web.</accion>
                            <ejemplo_respuesta>"Como asistente, no tengo acceso a tus datos personales. Te recomiendo comunicarte directamente con el área de Cartera o Tesorería o visitar https://universitariadecolombia.edu.co/ para obtener esa información. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="consulta_fuera_contexto">
                            <condicion>Si la consulta no se relaciona directamente con el calendario de pagos.</condicion>
                            <accion>Aclarar el alcance de la información disponible en este nodo.</accion>
                            <ejemplo_respuesta>"Solo puedo ayudarte con información sobre las fechas de pago de cuotas para los programas de la Universitaria de Colombia en el año 2025. ¿Deseas ayuda con otro trámite o consulta?"</ejemplo_respuesta>
                        </caso>
                        <caso tipo="que_mas_puedes_hacer">
                            <condicion>Si el usuario pregunta "¿Qué más puedes hacer?".</condicion>
                            <accion>Enumerar las capacidades de este nodo.</accion>
                            <ejemplo_respuesta>"Puedo proporcionarte las fechas de pago de las cuotas para los programas profesionales, técnicos laborales y especializaciones de la Universitaria de Colombia para el año 2025, organizadas según el mes y año en que iniciaste tus estudios. ¿Qué tipo de programa te interesa consultar?"</ejemplo_respuesta>
                        </caso>
                    </manejo_consultas>
                    `,
					},
				],
			};
		}
	);
}