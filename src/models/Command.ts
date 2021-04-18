/**
 * Implementa los comandos disponibles en la aplicación.
 * @var id_ Identificador del comando.
 * @var command_ Texto del comando.
 */
export abstract class Command {
  private id_: number;
  private command_: string;

  /**
   * Inicializa los valores del comando.
   * @param id Identificador del comando.
   * @param command Texto del comando a ejecutar.
   */
  constructor(id: number, command: string) {
    this.id_ = id;
    this.command_ = command;
  }

  /**
   * Ejecuta el comando.
   */
  public abstract execute(): void;
}
