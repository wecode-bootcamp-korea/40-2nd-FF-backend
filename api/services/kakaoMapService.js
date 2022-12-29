const axios = require('axios')

const getStoreInfoByKakao = async(data) => {

    if(!data.query){
        const result = await axios({
            method: 'get',
        url: `https://dapi.kakao.com/v2/local/search/keyword.json`,
        headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    Authorization: 'KakaoAK 20f3b02bf8efd097d3baac0396a2a602'
                },
        params: {
            x: data.x,
            y: data.y,
            radius: data.radius,
            category_group_code: mapEnum.category_group_code,
            sort: mapEnum.sort,
            query: mapEnum.query
        }  
    })
        return result.data.documents
    }
    const result = await axios({
        method: 'get',
        url: `https://dapi.kakao.com/v2/local/search/keyword.json`,
        headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    Authorization: 'KakaoAK 20f3b02bf8efd097d3baac0396a2a602'
                },
        params: {
            x: data.x,
            y: data.y,
            radius: data.radius,
            category_group_code: mapEnum.category_group_code,
            sort: mapEnum.sort,
            query: data.query
        }            
    })
    return result.data.documents
}


const mapEnum = {
    category_group_code: 'FD6',
    sort: 'distance',
    query: '맛집'
}

module.exports = { getStoreInfoByKakao }