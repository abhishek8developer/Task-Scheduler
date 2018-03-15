import {fireAjax} from 'src/services/';
import * as actions from 'Redux/actions';

function loginAsync(data){
  return fireAjax('POST', 'apiJson.php', data);
}

export function login(value){
  return function(dispatch, getState) {
    const data = {action: "get_all_search_result", token: null};
    loginAsync(data).then((data) => {
      dispatch(actions.successSearchData(data));
    });
  }
}
