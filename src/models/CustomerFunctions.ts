import inquirer from 'inquirer';
import {carta, pedido} from '../index';
import * as data from '../exampleData';
import {Menu} from './Menu';

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

/**
 * Comandos del cliente
 */
enum SelectMenu {
  menu1 = "Menu 1",
  menu2 = "Menu 2",
  menu3 = "Menu 3",
  menu4 = "Menu 4",
  menu5 = "Menu 5",
  menu6 = "Menu 6",
  menu7 = "Menu 7",
  menu8 = "Menu 8",
  menu9 = "Menu 9",
  menu10 = "Menu 10",
};

/**
 * Comandos del cliente
 */
 enum SelectPlate {
  plato1 = "Plato 1",
  plato2 = "Plato 2",
  plato3 = "Plato 3",
  plato4 = "Plato 4",
  plato5 = "Plato 5",
  plato6 = "Plato 6",
  plato7 = "Plato 7",
  plato8 = "Plato 8",
  plato9 = "Plato 9",
  plato10 = "Plato 10",
};


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

    switch (answers["command"]) {
      case CustomerCommands.showLetter: {
        this.customerShowLetter();
      }
      case CustomerCommands.addMenu: {
        this.customerAddMenu();
      }
      case CustomerCommands.removeMenu: {
        this.customerRemoveMenu();
      }
      case CustomerCommands.addPlate: {
        this.customerAddPlate();
      }
      case CustomerCommands.removePlate: {
        this.customerRemovePlate();
      }
      case CustomerCommands.showCommand: {
        this.customerShowCommand();
      }
      case CustomerCommands.exit: {
        this.customerExit();
      }
    }
  }

  /**
   * Función del cliente para mostrar la carta.
   */
  public async customerShowLetter() {
    console.clear();
    // carta.print();
    inquirer.prompt({
      type: 'input',
      name: 'continue',
      message: 'Pulse enter para continuar',
    });
    this.promptCustomer();
  }

  /**
   * Función del cliente para añadir un menú.
   */
  public async customerAddMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Escoja un menú',
      choices: Object.values(SelectMenu),
    });

    switch (answers["command"]) {
      case SelectMenu.menu1: {
        pedido.push(data.menu1);
      }
      case SelectMenu.menu2: {
        pedido.push(data.menu2);
      }
      case SelectMenu.menu3: {
        pedido.push(data.menu3);
      }
      case SelectMenu.menu4: {
        pedido.push(data.menu4);
      }
      case SelectMenu.menu5: {
        pedido.push(data.menu5);
      }
      case SelectMenu.menu6: {
        pedido.push(data.menu6);
      }
      case SelectMenu.menu7: {
        pedido.push(data.menu7);
      }
      case SelectMenu.menu8: {
        pedido.push(data.menu8);
      }
      case SelectMenu.menu9: {
        pedido.push(data.menu9);
      }
      case SelectMenu.menu10: {
        pedido.push(data.menu10);
      }
    }
    this.promptCustomer();
  }

  /**
   * Función del cliente para eliminar un menú.
   */
  public async customerRemoveMenu() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Eliminar menú del pedido',
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
      message: 'Escoja un menú',
      choices: Object.values(SelectMenu),
    });

    switch (answers["command"]) {
      case SelectPlate.plato1: {
        pedido.push(data.tapaBoquerones);
      }
      case SelectPlate.plato2: {
        pedido.push(data.sopaVerduras);
      }
      case SelectPlate.plato3: {
        pedido.push(data.tapaQuesos);
      }
      case SelectPlate.plato4: {
        pedido.push(data.racionPollo);
      }
      case SelectPlate.plato5: {
        pedido.push(data.sopaPescado);
      }
      case SelectPlate.plato6: {
        pedido.push(data.racionTernera);
      }
      case SelectPlate.plato7: {
        pedido.push(data.Potaje);
      }
      case SelectPlate.plato8: {
        pedido.push(data.racionConejo);
      }
      case SelectPlate.plato9: {
        pedido.push(data.racionPasta);
      }
      case SelectPlate.plato10: {
        pedido.push(data.tapaSerrano);
      }
    }
    this.promptCustomer();
  }

  /**
   * Función del cliente para eliminar un plato.
   */
  public async customerRemovePlate() {
    console.clear();
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'Remover plato del pedido',
      // choices: Object.values(CustomerCommands),
    });
  }

  /**
   * Función del cliente para mostrar el pedido.
   */
  public async customerShowCommand() {
    console.clear();
    console.log(`Pedido: `);
    pedido.forEach((item) => item.print());
    inquirer.prompt({
      type: 'input',
      name: 'continue',
      message: 'Pulse enter para continuar',
    });
    this.promptCustomer();
  }

  /**
   * Función del cliente para salir.
   */
  public async customerExit() {
    console.log(`Vuelva pronto`);
  }
}


