import 'Shared/config';
import Reactor from './reactor/Reactor';
import 'Modules/Admins/routes';

const reactor = new Reactor();

//Start the application
reactor.react();