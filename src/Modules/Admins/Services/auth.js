import endpoint from 'reactor/endpoint';

export function login(form) {
    return endpoint.post('/login', form, {
        headers: {
            Authorization: 'key SP6YHG56IKLO90MNF4TGAQW23FVBG765'
        }
    });
}