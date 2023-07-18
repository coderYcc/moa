export function queryToken() {
  const userInfo = {
    userName: 'zhanglan%40hq.cmcc',
    password: '3EW*CzHKcsHh%25x74',
    enterType: 'ZHBZ'
  }
  let clientId = 'client'
  let clientSecret = '12354e45-21b4-4f9d-b6aa-fffa0fe7e318'
  let grantType = 'password'
  let url = `http://10.107.213.21:15030/fssc/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}&username=${userInfo.userName}&password=${userInfo.password}`;
  if(userInfo.enterType){
    url += `&enterType=${userInfo.enterType}`
  }
  return fetch(url, {
    method: 'POST'
  });
}