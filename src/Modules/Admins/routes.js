import router from "./router";
import Login from "./Components/Login/Login";
import Users from "./Components/Users/Uesrs";
import Guardian from './Components/Users/middleware/guardian';
import ReverseGuardian from './Components/Users/middleware/reverse-guardian';


router.add("/login", Login, ReverseGuardian);
router.add("/users", Users, [Guardian]);
