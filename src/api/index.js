import http from '@/request/http.js';

export const getUser = param => {
    return http({
        url: `/api/auth/login`,
        method: 'get',
        params: param
    }).then(res => res.data)
}