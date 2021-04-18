import {Command} from './Command';


/**
 * Implementa una colección de comandos.
 * @var commands_ Colección de comandos.
 * @var commandsMap_  Mapa de comandos.
 */
export class CommandCollection {
  private commands_: Command[];
  private commandsMap_: Map<number, Command> = new Map<number, Command>();

  /**
   * Inicializa los atributos.
   * @param commands Comandos de la colección.
   */
  constructor(commands: Command[] = []) {
    this.commands_ = commands;
    this.commands_.forEach((command) => {
      this.commandsMap_.set(command.id, command);
    });
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el array de comandos.
   */
  public get commands(): Command[] {
    return this.commands_;
  }

  /**
   * Cambia el array de comandos.
   */
  public set commands(newCommands: Command[]) {
    this.commands_ = newCommands;
  }

  /** ******************************************************************** **/

  /**
   * Devuelve el mapa de comandos.
   */
  public get commandsMap(): Map<number, Command> {
    return this.commandsMap_;
  }

  /**
   * Cambia el mapa de comandos.
   */
  public set commandsMap(newCommandsMap: Map<number, Command>) {
    this.commandsMap_ = newCommandsMap;
  }

  /** ******************************************************************** **/

  public addCommand(newCommand: Command): number {
    this.commands_.push(newCommand);
    this.commandsMap.set(newCommand.id, newCommand);
    return newCommand.id;
  }

  public getCommandById(id: number): Command | undefined {
    return this.commandsMap_.get(id);
  }

  public getCommandsCount(): number {
    return this.commands_.length;
  }
}
