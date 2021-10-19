import http from 'k6/http';
import { check } from "k6";

let r, url, opts;
export let options = {
    stages: [
        { duration: "1s", target: 1},
        { duration: "1s", target: 1 },
        { duration: "1s", target: 0 },
    ],
  };
  export function setup() {
      url = "http://host.docker.internal:8000/services/irn-api/v1/users/test";//"http://lima-staging.factset.com/api-lima/credentials?username=FDSQAF_C&serial=544889";
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
          console.log(res.status);
        //   let token ='';
        //   if(res.status ===200){
        //       token = res.json().firstName
        //   }
        //   return { data:  token};
  }
// export function setup() {
//     url = "http://lima-staging.factset.com/api-lima/credentials?username=FDSQAF_C&serial=544889";
//         let res = http.get(url)
//         console.log(res.status);
//         let token ='';
//         if(res.status ===200){
//             token = res.json().token;
//         }
//         return { data:  token};
// }
export default function (data) {
    // console.log(data);
        // url = "http://lima-staging.factset.com/api-lima/credentials?username=FDSQAN_C&serial=415271";
        // // opts = { };
        // // r = http.request("GET", url, "", opts);
        // // console.log(JSON.stringify(r));

        // let res = http.get(url)
        // console.log(res.status);
        // console.log(JSON.stringify(res.json()));
  
        // check(r, {
        //   "Response Assertion - responce code": (r) => {
        //     return r.status === 200;
        //   },
        //   "Duration Assertion -1.5 min": (r) => {
        //     return r.timings.duration <= 90000;
        //   },
        // });
}

// export default function (data) {
//     if (__VU >= 1 && __VU <= 2) {
//       if (__ITER < 1) {
//         url = "https://my.apps.factset.com/services/irn-app-api/headline/GetHeadlineTableData?startDate=2021-05-01&endDate=2021-10-01&_=1632909265749";
//         opts = {
//           redirects: 999,
//           headers: {
//             'x-datadirect-auth-token': 'fd831da7fba7cbe4',
//             'x-fds-application-client': 'chromium-extension',
//             'x-fds-chrome-extension': 'eeebkinnohkilpighadhmliicniiamcf',
//             'x-lima-aaeadc94-00b6-40d2-a35b-5c5945db4554': 'This is a random header to confirm correct token passing and validation. Only used in staging.',
//             'x-lima-created': '1634117757',
//             'x-lima-expiration': '1634146557',
//             'x-lima-original-serial': 'FDS',
//             'x-lima-original-username': 'BCHALLA',
//             'x-lima-serial': 'FDS',
//             'x-lima-username': 'BCHALLA',
//             'x-lima-userstate': 'INTERNAL',
//             'x-lima-usertype': 'EMPLOYEE',
//             'x-limasig-dsa1024': 'MC0CFQCSJjsAAYW7UtifFq2yhHJwEGgi4gIUEXkXEIxl1IM4IsFMSaiuo5KhTgU=',
//             'X-Requested-With': 'XMLHttpRequest',
//           },
//         };
//         r = http.request("GET", url, "", opts);
  
//         check(r, {
//           "Response Assertion - responce code": (r) => {
//             return r.status === 200;
//           },
//           "Duration Assertion -1.5 min": (r) => {
//             return r.timings.duration <= 90000;
//           },
//         });
//       }
//     }
//   }
  

// let UserToken;
// export function setup() {
//     // let res = http.get('https://lima-staging.factset.com/api-lima/credentials?username=FDSQAF_C&serial=544889');
//     // console.log(res.json());
//     // return { data: res.json() };
//   }
  
//   export function teardown(data) {
//     console.log(JSON.stringify(data));
//   }
  
//   export default function (data) {
//     let res = http.get('https://lima.factset.com/api-lima/credentials?username=FDSQAF_C&serial=544889');
//     console.log(res.json());
//     console.log(JSON.stringify(data));
//   }

// export default function () {
//   http.get('https://test.k6.io');
//   sleep(1);
// }