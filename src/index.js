import 'Shared/config';
import Reactor from './Core/Reactor';
import 'Modules/Admins/routes';

const reactor = new Reactor();

//Start the application
reactor.react();