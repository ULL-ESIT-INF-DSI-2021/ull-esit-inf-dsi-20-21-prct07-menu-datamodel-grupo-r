import inquirer from 'inquirer';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import write from 'lowdb/adapters/FileSync';
import {CustomerFunctions} from './models/CustomerFunctions';
import {ChefFunctions} from './models/ChefFunctions';
import {Menu} from './models/Menu';
import {Plate} from './models/Plate';
import {MenuLetter} from './models/MenuLetter';
import * as data from './exampleData';

export const pedido: (Menu | Plate)[] = [];
export const carta: MenuLetter = new MenuLetter(
    [
      data.plato1,
      data.plato2,
      data.plato3,
      data.plato4,
      data.plato5,
      data.plato6,
      data.plato7,
      data.plato8,
      data.plato9,
      data.plato10,
    ],
    [
      data.menu1,
      data.menu2,
      data.menu3,
      data.menu4,
      data.menu5,
      data.menu6,
      data.menu7,
      data.menu8,
      data.menu9,
      data.menu10,
    ],
);
const customer = new CustomerFunctions();
const chef = new ChefFunctions();

/**
 * Comandos a la entrada de la aplicación.
 */
enum entryCommands {
  customer = "Entrar como cliente",
  chef = "Entrar como chef",
}


async function promptUser() {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Escoja una opción',
    choices: Object.values(entryCommands),
  });

  switch (answers["command"]) {
    case entryCommands.chef: {
      chef.promptChef();
    }
    case entryCommands.customer: {
      customer.promptCustomer();
    }
  }
}


promptUser();
