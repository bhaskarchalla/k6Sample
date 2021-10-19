import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        // { duration: "2s", target: 10},
        // { duration: "2s", target: 2},
        // { duration: "1s", target: 0},
    ],
  };
export function setup() {
  // var test = http.get('https://test.k6.io');
  // console.log(JSON.stringify(test));
  // sleep(1);
}
  
export default function () {
  var url = "http://host.docker.internal:8000/services/irn-api/v1/users/test";
      var headers= {
        'x-datadirect-auth-token': '204171325eec1bbd',
        'x-fds-application-client': 'chromium-extension',
        'x-fds-chrome-extension': 'eeebkinnohkilpighadhmliicniiamcf',
        'x-lima-aaeadc94-00b6-40d2-a35b-5c5945db4554': 'This is a random header to confirm correct token passing and validation. Only used in staging.',
        'x-lima-created': '1633087752',
        'x-lima-expiration': '1633116552',
        'x-lima-original-serial': '914661',
        'x-lima-original-username': 'FDSQAR_C',
        'x-lima-serial': '914661',
        'x-lima-username': 'FDSQAR_C',
        'x-lima-userstate': 'CLIENT',
        'x-lima-usertype': 'CLIENT',
        'x-limasig-dsa1024': 'MCwCFFu+t4kgF4dZJthXRDPIjrC0fcgqAhRceRzhh7giHIYLYLsCXlZuES/t2Q==',
        'X-Requested-With': 'XMLHttpRequest',
      }
          let res = http.get(url, {headers: headers});
          console.log(JSON.stringify(res));
          sleep(1);
}