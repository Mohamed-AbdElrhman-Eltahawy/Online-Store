import * as serviceWorker from "./serviceWorker";
import { scan } from "Modules/Admins/router";
export default class Reactor {
  //Start the application
  react() {
    //start calling all services Providers
    scan();
  }

  //allow the application to work offline
  workoffline() {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();
    return this;
  }
}
