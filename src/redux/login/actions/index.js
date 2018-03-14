import {fireAjax} from 'src/services/';
import * as actions from 'Redux/actions';

function loginAsync(data){
  return fireAjax('POST', 'apiJson.php', data);
}

export function login(value) {
  const data = {action: "get_all_search_result", token: null};
  loginAsync(data).then((data) => {
    actions.successSearchData(data);
    console.log(data, typeof data,value, '***********************')
  });
}
