import inquirer from 'inquirer';
import {carta} from '../index';

/**
 * Comandos del cliente
 */
enum CustomerCommands {
  showLetter = "Mostrar carta",
  addMenu = "Añadir menú",
  removeMenu = "Eliminar menú",
  addPlate = "Añadir plato",
  removePlate = "Eliminar plato",
  showCommand = "Mostrar pedido",
  exit = "Salir",
}


export class CustomerFunctions {
  /**
   * Muestra el menú del cliente.
   */
  public async promptCustomer() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Bienvenido a nuestro restaurante',
      choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para mostrar la carta.
   */
  public async customerShowLetter() {
    console.clear();
    carta.print();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para añadir un menú.
   */
  public async customerAddMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para eliminar un menú.
   */
  public async customerRemoveMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para añadir un plato.
   */
  public async customerAddPlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para eliminar un plato.
   */
  public async customerRemovePlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para mostrar el pedido.
   */
  public async customerShowCommand() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para salir.
   */
  public async customerExit() {
    console.log(`Vuelva pronto`);
  }
}


