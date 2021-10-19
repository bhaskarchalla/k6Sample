import http from 'k6/http';
import { sleep } from 'k6';

// export let options = {
//     stages: [
//         { duration: "1s", target: 1},
//         { duration: "2s", target: 2},
//         { duration: "1s", target: 0},
//     ],
//   };
export function setup() {
  var test = http.get('https://test.k6.io');
  console.log(JSON.stringify(test));
  sleep(1);
}
  
export default function () {

}