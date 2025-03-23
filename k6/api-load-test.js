
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '10s',
};

export default function () {
  const res = http.get('https://www.google.com/');
  check(res, {
    'status was 200': (r) => r.status === 200,
  });
  sleep(1);
}
