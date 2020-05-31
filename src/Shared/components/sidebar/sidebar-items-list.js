import {DashboardRounded, VerifiedUserSharp, SupervisedUserCircle} from '@material-ui/icons'

export default [
    {
        text: 'Dashboard',
        route: '/',
        icon: DashboardRounded
    },
    {
        text: 'Users',
        icon: VerifiedUserSharp,
        items: [
             {
                text: 'Users List',
                route: '/users',
                icon: SupervisedUserCircle
             }
        ]
            
       
    },
];