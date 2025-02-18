import client, {METHODS} from './client';
export const api = {
  auth: {
    login: params =>
      client({
        url: `/login`,
        data: params,
        method: METHODS.POST,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
  },
  event: {
    getEventList: token =>
      client({
        url: `/events-listing`,
        method: METHODS.POST,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
  },
};
