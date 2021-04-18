import inquirer from 'inquirer';

/**
 * Comandos del chef.
 */
 enum ChefCommands {
  addMenu = "Añadir menú",
  removeMenu = "Eliminar menú",
  addPlate = "Añadir plato",
  removePlate = "Eliminar plato",
  showLetter = "Mostrar la carta",
  exit = "Salir"
}


export class ChefFunctions {
  /**
   * Muestra el menú del chef.
   */
  public async promptChef() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Bienvenido a nuestro restaurante',
      choices: Object.values(ChefCommands),
    });
  }

  /**
   * Función del chef para mostrar la carta.
   */
  public async chefShowLetter() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  /**
   * Función del chef para añadir un menú.
   */
  public async chefAddMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  /**
   * Función del chef para eliminar un menú.
   */
  public async chefRemoveMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  /**
   * Función del chef para añadir un plato.
   */
  public async chefAddPlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  /**
   * Función del chef para eliminar un plato.
   */
  public async chefRemovePlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Comandos del chef',
      // choices: Object.values(chefCommands),
    });
  }

  /**
   * Función del chef para salir.
   */
  public async chefExit() {
    console.log(`Vuelva pronto`);
  }
}


