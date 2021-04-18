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

  /** ******************************************************************** **/

  /**
   * Devuelve el id del comando.
   */
  public get id(): number {
    return this.id_;
  }

  /**
   * Cambia el id del comando.
   */
  public set id(newId: number) {
    this.id_ = newId;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el texto del comando.
   */
  public get command(): string {
    return this.command_;
  }

  /**
   * Cambia el texto del comando.
   */
  public set command(newCommand: string) {
    this.command_ = newCommand;
  }

  /** ******************************************************************** **/

  /**
   * Imprime el comando.
   */
  public printCommand(): void {
    console.log(`${this.command_}.`);
  }

  /**
   * Ejecuta el comando.
   */
  public abstract execute(): void;
}
