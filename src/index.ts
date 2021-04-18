import inquirer from 'inquirer';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import write from 'lowdb/adapters/FileSync';
import {CustomerFunctions} from './CustomerFunctions';
import {ChefFunctions} from './ChefFunctions';

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
